import debounce from './debounce.js'

export default class MenuMobile {
    constructor(mobileButton, menuList, LMButton) {
        // Definindo as propriedades da classe que serão utilizadas:
        this.mobileButton = document.querySelector(mobileButton)
        this.menuList = document.querySelector(menuList)
        this.LMButton = document.querySelector(LMButton)
        this.events = ['click', 'touchstart']
        // Realizando os devidos bind's para alterar o contexto do this:
        this.toggleMenuMobile = this.toggleMenuMobile.bind(this)
        this.changeLMButtonPosition = debounce(this.changeLMButtonPosition.bind(this), 15)
        this.outsideClick = this.outsideClick.bind(this)
    }

    outsideClick(event) {    // Função de outsideClick para sair ou fechar o Menu Hamburguer
        if(!this.menuList.contains(event.target) && event.target !== this.mobileButton) {
             this.menuList.classList.toggle('ativo')
             this.mobileButton.classList.toggle('ativo')
            window.removeEventListener('click', this.outsideClick)
        }
    }

    toggleMenuMobile(event) {    // Função responsável por adicionar/remover a classe ativo do <ul> e do Menu Hambúrguer quando o mobileButton for clicado.
        event.preventDefault();
        [this.menuList, this.mobileButton].forEach((element)=>{
            element.classList.toggle('ativo')
        })
        if (this.menuList.classList.contains('ativo')) {
            window.addEventListener('click', this.outsideClick);    //  Se o <ul> possuir 'ativo', adicionar o EventListener 'click' com a função outsideClick
        } else {
            window.removeEventListener('click', this.outsideClick);    // Caso contrário, remover o EventListener 'click'
        }
    }

    changeLMButtonPosition() {    // Função responsável por alterar a posição do botão de Light Mode, criar um elemento <li>, e relizar as devidas pré-estruturações para encaixar os elementos em seus devidos locais de acordo com um window.innerWidth <= 1010 (ou seja, para lidar com media querie.)
       if (window.innerWidth <= 1010) {
        if (this.menuList.childElementCount === 6){
            this.liLMButton = document.createElement('li')
        }
        this.menuList.appendChild(this.liLMButton)
        this.liLMButton.classList.add('ativo')
        setTimeout(()=>{
            this.LMButton.style.display = 'block'
        }, 150)
        this.liLMButton.appendChild(this.LMButton)
       } else {
        const menu = document.querySelector('#menu')
        menu.insertBefore(this.LMButton, menu.firstChild)
       }
    }

    addEventMenuMobile() {    // Adicionando um EventListener para o objeto window para lidar com o resize e outro EventListener no elemento mobileButton, para lidar com o Menu Hambúrguer.
        this.events.forEach((evento)=>{
            this.mobileButton.addEventListener(evento, this.toggleMenuMobile)
        })
        window.addEventListener('resize', this.changeLMButtonPosition)
    }

    init() {  // Verificações iniciais e função inicial desse arquivo .js
        if(this.mobileButton) {
            this.addEventMenuMobile()
            this.changeLMButtonPosition()
        }
    }
}

// Este código é responsável pelo aparecimento e funcionamento do Menu Hambúrguer a partir do media querie (< ou = 1010), tanto criação de uma <li> onde ele ficará, a adição do EventListener 'resize' (onde o debounce.js será extremamente importante nesse caso), função para sair ou fechar o Menu Hamburguer (outsideClick()), e por mudar o posicionamento do LMButton (Light Mode Button).