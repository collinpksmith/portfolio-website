const viewMoreButton = document.querySelector("#view-more");
const viewLessButton = document.querySelector("#view-less");
const extraCertifications = document.querySelector("#extra-certification");

viewMoreButton.addEventListener("click", toggleMore);
viewLessButton.addEventListener("click", toggleMore);

function toggleMore() {
  extraCertifications.classList.toggle("visually-hidden");
  viewMoreButton.classList.toggle("visually-hidden");
  viewLessButton.classList.toggle("visually-hidden");
}
