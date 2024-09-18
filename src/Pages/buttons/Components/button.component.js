class ButtonUI extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {
        this.remove()
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent()
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

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Exo 2";
            font-size: var(--size-1);
        }
        
        h2 {
            font-weight: 400;
            color: var(--txt-color-2);
            padding-block: var(--space-100);
            border-top: var(--solid-1) var(--edge-color-2);
        }

        .basic-button, .icon-button, .animated-button {
            display: flex;
            flex-direction: column;
            width: 100%;
            div {
                display: flex;
                flex-direction: row;
                margin-bottom: var(--space-100);
                gap: var(--space-100);
            }
        }

        .basic-button button, .icon-button a, .animated-button button {
            width: 100%;
            padding-block: var(--space-100);
            cursor: pointer;
            text-align: center;
            color: var(--text-color-1);
            
            border: none;
            border-radius: var(--radius-2);
            box-shadow: var(--shadow-1);
            
            transition: all var(--trans-2);
        }

        .basic-button button.btn-1, .icon-button a {
            background-color: var(--accent-color);
            color: #fff;
            border-bottom: var(--solid-3) var(--shd-color-3);
            &:hover {
                filter: var(--eff-light);
            }
        }

        .basic-button button.btn-2 {
            background-color: var(--hover-ui-color);
            color: var(--txt-color-2);
            border-bottom: var(--solid-3) var(--active-ui-color);
            &:hover {
                background-color: var(--active-ui-color);
            }
        }

        .basic-button button.btn-3 {
            background-color: var(--txt-color-3);
            color: var(--primary-color);
            border-bottom: var(--solid-3) var(--txt-color-2);
            &:hover {
                background-color: var(--txt-color-2);
            }
        }

        .basic-button button.btn-1-ol {
            background-color: transparent;
            border: var(--solid-2) var(--accent-color);
            color: var(--accent-color);
            box-shadow: none;
            &:hover {
                filter: var(--eff-light);
            }
        }

        .basic-button button.btn-2-ol {
            background-color: transparent;
            border: var(--solid-2) var(--hover-ui-color);
            color: var(--txt-color-2);
            box-shadow: none;
            &:hover {
                background-color: var(--hover-ui-color);
            }
        }

        .basic-button button.btn-3-ol {
            background-color: transparent;
            border: var(--solid-2) var(--txt-color-3);
            color: var(--txt-color-2);
            box-shadow: none;
            &:hover {
                border-color: var(--txt-color-2);
            }
        }

        .icon-button a {
            text-decoration: none;
            cursor: pointer;
            &:visited {
                color: #fff;
            }
        }
        
        .icon-button a {
            svg {
                vertical-align: middle;
            }
            span {
                padding-top: 2px;
            }
            &.btn-2 {
                background-color: var(--hover-ui-color);
                color: var(--txt-color-2);
                border-bottom: var(--solid-3) var(--active-ui-color);
                &:hover {
                    filter: none;
                    background-color: var(--active-ui-color);
                }
            }
            &.btn-3 {
                background-color: transparent;
                color: var(--txt-color-2);
                border: none;
                &:hover {
                    background-color: transparent;
                }
            }
        }

        a .icon-arrow-right {
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

        a:hover .icon-arrow-right {
            .head {
                transform: translate(5px);
            }
            .line {
                transform: translate(5px) scaleX(1);
                
            }
        }

        .icon-button a span {
            padding-left: var(--space-050);
        }

        .animated-button button.anime-btn-1 {
            background-color: transparent;
            outline: solid 2px var(--text-color-II);
            color: var(--text-color-II);
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
                background-color: var(--text-color-II);
                border-radius: 50%;
                z-index: -1;
                transition: all .4s ease-in;
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
            outline: solid 2px #568;
            color: #568;
            &:hover {
                outline: solid 2px var(--text-color-II);
                color: #fff;
            }

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                top: 0;
                left: calc(-100% - 50%);
                border-bottom: 64px solid var(--text-color-II);
                border-right: 64px solid transparent;
                z-index: -1;
                transition: all .4s ease-in-out;
            }
            &:hover::after {
                left: 0;
            }
        }

        .animated-button button.anime-btn-3 {
            background-color: var(--back-color);
            position: relative;
            color: var(--text-color-I);
            svg {
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 4px;
                top: 0;
                left: 0;
                fill: none;
            }
            
            rect {
                width: calc(100% - 2.5px);
                height: 100%;
                stroke: var(--text-color-I);
                stroke-width: 4px;
                stroke-dasharray: 1400;
                stroke-dashoffset: 1400;
                transition: all 1s ease;
            }
            
            &:hover rect {
                stroke-dashoffset: 0;
            }
        }


        @media( 600px <= width <= 900px ){

            .basic-button, .icon-button, .animated-button {
                flex-direction: row;
                div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-right: var(--space-100);
                }
            }
        }

        @media( width < 600px ){

            .basic-button div, .icon-button div, .animated-button div {
                flex-direction: column;
            }
        }

        `;
    }

    componentTemplateHTML() {
        return /* HTML */ `
        
        <h2>Basic buttons</h2>
        <section class="basic-button">
            <div>
                <button class="btn-1"> Primary </button>
                <button class="btn-2"> Secondary </button>
                <button class="btn-3"> Constrast </button>
            </div>

            <div>
                <button class="btn-1-ol"> Primary outline </button>
                <button class="btn-2-ol"> Secondary outline </button>
                <button class="btn-3-ol"> Contrast outline </button>
            </div>
        </section>

        <!------------- next component ------------->
        
        <h2>Icon buttons</h2>
        <section class="icon-button">
            <div>
                <a class="get-started">
                    <span>Get started</span>
                    <svg class="icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g>
                        <path class="line" d="M0 12H14"></path>
                    </svg>
                </a>
                <a class="send-mail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329ZM19 6.001L8.032 13.152l1.735 1.66L19 6Z"/></g>
                    </svg>
                    <span> Send mail </span>
                </a>
                <a class="add-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"/>
                    </svg>
                    <span>Add to cart</span>
                </a>
            </div>
            <div>
                <a class="please-wait btn-1">
                    <svg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                        <style> .please-wait g { animation: rotate 2s linear infinite; transform-origin: center center; } circle { stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; } @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes dash { 0% { stroke-dasharray: 1,100; stroke-dashoffset: 0; } 50% { stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; } 100% { stroke-dasharray: 44.5,100; stroke-dashoffset: -62; } } </style><g><circle cx='12' cy='12' r='10' fill='none' stroke='#fff' stroke-width='4' /></g>
                    </svg>
                    <span>Please wait...</span>
                </a>
                <a class="please-wait btn-2">
                    <svg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                        <style> .please-wait g { animation: rotate 2s linear infinite; transform-origin: center center; } circle { stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; } @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes dash { 0% { stroke-dasharray: 1,100; stroke-dashoffset: 0; } 50% { stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; } 100% { stroke-dasharray: 44.5,100; stroke-dashoffset: -62; } } </style><g><circle cx='12' cy='12' r='10' fill='none' stroke='var(--txt-color-2)' stroke-width='4' /></g>
                    </svg>
                    <span>Please wait...</span>
                </a>
                <a class="please-wait btn-3">
                    <svg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                        <style> .please-wait g { animation: rotate 2s linear infinite; transform-origin: center center; } circle { stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; } @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes dash { 0% { stroke-dasharray: 1,100; stroke-dashoffset: 0; } 50% { stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; } 100% { stroke-dasharray: 44.5,100; stroke-dashoffset: -62; } } </style><g><circle cx='12' cy='12' r='10' fill='none' stroke='var(--txt-color-3)' stroke-width='4' /></g>
                    </svg>
                    <span>Please wait...</span>
                </a>
            </div>
        </section>

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

};

customElements.define('button-component', ButtonUI);