import { WEBComponent } from "../../app-components/webcomponent.js";    // Se me olvidó el '.js'

class AccordionUI extends WEBComponent {
    constructor() {
        super();
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent()
        this.openOnlyOne()
        // this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style> ${ this.componentTemplateCSS() } </style>
            ${ this.componentTemplateHTML() }
        `;
    }

    componentTemplateCSS() {
        return /* CSS */ `
            
        h2{
            border-top: solid 1px var(--back-color);
            padding-top: 1em;
        }

        h2 + section {
            margin-top: 2em;
        }
        
        .accordion-faq details {
            margin: 4px 0;
            cursor: pointer;
            div {
                transition: all 1s ease;
            }
        }
        
        .accordion-faq details[open] {
            transition: all 1s ease;
            summary {
                border-radius: .5em .5em 0 0;
            }
            div {
                padding: 1em 1.5em;
                border: solid 2px var(--back-color);
                border-radius: 0 0 .5em .5em;
                cursor: default;
                transition: all 1s ease;
            }
        }
        
        .accordion-faq summary {
            position: relative;
            list-style: none;
            padding: 1em 1.5em;
            border-radius: .5em;
            background-color: var(--back-color);
            &:hover {
                background-color: var(--back-color-hover);
            }
        }

        .accordion-faq summary::after {
            content: "+";
            position: absolute;
            width: max-content;
            top: 20%;
            right: 1em;
            font-size: 1.5em;
            transition: all .2s ease-out;
        }

        .accordion-faq details[open] summary::after {
            content: "-";
        }
        
        .accordion-faq + menu {
            display: inline-block;
            padding: 4px 8px;
            
            label {
                width: fit-content;
                display: flex;
                cursor: pointer;
            }
        }


        .switch {
            background-color: #fff4;
            border-radius: 1em;
            padding: 1px;
            margin-right: .6em;
            cursor: pointer;
            transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
            align-items: center;
            position: relative;
            display: inline-block;
            width: 2em;
            height: calc(1em + 2px);
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 5px inset, rgba(0, 0, 0, 0.3) 0px 0px 0px 24px inset,
                    var(--text-color-II) 0px 0px 0px 0px inset;
        }
        
        .switch::after {
            content: "";
            display: flex;
            inset: 2px;
            width: 1em;
            height: 1em;
            background-color: #eee;
            border-radius: 1em;
            position: absolute;
            box-shadow: transparent 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 6px 6px;
            transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            will-change: left, background-color;
        }
        
        menu label input[type="checkbox"]:checked + .switch {
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 5px inset, var(--text-color-II) 0px 0px 0px 2px inset, var(--text-color-II) 0px 0px 0px 24px inset;
        }
        
        menu label input[type="checkbox"]:checked + .switch::after {
            left: 1em;
        }
        
        menu label input[type="checkbox"] {
            display: none;
        }

        /**
         * Accordion Gallery
         */

        .accordion-gallery {
            display: flex;
            width: 100%;
            height: 400px;
        }
        
        .accordion-gallery div {
            flex-grow: 1;
            
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 75% 50%;
            border-radius: 1em;
            margin: 4px;

            transition: all 1s ease;
            filter: saturate(1.5);
            opacity: .4;
        }

        .accordion-gallery div:hover {
            opacity: 1;
        }

        .accordion-gallery div label {
            display: flex;
            border-radius: 1em;
            
            backdrop-filter: blur(8px);
            cursor: pointer;
            outline: solid 4px transparent;
            
            width: 100%;
            height: 100%;
            transition: all 1s ease;
        }

        .accordion-gallery div label input[type="radio"]{
            display: none;
        }
        
        .accordion-gallery div:has(:checked) {
            flex-grow: 8;
            opacity: 1;
            label {
                backdrop-filter: blur(0px);
                outline: solid 4px var(--text-color-II);
            }
        }

        .img-1 {
            background: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltf9557fb8c51d1c43/631a8aa4eef3ae0e03c74396/1600_Winston.jpg');
        }

        .img-2 {
            background: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb9e273d8483050b8/631a8aab3ab6f40dd2a90699/1600_Tracer.jpg');
        }

        .img-3 {
            background: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd0eb5529be69efbc/633773a6f87c00687e8ef21a/1600_Mei_02.jpg');
        }

        .img-4 {
            background: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt22836a6cfd1c3335/631a8b576d5f7a0df8d92798/1600_Genji.jpg');
        }

        .img-5 {
            background: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8215ad99f856a606/631a8b03636d390da7825ddb/1600_Reinhardt.jpg');
        }

        `;
    }

    componentTemplateHTML() {
        return /* HTML */ `
        
        <h2>Accordion FAQ</h2>
        <section class="accordion-faq">
            <details>
                <summary>¿Qué puede hacer un framework?</summary>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus.
                </div>
            </details>
            
            <details>
                <summary>¿Cuándo aplicar un components?</summary>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus.
                </div>
            </details>
            
            <details>
                <summary>¿Cómo publicar una página web?</summary>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus.
                </div>
            </details>
            
            <details>
                <summary>¿Dónde desplegar un repositorio?</summary>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus.
                </div>
            </details>
        </section>
        <menu>
            <label>
                <input type="checkbox">
                <span class="switch"></span>
                <span>Abrir solo uno</span>
            </label>
        </menu>

        <!------------- next component ------------->
        
        <h2>Accordion Gallery</h2>
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

        <!------------- next component ------------->


        `;
    }

    openOnlyOne() {
        const inputCheckbox = this.shadowRoot.querySelector(`menu input[type="checkbox"]`);
        const detailsList = [...this.shadowRoot.querySelectorAll(`.accordion-faq details`)];

        inputCheckbox.addEventListener('click', () => {            
            if( inputCheckbox.checked ){

                detailsList.forEach( (element) => {
                    element.removeAttribute('open');
                    element.setAttribute('name', 'text');
                } );

            }else{

                detailsList.forEach( (element) => {
                    element.removeAttribute('open');
                    element.removeAttribute('name');
                } );

            }
        });
    };

};

customElements.define("accordion-ui", AccordionUI);