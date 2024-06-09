import { iosVhFix } from "./utils/ios-vh-fix.js";
import { initBurgerMenu } from "./modules/initBurgerMenu.js";
import { initCollapseMenu } from "./modules/initCollapseMenu.js";
import { initUserMenu } from "./modules/initUserMenu.js";
import { initCounters } from "./modules/setCounters.js";
import { initMenu } from "./modules/initMenu.js";
import { initErrorButton } from "./modules/initErrorButton.js";


iosVhFix();

initBurgerMenu();
if (window.screen.availWidth > 750) {
  initCollapseMenu();
  initUserMenu();
  initErrorButton();
}

initCounters();
initMenu();
