export class NavMenu extends HTMLElement {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove()
    }

    connectedCallback() {
        this.renderComponent()
        this.initComponent()
    }

    renderComponent() {
        this.innerHTML = `
            <style>${this.templateCSS()}</style>
            ${this.templateHTML()}
        `;
    }

    templateHTML(){
        return /*HTML*/ `
            <nav data-nav-pages>
                <a href="/">Inicio</a>
                <a href="/accordions">Accordions</a>
                <a href="/buttons">Buttons</a>
                <a href="/cards">Cards</a>
                <a href="/counters">Counters</a>
                <a href="/drag-and-drop">Draggeable</a>
                <a href="/footers">Footers</a>
                <a href="/"></a>
                
            </nav>
        `;
    }

    templateCSS(){
        return /*CSS*/ `
            nav[data-nav-pages] {
                a {
                    text-decoration: none;
                    color: default;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                display: flex;
                flex-direction: column;
            }
        `;
    }

    initComponent(){
    }

    importComponent(path, route) {
        
        const $RenderArea = document.querySelector('[data-render-area]');
        
        let scripts = Array.from(document.head.querySelectorAll('script'));
        
        let script = document.createElement('script');
        script.defer = true;
        script.type = 'module';

        const pathIndex = path + '/';   // > '/Components_ui/'

        if(route === pathIndex) {

            script.src = `../Components/app.component.js`;
            $RenderArea.innerHTML = `<app-index></app-index>`;
            
        } else {
            
            script.src = `../Pages${route}/View${route}.view.js`;
            let tagComponent = route.toString().replace('/','');
            $RenderArea.innerHTML = `<${tagComponent}-view></${tagComponent}-view>`;

        }
        
    // Si hay más de 1 elemento <script> Eliminará el último.
        
        if(scripts.length > 1){
            scripts.at(-1).remove();
        }

    // Incluye el <script> del componente en el <head> del index.html
        
        document.head.appendChild(script);
    }

}

customElements.define('nav-menu', NavMenu);