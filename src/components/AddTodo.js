import React from 'react';
import PropTypes from "prop-types";
class AddTodo extends React.Component{
    state = {
        title : ''
    }
    onChangeValue = (e) => {
        this.setState({title : e.target.value})
    }
    onSubmitForm = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ""})
    }
    render(){
        return (
            <form onSubmit={this.onSubmitForm} style={{display : 'flex'}}>
                <input 
                    type="text" 
                    placeholder="Add todo.." 
                    style={{flex : '11', padding : '5px'}} 
                    value={this.state.title}
                    onChange={this.onChangeValue}
                />
                <input type="submit" value="Add" style={{flex : '1'}} className="btn"/>
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired
}
export default AddTodo;