import "../Components/button.component.js";

export class ButtonView extends HTMLElement {

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
            <h1>Página —buttons.view.js—</h1>
            <button-component></button-component>
        `;
    }

    templateCSS(){
        return /*CSS*/`
            h1 {
                font-weight: 400;
                color: var(--txt-color-2);
            }
        `;
    }

    initComponent(){}

}

customElements.define('buttons-view', ButtonView);