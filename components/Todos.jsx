import { useState } from "react"
import AddTodo from '../components/AddTodo'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Todos = () => {
  return (
    <>
      <Box display={ "flex"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          todo list salmmmmmm
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
            <TextField fullWidth label="Add todos" id="fullWidth" />
          </Box>
          <Box>
            <Button variant="outlined">ADD </Button>
          </Box>
        </Stack>
      </form>
    </>
  )
}

export default Todos

