import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Bag from "./Components/Bag/Bag";
import Category from "./Components/Category/Category";
import CategoryClothing from "./Components/Category/CategoryClothing";
import CategoryCurve from "./Components/Category/CategoryCurve";
import CategoryInspire from "./Components/Category/CategoryInspire";
import CategorySports from "./Components/Category/CategorySports";
import CategoryPyjamasAndLingerie from "./Components/Category/PyjamasAndLingerie";
import Homepage from "./Components/Homepage/Homepage";
import New from "./Components/New/New";
import Personal from "./Components/Personal/Personal";
import Searchbar from "./Components/Searchbar/Searchbar";
import Wishlist from "./Components/Wishlist/Wishlist";

function Routing() {
    return (
        <Router>
            <Route exact path="/searchbar">
                <Searchbar />
            </Route>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/category">
                <Category />
            </Route>
            <Route exact path="/category/inspire">
                <CategoryInspire />
            </Route>
            <Route exact path="/category/clothing">
                <CategoryClothing />
            </Route>
            <Route exact path="/category/sports">
                <CategorySports />
            </Route>
            <Route exact path="/category/curve">
                <CategoryCurve />
            </Route>
            <Route exact path="/category/pyjamasandlingerie">
                <CategoryPyjamasAndLingerie />
            </Route>
            <Route exact path="/newarrivals">
                <New />
            </Route>
            <Route exact path="/wishlist">
                <Wishlist />
            </Route>
            <Route exact path="/bag">
                <Bag />
            </Route>
            <Route exact path="/personal">
                <Personal />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Router>
    );
}
export default Routing;



