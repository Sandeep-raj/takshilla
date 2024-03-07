import { Grid, Typography, useMediaQuery } from "@mui/material";
import "./Footer.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twiter from "../../assets/images/square-x-twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  const desktopView = useMediaQuery("(min-width:1200px)");
  return (
    <div className="footer_root">
      <Grid container spacing={2} className="rootgrid">
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant={!desktopView ? "h4" : "h5"}>
            Contact Information Address:
          </Typography>
          <Typography variant={!desktopView ? "p" : "p"}>
            Takshilla Classes, Abdullah Chak, Near Satyam School, Post - Bairya,
            P.S - Gopalpur, Patna 800007
          </Typography>
          <Typography variant={!desktopView ? "h4" : "h5"}>
            Contact Numbers:
          </Typography>
          <Typography variant={!desktopView ? "p" : "h7"}>
            General Enquiries: +91-9905910453
            <br />
          </Typography>
          <Typography variant={!desktopView ? "p" : "h7"}>
            Admission Helpline: +91-9905910453
            <br />
          </Typography>
          <Typography variant={!desktopView ? "p" : "h7"}>
            Email: takshilla.info@gmail.com
            <br />
          </Typography>
          <Typography variant={!desktopView ? "p" : "h7"}>
            Website: www.takshilla.in
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant={!desktopView ? "h6" : "h4"}>
            Follow Us
          </Typography>
          <Typography variant={!desktopView ? "h5" : "h7"}>
            Connect with us on social media for updates and announcements:
          </Typography>
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
    </div>
  );
};

export default Footer;
