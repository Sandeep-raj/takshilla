import { Grid } from "@mui/material";
import "./Footer.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twiter from "../../assets/images/square-x-twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <Grid container spacing={2} className="rootgrid">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <h3>Contact Information Address:</h3>
        <p>
          Takshilla Classes, Opp.-Govt. Girls High school, Ashok Rajpath Rd,
          Patna, Bihar 800001
        </p>
        <h3>Contact Numbers:</h3>
        <p>General Enquiries: [Your Contact Number]</p>
        <p>Admission Helpline: [Admission Contact Number]</p>
        <p>Email: info@takshillaclasses.com</p>
        <p>Website: www.takshillaclasses.com</p>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <h3>Follow Us</h3>
        <p>Connect with us on social media for updates and announcements:</p>
        <div className="social_links">
          <span className="social_span">
            <img src={facebook} alt="facebook" />
            <h3>facebook</h3>
          </span>
          <span className="social_span">
            <img src={instagram} alt="instagram" />
            <h3>instagram</h3>
          </span>
          <span className="social_span">
            <img src={twiter} alt="twitter" />
            <h3>twitter</h3>
          </span>
          <span className="social_span">
            <img src={youtube} alt="youtube" />
            <h3>youtube</h3>
          </span>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p className="copyright">
          Copyright © 2023 Takshilla Classes All rights reserved. No part of
          this website may be reproduced without permission.
        </p>
      </Grid>
    </Grid>
  );
};

export default Footer;
