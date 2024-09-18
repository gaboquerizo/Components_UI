export class App extends HTMLElement {
    
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
        return /*HTML*/`
            <h1>Página de Inicio —app.component.js—</h1>
        `;
    }

    templateCSS(){
        return /*CSS*/`

        h1 {
            font-weight: 400;
            font-size: var(--size-6);
            color: var(--txt-color-1);
        }
        
        @media (max-width: 600px) {

            h1 {
                text-align: center;
                font-size: var(--size-4);
            }
            
        }
        
        @media (max-width: 400px) {
            
            h1 {
                text-align: center;
                font-size: var(--size-2);
            }

        }

        `;
    }

    initComponent(){}

}

customElements.define('app-index', App);