import { Link } from "react-router-dom";
import './Wishlist.css'


function WishlistHeader() {
    return (
        <>
            <div className='topNavigation row m-0' style={{ height: "61px", paddingTop: "17px", borderBottom: "1px solid #E6E6E6", position: "fixed", background: "white", zIndex: "1" }}>
                {/* <div className="col-4 text-center">
                </div>
                <div className="col-4 text-center">
                    <p style={{ fontSize: "20px" }}><b>Wishlist</b></p>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABO1BMVEUAAAAAAAAAAAAAAABAQEAzMzMkJCQ5OTkzMzMqKio2NjYzMzMxMTE1NTUzMzMwMDAuLi42NjYzMzMyMjIyMjIxMTE1NTU0NDQxMTEzMzMzMzMyMjIxMTE0NDQxMTEyMjIzMzMyMjIxMTE0NDQyMjIyMjI0NDQyMjIyMjI0NDQyMjIzMzMyMjIzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMyMjI0NDQzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMyMjIzMzMzMzPJcwBCAAAAaHRSTlMAAQIDBAUHCQoMExQVHR4gISEjJC4vMDE0Nzw9PkBDR0tMTk5WV1hbXF5gZGZoaXBzdXZ5fX+Eh4mJjJGSk5manqChpamqrre5uru9vr/FycvLzNHX29zd4OPo6+3v8fL09fb3+Pn9/heUT2UAAAGOSURBVDjL3ZVrNwJRFIanckuJimFE7oQSMQmj3G8JMS4pUqL3//8Cp+s0c86Z8ZX9YdbZez1rz97vvGeNIPyLCCbVYlFNBn+B+jNoRsZvxQYKaEchYNGXsBVFcjolpUJo895khpzYOIo5MonpbqSv2EpE0ttsyxSgaJkCpExgFZC0TAJUDti3uCWXgITcjgRQksMDLB1ewI7SPA3fgBdlt5F1V1GKy4wga6waYcc9tpmrxIB9ej8Pe+9p4NpYW/667WHCg8CrsXYHjDJh2wfgokv97DlImwkD/IYnzsc6BNYMpfG9EQ5My+E53e1qnJZCzVJ3eJYjB7HbVP0QIr6z1Q7OK6B+U4YoObKtLQiMy2HBMfeIJkztrhXsxzU75MvkUd1gy+HVXmXf+W74J7/AkWMGSLeTsZN3VJ/jLp4cMd11EmyuXr070p3wERDh3jWjHFnqk/KtYOIMupWXYUO9OyIcMazcsc66OrpeF1oWBR5kfpwB5xrs+4RFdAq7YkEfODrH8kVNxtic/MM/vR8XlqPsj9m6BgAAAABJRU5ErkJggg==" alt="#" style={{ width: "30px", height: "30px", marginLeft: "20px", marginRight: "10px" }} />
                </div> */}
                <div className="col text-left">
                    <Link to="/">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAa5JREFUWAnl2LFOhDAYAGALRCYHNxcWdyZzJCzAahh1MyYuRgddeQgSJy/RTRfjyCsQJgzxAXwOA4MJYH+SmnDHHdAr6U/s0tCW9svfhvyF1HWt7s2oKDOyNtT/DXZd99hxnJMpd01YhC3Lusnz/Ksoig/bts+mQgsBA7aqqiVFEoCWZXmEFryKpdDUNM2XqcBkl89aF9YwjNMoir6nAnMfCRlYCAIXWBaWCywTOxosGzsKjAE7GIwFOwiMCdsLxobdCsaI3QjGiu0EY8augbFjW+A5YAHcZGtwU4DkG56hkWZwFSGEK8+A9ycqP4qiPDQoCjykizRYWAwhFlj79JJw34CTJPmk+idoRVwgwo+tBH6xWCxptG8Zmg54C8PwyvO8mrXJrlvnNMuyO3ocnhmKbsFFEASvcRz/HRfWJ6tugQGBHb0Gxo7uBGNGbwRjRW8FY0T3grGhB4ExoQeDsaBHgTGgR4Nlo7nAMtHcYFnoVrYGCJ6ymuVpmnaZpuk7z1x97+wUYTZ5R8J0wPpE10LAgAK0ruvnqqpe+76P8w+86OgNmU9YhIcsJmLM7MC/JV5rQZDaNqsAAAAASUVORK5CYII=" width="25px" height="30px" alt="#" />
                    </Link>
                </div>
                <div className="col text-center">
                    <p style={{ fontSize: "20px" }}><b>Wishlist</b></p>
                </div>
                <div className="col" style={{textAlign:"right"}}>
                <Link to="/bag">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABO1BMVEUAAAAAAAAAAAAAAABAQEAzMzMkJCQ5OTkzMzMqKio2NjYzMzMxMTE1NTUzMzMwMDAuLi42NjYzMzMyMjIyMjIxMTE1NTU0NDQxMTEzMzMzMzMyMjIxMTE0NDQxMTEyMjIzMzMyMjIxMTE0NDQyMjIyMjI0NDQyMjIyMjI0NDQyMjIzMzMyMjIzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMyMjI0NDQzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMyMjIzMzMzMzPJcwBCAAAAaHRSTlMAAQIDBAUHCQoMExQVHR4gISEjJC4vMDE0Nzw9PkBDR0tMTk5WV1hbXF5gZGZoaXBzdXZ5fX+Eh4mJjJGSk5manqChpamqrre5uru9vr/FycvLzNHX29zd4OPo6+3v8fL09fb3+Pn9/heUT2UAAAGOSURBVDjL3ZVrNwJRFIanckuJimFE7oQSMQmj3G8JMS4pUqL3//8Cp+s0c86Z8ZX9YdbZez1rz97vvGeNIPyLCCbVYlFNBn+B+jNoRsZvxQYKaEchYNGXsBVFcjolpUJo895khpzYOIo5MonpbqSv2EpE0ttsyxSgaJkCpExgFZC0TAJUDti3uCWXgITcjgRQksMDLB1ewI7SPA3fgBdlt5F1V1GKy4wga6waYcc9tpmrxIB9ej8Pe+9p4NpYW/667WHCg8CrsXYHjDJh2wfgokv97DlImwkD/IYnzsc6BNYMpfG9EQ5My+E53e1qnJZCzVJ3eJYjB7HbVP0QIr6z1Q7OK6B+U4YoObKtLQiMy2HBMfeIJkztrhXsxzU75MvkUd1gy+HVXmXf+W74J7/AkWMGSLeTsZN3VJ/jLp4cMd11EmyuXr070p3wERDh3jWjHFnqk/KtYOIMupWXYUO9OyIcMazcsc66OrpeF1oWBR5kfpwB5xrs+4RFdAq7YkEfODrH8kVNxtic/MM/vR8XlqPsj9m6BgAAAABJRU5ErkJggg==" width="25px" height="30px" alt="#" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default WishlistHeader;




