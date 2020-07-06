import React from "react"
import axios from 'axios'

interface State {
    persons: []
}

interface Person {
    id: number,
    name: string
}

class AxiosExample extends React.Component<{}, State> {
    constructor(props: {}) {
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
           <button id="load_persons" onClick={() => {
                axios.get(`https://jsonplaceholder.typicode.com/users`)
             //  axios.get(`http://localhost:8080/users`)
                   .then((res: any) => {
                       const persons = res.data
                       this.setState({ persons })
                })
           }}>Load from the backend
           </button>
           <br/>
           <br/>

               <ul id="person_list">
                   { this.state.persons.map((person: Person) => <li key={person.id}>{person.name}</li>)}
               </ul>

           </div>
        )
    }
}

export default AxiosExample
