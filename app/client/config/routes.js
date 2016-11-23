var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
var TimeWrapper = require('../Components/TimeWrapper')

var routes = (

<Router history={browserHistory}>
	<Route path='/' component={TimeWrapper}>
	</Route>
</Router>
)

 module.exports = routes
	// <IndexRoute component={Button}/>