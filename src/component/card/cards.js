import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

class Cards extends React.Component {
  render() {
    onclick=(event)=>{

    }


    let card = this.props.data.map(function (value, index) {
      return (
        <div>
          <Card size="small" title={value.name} style={{ width: 300 ,borderStyle:"solid", borderWidth:"1px", borderColor:"red" }}>
            <img src={value.url} alt="not found" href={value.url}></img>
            <p key={index + 1 * 1}>description : {value.description}</p>
            <p key={index + 1 * 2}>status : {value.status}</p>
            <p key={index + 1 * 3}>priority : {value.priority}</p>
            <p key={index + 1 * 4}>extra : {value.extra}</p>
          </Card><br/>
        </div>
      );
    });

    return <div>{card}</div>;
  }
}

export default Cards;
