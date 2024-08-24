import { WEBComponent } from "./webcomponent.js";

class ComponentListMenu extends WEBComponent {

    constructor(){
        super();
        /* No es necesario habilitar el shadowDOM porque ya se encuentra HEREDADO */
    }

    connectedCallback() {
        this.renderComponent()
        this.componentChange()
    }

    renderComponent() {
        this.shadowRoot.innerHTML = `
            <style> ${ this.componentTemplateCSS() } </style>
            ${ this.componentTemplateHTML() }
        `;
    }

    componentTemplateCSS() {
        return /* CSS */ `
        ul {
            padding: 0;
        }
        li {
            padding-bottom: 1em;
            list-style: none;
            white-space: nowrap; /* Impide que el texto haga saltos de linea por el ancho de su contenedor  */
        }
        a:hover {
            color: var(--text-color-II);
            text-decoration: underline;
            cursor: pointer;
        }
        .active {
            color: var(--text-color-II);
        }
        `
    }
    componentTemplateHTML() {
        return /* HTML */ `
            <nav>
                <ul>
                    <li>
                        <a name="accordion">
                            Accordions
                        </a>
                    </li>
                    <li>
                        <a name="button">
                            Buttons
                        </a>
                    </li>
                    <li>
                        <a name="card">
                            Cards
                        </a>
                    </li>
                    <li>
                        <a name="counter">
                            Counters
                        </a>
                    </li>
                    <li>
                        <a name="draggable">
                            Drag and Drop
                        </a>
                    </li>
                    <li>
                        <a name="footer">
                            Footers
                        </a>
                    </li>
                    
                </ul>
            </nav>
        `;        
    }

    componentChange() {
        const ANCHOR = [...this.shadowRoot.querySelectorAll('a[name]')];  /* Reemplacé el 'document' por 'this.shadowRoot' */

        function removeClass() {
            ANCHOR.forEach((element) => {
                element.classList.remove('active');     /* Recorre todos los elementos y elimina una clase CSS */
            })
        }
        

        ANCHOR.forEach((element) => {
            
            element.addEventListener('click', (e) => {
                let elementName = element.name;
                let scripts = Array.from(document.head.querySelectorAll('script'));
                let script = document.createElement('script');
                
                removeClass();
                element.classList.add('active'); /* Después de eliminar, la misma es agregada solo al elemento con click */

                script.defer = true;
                script.type = 'module';
                script.src = `./app/components/${elementName}/${elementName}.component.js`;
                
                if(scripts.length > 1){
                    scripts.at(-1).remove();    // Si hay más de 1 elemento <script> Eliminará el último.
                }

                document.head.appendChild(script);
                document.querySelector('.router-outlet').innerHTML = `<${elementName}-ui></${elementName}-ui>`;
            })

        });
    };
};

customElements.define('component-list-menu', ComponentListMenu);



// /* Clase definida sin ShadowDOM */
//
// class ListComponent extends HTMLElement {
//     constructor() {
//       super();
//     }
//     connectedCallback() {
//         this.innerHTML = /* HTML */ `
//             <nav>
//                 <ul>
//                     <li>
//                         <a name="accordion">
//                             Accordion
//                         </a>
//                     </li>
//                     <li>
//                         <a name="accordion">
//                             Accordion
//                         </a>
//                     </li>
//                     <li>
//                         <a name="accordion">
//                             Accordion
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         `;
//         this.componentChange()
//     }
//     componentChange() {
//         const ANCHOR = [...document.querySelectorAll('list-components a')];
//         ANCHOR.forEach((element) => {
//             element.addEventListener('click', () => {
//                 let elementName = element.name;
//                 let scripts = Array.from(document.head.querySelectorAll('script'));
//                 let script = document.createElement('script');
//                 script.defer = true;
//                 script.type = "module";
//                 script.src = `./app/components/${elementName}/${elementName}.component.js`;
//                 if(scripts.length > 1){
//                     scripts.at(-1).remove();
//                 }
//                 document.head.appendChild(script);
//                 document.querySelector(".router-outlet").innerHTML = `<${elementName}-gui></${elementName}-gui>`;
//             })
//         });
//     };
//   };  
//   customElements.define('list-component', ListComponent);