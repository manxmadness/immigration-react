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
   componentDidMount() {

    loadUp()
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
           <div>
           <div id="logo" className="mx-auto"><img src="assets/000_Title.png"/></div>
           <div id="tumbleweed"><img src="assets/tumbleweed.png"/></div>
           <div id="shrub1"><img src="assets/shrub1.png"/></div>
           <div id="shrub2"><img src="assets/shrub2.png"/></div>
           <div className="row justify-content-center" id="quiz">
             <div className="col-12 height-50">
             </div>
             <div className="col-lg-8 col-md-8 col-12">
               <p>{this.state.text}<a href="https://www.cfr.org/backgrounder/central-americas-violent-northern-triangle" target="_blank"><sup>[1]</sup></a></p>
             </div>
             <div className="col-lg-6 col-md-7 col-12 text-center" id="next">
               <div className="btn btn-dark btn-block" onClick= {() => this.setState({counter: this.state.counter + 1})}>Next</div>
             </div>
             <div className="w-100"></div>
               <div id="continue" className="col-lg-6 col-md-7 d-none col-12 text-center">
                <Link className="btn btn-dark btn-block" to="/Warning" onClick={changeNav}>Continue to game</Link>
               </div>
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
function changeNav() {
  $('nav').css('display','flex')
}

function loadUp() {
  $('nav').css('display','none')
  // window.onload = function(){
    function goUp(){
      TweenLite.to(tumbleweed, 1, {width:'100px',height:'100px',top:"100px",onComplete:goRight});
    }
    function goLeft(){
      TweenLite.to(tumbleweed, 8, {left:"-250px",onComplete:goUp});
    }
    function goDown(){
      TweenLite.to(tumbleweed, 1, {width:'200px',height:'200px',top:"632px",onComplete:goLeft});
    }

    function goRight() {
    TweenLite.to(tumbleweed, 8, {left:"100%",onComplete:goDown});
    }
    var tumbleweed = $("#tumbleweed");
    goRight()
  // }



}
