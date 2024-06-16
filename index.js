
const ANCHOR = [...document.querySelectorAll('.main-content nav a')];

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


/* Dark Mode + Preferencias de Usuario */

const THEME_TOGGLE = document.querySelector('.theme-toggle input');
const ROOT = document.documentElement;

addEventListener('DOMContentLoaded', () => {
  const MODO_LIGHT = window.matchMedia('(prefers-color-scheme: light)').matches;  // true
  const MODO_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;    // false

  if(MODO_LIGHT){
    THEME_TOGGLE.setAttribute('checked', '');
    ROOT.setAttribute('data-theme', 'light');
  }else if(MODO_DARK){
    THEME_TOGGLE.removeAttribute('checked', '');
    ROOT.setAttribute('data-theme', 'dark');
  }
});

THEME_TOGGLE.addEventListener('click', () => {
  const SET_THEME = THEME_TOGGLE.checked ? 'light' : 'dark';
  ROOT.setAttribute('data-theme', SET_THEME);
});