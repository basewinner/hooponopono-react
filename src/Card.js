import React from "react";
import './Card.css'

const Card = ({ mantra, visible }) => {
  let msg = visible ? mantra : '*';

  return (
    <div className="Card">
      {msg}
    </div>
  )
}
export default Card;