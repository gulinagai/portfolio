export default class MenuNav {
    constructor(links, sections) {
        this.links = document.querySelectorAll(links)
        this.sections = document.querySelectorAll(sections)
        this.events = ['click', 'touchstart']
        this.options = { block: 'center', behavior: "smooth" }
    }

    moveToSection(event, index) {
        event.preventDefault();
         this.sections[index].classList.add('ativo')
        if(index === 0) {
            this.options = { block: 'start' }
            document.body.scrollIntoView(this.options)
        } else {
            this.options = { block: 'center', behavior: "smooth" }
            this.sections[index].scrollIntoView(this.options)
        }
    }

    addEventMenuNav() {
        this.links.forEach((link, index) =>{
            this.events.forEach((evento)=>{
                link.addEventListener(evento, () => {
                    this.moveToSection(event, index)
                })   
            })
        })
    }

    init() {
        console.log(this.sections)
        console.log(this.links)
        if (this.links.length && this.sections.length) {
            this.addEventMenuNav()
        }
    }
}