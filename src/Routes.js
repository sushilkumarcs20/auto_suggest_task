import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./Home";

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;