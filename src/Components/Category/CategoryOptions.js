import { Link } from "react-router-dom";

function CategoryOptions(props) {
    return (
        <div className='CategoryOptions'>
            <div className="row m-0">
                <div className="col-4 py-4" style={{ paddingLeft: "30px", background: "rgb(247, 247, 247)" }}>
                    {(props.currentPage === 'Category') ?
                        <>
                            <Link to="/category" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Instagram <br /> Top Picks<br /><br /></Link><br />
                        </>
                        :
                        <>
                            <Link to="/category" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Instagram <br /> Top Picks<br /><br /></Link><br />
                        </>
                    }
                    <Link to="/category/inspire" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Inspire<br /><br /></Link><br />
                    <Link to="/category/clothing" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Clothing<br /><br /></Link><br />
                    <Link to="/category/sports" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Sports<br /><br /></Link><br />
                    <Link to="/category/curve" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Curve<br /><br /></Link><br />
                    <Link to="/category/pyjamasandlingerie" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Pyjamas & <br />Lingerie</Link><br />
                </div>
                <div className="col-8">
                    <img src="https://img4.urbanic.com/7141fd5e09f3452099b2fc837c584137" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                    <img src="https://img4.urbanic.com/1c9154a2569348109b67eba160debe70" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                    <img src="https://img4.urbanic.com/7fa488e190714967b0d7261db342fe6c" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                    <img src="https://img4.urbanic.com/84d01a7c903f413d97a6862aa1790887" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                    <img src="https://img4.urbanic.com/6583eaeb1efc425da0c01a2707845208" className="my-2" alt="#" width="100%" style={{ borderRadius: "10px" }} />
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}

export default CategoryOptions;
