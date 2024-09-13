import Router from "./Modules/router.module.js";
import './Components/nav.component.js';



window.addEventListener('DOMContentLoaded', () => {
    window.app = {}
    app.router = new Router;
    app.router.init();
})