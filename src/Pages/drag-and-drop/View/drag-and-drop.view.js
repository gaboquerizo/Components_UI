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
            <h1>Drag and Drop</h1>
            <draggable-component></draggable-component>
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

        draggable-component {
            display: block;
            margin-block: var(--space-200);
        }

        @media (max-width: 600px) {

            h1 {
                text-align: center;
                font-size: var(--size-4);
            }

            draggable-component {
                margin-block: var(--space-075);
                margin-bottom: var(--space-100);
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

customElements.define('drag-and-drop-view', DraggableView);