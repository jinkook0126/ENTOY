import React from 'react';
import styles from "./Banner.module.css";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

function Banner() {
  return (
    <div className={styles.banner__wrap}>
        {/* <div className={styles.box__wrap}>
            <div className={styles.input__wrap}>
                <FormControl variant="outlined" className={styles.select__box}>
                    <InputLabel id="demo-simple-select-outlined-label">구분</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value={10}>팀</MenuItem>
                        <MenuItem value={20}>팀원</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" className={styles.searchName}/>
            </div>
            <a href="#" className={styles.searchBtn}>
                <i class="fas fa-search"></i>
            </a>
        </div> */}
    </div>
  );
}

export default Banner;