import React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component {
    getStyle = ()=> {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dashed',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render(){
        const btnStyle = {
            position : 'absolute',
            right : '10px',
            backgroundColor : '#ff0000',    
            color : 'white',
            border : 'none',
            padding : '5px 8px',
            borderRadius : "50%",
            cursor : "pointer"
        }
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>
                    {'   '}
                    {this.props.todo.title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,this.props.todo.id)}>x</button>
                </p> 
            </div>
        ); 
    }
     
}
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    delTodo : PropTypes.func.isRequired,
    markComplete : PropTypes.func.isRequired
}
export default TodoItem;