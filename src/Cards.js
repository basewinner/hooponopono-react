import React, { useState } from "react";
import Card from "./Card"
import "./Cards.css"

const Cards = ({ numCards = 4 }) => {
  let [visibilities, setVisibilities] = useState(Array.from({ length: numCards }).fill(0));
  let [counter, setCounter] = useState(0);
  let [cleanCount, setCleanCount] = useState(0);

  const mantras = [
    `I'm Sorry`,
    'Please Forgive Me',
    'Thank You',
    'I Love You'
  ];

  const flipCards = () => {
    let newVisibilities = visibilities;
    newVisibilities[counter] = 1;

    setVisibilities(newVisibilities);
    setCounter(counter + 1);

    if (counter === numCards) {
      setVisibilities(Array.from({ length: numCards }).fill(0));
      setCounter(0);
      setCleanCount(cleanCount + 1);
      console.log(cleanCount);
    }
  }

  return (
    <div className="Cards">
      <div>
        {mantras.map((mantra, index) => <Card mantra={mantra} key={index} visible={visibilities[index]} />)}
      </div>
      <button onClick={flipCards}>Flip Card</button>
      <div>
        <h3>Clean count = {cleanCount}</h3>
      </div>
    </div>
  )
}

export default Cards;