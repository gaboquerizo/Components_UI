
class AccordionGUI extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    styles() {
        return /*css*/ `
          div {
            background-color: red;
          }
        `;
    }
    
    render() {
    this.innerHTML = /*html*/ `
        <style> ${ this.styles() } </style>
        
        <div>Renderizado del componente</div>
    `;
    }
}

customElements.define("accordion-gui", AccordionGUI);