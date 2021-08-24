import axios from 'axios'
import React, { Component } from 'react'

class Datainput extends Component {
    state = {
        name:'',
    }
    handlechange=(event)=>{
        this.setState({name: event.target.value});
    }
 handlesubmit=(event)=>{
     event.preventDefault();
     const user = {
         name : this.state.name
     }
     axios.post(`https://jsonplaceholder.typicode.com/users` , {user})
     .then(res=>{
         console.log(res);
         console.log(res.data);
     })
 }
    render() {
        return (
            <div className="main">
<form onSubmit={this.handlesubmit}>
    
    <label >
        Student Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handlechange} />
    </label>
    <button type ="submit">Add</button>
</form>
            </div>
        )
    }
}

export default Datainput
