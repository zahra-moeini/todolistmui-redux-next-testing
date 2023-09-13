import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tooltip from '@mui/material/Tooltip';

// import { useDispatch } from 'react-redux';
// import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';
const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  return (
    <>
      <Box display={ "flex"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          todo list
        </Typography>
      </Box>

      <form className="form-group custom-form">
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Add your todo-items" id="fullWidth" />
          </Box>
          <Box>
            <Button variant="outlined">ADD</Button>
          </Box>
        </Stack>
      </form>
    </>
  );
};

export default Form;
