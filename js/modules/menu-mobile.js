import debounce from './debounce.js'

export default class MenuMobile {
    constructor(mobileButton, menuList, LMButton) {
        this.mobileButton = document.querySelector(mobileButton)
        this.menuList = document.querySelector(menuList)
        this.LMButton = document.querySelector(LMButton)
        this.toggleMenuMobile = this.toggleMenuMobile.bind(this)
        this.changeLMButtonPosition = debounce(this.changeLMButtonPosition.bind(this), 15)
        this.outsideClick = this.outsideClick.bind(this)
    }

    outsideClick(event) {
        if(!this.menuList.contains(event.target) && event.target !== this.mobileButton) {
             this.menuList.classList.toggle('ativo')
             this.mobileButton.classList.toggle('ativo')
            window.removeEventListener('click', this.outsideClick)
        }
    }

    toggleMenuMobile() {
        [this.menuList, this.mobileButton].forEach((element)=>{
            element.classList.toggle('ativo')
        })
        if (this.menuList.classList.contains('ativo')) {
            window.addEventListener('click', this.outsideClick);
        } else {
            window.removeEventListener('click', this.outsideClick);
        }
    }

    changeLMButtonPosition() {
       if (window.innerWidth <= 900) {
        if (this.menuList.childElementCount === 5){
            this.liLMButton = document.createElement('li')
        }
        this.menuList.appendChild(this.liLMButton)
        this.liLMButton.classList.add('ativo')
        this.liLMButton.appendChild(this.LMButton)
       } else {
        const menu = document.querySelector('#menu')
        menu.insertBefore(this.LMButton, menu.firstChild)
       }
    }

    addEventMenuMobile() {
        this.mobileButton.addEventListener('click', ()=> {
            this.toggleMenuMobile()
        })
        window.addEventListener('resize', this.changeLMButtonPosition)
    }

    init() {
        if(this.mobileButton) {
            this.addEventMenuMobile()
            this.changeLMButtonPosition()
        }
    }
}