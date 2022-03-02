import Header from './Header';
import SearchItems from './SearchItem';

function Searchbar() {
    return (
        <>
            <Header />
            <div style={{ paddingTop: "115px" }}>
                <SearchItems />
            </div>
        </>
    );
}

export default Searchbar;
