import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo'
class Header extends React.Component {
  constructor(){
    super()
    this.state = {
    todos:[]
    }
    this.todoinput=""
    
  
  }
  addTodo(){
    let todoValue=this.todoinput.value
    
    let newTodos = this.state.todos
    newTodos.push(todoValue);

    this.setState({
      todos: newTodos
    })
    console.log(this.todoinput.value)
      }
      
      removeTodo(id){
        console.log("delete todo index", id)
      let todos = this.state.todos.filter((todo,index) => {
return id !== index
      })
      this.setState({
        todos: todos
      })
          
      
    
          }
          
          
      
    render() {
       return (
         
            <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to React Todo App</h1>
         </header>
         
         
         
       
             <p>Todo-count: {this.state.todos.length}</p>
             <input type="text" placeholder="Todo App" ref={(input) => this.todoinput = input} />
             <button onClick={this.addTodo.bind(this)} value="submit">Click to Add</button>
             
             <ol>
               
               {this.state.todos.map((todo,index) => {
                 return (<Todo  id={index} key={index} todo={todo} onRemove={()=> this.removeTodo(index)}/>)
               } 
                ) }
             </ol>
            

          </div>
       );
    }
  }

 export default Header;