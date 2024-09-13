export class WebComponent extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {    // Se invoca cada vez que el Web-Component se desconecta del DOM
        this.remove()
    }

    connectedCallback() {       // Se invoca cada vez que se añade un Web-Component al DOM
        this.renderComponent()
        this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.templateCSS()}</style>
            ${this.templateHTML()}
        `;
    }

    templateHTML(){}    // Contiene toda la estructura HTML

    templateCSS(){}     // Contiene todos los estilos CSS

    initComponent(){}   // Contiene todas sus funciones JS

}