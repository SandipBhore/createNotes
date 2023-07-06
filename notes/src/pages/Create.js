import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import './Create.scss';
import Navbar from './navbar';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("notes") !== null) {
      var retrievedObject = JSON.parse(localStorage.getItem('notes'));
      setNotes(retrievedObject)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      const newNote = {
        "title": title,
        "details": details,
        "category": category
      }
      setNotes(notes => ([
        ...notes,
        newNote
      ]));
      const dataForProps = [...notes];
      dataForProps.push(newNote);
      console.log(dataForProps)
      localStorage.setItem('notes', JSON.stringify(dataForProps));
      navigate('/');
    } else {
      alert('Please fill mandatory fields')
    }
  }


  return (
    <div className='Note-container'>
      <Navbar />
      <Container className="containe">
        <div className='create-button'>
          Create a new Note
        </div>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <Box sx={{ p: 1 }}>
            <TextField
              onChange={(e) => { setTitle(e.target.value) }}
              className={classes.field}
              label="Note Title"
              fullWidth
              required
              error={titleError}
            >
            </TextField>
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              onChange={(e) => { setDetails(e.target.value) }}
              className={classes.field}
              label="Details"
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
            <RadioGroup value={category} onChange={(e) => { setCategory(e.target.value) }}>
              <FormControlLabel value="money" control={<Radio />} label="Money" />
              <FormControlLabel value="todos" control={<Radio />} label="Todos" />
              <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ p: 2 }}>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              endIcon={<KeyboardArrowRightIcon />}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  )
}
