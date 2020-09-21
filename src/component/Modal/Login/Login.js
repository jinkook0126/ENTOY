import React,{useState} from 'react';
import Axios from '../../../modules/Axios';
import { useDispatch } from 'react-redux'
import { loginCloseModal } from '../../../reducers/modal';
import { loginSuccess } from '../../../reducers/auth';

export default (props)=>{
    const dispatch = useDispatch();
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');

    const onLoginModalClose = ()=>{
        dispatch(loginCloseModal())
    };

    const navigateSignUp = ()=>{
        props.change('signUp')
    };

    const onLoginRequest = async() =>{
        const {success,name,mail} = await Axios.post('/users/login',{email:id,pw:pw});
        if(!success) return;
        dispatch(loginSuccess(name, mail));
        alert("로그인 성공!!");
        onLoginModalClose();
    };
    
    return (
        <>
            <h2 id="transition-modal-title">간편가입 / 로그인</h2>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="이메일"/>
            <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="비밀번호"/>
            <button onClick={onLoginModalClose}>닫기</button>
            <button onClick={onLoginRequest}>로그인</button>
            <button onClick={navigateSignUp}>회원가입</button>
        </>
    );
}