class AccordionFAQ extends HTMLElement {

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

        `;
    }

    templateCSS(){
        return /*CSS*/`

        h2 {
            border-top: solid 1px var(--back-color);
            padding-top: 1em;
            + section {
                margin-top: 2em;
            }
        }
        
        .accordion-faq details {
            margin: 4px 0;
            cursor: pointer;
        }
        
        .accordion-faq details[open] {
            summary {
                border-radius: .5em .5em 0 0;
            }
            div {
                padding: 1em 1.5em;
                border: solid 2px var(--back-color);
                border-radius: 0 0 .5em .5em;
                cursor: default;
            }
        }
        
        .accordion-faq summary {
            position: relative;
            list-style: none;
            padding: 1em 1.5em;
            border-radius: .5em;
            background-color: var(--back-color);
            &:hover {
                color: var(--text-color-II);
            }
        }

        .accordion-faq summary::after {
            content: "+";
            position: absolute;
            width: max-content;
            top: 20%;
            right: 1em;
            font-size: 1.5em;
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
                &:hover {
                    color: var(--text-color-II);
                }
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

        `;
    }

    initComponent(){
        const inputCheckbox = this.shadowRoot.querySelector('menu input[type="checkbox"]');
        const detailsList = [...this.shadowRoot.querySelectorAll('.accordion-faq details')];

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
    }

}

customElements.define('accordion-faq-component', AccordionFAQ);