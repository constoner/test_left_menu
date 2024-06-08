const userButton = document.querySelector("#user-btn");
const userContainer = document.querySelector("#user-sub");

const toggleMenu = () => {
  userContainer?.classList.toggle("isActive");
}

document.documentElement.addEventListener("click", () => {
  if (userContainer.classList.contains("isActive")) {
    toggleMenu();
  }
});

const initUser = () => {

  userButton?.addEventListener("click", (evt) => {
    evt.stopPropagation();
    toggleMenu();
  });
  userContainer.addEventListener("click", toggleMenu);
};

export { initUser };
