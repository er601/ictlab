import React from 'react';
import { Button } from 'antd';

import '../../index.css'
import bannerImg from '../../images/banner-img.svg'


const Banner = () => {
    return (
        <>
            <div className='banner' id='banner'>
                <div className='container'>
                    <div className='banner-content'>
                        <div className='left'>
                            <h2>Быстрые <br/><br/> решения для <br/><br/> вашего бизнеса!</h2>
                            <Button type="primary" block > Подробнее </Button>
                        </div>
                        <div className='right'>
                            <img src={bannerImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;