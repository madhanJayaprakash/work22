import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Article from './components/Article';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Container fluid className='gx-0'>
        <Header />
        <Article/>
      </Container>
    </div>
  );
}

export default App;
