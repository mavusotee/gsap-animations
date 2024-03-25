document.addEventListener('DOMContentLoaded', () => {


    gsap.to('.img2',{
        scale: 1.05,
        delay: 1,
        duration: 1.1,
    })

    gsap.from('.img1',{
        opacity: 1,
        y: '100%',
        duration: 1.5,
        delay: 2.3,
        ease: "power4.inOut",
    })

    
    gsap.from('.img3',{
        opacity: 1,
        y: '100%',
        duration: 1.5,
        delay: 2.3,
        ease: "power4.inOut",
    })

    gsap.from('.header',{
       opacity: 0,
       y: "100%",
       duration: 1,
       delay: 4.2,
       ease: "power1.inOut",
    })

    gsap.to('.nav',{
        opacity: 1,
        duration: 1,
        delay: 5.5,
        ease: "power2.inOut",
    })
})