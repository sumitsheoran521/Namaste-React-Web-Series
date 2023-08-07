import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "Dummp Photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sumitsheoran521");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sumitsheoran521</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
