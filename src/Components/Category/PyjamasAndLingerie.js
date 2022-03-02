import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptionPyjamasAndLingerie from './CategoryOptionPyjamasAndLingerie';

function CategoryPyjamasAndLingerie() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptionPyjamasAndLingerie currentPage='CategoryOptionPyjamasAndLingerie' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default CategoryPyjamasAndLingerie;