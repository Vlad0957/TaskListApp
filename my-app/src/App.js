import {React, useState} from 'react'
import Page from './components/Page'
import Form from './components/Form'
import SortBar from './components/SortBar';
import HeaderBar from './components/HeaderBar';
import {styleApp} from './styles'



function App() {
  const styles = styleApp
  const [viewForm, setViewForm] = useState(false)
  const [viewButton, setViewButton] = useState(true)
  function handleClick(e){
    e.preventDefault()
    setViewForm(true)
    setViewButton(false)
  }
  function changeViewForm(){
    setViewForm(false)
    setViewButton(true)
  }
  return (
  
    <div style={styles.div} className="Container">
      <HeaderBar />
    <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <SortBar />
    {viewForm != true && viewButton == true
        &&
      <button style={styles.button} onClick={handleClick} type="button" class="btn btn-primary btn-sm">Add task</button>  
      }

    </div>
    <div style={styles.divTwo}>
      <Page />
     
      { viewForm == true
        &&
      <Form changeViewForm={changeViewForm}/>
      }
    </div>
    </div>
    
  
  );
}

export default App;
