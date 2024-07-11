
class AccordionGUI extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    styles() {
        return /*css*/ `
        :host{
            
        }
        `;
    }
    
    render() {
    this.innerHTML = /*html*/ `
        <style> ${ this.styles() } </style>
        
        <div>Espacio de renderización del componente</div>
    `;
    }
}

customElements.define("accordion-gui", AccordionGUI);