import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
class App extends React.Component {
  state = {
    todos : []
     

  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=> this.setState({todos : res.data}))
     
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=> this.setState({
        todos : this.state.todos.filter(todo=>todo.id !== id )})
   )
  }
  markComplete = (id) =>{
    this.setState({todos : this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })}) 
  }
  addTodo = (title) => {
    // const todos = [...this.state.todos];
    // const newTodo = {
    //   id : uuid.v4(),
    //   title : title,
    //   completed : false
    // }
    // todos.push(newTodo);
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title : title,
      completed : false
    }).then(res=>this.setState({todos :  [...this.state.todos,res.data]}))
    
  }
  render(){
    
    return (
      <Router>
          <div className="container">
            <Header/>
            <Route exact path="/Todo" render={props=> {
              return <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            }}/>
            
            <Route path="/About" component={About}/>
          </div>
      </Router>
      
    );
  }
  
}

export default App;
