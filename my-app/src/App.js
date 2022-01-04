import React from 'react'
import Page from './components/Page'
import Form from './components/Form'
import SortBar from './components/SortBar';
import HeaderBar from './components/HeaderBar';
import {styleApp} from './styles'



function App() {
  const styles = styleApp
  
  return (
  
    <div style={styles.div} className="Container">
    <HeaderBar />
    
    <SortBar />
    <div style={styles.divTwo}>
      <Page />
      <Form />
    </div>
    </div>
    
  
  );
}

export default App;
