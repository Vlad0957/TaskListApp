import React from 'react'

export default function ChangeBar({note}){

return (
<form>
{/* <span className="input-group-text" id="inputGroup-sizing-sm">Small</span> */}
  <input type="text" className="form-control" aria-label="Sizing example input" placeholder={note.text}
  varia-describedby="inputGroup-sizing-sm"></input>
  <select 
        
        name="direction" className="form-select" aria-label="Default select example">
  <option >direction</option>
  <option value="asc">asc</option>
  <option value="desc">desc</option>

</select>
  <button type="submit" className="btn btn-primary btn-sm" >Create task</button>


</form>
)
}
