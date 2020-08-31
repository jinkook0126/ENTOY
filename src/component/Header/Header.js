import React,{useState,useCallback} from 'react';
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import {openModal, closeModal} from '../../reducers/modal'
import './Header.css'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faGrav } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [toggle,setToggle] = useState('navbar__menu');
  const modal = useSelector(state => state.modal.stat);
  const history = useHistory();

  const clickToggle = ()=>{
    toggle.indexOf('active') !== -1 ? setToggle(' navbar__menu') : setToggle('navbar__menu active')
  }

  const onLoginModalOpen = useCallback(()=>{
    dispatch(openModal())
  })
  const onLoginModalClose = useCallback(()=>{
    dispatch(closeModal())
  });
  const navigateSignUp = useCallback(()=>{
    dispatch(closeModal());
    history.push('/SignUp')
  });

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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={onLoginModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">간편가입 / 로그인</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <button onClick={onLoginModalClose}>닫기</button>
            <button onClick={navigateSignUp}>회원가입 하기</button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Header;