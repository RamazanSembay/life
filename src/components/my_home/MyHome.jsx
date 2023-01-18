import React from 'react';
import './myhome.css';
import Video from "../img/lifestyle.mp4";

const MyHome = () => {
  return (
    <section className='home section' id='myhome'>
      <div className='home__container container grid'>
        <div className='home__data'>
          <h1 className='home__title'> Было круто, <br></br> Если этот мир <br></br> Весело...</h1>

          <p className='home__description'>Тут про мой портфолио {'>'} </p>

          <div className='home__value'>
            <div>
              <h1 className='home__value-number'>
                50 <span>+</span>
              </h1>
              <span className='home__value-description'>
                Успешный <br></br> проект
              </span>
            </div>

            <div>
              <h1 className='home__value-number'>
                100 <span>+</span>
              </h1>
              <span className='home__value-description'>
                Подписчик <br></br>
              </span>
            </div>

            <div>
              <h1 className='home__value-number'>
                2<span>млн</span>
              </h1>
              <span className='home__value-description'>
                Заработанный <br></br> сумма
              </span>
            </div>
          </div>
        </div>

        <div className='home__video'>
          <div className='home__orbe'></div>

          {/* <div className='home__img'></div> */}
          <video className='video__slider' src={Video} autoPlay muted loop></video>
        </div>
      </div>
    </section>
  )
}

export default MyHome
