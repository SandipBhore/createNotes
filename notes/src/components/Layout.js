// import { makeStyles } from '@mui/material'
import React from 'react'
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   page: {
//     background: '#f9f9f9',
//     width: '100%'
//   }
// })

export default function Layout({ children }) {
//   const classes = useStyles()

  return (
    <div>
      {/* app bar */}
      <div>app bar</div>
      
      {/* side drawer */}
      <div>side drawer</div>

      {/* main content */}
      <div >
        { children }
      </div>
    </div>
  )
}