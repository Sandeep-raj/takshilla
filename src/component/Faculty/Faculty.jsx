import { Grid, Paper, Typography } from "@mui/material";
import "./Faculty.css";
import rahulImg from "../../assets/images/rahul.jpg";
import biruImg from "../../assets/images/biru.jpg";

const Faculty = () => {
  return (
    <div className="faculty_root">
      <div className="faculty_parallax">
        <Typography variant="h1">Our Faculty</Typography>
      </div>
      <div className="faculty_content">
        <h1>Meet Our Esteemed Faculty at Takshilla Classes</h1>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={4}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="faculty_item_img">
              <img src={biruImg} alt="biru" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper elevation={5}>
              <div className="faculty_item_txt">
                <h2>Biru Raj - Physics Virtuoso</h2>
                <p>
                  Meet Mr. Biru Raj, our Physics maestro. His enthusiasm for
                  physics is contagious, creating an engaging and dynamic
                  learning atmosphere in the classroom. Mr. Biru Raj is
                  dedicated to simplifying complex physics concepts, making them
                  accessible and enjoyable for students. With a focus on
                  practical applications and real-world examples, he empowers
                  students to excel not only in their exams but also in
                  understanding the marvels of the physical world.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper elevation={5}>
              <div className="faculty_item_txt">
                <h2>Rahul Raj - Mathematics Maestro</h2>
                <p>
                  With a passion for teaching and a profound understanding of
                  mathematics, Mr. Rahul Raj brings a wealth of knowledge to our
                  students. With years of experience, he has successfully guided
                  numerous students through the intricacies of mathematical
                  concepts, instilling not only understanding but also a love
                  for the subject. Under his expert guidance, students embark on
                  a journey of problem-solving and critical thinking, preparing
                  them for success in their academic pursuits.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="faculty_item_img">
              <img src={rahulImg} alt="biru" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={5}>
              <div className="faculty_item_txt">
                <h2>Expert Team for Class 9-10 and IIT JEE Preparation</h2>
                <p>
                  At Takshilla Classes, we understand the importance of a strong
                  foundation. Our expert team for class 9-10 provides a
                  nurturing environment for young minds to grasp fundamental
                  concepts in subjects beyond mathematics and physics.
                  Additionally, our specialized IIT JEE preparation team is
                  committed to honing the skills of aspiring engineers. With a
                  comprehensive approach and personalized attention, our team
                  ensures that each student is well-equipped for the challenges
                  that lie ahead. Join Takshilla Classes and experience the
                  guidance of our exceptional faculty and expert teams,
                  propelling you toward academic excellence and a bright future.
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Faculty;
