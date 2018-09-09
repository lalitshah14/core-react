import React from "react";

const sidebar = props => {
  return (
    <div className="sidebar">
      <h3 class="sidebar-heading">Your Progress</h3>
      <div className="question-progress-blocks">
        {props.questions.map((question, index) => {

          const classes = [];
          if(props.currentQuestion === index){
            classes.push('current');
          } else if (question.result === false) {
            classes.push('wrong');
          } else if (question.result === true) {
            classes.push('correct');
          }
          return(<span 
            className={classes.join('')} 
            key={index}>{index+1}
          </span>);
        })}
      </div>
      <span className="appStats">Your Stats: {props.totalCorrectAnswers+'/'+props.currentQuestion}</span>
    </div>
  );
};

export default sidebar;
