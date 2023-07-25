// phew… not a lot going on here. Please add some code!
const toggleBookmarkButton = document.querySelector('[data-js="bookmark"]');

toggleBookmarkButton.addEventListener("click", () => {
  toggleBookmarkButton.classList.toggle("bookmark--active");
});
