import React, {useEffect, useState, useMemo} from 'react'
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
    
    height: 35,
    width: 300,
    // border: 'solid black 0.5px',
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
  
  
  useEffect(()=>{
   
      console.log('YEES')
    for(let i =1; i<50; i++){
      
      dispatch(fetchTasks({i}))
    }
  
  }, [])

  const [page, setPage] = useState(1)
  const pages = useSelector((state) => state.page)

  
  const currentPage = pages.find(el=>el.num===page)
  const paginate = (num)=>{
    setPage(num)
    console.log('Page', page)
  }
  return (
<div>
    <div   style={styles.divTwo} >
    {currentPage!=undefined &&
      <Notes page={currentPage} />
    }
    

    </div>
   <div style={{width: 30}}>
     <nav aria-label="Page navigation example">
  <ul style={styles.divThree} class="pagination">
  {pages
    .sort((a, b)=>a.num - b.num)
    .map(page=>{
      if(page.tasks.length){
      return(
       <li class="page-item"><a style={styles.a} class="page-link" href="#" onClick={()=>{
      paginate(page.num)
      }
      }>{page.num}</a></li>
    )
      }
      
    }
   
    

    )}
   
  </ul>
</nav>
   </div>
</div>
    
  )
}
