var menu = document.querySelector(".menu-icon");
var closeI = document.querySelector(".close");
var menuItems = document.querySelectorAll(".menu-tag a")

var tl = gsap.timeline();


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


// poem focus model
function poemModelFocus() {
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
}
poemModelFocus();
// -----------------------

function ShowcaseSlider() {

// Check screen width and set start position accordingly
const isSmallScreen = window.innerWidth <= 380;
const startValue = isSmallScreen ? "top -100" : "top 50";

const cards = document.querySelectorAll(".slider-card");

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-slider-section",
    start: startValue,
    end: "+=" + (cards.length * 500),  // adjust scroll distance
    scrub: true,
    pin: true,
    // markers: true
  }
});


cards.forEach((card, i) => {
  timeline.fromTo(card,
    {
      opacity: 0,
      x: 300,
      rotate: -30,
      scale: 0.95,
      zIndex: i
    },
    {
      opacity: 1,
      x: 0,
      rotate: 0,
      duration: 1,
      scale: 1,
      ease: "power2.out"
    },
    i * 1
  );
});
}
ShowcaseSlider();