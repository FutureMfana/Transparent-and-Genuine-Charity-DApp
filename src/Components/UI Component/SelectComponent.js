import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function SelectComponent(props) {
  return (
    <>
        <TextField
          id="outlined-select-currency"
          select
          value={props.value}
          label={props.label}
          onChange={props.handleChange}
          helperText={props.helperText}
        >
          {props.items.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </>
  )
}
