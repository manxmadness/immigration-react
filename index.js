import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Story2 from './components/Story2'
import Guatemala from './components/Guatemala'
import Honduras from './components/Honduras'
import ElSalvador from './components/ElSalvador'
import MS13 from './components/MS13'
import Phone from './components/Phone'
import Brother from './components/Brother'
import Threat from './components/Threat'
import Decision from './components/Decision'
import Flee from './components/Flee'
import Pill from './components/Pill'
import Story3 from './components/Story3'
import Money from './components/Money'
import Taxi from './components/Taxi'
import Mid from './components/Mid'
import Man from './components/Man'
import Submit from './components/Submit'
import Walk from './components/Walk'
import River from './components/River'
import Story4 from './components/Story4'
import Raft from './components/Raft'
import Swim from './components/Swim'
import Row from './components/Row'
import Hike from './components/Hike'
import Encounter from './components/Encounter'
import Story5 from './components/Story5'
import Story6 from './components/Story6'
import Story7 from './components/Story7'
import Traffick from './components/Traffick'
import Form from './components/Form'
import Form1 from './components/Form1'
import Woman from './components/Woman'
import Hop from './components/Hop'
import Safe from './components/Safe'
import Fall from './components/Fall'
import Zetas from './components/Zetas'
import Take from './components/Take'
import Take2 from './components/Take2'
import Coyote from './components/Coyote'
import Deal from './components/Deal'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/Story2" component={Story2}/>
    <Route path="/Honduras" component={Honduras}/>
    <Route path="/ElSalvador" component={ElSalvador}/>
    <Route path="/Guatemala" component={Guatemala}/>
    <Route path="/Honduras" component={Honduras}/>
    <Route path="/MS13" component={MS13}/>
    <Route path="/Phone" component={Phone}/>
    <Route path="/Brother" component={Brother}/>
    <Route path="/Threat" component={Threat}/>
    <Route path="/Decision" component={Decision}/>
    <Route path="/Flee" component={Flee}/>
    <Route path="/Pill" component={Pill}/>
    <Route path="/Story3" component={Story3}/>
    <Route path="/Money" component={Money}/>
    <Route path="/Taxi" component={Taxi}/>
    <Route path="/Mid" component={Mid}/>
    <Route path="/Man" component={Man}/>
    <Route path="/Submit" component={Submit}/>
    <Route path="/Walk" component={Walk}/>
    <Route path="/River" component={River}/>
    <Route path="/Story4" component={Story4}/>
    <Route path="/Raft" component={Raft}/>
    <Route path="/Swim" component={Swim}/>
    <Route path="/Row" component={Row}/>
    <Route path="/Hike" component={Hike}/>
    <Route path="/Encounter" component={Encounter}/>
    <Route path="/Story5" component={Story5}/>
    <Route path="/Story6" component={Story6}/>
    <Route path="/Story7" component={Story7}/>
    <Route path="/Traffick" component={Traffick}/>
    <Route path="/Form" component={Form}/>
    <Route path="/Form1" component={Form1}/>
    <Route path="/Woman" component={Woman}/>
    <Route path="/Hop" component={Hop}/>
    <Route path="/Safe" component={Safe}/>
    <Route path="/Fall" component={Fall}/>
    <Route path="/Zetas" component={Zetas}/>
    <Route path="/Take" component={Take}/>
    <Route path="/Take2" component={Take2}/>
    <Route path="/Coyote" component={Coyote}/>
    <Route path="/Deal" component={Deal}/>
  </Router>
), document.getElementById('app'))
