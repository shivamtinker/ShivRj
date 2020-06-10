import React from "react";
import data from "./data.json";
import Cards from "./component/card/cards";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return <div> <Cards data={this.state.data}/></div>;
  }
}

export default App;
