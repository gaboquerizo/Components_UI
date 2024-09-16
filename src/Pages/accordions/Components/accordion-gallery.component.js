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
        
        <h2>Expanding Gallery</h2>
        <section class="accordion-gallery">
            <div class="img-1">
                <label>
                    <input type="radio" name="radio-img" checked>
                </label>
            </div>
            <div class="img-2">
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class="img-3">
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class="img-4">
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
            <div class="img-5">
                <label>
                    <input type="radio" name="radio-img">
                </label>
            </div>
        </section>

        `;
    }

    templateCSS(){
        return /*CSS*/`

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h2 {
            font-weight: 200;
            color: var(--txt-color-2);
            padding-block: var(--space-100);
            border-top: var(--solid-1) var(--edge-color-2);
        }

        .accordion-gallery {
            display: flex;
            width: 100%;
            height: 400px;
        }
        
        .accordion-gallery div {
            flex-grow: 1;
            margin: 6px;
            
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            border: var(--solid-1) var(--edge-color);
            border-radius: var(--radius-3);

            transition: all .6s ease;
            filter: saturate(1.5);
            opacity: .4;
        }

        .accordion-gallery div:hover {
            opacity: 1;
        }

        .accordion-gallery div label {
            display: flex;
            border-radius: var(--radius-3);
            
            backdrop-filter: blur(8px);
            cursor: pointer;
            outline: var(--solid-2) transparent;
            box-shadow: none;
            
            width: 100%;
            height: 100%;
            transition: all .6s ease;

            &:hover {
                outline-color: var(--shd-color-2);
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
                outline-color: var(--accent-color);
                cursor: default;
                box-shadow: var(--shadow-1);
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

        @media (max-width: 600px) {

            .accordion-gallery {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 600px;
            }

        }

        
        `;
    }

    initComponent(){}

}

customElements.define('accordion-gallery-component', AccordionGallery);