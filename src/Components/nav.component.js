export class NavMenu extends HTMLElement {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove()
    }

    connectedCallback() {
        this.renderComponent();
        this.initComponent();
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
            <a href="/" class="active-view">Home</a>
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
        
        [data-nav-pages] {
            display: flex;
            flex-direction: column;
            gap: var(--space-050);
            max-height: 100vh;

            a {
                padding: var(--space-050) var(--space-100);
                border-radius: var(--radius-2);
                text-decoration: none;
                transition: all 0s;
                &:hover{
                    text-decoration: underline;
                    color: var(--accent-color);
                    background-color: var(--hover-ui-color);
                }
            }
        }

        .active-view {
            color: var(--accent-color);
            background-color: var(--active-ui-color);
        }

        `;
    }

    initComponent(){

        const $Links = document.querySelectorAll('[data-nav-pages] a');  /* Reemplacé el 'document' por 'this.shadowRoot' */

        function removeClass() {
            $Links.forEach((element) => {
                element.classList.remove('active-view');     /* Recorre todos los elementos y elimina una clase CSS */
            })
        }

        $Links.forEach((element) => {
            
            element.addEventListener('click', (e) => {

                removeClass();
                element.classList.add('active-view');
                
            })
        });
    }

    importComponent(route) {
        
        const $RenderArea = document.querySelector('[data-render-area]');
        
        let scripts = Array.from(document.head.querySelectorAll('script'));
        
        let script = document.createElement('script');
        script.defer = true;
        script.type = 'module';

        if(route === '/') {

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