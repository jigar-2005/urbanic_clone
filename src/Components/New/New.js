import Footer from "../Footer/Footer";
import NewHeader from "./NewHeader";
import NewItems from "./NewItems";


function New() {
    return (
        <>
            <NewHeader />
            <div style={{ paddingTop: "61px" }}>
                <div className="scrollbox_start">
                    <NewItems />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default New;
