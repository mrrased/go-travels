import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import TopBar from "../../Shared/TopBar/TopBar";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutOffer from "./AboutOffer/AboutOffer";
import FlightDestinationArea from "../../Home/FlightDestinationArea/FlightDestinationArea";
import ServiceArea from "../../Home/ServiceArea/ServiceArea";
import AboutAsked from "./AboutAsked/AboutAsked";
import TopFooter from "../../Shared/TopFooter/TopFooter";
import BottomFooter from "../../Shared/BottomFooter/BottomFooter";
import AnimationPage from "../../Animation/AnimationPage";
import { Puff } from "react-loader-spinner";

const About = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
    }, 600);
  }, []);
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
      <AboutBanner />
      <AboutOffer />
      <FlightDestinationArea />
      <ServiceArea />
      <AboutAsked />
      <TopFooter />
      <BottomFooter />
    </AnimationPage>
  );
};

export default About;
