import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Course.css";
import balVidyalay from "../../assets/images/balgurukul.jpg";
import yuva from "../../assets/images/yuva.jpg";
import lakshya from "../../assets/images/lakshya.jpg";
import styled from "@emotion/styled";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BalVidyalay = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="course_card">
      <CardHeader
        title="Bal Vidyalay"
        subheader="Two-Year Foundation Program (TYFP) for Class 9th"
      />
      <CardMedia
        component="img"
        image={balVidyalay}
        alt="balVidyalay"
        height={200}
      />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td>Eligibility : </td>
              <td>IX Studying</td>
            </tr>
            <tr>
              <td>Duration : </td>
              <td>Two Academic Sessions</td>
            </tr>
            <tr>
              <td>Schedule : </td>
              <td>4 days a week, 3 hours each day</td>
            </tr>
            <tr>
              <td>Scholarship: </td>
              <td>Merit-Based Scholarships Available</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Enroll</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>Description</h3>
          <h5>
            Lay a strong foundation for success with our Two-Year Foundation
            Program designed for students in Class 9. Commencing after the VIII
            Class Annual Exam, this comprehensive program integrates the school
            syllabus with Olympiad exam preparation. Students undergo a
            well-structured curriculum covering Maths and Physics. With a
            schedule of 4 days a week, 3 hours each day, our experienced faculty
            ensures personalized attention. Avail yourself of up to 100%
            scholarship based on merit. Join us on a transformative learning
            journey for two academic sessions.
          </h5>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const YuvaVidyapeeth = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="course_card">
      <CardHeader
        title="Yuva Vidyapeeth"
        subheader="Competitive Edge Program (CEP) for Class 10+"
      />
      <CardMedia component="img" image={yuva} alt="yuva" height={200} />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td>Eligibility : </td>
              <td>Passed Class 10 and preparing for Mains and IIT JEE</td>
            </tr>
            <tr>
              <td>Duration : </td>
              <td>Two Academic Sessions</td>
            </tr>
            <tr>
              <td>Schedule : </td>
              <td>5 days a week, 3 hours each day</td>
            </tr>
            <tr>
              <td>Scholarship: </td>
              <td>Merit-Based Scholarships Available</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Enroll</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>Description</h3>
          <h5>
            Prepare for Mains and IIT JEE with our Competitive Edge Program
            designed for students who have completed Class 10. Commencing
            post-Class 10 Board Exams, this customizable program offers
            flexibility in scheduling. Tailored for competitive exams, the
            curriculum covers essential subjects. Merit-based scholarships are
            available, and the course duration is adaptable to individual goals.
            Position yourself for success in Mains and IIT JEE with a
            personalized learning experience. Contact us for customized course
            fees.
          </h5>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const LakshyaKaksha = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="course_card">
      <CardHeader
        title="Lakshya Kaksha"
        subheader="Advanced One-Year Program (AYP) for Class 11th"
      />
      <CardMedia component="img" image={lakshya} alt="lakshya" height={200} />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td>Eligibility : </td>
              <td>XI Studying</td>
            </tr>
            <tr>
              <td>Duration : </td>
              <td>One Academic Session</td>
            </tr>
            <tr>
              <td>Schedule : </td>
              <td>6 days a week, 3 hours each day</td>
            </tr>
            <tr>
              <td>Scholarship: </td>
              <td>Merit-Based Scholarships Available</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Enroll</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>Description</h3>
          <h5>
            Elevate your academic journey with our Advanced One-Year Program for
            Class 11 students. Starting after the Class 10 Board Exams, this
            program focuses on Advanced Maths and Physics. The integrated
            schedule of 6 days a week, 3 hours each day, ensures a thorough
            understanding of advanced subjects. Merit-based scholarships are
            available for deserving candidates. Prepare for your engineering
            aspirations with an intensive one-year session.
          </h5>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Course = () => {
  return (
    <div className="course_root">
      <div className="course_parallax">
        <Typography variant="h1">Our Courses</Typography>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <BalVidyalay />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <YuvaVidyapeeth />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <LakshyaKaksha />
        </Grid>
      </Grid>
    </div>
  );
};

export default Course;
