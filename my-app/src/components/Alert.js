import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { hideAlert, clearState, sortByParam } from '../redux/actions/actions'

const styles = {
  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // left: 200,
  width: 450,
  height: 60,
  fontSize: 18,
  // left:25%,
  margin: 140,
  // position: 'absolute',
  background: 'lightblue' ,
  // border: 1px solid gray,
  // z-index:1,
  // box-shadow: 0px 0px 7px,
  // border-radius:5px,
  // opacity: 0.9,
}

export default function Alert(){

  const answer = useSelector(state=>state.answer.message)
  const state = useSelector(state => state)
  const curentSort = useSelector(state=>state.currentPage)
  const dispatch = useDispatch()
  function handleClick(e){
    e.preventDefault()
    console.log('event')
    // styles.width = 100
    dispatch(hideAlert())
    dispatch(clearState({

    }))
    
      
      // dispatch(fetchTasks({i}))
      dispatch(sortByParam({
        value: {
          field: curentSort.field,
          direction: curentSort.direct
        },
        num: state.currentPage.pageNum,
      }))
    

  }
  return (

<div className="modal" role="alert" style={styles} >
<span>{answer}</span>
   <button onClick={handleClick} type="button" class="btn btn-secondary btn-sm">Ok</button></div>


  )
}
