import React from "react"
import axios from 'axios';

class AxiosExample extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            persons: []
        }
    }

    render() {
        return (
           <div>
           <h1>Axios Example</h1>

           <br/><br/>
           <button onClick={() => {
               //axios.get(`https://jsonplaceholder.typicode.com/users`)
               axios.get(`http://localhost:8080/users`)
                   .then((res: any) => {
                       const persons = res.data;
                       this.setState({ persons });
                })
           }}>Load from the backend
           </button>
           <br/>
           <br/>

               <ul>
                   { this.state.persons.map((person: any) => <li key={person.id}>{person.name}</li>)}
               </ul>

           </div>
        );
    }
}

export default AxiosExample;
