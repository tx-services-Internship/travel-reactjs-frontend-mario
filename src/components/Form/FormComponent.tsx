import React from "react";
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
import Button from "../Button/Button";
import "./FormComponent.css";

interface Props {
  children?: React.ReactNode;
}

const FormComponent: React.FC<Props> = ({ children }) => {
  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="Form">
      <form>
        <Grid container style={{ marginLeft: "10%", width: "80%" }}>
          <Grid
            className="form-group responsive"
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            container
            style={{ marginBottom: "30px" }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="blackColor" variant="h5">
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
                style={{ width: "50%", marginLeft: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className="whiteColor responsive"
                required
                type="text"
                variant="outlined"
                label="Department / Odeljenje"
                style={{ width: "50%", marginRight: "200px" }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className="whiteColor responsive"
                required
                type="number"
                variant="outlined"
                label="Passport No. / Broj pasosa"
                style={{ width: "50%", marginLeft: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className="whiteColor responsive"
                required
                type="text"
                variant="outlined"
                label="ID No. / Broj licne karte"
                style={{ width: "50%", marginRight: "200px" }}
              />
            </Grid>
          </Grid>

          <Grid
            className="form-group responsive"
            spacing={2}
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="h5"
                className="blackColor whiteBold responsive"
                style={{ marginTop: "10px", marginBottom: "10px" }}
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
                style={{ width: "50%", marginLeft: "200px" }}
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
                style={{ width: "50%", marginRight: "200px" }}
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
                style={{ width: "50%", marginLeft: "200px" }}
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
                style={{ width: "50%", marginRight: "200px" }}
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
                style={{ width: "50%", marginLeft: "200px" }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                className="whiteColor responsive"
                required
                type="text"
                variant="outlined"
                label="Country and place / Zemlja i mesto:"
                style={{ width: "50%", marginRight: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControl
                className="whiteColor responsive"
                style={{ width: "60%" }}
              >
                <InputLabel>Type of Accomodation / Vrsta smestaja:</InputLabel>
                <Select>
                  <MenuItem value={1}>Hotel</MenuItem>
                  <MenuItem value={2}>Private Accomodation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            className="form-group responsive"
            container
            spacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid
              className="responsive"
              item
              xs={12}
              sm={12}
              md={12}
              style={{ marginTop: "2%", marginBottom: "2%" }}
            >
              <Typography variant="h5" className="blackColor">
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
            spacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid className="responsive" item xs={12} sm={12} md={12}>
              <Typography className="blackColor" variant="h5">
                Transport details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl
                className="whiteColor responsive"
                style={{ width: "50%", marginLeft: "200px" }}
              >
                <InputLabel>Type of transport / Nacin transporta:</InputLabel>
                <Select>
                  <MenuItem value={1}>Airplane</MenuItem>
                  <MenuItem value={2}>Car</MenuItem>
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
                style={{ width: "50%", marginRight: "200px" }}
              />
            </Grid>
          </Grid>

          <Grid
            className="form-group responsive"
            container
            spacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={12} sm={12} md={12} direction="row">
              <InputLabel className="blackColor" style={{ fontSize: "20px" }}>
                Purpose of Travel / Namena sluzbenog putovanja:
              </InputLabel>
              <TextareaAutosize
                minRows={5}
                placeholder="Purpose of travel"
                style={{ width: 800 }}
                className="responsive"
              />
            </Grid>
          </Grid>
        </Grid>
        <Button />
      </form>
    </div>
  );
};

export default FormComponent;
