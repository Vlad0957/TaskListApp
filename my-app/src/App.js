import React from 'react'
import Notes from './components/Notes'
import Form from './components/Form'

const styles = {
  div: {
    height: 900,
    width: 840,
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
    
      height: 340,
      width: 340,
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
    
    <div style={styles.divTwo}>
    <Notes />

    </div>
    <Form />
    </div>
    
  
  );
}

export default App;
