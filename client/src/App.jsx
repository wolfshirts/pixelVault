import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PageOne from './PageOne.jsx';
import PageTwo from './PageTwo.jsx';

const App = () => (
  <div id="outerContainer">
    <Header />
    <div />
    <Switch>
      <Route exact path="/" component={PageOne}>
        <PageOne />
      </Route>
      <Route path="/pagetwo">
        <PageTwo />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
