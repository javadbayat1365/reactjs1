import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Menu, Icon} from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




class App extends Component{

    render(){
        return (
            <div>
              <Row>
                <Col span={24}>
                <Header />

                {/* <Welcome />
                <Products />
                <Footer /> */}
                
                </Col>  
              </Row>
              </div>
        );
    }
}


class Header extends Component
{
    render (){
        return (
          <Menu mode="horizontal" selectedKeys="home" onClick={this.handleclick}>
             <Menu.Item key="home">
               <Icon type="home" />Home
             </Menu.Item>
             <Menu.Item key="app">
             <Icon type="appstore" />Products
             </Menu.Item>
             <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Example- Link</a>
            </Menu.Item>

             <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />More Page</span>}>
                <MenuItemGroup >
                <Menu.Item key="aboutus">About Page</Menu.Item>
                <Menu.Item key="contact">Contact Us</Menu.Item>
                </MenuItemGroup>
             </SubMenu>
          </Menu>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("main"));