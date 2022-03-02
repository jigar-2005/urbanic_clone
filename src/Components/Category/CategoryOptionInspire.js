import { Link } from "react-router-dom";

function CategoryOptionInspire(props) {
    return (
        <div className='CategoryOptions'>
            <div className="row m-0">
                <div className="col-4 py-4" style={{ paddingLeft: "30px", background: "rgb(247, 247, 247)" }}>
                    <Link to="/category" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Instagram <br /> Top Picks<br /><br /></Link><br />
                    {(props.currentPage === 'CategoryOptionInspire') ?
                        <>
                            <Link to="/category/inspire" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Inspire<br /><br /></Link><br />
                        </>
                        :
                        <>
                            <Link to="/category/inspire" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Inspire<br /><br /></Link><br />
                        </>
                    }
                    <Link to="/category/clothing" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Clothing<br /><br /></Link><br />
                    <Link to="/category/sports" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Sports<br /><br /></Link><br />
                    <Link to="/category/curve" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Curve<br /><br /></Link><br />
                    <Link to="/category/pyjamasandlingerie" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Pyjamas & <br />Lingerie</Link><br />
                </div>
                <div className="col-8 mt-3">
                    <h6>Element</h6>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/7898fb89a0a84608bb9bff718dfbdd6a" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Animal Print</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/b29f107933f14486a922906d7bd9a084" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Floral</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/7ad83d61db9f4125ad35a1d60ab6c5f7" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Tie & Dye</h6>
                        </div>
                    </div>

                    <h6 className="mt-5">Style</h6>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/eba82903fcc84c40b1f8d03313eaed01" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Animal Print</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/77d4d160c6f443cda914320ff74bf426" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Floral</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/2620c614d1e645bfb85176e60b06a214" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Tie & Dye</h6>
                        </div>
                    </div>
                    <h6 className="mt-5">Occasion</h6>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/0aaf9977d80840ed977f104e5c541fa6" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Animal Print</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/1b45d6a618494943a1227e742822dbda" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Floral</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/b22f42ea3c0040e88320e21b007c2c47" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Tie & Dye</h6>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <br /><br />
                </div>
            </div>
        </div>
    );
}

export default CategoryOptionInspire;
