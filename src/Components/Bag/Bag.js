import Footer from '../Footer/Footer';
import BagHeader from './BagHeader';
import BagInfo from './BagInfo';
import BagSuggestionItem from './BagSuggestionItem';

function Bag() {
    return (
        <>
            <BagHeader />
            <BagInfo />
            <BagSuggestionItem />
            <Footer currentPage="Bag" />
        </>
    );
}

export default Bag;
