import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { AppContainer, FooterContainer, MainSectionContainer, NavBarContainer } from './style';
import FAQ from './Main/pages/FAQ';
import Gameplay from './Main/pages/Gameplay';
import Intro from './Main/pages/Intro';
import Mint from './Main/pages/Mint';
import Teams from './Main/pages/Teams';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Main/>
        {/* <NavBarContainer>
          <Navbar />
        </NavBarContainer>
        <MainSectionContainer>
          <Routes>
            <Route  path="/" element={
              <Main />
            }/>
            <Route  path="/gameplay" element={
              <Gameplay />
            }/>
            <Route  path="/mint" element={
              <Mint />
            }/>
            <Route  path="/intro" element={
              <Intro />
            }/>
            <Route  path="/faq" element={
              <FAQ />
            }/>
            <Route  path="/teams" element={
              <Teams />
            }/>
          </Routes>
          </MainSectionContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer> */}
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
