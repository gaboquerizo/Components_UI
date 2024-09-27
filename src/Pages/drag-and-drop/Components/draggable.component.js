class DraggableUI extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
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
        return /* CSS */ `

        /*------------- general styles -------------*/

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Exo 2";
        }
        
        h2 {
            font-weight: 400;
            color: var(--txt-color-2);
            padding-block: var(--space-100);
            border-top: var(--solid-1) var(--edge-color-2);
            + section {
                margin-bottom: var(--space-150);
                h3, p {
                    margin: 0;
                }
                svg {
                    width: var(--size-5);
                    height: var(--size-5);
                }
            }
        }

        button {
            background: transparent;
            border: 0;
            color: var(--txt-color-1);
        }

        .drag-list {
            width: 100%;

            ul {
                width: 50%;

                display: flex;
                flex-direction: column;
                gap: var(--space-050);
                border-radius: var(--radius-2);
                
                li {
                    background-color: var(--secondary-color);
                    border: var(--solid-1) var(--edge-color-1);
                    border-radius: var(--radius-2);
                    box-shadow: var(--shadow-element);
                }
                li {
                    padding: var(--space-050) var(--space-100);
                    
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    cursor: grab;
                }
                li:hover {
                    background-color: var(--hover-bg-color)
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
                color: var(--accent-color);    
            }
            span:hover {
                text-decoration: underline;
                cursor: pointer;
            }
            p {
                margin-top: var(--space-100);
                font-size: 14px;
                opacity: .6;
                font-weight: 100;
            }
            .drag-area {
                width: 50%;
                height: 400px;
                /* margin: 0 auto; */
                background-color: var(--secondary-color);
                

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-radius: var(--radius-2);
                border: dashed 4px var(--edge-color-1);
                box-shadow: var(--shadow-element);

                svg {
                    font-size: var(--size-8);
                    margin-bottom: var(--space-050);
                    color: var(--txt-color-3)
                }

                &:has(img){
                    box-shadow: var(--shadow-element);
                    border: none;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: var(--radius-2);
                }
            }
            
            .active {
                border-color: var(--accent-color);
                svg {
                    color: var(--accent-color);
                }
            }
        }

        .drag-tier,
        .drag-tier__list,
        .drag-tier__buttons,
        .drag-tier__items {
            display: flex;
            &,* {
                border-radius: .5em;
            }
        }

        .drag-tier {
            width: 80%;
            flex-direction: column;
            background-color: var(--secondary-color);
            img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                cursor: grab;
            }
        }

        .drag-preview {
            opacity: .2;
            pointer-events: none;
        }
        
        .drag-tier__list {
            --color-s: #f73c35;
            --color-a: #ffc139;
            --color-b: #49e35e;
            --color-c: #4ad3a2;
            
            flex-direction: column;
            padding: 1em;
            gap: var(--space-050);

            > div {
                height: 100px;
                gap: var(--space-100);
                display: flex;
                flex-direction: row;
                background-color: var(--hover-bg-color);
                box-shadow: var(--shadow-element);
                outline: var(--solid-1) transparent;

                &.drag-over {
                    border-radius: .8em;
                    background-color: var(--hover-bg-color);
                    outline: var(--solid-1) var(--accent-color);
                }
            }
            aside {
                cursor: pointer;
                background: var(--level, #568);
                padding: var(--space-100);
                font-size: var(--size-2);
                align-content: center;

                span:focus {
                    outline: none;
                    text-decoration: underline;
                }
            }
        }

        .drag-tier__buttons {
            justify-content: center;
            gap: 1em;

            label {
                background-color: var(--secondary-color);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover {
                    color: var(--accent-color);
                }
            }
        }
        
        .drag-tier__items {
            padding: 1em;

            background-color: var(--secondary-color);
            
            > div {
                display: flex;
                flex-flow: wrap;
                gap: var(--space-050);

                padding: var(--space-050);
                width: 100%;
                min-height: 100px;
                background-color: var(--secondary-color);

                border: dashed 4px var(--edge-color-1);
                box-shadow: var(--shadow-element);
            }
        }

        @media ( width < 600px ){
            .drag-list ul {
                width: 92%;
            }

            .drag-image .drag-area,
            .drag-tier {
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-1-7v6H7l5-5l2 2m-4-5.5A1.5 1.5 0 0 1 8.5 12A1.5 1.5 0 0 1 7 10.5A1.5 1.5 0 0 1 8.5 9a1.5 1.5 0 0 1 1.5 1.5" />
                </svg>
                <h3>Drag & Drop</h3> <h3>o <span>subir archivo</span></h3>
                <input type="file" hidden>
                <p>Formato: JPEG, JPG, PNG</p>
            </div>
        </section>

        <h2>Draggable Tier List</h2>
        <section class="drag-tier">
            <section class="drag-tier__list">
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
            </section>

            <section class="drag-tier__buttons">
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm.96-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
                    </svg>
                    <input multiple accept="image/*" type="file" id="input-file-img" hidden>
                </label>

                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 13.5A7.5 7.5 0 1 1 11.5 6H20m0 0l-3-3m3 3l-3 3" />
                    </svg>
                </label>
            </section>

            <section class="drag-tier__items">
                <div>
                    <!-- Area de imagenes -->
                </div>
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
        const $$ = element => this.shadowRoot.querySelectorAll(element);

        const imageInput = $('#input-file-img');
        const itemsSection = $('.drag-tier__items div');

        function createItem(source) {
            const imgElement = document.createElement('img');
            imgElement.src = source;
            imgElement.className = 'img-item';

            imgElement.addEventListener('dragstart', handleDragStart);
            imgElement.addEventListener('dragend', handleDragEnd);

            itemsSection.appendChild(imgElement);
            return imgElement;
        }

        imageInput.addEventListener('change', (event) => {
            const { files } = event.target;  // Captura los archivos

            if (files && files.length > 0) {
                Array.from(files).forEach(file => {
                    const fileReader = new FileReader();
                    fileReader.onload = (eventReader) => createItem(eventReader.target.result) // Carga los archivos para poder leerlos
                    fileReader.readAsDataURL(file)
                });
            }
        })

        let draggedElement = null;
        let sourceContainer = null;

        const rows = $$('.drag-tier__list div');

        rows.forEach(row => {
            row.addEventListener('drop', handleDrop);
            row.addEventListener('dragover', handleDragOver);
            row.addEventListener('dragleave', handleDragLeave);
        })
        
        itemsSection.addEventListener('drop', handleDrop);
        itemsSection.addEventListener('dragover', handleDragOver);
        itemsSection.addEventListener('dragleave', handleDragLeave);
        

        function handleDrop(event) {
            event.preventDefault();
            const { currentTarget, dataTransfer } = event;

            if (sourceContainer && draggedElement)
                sourceContainer.removeChild(draggedElement)

            if (draggedElement) {
                const src = dataTransfer.getData('text/plain');
                const imgElement = createItem(src)
                currentTarget.appendChild(imgElement)
            }
            currentTarget.classList.remove('drag-over');
            currentTarget.querySelector('.drag-preview')?.remove();
        }

        function handleDragOver(event) {
            event.preventDefault();
            const { currentTarget } = event;
            if (sourceContainer === currentTarget) return;
            currentTarget.classList.add('drag-over');

            const dragPreview = this.querySelector('.drag-preview');
            
            if (draggedElement && !dragPreview) {
                const previewElement = draggedElement.cloneNode(true);
                previewElement.classList.add('drag-preview');
                currentTarget.appendChild(previewElement);
            }
        }

        function handleDragLeave(event) {
            event.preventDefault();
            const { currentTarget } = event;
            currentTarget.classList.remove('drag-over');
            currentTarget.querySelector('.drag-preview')?.remove();
        }

        function handleDragStart(event) {
            draggedElement = event.target;
            sourceContainer = draggedElement.parentNode
            event.dataTransfer.setData('text/plain', draggedElement.src)
        }

        function handleDragEnd(event) {
            draggedElement = null;
            sourceContainer = null;
        }

        // 01:16:00 Método para arrastrar elementos desde el explorador de archivos del S.O y soltarlos en la página

    }

};

customElements.define('draggable-component', DraggableUI);