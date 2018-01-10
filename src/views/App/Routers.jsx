import React from 'react';
//import {Router, Route, IndexRoute} from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
//Link, Route, Switch

import SubmissionDashboard from '../../components/SubmissionDashboard';
import Collection from '../../components/Collection';

export default class Routers extends React.Component {

	render() {
		return (
			<HashRouter>
			<Switch>
        <Route exact path="/" component={SubmissionDashboard} />
        <Route exact path="/collection" component={Collection} />
      </Switch>
      </HashRouter>
		)
	}
}