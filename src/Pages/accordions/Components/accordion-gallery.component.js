class AccordionGallery extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {
        this.remove()
    }

    connectedCallback() {
        this.renderComponent()
        this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.templateCSS()}</style>
            ${this.templateHTML()}
        `;
    }

    templateHTML(){
        return /*HTML*/`
        
        <header>
            <h2>Expanding Gallery</h2>
        </header>

        <section class=accordion-gallery>
            <div class=img-1>
                <label>
                    <input type="radio" name="radio-img" checked>
                </label>
            </div>
            <div class=img-2>
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class=img-3>
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class=img-4>
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class=img-5>
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
        </section>

        `;
    }

    templateCSS(){
        return /*CSS*/`

        /*—————————— Imported external styles ——————————*/

        @import url("/Assets/reset/normalize.css");
        @import url("/Styles/custom.style.css");

        /*—————————— Component element styles ——————————*/
        
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-block: var(--space-150);
            border-top: var(--solid-1) var(--edge-color-2);

            h2 {
                font-weight: 400;
                color: var(--txt-color-2);
            }
        }

        /*—————————— Component styles ——————————*/

        .accordion-gallery {
            display: flex;
            width: 100%;
            height: 400px;
        }
        
        .accordion-gallery div {
            flex-grow: 1;
            margin: var(--space-025);
            
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            border: var(--solid-1) var(--edge-color-1);
            border-radius: var(--radius-3);

            transition: all var(--trans-3);
            filter: saturate(1.5);
            opacity: .5;
        }

        .accordion-gallery div:hover {
            opacity: 1;
        }

        .accordion-gallery div label {
            display: flex;
            border-radius: var(--radius-3);
            
            backdrop-filter: var(--eff-blur);
            cursor: pointer;
            border: var(--solid-1) transparent;
            box-shadow: none;
            
            width: 100%;
            height: 100%;
            transition: all var(--trans-3);

            &:focus {
                outline: var(--solid-2) var(--edge-color-3);
            }
        }

        .accordion-gallery input[type="radio"]{
            display: none;
        }
        
        .accordion-gallery div:has(:checked) {
            flex-grow: 8;
            opacity: 1;
            label {
                backdrop-filter: blur(0px);
                border-color: var(--accent-color);
                cursor: default;
                box-shadow: var(--shadow-accent);
            }
        }

        .img-1 {
            background: url('https://image.cdn2.seaart.ai/2023-08-22/15046714962515973/c441eaf8b454e4a109c55fb9e628bd4e751fef51_high.webp');
        }

        .img-2 {
            background: url('https://image.cdn2.seaart.ai/2023-09-02/16006626418946053/8d40b5e34e5cc3c843de4ef92ddcdf8a4bc0478a_high.webp');
        }

        .img-3 {
            background: url('https://image.cdn2.seaart.ai/2023-10-06/19110531636932613/051a0ec10eb1181c1139bf170e35145e4dfd3929_high.webp');
        }

        .img-4 {
            background: url('https://image.cdn2.seaart.ai/2023-08-30/15815540168781829/3c296cb9bf46644141f54a8e785069a4aba4c7b6_high.webp');
        }

        .img-5 {
            background: url('https://image.cdn2.seaart.ai/static/fd6442f790d15212573c3321d4257185/1716691653954/083ed13a116bc69ad359441de52e873d_high.webp');
        }

        /*—————————— Viewport Media Query ——————————*/

        @media (max-width: 600px) {

            h2 {
                font-size: var(--size-3);
            }

            .accordion-gallery {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 600px;
            }
        }
        
        @media (max-width: 400px) {
            
            h2 {
                font-size: var(--size-2);
            }
        }
        
        `;
    }

    initComponent(){}

}

customElements.define('accordion-gallery-component', AccordionGallery);