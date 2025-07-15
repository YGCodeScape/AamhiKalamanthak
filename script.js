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


function wordMark() {
    ScrollTrigger.matchMedia({

  // Default screens — allow animation
  "(min-width: 481px)": function () {
    gsap.to(".word-mark img", {
      width: "100px",
      height: "100px",
      x: "-20px",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".hero-sec",
        start: "bottom bottom",
        scrub: true,
        // markers: true
      }
    });
  },

  // Small screens — skip the animation
  "(max-width: 480px)": function () {
  }
});

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
}
wordMark();

function menuTlAnimation() {
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

}
menuTlAnimation();


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


// poem focus model
const modal = document.getElementById("poemModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeModal");

// Add click event to all read-more buttons
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", function () {
    const poemCard = this.closest(".poem-holder") || this.closest(".f-poem-hold");

    const title = poemCard.querySelector(".PoemTitle").innerText;
    const content = poemCard.querySelector(".PoemContent").innerText;

    modalTitle.innerText = title;
    modalContent.innerText = content; 

    modal.style.display = "flex";
        document.body.classList.add("modal-open");
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Close on click outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
