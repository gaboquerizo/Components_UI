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
        this.renderComponent()
        this.draggingList()
        this.draggingImage()
        this.draggingTierList()
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

        svg, label {
            transition: all .4s ease;
            color: var(--text-color-I);
        }

        button {
            background: transparent;
            border: 0;
            color: var(--text-color-I);
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
                width: 60%;
                height: 400px;
                /* margin: 0 auto; */
                background: linear-gradient(90deg, var(--back-color) 15%, #cde3 50%, var(--back-color) 85%);
                

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-radius: .5em;
                outline: dashed 2px var(--text-color-I);
                svg {
                    font-size: 3em;
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
















        .drag-tier {
            --color-s: #f73c35;
            --color-a: #ffc139;
            --color-b: #49e35e;
            --color-c: #4ad3a2;

            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 1em;
            background-color: var(--back-color);
            &,* {
                border-radius: .5em;
            }

            > div {
                display: flex;
                flex-direction: row;
                background-color: var(--back-color);
            }
            aside {
                cursor: pointer;
                background: var(--level, #568);
                padding: 1em;
                font-size: 1.5em;

                span:focus {
                    outline: none;
                    text-decoration: underline;
                }
            }

            .drag-tier__selector {

                div {
                    display: flex;
                    justify-content: center;
                    padding: 1em 0;
                    gap: 1em;
                    
                    svg {
                        padding: .4em;
                    }

                    label {
                        background-color: var(--back-color);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--text-color-II);
                        }
                    }
                }

                section {
                    background: linear-gradient(90deg, var(--back-color) 15%, #cde3 50%, var(--back-color) 85%);
                    outline: dashed 2px var(--text-color-I);
                    
                    weight: 100%;
                    height: 100px;
                    padding: 4px;

                    display: flex;
                }
            }
        }

















        @media ( width < 600px ){
            .drag-list ul {
                width: 92%;
            }

            .drag-image .drag-area {
                width: 100%
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

        <h2>Draggable Tier List</h2>
        <section>
            <section class="drag-tier">
                <div>
                    <aside style="--level: var(--color-s)"> <!-- Redefinimos el valor de una variable -->
                        <span contenteditable="true"> S </span>
                    </aside>
                </div>
                <div>
                    <aside style="--level: var(--color-a)">
                        <span contenteditable="true"> A </span>
                    </aside>
                </div>
                <div>
                    <aside style="--level: var(--color-b)">
                        <span contenteditable="true"> B </span>
                    </aside>
                </div>
                <div>
                    <aside style="--level: var(--color-c)">
                        <span contenteditable="true"> C </span>
                    </aside>
                </div>

                <article class="drag-tier__selector">
                    <div>
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m4-4H8m14 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" color="currentColor" />
                            </svg>
                            <input type="file" hidden>
                        </label>

                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 13.5A7.5 7.5 0 1 1 11.5 6H20m0 0l-3-3m3 3l-3 3" />
                            </svg>
                        </label>
                    </div>

                    <section>
                        <div>
                            Contenedor
                        </div>
                    </section>
                    
                </article>

            </section>

            
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
            });


            dragList.insertBefore(draggingItem, nextSiblings);
        };
        dragList.addEventListener('dragover', initDragList)
        dragList.addEventListener('dragover', e => e.preventDefault());
    }


    draggingImage() {
        const $ = element => this.shadowRoot.querySelector(element);
        const dragAreaElement = $('.drag-area');
        const dragAreaTitle = $('.drag-area h3');
        const btnUploadFile = $('.drag-area span');
        const dragAreaInput = $('.drag-area input');
        const dragAreaTitleSaved = dragAreaTitle.textContent;

        let file;

        btnUploadFile.onclick = () => {
            dragAreaInput.click();
        };

        dragAreaInput.addEventListener('change', function() {   // Cambio en el área
            dragAreaElement.classList.add('active');
            file = this.files[0];
            displayFile();
        });

        dragAreaElement.addEventListener('dragover', (e) => {   // Encima del área
            e.preventDefault();
            dragAreaTitle.textContent = 'Soltar aquí';
            dragAreaElement.classList.add('active');
        });

        dragAreaElement.addEventListener('dragleave', () => {   // Salir del área
            dragAreaTitle.textContent = dragAreaTitleSaved;
            dragAreaElement.classList.remove('active');

        });

        dragAreaElement.addEventListener('drop', (e) => {       // Soltar en el área
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
                    dragAreaElement.innerHTML = `<img src="${ fileReader.result }" alt="">`;
                };
                fileReader.readAsDataURL(file);
                dragAreaElement.classList.remove('active');
            } else {
                alert('⚠ El archivo no es una imagen.');
                dragAreaElement.classList.remove('active');
            }
        }
    }

    draggingTierList() {
        const $ = element => this.shadowRoot.querySelector(element);    // Utilidad llamada "miduquery"

    }

};

customElements.define('draggable-ui', DraggableUI);