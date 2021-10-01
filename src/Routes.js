import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { CommonProvider } from './core/helper/store';
import Home from "./Home";

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <CommonProvider>
                    <Route exact path="/" component={Home}></Route>
                </CommonProvider>
            </Switch>
        </Router>
    )
}

export default Routes;