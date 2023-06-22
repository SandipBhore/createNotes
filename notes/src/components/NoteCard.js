import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { grey } from '@mui/material/colors';
import './noteCard.scss'

export default function NoteCard({ note, handleDelete}) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.title)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={note.title}
          style={{background:'#7FB77E'}}
          subheader={`category - ${note.category}`}
          className='cardHead'
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}