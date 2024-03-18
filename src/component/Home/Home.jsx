import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import rahul from "../../assets/images/rahul.jpg";
import biru from "../../assets/images/biru.jpg";
import expert from "../../assets/images/expert.jpg";

import junior from "../../assets/images/junior.png";
import foundation from "../../assets/images/foundation.png";
import advance from "../../assets/images/advance.png";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import DocumentScannerTwoToneIcon from "@mui/icons-material/DocumentScannerTwoTone";
import PsychologyTwoToneIcon from "@mui/icons-material/PsychologyTwoTone";

import man from "../../assets/images/man.png";
import registerNow from "../../assets/images/register.png";

import "./Home.css";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import RegistrationForm from "../Register/RegisterForm";

const Home = () => {
  const [modalopen, setModalOpen] = useState(false);
  const [hovertext, setHoverText] = useState("");
  const desktopView = useMediaQuery("(min-width:1200px)");

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  return (
    <>
      {/* First Page */}
      <div
        style={{
          width: "100%",
          height: "90vh",
        }}
      >
        <div className="tak_home_text">
          <h1
            style={{
              fontSize: desktopView ? "8vw" : "15vw",
              paddingTop: desktopView ? "0px" : "50px",
              marginBottom: desktopView ? "10px" : "5px",
            }}
          >
            Admissions Open
          </h1>

          <div
            style={{
              width: "100%",
              marginLeft: "40%",
            }}
          >
            <h3
              style={{
                fontSize: desktopView ? "2vw" : "15vw",
                width: "fit-content",
                margin: "0px",
                backgroundColor: "yellow",
              }}
            >
              Give a call at +91-9905910453
            </h3>
          </div>

          <div
            style={{
              width: "100%",
              marginLeft: "53%",
            }}
          >
            <span style={{ width: "100px" }}>
              <img
                src={registerNow}
                style={{ maxWidth: "100px" }}
                className="register_now"
              />
            </span>
          </div>
        </div>
        <div className="man_home_img">
          <img
            src={man}
            style={{
              position: "relative",
              width: desktopView ? "50%" : "70%",
              height: "100%",
              left: "18%",
            }}
          ></img>
        </div>
      </div>
      {/* Programs */}
      <div
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "20px",
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <Typography variant={desktopView ? "h4" : "h3"}>
            Our Courses
          </Typography>
          <Typography
            variant={desktopView ? "h5" : "h5"}
            marginTop={5}
            marginBottom={5}
          >
            Experience a nurturing learning environment at Takshilla Classes,
            where excellence meets comfort. Our state-of-the-art facilities and
            dedicated faculty create the perfect atmosphere for focused studies,
            ensuring each student receives the support needed to thrive
            academically and excel in their pursuit of knowledge.
          </Typography>
        </div>

        <div className="home_prog_root">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={5} className="parent-container">
                {/* Parent div with background image and 50% opacity */}
                <div
                  className="background-overlay"
                  style={{ backgroundImage: `url(${junior})` }}
                ></div>

                {/* Child div with 100% opacity */}
                <div className="child-container">
                  Bal Vidyalay
                  <br /> Two-Year Foundation Program (TYFP) for Class 9th
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={5} className="parent-container">
                {/* Parent div with background image and 50% opacity */}
                <div
                  className="background-overlay"
                  style={{ backgroundImage: `url(${foundation})` }}
                ></div>

                {/* Child div with 100% opacity */}
                <div className="child-container">
                  Yuva Vidyapeeth
                  <br /> Competitive Edge Program (CEP) for Class 10+
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={5} className="parent-container">
                {/* Parent div with background image and 50% opacity */}
                <div
                  className="background-overlay"
                  style={{ backgroundImage: `url(${advance})` }}
                ></div>

                {/* Child div with 100% opacity */}
                <div className="child-container">
                  Lakshya Kaksha
                  <br /> Advanced One-Year Program (AYP) for Class 11th
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <button
          className="home_prog_btn"
          onClick={() => {
            navigate({
              pathname: "course",
            });
          }}
        >
          EXPLORE MORE
        </button>
      </div>

      {/* Our Faculty */}
      <div style={{ width: "100%", position: "relative", paddingTop: "20px" }}>
        <div className="home_faculty_root">
          <Typography variant={desktopView ? "h4" : "h3"}>
            Meet Our Faculty
          </Typography>
          <Grid container spacing={5} alignItems={"center"}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="home_faculty_img"
                  style={{ backgroundImage: `url(${biru})` }}
                ></div>
                <div className="home_faculty_name">Biru Sir</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div
                className="home_faculty_img"
                style={{ backgroundImage: `url(${rahul})` }}
              ></div>
              <div className="home_faculty_name">Rahul Sir</div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div
                className="home_faculty_img"
                style={{ backgroundImage: `url(${expert})` }}
              ></div>
              <div className="home_faculty_name">And Our Expert Team</div>
            </Grid>
          </Grid>
          <button
            className="home_prog_btn"
            onClick={() => {
              navigate({
                pathname: "faculty",
              });
            }}
          >
            KNOW US MORE
          </button>
        </div>
      </div>

      {/* Admission Process */}
      <div style={{ width: "100%", position: "relative", paddingTop: "20px" }}>
        <div style={{ width: "90%", margin: "auto" }}>
          <Typography variant={desktopView ? "h4" : "h3"}>
            Admission Process at Takshilla Classes
          </Typography>
          <div className="home_proc_root">
            <Grid
              container
              spacing={10}
              alignItems={"center"}
              justify="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Paper>
                  <div
                    className="home_proc_img"
                    onMouseEnter={() => setHoverText("Admission Process")}
                    onMouseOut={() => setHoverText("")}
                  >
                    {hovertext}
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={7}>
                <Paper style={{ width: "100%", height: "100%" }}>
                  <div className="home_proc_list">
                    <List>
                      <ListItem
                        alignItems="flex-start"
                        className="home_proc_listitem"
                      >
                        <ListItemAvatar>
                          <Avatar
                            style={{
                              width: "60px",
                              height: "60px",
                              margin: "5px",
                            }}
                          >
                            <ScreenSearchDesktopTwoToneIcon
                              style={{ width: "45px", height: "45px" }}
                              className="home_proc_listitem_img"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography variant={desktopView ? "h6" : "h4"}>
                                Explore
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography variant="p">
                                Explore our course page to find the perfect fit
                                for your academic journey at Takshilla Classes.
                              </Typography>
                              <Button
                                variant="outlined"
                                className="home_proc_listitem_btn"
                                onClick={() => {
                                  navigate({
                                    pathname: "course",
                                  });
                                }}
                              >
                                Explore Courses
                              </Button>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem
                        alignItems="flex-start"
                        className="home_proc_listitem"
                      >
                        <ListItemAvatar>
                          <Avatar
                            style={{
                              width: "60px",
                              height: "60px",
                              margin: "5px",
                            }}
                          >
                            <SupportAgentTwoToneIcon
                              style={{ width: "45px", height: "45px" }}
                              className="home_proc_listitem_img"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography variant={desktopView ? "h6" : "h4"}>
                                Connect
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography variant={"p"}>
                                Reach out for information on courses, faculty,
                                and facilities via phone or email.
                              </Typography>
                              <Button
                                variant="outlined"
                                className="home_proc_listitem_btn"
                                onClick={() => {
                                  navigate({
                                    pathname: "contact",
                                  });
                                }}
                              >
                                Contact
                              </Button>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem
                        alignItems="flex-start"
                        className="home_proc_listitem"
                      >
                        <ListItemAvatar>
                          <Avatar
                            style={{
                              width: "60px",
                              height: "60px",
                              margin: "5px",
                            }}
                          >
                            <DocumentScannerTwoToneIcon
                              style={{ width: "45px", height: "45px" }}
                              className="home_proc_listitem_img"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography variant={desktopView ? "h6" : "h4"}>
                                Register
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography variant={"p"}>
                                Complete a simple registration form, and our
                                team will assist you through the process.
                              </Typography>
                              <Button
                                variant="outlined"
                                className="home_proc_listitem_btn"
                                onClick={handleModalOpen}
                              >
                                Register
                              </Button>
                              <Dialog
                                open={modalopen}
                                onClose={handleModalClose}
                              >
                                <DialogContent className="register_modal">
                                  <RegistrationForm />
                                </DialogContent>
                              </Dialog>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem
                        alignItems="flex-start"
                        className="home_proc_listitem"
                      >
                        <ListItemAvatar>
                          <Avatar
                            style={{
                              width: "60px",
                              height: "60px",
                              margin: "5px",
                            }}
                          >
                            <PsychologyTwoToneIcon
                              style={{ width: "45px", height: "45px" }}
                              className="home_proc_listitem_img"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography variant={desktopView ? "h6" : "h4"}>
                                Scholarship Exam
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography variant={"p"}>
                                Register for our scholarship exam to showcase
                                your potential and{" "}
                                <span className="home_proc_listitem_span">
                                  avail scholarship upto 100%
                                </span>
                                .
                              </Typography>
                              <Button
                                variant="outlined"
                                className="home_proc_listitem_btn"
                                disabled
                              >
                                Check Results
                              </Button>
                            </>
                          }
                        />
                      </ListItem>
                    </List>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
