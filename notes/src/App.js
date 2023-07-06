import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import './App.scss'

 const theme = createTheme({
  palette:{
    primary:{
      main:"#af6d05"
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})
function App() {
  return (
     <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Notes />}>
            
          </Route>
          <Route path="/create"  element={<Create />}>
            
          </Route>
        </Routes>
      </Router>
     </ThemeProvider>
  );
}

export default App;
