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
  </Router>
), document.getElementById('app'))
