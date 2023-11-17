import React from 'react';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

function Cards({index, todo, deleteHandler, handledit }) {




  return (
    <div style={{ marginLeft: '550px' }}>
      <Paper elevation={5} sx={{ height: '60px', width: '50%', backgroundColor: '#fff', marginBottom:'4px' }} square={false}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {todo}
          </Typography>
          <div>
            <Button variant="contained" onClick={deleteHandler}>
              Delete
            </Button>
            <Button variant="contained" style={{ marginLeft: '20px', marginRight: '20px' }} onClick={() => handledit(todo,index)}>
              Edit
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Cards;


