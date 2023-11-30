import { Grid, Typography } from "@mui/material";
import ourMissioin from "../../assets/images/our_mission.png";
import educator from "../../assets/images/educator.png";
import "./About.css";

const About = () => {
  return (
    <div className="about_root">
      <div className="about_parallax">
        <Typography variant="h1">About Us</Typography>
      </div>
      <Grid container className="about_grid">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h3>
            Welcome to Takshilla Classes, your trusted partner in the journey
            towards IIT-JEE success. Established with the vision of providing
            top-notch coaching in Mathematics and Physics, Takshilla Classes has
            been a beacon of excellence for aspiring engineering minds.
          </h3>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1>Our Mission</h1>
          <p>
            At Takshilla, our mission is to nurture talent, ignite curiosity,
            and instill the skills needed for conquering the challenges of
            IIT-JEE. We believe in providing holistic education that goes beyond
            textbooks, fostering an environment where students not only excel
            academically but also develop a passion for learning.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="about_picblk">
            <img src={ourMissioin} alt="prof" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1>Why Choose Takshilla?</h1>
          <ul>
            <li>
              Proven Track Record: Our consistent track record of successful
              IIT-JEE candidates speaks volumes about our commitment to
              excellence.
            </li>
            <li>
              Expert Faculty: Our experienced faculty members are dedicated to
              guiding students through every step of their academic journey.
            </li>
            <li>
              Comprehensive Curriculum: Takshilla's curriculum is meticulously
              designed to cover all aspects of the IIT-JEE syllabus, ensuring
              thorough preparation.
            </li>
            <li>
              Personalized Attention: We understand the unique learning needs of
              each student and provide individualized attention to maximize
              their potential.
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="about_picblk">
            <img src={educator} alt="educator" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
