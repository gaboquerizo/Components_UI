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

        <h2>FAQs</h2>
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
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h2 {
            font-weight: 400;
            color: var(--txt-color-2);
            padding-block: var(--space-100);
            border-top: var(--solid-1) var(--edge-color-2);
        }

        .accordion-faq {
            display: flex;
            flex-direction: column;
            gap: var(--space-100);
        }
        
        .accordion-faq details {
            background-color: var(--secondary-color);
            border: var(--solid-1) var(--edge-color);
            border-radius: var(--radius-2);
            box-shadow: var(--shadow-1);
            cursor: pointer;
        }

        .accordion-faq summary:hover {
            background-color: var(--hover-cp-color);
        }

        .accordion-faq summary:focus-within {
            &, div {
                outline: var(--solid-2) var(--shd-color-2);
            }
        }
        
        .accordion-faq details[open] {
            box-shadow: none;
            summary {
                color: var(--accent-color);
                background-color: var(--active-cp-color);
                border-radius: var(--radius-2) var(--radius-2) 0 0;
            }
            div {
                color: var(--txt-color-2);
                padding: var(--space-100) var(--space-150);
                border-top: var(--solid-1) var(--edge-color);
                border-radius: 0 0 var(--radius-2) var(--radius-2);
                cursor: default;
            }
        }
        
        .accordion-faq summary {
            list-style: none;
            position: relative;
            padding: var(--space-100) var(--space-150);
            padding-right: var(--space-250);
            border-radius: var(--radius-2);
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
        
        .accordion-faq + menu {
            display: inline-block;
            
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
            box-sizing: content-box;
            background-color: var(--secondary-color);
            border-radius: 1em;
            padding: 8px;
            margin-right: 8px;
            cursor: pointer;
            align-items: center;
            position: relative;
            display: inline-block;
            min-width: var(--size-3);
            height: 8.5px;
            outline: var(--solid-1) var(--edge-color);
            box-shadow: var(--shadow-1);
            &:hover {
                background-color: var(--hover-cp-color);
            }
        }
        
        .switch::after {
            content: "";
            display: flex;
            inset: 2px;
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 1em;
            background-color: var(--inactive-cp-color);
            transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            will-change: left, background-color;
        }

        menu label{
            margin-block: var(--space-100);
        }
        
        menu label input[type="checkbox"] {
            display: none;

            &:checked + .switch {
                box-shadow: #0009 0px 0px 5px inset, var(--accent-color); 0px 0px 0px 2px inset, var(--accent-color) 0px 0px 0px 24px inset;
                background-color: var(--accent-color);
    
                &::after {
                    left: 18px;
                    background-color: #FFF;
                }
            }
        }
        
        

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