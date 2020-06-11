import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import ModelWithInput from './modelwithinput'
import Cards from '../card/cards';
const { Header, Content, Footer } = Layout;



class Design extends React.Component {
    render() {

      return <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><ModelWithInput data={this.props.data}/></Menu.Item>
          <Menu.Item key="2">Add product</Menu.Item>
          <Menu.Item key="3">Update product</Menu.Item>
          <Menu.Item key="4">Remove product</Menu.Item>

        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Cards data={this.props.data}/></Breadcrumb.Item>
          
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    }
  }
  
  export default Design;