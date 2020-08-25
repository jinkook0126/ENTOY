import React,{useState} from 'react';
import './Header.css'
function Header() {
  const [toggle,setToggle] = useState('navbar__menu')

  const clickToggle = ()=>{
    console.log(toggle)
    toggle.indexOf('active') !== -1 ? setToggle(' navbar__menu') : setToggle('navbar__menu active')
  }
  return (
    <div className="navbar">
      <div className="navbar__logo">
          <i class="fab fa-mailchimp"></i>
          <a href="#">엔토이</a>
      </div>
      <ul className={toggle}>
        <li>
          <a href="#">팀원모집</a>
        </li>
        <li>
          <a href="#">팀원찾기</a>
        </li>
        <li>
          <a href="#">로그인/회원가입</a>
        </li>
      </ul>
      <a href="#" className="navbar__toggleBtn" onClick={clickToggle}>
        <i class="fas fa-bars"></i>
      </a>
      
    </div>
  );
}

export default Header;