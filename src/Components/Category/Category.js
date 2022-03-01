import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptions from './CategoryOptions';

function Category() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptions />
                <div style={{ marginRight: "17px", paddingTop: "3px" }}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Category;


