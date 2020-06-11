import React from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Axios from "axios";
import Design from './component/layout/layout'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    Axios.get('/allprod').then(response=>{
     
      const data = response.data;
     
      this.setState({
       data : data
      });
    }).catch(err=>{
      console.log(err);
    });
  }


  render() {
    return (
    <Design data={this.state.data}/>
    
        )
    //return <div> <Cards data={this.state.data}/></div>;
  }
}

export default App;

