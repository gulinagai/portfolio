import LightMode from './modules/light-mode.js'
import MenuMobile from './modules/menu-mobile.js'
import MenuNav from './modules/menu-nav.js'
import ScrollReveal from './modules/scroll-reveal.js'

// O conceito principal para organizar os arquivos .js desse projeto foi o conceito de Javascript modules.

// A seguir foram criados instâncias das classes que estão em outros arquivos .js, e iniciadas com uma função .init(), e passadas os devidos argumento que fazem relação ao(s) elemento(s) html selecionado(s).

const lightMode = new LightMode('#toggle')
lightMode.init()

const scrollReveal = new ScrollReveal('.topico', '.secao')
scrollReveal.init()

const menuNav = new MenuNav('#menu ul li a', 'section') 
menuNav.init()

const menuMobile = new MenuMobile('.mobile-button', '#menu ul', '#toggle')
menuMobile.init()