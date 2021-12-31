import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sortByParam, clearState} from '../redux/actions/actions'

export default function SortBar(){
  const dispatch = useDispatch()

function handleClickSort(e){
  e.preventDefault()
  dispatch(clearState({

  }))

  console.log('click', e.target.value)
  for(let i =1; i<100; i++){
  
    dispatch(sortByParam({
      value: e.target.value,
      num: i,
    }))
  }
}
  return(

    <select style={{width: 100}} onChange={handleClickSort} name="select" className="form-select" aria-label="Default select example">
  <option selected>Sort_field</option>
  <option value="id">id</option>
  <option value="username">username</option>
  <option value="email">email</option>
  <option value="status">status</option>
</select>


   
 

  )
}
