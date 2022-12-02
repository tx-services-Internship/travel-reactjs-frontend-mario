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
    <div
    style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1em", marginBottom: "2em", width: "80%" }}
    >
      <div
        className="backgroundFF responsiveFF"
        style={{ display: "flex", flexDirection: "column", marginTop: "3%" }}
      >
        <div>
          <Typography className="blackColorFF" variant="h5"
          style={{ marginTop: "0em", marginBottom: "0.35em" }}                    
          >
            Personal data:
          </Typography>
        </div>
        <div>
          <Typography className="blackColorFF">Name and surname:</Typography>
          <TextField variant="standard" value={items?.nameAndSurname} />
        </div>
        <div>
          <Typography className="blackColorFF">Department:</Typography>
          <TextField variant="standard" value={items?.department} />
        </div>
        <div>
          <Typography className="blackColorFF">Passport NO:</Typography>
          <TextField variant="standard" value={items?.passport} />
        </div>
        <div>
          <Typography className="blackColorFF">ID NO:</Typography>
          <TextField variant="standard" value={items?.idNo} />
        </div>
      </div>

      <div
        className="backgroundFF responsiveFF"
        style={{ display: "flex", flexDirection: "column", marginTop: "3%" }}
      >
        <div>
          <Typography className="blackColorFF" variant="h5"
          style={{ marginTop: "0em", marginBottom: "0.35em" }}          
          >
            Travel info:
          </Typography>
        </div>
        <div>
          <Typography className="blackColorFF">Departure date:</Typography>
          <TextField variant="standard" value={items?.departureDate} />
        </div>
        <div>
          <Typography className="blackColorFF">Departure time:</Typography>
          <TextField variant="standard" value={items?.departureTime} />
        </div>
        <div>
          <Typography className="blackColorFF">
            Business trip end date:
          </Typography>
          <TextField variant="standard" value={items?.tripEndDate} />
        </div>
        <div>
          <Typography className="blackColorFF">
            Business trip end time:
          </Typography>
          <TextField variant="standard" value={items?.tripEndTime} />
        </div>
        <div>
          <Typography className="blackColorFF">Arrival date:</Typography>
          <TextField variant="standard" value={items?.arrivalDate} />
        </div>
        <div>
          <Typography className="blackColorFF">Country and place:</Typography>
          <TextField variant="standard" value={items?.countryAndPlace} />
        </div>
        <div>
          <Typography className="blackColorFF">Type of accomodation:</Typography>
          <TextField variant="standard" value={items?.accomodation} />
        </div>
      </div>

      <div
        className="backgroundFF responsiveFF"
        style={{ display: "flex", flexDirection: "column", marginTop: "3%" }}
      >
        <div>
          <Typography className="blackColorFF" variant="h5"
          style={{ marginTop: "0em", marginBottom: "0.35em"}}          
          >
            Number of meals:
          </Typography>
        </div>
        <div>
          <Typography className="blackColorFF">Breakfast:</Typography>
          <TextField variant="standard" value={items?.breakfast} />
        </div>
        <div>
          <Typography className="blackColorFF">Lunch:</Typography>
          <TextField variant="standard" value={items?.lunch} />
        </div>
        <div>
          <Typography className="blackColorFF">Dinner:</Typography>
          <TextField variant="standard" value={items?.dinner} />
        </div>
      </div>

      <div
        className="backgroundFF responsiveFF"
        style={{ display: "flex", flexDirection: "column", marginTop: "3%" }}
      >
        <div>
          <Typography className="blackColorFF" variant="h5"
          style={{ marginTop: "0em", marginBottom: "0.35em" }}          
          >
            Transport details:
          </Typography>
        </div>
        <div>
          <Typography className="blackColorFF">Type of transport:</Typography>
          <TextField variant="standard" value={items?.transport} />
        </div>
        <div>
          <Typography className="blackColorFF">Vehicle reg. number:</Typography>
          <TextField variant="standard" value={items?.regNum} />
        </div>
      </div>

      <div
        className="backgroundFF responsiveFF"
        style={{ display: "flex", flexDirection: "column", marginTop: "3%", marginBottom: "3%" }}
      >
        <div>
          <Typography className="blackColorFF" variant="h5"
          style={{ marginTop: "0em", marginBottom: "0.35em" }}          
          >
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
