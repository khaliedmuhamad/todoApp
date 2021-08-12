import React , {useState , useEffect} from 'react';
import db from './firebase';
import firebase from 'firebase';
import './App.css';

function App() {
  //this code will work after loaded the page...

useEffect(() => {

  db.collection('todos').orderBy('created_at','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo: doc.data().todo})))
  })
}, [])
  //state --tasks to do
const  [todos,setTodos] = useState([]);
  // state--memory what we write
const [input ,setInput] = useState('');
  //function--addTOdoo
const addToDo = (e) =>{
  e.preventDefault(); //to stop page refreshing after submite

  //add to database
  db.collection('todos').add({
    todo: input,
    created_at:firebase.firestore.FieldValue.serverTimestamp()
  });
  setInput(''); //reset the input field to avoid iteration
};
//delete

  return (
    <div className="App">
      <form>
      <input  value={input} onChange={e =>setInput(e.target.value)} />
      <button disabled={!input} type='submit' onClick={addToDo}>Add to Tasks</button>
      </form>
     <ul> 
    {todos.map((todo,index)=>(
      <li key={index}>{todo.todo}
      <button onClick={(e)=>{db.collection('todos').doc(todo.id).delete()}} >Delete me X</button>
      </li>
    ))}
    </ul> 
    </div>
  );
}

export default App;
