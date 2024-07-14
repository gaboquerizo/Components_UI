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
            
        p{
            border-top: solid 1px var(--back-color);
            padding-top: 1em;
        }
        
        .accordion {
            margin-top: 2em;
        }
        
        details {
            margin: 4px 0;
            cursor: pointer;
            div {
                transition: all 1s ease;
            }
        }
        
        details[open] {
            transition: all 1s ease;
            summary {
                border-radius: 6px 6px 0 0;
            }
            div {
                padding: 1em 1.5em;
                border: solid 2px var(--back-color);
                border-radius: 0 0 4px 4px;
                cursor: default;
                transition: all 1s ease;
            }
        }
        
        summary {
            position: relative;
            list-style: none;
            padding: 1em 1.5em;
            border-radius: 6px;
            background-color: var(--back-color);
            &:hover {
                background-color: var(--back-color-hover);
            }
        }

        summary::after {
            content: "+";
            position: absolute;
            width: max-content;
            top: 20%;
            right: 1em;
            font-size: 1.5em;
            transition: all .2s ease-out;
        }

        details[open] summary::after {
            content: "-";
        }
        
        menu {
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
            border-radius: 100px;
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
            border-radius: 200px;
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

        `;
    }

    componentTemplateHTML() {
        return /* HTML */ `
        
        <h2>Accordion</h2>
        <p>FAQ</p>
        <section class="accordion">
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
        
        <p></p>
        
        `;
    }

    openOnlyOne() {
        const inputCheckbox = this.shadowRoot.querySelector(`menu input[type="checkbox"]`);
        const detailsList = [...this.shadowRoot.querySelectorAll(`.accordion details`)];

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