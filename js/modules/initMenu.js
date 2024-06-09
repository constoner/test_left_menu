const menuItems = Array.from(document.querySelectorAll(".menu__item"));

const subMenus = Array.from(menuItems).map((item) => {
  return item.querySelector("[data-sub*='sub-']") && item.querySelector("[data-sub*='sub-']");
});

let prev = null;

const activateItem = (evt, index) => {
  evt.stopPropagation();
  evt.preventDefault();

  const targetNode = evt.target.nodeName;

  if (window.screen.availWidth <= 750 && prev === index && !subMenus[index].contains(evt.target)) {
    subMenus[index]?.classList.toggle("isActive");
    prev = null;
  } else {
    subMenus[prev]?.classList.toggle("isActive");
    prev = index;
    subMenus[index]?.classList.toggle("isActive");
  }
};

const initMenu = () => {
  menuItems.forEach((item, index) => {
    if (window.screen.availWidth > 750) {
      item.addEventListener("mouseenter", (evt) => activateItem(evt, index));
    } else {
      item.addEventListener("click", (evt) => activateItem(evt, index));
    }

    item.querySelector(".menu__link").addEventListener("keypress", (evt) => {
      if (evt.code === "Space") {
        activateItem(evt, item)
      }
    });
  });

  document.documentElement.addEventListener("click", (evt) => {
    evt.stopPropagation();

    subMenus.forEach((menu) => {
      if (menu && menu.classList.contains("isActive")) {
        menu.classList.remove("isActive");
        prev = null;
      }
    })
  });
}

export { initMenu };
