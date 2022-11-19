
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from "react-redux";
import { filterContact } from "redux/contacts/filterSlice";


export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {

  dispatch(filterContact(e.target.value));
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Search"
          variant="standard" 
          type="text"
          name="filter"
          onChange={handleChange}
          />
      </Box>
    </Box>
  );
}