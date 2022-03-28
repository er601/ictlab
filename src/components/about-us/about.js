import React from 'react';

import { Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const style = {
    color: 'blue'
}

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className="container">
                    <div className="about-content">
                        <div className="about-left-content">
                            <Title> О нас</Title>
                            <Title level={5}>ICT Lab— это активно развивающаяся IT компания, которая предоставляет широкий спектр высококачественных продуктов, решений и сервисов в сфере информационных технологий. Основными направлениями нашей деятельности являются разработка интернет-проектов различного уровня сложности, создание систем автоматизации бизнеса и IT-консалтинг.</Title>
                            <Title level={5} > <CheckCircleOutlined style={style} /> 96% клиентов, которые начинали с нами работать, продолжают с нами сотрудничать и сейчас. Мы всегда выслушиваем заказчика и можем адекватно подстраиваться под любые его пожелания.</Title>
                            <Title level={5} > <CheckCircleOutlined style={style} /> Мы выполняем весь комплекс услуг, начиная от разработки логотипа, фирменного стиля, разработки сайта, мобильного приложения или мобильной версии сайта, заканчивая seo-продвижением проекта, а также поддержки и модернизации проекта, в течении длительного времени, за адекватные деньги.</Title>
                            <Title level={5} > <CheckCircleOutlined style={style} /> При разработке каждого проекта, мы выкладываемся на все 100%, часто тратя на проект заметно больше времени, чем заложено в смете. Каждый раз мы стараемся реализовать проект максимально хорошо, заметно выше ожиданий заказчика, т.к. понимаем, что каждый хорошо разработанный проект, повышает нашу репутацию и узнаваемость.</Title>
                        </div>
                        <div className="about-right-content">
                            <div>
                                <div>
                                    <Title className="count"> 18+</Title>
                                    <Title level={3}>лет опыта и совершенствования</Title>
                                </div>
                                <div>
                                    <Title className="count"> 700+</Title>
                                    <Title level={3}>Специалистов - наша гордость и главный ресурс </Title>
                                </div>
                            </div>
                            <div>
                                <Title className="count" > 7000+</Title>
                                <Title level={3}>Проектов для российских и международных компаний</Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;

