

function BagInfo() {
    return (
        <>
            <div className="py-1" style={{ background: "#F0F0F0", marginTop:"61px" }}>
                <div className="row m-3">
                    <div className="col-9">
                        <h6 style={{ fontSize: "18px" }}>Login in to syn your shopping bag.</h6>
                    </div>
                    <div className="col-3">
                        <button class="btn text-light" type="submit" style={{ marginTop: "-5px", background: "#333333", fontSize: "18px", paddingTop: "0px", paddingBottom: "5px" }}>Login</button>
                    </div>
                </div>
                <img src="https://img4.urbanic.com/9819403cff0c4c728ee5c565b2742b4f" alt="#" style={{ width: "100%", marginBottom: "10px" }} />
                <div className="text-center py-5" style={{ background: "white" }}>
                    <img src="https://static2.urbanic.com/online/online-in-v.3.1.132/assets/images/dynamic/empty.png" alt="#" width="150px" height="120px" />
                    <h5 className="text-secondary">Your shopping bag is still empty</h5>
                    <button class="btn text-light" type="submit" style={{ marginTop: "50px", background: "#333333", fontSize: "18px" }}>Continue Shopping</button>
                </div>
            </div>
        </>
    );
}

export default BagInfo;




