export default class LightMode {
    constructor(button){
        this.button = document.querySelector(button)
        this.onLightMode = this.onLightMode.bind(this)
        this.activeClass = 'ativo'
    }

    onLightMode() {
        this.button.classList.toggle(this.activeClass)
        document.body.classList.toggle(this.activeClass)
    }

    addLightModeEvent() {
        this.button.addEventListener('click', this.onLightMode)
    }

    init(){
        if (this.button) {
            this.addLightModeEvent()
        }
    }
}
