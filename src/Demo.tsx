import React, {useEffect, useState} from "react";
import MyComponent from "./MyComponent"
import {myMessenger} from "./ConstHolder"
import {connect} from "react-redux"
import {dummyAction, sendMessage} from "./Actions"

export const label = (name: string) => {
    return `Hello ${name.toUpperCase()}`;
}

const Demo: React.FC = (props: any) => {
    let [messageFromChild, setMessageFromChild] = useState("nothing yet");
    let changeMessageFromChild = (msg:string) => {setMessageFromChild(msg)};
    let myCompRef = React.useRef<any>(); // in class component constructor it would be createRef

    //Equivalent of componentDidMount and componentWillUnmount
    //see https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-function-component
    useEffect(() => {
        console.log("Demo component componentDidMount equivalent")
        return () => {
            console.log("Demo component componentWillUnmount equivalent")
        }
    }, []);
    return (
        <div>
            <h1>{label('React')}</h1>
            <p>Nice TDD</p>

            <MyComponent val="Dog" ref={myCompRef} parentMethod={changeMessageFromChild}/>

            <button onClick={() => {
                myCompRef.current.changeVal("super message!!! " + new Date());
            }}>From parent to child using ref
            </button>

            <button onClick={() => {
                myMessenger.notify("my message!!! " + new Date());
            }}>From parent to child using observer
            </button>

            <button onClick={() => {
                props.callReduxAction("A");
            }}>Call dummy action
            </button>

            <button onClick={() => {
                props.sendMessageThroughRedux("Hello");
            }}>Send message to child through redux
            </button>

            <div>Received by parent from child: {messageFromChild}</div>
            <div>Animal in redux as seen by parent: {props.animal}</div>
        </div>
    )
}



function mapStateToProps(reduxStoreState: any) {
    return {
        animal: reduxStoreState.pet
    }
}

function mapDispatchToProps(dispatch: any) {
    return({
        callReduxAction: (txt: string) => { dispatch(dummyAction(txt)); },
        sendMessageThroughRedux: (txt: string) => { dispatch(sendMessage(txt)); },
    })
}

// before redux introduction
// export default App;

// after redux introduction
export default connect(mapStateToProps, mapDispatchToProps)(Demo);

