import React, { Fragment, useState } from "react";

import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

function GiveMeAnswer() {
  //states pre vsetky inputy
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  //moznost jedna je, ze na kazdy input das vlastny handle ktory
  //osefuje pridanie do state
  const handleChangeAnswer1 = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        answer1: e.target.value,
      };
    });
  };
  const handleChangeAnswer2 = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        answer2: e.target.value,
      };
    });
  };
  const handleChangeAnswer3 = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        answer3: e.target.value,
      };
    });
  };
  const handleChangeAnswer4 = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        answer4: e.target.value,
      };
    });
  };

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
      <div style={{ backgroundColor: "whitesmoke" }}>
        <p>varianta 1</p>
        <div>
          <label htmlFor="question1">Otazka 1</label>
          <input
            id="question1"
            type="text"
            value={answers.answer1}
            onChange={handleChangeAnswer1}
          ></input>
        </div>
        <div>
          <label htmlFor="question2">Otazka 2</label>
          <input
            id="question2"
            type="text"
            value={answers.answer2}
            onChange={handleChangeAnswer2}
          ></input>
        </div>
        <div>
          <label htmlFor="question3">Otazka 3</label>
          <input
            id="question3"
            type="text"
            value={answers.answer3}
            onChange={handleChangeAnswer3}
          ></input>
        </div>
        <div>
          <label htmlFor="question4">Otazka 4</label>
          <input
            id="question4"
            type="text"
            value={answers.answer4}
            onChange={handleChangeAnswer4}
          ></input>
        </div>
      </div>
      {/*moznost dva, moje povodne zamyslane riesenie :D*/}
      <div style={{ backgroundColor: "snow" }}>
        <p>components callback -- varianta 2</p>
        <Question1 getStates={handleChangeStates} />
        <Question2 getStates={handleChangeStates} />
        <Question3 getStates={handleChangeStates} />
        <Question4 getStates={handleChangeStates} />
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
