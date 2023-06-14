import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  field:{
    marginTop: 20,
    marginBottom: 20,
    display:'block'
  }
})

export default function Create() {
  const classes= useStyles()
  const history = useNavigate()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')
  const handleSubmit=(e)=>{
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if(title==''){
      setTitleError(true)
    }
    if(details==''){
      setDetailsError(true)
    }
    if(title && details){
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history('/'))
    }else{
      alert('Please fill mandatory fields')
    }
  }
  return (
    <Container style={{padding:"0 300px"}}>
      <Box sx={{ p: 1 , textAlign:'center'}}>
        <Typography
          variant='h6'
          color="textSecondary"
          component="h2"
          style={{color:'#65C18C', fontSize:30}}
          gutterBottom
        >
          Create a new Note
        </Typography>
      </Box>
      
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box sx={{ p: 1 }}>
          <TextField
            onChange={(e)=>{ setTitle(e.target.value)}}
            className={classes.field}
            label="Note Title"
            variant='outlined'
            fullWidth
            required
            error={titleError}
          > 
          </TextField>
        </Box> 
        <Box sx={{ p: 1 }}>
          <TextField
            onChange={(e)=>{ setDetails(e.target.value)}}
            className={classes.field}
            label="Details"
            variant='outlined'
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          >  
          </TextField>
        </Box>
        
        <FormControl sx={{ p: 1 }}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <FormControlLabel value="money" control={<Radio/>} label="Money"/>
          <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
          <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
          <FormControlLabel value="work" control={<Radio/>} label="Work"/>
        </RadioGroup>
        </FormControl>
        <Box sx={{ p: 2 }}>
        <Button
          
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>
      </Box>
        
      </form>

      
    </Container>
  )
}
