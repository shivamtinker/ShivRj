import React from 'react';
import { Button,Modal,Input } from "antd";


class ModelWithInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product:[],
            visible:false
        }

    }
    handleOk = e => {
        console.log(e);
        this.setState((prevState)=>{
            return {...prevState, visible:false}
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState((prevState)=>{
            return {...prevState, visible:false}
        });
      };
      showModal = () => {
        this.setState((prevState)=>{
            return {...prevState, visible:true}
        });
      };
    render(){
        return (
            <div>
            <Button type="primary" onClick={this.showModal}>
              Add product
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel = {this.handleCancel}
            >
              
                <Input type="text" name="fname" id="Notebook" value = {this.state.product} onChange={
                  (event)=>{
                      let inpval = event.target.value;
                      this.setState((prevState)=>{
                        return {...prevState, product:inpval};
                      })
                  }
                }></Input>
            </Modal>
          </div>
        );
    }
}

export default ModelWithInput;