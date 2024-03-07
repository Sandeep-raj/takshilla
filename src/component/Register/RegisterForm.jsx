import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studyCenter: "",
    course: "",
    fullName: "",
    fatherName: "",
    email: "",
    std_phone: "",
    fath_phone: "",
    gender: "",
    category: "",
    address: "",
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
      studyCenter: "",
      course: "",
      fullName: "",
      fatherName: "",
      email: "",
      std_phone: "",
      fath_phone: "",
      gender: "",
      category: "",
      address: "",
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={5} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" component="div" align="center">
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="studyCenterLabel">Study Center</InputLabel>
                <Select
                  labelId="studyCenterLabel"
                  label="StudyCenter"
                  name="studyCenter"
                  value={formData.studyCenter}
                  onChange={handleInputChange}
                  fullWidth
                >
                  <MenuItem value={"sipara"}>Sampatchak</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="courseLabel">Course</InputLabel>
                <Select
                  labelId="courseLabel"
                  label="Course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  fullWidth
                >
                  <MenuItem value={"Bal"}>
                    Bal Vidyalay - for Class 9th/10th
                  </MenuItem>
                  <MenuItem value={"Yuva"}>
                    Yuva Kaksha - for Class 11th/12th
                  </MenuItem>
                  <MenuItem value={"Lakshya"}>
                    Lakshya Vidyapeeth - for Class 12th passout
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Father Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Phone Number"
                name="std_phone"
                value={formData.std_phone}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Father Phone Number"
                name="fath_phone"
                value={formData.fath_phone}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="genderLabel">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="genderLabel"
                  defaultValue="male"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="categoryLabel">Category</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="categoryLabel"
                  defaultValue="gen"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="gen"
                    control={<Radio />}
                    label="GEN"
                  />
                  <FormControlLabel value="sc" control={<Radio />} label="SC" />
                  <FormControlLabel value="st" control={<Radio />} label="ST" />
                  <FormControlLabel
                    value="obc"
                    control={<Radio />}
                    label="OBC"
                  />
                  <FormControlLabel
                    value="ews"
                    control={<Radio />}
                    label="EWS"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Address"
                name="address"
                multiline
                rows={4}
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Add spacing between form controls */}
            <Grid item xs={12} style={{ marginBottom: 16 }} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              Register
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
