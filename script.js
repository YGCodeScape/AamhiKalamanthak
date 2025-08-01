var menu = document.querySelector(".menu-icon");
var closeI = document.querySelector(".close");
var menuItems = document.querySelectorAll(".menu-tag a")

var tl = gsap.timeline();
var navtl = gsap.timeline();

function navigationAnimation() {

  navtl.from(".header", {
     height: 0,
     duration: 1.1,
     opacity: 0,
  })
  navtl.from(".word-mark", {
     x : -150,
     duration: 0.5,
     opacity: 0,
  })
  navtl.from(".menu-icon", {
      y: -150,
      duration: 0.3,
      stagger: 0.2,
      opacity: 0,
  })
  navtl.from(".nav-hold h4", {
      y: -150,
      duration: 0.6,
      stagger: 0.2,
      opacity: 0,
  })
  navtl.from(".author-img-sec", {
     opacity: 0,
     duration: 0.5,
     scale: 0,
  })
}
// navigationAnimation();

// menu bar animation
function menuTlAnimation() {
    // Set menu off-screen and hidden before animation starts
    tl.set(".menu", {
        right: "-100%",
        opacity: 0,
        pointerEvents: "none"
    });

    tl.to(".menu", {
       right: "-4%",
       opacity: 1,
       pointerEvents: "auto",
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

// poem section animation
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
// ShowcaseSlider();

//---------------spite text
const quotes = document.querySelectorAll(".hero-left .hero-title");

function setupSplits() {
  leftText = gsap.timeline();

  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = SplitText.create(quote, {
      type: "words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = leftText.from(quote.split.chars, {
      opacity: 0,
      duration: 0.4,
      ease: 'circ.inOut',
      x: -80,
      stagger: 0.05,
    });

      const split2 = SplitText.create(".hero-p", {
     type: "lines"
  });
  // Animate lines
  leftText.from(split2.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.25
  });

  });
    leftText.from(".sub-text", {
    opacity: 0,
    duration: 0.4,
    scale: 0
  })
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
// ------------------
