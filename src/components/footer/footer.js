import React from 'react';

import {  Table, Tag, Space  } from 'antd';

import '../../index.css'

const { Column, ColumnGroup } = Table;


const data = [
    {
        key: '1',
        firstName: 'Разработка сайтов',
        lastName: 'ОсОО ИВТ Лаб',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Диазйн',
        lastName: 'Бишкек, Кыргызстан',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Управление Качеством',
        lastName: 'Логвиненко, 27/2',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Бизнес-аналитика',
        lastName: 'Phone: +996(777) 20–28–65',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Интернет-маркетинг',
        lastName: 'Email: ubtlab@gmail.com',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Управление проектами',
        // lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];



const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="container">
                <div className="footer-content">
                    <Table dataSource={data}>
                        <ColumnGroup>
                            <Column title="УСЛУГИ" dataIndex="firstName" key="firstName" />
                            <Column title="КОНТАКТЫ" dataIndex="lastName" key="lastName" />
                        </ColumnGroup>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default Footer;


