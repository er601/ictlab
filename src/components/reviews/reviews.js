import React from 'react';
import { Carousel } from 'antd';
import { UserOutlined, RightOutlined } from '@ant-design/icons';

const contentStyle = {
    height: '260px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
};

const Reviews = () => {
    return (
        <div className='reviews' id='reviews'>
             <div className='container'>
                 <div className='reviews-content'>
                     <h1>Отзывы наших клиентов</h1>
                     <div className='carousel'>
                         <Carousel autoplay  style={contentStyle}>
                             <div className='slider-rev' >
                                 <UserOutlined  width={150} height={150}/>
                                 <h3  >1</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius eos est, expedita ipsum laborum maxime minima minus, odio, officia officiis omnis perspiciatis possimus vel vitae! Placeat, voluptatem?</p>
                             </div>
                             <div className='slider-rev' >
                                 <UserOutlined />
                                 <h3 >2</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius eos est, expedita ipsum laborum maxime minima minus, odio, officia officiis omnis perspiciatis possimus vel vitae! Placeat, voluptatem?</p>

                             </div>
                             <div className='slider-rev' >
                                 <UserOutlined />
                                 <h3 >3</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius eos est, expedita ipsum laborum maxime minima minus, odio, officia officiis omnis perspiciatis possimus vel vitae! Placeat, voluptatem?</p>

                             </div>
                             <div className='slider-rev'>
                                 <UserOutlined />
                                 <h3 >4</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius eos est, expedita ipsum laborum maxime minima minus, odio, officia officiis omnis perspiciatis possimus vel vitae! Placeat, voluptatem?</p>
                             </div>
                         </Carousel>
                     </div>
                 </div>

             </div>
        </div>
    );
};

export default Reviews;