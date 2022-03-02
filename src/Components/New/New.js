import Footer from "../Footer/Footer";
import NewHeader from "./NewHeader";
import NewItems from "./NewItems";


function New() {
    return (
        <>
            <NewHeader />
            <div style={{ paddingTop: "61px" }}>
                <NewItems />
                <Footer currentPage="New" />
            </div>
        </>
    );
}

export default New;
