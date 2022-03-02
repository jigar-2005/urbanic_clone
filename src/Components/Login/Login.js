import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
        <div style={{height:"100vh"}}>
        <div style={{ padding: "17px" }}>
            <Link to="/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAa5JREFUWAnl2LFOhDAYAGALRCYHNxcWdyZzJCzAahh1MyYuRgddeQgSJy/RTRfjyCsQJgzxAXwOA4MJYH+SmnDHHdAr6U/s0tCW9svfhvyF1HWt7s2oKDOyNtT/DXZd99hxnJMpd01YhC3Lusnz/Ksoig/bts+mQgsBA7aqqiVFEoCWZXmEFryKpdDUNM2XqcBkl89aF9YwjNMoir6nAnMfCRlYCAIXWBaWCywTOxosGzsKjAE7GIwFOwiMCdsLxobdCsaI3QjGiu0EY8augbFjW+A5YAHcZGtwU4DkG56hkWZwFSGEK8+A9ycqP4qiPDQoCjykizRYWAwhFlj79JJw34CTJPmk+idoRVwgwo+tBH6xWCxptG8Zmg54C8PwyvO8mrXJrlvnNMuyO3ocnhmKbsFFEASvcRz/HRfWJ6tugQGBHb0Gxo7uBGNGbwRjRW8FY0T3grGhB4ExoQeDsaBHgTGgR4Nlo7nAMtHcYFnoVrYGCJ6ymuVpmnaZpuk7z1x97+wUYTZ5R8J0wPpE10LAgAK0ruvnqqpe+76P8w+86OgNmU9YhIcsJmLM7MC/JV5rQZDaNqsAAAAASUVORK5CYII=" width="28px" height="28px" alt="#" />
            </Link><br />
            <div className="text-center py-4">
                <img src="data:image/png;base64,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" alt="#" width="150px" height="35px" />
            </div>
            <div className="row px-4 pt-5">
                <div className="col-6">
                    <h4>
                        Log in Using Your Email
                    </h4>
                </div>
                <div className="col-6">
                    <h6 className="text-primary" style={{ textAlign: "right" }}>
                        Use Mobile No.
                    </h6>
                </div>
                <input type="text" placeholder="Enter Email" className="text-line pt-3" style={{ fontSize: "24px" }} />
                <button class="btn text-light" type="submit" style={{ marginTop: "50px", background: "#333333", fontSize: "18px", paddingTop: "15px", paddingBottom: "15px" }}><b>Receive OTP via Email</b></button>
                <div className="text-center" style={{ paddingTop: "250px" }}>
                    <h6 className="text-secondary" style={{ fontSize: "18px" }}>-- Or Login In With --</h6>
                    <div className="row text-center pt-2">
                        <div className="col-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApZYoGV9HosWSSmYLDoneemn8Z4CdwWHXIg&usqp=CAU" alt="#" style={{ borderRadius: "100%", width: "60px", height: "60px" }} />
                        </div>
                        <div className="col-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="#" style={{ borderRadius: "100%", width: "60px", height: "60px" }} />
                        </div>
                        <div className="col-4">
                            <img src="https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg" alt="#" style={{ borderRadius: "100%", width: "60px", height: "60px" }} />
                        </div>
                    </div>
                </div>
                <p className="pt-3" style={{ fontSize: "14.5px" }}>By proceeding,you agree to <Link to="#termsandcondition" style={{ textDecoration: "none" }}>Terms & Conditions</Link> & <Link to="#privacypolicy" style={{ textDecoration: "none" }}>Privacy Policy</Link></p>
                <div className="row text-center">
                    <div className="col-4"><Link to="#" style={{ textDecoration: "none" }}>Return Policy</Link></div>
                    <div className="col-4" style={{ borderLeft: "1px solid gray", borderRight: "1px solid gray" }}><Link to="#" style={{ textDecoration: "none" }}>Shipping Policy</Link></div>
                    <div className="col-4"><Link to="#" style={{ textDecoration: "none" }}>Contact Us</Link></div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Login;



