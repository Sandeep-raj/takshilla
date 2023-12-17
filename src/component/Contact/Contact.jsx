import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import "./Contact.css";
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const Contact = () => {
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
        <Typography variant="h1">Contact Us</Typography>
      </div>
      <div style={{ width: "90%", margin: "auto", marginTop: "30px" }}>
        <Paper elevation={4}>
          <div className="contact_enq_form">
            <Typography
              variant="h3"
              textAlign={"center"}
              style={{ padding: "5px" }}
            >
              Pen Your Questions
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
              </Grid>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
