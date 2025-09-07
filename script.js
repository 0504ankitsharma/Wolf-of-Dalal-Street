var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
var isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches

if (!prefersReduced && !isCoarsePointer && crsr && blur) {
    document.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
        blur.style.left = dets.x-250+"px"
        blur.style.top = dets.y-250+"px"
    }, { passive: true })
}

if (!prefersReduced && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#nav",{
        backgroundColor: "#000",
        duration:0.5,
        height: "80px",
        scrollTrigger:{
            trigger:"#nav",
            scroller: "body",
            // markers: true,
            start:"top -10%",
            end:"top -11%",
            scrub: 2
        }
    })

    gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:"#main",
            scroller: "body",
            // markers: true,
            start:"top -25%",
            end:"top -70%",
            scrub: 2
        }
    })
}
