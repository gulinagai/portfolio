export default class ScrollReveal {
    constructor(topico, sections) {
        // Criando as devidas propriedades da classe:
        this.topico = document.querySelectorAll(topico)
        this.sections = document.querySelectorAll(sections)
        // Realizando o bind para alterar o contexto do this:
        this.toggleSection = this.toggleSection.bind(this)
        
    }

    checkDistance() {    // Essa função vai realizar a checagem da distância utilizando conceitos como offsetTop, offsetHeight e diferença entre o offsetTop - windowMetade (window.innerHeight * 0.6) para cada seção, tudo isso é armazenado dentro de um objeto (para cada seção), e cada objeto desse é colocado dentro de um Array.
        const windowMetade = window.innerHeight * 0.6
        this.valuesOffset = Array.from(this.sections).map((section)=>{
            return {
                offsetTopChanged: section.offsetTop - windowMetade,
                offsetTop: section.offsetTop,
                offsetHeight: section.offsetHeight
            }
        })
    }
    
    getDistanceToTopVP() {    // Essa função é responsável por retornar um Array contendo o getBoundingClientRect().top de cada section.
       return Array.from(this.sections).map   ((section)=>{ 
            return section.getBoundingClientRect().top
          }
        
        )
    }

    toggleSection() {    // Essa função é responsável por fazer as devidas verificações e comparações com o valor obtido nas outras funções e compará-las com a distância atual em que o usuário se encontra. e essa função é ativada sempre que usuário realiza um scroll. Dessa forma podemos adicionar/remover a classe ativo e realizar o aparecimento das palavras ao fundo da seção de forma dinâmica.
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

    addEventScrollReveal() {    // Adicionando EventListener no objeto window, ao scroll.
        window.addEventListener('scroll', this.toggleSection)
    }

    init() {     // Verificações iniciais e função inicial desse arquivo .js
        if(this.topico.length && this.sections.length) {
            this.checkDistance()
            this.addEventScrollReveal()
        }
    }
}

// Essa função é responsável por mostrar a escrita por trás de cada seção ("Sobre, Formação, Portfólio, Tecnologias e Contato") de forma interativa e usando Javascript puro.