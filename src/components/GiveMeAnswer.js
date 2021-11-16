import React, { Fragment, useState } from "react";

import Question from "./Question";

function GiveMeAnswer() {
  //states pre vsetky inputy
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  //moznost dva spravis vseobecnu funkciu, ktosu posles kazdemu inputu/componentu
  const handleChangeStates = (value) => {
    setAnswers((prev) => {
      return {
        //... su spread operator ktory rozlozi object na key: value,
        //pretoze to menime v state
        ...prev,
        ...value,
      };
    });
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "snow" }}>
        <p>best varian :) dont repeat self</p>
        <Question
          getStates={handleChangeStates}
          rank="answer1"
          question="Otazka 1"
        />
        <Question
          getStates={handleChangeStates}
          rank="answer2"
          question="Otazka 2"
        />
        <Question
          getStates={handleChangeStates}
          rank="answer3"
          question="Otazka 3"
        />
        <Question
          getStates={handleChangeStates}
          rank="answer4"
          question="Otazka 4"
        />
      </div>
      {Object.values(answers).map((answer, i) => (
        <h2 key={i}>
          Odpoved{i + 1}: {answer}
        </h2>
      ))}
    </Fragment>
  );
}

export default GiveMeAnswer;
