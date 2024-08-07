import { WEBComponent } from '../../app-components/webcomponent.js';

class CounterUI extends WEBComponent {
    constructor(){
        super();
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        // this.componentAttributes()
        this.renderComponent()
        this.quantityCounter()
        // this.initComponent()
    }

    renderComponent() {
        this.shadowDOM.innerHTML = `
            <style>${this.componentTemplateCSS()}</style>
            ${this.componentTemplateHTML()}
        `;
    }

    componentTemplateCSS() {
        return /*CSS*/ `
        
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
        
        .quantity-counter {
            display: flex;
            gap: 1em;
            
            > div {
                width: 100%;
                padding: 1.5em;
                border-radius: .5em;
                background-color: var(--back-color);
                text-align: center;

                > div:has(span) {   /* Aquel <div> que tenga en su interior un <span> */
                    margin: 1em 0;
                }
                span {
                    font-size: 1.5em;
                }
                p {
                    margin: 0;
                }
            }
        }

        
        @media( 440px <= width <= 1010px ){
            .quantity-counter{
                justify-content: center;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 2em;
                > div {
                    width: 30%;
                }
            }
        }

        @media( width < 440px ){
            .quantity-counter{
                flex-direction: column;
                align-items: center;
                gap: 2em;
                > div {
                    width: 80%;
                }
            }
        }
        `;
    }

    componentTemplateHTML() {
        return /*HTML*/ `
        <h2>Contador</h2>
        <section class="quantity-counter">
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.801 6.49l1.486-1.486c1.673-1.673 3.862-2.367 6.18-2.48c.902-.044 1.352-.066 1.714.295c.361.362.34.812.295 1.714c-.113 2.318-.807 4.507-2.48 6.18L17.511 12.2c-1.224 1.223-1.572 1.571-1.315 2.898c.254 1.014.499 1.995-.238 2.732c-.894.895-1.71.895-2.604 0l-7.183-7.183c-.895-.894-.895-1.71 0-2.604c.737-.737 1.718-.492 2.732-.238c1.327.257 1.675-.091 2.898-1.315m5.195.51h.009M2.5 21.5l5-5m1 5l2-2m-8-4l2-2" color="currentColor"/>
                    </svg>
                </div>
                <div>
                    <span class="digit" data-val="100">0</span>
                </div>
                <div>
                    <p>Proyectos creados</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2M8.009 9H8m8 0h-.009"/></g>
                    </svg>
                </div>
                <div>
                    <span class="digit" data-val="300">0</span>
                </div>
                <div>
                    <p>Clientes satisfechos</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.728 3.444l1.76 3.549c.24.494.88.968 1.42 1.058l3.189.535c2.04.343 2.52 1.835 1.05 3.307l-2.48 2.5c-.42.423-.65 1.24-.52 1.825l.71 3.095c.56 2.45-.73 3.397-2.88 2.117l-2.99-1.785c-.54-.322-1.43-.322-1.98 0L8.019 21.43c-2.14 1.28-3.44.322-2.88-2.117l.71-3.095c.13-.585-.1-1.402-.52-1.825l-2.48-2.5C1.39 10.42 1.86 8.929 3.899 8.586l3.19-.535c.53-.09 1.17-.564 1.41-1.058l1.76-3.549c.96-1.925 2.52-1.925 3.47 0" color="currentColor"/>
                    </svg>
                </div>
                <div>
                    <span class="digit" data-val="200">0</span>
                </div>
                <div>
                    <p>Valoraciones obtenidas</p>
                </div>
            </div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.774 18c.75 0 1.345-.471 1.88-1.13c1.096-1.35-.703-2.43-1.389-2.957c-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 18c-.75 0-1.345-.471-1.88-1.13c-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 0 1 0-5m2.584 9.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353c1.632-1.614-1.047-2.904-2.069-3.536a7.46 7.46 0 0 0-7.832 0M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" color="currentColor"/>
                    </svg>
                </div>
                <div>
                    <span class="digit" data-val="400">0</span>
                </div>
                <div>
                    <p>Miembros del equipo</p>
                </div>
            </div>
        </section>
        `;
    }

    quantityCounter() {
        const digitValue = [...this.shadowRoot.querySelectorAll('.quantity-counter .digit')];
        let interval = 1000;

        digitValue.forEach((e) => {
            let initValue = 0;
            let finalValue = parseInt(e.getAttribute('data-val'));
            let duration = Math.floor(interval / finalValue);
            let counter = setInterval(() => {
                initValue += 1;
                e.textContent = initValue;
                if( initValue == finalValue ){
                    clearInterval(counter);
                }
            }, duration );
        });
    }

};

customElements.define('counter-ui', CounterUI);