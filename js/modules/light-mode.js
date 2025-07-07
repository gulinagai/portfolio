export default class LightMode {
    constructor(button){
        // Definindo as propriedades da classe e realizando o bind para alterar o contexto do this:
        this.button = document.querySelector(button)
        this.onLightMode = this.onLightMode.bind(this)
        this.activeClass = 'ativo'
    }

    onLightMode() {    // Essa função é responsável por adicionar/remover a classe 'ativo' no botão.
        this.button.classList.toggle(this.activeClass)
        document.body.classList.toggle(this.activeClass)
    }

    addLightModeEvent() {    // Essa função é responsável por adicionar o EventListener 'click', aguardando para executar a função onLightMode()
        this.button.addEventListener('click', this.onLightMode)
    }

    init(){   // Verificações iniciais e função inicial desse arquivo .js
        if (this.button) {
            this.addLightModeEvent()
        }
    }
}

// Esta função é responsável por adicionar o EventListener a div #toggle, que na verdade é um botão, e adicionar/remover (com base na situação atual da div se tem ou não 'ativo') a classe 'ativo' ao body quando este for clicado.
