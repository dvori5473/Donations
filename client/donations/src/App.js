import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './utils/Main';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { HebrewTextField } from './HebrewTextField';

function App() {

  return (

    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <>
            <Routes>
              <Route path='/' element={<Main />}></Route>
            </Routes>
          </>      </div>
      </ThemeProvider>
    </CacheProvider>

  );
}

export default App;
