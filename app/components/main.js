import React from 'react'

import Hero from './hero/hero'

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="banner hidden">
          <img src="images/Banner-BG.png"></img>
        </div>
        <Hero />
      </div>
    </main>
  )
}

export default Main
