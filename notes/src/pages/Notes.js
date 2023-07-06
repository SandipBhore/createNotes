import { Container, Grid } from '@mui/material';
import React from 'react';
import NoteCard from '../components/NoteCard';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.js';
import './Notes.scss';

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
    <div className='create-container'>
      <Navbar></Navbar>
      <Container>
      <div className='create-box'>
        <button
        className='create-button'
        onClick={()=>{history('/create')}}
        >
        Create new Note
        </button>
      </div>
      {notes.length ? 
        <Grid container spacing={3} m={1}>
          {notes.map(note => (
            <Grid item xs={10} md={4} lg={4} key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      : (<div><div className='no-notes'>
          Start with your first NOTE, You will LOVE it...!
        </div><div className='emoji'></div></div>) 
      }      
    </Container>
    </div>
  )
}