const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // SUPPRESS DEFAULT OF THE SUMBIT-EVENT:
  event.preventDefault();

  // EXTRACT THE DATA FROM THE FORM:
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //   console.log(data);
  //   console.log(data.tag);
  const newQuestion = data.question;
  const newAnswer = data.answer;
  const newTag = data.tag;

  // CREATE NEW CARD WITH HMTL-ELEMENTS:
  const newCard = document.createElement("ul");

  // ADD CSS-CLASSES:
  newCard.classList.add("card-list");

  // INSERT DATA FROM THE FORM TO THE NEW CARD VIA INNER.HTML:
  newCard.innerHTML = `<li class="card-list__item">
  <article class="card">
    <h2 class="card__question">
      ${newQuestion}
    </h2>
    <button
      class="card__button-answer"
      type="button"
      data-js="answer-button"
    >Show answer
    </button>
    <p class="card__answer" data-ja="answer">${newAnswer}</p>
    <ul class="card__tag-list">
      <li class="card__tag-list-item">${newTag}</li>
    </ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>
</li>`;

  // APPEND NEW CARD TO THE FORM:
  document.body.append(newCard);
});
