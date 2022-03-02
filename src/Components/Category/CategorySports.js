import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptionSports from './CategoryOptionSports';

function CategorySports() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptionSports currentPage='CategoryOptionSports' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default CategorySports;


