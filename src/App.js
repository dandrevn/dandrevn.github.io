import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {ThemeProvider, responsiveFontSizes, createTheme} from '@mui/material';

function App() {
  let theme = createTheme({
    typography: {
        fontFamily: [
          '"Segoe UI Emoji"',
          '"Segoe UI"',
          '"Helvetica Neue"'
        ].join(','),
    }
  });
  theme = responsiveFontSizes(theme);
  return (
    <div className='App' style={{width: '100%'}}>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Main/>
      </ThemeProvider>
    </div>
  );
}

export default App;
