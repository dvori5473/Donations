import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './utils/Main';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, cacheRtl } from './theme/rtl';


function App() {

  return (

    // <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <>
          <Routes>
            <Route path='/' element={<Main />}></Route>
          </Routes>
        </>
      </ThemeProvider>
    /* </CacheProvider> */

  );
}

export default App;
