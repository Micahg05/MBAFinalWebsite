import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { AppContainer, FooterContainer, MainSectionContainer, NavBarContainer } from './style';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={
            <Main />
          }/>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
