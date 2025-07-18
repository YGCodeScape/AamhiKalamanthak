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

function searchBar() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('searchInput');
    const searchContainer = document.getElementById('search-container');
    const logo = document.getElementById('logo');

    searchIcon.addEventListener('click', function(e) {
         e.stopPropagation();
         searchBar.classList.add('active');
         searchBar.focus();
         searchIcon.style.opacity = '0';
         if(window.innerWidth <= 768) {
             logo.classList.add('hide-logo'); 
          }
     });

    document.addEventListener('click', function(e) {
       if (!searchContainer.contains(e.target)) {
             searchBar.classList.remove('active');
             searchBar.blur();
             searchIcon.style.opacity = '1';
             logo.classList.remove('hide-logo');
        }
    });
}
searchBar();

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


  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const poems = document.querySelectorAll(".poem-frame");

    poems.forEach((poem) => {
      const title = poem.querySelector(".poem-title").innerText.toLowerCase();

      // Check if query is in title or poem text
      if (title.includes(query)) {
          poem.style.display = "block";
      } else {
         poem.style.display = "none";
      }
    });
  });