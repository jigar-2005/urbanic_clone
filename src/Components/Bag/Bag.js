import Footer from '../Footer/Footer';
import './Bag.css';
import BagHeader from './BagHeader';
import BagInfo from './BagInfo';
import BagSuggestionItem from './BagSuggestionItem';

function Bag() {
    return (
        <>
            <BagHeader />
            <div className="scrollbox_start111">
                <BagInfo />
                <BagSuggestionItem />
                <Footer />
            </div>
        </>
    );
}

export default Bag;
