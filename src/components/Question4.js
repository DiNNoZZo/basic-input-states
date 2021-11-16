import React, { useState } from "react";

function Question4({ getStates }) {
  const [answer4, setAnswer4] = useState("");

  const saveAnswer = (e) => {
    setAnswer4(e.target.value);
    getStates({ answer4: e.target.value });
  };
  return (
    <div>
      <label htmlFor="question44">Otazka 4</label>
      <input
        id="question44"
        type="text"
        value={answer4}
        onChange={saveAnswer}
      ></input>
    </div>
  );
}

export default Question4;
