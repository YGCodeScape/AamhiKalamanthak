// // page 2 function
function scrollToTopShow() {
    window.addEventListener("scroll", () => {
    const scrollBtn = document.querySelector(".scroll-top-btn");
    if(window.scrollY > 300) {
       scrollBtn.classList.add("show");
    }
    else {
      scrollBtn.classList.remove("show");
    }
  })
}
scrollToTopShow();
// scroll to top
function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}