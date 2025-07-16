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

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('searchInput');
const searchContainer = document.getElementById('search-container');

searchIcon.addEventListener('click', function(e) {
  e.stopPropagation();
  searchBar.classList.add('active');
  searchBar.focus();
  searchIcon.style.opacity = '0';
});

document.addEventListener('click', function(e) {
  if (!searchContainer.contains(e.target)) {
       searchBar.classList.remove('active');
       searchBar.blur();
       searchIcon.style.opacity = '1'
  }
});;