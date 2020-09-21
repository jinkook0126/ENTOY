import React, { useEffect,useState } from 'react';
import styles from './TeamRg.module.css';
import Axios from '../../modules/Axios';

export default ()=>{
    const [area,setArea] = useState([]);
    useEffect(()=>{
        const getArea = async()=>{
            const {data} = await Axios.post('/common/getArea');
            setArea(data);
        }
        getArea();
    },[])
    return (
        <div className={styles.team_list_wrap}>
            <input type="text" placeholder="제목"/>
            <input type="number" placeholder="인원"/>
            <input type="text" placeholder="기술"/>
            <select id="aera">
                {area.map(item=><option value={item["AREA_CD"]} key={item["AREA_CD"]} >{item["AREA_NAME"]}</option>)}
            </select>
            <input type="text" placeholder="장소"/>
            <input type="text" placeholder="연락처"/>
            <textarea placeholder="내용"></textarea>
        </div>
    )
}