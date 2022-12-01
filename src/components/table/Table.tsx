import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import "./Table.css";

type Items = {
  nameAndSurname: string;
  department: string;
  passport: string;
  idNo: number;
  departureDate: string;
  departureTime: string;
  tripEndDate: string;
  tripEndTime: string;
  arrivalDate: string;
  countryAndPlace: string;
  accomodation: string;
  breakfast: number;
  lunch: number;
  dinner: number;
  transport: string;
  regNum: string;
  purposeTravel: string;
};
const TableComponent = () => {
  const [items, setItems] = useState<Items>();

  useEffect(() => {
    if (localStorage.getItem("formData"))
      setItems(JSON.parse(localStorage.getItem("formData") || ""));
  }, []);

  console.log("IZ local: ", items);
  return (
    <div>
      <div
        className="background"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <Typography className="blackColor" variant="h5">
            Personal data:
          </Typography>
        </div>
        <div>
          <Typography className="blackColor">Name and surname:</Typography>
          <TextField variant="standard" value={items?.nameAndSurname} />
        </div>
        <div>
          <Typography className="blackColor">Department:</Typography>
          <TextField variant="standard" value={items?.department} />
        </div>
        <div>
          <Typography className="blackColor">Passport NO:</Typography>
          <TextField variant="standard" value={items?.passport} />
        </div>
        <div>
          <Typography className="blackColor">ID NO:</Typography>
          <TextField variant="standard" value={items?.idNo} />
        </div>
      </div>

      <div
        className="background"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <Typography className="blackColor" variant="h5">
            Travel info:
          </Typography>
        </div>
        <div>
          <Typography className="blackColor">Departure date:</Typography>
          <TextField variant="standard" value={items?.departureDate} />
        </div>
        <div>
          <Typography className="blackColor">Departure time:</Typography>
          <TextField variant="standard" value={items?.departureTime} />
        </div>
        <div>
          <Typography className="blackColor">
            Business trip end date:
          </Typography>
          <TextField variant="standard" value={items?.tripEndDate} />
        </div>
        <div>
          <Typography className="blackColor">
            Business trip end time:
          </Typography>
          <TextField variant="standard" value={items?.tripEndTime} />
        </div>
        <div>
          <Typography className="blackColor">Arrival date:</Typography>
          <TextField variant="standard" value={items?.arrivalDate} />
        </div>
        <div>
          <Typography className="blackColor">Country and place:</Typography>
          <TextField variant="standard" value={items?.countryAndPlace} />
        </div>
        <div>
          <Typography className="blackColor">Type of accomodation:</Typography>
          <TextField variant="standard" value={items?.accomodation} />
        </div>
      </div>

      <div
        className="background"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <Typography className="blackColor" variant="h5">
            Number of meals provided during business trip:
          </Typography>
        </div>
        <div>
          <Typography className="blackColor">Breakfast:</Typography>
          <TextField variant="standard" value={items?.breakfast} />
        </div>
        <div>
          <Typography className="blackColor">Lunch:</Typography>
          <TextField variant="standard" value={items?.lunch} />
        </div>
        <div>
          <Typography className="blackColor">Dinner:</Typography>
          <TextField variant="standard" value={items?.dinner} />
        </div>
      </div>

      <div
        className="background"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <Typography className="blackColor" variant="h5">
            Transport details:
          </Typography>
        </div>
        <div>
          <Typography className="blackColor">Type of transport:</Typography>
          <TextField variant="standard" value={items?.transport} />
        </div>
        <div>
          <Typography className="blackColor">Vehicle reg. number:</Typography>
          <TextField variant="standard" value={items?.regNum} />
        </div>
      </div>

      <div
        className="background"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <Typography className="blackColor" variant="h5">
            Purpose of travel:
          </Typography>
        </div>
        <div>
          <TextareaAutosize value={items?.purposeTravel} />
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
