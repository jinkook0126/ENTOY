import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';

import SignUp from '../pages/SignUp/SignUp';

import Teams from '../pages/Teams/Teams';
import TeamRg from '../pages/TeamRegister/TeamRg';
import TeamDt from '../pages/TeamDetail/TeamDt';

import Partners from '../pages/Partners/Partners';
import PartnerRg from '../pages/PartnerRegister/PartnerRg';
import PartnerDt from '../pages/PartnerDetail/PartnerDt';



export default () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} /> 

      <Route path="/partners" component={Partners} />
      <Route path="/PartnerRg" component={PartnerRg} />
      <Route path="/PartnerDt" component={PartnerDt} />

      <Route path="/Teams" component={Teams} />
      <Route path="/TeamRg" component={TeamRg} />
      <Route path="/TeamDt" component={TeamDt} />

      <Route path="/SignUp" component={SignUp} />
    </Router>
  )
}