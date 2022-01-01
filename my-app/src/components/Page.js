import React, {useEffect, useState} from 'react'
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
    
      height: 450,
      width: 300,
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
  divThree: {
    
    height: 35,
    width: 450,
    border: 'solid black 0.5px',
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
    fontSize: 24,
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

  const pages = useSelector((state) => state.page)
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  useEffect(()=>{
    
      console.log('YEES')
      for(let i =1; i<50; i++){
    
        dispatch(fetchTasks({i}))
    }

  }, [])
  const currentPage = pages.find(el=>el.num==page)
  const paginate = (num)=>{
    setPage(num)
    console.log('Page', num)
  }
  return (
<div>
    <div   style={styles.divTwo} >
    
    <Notes page={currentPage} key={currentPage.num}/>

    </div>
   <div style={{width: 30}}>
     <nav aria-label="Page navigation example">
  <ul style={styles.divThree} class="pagination">
  {pages
    .sort((a, b)=>a.num - b.num)
    .map(page=>
   
    <li class="page-item"><a style={styles.a} class="page-link" href="#" onClick={()=>{
      paginate(page.num)
      }
      }>{page.num}</a></li>

    )}
   
  </ul>
</nav>
   </div>
</div>
    
  )
}
