import React, { Component } from "react";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import Results from "../components/Results/Results";
import "./App.css";

class App extends Component {
  state = {
    menus: ["Menu1", "Menu2", "Menu3"],
    currentQuestion: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0,
    questions: [
      {
        question:
          "Before pulling out from a parallel parking space on the right side of the road, you should check for approaching traffic and",
        options: [
          "turn on emergency flashers",
          "not give any turn signals",
          "give a right turn signal",
          "give a left-turn signal"
        ],
        answer: "give a left-turn signal",
        result: ""
      },
      {
        question:
          "If you double your speed, your vehicle will travel ________ as far to brake to a stop.",
        options: ["twice", "four times", "three times", "just"],
        answer: "four times",
        result: ""
      },
      {
        question: "You may not park within",
        options: [
          "25 feet of the curb line of an intersecting street.",
          "65 feet of a fire hydrant.",
          "35 feet of the intersecting right-of-way lines if there is no curb.",
          "50 feet of the entrance to a fire station."
        ],
        answer: "25 feet of the curb line of an intersecting street.",
        result: ""
      },
      {
        question:
          "You must not pass on a curve or the crest of a hill if you cannot see at least ________ ahead.",
        options: ["750 feet", "500 feet", "850 feet", "650 feet"],
        answer: "500 feet",
        result: ""
      },
      {
        question:
          "If an emergency vehicle with flashing lights or sounding a siren approaches you from either direction, you must",
        options: [
          "pull over to the left and stop.",
          "pull over to the right and stop.",
          "increase your speed and clear the lane quickly.",
          "stop immediately where you are."
        ],
        answer: "pull over to the right and stop.",
        result: ""
      },
      {
        question: "What is your question6?",
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option4",
        result: ""
      },
      {
        question: "What is your question7?",
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option3",
        result: ""
      },
      {
        question: "What is your question8?",
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option2",
        result: ""
      },
      {
        question: "What is your question9?",
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option2",
        result: ""
      },
      {
        question: "What is your question10?",
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option2",
        result: ""
      }
    ]
  };

  submitHandler = () => {
    const currentQuestion = this.state.currentQuestion;
    const questionResult = this.state.questions[currentQuestion].result;
    let correctAnswers = this.state.totalCorrectAnswers;
    let wrongAnswers = this.state.totalWrongAnswers;

    if (questionResult) {
      correctAnswers += 1;
    } else {
      wrongAnswers += 1;
    }

    if (currentQuestion < this.state.questions.length) {
      if (this.state.questions[currentQuestion].result !== "") {
        this.setState((state, props) => {
          return {
            currentQuestion: state.currentQuestion + 1,
            totalCorrectAnswers: correctAnswers,
            totalWrongAnswers: wrongAnswers
          };
        });
      } else {
        alert("Please select an answer.");
      }
    }
  };

  changeHandler = index => {
    const currentQuestion = this.state.currentQuestion;
    if (currentQuestion <= this.state.questions.length) {
      let question = { ...this.state.questions[currentQuestion] };
      let questions = [...this.state.questions];

      question["answered"] = question.options[index];
      if (question["answered"] === question["answer"]) {
        question["result"] = true;
      } else {
        question["result"] = false;
      }

      questions[currentQuestion] = question;
      //console.log(questions);
      //console.log(this.state.questions);
      this.setState({ questions: questions });
    }
  };

  render() {
    return (
      <div className="app">
        <Header menus={this.state.menus} />
        <div className="main-contnent">
          <Sidebar
            questions={this.state.questions}
            currentQuestion={this.state.currentQuestion}
            totalCorrectAnswers={this.state.totalCorrectAnswers}
            totalWrongAnswers={this.state.totalWrongAnswers}
          />

          <div className="content">
            {this.state.currentQuestion < this.state.questions.length ? (
              <Content
                question={
                  this.state.questions[this.state.currentQuestion].question
                }
                options={
                  this.state.questions[this.state.currentQuestion].options
                }
                questionNumber={this.state.currentQuestion + 1}
                onSubmit={this.submitHandler}
                changed={index => this.changeHandler(index)}
              />
            ) : (
              <Results
                totalCorrectAnswers={this.state.totalCorrectAnswers}
                totalQuestions={this.state.questions.length}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
