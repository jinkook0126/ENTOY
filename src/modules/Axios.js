import axios from 'axios';

const url = 'http://localhost:3010'
const instance = axios.create({
    timeout: 1000 * 60
});

instance.interceptors.request.use(config=>{
    config.url = url + config.url;
    return config;
});

instance.interceptors.response.use(response=>{
    const {success,msg} = response.data
    if(!success) {
        alert(msg)
        return false;
    }
    return response.data;
},error=>{
    console.log(error)
    alert("시스템 오류 입니다. 다시 시도해주세요.")
    return false;
});

export default instance;

// success: true || false
// 다음 로직이 수행되야 할 경우 true, 에러 또는 수행되지 않아야 할 때는 false
// msg : string
// result : json || array
// 세션이 끝났을 경우 success또는 새로운 변수를 추가하여 넘겨 
// if(!success) 보다 먼저 체크하여 종료시 redux 초기화, '/'이동