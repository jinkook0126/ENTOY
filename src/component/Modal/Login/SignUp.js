import React,{useState} from 'react';
import Axios from '../../../modules/Axios';
import { useDispatch } from 'react-redux'
import { loginCloseModal } from '../../../reducers/modal';
export default (props)=>{
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password:""
    })

    const {email, name, password} = inputs;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const navigateSignUp = ()=>{
        props.change('login')
    };

    const onLoginModalClose = ()=>{
        dispatch(loginCloseModal())
    };

    const signUpRequest = async() =>{
        const {success,msg} = await Axios.post("/users/signUp",{email:email,name:name,password:password});
        if(!success) return;
        alert(msg);
        onLoginModalClose();
    }

    return (
        <>
            <h1>Sign View!!</h1>
            <input type="text" name="email" value={email} onChange={onChange} placeholder="이메일"/>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="이름"/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder="비밀번호"/>
            <button onClick={navigateSignUp}>로그인 페이지 이동</button>
            <button onClick={signUpRequest}>회원가입</button>
        </>
    );
}