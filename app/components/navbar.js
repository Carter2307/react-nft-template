import React from 'react'
import Toggler from './toggler'

const navLink = [
  { text: 'Discover', link: '#' },
  { text: 'Collections', link: '#' },
  { text: 'Forums', link: '#' },
]

const li = navLink.map((link, k) =>
  link.text === 'Forums' ? (
    <li className="navbar__list__items" key={k}>
      <a
        className="navbar__list__items__link navbar__list__items__link-flex"
        href={link.link}
      >
        <div className="text">{link.text}</div>
        <Toggler className="mobile-only"></Toggler>
      </a>
    </li>
  ) : (
    <li className="navbar__list__items" key={k}>
      <a className="navbar__list__items__link" href={link.link}>
        {link.text}
      </a>
    </li>
  )
)

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="navbar__container">
        <button className="navbar__menu mobile-only">
          <div className="navbar__menu__bars">
            <span className="navbar__menu__bar"></span>
            <span className="navbar__menu__bar"></span>
            <span className="navbar__menu__bar"></span>
          </div>
        </button>

        <a className="navbar__logo">MetaMarket</a>

        <div className="navbar__items smooth-hidden">
          <div className="search mobile-only">
            <span className="search__icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9273 8.96364C16.9273 11.1455 16.0546 13.2182 14.6364 14.6364C13.2182 16.0545 11.1455 16.9273 8.96364 16.9273C4.6 16.9273 1 13.3273 1 8.96364C1 4.49091 4.6 1 8.96364 1C13.3273 1 16.9273 4.6 16.9273 8.96364Z"
                  stroke="#6B7280"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6364 14.6364L19 19"
                  stroke="#6B7280"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              className="search__input"
              placeholder="Search"
            ></input>
          </div>
          <ul className="navbar__list" role="list">
            {li}
          </ul>
          <div className="navbar__cta desktop-only">
            <div className="navbar__cta__search">
              <img src="svg/icon-search.svg"></img>
            </div>
            <Toggler />
            <a href="#" className="button button-secondary">
              <div className="text">Connect wallet</div>
            </a>
          </div>
        </div>

        <a href="#" className="button button-secondary mobile-only">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6666 4.66667H11.9999V4C11.9999 3.46957 11.7892 2.96086 11.4141 2.58579C11.0391 2.21071 10.5304 2 9.99992 2H3.33325C2.80282 2 2.29411 2.21071 1.91904 2.58579C1.54397 2.96086 1.33325 3.46957 1.33325 4V12C1.33325 12.5304 1.54397 13.0391 1.91904 13.4142C2.29411 13.7893 2.80282 14 3.33325 14H12.6666C13.197 14 13.7057 13.7893 14.0808 13.4142C14.4559 13.0391 14.6666 12.5304 14.6666 12V6.66667C14.6666 6.13623 14.4559 5.62753 14.0808 5.25245C13.7057 4.87738 13.197 4.66667 12.6666 4.66667ZM3.33325 3.33333H9.99992C10.1767 3.33333 10.3463 3.40357 10.4713 3.5286C10.5963 3.65362 10.6666 3.82319 10.6666 4V4.66667H3.33325C3.15644 4.66667 2.98687 4.59643 2.86185 4.4714C2.73682 4.34638 2.66659 4.17681 2.66659 4C2.66659 3.82319 2.73682 3.65362 2.86185 3.5286C2.98687 3.40357 3.15644 3.33333 3.33325 3.33333ZM13.3333 10H12.6666C12.4898 10 12.3202 9.92976 12.1952 9.80474C12.0702 9.67971 11.9999 9.51014 11.9999 9.33333C11.9999 9.15652 12.0702 8.98695 12.1952 8.86193C12.3202 8.73691 12.4898 8.66667 12.6666 8.66667H13.3333V10ZM13.3333 7.33333H12.6666C12.1362 7.33333 11.6274 7.54405 11.2524 7.91912C10.8773 8.29419 10.6666 8.8029 10.6666 9.33333C10.6666 9.86377 10.8773 10.3725 11.2524 10.7475C11.6274 11.1226 12.1362 11.3333 12.6666 11.3333H13.3333V12C13.3333 12.1768 13.263 12.3464 13.138 12.4714C13.013 12.5964 12.8434 12.6667 12.6666 12.6667H3.33325C3.15644 12.6667 2.98687 12.5964 2.86185 12.4714C2.73682 12.3464 2.66659 12.1768 2.66659 12V5.88667C2.88076 5.96201 3.10621 6.00034 3.33325 6H12.6666C12.8434 6 13.013 6.07024 13.138 6.19526C13.263 6.32029 13.3333 6.48986 13.3333 6.66667V7.33333Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
