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
            <style> ${ this.templateCSS() } </style>
            ${ this.templateHTML() }
        `;
    }

    templateCSS() {
        return /* CSS */ `

        /*------------- general styles -------------*/

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Exo 2";
        }
        
        h2 {
            font-weight: 400;
            color: var(--txt-color-2);
            padding-block: var(--space-100);
            border-top: var(--solid-1) var(--edge-color-2);
        }

        /*------------- semantic structure -------------*/

        .basic-anchor,
        .basic-button,
        .icon-button,
        .animated-button {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--space-100);

            width: 100%;
            margin-bottom: var(--space-150);
        }

        a, button {
            width: max-content;
            display: block;
            padding: var(--space-050) var(--space-150);
            
            font-size: var(--size-1);
            color: var(--txt-color-1);
            text-align: center;
            text-decoration: none;
            
            border: none;
            border-radius: var(--radius-1);
            box-shadow: var(--shadow-1);
            
            cursor: pointer;
            transition: all var(--trans-2);
        }

        /*------------- basic anchor and button styles -------------*/

        .primary-btn {
            color: #fff;
            background-color: var(--accent-color);
            &:hover {
                filter: var(--eff-light);
                box-shadow: var(--shadow-3);
            }

            svg {
                color: #fff;
                fill: #fff;
            }
        }

        .secondary-btn {
            background-color: var(--secondary-color);
            &:hover {
                background-color: var(--hover-cp-color);
            }
        }

        .outline-btn {
            background-color: transparent;
            border: var(--solid-1) var(--edge-color);
            box-shadow: 0 -2px 12px var(--secondary-color) inset;
            &:hover {
                border-color: var(--accent-color);
                box-shadow: 0 -2px 6px var(--shd-color-3) inset;
            }
            &:active {
                box-shadow: 0 -4px 12px var(--shd-color-3) inset;
            }
        }

        .subtle-btn {
            box-shadow: none;
            background-color: transparent;
            &:hover {
                background-color: var(--active-cp-color);
            }
            &:active {
                background-color: var(--secondary-color);
            }
        }

        .transparent-btn {
            box-shadow: none;
            background-color: transparent;
            &:hover, &:hover svg {
                color: var(--accent-color);
            }
            &:active {
                background-color: var(--secondary-color);
            }
        }

        /*------------- icon button styles -------------*/
        
        a:has(svg) {
            display: flex;
            align-items: center;
            gap: var(--space-050);
            padding: var(--space-050) var(--space-100);
        }

        svg {
            width: var(--size-3);
            height: var(--size-3);
            color: var(--txt-color-3);
            fill: var(--txt-color-3);
        }

        svg, span {
            user-select: none;
            pointer-events: none;
        }

        svg.icon-arrow-right {
            .head {
                transform: translate(0);
                transition: all var(--trans-3);
            }
            .line {
                transform: translate(0) scaleX(0);
                transform-origin: 14px;
                transition: all var(--trans-3);
            }
        }

        button:hover,
        a:hover {
            svg.icon-arrow-right {
                .head {
                    transform: translate(5px);
                }
                .line {
                    transform: translate(5px) scaleX(1);
                }
            }
        }
        
        .only-icon {
            padding: var(--space-050);
            display: flex;
        }

        /*------------- icon button styles -------------*/
        

        .animated-button button.anime-btn-1 {
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

        .animated-button button.anime-btn-2 {
            background-color: transparent;
            position: relative;
            overflow: hidden;
            border: var(--solid-1) var(--edge-color);
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

        .animated-button button.anime-btn-3 {
            border: var(--solid-1) var(--edge-color);
            background-color: transparent;
            position: relative;
            color: var(--txt-color-2);
            svg {
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: var(--radius-1);
                top: 0;
                left: 0;
                fill: none;
            }
            
            rect {
                width: calc(100% - 2.5px);
                height: 100%;
                stroke: var(--accent-color);
                stroke-width: 4px;
                stroke-dasharray: 1400;
                stroke-dashoffset: 1400;
                transition: all 1s ease;
            }
            
            &:hover {
                background-color: var(--active-ui-color);
                color: var(--accent-color);

                rect {
                    stroke-dashoffset: 0;
                }
            }
            
        }


        @media (max-width: 900px){
        }

        @media (max-width: 600px){
        }

        @media (max-width: 400px) {

            a, button {
                font-size: 14px;
            }

        }

        `;
    }

    templateHTML() {
        return /* HTML */ `
        
        <h2>Anchor</h2>
        <div class="basic-anchor">
            <a class=primary-btn > Primary </a>
            <a class=secondary-btn > Secondary </a>
            <a class=outline-btn > Outline </a>
            <a class=subtle-btn > Subtle </a>
            <a class=transparent-btn > Transparent </a>
        </div>

        <!------------- next component ------------->
        
        <h2>Button</h2>
        <div class=basic-button>
            <button class=primary-btn > Primary </button>
            <button class=secondary-btn > Secondary </button>
            <button class=outline-btn > Outline </button>
            <button class=subtle-btn > Subtle </button>
            <button class=transparent-btn > Transparent </button>
        </div>

        <!------------- next component ------------->
        
        <h2>Icon buttons</h2>
        <div class="icon-button">
            <a class="primary-btn only-icon" gb-icon-cart></a>
            <a class="secondary-btn only-icon" gb-icon-cart></a>
            <a class="outline-btn only-icon" gb-icon-cart></a>
            <a class="subtle-btn only-icon" gb-icon-cart></a>
            <a class="transparent-btn only-icon" gb-icon-cart></a>
        </div>

        <div class="icon-button">
            <a class="primary-btn" gb-icon-arrow-right>
                <span>
                    Get started
                </span>
            </a>
            <a class="secondary-btn" gb-icon-arrow-right>
                <span>
                    Get started
                </span>
            </a>
            <a class="outline-btn" gb-icon-arrow-right>
                <span>
                    Get started
                </span>
            </a>
            <a class="subtle-btn" gb-icon-arrow-right>
                <span>
                    Get started
                </span>
            </a>
            <a class="transparent-btn" gb-icon-arrow-right>
                <span>
                    Get started
                </span>
            </a>
        </div>

        <div class="icon-button">
            <a class="primary-btn" gb-icon-sent-left>
                <span>
                    Send message
                </span>
            </a>
            <a class="primary-btn" gb-icon-please-left>
                <span>
                    Please wait...
                </span>
            </a>
            <a class="secondary-btn" gb-icon-add-left>
                <span>
                    Create new
                </span>
            </a>
            <a class="outline-btn" gb-icon-back-left>
                <span>
                    Come back
                </span>
            </a>
            <a class="subtle-btn" gb-icon-setting-left>
                <span>
                    Settings
                </span>
            </a>
            <a class="transparent-btn" gb-icon-account-left>
                <span>
                    My account
                </span>
            </a>
        </div>

        <!------------- next component ------------->

        <h2>Animated buttons</h2>
        <section class="animated-button">
            <div>            
                <button class="anime-btn-1"> Bubble </button>
                <button class="anime-btn-2"> Rhomboid </button>
                <button class="anime-btn-3"> Edge <svg><rect x=0 Y=0 fill=none></rect></svg> </button>
            </div>
            <div>
            </div>
        </section>

        `;
    }

    initComponent(){

        const $$ = (el) => Array.from(this.shadowRoot.querySelectorAll(el));

        const iconCartElement = $$('[gb-icon-cart]');
        const iconArrowRightElement =  $$('[gb-icon-arrow-right]');
        const iconSentLeftElement =  $$('[gb-icon-sent-left]');
        const iconPleaseLeftElement =  $$('[gb-icon-please-left]');
        const iconAddLeftElement =  $$('[gb-icon-add-left]');
        const iconBackLeftElement =  $$('[gb-icon-back-left]');
        const iconSettingLeftElement =  $$('[gb-icon-setting-left]');
        const iconAccountLeftElement =  $$('[gb-icon-account-left]');

        iconCartElement.forEach((el) => {
            el.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"/>
                </svg>
            `;
        })

        iconArrowRightElement.forEach((el) => {
            const iconArrowRight = `
                <svg class="icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g>
                    <path class="line" d="M0 12H14"></path>
                </svg>
            `
            el.insertAdjacentHTML("beforeend", iconArrowRight);
        });

        iconSentLeftElement.forEach((el) => {
            const iconSentLeft = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91" />
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconSentLeft);
        });

        iconPleaseLeftElement.forEach((el) => {
            const iconPleaseLeft = `
                <svg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                    <style> [gb-icon-please-left] g { animation: rotate 2s linear infinite; transform-origin: center center; } circle { stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; } @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes dash { 0% { stroke-dasharray: 1,100; stroke-dashoffset: 0; } 50% { stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; } 100% { stroke-dasharray: 44.5,100; stroke-dashoffset: -62; } } </style><g><circle cx='12' cy='12' r='10' fill='none' stroke='#fff' stroke-width='4' /></g>
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconPleaseLeft);
        });
        
        iconAddLeftElement.forEach((el) => {
            const iconAddLeft = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconAddLeft);
        });
        
        iconBackLeftElement.forEach((el) => {
            const iconBackLeft = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" />
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconBackLeft);
        });
        
        iconSettingLeftElement.forEach((el) => {
            const iconSettingLeft = `
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6" />
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconSettingLeft);
        });
        
        iconAccountLeftElement.forEach((el) => {
            const iconAccountLeft = `
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20" />
                </svg>
            `
            el.insertAdjacentHTML("afterbegin", iconAccountLeft);
        });

    }

};

customElements.define('button-component', ButtonUI);