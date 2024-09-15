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
            <div>
                <label>
                    <input type="checkbox">
                    <span class="switch"></span>
                    <span>Abrir solo uno</span>
                </label>
            </div>
            <div>
                <!-- Button -->
            </div>
        </menu>

        `;
    }

    templateCSS(){
        return /*CSS*/`

        h2 {
            margin-block: var(--space-200);
        }
        
        .accordion-faq details {
            background-color: var(--secondary-color);
            margin-block: var(--space-100);
            border: var(--solid-1) var(--edge-color);
            border-radius: var(--radius-2);
            box-shadow: var(--shadow-1);
            cursor: pointer;
        }

        .accordion-faq summary:hover {
            background-color: var(--hover-bkg-color);
        }
        
        .accordion-faq details[open] {
            box-shadow: none;
            summary {
                color: var(--accent-color);
                background-color: var(--active-bkg-color);
                border-radius: var(--radius-2) var(--radius-2) 0 0;
            }
            div {
                padding: var(--space-100) var(--space-150);
                border-top: var(--solid-1) var(--edge-color);
                border-radius: 0 0 var(--radius-2) var(--radius-2);
                cursor: default;
            }
        }
        
        .accordion-faq summary {
            position: relative;
            list-style: none;
            padding: var(--space-100) var(--space-150);
            border-radius: var(--radius-2);
        }

        .accordion-faq summary::after {
            content: "+";
            position: absolute;
            width: max-content;
            top: 20%;
            right: var(--space-100);
            font-size: var(--size-4);
        }

        .accordion-faq details[open] summary::after {
            content: "-";
        }
        
        .accordion-faq + menu {
            display: inline-block;
            padding: 0;
            
            label {
                width: fit-content;
                display: flex;
                align-items: center;
                cursor: pointer;
                &:hover {
                    color: var(--accent-color);
                }
            }
        }

        .switch {
            background-color: var(--secondary-color);
            border-radius: 1em;
            padding: 8px;
            margin-right: 8px;
            cursor: pointer;
            align-items: center;
            position: relative;
            display: inline-block;
            min-width: 36px;
            height: 14px;
            outline: var(--solid-1) var(--edge-color);
            box-shadow: var(--shadow-1);
            &:hover {
                background-color: var(--hover-bkg-color);
            }
        }
        
        .switch::after {
            content: "";
            display: flex;
            inset: 3px;
            width: 24px;
            height: 24px;
            position: absolute;
            border-radius: 1em;
            background-color: var(--inactive-bkg-color);
            transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            will-change: left, background-color;
        }
        
        menu label input[type="checkbox"]:checked + .switch {
            box-shadow: #0009 0px 0px 5px inset, var(--accent-color); 0px 0px 0px 2px inset, var(--accent-color) 0px 0px 0px 24px inset;
            background-color: var(--accent-color);
            &::after {
                background-color: #FFF;
            }
        }
        
        menu label input[type="checkbox"]:checked + .switch::after {
            left: 25px;
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