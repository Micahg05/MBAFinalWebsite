import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { AppContainer, FooterContainer, MainSectionContainer, NavBarContainer } from './style';

function App() {
  return (
    <AppContainer>
      <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      <MainSectionContainer>
        <Main />
      </MainSectionContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
