function handleLeftClick() {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 320;
}
function handleRightClick() {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 320;
}
function handleScrollEvent(event) {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
}

let shevronLeft = document.querySelector(".fa-chevron-left");
shevronLeft.addEventListener("click", handleLeftClick);

let shevronRight = document.querySelector(".fa-chevron-right");
shevronRight.addEventListener("click", handleRightClick);

let scrollContainer = document.querySelector(".scroll-gallery");
