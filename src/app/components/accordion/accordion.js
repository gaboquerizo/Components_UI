
class AccordionGUI extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    styles() {
        return `
            details{
                width: 100%;
                display: inline-block;
                outline: solid 1px #0004;
                &[open] summary{
                    background-color: teal;
                    color: #fff;
                }
                & summary { 
                    padding: 1em;
                }
                & span {
                    display: inline-block;
                    padding: 1em;
                }
            }
        `;
    }

    render(){
        fetch("./app/components/accordion/accordion.html")
        .then(response => {
            return response.text()
        })
        .then(html => {
            this.innerHTML = `<style>${this.styles()}</style> ${html}`;
        });        
    }
}

customElements.define("accordion-gui", AccordionGUI);