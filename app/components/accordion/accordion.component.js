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

            details {
                margin: 4px 0;
                cursor: pointer;
            }
            details div {
                padding: 1em;
            }
            summary {
                padding: .5em 1em;
                border-radius: 6px;
                background-color: var(--back-color);
                &:hover {
                    background-color: var(--back-color-hover);
                }
            }
            .accordion {
                margin-top: 2em;
            }
            
            .accordion details[open] {
                summary {
                    border-radius: 6px 6px 0 0;
                }
                div {
                    border: solid 2px var(--back-color);
                    border-radius: 0 0 4px 4px;
                    cursor: default;
                }
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
                background-color: var(--back-color);
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
            <h1>Accordion</h1>
            <section class="accordion">
                <details>
                    <summary>Titulo de acordión 1</summary>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus quidem minima recusandae cumque nobis, quasi quaerat? Corrupti.
                    </div>
                </details>
                
                <details>
                    <summary>Titulo de acordión 2</summary>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus quidem minima recusandae cumque nobis, quasi quaerat? Corrupti.
                    </div>
                </details>
                
                <details>
                    <summary>Titulo de acordión 3</summary>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus quidem minima recusandae cumque nobis, quasi quaerat? Corrupti.
                    </div>
                </details>
                
                <details>
                    <summary>Titulo de acordión 4</summary>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus quidem minima recusandae cumque nobis, quasi quaerat? Corrupti.
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