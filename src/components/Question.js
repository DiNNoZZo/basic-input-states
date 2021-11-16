import React, { useState } from "react";

function Question1({ getStates, question, rank }) {
  const [answer, setAnswer] = useState("");

  //do funkcie z rodica (getState) posles potom object,
  //key kde chces menit hodnotu a samotnu hodnotu v objecte
  const saveAnswer = (e) => {
    setAnswer(e.target.value);
    getStates({ [`${rank}`]: e.target.value });
  };
  return (
    <div>
      <label htmlFor={rank}>{question}</label>
      <input id={rank} type="text" value={answer} onChange={saveAnswer}></input>
    </div>
  );
}

export default Question1;
