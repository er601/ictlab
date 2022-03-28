import React from 'react';
import { Image, Typography, Space } from 'antd';

import '../../index.css'

import security from '../../images/security.svg'
import solid from '../../images/solid.svg'
import warn from '../../images/warning.svg'


const { Text } = Typography;


const Advantages = () => {
    return (
        <>
            <div id='advantages'>
                <div className='advantages' >
                    <div className='container'>
                        <div className='advantages-content'>
                            <h1>Наши преимущества </h1>
                            <div className='cards'>
                                <div className='img-card'>
                                    <Image width={75} height={100} src={security} />
                                    <Image width={75} height={100} src={warn} />
                                    <Image width={75} height={100} src={solid} />
                                </div>
                                <div className='txt-cards'>
                                    <Text className='txt'>Обеспечение безопасности. <br/> Где бы вы ни находились, вы будете точно знать о совершении попытки проникновения в дом.</Text>
                                    <Text className='txt'>Заблаговременное предупреждение аварийных ситуаций благодаря онлайн-диагностированию системы</Text>
                                    <Text className='txt'>FutureHOME – это престижно и солидно. При этом ее можно легко изменять и адаптировать под свои потребности.</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Advantages;