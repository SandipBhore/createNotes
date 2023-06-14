import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Box } from '@mui/material';

 const theme = createTheme({
  // palette provided by material UI
  palette:{
    primary:{
      main:"rgb(50,151,51)"
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
    // <Box sx={{ml:2, mr:2}}>
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
    //  </Box>
  );
}

export default App;
