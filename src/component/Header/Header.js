import React,{useState,useCallback} from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {loginOpenModal} from '../../reducers/modal'
import './Header.css'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faGrav } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LoginModal from '../Modal/Login/LoginModal';

function Header() {
  const dispatch = useDispatch();
  const [toggle,setToggle] = useState('navbar__menu');

  const clickToggle = ()=>{
    toggle.indexOf('active') !== -1 ? setToggle(' navbar__menu') : setToggle('navbar__menu active')
  }

  const onLoginModalOpen = useCallback(()=>{
    dispatch(loginOpenModal())
  },[])
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
            <FontAwesomeIcon icon={faGrav} />
            <Link to="/">엔토이</Link>
        </div>
        <ul className={toggle}>
          <li>
            <Link to="/Teams">파트너 모집</Link>
          </li>
          <li>
            <Link to="/Partners">파트너 찾기</Link>
          </li>
          <li>
            <a href="#" onClick={onLoginModalOpen}>로그인/회원가입</a>
          </li>
        </ul>
        <a href="#" className="navbar__toggleBtn" onClick={clickToggle}>
          <FontAwesomeIcon icon={faBars} />
        </a>      
      </div>
      <LoginModal view="login"/>
    </>
  );
}

export default Header;