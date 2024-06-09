const menuItems = document.querySelectorAll(".menu__item");
const subMenus = document.querySelectorAll("[data-sub*='sub-']");

let currentSubMenu = null;

const onLinkHover = (item) => {
  currentSubMenu?.classList.remove("isActive");
  currentSubMenu = item.querySelector("[data-sub*='sub-']");
  currentSubMenu?.classList.add("isActive");
};

const initMenu = () => {
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => onLinkHover(item));
    item.querySelector(".menu__link").addEventListener("keypress", (evt) => {
      if (evt.code === "Space") {
        onLinkHover(item)
      }
    });
  });

  document.documentElement.addEventListener("click", () => {
    subMenus.forEach((menu) => {
      if (menu.classList.contains("isActive")) {
        menu.classList.remove("isActive");
      }
    })
  });
}

export { initMenu };
