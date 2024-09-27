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
            <h1>Cards</h1>
            <card-component></card-component>

        `;
    }

    templateCSS(){
        return /*CSS*/`

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h1 {
            font-weight: 400;
            font-size: var(--size-6);
            color: var(--txt-color-1);
        }

        h1 ~ * {
            display: block;
            margin-block: var(--space-200);
        }

        @media (max-width: 600px) {

            h1 {
                text-align: center;
                font-size: var(--size-4);
            }

            h1 ~ * {
                margin-block: var(--space-100) var(--space-200);
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

customElements.define('cards-view', CardsView);