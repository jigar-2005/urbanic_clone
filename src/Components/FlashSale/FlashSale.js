
function FlashSale() {
    return (
        <div className='mt-4 px-3'>
            <h5>
                <span>FlashSale</span>
                <span style={{ float: "right" }}>Ends In <span className='px-1 py-0' style={{ background: "#1D1D1D", color: "white" }}>05</span><span className='text-dark'> : </span><span className='px-1 py-0' style={{ background: "#1D1D1D", color: "white" }}>24</span><span className='text-dark'> : </span><span className='px-1 py-0' style={{ background: "#1D1D1D", color: "white" }}>48</span></span>
            </h5>
            <div className="row">
                <div className="col-4 p-1">
                    <img src="https://img4.urbanic.com/goods-pic/81d70914ee9743378e1d5de2a00de088_w405_h539_q70" alt="#" width="100%" height="196px" />
                    <h5 style={{ color: "#BB0C0C", fontWeight:"400" }}>₹ 1039</h5>
                    <h6 style={{ color: "#999999", marginTop: "-8px", fontWeight:"400" }}><del>₹ 1890</del></h6>
                </div>
                <div className="col-4 p-1">
                    <img src="https://img4.urbanic.com/goods-pic/dcd26aae6c2443b3a572f6bb884cee47_w405_h539_q70" alt="#" width="100%" height="196px" />
                    <h5 style={{ color: "#BB0C0C", fontWeight:"400" }}>₹ 874</h5>
                    <h6 style={{ color: "#999999", marginTop: "-8px", fontWeight:"400" }}><del>₹ 1590</del></h6>
                </div>
                <div className="col-4 p-1">
                    <img src="https://img4.urbanic.com/goods-pic/8b5d977222324c7fb6065d2ef5fe6b51_w405_h539_q70" alt="#" width="100%" height="196px" />
                    <h5 style={{ color: "#BB0C0C", fontWeight:"400" }}>₹ 984</h5>
                    <h6 style={{ color: "#999999", marginTop: "-8px", fontWeight:"400" }}><del>₹ 1790</del></h6>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;
