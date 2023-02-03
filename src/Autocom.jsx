import React from "react";
import "./App.css";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

function Autocom() {
  return (
    <div className="App">
      <h1>AutoComplete Search Box</h1>
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: "auto",
          marginTop: 10,
          backgroundColor: "primary.dark",
        }}
      >
        <Autocomplete
          disablePortal
          id="com-box"
          options={state}
          renderInput={(params) => (
            <TextField {...params} label="List Of State" />
          )}
        />
      </Box>
    </div>
  );
}

export default Autocom;
