import React, { Component } from 'react';
import { Menu, Icon } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.selectedMenu
        }
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick(e) {
        e.preventDefault;
        this.setState({
            current: e.key
        })
    }



    render() {
        return (
            <Menu mode="horizontal" onClick={this.handleclick}
                selectedKeys={[this.state.current]}>
                <Menu.Item key="home">
                    <Icon type="home" />Home
             </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />Products
             </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="#" target="_top" rel="noopener noreferrer">Example- Link</a>
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