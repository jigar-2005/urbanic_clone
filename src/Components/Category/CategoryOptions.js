import './CategoryOptions.css';
import { Link } from "react-router-dom";

function CategoryOptions() {
    return (
        <div className="row m-0">
            <div className="col-3 py-4" style={{ paddingLeft: "30px", background: "#F4F4F4" }}>
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Instagram <br /> Top Picks<br /><br /></Link><br />
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Inspire<br /><br /></Link><br />
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Clothing<br /><br /></Link><br />
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Sports<br /><br /></Link><br />
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Curve<br /><br /></Link><br />
                <Link to="/" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Pyjamas & <br />Lingerie</Link><br />
            </div>
            <div className="col-9 CategoryOptions_scrollbox_start" style={{ paddingBottom: "2px" }}>
                <img src="https://img4.urbanic.com/7141fd5e09f3452099b2fc837c584137" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                <img src="https://img4.urbanic.com/1c9154a2569348109b67eba160debe70" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                <img src="https://img4.urbanic.com/7fa488e190714967b0d7261db342fe6c" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                <img src="https://img4.urbanic.com/84d01a7c903f413d97a6862aa1790887" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                <img src="https://img4.urbanic.com/6583eaeb1efc425da0c01a2707845208" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default CategoryOptions;
