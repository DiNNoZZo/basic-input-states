import React, { useState } from "react";

function Question1({ getStates }) {
  const [answer1, setAnswer1] = useState("");

  //do funkcie z rodica (getState) posles potom object,
  //key kde chces menit hodnotu a samotnu hodnotu v objecte
  const saveAnswer = (e) => {
    setAnswer1(e.target.value);
    getStates({ answer1: e.target.value });
  };
  return (
    <div>
      <label htmlFor="question11">Otazka 1</label>
      <input
        id="question11"
        type="text"
        value={answer1}
        onChange={saveAnswer}
      ></input>
    </div>
  );
}

export default Question1;
