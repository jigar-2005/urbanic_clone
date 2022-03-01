import { BrowserRouter as Router, Route } from "react-router-dom";
import Bag from "./Components/Bag/Bag";
import Category from "./Components/Category/Category";
import Homepage from "./Components/Homepage/Homepage";
import New from "./Components/New/New";
import Personal from "./Components/Personal/Personal";

function Routing() {
    return (
        <Router>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/category">
                <Category />
            </Route>
            <Route exact path="/newarrivals">
                <New />
            </Route>
            <Route exact path="/bag">
                <Bag />
            </Route>
            <Route exact path="/personal">
                <Personal />
            </Route>
        </Router>
    );
}
export default Routing;
