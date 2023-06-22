import { Box, Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.js'

export default function Notes() {
  let notes = [];
  var retrievedObject = JSON.parse(localStorage.getItem('notes'));

  if(localStorage.getItem("notes") !== null){
    notes=[...retrievedObject]
  }else{
    console.log('error')
  }
  
  const handleDelete=(e)=>{
    console.log(e)
    const filteredNote = retrievedObject.filter((item) => item.title !== e);
    localStorage.setItem('notes', JSON.stringify(filteredNote));
    window.location.reload()
  }

  const history = useNavigate()

  return (
    <div>
      <Navbar></Navbar>
      <Container>
      
      <Box sx={{pt:6,textAlign:'center'}}>
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
    </div>
    
  )
}