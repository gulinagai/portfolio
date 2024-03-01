import LightMode from './modules/light-mode.js'
import MenuNav from './modules/menu-nav.js'
import ScrollReveal from './modules/scroll-reveal.js'

const lightMode = new LightMode('#toggle')
lightMode.init()

const scrollReveal = new ScrollReveal('.topico', '.secao')
scrollReveal.init()

const menuNav = new MenuNav('#menu ul li a', 'section') 
menuNav.init()