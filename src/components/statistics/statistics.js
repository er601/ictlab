import React from 'react';

import { Row, Col } from 'antd';
import '../../index.css'

const Statistics = () => {
    return (
        <>
            <div className='statistic' id='statistic'>
                <div className="container">
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>320+</h2>
                            <h3>Довольные клиенты</h3>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>2320+</h2>
                            <h3>Установлены системы кондиционирования</h3>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>20+</h2>
                            <h3>Установлены полный комплект Умного дома</h3>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>320+</h2>
                            <h3>Довольные клиенты</h3>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>2320+</h2>
                            <h3>Установлены системы кондиционирования</h3>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='col-stat'>
                            <h2>20+</h2>
                            <h3>Установлены полный комплект Умного дома</h3>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}


export default Statistics;
