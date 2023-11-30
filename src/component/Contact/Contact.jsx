import { Container, Grid, TextField, Typography } from "@mui/material";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  // State variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnno, setPhnno] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here (e.g., send it to a server)
    console.log({ name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="contact_parallax">
        <Typography variant="h1">Contact Us</Typography>
      </div>
      <Grid container className="contact_container">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="light_grid">
            <Typography variant="h1" className="dark_text">
              We're Here
            </Typography>
            <Typography variant="h4" className="dark_text">
              Our door is always open for a cup of coffee
            </Typography>

            <div style={{ flexGrow: 0.9 }}></div>

            <Typography variant="h2" className="dark_text">
              Our Office
            </Typography>
            <Typography variant="h6" className="dark_text">
              Opp.-Govt. Girls High school, <br></br> Ashok Rajpath Rd,{" "}
              <br></br> Patna, Bihar 800001
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="dark_grid">
            <Typography variant="h1" className="light_text">
              Let's Talk
            </Typography>
            <Typography variant="h4" className="light_text">
              Share your experience with us.
            </Typography>

            <div style={{ height: "30vh" }}></div>

            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                className="light_text"
                gutterBottom
              >
                Enquiry Form
              </Typography>
              <form onSubmit={handleSubmit}>
                {/* Name input */}
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  value={name}
                  className="enq_input"
                  onChange={(e) => setName(e.target.value)}
                />
                {/* Email input */}
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={email}
                  className="enq_input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Email input */}
                <TextField
                  label="Phone No."
                  fullWidth
                  margin="normal"
                  value={phnno}
                  className="enq_input"
                  onChange={(e) => setPhnno(e.target.value)}
                />
                {/* Message input */}
                <TextField
                  label="Message"
                  multiline
                  fullWidth
                  margin="normal"
                  value={message}
                  className="enq_input"
                  onChange={(e) => setMessage(e.target.value)}
                />
                {/* Submit button */}
                <button className="submitbtn">Submit</button>
              </form>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.535800089688!2d85.13687307488055!3d25.620336977440896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58504978e8f3%3A0x18cd15ae7d0e6cd!2sGolghar!5e0!3m2!1sen!2sin!4v1700314196477!5m2!1sen!2sin"
            className="maps"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
