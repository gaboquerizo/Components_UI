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
            <h1>👋 Bienvenido —app.component.js—</h1>
        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('app-index', App);