import React from "react";
import { Card,Divider } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import '../../stylesheet/element.css';


class Cards extends React.Component {
  
  render() {
    onclick=(event)=>{

    }


    let card = this.props.data.map(function (value, index) {
      return (
        <div >
          <Card hoverable cover={<img src={value.url} alt="not found" ></img>}size="small" style={{ width: 300 ,borderStyle:"solid", borderWidth:"1px", borderColor:"red", margin: "auto" }}>
            <p style={{textAlign:"center",fontSize:"20px"}}key={index + 1 * 1}>Depriciation : {value.Depriciation}</p>
            <p style={{textAlign:"center",fontSize:"20px"}}key={index + 1 * 2}>Type : {value.Type}</p>
            <p style={{textAlign:"center",fontSize:"20px"}}key={index + 1 * 3}>Brand : {value.Brand}</p>
            <p style={{textAlign:"center",fontSize:"20px"}}key={index + 1 * 4}>Quality : {value.Quality}</p>
          </Card>
          <Divider>Divided By Products</Divider>
        </div>
      );
    });

    return <div>{card}</div>;
  }
}

export default Cards;
