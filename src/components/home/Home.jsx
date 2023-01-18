import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__data'>
          <h1 className='home__title'> Было круто, <br></br> Если этот мир <br></br> Весело...</h1>

          <p className='home__description'>Тут про мой портфолио</p>

          <form action="" className='home__search'>
            <i className='bx bxs-map'></i>
            <input type="search" placeholder='Search by location...' className='home__search-input' />
            <button className='button'>Search</button>
          </form>


          <div className='home__value'>
            <div>
              <h1 className='home__value-number'>
                9K <span>+</span>
              </h1>
              <span className='home__value-description'>
              Высший сорт <br></br> Продукт
              </span>
            </div>

            <div>
              <h1 className='home__value-number'>
                2K <span>+</span>
              </h1>
              <span className='home__value-description'>
              Счастливый <br></br> Customer
              </span>
            </div>

            <div>
              <h1 className='home__value-number'>
                28K <span>+</span>
              </h1>
              <span className='home__value-description'>
                Awards <br></br> Winning
              </span>
            </div>
          </div>
        </div>

        <div className='home__images'>
          <div className='home__orbe'></div>

          <div className='home__img'></div>
        </div>
      </div>
    </section>
  )
}

export default Home
