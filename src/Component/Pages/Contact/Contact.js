import React, { useEffect, useState } from "react";
import BottomFooter from "../../Shared/BottomFooter/BottomFooter";
import NavBar from "../../Shared/NavBar/NavBar";
import TopBar from "../../Shared/TopBar/TopBar";
import TopFooter from "../../Shared/TopFooter/TopFooter";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactForm from "./ContactForm/ContactForm";
import AnimationPage from "../../Animation/AnimationPage";
import { Puff } from "react-loader-spinner";

const Contact = () => {
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
      <ContactBanner />
      <ContactForm />
      <TopFooter />
      <BottomFooter />
    </AnimationPage>
  );
};

export default Contact;
