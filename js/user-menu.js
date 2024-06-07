const userButton = document.querySelector("#user-btn");
const userContainer = document.querySelector("#user-sub");

let timer;

const onButtonClick = () => {
  userContainer?.classList.toggle("isActive");
  if (userContainer?.classList.contains("isActive")) {
    userContainer?.addEventListener("mouseleave", onLeave);
  }

};

const onSubMenuClick = () => {
  userContainer?.classList.remove("isActive");
  userContainer.removeEventListener("mouseleave", onLeave);
};

const onFocus = () => {
  clearTimeout(timer);
};

const onLeave = () => {
  timer = setTimeout(() => userContainer?.classList.remove("isActive"), 1000);
}

const initUser = () => {

  userContainer?.addEventListener("mouseenter", onFocus);
  userButton?.addEventListener("click", onButtonClick);
  userContainer.addEventListener("click", onSubMenuClick);
};

export { initUser };
