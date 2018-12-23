import React, { Component } from 'react';
import { Row, Col } from 'antd';



import Header from './Header';
import Welcome from './Welcome';

export default class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Header selectedMenu='home' />
                        <Welcome  title="Welcome to my shop"/>
                        {
                            /* 
                            <Products />
                            <Footer /> */
                        }

                    </Col>
                    <Col span={8}></Col>

                </Row>
            </div>
        );
    }
}