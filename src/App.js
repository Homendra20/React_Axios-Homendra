

import axios from 'axios'
import React, { Component } from 'react'
import Datainput from './DataInput';

class App extends Component {
    state = {
        Person:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {console.log(res);
        this.setState({Person: res.data});
        });
        
    }
    render() {
        return ( 
            
            <div className="container">
                <h1>Digikull Student</h1>
                <h2>Hello User</h2>
                <Datainput/>

    {this.state.Person.map(Person=><p key={Person.id}>{Person.name}</p>)}
    

            </div>
        )
    }
}

export default App


