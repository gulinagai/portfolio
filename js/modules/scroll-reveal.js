export default class ScrollReveal {
    constructor(topico, sections) {
        this.topico = document.querySelectorAll(topico)
        this.sections = document.querySelectorAll(sections)
        this.toggleSection = this.toggleSection.bind(this)
        
    }

    checkDistance() {
        const windowMetade = window.innerHeight * 0.6
        this.valuesOffset = Array.from(this.sections).map((section)=>{
            return {
                offsetTopChanged: section.offsetTop - windowMetade,
                offsetTop: section.offsetTop,
                offsetHeight: section.offsetHeight
            }
        })
    }
    
    getDistanceToTopVP() {
       return Array.from(this.sections).map   ((section)=>{ 
            return section.getBoundingClientRect().top
          }
        
        )
    }

    toggleSection() {
        this.valuesOffset.forEach((valueOffset, index) =>{
            this.distanceToTopVP = this.getDistanceToTopVP()
            if(window.scrollY > valueOffset.offsetTopChanged && window.scrollY <= (valueOffset.offsetTopChanged + valueOffset.offsetHeight)) {
                this.sections[index].classList.add('ativo')
            } else if (window.scrollY > (valueOffset.offsetTop + valueOffset.offsetHeight)) {
                this.sections[index].classList.remove('ativo')
            }
            this.distanceToTopVP.forEach((distance, index) =>{
                if (distance >= window.innerHeight) {
                    if(this.sections[index].classList.contains('ativo')){
                        this.sections[index].classList.remove('ativo') 
                    }
                }
            })
        })
      
    }

    addEventScrollReveal() {
        window.addEventListener('scroll', this.toggleSection)
    }

    init() {
        if(this.topico.length && this.sections.length) {
            this.checkDistance()
            this.addEventScrollReveal()
        }
    }
}