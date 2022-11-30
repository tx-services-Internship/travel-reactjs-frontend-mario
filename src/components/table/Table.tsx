import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

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
    setItems(JSON.parse(localStorage.getItem("formData") || ""));
  }, []);

  console.log("IZ local: ", items);
  return (
    <TableContainer component={Paper} style={{ width: "90%" }}>
      <Table aria-label="a dense table" size="medium" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>
              Name and Surname
            </TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Passport No.</TableCell>
            <TableCell>ID No.</TableCell>
            <TableCell>Departure date</TableCell>
            <TableCell>Departure time</TableCell>
            <TableCell>Business trip end date</TableCell>
            <TableCell>Business trip end time</TableCell>
            <TableCell>Arrival date</TableCell>
            <TableCell>Country and place</TableCell>
            <TableCell>Type of Accomodation</TableCell>
            <TableCell>Breakfast</TableCell>
            <TableCell>Lunch</TableCell>
            <TableCell>Dinner</TableCell>
            <TableCell>Type of transport</TableCell>
            <TableCell>Vehicle registration number</TableCell>
            <TableCell>Purpose of travel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>{items?.nameAndSurname}</TableCell>
            <TableCell>{items?.department}</TableCell>
            <TableCell>{items?.passport}</TableCell>
            <TableCell>{items?.idNo}</TableCell>
            <TableCell>{items?.departureDate}</TableCell>
            <TableCell>{items?.departureTime}</TableCell>
            <TableCell>{items?.tripEndDate}</TableCell>
            <TableCell>{items?.tripEndTime}</TableCell>
            <TableCell>{items?.arrivalDate}</TableCell>
            <TableCell>{items?.countryAndPlace}</TableCell>
            <TableCell>{items?.accomodation}</TableCell>
            <TableCell>{items?.breakfast}</TableCell>
            <TableCell>{items?.lunch}</TableCell>
            <TableCell>{items?.dinner}</TableCell>
            <TableCell>{items?.transport}</TableCell>
            <TableCell>{items?.regNum}</TableCell>
            <TableCell>{items?.purposeTravel}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
