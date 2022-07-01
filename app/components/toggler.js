import React from 'react'

const Toggler = (props) => {
  return (
    <button
      type="button"
      className={`button navbar__cta__themeSwither ${
        props.className ? props.className : ''
      }`}
    >
      <label
        className="navbar__cta__themeSwither__label"
        htmlFor="theme-toggler"
      >
        <div className="navbar__cta__themeSwither__label__container">
          <span className="navbar__cta__themeSwither__label-light theme-active">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99822 11.1835C9.75548 11.1835 11.18 9.75881 11.18 8.0014C11.18 6.244 9.75548 4.81934 7.99822 4.81934C6.24095 4.81934 4.81641 6.244 4.81641 8.0014C4.81641 9.75881 6.24095 11.1835 7.99822 11.1835Z"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00201 1V2.27283"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00195 13.7275V15.0004"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.04102 3.0498L3.94465 3.95351"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0469 12.0488L12.9505 12.9525"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8H2.27272"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7266 8H14.9993"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.04102 12.9525L3.94465 12.0488"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0469 3.95351L12.9505 3.0498"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="navbar__cta__themeSwither__label-dark">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.77899 1C4.45072 1.76014 4.26739 2.59638 4.26739 3.47681C4.26739 6.93188 7.06812 9.73261 10.5232 9.73261C11.4036 9.73261 12.2406 9.54927 13 9.22101C12.0406 11.4435 9.83043 13 7.2558 13C3.80072 13 1 10.1993 1 6.7442C1.00072 4.16957 2.55652 1.96014 4.77899 1Z"
                stroke="#151F37"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </label>
      <input
        type="checkbox"
        name="theme-toggler"
        className="toggler hidden"
        id="theme-toggler"
      ></input>
    </button>
  )
}

export default Toggler
