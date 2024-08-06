import { WEBComponent } from "../../app-components/webcomponent.js";

class CardUI extends WEBComponent {
    constructor() {
        super();
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
        h2{
            border-top: solid 1px var(--back-color);
            padding-top: 1em;
            + section {
                margin-top: 2em;

                h3 {
                    margin: 0;
                }
                svg {
                    width: 2em;
                    height: 2em;
                }
            }
        }

        strong {
            color: var(--text-color-II);
        }

        .info-cards,
        .icon-cards,
        .profile-cards,
        .diffuse-cards{
            display: flex;
            flex-direction: row;
            font-size: 16px;
            gap: 1em;
            > div {
                width: 100%;
                padding: 1.5em;
                border-radius: .5em;
                background-color: var(--back-color);
                
                &,*{
                    transition: all .4s ease;
                    color: var(--text-color-I);
                }
            }
        }

        .info-cards > div {
            outline: solid 2px transparent;
            &:hover{
                outline-color: var(--text-color-II);
                > h3{
                    color: var(--text-color-II);
                }
            }
            button {
                width: 40%;
                min-width: 110px;
                padding: .5em 1em;
                cursor: pointer;

                border: none;
                border-radius: .5em;
                outline: solid 2px transparent;
                
                font-size: 1em;
                font-family: "Exo 2";
                text-align: center;
                
                background-color: var(--back-color);
                
                &:hover {
                    color: #fff;
                    background-color: var(--text-color-II);
                }
            }
        }

        .icon-cards > div {
            display: flex;
            border-left: solid 4px transparent;
            svg {
                margin-right: 1em;
            }
            h3 {
                margin: 6px 0;
            }
            p {
                margin-bottom: 0;
            }
            &:hover {
                border-left: solid 4px var(--text-color-II);
                svg * , h3 {
                    color: var(--text-color-II);
                }
            }
        }

        .profile-cards > div {
            img {
                width: 100%;
                height: auto;
                aspect-ratio: 2/2;
                border-radius: 50em;
                object-fit: cover;
                object-position: top;
                margin: 0 auto;
                filter: brightness(0.9);
                
                transition: all .4s ease;
            }            
            h3 {
                margin: 16px 0 6px 0;
            }
            .icons {
                display: flex;
                justify-content: center;
                gap: 1em;
                div {
                    width: 32px;
                    height: 32px;
                    padding: .5em;
                    border-radius: .5em;

                    &:hover {
                        background-color: var(--text-color-II);
                        svg * {
                            color: #fff;
                        }
                    }
                }
            }

            &:hover {
                background-color: var(--back-color-hover);
                img {
                    filter: brightness(1);
                    transform: translateY(-.5em)
                }
            }
        }

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
                background: radial-gradient( var(--text-color-II), transparent, transparent);
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
                inset: 1em;
                border-radius: .5em;
                background-color: var(--back-color);
            }
        }

        .album-cards {
            display: flex;
            width: 90%;
            padding: 1.5em;
            article {
                background-color: var(--back-color);
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
                            -4px 0 10px rgba(0,0,0,0.1),
                            -6px 0 10px rgba(0,0,0,0.1);
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
                background-color: var(--back-color);
                outline: solid .6em var(--back-color);
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


        @media( 600px <= width <= 900px ) {
            .icon-cards {
                flex-direction: column;
                div {
                    width: calc(100% - 3em);
                    & div:nth-child(1){
                        width: max-content;
                    }
                }
            }
        }

        @media ( width < 600px ) {
            .info-cards, 
            .icon-cards, 
            .profile-cards, 
            .diffuse-cards,
            .album-cards {
                flex-direction: column;
                > div {
                    width: calc(100% - 3em);
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
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h16"/><circle cx="6" cy="20" r="2"/><circle cx="17" cy="20" r="2"/><path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"/></g>
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
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.463 3.994c-2.682-1.645-5.023-.982-6.429.074c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.012 7.219 2.349 4.537 3.994C1.018 6.153.222 13.274 8.34 19.284C9.886 20.427 10.659 21 12 21s2.114-.572 3.66-1.717c8.118-6.008 7.322-13.13 3.803-15.289" color="currentColor"/>
                    </svg>
                </div>
                <div>
                    <h3>My favourites</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715c2.55-1.52 5.628-1.87 8.422-1.054M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.933 7.349c.335-.364.503-.546.681-.652a1.4 1.4 0 0 1 1.397-.02c.18.1.354.277.7.63c.345.353.518.53.616.714c.238.447.23.988-.02 1.427c-.104.182-.282.353-.638.696l-4.231 4.075c-.674.65-1.011.974-1.432 1.139c-.421.164-.885.152-1.81.128l-.127-.003c-.282-.008-.422-.012-.504-.105s-.071-.236-.049-.523l.012-.156c.063-.808.095-1.213.253-1.576c.157-.363.43-.658.974-1.248z" color="currentColor"/>
                    </svg>
                </div>
                <div>
                    <h3>Custom profile</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
            </div>
        </section>

        <!------------- next component ------------->

        <h2> Profile cards </h2>
        <section class="profile-cards">
            <div>
                <div>
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_UI/main/assets/images/Jeff_Bezos.webp">
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
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_UI/main/assets/images/Bill_Gates.webp">
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
                    <img src="https://raw.githubusercontent.com/gaboquerizo/Components_UI/main/assets/images/Steve_Jobs.webp">
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

        <!------------- next component ------------->

        <h2> Diffuse light cards <strong>effect</strong></h2>
        <section class="diffuse-cards">
            <div></div>
            <div></div>
            <div></div>
        </section>

        <!------------- next component ------------->

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
        `;
    }

    coordinatesLight() {
        const elementsCard = this.shadowRoot.querySelectorAll(`.diffuse-cards div`);
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

customElements.define('card-ui', CardUI);