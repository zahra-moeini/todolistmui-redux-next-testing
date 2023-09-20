import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/toDoSlider';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { purple, red } from '@mui/material/colors';



const AddTodo = () => {
   const dispatch = useDispatch();
   const [ state, setState ] = useState({
       content: '',
       contentError: null
   });

   const handleChange = (e) =>{
       setState({...state, [e.target.name]: e.target.value, [`${e.target.name}Error`]: null });
   }

   const add = () =>{
    if(content === ''){
        setState({...state, contentError: 'You must write something!'});
        return;
    }
    
    dispatch(addToDo({newContent: content}));
    setState({...state, content: ''});
   }
   const { content, contentError } = state;
  return <div className='form'>
        <Box display={ "flex"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          todo list App
        </Typography>
      </Box>
        <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
          </Box>
          <form className="form-group custom-form">
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Add your todo-items" id="fullWidth" type='text' value={content}  name='content'   onChange={handleChange} />
          </Box>
          <Box>
            <Button type='button' variant="outlined" onClick={add}>ADD </Button>
            {contentError ? <div >{contentError}</div>: null}

          </Box>
        </Stack>
      </form>
    
  </div>;
};

export default AddTodo;
