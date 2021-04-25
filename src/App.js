import React from 'react'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Home from './pages/Home'
import Appbar from './components/Appbar'


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <div style={{ padding: '1rem' }}>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
