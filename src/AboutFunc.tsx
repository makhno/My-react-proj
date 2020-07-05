import React, {useState} from "react";
import {withRouter} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {dummyAction} from "./Actions"


const AboutFunc: React.FC = (props: any) => {
    const animal = useSelector((state: any) => state.pet) // useSelector only works in class components
    const dispatch = useDispatch()
    let [inpVal, setInpVal] = useState("A");

    const handleInpValChange = (event: any) => {
        setInpVal(event.target.value);
    }

    return (
        <div>
            <h1>About Demo</h1>

            <button onClick={() => {
                props.history.push("/demo");
            }}>Switch to Demo
            </button>
            <br/>
            <br/>

            <input id="input_box" type="text" value={inpVal} onChange={handleInpValChange} />

            <br/><br/>
            <button onClick={() => {
                dispatch(dummyAction(inpVal));
            }}>Call action
            </button>
           <br/>
            <br/>

            Pet in store: {animal}
        </div>
    );
}


export default withRouter(AboutFunc);

