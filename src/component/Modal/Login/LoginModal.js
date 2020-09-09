import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { loginCloseModal } from '../../../reducers/modal';
import SignUp from './SignUp';
import Login from './Login';

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
  }
}));

export default function LoginModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [view,setView] = useState('login');
  const modal = useSelector(state => state.modal.login.stat);
  const onLoginModalClose = ()=>{
    dispatch(loginCloseModal())
    setTimeout(()=>{
      setView('login');
    },1000)
  };
  const changeView = (name)=>{
    setView(name);
  }
  return (
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
          {view === "login" ? <Login change={changeView}/>:<SignUp change={changeView}/>}
        </div>
      </Fade>
    </Modal>
  );
}