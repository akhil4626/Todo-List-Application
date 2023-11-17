
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Cards from './cards';
import FormDialog from './popup';
function Input() {
  const [todotasks, setTodotasks] = useState(['Task1', 'Task2', 'Task3']);
  const [inputFieldData, setInputField] = useState('');
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [editvalue,seteditvalue] = useState({
      todovalue:'',
      index:null
  })

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  const handleAddClick = () => {
   

    if (selectedTodoIndex !== null)  {
      const updatedTasks = [...todotasks];
      updatedTasks[selectedTodoIndex] = inputFieldData;
      setTodotasks(updatedTasks);
      setSelectedTodoIndex(null);
    } else {
      setTodotasks([...todotasks, inputFieldData]);
    }

    setInputField('');
  };



  const handleDeleteClick = (index) => {
    const filtered = todotasks.filter((_, i) => index !== i);
    setTodotasks(filtered);
  };

  const handleedit = (value,i) => {
    setOpen(true)
    console.log(value,i)
    seteditvalue({
      todovalue:value,
      index:i
    })
  }

  const handleupdate = (value, index) => {
    console.log("this is from parent component", value, index);
    const updatedTasks = [...todotasks];
    updatedTasks[index] = value;
  
    setTodotasks(updatedTasks);
  };
  


  return (
    <div>
      <Typography variant="h2" className="underline" gutterBottom style={{ textAlign: 'center' }}>
        TODO LIST
      </Typography>

        <TextField
          id="outlined-basic"
          label="Add Item..."

          type="text"
          onChange={handleInputChange}
          value={inputFieldData}
          variant="outlined"
          style={{ width: '450px',height:'60px', position: 'relative', left: '550px' }}
          error={inputFieldData.length > 20}
          helperText={inputFieldData.length > 20 ? "Incorrect entry. Maximum length is 20 characters." : ""}
        />

      <Button
        variant="contained"
        style={{  position: 'relative', top: '75px', left: '100px', marginBottom: '100px' }}
        onClick={handleAddClick}
        disabled = {inputFieldData.length > 20}
      >
        ADD
      </Button>

      {todotasks.map((todo, index) => (
        <Cards
          key={index}
          index = {index}
          todo={todo}
          deleteHandler={() => handleDeleteClick(index)}
          setOpen = {setOpen}
          handledit = {() => handleedit(todo,index)}
        />
      ))}


      {open && <FormDialog   open={open}   setOpen = {setOpen}   editvalue = {editvalue}  handleupdate = {handleupdate}
      /> }
    </div>
  );
}

export default Input;
