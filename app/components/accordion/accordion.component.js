import { WebComponent as WEBComponent } from "../../app-components/webcomponent.js";    // Se me olvidó el .js

class AccordionUI extends WEBComponent {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent()
        // this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style> ${ this.componentTemplateCSS() } </style>
            ${ this.componentTemplateHTML() }
        `;
    }

    componentTemplateCSS() {
        return /* CSS */ `
            div {
                background-color: #00809050;
                padding: 1em;
            }
        `;
    }
    componentTemplateHTML() {
        return /* HTML */ `
            <div>Espacio de renderización del componente</div>
        `;
    }

};

customElements.define("accordion-ui", AccordionUI);