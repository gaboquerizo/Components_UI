class AccordionUI extends HTMLElement {

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
            <h2>FAQs</h2>
            <menu>
                <div>
                    <label>
                        <input type="checkbox">
                        <span class="switch"></span>
                        <p>Abrir solo uno</p>
                    </label>
                </div>
            </menu>
        </header>

        <section class=accordion-faq>
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
                <summary>¿Dónde desplegar un proyecto web?</summary>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae quia ipsa amet consectetur cum deserunt recusandae odio vero! Animi necessitatibus possimus.
                </div>
            </details>
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
        
        menu {
            display: inline-block;
            
            label {
                width: fit-content;
                display: flex;
                align-items: center;
                cursor: pointer;
                color: var(--txt-color-2);

                &:hover {
                    color: var(--accent-color);
                }

                p {
                    margin-left: var(--space-050);
                }
            }

            input[type="checkbox"] {
                display: none;
    
                &:checked + .switch {
                    background-color: var(--accent-color);
                    box-shadow: var(--shadow-accent);
                    &::after {
                        left: 18px;
                        background-color: #FFF;
                    }
                }
            }
        }

        .switch {
            box-sizing: content-box;
            background-color: var(--inactive-bg-color);
            border-radius: 1em;
            padding: 8px;
            cursor: pointer;
            align-items: center;
            position: relative;
            display: inline-block;
            min-width: var(--size-3);
            height: 8.5px;
            box-shadow: var(--shadow-element);
            transition: var(--trans-2);
        }
        
        .switch::after {
            content: "";
            display: flex;
            inset: 2px;
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 1em;
            background-color: #FFF;
            transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            will-change: left, background-color;
        }

        /*—————————— Component styles ——————————*/

        .accordion-faq {
            display: flex;
            flex-direction: column;
            gap: var(--space-100);
        }
        
        .accordion-faq details {
            background-color: var(--secondary-color);
            border: var(--solid-1) var(--edge-color-1);
            border-radius: var(--radius-2);
            box-shadow: var(--shadow-element);
            cursor: pointer;
        }
        
        .accordion-faq summary {
            list-style: none;
            position: relative;
            color: var(--txt-color-2);
            padding: var(--space-100) var(--space-150);
            padding-right: var(--space-250);
            border-radius: var(--radius-2);
        }

        .accordion-faq summary:hover {
            background-color: var(--hover-bg-color);
        }

        .accordion-faq summary:focus {
            &, div {
                outline: var(--solid-2) var(--edge-color-3);
            }
        }
        
        .accordion-faq details[open] {
            box-shadow: none;
            summary {
                color: var(--accent-color);
                background-color: var(--active-bg-color);
                border-radius: var(--radius-2) var(--radius-2) 0 0;
            }
            div {
                color: var(--txt-color-3);
                padding: var(--space-100) var(--space-150);
                border-top: var(--solid-1) var(--edge-color-1);
                border-radius: 0 0 var(--radius-2) var(--radius-2);
                cursor: default;
            }
        }

        .accordion-faq summary::after {
            content: "+";
            color: var(--txt-color-3);
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-18px, 50%);
            font-size: var(--size-2);
        }

        .accordion-faq details[open] summary::after {
            content: "-";
        }
        
        /*—————————— Viewport Media Query ——————————*/

        @media (max-width: 600px) {

            h2 {
                font-size: var(--size-3);
            }
        }
        
        @media (max-width: 400px) {
            
            h2 {
                font-size: var(--size-2);
            }

            .accordion-faq {
                gap: var(--space-075);
                font-size: 14px;
            }

            .accordion-faq summary {
                padding: var(--space-100);
                padding-right: var(--space-250);
            }

            .accordion-faq details[open] div {
                padding: var(--space-100);
            }
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

customElements.define('accordion-faq-component', AccordionUI);