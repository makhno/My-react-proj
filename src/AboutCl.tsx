import React from "react"
import {connect} from "react-redux"
import {dummyAction} from "./Actions"
import {withRouter} from "react-router-dom"

class AboutCl extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {inpVal: "B"};
    }

    handleInpValChange = (event: any) => {
        this.setState({inpVal: event.target.value});
    }

    render() {
        return (
           <div>
           <h1>About Demo</h1>

           <button onClick={() => {
               this.props.history.push("/demo");
           }}>Switch to Demo
           </button>
           <br/>
           <br/>

           <input type="text" value={this.state.inpVal} onChange={this.handleInpValChange} />

           <br/><br/>
           <button onClick={() => {
               this.props.callReduxDummyAction(this.state.inpVal);
           }}>Call action
           </button>
           <br/>
           <br/>

           Pet in store: {this.props.animal}
           </div>
        );
    }
}

const mapStateToProps = (storeState: any) => {
    return {
        animal: storeState.pet,
    }
};

function mapDispatchToProps(dispatch: any) {
    return({
        callReduxDummyAction: (txt: string) => { dispatch(dummyAction(txt)); },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutCl));
