import ItemSuggest from '../ItemSuggest/ItemSuggest';
import WishlistData from './WishlistData';
import WishlistHeader from './WishlistHeader';

function Wishlist() {
    return (
        <>
            <WishlistHeader />
            <WishlistData />
            <ItemSuggest />
        </>
    );
}

export default Wishlist;
