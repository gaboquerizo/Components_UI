import { WEBComponent } from "../../app-components/webcomponent.js";

class FooterUI extends WEBComponent {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent();
        // this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.componentTemplateCSS()}</style>
            ${this.componentTemplateHTML()}
        `;
    }

    componentTemplateCSS() {
        return /*CSS*/ `
        h2{
            border-top: solid 1px var(--back-color);
            padding-top: 1em;
            + section {
                margin-top: 2em;

                h3, p {
                    margin: 0;
                }
                svg {
                    width: 2em;
                    height: 2em;
                }
            }
        }
        `
    }

    componentTemplateHTML() {
        return /*HTML*/ `
        <h2>Two columns Footer</h2>
        `
    }

};

customElements.define('footer-ui', FooterUI);