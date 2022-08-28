import React from 'react'
import TextField from '@mui/material/TextField';
export default function MultiTextInput(props) {
  return (
    <TextField
        id="outlined-basic"
        multiline
        maxRows={props.maxRows}
        name={props.name}
        label={props.label}
        variant={props.variant == null ? 'outlined' : props.variant}
        value={props.value}
        helperText={props.helperText}
        onChange={props.handleChange}
        />
  )
}
