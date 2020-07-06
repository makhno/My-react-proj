import React, {useState} from "react"
import {withRouter} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {dummyAction} from "./Actions"
import {RouteComponentProps} from "react-router"

interface Props extends RouteComponentProps<{}> {
    passedProp: string
}

const AboutFunc: React.FC<Props> = (props: Props) => {
    const animal = useSelector((state: any) => state.pet) // useSelector only works in function components
    const dispatch = useDispatch()
    const [inpVal, setInpVal] = useState("A")

    const handleInpValChange = (event: any) => {
        setInpVal(event.target.value)
    }

    return (
        <div>
            <h1>About Demo</h1>
            <h2>{props.passedProp}</h2>
            <button id="switch_to_demo" onClick={() => {
                props.history.push("/demo")
            }}>Switch to Demo
            </button>
            <br/>
            <br/>

            <input id="input_box" type="text" value={inpVal} onChange={handleInpValChange} />

            <br/><br/>
            <button id="update_redux_val" onClick={() => {
                dispatch(dummyAction(inpVal))
            }}>Call action
            </button>
           <br/>
            <br/>

            Pet in store: <span id="info_span">{animal}</span>
        </div>
    )
}


export default withRouter(AboutFunc)

