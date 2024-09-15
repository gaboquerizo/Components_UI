import Router from "./Features/router.feature.js";  // URL Routing
import './Components/nav.component.js';             // Sidebar menu
import './Features/theme-mode.feature.js'           // Dark Mode Theme

const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

/*—————————— Routing URL ——————————*/

window.addEventListener('DOMContentLoaded', () => {
    window.app = {}
    app.router = new Router;
    app.router.init();
})

/*—————————— Media Query ——————————*/

let screenWidth = window.matchMedia('(max-width: 900px)');
const MENU_TOGGLE = $('[data-nav-toggle] input');

if (screenWidth.matches) {
  MENU_TOGGLE.checked = true;
} else {
  MENU_TOGGLE.removeAttribute("checked");
}