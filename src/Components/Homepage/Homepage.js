import './Homepage.css';
import Policy from '../Policy/Policy';
import TopNavigation from '../TopNavigation/TopNavigation';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Discount from '../Discount/Discount';
import Offers from '../Offers/offers';
import FlashSale from '../FlashSale/FlashSale';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import NewArrivals from '../New Arivals/NewArrivals';
import HottestTrends from '../Hottest trends/HottestTrends';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryNavigation from '../CategoryNav/CategoryNavigation';
import Items from '../Items/Items';

function Homepage() {
  return (
    <>
      <TopNavigation />
      <div style={{ paddingTop: "61px" }}>
        <div className="scrollbox_start">
          <Policy />
          <CarouselSlider />
          <Discount />
          <Offers />
          <FlashSale />
          <SpecialOffer />
          <NewArrivals />
          <HottestTrends />
          <CategoryNavigation />
          <Items />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
