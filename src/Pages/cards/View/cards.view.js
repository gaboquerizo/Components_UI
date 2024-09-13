import "../Components/card.component.js";

export class CardsView extends HTMLElement {

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
            <h1>—cards.view.js—</h1>
            <card-component></card-component>

        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('cards-view', CardsView);