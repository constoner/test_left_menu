function initCollapseMenu() {
  const menuPanel = document.querySelector("#menu");
  const collapseButton = document.querySelector("#collapse-btn");
  const collapseToggle = document.querySelector("#collapse-tgl");

  const onButtonClick = () => {
    menuPanel.classList.toggle("isCollapsed");
  };

  const onToggleClick = () => {

    // место для функции сохранения настройки пользователя

    if (collapseToggle.checked) {
      collapseButton.removeEventListener("click", onButtonClick);
    } else {
      collapseButton.addEventListener("click", onButtonClick);
    }
  }

  collapseButton.addEventListener("click", onButtonClick);
  collapseToggle.addEventListener("change", onToggleClick);
}

export { initCollapseMenu };
