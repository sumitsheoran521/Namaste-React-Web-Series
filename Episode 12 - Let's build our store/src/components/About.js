import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      // console.log("Namaste React");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          loggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1 className="text-xl font-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"(class) "} location={"(class)"} />
      </div>
    );
  }
}

export default About;
