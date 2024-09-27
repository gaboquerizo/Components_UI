class ButtonUI extends HTMLElement {

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
            <style>
            ${ this.templateCSS() }
            </style>
            ${ this.templateHTML() }
        `;
    }

    templateHTML() {
        return /* HTML */ `
        
        <header>
            <h2>Button</h2>
        </header>
        <section>
            <button class=primary-btn >
                <span>
                    Primary
                </span>
            </button>
            <button class=secondary-btn >
                <span>
                    Secondary
                </span>
            </button>
            <button class=outline-btn >
                <span>
                    Outline
                </span>
            </button>
            <button class=subtle-btn >
                <span>
                    Subtle
                </span>
            </button>
            <button class=transparent-btn >
                <span>
                    Transparent
                </span>
            </button>
        </section>

        `;
    }

    templateCSS() {
        return /* CSS */ `

        /*—————————— Imported external styles ——————————*/

        @import url("/Styles/custom.style.css");
        @import url("/Assets/reset/normalize.css");

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

        section {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-100);
        }

        button {
            display: block;
            width: max-content;
            align-content: center;
            padding: var(--space-050) var(--space-150);
            
            font-size: var(--size-1);
            color: var(--txt-color-1);
            text-align: center;
            text-decoration: none;
            
            border: none;
            border-radius: var(--radius-1);
            box-shadow: var(--shadow-element);
            
            cursor: pointer;
            transition: all var(--trans-2);
        }

        /*—————————— Component styles ——————————*/

        .primary-btn {
            color: #fff;
            background-color: var(--accent-color);
            &:hover {
                filter: var(--eff-light);
                box-shadow: var(--shadow-accent);
            }

            svg {
                color: #fff;
                fill: #fff;
            }
        }

        .secondary-btn {
            background-color: var(--secondary-color);
            &:hover {
                background-color: var(--hover-bg-color);
            }
            &:active {
                background-color: var(--active-bg-color);
            }
        }

        .outline-btn {
            background-color: transparent;
            border: var(--solid-2) var(--edge-color-1);
            box-shadow: 0 0 4px var(--primary-color) inset;
            &:hover {
                border-color: var(--accent-color);
                box-shadow: 0 0 8px var(--shd-accent-color) inset;
            }
            &:hover svg {
                color: var(--accent-color);
                fill: var(--accent-color);
            }
            &:active {
                box-shadow: 0 0 20px var(--shd-accent-color) inset;
            }
        }

        .subtle-btn {
            box-shadow: none;
            background-color: transparent;
            &:hover {
                background-color: var(--secondary-color);
            }
            &:active {
                background-color: var(--hover-bg-color);
            }
        }

        .transparent-btn {
            box-shadow: none;
            background-color: transparent;
            &:hover, &:hover svg {
                color: var(--accent-color);
            }
            &:active {
                background-color: var(--active-bg-color);
            }
        }

        /*—————————— Viewport Media Query ——————————*/

        @media (max-width: 600px){
        }

        @media (max-width: 400px) {

            button {
                font-size: 14px;
            }
        }

        `;
    }

    initComponent(){}

};

customElements.define('button-component', ButtonUI);