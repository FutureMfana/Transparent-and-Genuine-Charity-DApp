import React from 'react'
import TextField from '@mui/material/TextField';

export default function TextInput(props) {
  return (
    <>
        <TextField
          id="outlined-basic"
          name={props.name}
          label={props.label}
          variant={props.variant == null ? 'outlined' : props.variant}
          value={props.value}
          helperText={props.helperText}
          onChange={props.handleChange}
        />
    </>
  )
}
