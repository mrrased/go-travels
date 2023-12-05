import React, { useEffect, useState } from "react";
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
import AnimationPage from "../Animation/AnimationPage";
import { Puff } from "react-loader-spinner";

const Home = () => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);
    console.log("useEffect");
    setTimeout(() => {
      setIsLoad(false);
    }, 600);
  }, []);

  console.log("select");

  return (
    <AnimationPage>
      {isLoad && (
        <div className="flex justify-center items-center h-screen w-full transition-all ease-in-out duration-300">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#57112f"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
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
    </AnimationPage>
  );
};

export default Home;
