import each from 'lodash/each'

export default class Menu {
  constructor(container, button, menu, links, className) {
    this.container = container
    this.button = button
    this.menu = menu
    this.links = links
    this.className = className

    this.init()
  }

  init() {
    this.setTransition()
    this.addEvents()
  }

  toggle(e) {
    e.preventDefault()

    if (!this.menu.classList.contains(this.className)) {
      this.container.classList.add(this.className)
      this.menu.classList.add(this.className)
      this.linkFadeIn()
      document.body.style.overflowY = 'hidden'
    } else {
      this.container.classList.remove(this.className)
      this.menu.classList.remove(this.className)
      this.linkFadeOut()
      document.body.style.overflowY = 'auto'
    }
  }

  linkFadeIn() {
    each(this.links, (items) => {
      items.style.transform = 'translateX(100%)'
    })
  }

  linkFadeOut() {
    each(this.links, (items) => {
      items.style.transform = 'translateX(-100%)'
    })
  }

  setTransition() {
    each(this.links, (items, index) => {
      items.style.transition = `transform ${0.3 + index * 0.2}s 0.6s`
      items.style.transform = 'translateX(-100%)'
    })
  }

  addEvents() {
    this.button.addEventListener('click', this.toggle.bind(this))
  }
}
