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
  //prepinanie zobrazenie komponentu
  const [show, setShow] = useState(false);
  //konecny string po uprave
  const [inOneString, setInOneString] = useState();

  //vseobecna funkcia, ktosu posles kazdemu inputu/componentu
  const handleChangeStates = (value) => {
    //pridavas nove hodnoty do state
    setAnswers((prev) => {
      return {
        //... su spread operator ktory rozlozi object na key: value,
        //pretoze to menime v state

        //predosly state
        ...prev,
        //novym state prepises ten stary + ostatne hodnoty ti ostanu
        ...value,
      };
    });
  };

  //toggle pre show/hidden
  const hadleShow = () => {
    setShow(!show);
    setInOneString(createString());
  };

  //tu si vytvarame jeden string zo vsetkych odpovedi
  const createString = () => {
    const string = Object.values(answers).reduce((acc, curr, i) => {
      if (curr === "") return;

      return `${acc} ${curr}`;
    });
    return string;
  };

  return (
    <Fragment>
      <div style={{ marginTop: 50 }}>
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
      <button onClick={hadleShow}>Show answer</button>
      {show && <h2>{inOneString}</h2>}
    </Fragment>
  );
}

export default GiveMeAnswer;
