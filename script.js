// Random movie picker: collects every movie title on the page and shows one at random
const pickBtn = document.getElementById("pickBtn");
const pickResult = document.getElementById("pickResult");

pickBtn.addEventListener("click", function () {
  const titles = document.querySelectorAll(".movie-item h3, .card-title");
  const randomIndex = Math.floor(Math.random() * titles.length);
  pickResult.textContent = titles[randomIndex].textContent;
});