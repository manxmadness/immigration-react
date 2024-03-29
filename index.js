import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Intro from './components/Intro'
import Story1 from './components/Story1'
import Story2 from './components/Story2'
import Guatemala from './components/Guatemala'
import Honduras from './components/Honduras'
import Response from './components/Response'
import ElSalvador from './components/ElSalvador'
import MS13 from './components/MS13'
import Phone from './components/Phone'
import Response2 from './components/Response2'
import Phone2 from './components/Phone2'
import Brother from './components/Brother'
import Threat from './components/Threat'
import Decision from './components/Decision'
import Death from './components/Death'
import Decision2 from './components/Decision2'
import Flee from './components/Flee'
import Pill from './components/Pill'
import Story3 from './components/Story3'
import Money from './components/Money'
import Taxi from './components/Taxi'
import Rest from './components/Rest'
import Bus from './components/Bus'
import Stops from './components/Stops'
import Mid from './components/Mid'
import Man from './components/Man'
import Submit from './components/Submit'
import Continue from './components/Continue'
import Walk from './components/Walk'
import River from './components/River'
import Story4 from './components/Story4'
import Raft from './components/Raft'
import Swim from './components/Swim'
import Mexico from './components/Mexico'
import Hike from './components/Hike'
import Encounter from './components/Encounter'
import Story5 from './components/Story5'
import Story6 from './components/Story6'
import Story7 from './components/Story7'
import Traffick from './components/Traffick'
import Woman from './components/Woman'
import Hop from './components/Hop'
import Safe from './components/Safe'
import Fall from './components/Fall'
import Zetas from './components/Zetas'
import Take from './components/Take'
import Take2 from './components/Take2'
import Coyote from './components/Coyote'
import Deal from './components/Deal'
import Coyote2 from './components/Coyote2'
import Form from './components/Form'
import Form2 from './components/Form2'
import GameOver from './components/GameOver'
import Argument from './components/Argument'
import Death1 from './components/Death1'
import Death2 from './components/Death2'
import Police from './components/Police'
import Death3 from './components/Death3'
import Death4 from './components/Death4'
import Death5 from './components/Death5'
import Death6 from './components/Death6'
import Heat from './components/Heat'
import Death7 from './components/Death7'
import Dad from './components/Dad'
import All from './components/All'
import Immigration from './components/Immigration'
import Hieleras from './components/Hieleras'
import Customs from './components/Customs'
import Across from './components/Across'
import Drop from './components/Drop'
import Wait from './components/Wait'
import Ice from './components/Ice'
import Sent from './components/Sent'
import Run from './components/Run'
import America from './components/America'
import Dust from './components/Dust'
import Ice2 from './components/Ice2'
import GoCoyote2 from './components/GoCoyote2'
import Warning from './components/Warning'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/Warning" component={Warning}/>
    <Route path="/Intro" component={Intro}/>
    <Route path="/Story1" component={Story1}/>
    <Route path="/Story2" component={Story2}/>
    <Route path="/Honduras" component={Honduras}/>
    <Route path="/ElSalvador" component={ElSalvador}/>
    <Route path="/Guatemala" component={Guatemala}/>
    <Route path="/Honduras" component={Honduras}/>
    <Route path="/Response" component={Response}/>
    <Route path="/MS13" component={MS13}/>
    <Route path="/Phone" component={Phone}/>
    <Route path="/Response2" component={Response2}/>
    <Route path="/Phone2" component={Phone2}/>
    <Route path="/Brother" component={Brother}/>
    <Route path="/Threat" component={Threat}/>
    <Route path="/Decision" component={Decision}/>
    <Route path="/Argument" component={Argument}/>
    <Route path="/Death" component={Death}/>
    <Route path="/Decision2" component={Decision2}/>
    <Route path="/Flee" component={Flee}/>
    <Route path="/Pill" component={Pill}/>
    <Route path="/Story3" component={Story3}/>
    <Route path="/Money" component={Money}/>
    <Route path="/Stops" component={Stops}/>
    <Route path="/Rest" component={Rest}/>
    <Route path="/Bus" component={Bus}/>
    <Route path="/Taxi" component={Taxi}/>
    <Route path="/Mid" component={Mid}/>
    <Route path="/Man" component={Man}/>
    <Route path="/Submit" component={Submit}/>
    <Route path="/Continue" component={Continue}/>
    <Route path="/Walk" component={Walk}/>
    <Route path="/River" component={River}/>
    <Route path="/Story4" component={Story4}/>
    <Route path="/Raft" component={Raft}/>
    <Route path="/Swim" component={Swim}/>
    <Route path="/Mexico" component={Mexico}/>
    <Route path="/Hike" component={Hike}/>
    <Route path="/Encounter" component={Encounter}/>
    <Route path="/Story5" component={Story5}/>
    <Route path="/Story6" component={Story6}/>
    <Route path="/Story7" component={Story7}/>
    <Route path="/Traffick" component={Traffick}/>
    <Route path="/Woman" component={Woman}/>
    <Route path="/Hop" component={Hop}/>
    <Route path="/Safe" component={Safe}/>
    <Route path="/Fall" component={Fall}/>
    <Route path="/Zetas" component={Zetas}/>
    <Route path="/Take" component={Take}/>
    <Route path="/Take2" component={Take2}/>
    <Route path="/Coyote" component={Coyote}/>
    <Route path="/Deal" component={Deal}/>
    <Route path="/Coyote2" component={Coyote2}/>
    <Route path="/Form" component={Form}/>
    <Route path="/Form2" component={Form2}/>
    <Route path="/GameOver" component={GameOver}/>
    <Route path="/Death1" component={Death1}/>
    <Route path="/Death2" component={Death2}/>
    <Route path="/Police" component={Police}/>
    <Route path="/Death3" component={Death3}/>
    <Route path="/Death4" component={Death4}/>
    <Route path="/Death5" component={Death5}/>
    <Route path="/Death6" component={Death6}/>
    <Route path="/Heat" component={Heat}/>
    <Route path="/Death7" component={Death7}/>
    <Route path="/Dad" component={Dad}/>
    <Route path="/All" component={All}/>
    <Route path="/Immigration" component={Immigration}/>
    <Route path="/Hieleras" component={Hieleras}/>
    <Route path="/Customs" component={Customs}/>
    <Route path="/Across" component={Across}/>
    <Route path="/Drop" component={Drop}/>
    <Route path="/Ice" component={Ice}/>
    <Route path="/Sent" component={Sent}/>
    <Route path="/Wait" component={Wait}/>
    <Route path="/Run" component={Run}/>
    <Route path="/America" component={America}/>
    <Route path="/Dust" component={Dust}/>
    <Route path="/Ice2" component={Ice2}/>
    <Route path="/GoCoyote2" component={GoCoyote2}/>
  </Router>
), document.getElementById('app'))
