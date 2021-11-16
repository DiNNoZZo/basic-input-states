import React, { useState } from "react";

function Question2({ getStates }) {
  const [answer2, setAnswer2] = useState("");

  const saveAnswer = (e) => {
    setAnswer2(e.target.value);
    getStates({ answer2: e.target.value });
  };
  return (
    <div>
      <label htmlFor="question22">Otazka 2</label>
      <input
        id="question22"
        type="text"
        value={answer2}
        onChange={saveAnswer}
      ></input>
    </div>
  );
}

export default Question2;
