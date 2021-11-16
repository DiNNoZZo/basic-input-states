import React, { useState } from "react";

function Question3({ getStates }) {
  const [answer3, setAnswer3] = useState("");

  const saveAnswer = (e) => {
    setAnswer3(e.target.value);
    getStates({ answer3: e.target.value });
  };
  return (
    <div>
      <label htmlFor="question33">Otazka 3</label>
      <input
        id="question33"
        type="text"
        value={answer3}
        onChange={saveAnswer}
      ></input>
    </div>
  );
}

export default Question3;
