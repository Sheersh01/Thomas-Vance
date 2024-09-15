const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector('img')
    let tl = gsap.timeline()
    let xtransform = gsap.utils.random(-100, 100)
    tl.set(image, { transformOrigin: `${xtransform < 0 ? 0 : '100%'}` }, 'a')
        .to(image, {
            scale: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: image,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }, 'a')
        .to(elem, {
            xPercent: xtransform,
            ease: 'none',
            scrollTrigger: {
                trigger: elem,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        }, 'a')
})