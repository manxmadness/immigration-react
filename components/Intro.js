import React, { Component } from 'react';
import { Link } from 'react-router'
// import quizQuestions from './api/quizQuestions';

class Intro extends React.Component {
   constructor() {
    super();
    // this.state = {
    // counter: 0,
    // questionId: 1,
    // question: '',
    //      data:[
    //         {
    //            component: 'Tens of thousands of Salvadorans, Guatemalans, and Hondurans, many of them unaccompanied minors, have arrived in the United States in recent years, seeking asylum from the region’s skyrocketing violence.',
    //            id: 1
    //         },
    //         {
    //            component: 'Their countries, which form a region known as the Northern Triangle, were rocked by civil wars in the 1980s, leaving a legacy of violence and fragile institutions.',
    //            id: 2
    //         },
    //         {
    //            component: 'The region remains menaced by corruption, drug trafficking, and gang violence despite tough police and judicial reforms.' ,
    //            id: 3
    //         }
    //      ]
    //   }
     this.state= {
       data:[
             {
                text: 'Tens of thousands of Salvadorans, Guatemalans, and Hondurans, many of them unaccompanied minors, have arrived in the United States in recent years, seeking asylum from the region’s skyrocketing violence.',
                id: 1
             },
             {
                text: 'Their countries, which form a region known as the Northern Triangle, were rocked by civil wars in the 1980s, leaving a legacy of violence and fragile institutions.',
                id: 2
             },
             {
                text: 'The region remains menaced by corruption, drug trafficking, and gang violence despite tough police and judicial reforms.' ,
                id: 3
             }
          ],
       counter: 0,
       text:''
     }
   }

   render(){
        if (this.state.counter < 2) {
          this.state.text = this.state.data[this.state.counter].text
        } else if (this.state.counter === 2) {
          this.state.text = this.state.data[this.state.counter].text
          $('#next').addClass('d-none')
          $('#continue').removeClass('d-none')
        }
         return(
           <div className="row justify-content-center">
             <div className="col-12 height-50">
             </div>
             <div className="col-lg-8 col-md-8 col-12">
               <p>{this.state.text}</p>
             </div>
             <div className="col-lg-6 col-md-7 col-12 text-center" id="next">
               <div className="btn btn-dark btn-block" onClick= {() => this.setState({counter: this.state.counter + 1})}>Next</div>
             </div>
             <div className="w-100"></div>
               <div id="continue" className="col-lg-6 col-md-7 d-none col-12 text-center">
                <Link className="btn btn-dark btn-block" to="/Form">Continue to game</Link>
               </div>
            </div>
         )
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
