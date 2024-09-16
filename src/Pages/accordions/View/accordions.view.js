import "../Components/accordion-faq.component.js";
import "../Components/accordion-gallery.component.js";

export class AccordionView extends HTMLElement {

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
            <h1>🎹 Accordion UI</h1>
            <accordion-faq-component></accordion-faq-component>
            <accordion-gallery-component></accordion-gallery-component>
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
            color: var(--txt-color-1);
        }

        accordion-faq-component, accordion-gallery-component {
            display: block;
            margin-block: var(--space-200);
        }

        @media (max-width: 600px) {

            h1 {
                text-align: center;
                font-size: var(--size-3);
            }

            accordion-faq-component, accordion-gallery-component {
                margin-block: var(--space-100);
                margin-bottom: var(--space-200);
            }

        }

        `;
    }

    initComponent(){}

}

customElements.define('accordions-view', AccordionView);