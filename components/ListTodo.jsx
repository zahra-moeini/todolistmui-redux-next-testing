import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo } from '../Reducers/toDoSlider';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const ListTodo = () => {
  
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [ isEditing, setEditing ] = useState(false); 
  const [ state, setState ] = useState({
    id: '',
    content: '',
    contentError: null
  });

  const onEditToggle = ( id, content) => {
      setEditing(true);
      setState({
          ...state, id, content
      })
  }

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value, [`${e.target.name}Error`]: null });
  }

  const { content, contentError, id } = state;

  const edit = () =>{
    if(content === ''){
        setState({...state, contentError: 'You must write something!'});
        return;
    }
    dispatch((editTodo({content, id})));
    setEditing(false);
 }
  
  return <Box display={'flex'} justifyContent={'center'}>
      {
       
          isEditing ?
            <div>
                <h2>Update your plan for today</h2>
                <Box
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          >
                <TextField fullWidth label="Add your todo-items" id="fullWidth" type='text' value={content} name='content' onChange={handleChange}/>
                </Box>
                <Box>
                <Button type='button'variant="outlined" onClick={edit}>Edit</Button>
                {contentError ? <span>{contentError}</span>: null}
                </Box>
            </div>
      :
      <ul className='todos' style={{listStyle:'none'}}>
          {
            todoList.map(({id, content})=> {
                return <li  key={id} >
                  <Card style={{margin:5,padding:24 ,display:'flex',justifyContent:'space-between',
                  background:'#eceff1'}}>
                    <span >{content}</span>
                    <span>
                      <DeleteIcon color='error' onClick={() => dispatch(deleteToDo({id}))}/>
                      <EditIcon  color='info' className="edit" onClick={() =>onEditToggle(id, content)} />
                    </span>
                   </Card>
                </li>
            }) 
          }
      </ul>}
     
  </Box>;
};

export default ListTodo;
