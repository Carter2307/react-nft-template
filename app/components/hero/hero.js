import Stat from './stat'
import ProductDetails from './productDetails'
import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__description">
          <div className="hero__description__content">
            <h1 className="title title-1">
              We make your{' '}
              <span className="text-highlight">
                {' '}
                <img src="svg/line.svg" className="text-highlight__line"></img>
                NFT Investment
              </span>{' '}
              lot more easirer
            </h1>
            <p className="paragraphe">
              We help you take your NFT investmentsto next level with the help
              of our advanced blockchain infrastructure
            </p>
            <a href="#" className="button button-primary">
              Explore collections
            </a>
          </div>

          <div className="hero__description__stats">
            <h4 className="title title-4">Stat for you</h4>
            <div className="stats__container">
              <Stat value="10k" type="Actions" />
              <Stat value="200" type="Collection" />
              <Stat value="50" type="Artist" />
            </div>
            <div className="badge__container">
              <img
                src="/svg/badge-colored.svg"
                className="badge__colored"
              ></img>
            </div>
          </div>
        </div>

        <div className="hero__images">
          <div className="hero__images__container">
            <img src="images/hero.png" className="hero__image"></img>
            <ProductDetails></ProductDetails>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
