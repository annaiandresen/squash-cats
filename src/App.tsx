import './assets/App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//import SquashIcon from './components/SquashIcon';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

/* Color palette in MUI */
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB5A7',
      light: '#FCD5CE',
    },
    secondary: {
      main: '#FEC89A',
      light: '#F9DCC4',
    },
    info: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h2 className="text-orange mt-6 text-center">Anna slår Halvard i squash</h2>
      <SportsTennisIcon fontSize="large" color="primary" sx={{ opacity: 0.5 }} />
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <div className="fab">
          <Fab size="large" color="primary" aria-label="add" onClick={() => alert('hello')}>
            <AddIcon />
          </Fab>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
