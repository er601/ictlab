import React from 'react';

import '../../index.css'

import laptop from '../../images/laptop-coding.png';
import offer from '../../images/offer.svg'
import path from '../../images/path.svg'

const Offers = () => {
    return (
        <div className='main-offer' id='offers'>
            <div className='container'>
                <h1>Наши услуги</h1>
                <div className='offers'>
                    <div className='offer'>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Разработка сайтов</h4>
                        </div>
                        <span className='horizontal'></span>
                        <img src={path} alt=""/>
                        <span className='horizontal'></span>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Диазйн</h4>
                        </div>
                    </div>
                    <span className='vertical'></span>
                    <div className='offer'>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Управление Качеством</h4>
                        </div>
                        <span className='horizontal'></span>
                        <div>
                            <img width={150} src={offer} alt=""/>
                            <h3>ICT Lab - Быстрые решения</h3>
                        </div>
                        <span className='horizontal'></span>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Управление проектами</h4>
                        </div>
                    </div>
                    <span className='vertical'></span>
                    <div className='offer'>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Бизнес-аналитика</h4>
                        </div>
                        <span className='horizontal'></span>
                        <img src={path} alt=""/>
                        <span className='horizontal'></span>
                        <div>
                            <img src={laptop} alt=""/>
                            <h4>Интернет-маркетинг</h4>
                        </div>
                    </div>
                </div>
                <button>Подробнее</button>
            </div>
        </div>
    );
};

export default Offers;