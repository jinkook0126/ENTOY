import React from 'react';
import styles from "./Partners.module.css";
import { useHistory } from "react-router-dom";

export default ()=>{
  const history = useHistory();

  return (
    <div className={styles.partners_list_wrap}>
      <h1>파트너 찾기 페이지!! (목록)</h1>
      <div className={styles.register_btn_wrap}>
        <button onClick={()=>history.push('/PartnerRg')}>파트너 등록</button>
      </div>
      <div className={styles.register_btn_wrap}>
        <button onClick={()=>history.push('/PartnerDt')}>파트너 상세</button>
      </div>
    </div>
  );
};