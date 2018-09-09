import React, { Fragment } from "react";

const content = props => {
  return (
    <Fragment>
      <div className="questionBox">{props.question}</div>
      <div className="answerBlocks">
        {props.options.map((option, index) => (
          <div className="answerBlock" key={index}>
            <input
              type="radio"
              name={props.questionNumber}
              key={props.questionNumber + index}
              id={props.questionNumber + index}
              value={option}
              onChange={() => props.changed(index)}
            />
            <label for={props.questionNumber + index}>{option}</label>
          </div>
        ))}
      </div>
      <div className="submitBtn">
        <input
          type="button"
          className="submitBtn"
          value="Next"
          onClick={props.onSubmit}
        />
      </div>
    </Fragment>
  );
};

export default content;
