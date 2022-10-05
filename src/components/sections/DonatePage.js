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
        and many other things which comes to a cost and I need to pay for those. So, I would be so grateful is you could donate me somewhat bucks.
        
        It would be really helpful if you could donate and help me keep doing
        what I do. Thanks…
        <br/>
          You can pay anything upto your will here on this no..
          <br/>
            +91-9828243135 (for indians)
           <br/>
            If you are a nri, please consider to sponsor me on GitHub.
      </Typography>
      
    </main>
  );
};

export default DonatePage;
