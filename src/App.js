import React from "react";
import Detail from "./user";
import "./App.css";
import { trackPromise } from "react-promise-tracker";

class App extends React.Component {
  constructor() {
    super();
    this.state = { content: "" };
  }

  loaduser = (url) => {
    trackPromise(
      fetch(url)
        .then(function (response) {
          if (response.ok) {
            return response.text();
          }
          throw new Error("Error!!!");
        })
        .then(
          function (userData) {
            userData = JSON.parse(userData);
             this.setState({ content:userData});
          }
          .bind(this)
        )
        .catch(function (error) {
          console.log("sorry can't load ", url, error.message);
        })
    );
  };
  render() {
    let data = "";
    if (this.state.content) {
      data = <Detail data={this.state.content.data} />;
    }
    return (
      <div className="Container">
        <div className="btn">
          <p className='heading'>Lets Grow more</p>
            <button onClick={this.loaduser.bind(this,"https://reqres.in/api/users?page=1")}>
              Get Data
            </button>
            
        </div>
        {data}
      </div>
    );
  }
}

export default App;
 