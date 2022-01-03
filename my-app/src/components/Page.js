import React, {useEffect, useState, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTasks, clearState, sortByParam, sortParamAdd} from '../redux/actions/actions'
import Notes from './Notes'
import Alert from './Alert'



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
    
      height: 480,
      width: 400,
      border: 'solid black 1px',
      borderRadius: 10,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'start',
      justifyContent:'center',
      padding: 5,
      margin: 5,
      fontSize: 14,
      fontWeight: 'bold',
      fontColor: '#E5E9F0',
  
    
  },
  divThree: {
    
    height: 40,
    width: 390,
    // border: 'solid black 1px',
    borderRadius: 8,
    overflow: 'auto',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'start',
    // justifyContent:'center',
    padding: 5,
    margin: 5,
    // fontSize: ,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',

  
},
  span: {
    margin: 5,
    fontSize: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  form: {
    height: 350,
    width: 340,
    border: 'solid black 1px',
  },
  a:{
    fontSize: 8
  }
}
export default function Page(){

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const tasksPerPage = 3
  const pagesTotal = []
  
  useEffect(()=>{
    
   
    dispatch(sortParamAdd({
      field: state.currentPage.field,
      direct: state.currentPage.direct,
      pageNum: page
  
    }))
    dispatch(sortByParam({
      value: {
        field: state.currentPage.field,
        direction: state.currentPage.direct
      },
      num: page,
    }))
    
  }, [page])
  
  const state = useSelector((state) => state)
  const answer = useSelector((state) => state.answer)
console.log(state, 'state')
  const totalCount = useSelector(state => state.page[0].total_count)
  console.log(totalCount, '!!!!!!!!!!!!!!')
  const pages = useSelector((state) => state.page)
  const pageCount = Math.ceil(totalCount/tasksPerPage)
  
  for(let j = 1; j <= pageCount; j++){
pagesTotal.push(j)
  }

  console.log(pagesTotal, 'pagesTotal')
  
  
  const paginate = (num)=>{
    setPage(num)
    console.log('Page', page)
  }
  const currentPage = pages[0]
  return (
<div>
{ answer.status !== '' &&

<Alert />
}
    <div   style={styles.divTwo} >
   
      <Notes page={currentPage} />
    
    </div>
   <div style={{width: 60}}>
     <nav aria-label="Page navigation example">
  <ul style={styles.divThree} class="pagination">
  {pagesTotal
    
    .map(page=>{
      
      return(
       <li class="page-item"><a style={styles.a} class="page-link" href="#" onClick={
         ()=>{
      paginate(page)
      }
      }>{page}</a></li>
    )

    }
   
    )}
   
  </ul>
</nav>
   </div>
</div>
    
  )
}
