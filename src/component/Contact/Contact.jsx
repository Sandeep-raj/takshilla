import {
  Button,
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import themeObj from "../../assets/theme/theme";

const Contact = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    emailid: "",
    address: "",
    query: "",
  });

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      fullname: "",
      phonenumber: "",
      emailid: "",
      address: "",
      query: "",
    });
  };

  return (
    <div className="contact_root">
      <div className="contact_parallax">
        <Typography
          variant="h1"
          style={{ fontSize: "8vw", color: themeObj.themeColor.light }}
        >
          Contact Us
        </Typography>
      </div>

      <div style={{ width: "90%", margin: "auto", marginTop: "30px" }}>
        <Paper
          elevation={4}
          style={{ backgroundColor: themeObj.themeColor.xlight }}
        >
          <div className="contact_enq_form">
            <Typography
              variant="h3"
              textAlign={"center"}
              style={{ padding: "15px" }}
            >
              Have Queries?
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phonenumber}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    name="emailid"
                    value={formData.emailid}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Student Address"
                    name="adrress"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    multiline
                  />
                </Grid>

                <Grid item xs={12} style={{ marginBottom: 16 }} />

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                  >
                    Send Enquiry
                  </Button>
                </Grid>

                <Grid item xs={12} style={{ marginBottom: 16 }} />
              </Grid>
            </form>
          </div>
        </Paper>
      </div>
      <br />
      <hr />

      <div className="contact_center">
        <h1>Our Centers</h1>
        {/* Add Material UI Vertical Tabs to arrange map and adress of 3 centers */}
        <Tabs
          variant="scrollable"
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          aria-label="Vertical tabs example"
          // className="vertical-tabs"
        >
          <Tab
            style={{ color: themeObj.themeColor.xdark, fontWeight: "bolder" }}
            label="Sampatchak"
          />
        </Tabs>
        {/* Content for each tab */}
        {selectedTab === 0 && (
          <div className="contact_center_detail">
            {/* Add map and address for Center 1 */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3599.595699917331!2d85.17823117539344!3d25.5518408774844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDMzJzA2LjYiTiA4NcKwMTAnNTAuOSJF!5e0!3m2!1sen!2sin!4v1709773795855!5m2!1sen!2sin"
                  style={{ border: "0px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper
                  elevation={5}
                  style={{
                    padding: "10px",
                    backgroundColor: themeObj.themeColor.xlight,
                  }}
                >
                  <h1>
                    <LocationOnIcon /> Address
                  </h1>
                  <div border="1px">
                    <h3>Takshilla Classes</h3>
                    <p>Abdullah Chak, Near Satyam School</p>
                    <p>Post - Bairya, P.S - Goapalpur</p>
                    <p>Patna, Bihar 800007</p>
                    <p>Contact Number - +91-9905910453</p>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        )}

        {/* {selectedTab === 1 && (
          <div className="contact_center_detail">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.091861592869!2d85.11245207497487!3d25.60186357745262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59c23a5435ef%3A0x9fef2cc5284754ea!2sGoalghar!5e0!3m2!1sen!2sin!4v1702844729885!5m2!1sen!2sin"
                  style={{ border: "0px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <h1>
                  <LocationOnIcon /> Address
                </h1>
                <h3>Takshilla Classes</h3>
                <p>Eco Pk 1, Rajbansi Nagar</p>
                <p>Patna, Bihar 800015</p>
                <p>Contact Number - +91-8220570199</p>
              </Grid>
            </Grid>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Contact;
