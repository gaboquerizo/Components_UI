
const ANCHOR = [...document.querySelectorAll('.main-menu a')];

ANCHOR.forEach((tag) => {
  tag.addEventListener('click', () => {
    let name = tag.name;
    
    let scripts = Array.from(document.head.querySelectorAll('script'));
    if(scripts.length === 2){
      scripts[1].remove()
    }

    // Podría atrapar el error 404
    
    let script = document.createElement('script');
    script.defer = true;
    script.type = "module";
    script.src = `./app/components/${name}/${name}.js`;

    document.head.appendChild(script);
    document.querySelector(".router-outlet").innerHTML = `<${name}-gui></${name}-gui>`;
  });
});
