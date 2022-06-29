import React from 'react'

const Bids = (props) => {
  return (
    <div className="bids">
      <div className="bids__images">
        <img src={props.url} className="bids__image" width="100%" height="100%"></img>
      </div>
      <p className="bids__price">189.2 ETH</p>
    </div>
  )
}

export default Bids
