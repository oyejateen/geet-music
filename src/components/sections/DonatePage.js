import React from "react";
import { Typography } from "@material-ui/core";
import "./DonatePageStyle.css";
import paytmLogo from "../../images/Paytm.svg";
import paytmQr from "../../images/paytmQR.jpg";
const DonatePage = () => {
  return (
    <main style={{ margin: "10px" }}>
      <br />
      <Typography variant="h5" align="center">
        Support Me{" "}
        <span role="img" aria-label="hands joining">
          🙏
        </span>
      </Typography>
      <br />
      <Typography variant="subtitle1" align="center">
        This app is free and open source for everyone and It doesn't show any
        ads because I wanted to keep it like that, But there are servers running
        and many other things which comes to a cost and I need to pay for those. I would be so grateful is you could sponser me on github.
        
        It would be really helpful if you will sponser and help me keep doing
        what I do. Thanks
      </Typography>
      
    </main>
  );
};

export default DonatePage;
