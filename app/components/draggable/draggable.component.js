import { WEBComponent } from '../../app-components/webcomponent.js'

class DraggableUI extends WEBComponent {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent();
        this.draggingList();
        // this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.componentTemplateCSS()}</style>
            ${this.componentTemplateHTML()}
        `
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

        .drag-list {
            width: 100%;

            ul {
                width: 50%;
                padding: 1em;

                display: flex;
                flex-direction: column;
                gap: .5em;

                &, li {
                    border-radius: .5em;
                    background-color: var(--back-color);
                }
                li {
                    padding: .5em 1em;
                    
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    cursor: grab;
                }

            }
            .item.dragging{
                opacity: .2;
            }
        }

        @media ( width < 600px ){
            .drag-list ul {
                width: 92%;
            }
        }

        `;
    }

    componentTemplateHTML() {
        return /*HTML*/ `
        <h2>Draggable List</h2>
        <section class="drag-list">
            <ul class="drag-list_items">
                <li class="item" draggable="true">
                    <p>
                        Elemento 1
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"/>
                        </svg>
                    </div>
                </li>

                <li class="item" draggable="true">
                    <p>
                        Elemento 2
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"/>
                        </svg>
                    </div>
                </li>

                <li class="item" draggable="true">
                    <p>
                        Elemento 3
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"/>
                        </svg>
                    </div>
                </li>

                <li class="item" draggable="true">
                    <p>
                        Elemento 4
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"/>
                        </svg>
                    </div>
                </li>

                <li class="item" draggable="true">
                    <p>
                        Elemento 5
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"/>
                        </svg>
                    </div>
                </li>
            </ul>
        </section>
        `;
    }

    draggingList(){
        const dragList = this.shadowRoot.querySelector('.drag-list_items');
        const itemsList = Array.from( this.shadowRoot.querySelectorAll('.item') );
        
        itemsList.forEach( item => {
            item.addEventListener( 'dragstart', () => {
                item.classList.add('dragging');
            });
            item.addEventListener( 'dragend', () => {
                item.classList.remove('dragging');
            });
        });

        const initDragList = (e) => {
            e.preventDefault();
            const draggingItem = dragList.querySelector('.dragging');
            const siblings = Array.from( dragList.querySelectorAll('.item:not(.dragging)') );
            let nextSiblings = siblings.find(sibling => {
                return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
            })
            dragList.insertBefore(draggingItem, nextSiblings);
        };
        dragList.addEventListener('dragover', initDragList)
        dragList.addEventListener('dragover', e => e.preventDefault());
        
    }

};

customElements.define('draggable-ui', DraggableUI);