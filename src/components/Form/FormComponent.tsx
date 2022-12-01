import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextareaAutosize,
} from "@mui/material";
import Button from "../buttonComponent/buttonComponent";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nameAndSurname: "",
    department: "",
    passport: "",
    idNo: "",
    departureDate: "",
    departureTime: "",
    tripEndDate: "",
    tripEndTime: "",
    arrivalDate: "",
    countryAndPlace: "",
    accomodation: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    transport: "",
    regNum: "",
    purposeTravel: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        style={{ marginLeft: "10%", marginRight: "10%", width: "80%" }}
      >
        <Grid
          className="form-group responsive"
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          container
          style={{ marginTop: "3%" }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              className="blackColor"
              variant="h5"
              style={{ marginTop: "0em", marginBottom: "0em" }}
            >
              Personal data:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="text"
              variant="outlined"
              label="Name and surname / Ime i prezime"
              name="nameAndSurname"
              style={{ width: "50%", marginLeft: "10em" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="text"
              variant="outlined"
              label="Department / Odeljenje"
              name="department"
              style={{ width: "50%", marginRight: "10em" }}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="number"
              variant="outlined"
              label="Passport No. / Broj pasosa"
              name="passport"
              style={{ width: "50%", marginLeft: "10em" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="text"
              variant="outlined"
              label="ID No. / Broj licne karte"
              name="idNo"
              style={{ width: "50%", marginRight: "10em" }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid
          className="form-group responsive"
          spacing={2}
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "0em" }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              className="blackColor whiteBold responsive"
              style={{ marginTop: "0em", marginBottom: "0em" }}
            >
              Travel info:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              label="Departure date / Datum polaska:"
              style={{ width: "50%", marginLeft: "10em" }}
              name="departureDate"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="time"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              label="Departure time / Vreme polaska:"
              style={{ width: "50%", marginRight: "10em" }}
              name="departureTime"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              label="Business trip end date / Datum zavrsetka sl. puta:"
              style={{ width: "50%", marginLeft: "10em" }}
              name="tripEndDate"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              InputLabelProps={{ shrink: true }}
              required
              type="time"
              variant="outlined"
              label="Business trip end time / Vreme zavrsetka sl. puta:"
              style={{ width: "50%", marginRight: "10em" }}
              name="tripEndTime"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              label="Arrival date / Datum povratka:"
              style={{ width: "50%", marginLeft: "10em" }}
              name="arrivalDate"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="text"
              variant="outlined"
              label="Country and place / Zemlja i mesto:"
              style={{ width: "50%", marginRight: "10em" }}
              name="countryAndPlace"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl
              className="whiteColor responsive"
              style={{ width: "60%" }}
            >
              <InputLabel>Type of Accomodation / Vrsta smestaja:</InputLabel>
              <Select name="accomodation" onChange={handleChange}>
                <MenuItem value={"Hotel"}>Hotel</MenuItem>
                <MenuItem value={"Private Accomodation"}>
                  Private Accomodation
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          className="form-group responsive"
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "0em" }}
        >
          <Grid className="responsive" item xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              className="blackColor"
              style={{ marginTop: "0em", marginBottom: "0em" }}
            >
              Number of meals provided during business trip / Broj obroka
              obezbedjenih tokom trajanja sluzbenog putovanja:
            </Typography>
          </Grid>
          <Grid item xs={12} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <FormControl
              className="whiteColor responsive"
              style={{ width: "60%" }}
            >
              <InputLabel>Breakfast</InputLabel>
              <Select name="breakfast" onChange={handleChange}>
                {numbers.map((number, index) => (
                  <MenuItem key={index} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <FormControl
              className="whiteColor responsive"
              style={{ width: "60%" }}
            >
              <InputLabel>Lunch</InputLabel>
              <Select name="lunch" onChange={handleChange}>
                {numbers.map((number, index) => (
                  <MenuItem key={index} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl
              className="whiteColor responsive"
              style={{ width: "60%" }}
            >
              <InputLabel>Dinner</InputLabel>
              <Select name="dinner" onChange={handleChange}>
                {numbers.map((number, index) => (
                  <MenuItem key={index} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          className="form-group responsive"
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "0em" }}
        >
          <Grid className="responsive" item xs={12} sm={12} md={12}>
            <Typography
              className="blackColor"
              variant="h5"
              style={{ marginTop: "0em", marginBottom: "0em" }}
            >
              Transport details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl
              className="whiteColor responsive"
              style={{ width: "50%", marginLeft: "10em" }}
            >
              <InputLabel>Type of transport / Nacin transporta:</InputLabel>
              <Select name="transport" onChange={handleChange}>
                <MenuItem value={"Airplane"}>Airplane</MenuItem>
                <MenuItem value={"Car"}>Car</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              className="whiteColor responsive"
              required
              type="text"
              variant="outlined"
              label="Vehicle registration number / Reg. broj vozila:"
              style={{ width: "50%", marginRight: "10em" }}
              name="regNum"
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid
          className="form-group responsive"
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "0em", marginBottom: "1em" }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              className="blackColor"
              style={{ marginTop: "0em", marginBottom: "0.5em" }}
            >
              Purpose of Travel:
            </Typography>
            <TextareaAutosize
              minRows={5}
              placeholder="Purpose of travel"
              style={{
                width: "35em",
                fontFamily: "Source Sans Pro, sans-serif",
              }}
              className="responsive"
              name="purposeTravel"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button variant="formScreen" onClick={() => console.log("clicked")}>
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
