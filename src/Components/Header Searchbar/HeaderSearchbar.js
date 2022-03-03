
function HeaderSearchbar() {
    return (
        <div className='topNavigation row m-0 px-4' style={{ paddingTop: "12px", paddingBottom: "12px", position: "fixed", background: 'white' }}>
            <input type="text" id="searchdata" name="searchdata" placeholder=" Search Urbanic" style={{ height: "40px", background: "#EEEEEE", border: "0px", fontSize: "16px", borderRadius: "5px" }} />
        </div>
    );
}

export default HeaderSearchbar;
