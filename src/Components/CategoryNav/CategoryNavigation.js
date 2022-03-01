import './CategoryNavigation.css';
import { Link } from 'react-router-dom';

function CategoryNavigation() {
    return (
        <>
            <div class="sticky-div row py-3">
                <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black", fontSize: "18px" }}>
                    <div className="col">All</div>
                </Link>
                <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black", fontSize: "18px" }}>
                    <div className="col">Dresses</div>
                </Link>
                <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black", fontSize: "18px" }}>
                    <div className="col">Blouses</div>
                </Link>
                <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black", fontSize: "18px" }}>
                    <div className="col">Sweater</div>
                </Link>
                <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black", fontSize: "18px" }}>
                    <div className="col">Jeans</div>
                </Link>
            </div>
        </>
    );
}

export default CategoryNavigation;
