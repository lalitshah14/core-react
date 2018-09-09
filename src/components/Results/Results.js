import React from "react";

const result = props => {
  return (
    <div>
      You have scored {props.totalCorrectAnswers} out of {props.totalQuestions}{" "}
      questions.
    </div>
  );
};

export default result;
