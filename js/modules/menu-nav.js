export default class MenuNav {
    constructor(links, sections) {
        this.links = document.querySelectorAll(links)
        this.sections = document.querySelectorAll(sections)
        this.options = { block: 'center', behavior: "smooth" }
    }

    moveToSection(event, index) {
        event.preventDefault()
        console.log(event)
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
            link.addEventListener('click', () => {
                this.moveToSection(event, index)
            }
            )
        })
    }
    init() {
        if (this.links.length && this.sections.length) {
            console.log(this.links, this.sections)
            this.addEventMenuNav()
        }
    }
}