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
        this.draggingImage();
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

        .drag-image {
            width: 100%;
            > div {
                width: 60%;
                height: 400px;
                /* margin: 0 auto; */
                background: linear-gradient(45deg, var(--back-color) 15%, #cde3 50%, var(--back-color) 85%);
            }
            svg {
                font-size: 3em;
            }
            h3 {
                font-size: 1.2em;
                font-weight: 500;
                text-align: center;
            }
            h3 > span {
                color: var(--text-color-II);    
            }
            span:hover {
                text-decoration: underline;
                cursor: pointer;
            }
            p {
                margin-top: 1em;
                font-size: .8em;
                opacity: .6;
                font-weight: 100;
            }
            .drag-area {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-radius: .5em;
                outline: dashed 2px var(--text-color-I);
                svg {
                    margin-bottom: .5em;
                }

                &:has(img){
                    outline: solid 2px var(--text-color-II);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: .5em;
                }
            }
            
            .active {
                outline-color: var(--text-color-II);
                svg {
                    color: var(--text-color-II);
                }
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

        <h2>Draggable File</h2>
        <section class="drag-image">
            <div class="drag-area">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                        <circle cx="7.5" cy="7.5" r="1.5" />
                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                        <path d="M5 21c4.372-5.225 9.274-12.116 16.498-7.458" />
                    </g>
                </svg>
                <h3>Drag & Drop</h3> <h3>o <span>subir archivo</span></h3>
                <input type="file" hidden>
                <p>Formato: JPEG, JPG, PNG</p>
            </div>
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


    draggingImage() {
        const dragAreaElement = this.shadowRoot.querySelector('.drag-area');
        const dragAreaTitle = this.shadowRoot.querySelector('.drag-area h3');
        const btnUploadFile = this.shadowRoot.querySelector('.drag-area span');
        const dragAreaInput = this.shadowRoot.querySelector('.drag-area input');
        const dragAreaTitleSaved = dragAreaTitle.textContent;

        let file;

        btnUploadFile.onclick = () => {
            dragAreaInput.click();
        };

        dragAreaInput.addEventListener('change', function() {
            dragAreaElement.classList.add('active');
            file = this.files[0];
            displayFile();
        });

        dragAreaElement.addEventListener('dragover', (e) => {
            e.preventDefault();
            dragAreaTitle.textContent = 'Soltar aquí';
            dragAreaElement.classList.add('active');
        })
        dragAreaElement.addEventListener('dragleave', () => {
            dragAreaTitle.textContent = dragAreaTitleSaved;
            dragAreaElement.classList.remove('active');

        })
        dragAreaElement.addEventListener('drop', (e) => {
            e.preventDefault();
            file = e.dataTransfer.files[0];
            displayFile();
        });

        function displayFile(){
            let fileType = file.type;
            let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
            
            if(validExtensions.includes(fileType)) {
                let fileReader = new FileReader();
                fileReader.onload = () => {
                    let fileURL = fileReader.result;
                    let imgTag = `<img src="${fileURL}" alt="">`;
                    dragAreaElement.innerHTML = imgTag;
                };
                fileReader.readAsDataURL(file);
                dragAreaElement.classList.remove('active');
                console.log(dragAreaElement.style);
            } else {
                alert('⚠ El archivo no es una imagen.');
                dragAreaElement.classList.remove('active');
            }
        }
    }

};

customElements.define('draggable-ui', DraggableUI);