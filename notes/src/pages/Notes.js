import { Box, Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  const history = useNavigate()

  return (
    <Container>
      <Box sx={{m:2, textAlign:'center'}}>
        <Button
        color='primary'
        variant='contained'
        onClick={()=>{history('/create')}}
        >
        Create new Note
        </Button>
      </Box>
      
      {/* <button
        
      ></button> */}
      <Grid container spacing={3} m={1}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}