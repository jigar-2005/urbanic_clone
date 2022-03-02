import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptionCurve from './CategoryOptionCurve';

function CategoryCurve() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptionCurve currentPage='CategoryOptionCurve' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default CategoryCurve;


