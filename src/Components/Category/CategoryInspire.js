import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptionInspire from './CategoryOptionInspire';

function CategoryInspire() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptionInspire currentPage='CategoryOptionInspire' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default CategoryInspire;


