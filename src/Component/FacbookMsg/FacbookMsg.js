import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacbookMsg = () => {
  return (
    <FacebookProvider appId="309370035289120" chatSupport>
      <CustomChat pageId="110761984601390" minimized={true} />
    </FacebookProvider>
  );
};

export default FacbookMsg;
