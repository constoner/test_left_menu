const burgerButton = document.querySelector("#burger");
const menuPanel = document.querySelector("#menu");

const toggleMenu = (evt) => {
  evt.stopPropagation();

  menuPanel.classList.toggle("isOpened");
  burgerButton.classList.toggle("isOpened");
}

document.documentElement.addEventListener("click", (evt) => {
  if (menuPanel.classList.contains("isOpened")) {
    toggleMenu(evt);
  }
});

const initBurgerMenu = () => {
  burgerButton.addEventListener("click", (evt) => toggleMenu(evt));


};

export { initBurgerMenu };
