import Bids from "./bids";
import React from "react";


const ProductDetails = () => {
  return (
    <div className="productdetails">

      <h2 className="title">POTM #5621</h2>

      <div className="productdetails__currentbids">

        <div className="productdetails__currentbids__price">
          <h5>Current bid</h5>
          <p>
            <img src="images/etherum-icon.png"></img>
            <span>290.3 ETH</span>
          </p>
        </div>

        <div className="productdetails__currentbids__endate">
          <h5>Ends in</h5>
          <p>17h 18m 16s</p>
        </div>

      </div>

      <div className="productdetails__recentbids">
        <h5 className="colors:gray-400">Current bid</h5>
        <div className="flex-between">
          <Bids url="images/avatar-1.png"/>
          <Bids url="images/avatar-2.png"/>
          <Bids url="images/avatar-3.png"/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
