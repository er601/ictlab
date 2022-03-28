import React from 'react'
import { Anchor } from 'antd';

import '../../index.css'

const { Link } = Anchor

const Header = () => {
    return (
        <>
            <div className="header">
                <div className='container'>
                    <div className="header-content __active">
                        <div className="icon">
                            {/*<img src={logo} alt=""/>*/}
                            <h3>ICTLAB</h3>
                        </div>
                        <Anchor targetOffset='65'>
                            <Link href="#banner" title='Главная' />
                            <Link href="#offers" title='Наши услуги' />
                            <Link href="#advantages " title='Наши преимущества' />
                            <Link href="#statistic" title='Статистика' />
                            <Link href="#team" title='Наша команда' />
                            <Link href="#about" title='О нас' />
                            <Link href="#reviews" title='Отзывы' />
                            <Link href="#footer" title='Контакты' />
                        </Anchor>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
