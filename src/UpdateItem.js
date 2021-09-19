import React,{useState} from 'react'
import axios from 'axios'
const UpdateItem = ({el,id})=>{
    const [newItem,setNewItem] = useState({
        title:el.title
    })
    const [input,setInput] = useState({
        title:""
    })

    const updateItem = (id)=>{
axios.put(`http://localhost:3000/posts/${id}`,input).then(res=>{
    console.log(res.data)
})
    }
    return(
        <div>

 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  update
</button>

 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
       <input type="text" defaultValue={newItem.title} onChange={(e)=>{setInput({...input,title:e.target.value})}} />

   <button onClick={()=>updateItem(id)}  > update</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default UpdateItem