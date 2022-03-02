import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptionClothing from './CategoryOptionClothing';

function CategoryClothing() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptionClothing currentPage='CategoryOptionClothing' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default CategoryClothing;


