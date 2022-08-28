import React from 'react'
import TextField from '@mui/material/TextField';
export default function NumericInput(props) {
  return (
    <>
        <TextField
          id="outlined-basic"
          name={props.name}
          label={props.label}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          variant={props.variant == null ? 'outlined' : props.variant}
          value={props.value}
          helperText={props.helperText}
          onChange={props.handleChange}
        />
    </>
  )
}
