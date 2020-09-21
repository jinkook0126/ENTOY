import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Axios from '../../modules/Axios';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import {loginOpenModal} from '../../reducers/modal'
import './Header.css'
import { logoutSuccess } from '../../reducers/auth';

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faGrav } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LoginModal from '../Modal/Login/LoginModal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));


function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [toggle,setToggle] = useState('navbar__menu');
  const [anchorEl, setAnchorEl] = useState(null);
  const loginState = useSelector(state => state.auth.login.stat);


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const clickToggle = ()=>{
    toggle.indexOf('active') !== -1 ? setToggle(' navbar__menu') : setToggle('navbar__menu active')
  }

  const onLoginModalOpen = useCallback(()=>{
    dispatch(loginOpenModal());
  },[])

  const logoutRequest = async() =>{
    const {success} = await Axios.post('/users/logout');
    if(!success) return;
    dispatch(logoutSuccess());
  }
  
  const handleClick = (event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {loginState ?  
            <>
              <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                아이콘
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Button color="secondary" onClick={logoutRequest}>
                  <Typography className={classes.typography}>로그아웃</Typography>
                </Button>
              </Popover>
            </>
            : <a href="#" onClick={onLoginModalOpen}>로그인/회원가입</a>
            }
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