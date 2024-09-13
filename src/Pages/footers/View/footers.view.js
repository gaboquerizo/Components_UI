import "../Components/footer.component.js";

export class FooterView extends HTMLElement {

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
            <h1>—footers.view.js—</h1>
            <footer-component></footer-component>
        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('footers-view', FooterView);