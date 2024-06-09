import { fillErrorMesage } from "../mockup/mockup.js";

const errorButton = document.querySelector("#error-button");

const onErrorButtonClick = (evt) => {
  evt.stopPropagation();
  fillErrorMesage(); // моковая функция для вывода ошибки
};

const initErrorButton = () => {
  errorButton.addEventListener("click", onErrorButtonClick);
};

export { initErrorButton };
