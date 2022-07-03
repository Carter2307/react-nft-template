export default class {
  constructor() {
    this.elements = {
      navbar: {
        container: document.querySelector('.navbar__container'),
        button: document.querySelector('.navbar__menu'),
        menu: document.querySelector('.navbar__items'),
        links: [...document.querySelectorAll('.navbar__list__items__link')],
      },
    }
  }
}
