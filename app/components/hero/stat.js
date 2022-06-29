import React from "react";


const Stat = (props) => {
  return (
    <div className="stat">
      <h3 className="stat__value">{props.value} +</h3>
      <p className="stat__type">{props.type} +</p>
    </div>
  )
}

export default Stat
