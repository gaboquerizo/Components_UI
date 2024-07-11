export class WebComponent extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow( { mode :'open' } );
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        this.componentAttributes()
        this.renderComponent()
        this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            ${ this.componentTemplateCSS() }
            ${ this.componentTemplateHTML() }
        `;
    }

    componentTemplateCSS() {}
    componentTemplateHTML() {}
    componentAttributes() {}
    initComponent() {}
};
