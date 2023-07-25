// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-ja="answer"]');

// ADD Toggle functionality to bookmark button:
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// ADD Toggle functionality to answer button:
answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer");
});
