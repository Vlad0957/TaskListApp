import React from 'react'
import Page from './components/Page'
import Form from './components/Form'
import SortBar from './components/SortBar';



const styles = {
  div: {
    height: 650,
    width: 1500,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent:'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',

  },
  divTwo: {
    
      height: 700,
      width: 540,
      border: 'solid black 1px',
      borderRadius: 10,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'start',
      justifyContent:'center',
      padding: 5,
      margin: 5,
      fontSize: 24,
      fontWeight: 'bold',
      fontColor: '#E5E9F0',
  
    
  },
  span: {
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  form: {
    height: 350,
    width: 340,
    border: 'solid black 1px',
  }
}

function App() {
  
  
  return (
  
    <div style={styles.div} className="container">
    <SortBar />
    <Page />
    <Form />
    </div>
    
  
  );
}

export default App;
