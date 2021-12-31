import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTasks, clearState} from '../redux/actions/actions'
import Notes from './Notes'



const styles = {
  div: {
    height: 450,
    width: 1400,
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
    
      height: 500,
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
export default function Page(){

  const pages = useSelector((state) => state.page)
  const dispatch = useDispatch()
  function buttonSubmit(e){
    e.preventDefault()
    dispatch(clearState({
    
    }))
    console.log('YEES')
    for(let i =1; i<10; i++){
  
      dispatch(fetchTasks({i}))
    }
  }

  return (
    <div>
      <button type="button" className="btn btn-secondary btn-sm" onClick={buttonSubmit}>Load tasks</button>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false"  style={styles.divTwo} >
    {pages
    .sort((a, b)=>a.num - b.num)
    .map(page=><Notes page={page} key={page.num}/>)}
    </div>
    </div>
    
    
  )
}
