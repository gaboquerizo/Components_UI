class AnimatedButton extends HTMLElement {

    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode:'open'})
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
            ${this.templateCSS()}
            </style>
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return /*HTML*/ `
        
        <header>
            <h2>Animated buttons</h2>
        </header>
        <section>
            <button anime-btn-1>
                <span>
                    Bubble
                </span>
            </button>
            <button anime-btn-2>
                <span>
                    Rhomboid
                </span>
            </button>
            <button anime-btn-3>
                <span>
                    Edge
                </span>
                <svg><rect x=0 Y=0 fill=none></rect></svg>
            </button>
        </section>

        `;
    }

    templateCSS() {
        return /*CSS*/ `
        
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

        [anime-btn-1] {
            background-color: transparent;
            border: var(--solid-2) var(--accent-color);
            color: var(--accent-color);
            overflow: hidden;
            position: relative;
            z-index: 1;
            
            &::before {
                content:"";
                position: absolute;
                width: 100%;
                height: 200%;
                left: 0;
                top: -200%;
                background-color: var(--accent-color);
                border-radius: 50%;
                z-index: -1;
                transition: all var(--trans-3);
            }

            &:hover::before {
                top: 0;
                border-radius: 0%;
            }
            
            &:hover {
                color: #fff;
            }
        }

        [anime-btn-2] {
            background-color: transparent;
            position: relative;
            overflow: hidden;
            border: var(--solid-2) var(--edge-color-1);
            color: var(--txt-color-2);
            &:hover {
                border-color: var(--accent-color);
                color: #fff;
            }

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                top: 0;
                left: calc(-100% - 50%);
                border-bottom: 64px solid var(--accent-color);
                border-right: 64px solid transparent;
                z-index: -1;
                transition: all .4s ease-in-out;
            }
            &:hover::after {
                left: 0;
            }
        }

        [anime-btn-3] {
            background-color: transparent;
            border: var(--solid-1) transparent;
            border-radius: 0;
            position: relative;
            color: var(--txt-color-2);
            box-shadow: none;
            svg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                fill: none;
            }
            
            rect {
                width: calc(100% - 2px);
                height: 100%;
                stroke: var(--accent-color);
                stroke-width: 2px;
                stroke-dasharray: 1400;
                stroke-dashoffset: 1400;
                transition: all 1s ease-in;
            }
            
            &:hover {
                background-color: var(--hover-ui-color);
                color: var(--accent-color);

                rect {
                    stroke-dashoffset: 2px;
                }
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

    initComponent() {}

};

customElements.define('animated-button-component', AnimatedButton);