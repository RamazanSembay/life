import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer section' id='footer'>
      <div className='footer__container container grid'>
        <div>
          <a href="#" className='footer__logo'>
            Nurramazan Sembay <i className='bx bxs-home-alt-2' ></i>
          </a>
          <p className='footer_description'>
            Тут про лайфстайл, и немного про стиль <br></br>
            и другие.
          </p>
        </div>

        <div className='footer__content'>

          {/* Footer_1 */}
          <div>
            <h3 className='footer__title'>About</h3>

            <ul className='footer__links'>
              <li>
                <a href="#" className='footer__link'>About Us</a>
              </li>

              <li>
                <a href="#" className='footer__link'>Features</a>
              </li>

              <li>
                <a href="#" className='footer__link'>News & Blog</a>
              </li>
            </ul>
          </div>

          {/* Footer_2 */}
          <div>
            <h3 className='footer__title'>Компания</h3>

            <ul className='footer__links'>
              <li>
                <a href="#" className='footer__link'>Как мы работаем?</a>
              </li>

              <li>
                <a href="#" className='footer__link'>Капитал</a>
              </li>

              <li>
                <a href="#" className='footer__link'>Безопасность</a>
              </li>
            </ul>
          </div>

          {/* Footer_3 */}
          <div>
            <h3 className='footer__title'>Поддерживать</h3>

            <ul className='footer__links'>
              <li>
                <a href="#" className='footer__link'>Часто задаваемые <br></br> вопросы</a>
              </li>

              <li>
                <a href="#" className='footer__link'>Центр поддержки</a>
              </li>

              <li>
                <a href="#" className='footer__link'>Свяжитесь с нами</a>
              </li>
            </ul>
          </div>

          {/* Footer_4 */}
          <div>
            <h3 className='footer__title'>Подписывайтесь <br></br> на мне</h3>

            <ul className='footer__social'>
              <a href="https://www.facebook.com/" className='footer__social-link'>
                <i className='bx bxl-facebook-circle'></i>
              </a>

              <a href="https://www.instagram.com/nurramazan_sembayev" className='footer__social-link'>
                <i className='bx bxl-instagram-alt'></i>
              </a>

              <a href="https://www.vk.ru/nurramazan_sembayev" className='footer__social-link'>
                <i class='bx bxl-vk'></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer__info container'>
        <span className='footer__copy'>
          &#169; Nurramazan. Все права защищены
        </span>

        <div className='footer__privacy'>
          <a href="#">Условия и соглашения</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
