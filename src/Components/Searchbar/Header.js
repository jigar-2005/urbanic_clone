import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="pb-2" style={{ boxShadow: "0 2px gray", width: "487px", position: "absolute", background: "white" }}>
            <div className='row px-3' style={{ height: "61px", paddingTop: "17px" }}>
                <div className="col-1 text-center">
                    <Link to="/">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAa5JREFUWAnl2LFOhDAYAGALRCYHNxcWdyZzJCzAahh1MyYuRgddeQgSJy/RTRfjyCsQJgzxAXwOA4MJYH+SmnDHHdAr6U/s0tCW9svfhvyF1HWt7s2oKDOyNtT/DXZd99hxnJMpd01YhC3Lusnz/Ksoig/bts+mQgsBA7aqqiVFEoCWZXmEFryKpdDUNM2XqcBkl89aF9YwjNMoir6nAnMfCRlYCAIXWBaWCywTOxosGzsKjAE7GIwFOwiMCdsLxobdCsaI3QjGiu0EY8augbFjW+A5YAHcZGtwU4DkG56hkWZwFSGEK8+A9ycqP4qiPDQoCjykizRYWAwhFlj79JJw34CTJPmk+idoRVwgwo+tBH6xWCxptG8Zmg54C8PwyvO8mrXJrlvnNMuyO3ocnhmKbsFFEASvcRz/HRfWJ6tugQGBHb0Gxo7uBGNGbwRjRW8FY0T3grGhB4ExoQeDsaBHgTGgR4Nlo7nAMtHcYFnoVrYGCJ6ymuVpmnaZpuk7z1x97+wUYTZ5R8J0wPpE10LAgAK0ruvnqqpe+76P8w+86OgNmU9YhIcsJmLM7MC/JV5rQZDaNqsAAAAASUVORK5CYII=" width="25px" height="30px" alt="#" />
                    </Link>
                </div>
                <div className="col-9" style={{ marginTop: "-5px" }}>
                    <input className="px-3" type="text" name="searchdata" placeholder=" Search Urbanic" style={{ height: "40px", background: "#EEEEEE", border: "0px", fontSize: "16px", borderRadius: "5px", width: "100%" }} />
                </div>
                <div className="col-2">
                    <h4 style={{ fontSize: "20px" }}>Search</h4>
                </div>
            </div>
            <div>
                <hr style={{ marginTop: "-1px" }} />
            </div>
            <div className="row text-center px-3">
                <div className="col-2">
                    <h5 style={{ fontSize: "16px" }}>Sort <i class="fa fa-angle-down"></i></h5>
                </div>
                <div className="col-3">
                    <h5 style={{ fontSize: "16px" }}>Category <i class="fa fa-angle-down"></i></h5>
                </div>
                <div className="col-2">
                    <h5 style={{ fontSize: "16px" }}>Size <i class="fa fa-angle-down"></i></h5>
                </div>
                <div className="col-3">
                    <h5 style={{ fontSize: "16px" }}>Fast Delivery</h5>
                </div>
                <div className="col-2">
                    <h5 style={{ fontSize: "16px" }}>Filter <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAgdJREFUOBGllD1oU1EUgPN+pMkrDhnMXgviINLB1UEUlQ5t2inRyYI4CC0oSl4IEgjk5XXq0J+hdDdZ0snBXXAKVWkHhdJRAkqhYoL58zuSG+5LXwSfB867956fL+ec926MXC53PxaLbQ0Gg8uskcUwjM8wHts8toVimuZWZBqJ/X5/kWXT5tGG7ti2vVMqlQ6jQPP5/Bx5S3B+UZj5hCovdjqd967rLv8rkJFlqe4dsCnLslYNARQKhZlut1sHfB1HOR6PvyoWi/2/wWu1mtVoNDxyXpDzgdh0pVI5+QOURABOq9XaY5sh4A3Qh9hOxTcuVJXE9hrYXWKrxK4Q+1PiRkCVRPBzAn3Ox4wj7XnekfLJyryu9Xq9fUAzqIt/XfefAw6TbjOXKvsuv35VVcqML2E/AmThy9DiWx0m+1CgOEhOk1wn+Z5KVDaGP08XU4TdkVhNPslnEyqAzsRB4gUVMISI7Tu6hmaVb7geTASOBZ47UvUDjKIBiQyk/UeMRK7tSOjqY2Qg7d4AcGtEY4MtGRlIy09hiAYkMpCWX1LRgk7j/F8tOwCmdSAjcCZWyG3oSDDfXCBJAWi5yF40IBOBiUSi0W63v/Emd7mOs6lUaqPZbAaSww5mmFFsXLcf/EfeZHtAa2VgX1ifiY87/lXWMJl49fRgXsACsAJ6Bfu67/tl3a/vfwPNVuZauXTHkAAAAABJRU5ErkJggg==" alt="#" width="14px" /></h5>
                </div>
            </div>
        </div>
    );
}

export default Header;




