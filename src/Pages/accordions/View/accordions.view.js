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
            <h1>—accordions.view.js—</h1>
            <accordion-faq-component></accordion-faq-component>
            <accordion-gallery-component></accordion-gallery-component>
        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('accordions-view', AccordionView);