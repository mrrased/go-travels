import React from "react";
import TopBookingArea from "../BookingItem/ItemOne/TopBookingArea";
import Booking from "../Shared/Booking/Booking";
import BottomFooter from "../Shared/BottomFooter/BottomFooter";
import NavBar from "../Shared/NavBar/NavBar";
import TopBar from "../Shared/TopBar/TopBar";
import TopFooter from "../Shared/TopFooter/TopFooter";
import FeaturesArea from "./FeaturesArea/FeaturesArea";
import FlightDestination from "./FlightDestination/FlightDestination";
import FlightDestinationArea from "./FlightDestinationArea/FlightDestinationArea";
import FlightOffer from "./FlightOffer/FlightOffer";
import NewsArea from "./NewsArea/NewsArea";
import ServiceArea from "./ServiceArea/ServiceArea";
import TopBanner from "./TopBanner/TopBanner";
import FacbookMsg from "../FacbookMsg/FacbookMsg";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <TopBanner />
      <TopBookingArea />
      <Booking />
      <FeaturesArea />
      <FlightOffer />
      <FlightDestinationArea />
      <FlightDestination />
      <ServiceArea />
      <NewsArea />
      <FacbookMsg />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Home;
