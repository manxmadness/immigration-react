import React, { Component } from 'react';
import { Link } from 'react-router'
// import quizQuestions from './api/quizQuestions';

class Intro extends React.Component {
   constructor() {
    super();
    this.state = {
    counter: 0,
    questionId: 1,
    question: '',
         data:[
            {
               component: 'Tens of thousands of Salvadorans, Guatemalans, and Hondurans, many of them unaccompanied minors, have arrived in the United States in recent years, seeking asylum from the region’s skyrocketing violence.',
               id: 1
            },
            {
               component: 'Their countries, which form a region known as the Northern Triangle, were rocked by civil wars in the 1980s, leaving a legacy of violence and fragile institutions.',
               id: 2
            },
            {
               component: 'The region remains menaced by corruption, drug trafficking, and gang violence despite tough police and judicial reforms.' ,
               id: 3
            }
         ]
      }
   }

   componentWillMount() {

   this.setState({
     question: this.state.data[0].component,
     questionId: this.state.data[0].id
   });
 }
 setNextQuestion() {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;
  this.setState({
    counter: counter,
    questionId: this.state.data[counter].id,
    question: this.state.data[counter].component,

  });
}
   render() {
     console.log(this.state.question)
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}

export default Intro;
