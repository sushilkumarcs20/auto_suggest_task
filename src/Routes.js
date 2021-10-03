import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CommonProvider } from './components/helper/store';
import Home from "./components/Home";

const Routes = (props) => {
    return (
        <Router>
            {/* Common Provider is component having MedicineProvider and CartProvider to use context */}
            <CommonProvider>
                <Route exact path="/" component={Home}></Route>
            </CommonProvider>
        </Router>
    )
}

export default Routes;