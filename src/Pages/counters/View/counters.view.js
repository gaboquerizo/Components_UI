import "../Components/counter.component.js";

export class CounterView extends HTMLElement {

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
            <h1>—counters.view.component.js—</h1>
            <counter-component></counter-component>
        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('counters-view', CounterView);