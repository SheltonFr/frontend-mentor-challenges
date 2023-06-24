(() => {
  const cardRatings = document.querySelectorAll(".card")[0];
  const cardThank = document.querySelectorAll(".card")[1];
  const ratings = document.querySelectorAll(".stars li");
  const button = document.querySelector("button");
  const range = [1, 2, 3, 4, 5];
  const spanRating = document.querySelector("#selected-rating");

  ratings.forEach((rating) => {
    rating.addEventListener("click", (event) => {
      ratings.forEach((r) => r.removeAttribute("data-selected"));

      event.target.dataset.selected = "";
    });
  });

  button.addEventListener("click", (event) => {
    let rating = parseInt(
      document.querySelector("[data-selected]").dataset.value
    );

    if (!range.includes(rating)) {
      return;
    }

    cardRatings.classList.add("hidden");
    cardThank.classList.remove("hidden");

    spanRating.textContent = rating;
  });
})();
