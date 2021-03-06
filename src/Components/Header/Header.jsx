import './header.css'
import {Link} from 'react-router-dom'


const Header = () =>{
    return(
      <>
       <div className="Header">
         <div className='Header__list'>
          <Link to="/courses" className='Header__list-link'>Курсы</Link>
        </div>
        <div className='Header__list'>
          <Link to="/youtube" className='Header__list-link'>Youtube</Link>
        </div>
        <div className='Header__list'>
          <Link to="/documentation" className='Header__list-link'>Документации</Link>
        </div>
        <div className='Header__list'>
          <Link to="/telegram" className='Header__list-link'>Telegram</Link>
        </div>
        <div className='Header__list'>
          <Link to="/blogger" className='Header__list-link'>Блогеры</Link>
        </div>
      </div>
      <div className='gmail'>
      <span className="gmail__link">azamat.kanatbekov.kk@mail.com</span>
      </div>
      </>
    )  
  }
  
  export default Header