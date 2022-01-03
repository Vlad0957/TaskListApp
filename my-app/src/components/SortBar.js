import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sortByParam, clearState, sortParamAdd} from '../redux/actions/actions'


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
    height: 40,
    width: 280,
    // border: 'solid black 1px',
    borderRadius: 10,
    // overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
  select: {
    height: 30,
    width: 200,
    // border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 2,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
  button: {
    height: 30,
    width: 100,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  }
}

export default function SortBar(){
  const dispatch = useDispatch()
  const state = useSelector(state => state)
function handleClickSort(e){
  e.preventDefault()
  dispatch(clearState({

  }))

  console.log('click', e.target.field.value)
  console.log('click', e.target.direction.value)
  dispatch(sortParamAdd({
    field: e.target.field.value,
    direct: e.target.direction.value,
    pageNum: state.currentPage.pageNum

  }))
 
  
    dispatch(sortByParam({
      value: {
        field: e.target.field.value,
        direction: e.target.direction.value
      },
      num: state.currentPage.pageNum,
    }))
  
}
  return (
    <form onSubmit={handleClickSort} style={styles.form}>
       <select style={styles.select}
        
        name="field" className="form-select" aria-label="Default select example">
  <option >Sort_field</option>
  <option value="id">id</option>
  <option value="username">username</option>
  <option value="email">email</option>
  <option value="status">status</option>
</select>
<select style={styles.select}
        
        name="direction" className="form-select" aria-label="Default select example">
  <option >direction</option>
  <option value="asc">asc</option>
  <option value="desc">desc</option>

</select>
<button style={styles.button} type="submit" className="btn btn-secondary btn-sm" >sort</button>

    </form>
  )
}
