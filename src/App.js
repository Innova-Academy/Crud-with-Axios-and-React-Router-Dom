import React , {useState,useEffect}from 'react';
import axios from 'axios';
import './App.css';
import UpdateItem from './UpdateItem.js'
import Navbar from './navbar'
import {BrowserRouter,Route}from 'react-router-dom'
import About from './About'
function App() {
  const [movie,setMovie] = useState([]);
  // jibli  data
 const getItems = ()=>{
   axios.get(`http://localhost:3000/posts`).then(res=>{
     setMovie(res.data)
   })
 }
//ki tekhdem el page khademli en function
 useEffect(()=>{
   getItems()
 },[])
 const[item,setItem]=useState({
   title:"",
   para:""
 })

 // zidli data
 const addItem = ()=>{
   axios.post(`http://localhost:3000/posts`,item).then(res=>{
     console.log(res.data)
   })
 } 

 const deleteItem = (id)=>{
   axios.delete(`http://localhost:3000/posts/${id}`).then(res=>{
     console.log(res.data)
   })
 }
 
 
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar /> 
    <Route path="/about" component={About} />
      </BrowserRouter>
 {movie.map(el=>(
   <div key={el.id}> 

     <h1>{el.title}</h1>
     <p>{el.para}</p>
     <button onClick={()=>deleteItem(el.id)} > delete</button>
     <UpdateItem el={el} id={el.id} />
   </div>
 ))}
 <form onSubmit={addItem}>
   <input type="text" placeholder="title" onChange={(e)=>setItem({...item,title:e.target.value})} />
   <input type="text" placeholder="paragraphe"onChange={(e)=>setItem({...item,para:e.target.value})} />
<input type="submit" />

 </form>
    </div>
  );
}

export default App;
