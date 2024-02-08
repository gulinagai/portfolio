export default class LightMode {
    constructor(button){
        this.button = document.querySelector(button)
        this.onLightMode = this.onLightMode.bind(this)
        this.activeClass = 'ativo'
    }

    bodyStyleChange() {
        document.body.style.background = '#f0f8ff'
    }

    onLightMode() {
        if (this.button.classList.contains(this.activeClass)) {
            console.log('removeu')
            console.log(this.button)
            this.button.classList.remove(this.activeClass)
            document.body.style.background = '#111111'
            
        } else {
        this.button.classList.add(this.activeClass)
        this.bodyStyleChange()
        }
    }

    addLightModeEvent() {
        this.button.addEventListener('click', this.onLightMode)
    }

    init(){
        console.log(this.button)
        if (this.button) {
            this.addLightModeEvent()
        }
    }
}
