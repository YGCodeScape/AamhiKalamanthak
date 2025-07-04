gsap.to(".nav-li", {
    yPercent: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.05,           // little cascade, optional
    scrollTrigger: {
      trigger: "header",     // element whose position we watch
      start: "top top",      // when header’s top meets viewport top
      end: "top -10%",       // 10 % further up the page
      scrub: true,
    //   markers: true   
    }   
});

