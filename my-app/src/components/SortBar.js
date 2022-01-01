import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sortByParam, clearState} from '../redux/actions/actions'


const styles = {
  div: {
    height: 184,
    width: 340,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
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
    height: 50,
    width: 280,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  }
}

export default function SortBar(){
  const dispatch = useDispatch()

function handleClickSort(e){
  e.preventDefault()
  dispatch(clearState({

  }))

  console.log('click', e.target.field.value)
  console.log('click', e.target.direction.value)
  for(let i =1; i<10; i++){
  
    dispatch(sortByParam({
      value: {
        field: e.target.field.value,
        direction: e.target.direction.value
      },
      num: i,
    }))
  }
}
  return (
    <form onSubmit={handleClickSort} style={styles.form}>
       <select style={{width: 100}}
        
        name="field" className="form-select" aria-label="Default select example">
  <option >Sort_field</option>
  <option value="id">id</option>
  <option value="username">username</option>
  <option value="email">email</option>
  <option value="status">status</option>
</select>
<select style={{width: 100}}
        
        name="direction" className="form-select" aria-label="Default select example">
  <option >direction</option>
  <option value="asc">asc</option>
  <option value="desc">desc</option>
  
</select>
<button type="submit" className="btn btn-secondary btn-sm" >sort</button>

    </form>
  )
}
