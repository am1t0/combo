import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/Todo/Todo'

export default function Todos() {
 const {todos} = useSelector(store=> store.todo)
 const dispatch = useDispatch()
 console.log(todos)
  return (
    <>
     <h1>Todos</h1>
     {   
        todos.map((todo)=>{
           return (
           <li style={{margin:'10px', background:'red'}} key={todo.id}>
              {todo.text}
              <button
              onClick={()=> dispatch(removeTodo(todo.id))}
              >X</button>
           </li>
           )
        })
     }
    </>
  )
}
