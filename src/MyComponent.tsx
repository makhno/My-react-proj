import React from "react";
import {myMessenger} from "./ConstHolder"
import {connect} from "react-redux"

class MyComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {message1: "Nothing yet", message2: "Nothing yet"};
    }

    subscriptionFun = (data: any) => {this.setState({message2: data}); };

    componentDidMount() {
        console.log("component did mount");
        myMessenger.subscribe(this.subscriptionFun);
    }

    componentWillUnmount() {
        console.log("component will unmount");
        myMessenger.unsubscribe(this.subscriptionFun);
    }

    componentDidUpdate(prevProps: any) {
        console.log("prevProps message: " + prevProps.messageFromParent);
        console.log("current message: " + this.props.messageFromParent);
    }

    changeVal(newVal:string) {
        this.setState({message1: newVal});
    }

    render() {
        return (<div>
            Received by child from parent using instance method: {this.state.message1}<br/>
            Received by child from parent using observer: {this.state.message2}<br/>
            <div>Animal in redux as seen by child: {this.props.animal}</div>
            <button onClick={() => {this.props.parentMethod("hello boston " + new Date())}}>From child to parent</button>
        </div>);
    }
}

const mapStateToProps = (storeState: any) => {
  return {
    animal: storeState.pet,
    messageFromParent: storeState.message,
    deleteme: storeState.deleteme
  }
};

export default connect(
    mapStateToProps,
    null,
    null,
    { forwardRef : true }
)(MyComponent);

//export default MyComponent;
