import { Link } from "react-router-dom";

function CategoryOptionSports(props) {
    return (
        <div className='CategoryOptions'>
            <div className="row m-0">
                <div className="col-4 py-4" style={{ paddingLeft: "30px", background: "rgb(247, 247, 247)" }}>
                    <Link to="/category" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Instagram <br /> Top Picks<br /><br /></Link><br />
                    <Link to="/category/inspire" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Inspire<br /><br /></Link><br />
                    <Link to="/category/clothing" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Clothing<br /><br /></Link><br />
                    {(props.currentPage === 'CategoryOptionSports') ?
                        <>
                            <Link to="/category/sports" style={{ fontWeight: "500", textDecoration: "none", color: "black", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Sports<br /><br /></Link><br />
                        </>
                        :
                        <>
                            <Link to="/category/sports" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Sports<br /><br /></Link><br />
                        </>
                    }
                    <Link to="/category/curve" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Curve<br /><br /></Link><br />
                    <Link to="/category/pyjamasandlingerie" style={{ fontWeight: "500", textDecoration: "none", color: "rgb(161, 161, 161)", fontSize: "18px", paddingBottom: "25px", paddingTop: "25px" }}>Pyjamas & <br />Lingerie</Link><br />
                </div>
                <div className="col-8" style={{marginTop:"31.5px"}}>
                    <h6>Sports</h6>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/51f9fa8760bd4f2e8e6ef6b38265bed9" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>View All</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/b42075b0ec3f4b0b90543b59dcd387e3" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>T-Shirts</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/08088808e7534f28a11db85f703356f6" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Blouses</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/1552a5147abc4132afcf8bb9f18c4e36" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Sweatshirts</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/0d76e79d4f9841b3aae97290ec819003" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Sweaters</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/c227fe8e1d36431ea9c5436604317c44" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Tank Tops & Camies</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/1552a5147abc4132afcf8bb9f18c4e36" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Sweatshirts</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/0d76e79d4f9841b3aae97290ec819003" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Sweaters</h6>
                        </div>
                        <div className="col-4">
                            <img src="https://img4.urbanic.com/c227fe8e1d36431ea9c5436604317c44" alt="#" width="100%" />
                            <h6 style={{ fontSize: "15px", color: "gray" }}>Tank Tops & Camies</h6>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}

export default CategoryOptionSports;
