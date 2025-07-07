export default class MenuNav {
    constructor(links, sections) {
        // Definição das propriedades da classe:
        this.links = document.querySelectorAll(links)
        this.sections = document.querySelectorAll(sections)
        this.events = ['click', 'touchstart']
        this.options = { block: 'center', behavior: "smooth" }
    }

    moveToSection(event, index) {    // Função responsável por mover para a seção específicar de acordo com o index passado:
        event.preventDefault();
         this.sections[index].classList.add('ativo')    // Adiciona a classe ativo a seção do index passado.
        if(index === 0) {    // Se o index for 0, não haverá um efeito suave para ir ao início, o que é bastante comum em alguns sites.
            this.options = { block: 'start' }
            document.body.scrollIntoView(this.options)
        } else {
            this.options = { block: 'center', behavior: "smooth" }    // Se o index for diferente 0, haverá um efeito suave para ir a devida seção.
            this.sections[index].scrollIntoView(this.options)
        }
    }

    addEventMenuNav() {    // Adicionando o devido EventListener para cada link do menu e passando o index para a função chamada.
        this.links.forEach((link, index) =>{
            this.events.forEach((evento)=>{
                link.addEventListener(evento, () => {
                    this.moveToSection(event, index)
                })   
            })
        })
    }

    init() {    // Verificações iniciais e função inicial desse arquivo .js
        if (this.links.length && this.sections.length) {
            this.addEventMenuNav()
        }
    }
}

    // Esse arquivo .js é responsável pela navegação do menu. A lógica é baseada no index entre a NodeList de links (do menu) e de sections (seções).