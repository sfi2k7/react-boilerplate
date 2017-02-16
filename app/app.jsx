var React = require("react");
var ReactDOM = require("react-dom");

//Load Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css")
require("style!css!AppStyles")
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={}>
        <Route path="path" component={}/>
        <IndexRoute component={}/>
    </Route>
</Router>, 
document.getElementById("app"));