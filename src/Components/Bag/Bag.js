import Footer from '../Footer/Footer';
import ItemSuggest from '../ItemSuggest/ItemSuggest';
import BagHeader from './BagHeader';
import BagInfo from './BagInfo';

function Bag() {
    return (
        <>
            <BagHeader />
            <BagInfo />
            <ItemSuggest />
            <Footer currentPage="Bag" />
        </>
    );
}

export default Bag;
