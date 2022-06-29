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
              We make your{'\n'}
              <span className="text-highlight">
                NFT Investment{'\n'}
                <svg
                  width="270"
                  height="9"
                  viewBox="0 0 270 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-highlight__line"
                >
                  <path
                    d="M1 1L23.0205 7.43361C26.5178 8.4554 30.238 8.42915 33.7206 7.35812L48.8448 2.7068C52.459 1.5953 56.3258 1.60995 59.9314 2.74879L74.4479 7.33389C77.8903 8.42116 81.5744 8.48482 85.0522 7.5171L103.218 2.46235C106.65 1.5075 110.283 1.5565 113.688 2.60356L129.302 7.40548C132.688 8.44687 136.301 8.50109 139.717 7.56179L158.698 2.34252C161.894 1.46345 165.268 1.45352 168.47 2.31376L188.728 7.75633C191.765 8.57216 194.959 8.60604 198.012 7.85483L220.871 2.23076C224.145 1.42537 227.575 1.52337 230.798 2.51433L245.025 6.88981C249.441 8.24793 254.204 7.91655 258.39 5.96001L269 1"
                    stroke="#D6F379"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              {'\n'}
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
