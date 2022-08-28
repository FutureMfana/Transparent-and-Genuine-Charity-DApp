import React from 'react'
import Button from '@mui/material/Button';

export default function ButtonComponent() {
  return (
    <>
        <Button 
            variant="contained"
            onClick={props.handleClick}
            >
                {props.btnText}
        </Button>
    </>
  )
}
