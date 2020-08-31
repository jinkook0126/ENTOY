import React from 'react';
import styles from "./Teams.module.css";
import { useHistory } from "react-router-dom";

export default ()=>{
  const history = useHistory();
  return (
    <div className={styles.teams_list_wrap}>
      <h1>팀원 모집 공고 페이지!! (목록)</h1>
      <div className={styles.register_btn_wrap}>
        <button onClick={()=>history.push('/TeamRg')}>공고 등록</button>
      </div>
      <div className={styles.register_btn_wrap}>
        <button onClick={()=>history.push('/TeamDt')}>공고 상세</button>
      </div>
    </div>
  );
};