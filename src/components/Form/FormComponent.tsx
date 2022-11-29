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
import Button from "../ButtonComponent/ButtonComponent";
import "./FormComponent.css";

const FormComponent = () => {
  const [data, setData] = useState({
    nameAndSurname: "",
    department: "",
    passportNo: "",
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
    regNumber: "",
    travelPurpose: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setData({
      ...data,
      nameAndSurname: e.target.value,
      department: e.target.value,
      passportNo: e.target.value,
      idNo: e.target.value,
    });
  };

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  
  console.log(data.nameAndSurname, data.department, data.passportNo, data.idNo);
  return (
      <form onSubmit={handleSubmit}>
        <Grid container style={{ marginLeft: "10%", marginRight: "10%", width: "80%" }}>
          <Grid
            className="form-group responsive"
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            container
            style={{ marginBottom: "2em", marginTop: "1em" }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="blackColor" variant="h5" style={{ marginTop: "0%", marginBottom: "0%" }}>
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
                value={data.nameAndSurname}
                onChange={(e) => handleChange(e)}
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
                value={data.department}
                onChange={(e) => handleChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className="whiteColor responsive"
                required
                type="number"
                variant="outlined"
                label="Passport No. / Broj pasosa"
                name="passportNo"
                style={{ width: "50%", marginLeft: "10em" }}
                value={data.passportNo}
                onChange={(e) => handleChange(e)}
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
                value={data.idNo}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>

          <Grid
            className="form-group responsive"
            spacing={2}
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            style={{ marginBottom: "2em" }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="h5"
                className="blackColor whiteBold responsive"
                style={{ marginTop: "0%", marginBottom: "0%" }}
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
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControl
                className="whiteColor responsive"
                style={{ width: "60%" }}
              >
                <InputLabel>Type of Accomodation / Vrsta smestaja:</InputLabel>
                <Select>
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
            style={{ marginBottom: "2em" }}
          >
            <Grid
              className="form-groupresponsive"
              item
              xs={12}
              sm={12}
              md={12}
              style={{ marginTop: "2em", marginBottom: "2em" }}
            >
              <Typography variant="h5" className="blackColor" style={{ marginTop: "0%", marginBottom: "0%" }}>
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
                <Select>
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
                <Select>
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
                <Select>
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
            style={{ marginBottom: "2em" }}
          >
            <Grid className="responsive" item xs={12} sm={12} md={12}>
              <Typography className="blackColor" variant="h5" style={{ marginTop: "0%", marginBottom: "0%" }}>
                Transport details:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl
                className="whiteColor responsive"
                style={{ width: "50%", marginLeft: "10em" }}
              >
                <InputLabel>Type of transport / Nacin transporta:</InputLabel>
                <Select>
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
              />
            </Grid>
          </Grid>

          <Grid
            className="form-group responsive"
            container
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            style={{ marginBottom: "2em" }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <InputLabel className="blackColor" style={{ fontSize: "1em" }}>
                Purpose of Travel / Namena sluzbenog putovanja:
              </InputLabel>
              <TextareaAutosize
                minRows={5}
                placeholder="Purpose of travel"
                style={{ width: "35em" }}
                className="responsive"
              />
            </Grid>
          </Grid>
        </Grid>
        <Button variant="formScreen" onClick={() => console.log("clicked")}>Submit</Button>
      </form>
  );
};

export default FormComponent;
