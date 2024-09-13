import "../Components/draggable.component.js";

export class DraggableView extends HTMLElement {

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
            <h1>—drag-and-drop.view.js—</h1>
            <draggable-component></draggable-component>
        `;
    }

    templateCSS(){}

    initComponent(){}

}

customElements.define('drag-and-drop-view', DraggableView);