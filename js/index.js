import { initBurgerMenu } from "./initBurgerMenu.js";
import { initCollapseMenu } from "./initCollapseMenu.js";
import { initUserMenu } from "./initUserMenu.js";
import { setCounters } from "./setCounters.js";
import { initMenu } from "./initMenu.js";
import { initErrorButton } from "./initErrorButton.js";

window.addEventListener('load', () => {

  initBurgerMenu();

  if (window.screen.availWidth > 750) {
    initCollapseMenu();
    initUserMenu();
    initErrorButton();
  }

  setCounters();
  initMenu();

});

