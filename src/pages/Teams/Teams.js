import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import styles from "./Teams.module.css";
import { useHistory } from "react-router-dom";
import {loginOpenModal} from '../../reducers/modal'
import Card from'../../component/Card/Card';

export default ()=>{
  const history = useHistory();
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.auth.login.stat);
  const navigateGuard = (e,target) =>{
    e.preventDefault();
    if(loginState) history.push(target);
    else dispatch(loginOpenModal());
  };
  return (
    <div className={styles.teams_list_wrap}>
      <h1>팀원 모집 공고 페이지!! (목록)</h1>
      <div className={styles.register_btn_wrap}>
        <button onClick={(e)=>navigateGuard(e,'/TeamRg')}>공고 등록</button>
      </div>
      <div className={styles.register_btn_wrap}>
        <button onClick={(e)=>history.push("/TeamDt")}>공고 상세</button>
      </div>
      {[...Array(20)].map((key)=>{
        return (<Card></Card>)
      })}
    </div>
  );
};