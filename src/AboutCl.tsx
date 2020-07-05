import React from "react"
import {connect} from "react-redux"
import {dummyAction} from "./Actions"
import {RouteComponentProps, withRouter} from "react-router"

interface Props extends RouteComponentProps<{}> {
    animal: string
    callReduxDummyAction(txt: string): void
    passedProp: string
}

class AboutCl extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
        this.state = {inpVal: "B"}
    }

    handleInpValChange = (event: any) => {
        this.setState({inpVal: event.target.value})
    }

    render() {
        return (
           <div>
           <h1>About Demo</h1>
           <h2>{this.props.passedProp}</h2>
           <button id="switch_to_demo" onClick={() => {
               this.props.history.push("/demo")
           }}>Switch to Demo
           </button>
           <br/>
           <br/>

           <input id="input_box" type="text" value={this.state.inpVal} onChange={this.handleInpValChange} />

           <br/><br/>
           <button id="update_redux_val" onClick={() => {
               this.props.callReduxDummyAction(this.state.inpVal)
           }}>Call action
           </button>
           <br/>
           <br/>

           Pet in store: <span id="info_span">{this.props.animal}</span>
           </div>
        )
    }
}

const mapStateToProps = (storeState: any) => {
    return {
        animal: storeState.pet
    }
}

function mapDispatchToProps(dispatch: any) {
    return({
        callReduxDummyAction: (txt: string) => { dispatch(dummyAction(txt)) }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutCl))
