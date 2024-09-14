import { Component } from "react";

//mounting
//updating
//unmount
//error Handling

// mounting
// constructor()
// static getDerivedStateFromProps()
//render
//componentDidMount()

// updating
//
//

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      name: "Niraj Kumar",
      show: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate", prevProps, prevState, snapShot);
  }
  render() {
    console.log("render");
    return (
      <div>
        This is life cycle
        <button
          onClick={() =>
            this.setState({
              name: "vikas",
            })
          }
        >
          click
        </button>
        {this.state.show && <div>My Name is user</div>}
      </div>
    );
  }
}

export default LifeCycle;
