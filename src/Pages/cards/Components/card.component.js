class CardUI extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes();
        this.renderComponent();
        this.coordinatesLight();
        // this.initComponent();
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.componentTemplateCSS()}</style>
            ${this.componentTemplateHTML()}
        `;
    }

    componentTemplateCSS() {
        return /* CSS */ `

        /*------------- general styles -------------*/

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

        svg {
            width: var(--size-5);
            height: var(--size-5);
            color: var(--txt-color-3);
            fill: var(--txt-color-3);
        }

        strong {
            color: var(--accent-color);
        }
        
        /*------------- semantic structure -------------*/

        .info-cards,
        .icon-cards,
        .profile-cards,
        .diffuse-cards {
            display: flex;
            gap: var(--space-100);
            font-size: var(--size-1);
            margin-bottom: var(--space-150);

            > div {
                width: 100%;
                display: flex;
                padding: calc(var(--space-100) + var(--space-025));
                border-radius: var(--radius-2);
                background-color: var(--secondary-color);
                
                &,*{
                    transition: all var(--trans-2);
                    color: var(--txt-color-2);
                }
            }
        }

        /*------------- info cards styles -------------*/

        .info-cards > div {
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
            gap: var(--space-075);

            border: var(--solid-1) var(--edge-color);
            outline: var(--solid-2) transparent;
            box-shadow: var(--shadow-1);
            cursor: default;

            h3 {
                color: var(--txt-color-1);
            }

            p {
                color: var(--txt-color-2);
            }
            
            &:hover {
                outline-color: var(--shd-color-3);
            }

            button {
                width: max-content;
                min-width: 50%;
                padding: var(--space-050) var(--space-100);
                cursor: pointer;

                border: none;
                border-radius: var(--radius-2);
                
                font-size: var(--size-1);
                font-family: "Exo 2";
                text-align: center;
                
                background-color: var(--secondary-color);
                
                &:hover {
                    background-color: var(--hover-cp-color);
                }
                &:active {
                    background-color: var(--active-cp-color);
                }
            }
        }

        /*------------- icon cards styles -------------*/

        .icon-cards > div {
            outline: var(--solid-1) var(--edge-color);
            border-left: var(--solid-3) transparent;
            cursor: default;
            div:has(svg) {
                margin: var(--space-025) var(--space-100) 0 0;
            }
            h3 {
                margin-block: var(--space-050);
            }
            p {
                margin-bottom: 0;
            }
            &:hover {
                border-left: var(--solid-3) var(--accent-color);
                svg * , h3 {
                    color: var(--accent-color);
                }
            }
        }

        /*------------- profile cards styles -------------*/

        .profile-cards > div {
            flex-direction: column;
            gap: var(--space-100);
            text-align: center;

            img {
                width: 100%;
                height: auto;
                aspect-ratio: 2/2;
                border-radius: 10em;
                object-fit: cover;
                object-position: top;
                margin: 0 auto;
                filter: brightness(0.9);

                user-select: none;
                pointer-events: none;
                
                transition: all var(--trans-2);
            }
            h3 {
                margin-bottom: var(--space-025);
            }

            &:hover {

                h3 {
                    color: var(--accent-color);
                }
                img {
                    filter: var(--eff-light);
                    transform: translateY(-.5em)
                }
            }

            .icons {
                display: flex;
                justify-content: center;
                gap: 1em;
                div {
                    display: flex;
                    width: max-content;
                    height: max-content;

                    padding: var(--space-050);
                    border-radius: var(--radius-2);
                    cursor: pointer;

                    &:hover {
                        background-color: var(--hover-cp-color);
                        svg * {
                            color: var(--accent-color);
                        }
                    }
                }
            }
        }

        /*------------- diffuse cards styles -------------*/

        .diffuse-cards > div {
            position: relative;
            height: 200px;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: var(--y);
                left: var(--x);
                transform: translate(-50% , -50%);
                background: radial-gradient( var(--accent-color), transparent, transparent);
                width: 500px;
                height: 500px;

                opacity: 0;
                transition: .8s, top 0s, left 0s;
            }
            &:hover::before{
                opacity: 1;
            }
            &::after {
                content: '';
                position: absolute;
                inset: var(--space-025);
                border-radius: var(--radius-2);
                background-color: var(--secondary-color);
                opacity: .8; /*Mejor cambiar a un color con opacidad*/
            }
        }
        
        /*------------- album cards styles -------------*/

        .album-cards {
            display: flex;
            width: 96%;
            padding: 1.5em;
            article {
                background-color: var(--secondary-color);
                box-sizing: border-box;
                width: 300px;
                height: 350px;
                padding: 1.5em;
                
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                
                outline: solid 2px transparent;
                border-radius: .5em;
                box-shadow: -2px 0 10px rgba(0,0,0,0.1),
                            -4px 0 20px rgba(0,0,0,0.1);
                transition: all 0.4s ease;
            }
            article+*{
                margin-left: -120px;
                backdrop-filter: blur(2em);
                
                &:not(:last-child):hover {
                    margin-left: -160px;
                }
            }
            article:hover {
                transform: rotate(3deg) translateY(-15px);
                box-shadow: 0px 0px 0px #0000;
                outline-color: var(--text-color-II);

                &:not(:last-child):hover{
                    margin-right: 80px;
                }
            }

            a {
                width: fit-content;  /* Good property */
                display: flex;
                align-items: center;
                gap: 10px;
                > {
                    width: max-content;
                }
            }
            a:hover {
                background-color: var(--hover-cp-color);
                outline: solid .6em var(--shd-color-3);
                border-radius: 1px;
                cursor: default;
            }
            img {
                width: 30px;
                border-radius: 5em;
            }
            p, span {
                font-size: 16px;
            }
            h3 {
                font-size: 1.5em;
            }
        }


        @media (max-width: 1080px) {
            
            .icon-cards > div {
                flex-direction: column;
                div:has(svg) {
                    margin: 0;
                }
            }

        }

        @media (max-width: 900px) {
            .icon-cards {
                flex-direction: column;
                div {
                    width: 100%;
                    & div:nth-child(1){
                        width: max-content;
                    }
                }
            }
        }

        @media (max-width: 600px) {

            h2 {
                font-size: var(--size-3);
            }

            .info-cards, 
            .icon-cards, 
            .profile-cards, 
            .diffuse-cards,
            .album-cards {
                flex-direction: column;
                > div {
                    padding: var(--space-100);
                }
            }
            
            .album-cards {
                align-items: center;

                article+*{
                    margin-left: 0px;
                    margin-top: -220px;
                    
                    &:not(:last-child):hover {
                        margin-left: 0px;
                        margin-top: -260px;
                        margin-bottom: 202px;
                    }
                }

                article:hover {
                    &:not(:last-child):hover{
                        margin-right: 0px;
                        margin-bottom: 202px;
                    }
                }
            }
        }

        @media (max-width: 400px) {
            
            h2 {
                font-size: var(--size-2);
            }

            .info-cards,
            .info-cards,
            .icon-cards, 
            .profile-cards, 
            .diffuse-cards,
            .album-cards {
                button, p {
                    font-size: 14px;
                }
            }

        }

        `;
    }

    componentTemplateHTML() {
        return /* HTML */ `
        <h2> Info cards </h2>
        <section class="info-cards">
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card content</p>
                <button>Leer más</button>
            </div>
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card content</p>
                <button>Leer más</button>
            </div>
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <button>Leer más</button>
            </div>
        </section>

        <!------------- next component ------------->
        
        <h2> Icon cards </h2>
        <section class="icon-cards">
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"></path>
                    </svg>
                </div>
                <div>
                    <h3>Shopping cart</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29c2.64-1.8 5.9-.96 7.66 1.1c1.76-2.06 5.02-2.91 7.66-1.1c1.41.96 2.28 2.59 2.34 4.29c.14 3.88-3.3 6.99-8.55 11.76z" />
                    </svg>
                </div>
                <div>
                    <h3>Favourites</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z" />
                    </svg>
                </div>
                <div>
                    <h3>Credit card</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
            </div>
        </section>
        
        <!------------- next component ------------->
        <!--
        <h2> Profile cards </h2>
        <section class="profile-cards">
            <div>
                <div>
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_ui/refs/heads/main/src/Assets/images/Jeff_Bezos.webp">
                </div>
                <div>
                    <h3> Jeff Bezos </h3>
                    <span> Fundador de Amazon <span>
                </div>
                <div>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
                <div class="icons">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009"/><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m7 8.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5"/><path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"/></g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_ui/refs/heads/main/src/Assets/images/Bill_Gates.webp">
                </div>
                <div>
                    <h3> Bill Gates </h3>
                    <span> Fundador de Microsoft <span>
                </div>
                <div>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
                <div class="icons">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009"/><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m7 8.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5"/><path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"/></g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_ui/refs/heads/main/src/Assets/images/Steve_Jobs.webp">
                </div>
                <div>
                    <h3> Steve Jobs </h3>
                    <span> Fundador de Apple <span>
                </div>
                <div>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
                <div class="icons">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009"/><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m7 8.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5"/><path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"/></g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        -->
        <!------------- next component ------------->
        
        <h2> Diffuse light cards <strong>effect</strong></h2>
        <section class="diffuse-cards">
            <div></div>
            <div></div>
            <div></div>
        </section>
        
        <!------------- next component ------------->
        <!--
        <h2> Musical cards <strong>effect</strong></h2>
        <section class="album-cards">

            <article>
                <header>
                    <p>29 de Junio 2015</p>
                    <h3>Where Are Ü Now</h3>
                </header>
                <footer>    
                    <a>
                        <img src="https://veromerol.com.mx/wp-content/uploads/2016/02/Jack-%C3%9C-logopromo-2016-e1458750276560.png" alt="">
                        <span>Jack Ü</span>
                    </a>
                </footer>
            </article>

            <article>
                <header>
                    <p>7 de Abril 2016</p>
                    <h3>Play Hard</h3>
                </header>
                <footer>    
                    <a>
                        <img src="https://www.pngkey.com/png/full/29-299150_wiley-fox-logo-design-david-guetta.png" alt="">
                        <span>David Guetta</span>
                    </a>
                </footer>
            </article>

            <article>
                <header>
                    <p>24 de Mayo 2016</p>
                    <h3>Idols</h3>
                </header>
                <footer>    
                    <a>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_sjQnQxRc9WGQCxIhY_TdBwKSOs4Nbv6AQ&s" alt="">
                        <span>Virtual Riot</span>
                    </a>
                </footer>
            </article>

            <article>
                <header>
                    <p>2 de Julio 2016</p>
                    <h3>Alone</h3>
                </header>
                <footer>    
                    <a>
                        <img src="https://i.pinimg.com/originals/f2/a8/3b/f2a83b69dad12688b47dbf2bb12b8932.jpg" alt="">
                        <span>Marshmello</span>
                    </a>
                </footer>
            </article>
            
            <article>
                <header>
                    <p>21 de Agosto 2019</p>
                    <h3>Teeth</h3>
                </header>
                <footer>    
                    <a>
                        <img src="https://i.pinimg.com/originals/c7/18/b5/c718b5d52d27ff5da404e23f4ea4bec2.jpg" alt="">
                        <span>5 Second of Summer</span>
                    </a>
                </footer>
            </article>

        </section>
        -->

        `;
    }

    coordinatesLight() {
        const elementsCard = this.shadowRoot.querySelectorAll('.diffuse-cards div');
        const cards = Array.from(elementsCard);

        cards.forEach( card => {
            card.onmousemove = function(e){
                let x = e.pageX - card.offsetLeft;
                let y = e.pageY - card.offsetTop;

                card.style.setProperty(`--x`, `${x}px`);    // El método .setProperty() recibe dos parámetros
                card.style.setProperty(`--y`, `${y}px`);
            }
        } );

    }
};

customElements.define('card-component', CardUI);