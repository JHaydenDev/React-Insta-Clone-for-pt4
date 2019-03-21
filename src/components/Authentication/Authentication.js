import React from "react";
import LoginPage from "./Login";
import PostsPage from "../PostContainer/PostPage";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }
  };

export default Authenticate;
