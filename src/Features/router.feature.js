import { NavMenu } from "../Components/nav.component.js";

class Router {

    init() {
        
        window.addEventListener('load', (e) => {
            this.nav("/", false);
        })

        window.addEventListener('popstate', (e) => {
            this.nav(e.state.route, false);
        });

        document.querySelectorAll('nav-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = e.target.getAttribute('href');
                this.nav(route);
            })
        });
    }

    nav(route, addToHistory = true) {

        const routing = new NavMenu;
        // const path = window.location.pathname.slice(0, -1);

        if (addToHistory) {
            // console.log(route);
            history.pushState({route}, null, route)
        }
        
        routing.importComponent(route);
    }
};

export default Router;