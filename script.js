var menu = document.querySelector(".menu-icon");
var closeI = document.querySelector(".close");
var menuItems = document.querySelectorAll(".menu-tag a")

var tl = gsap.timeline();

gsap.to(".nav-tag ", {
    yPercent: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.05,
    scrollTrigger : {
        trigger: "header",
        start: "top top",
        end: "top -10%",
        scrub: true,
        // markers: true
    }
})

gsap.to(".word-mark img", {
    width: "100px",
    height: "100px",
    x: "-20px",
    duration: 0.1,
    scrollTrigger : {
        trigger: ".hero-sec",
        start: "bottom bottom",
        scrub: true,
        // markers: true
    }
})

// Check if the screen width is 480px or less
if (window.matchMedia("(max-width: 480px)").matches) {
  gsap.to("nav", {
    duration: 0.4,
    backgroundColor: "#fdebbcf5",
    backdropFilter: "blur(10px)",
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "top -10%",
      scrub: true,
      // markers: true
    }
  });
}


tl.from(".menu", {
    right: "-100%",
    duration: 0.6,
})

tl.from(".menu h4", {
    x : 150,
    duration: 0.4,
    stagger : 0.2,
    opacity: 0,
})
tl.from(".menu i", {
    opacity: 0,
})

tl.pause()

menu.addEventListener("click", function() {
    tl.play();
})
closeI.addEventListener("click", function(){
    gsap.to(".menu .close", {
        rotate: "+=90",
        duration: 0.3,
        ease: "power2.out"
    })
    tl.reverse();
})

menuItems.forEach(item => {
  item.addEventListener("click", () => tl.reverse());
});



// cursor script
// function pageCursor() {
//     document.addEventListener("mousemove", function(para) {
//         gsap.to(".cursor", {
//             left: para.x,
//             top: para.y,
//         })
//     })
//     document.querySelector(".poem-container").addEventListener
//         ("mouseenter", function() {
//           gsap.to(".cursor",{
//             transform: "translate(-50%, -50%) scale(1)",
//         })
//     })
//     document.querySelector(".poem-container").addEventListener
//         ("mouseleave", function() {
//           gsap.to(".cursor",{
//             transform: "translate(-50%, -50%)",
//             scale: 0,
//         })
//     })
// }
// pageCursor();