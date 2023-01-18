import React from 'react';
import './subscrible.css';

const Subscrible = () => {
    return (
        <section className="subscrible section">
            <div className='subscrible__container container'>
                <h1 className='subscrible__title'>
                    Начните с Nurramazan
                </h1>

                <p className='subscrible__description'>
                    Подпишитесь и найдите у нас супер привлекательные предложения
                </p>

                <a href="#home" className="button subscrible__button">
                    Начинаю
                </a>
            </div>
        </section>
    )
}

export default Subscrible
