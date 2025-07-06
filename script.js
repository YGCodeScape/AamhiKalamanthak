var menu = document.querySelector(".menu-icon")



gsap.to(".nav-li a", {
    // yPercent: -100,
    // opacity: 0,
    duration: 0.2,
        color: "#bc6c25",
    // stagger: 0.05,           // little cascade, optional
    scrollTrigger: {
      trigger: "header",     // element whose position we watch
      start: "top top",      // when header’s top meets viewport top
      end: "top -10%",       // 10 % further up the page
      scrub: true,
    //   markers: true   
    }
});

gsap.to(".menu i", {
    color: "#bc6c25",
    duration: 1.5,
    delay: 1,
    scrollTrigger: {
      trigger: "header",     // element whose position we watch
      start: "top top",      // when header’s top meets viewport top
      end: "top -10%",       // 10 % further up the page
      scrub: true,
    //   markers: true   
    }
});


function svgPathChanger() {
  
/* -------- 1. all the paths in one place -------- */
const SVG_PATHS = {
  default: 'M 2 -6 Q -55 306 -1 603 Q 0 604 800 605 L 803 -7 Z',
  lg:      'M 50 -66 Q -19 249 74 548 Q 76 548 555 546 L 557 -66 Z',   // 768‑1024
  md:      'M 69 -57 Q -21 231 74 548 Q 76 548 555 546 L 550 -56 Z',   // 1025-1280
  xl:      'M 89 -180 Q -38 219 77 603 Q 77 603 800 605 L 800 -177 Z'       // 1281–1440
};

/* -------- 2. throttle so resize isn’t chatty ---- */
function throttle(fn, wait = 150) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
}

/* -------- 3. pick the right path ---------------- */
function applyResponsivePath() {
  const w = window.innerWidth;
  const pathEl = document.querySelector('.svg-screen1 > path');
  
  let d = SVG_PATHS.default;               // desktop default
   if (w >= 768 && w <= 1024) d = SVG_PATHS.lg;
   else if (w >= 1025 && w <= 1280) d = SVG_PATHS.md;
   else if (w >= 1281 && w <= 1440) d = SVG_PATHS.xl;
  pathEl.setAttribute('d', d);
}

/* -------- 4. run on load + on resize ------------- */
document.addEventListener('DOMContentLoaded', applyResponsivePath);
window.addEventListener('resize', throttle(applyResponsivePath));
}

svgPathChanger();