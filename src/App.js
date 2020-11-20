import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  state = {
    isNotified: false,
    mails: [
      {
        id: 1,
        title: "name1",
        content: "@lorem ipsum dolor sit amet",
        isRead: false,
      },
      {
        id: 2,
        title: "name2",
        content: "@lorem ipsum dolor sit amet",
        isRead: true,
      },
      {
        id: 3,
        title: "name3",
        content: "@lorem ipsum dolor sit amet",
        isRead: true,
      },
      {
        id: 4,
        title: "name4",
        content: "@lorem ipsum dolor sit amet",
        isRead: false,
      },
    ],
  };
  handleNotification = () => {
    this.setState({ isNotified: !this.state.isNotified });
  };
  render() {
    const { isNotified, mails } = this.state;
    return (
      <>
        <Navbar
          mails={mails}
          toggleNotification={this.handleNotification}
          isNotified={isNotified}
        />
        <main className="container">
          <div>
            <h2 style={{ textAlign: "center", marginTop: 20 }}>
              Simple notification demo app
            </h2>
          </div>
        </main>
      </>
    );
  }
}

export default App;
