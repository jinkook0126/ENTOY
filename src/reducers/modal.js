// 액션 타입 정의
const LOGIN_MODAL_OPEN = "modal/LOGIN_MODAL_OPEN";
const LOGIN_MODAL_CLOSE = "modal/LOGIN_MODAL_CLOSE";


// 액션 생섬함수 정의
export const loginOpenModal = () => ({ type: LOGIN_MODAL_OPEN });
export const loginCloseModal = () => ({ type: LOGIN_MODAL_CLOSE });



// **** 초기상태 정의
const initState = {
    login:{stat:false}
}

// **** 리듀서 작성
export default function reducer(state=initState, action){
    switch (action.type) {
        case LOGIN_MODAL_OPEN: 
            return {
                ...state,
                login:{stat:true}
            }
        case LOGIN_MODAL_CLOSE:
            return {
                ...state,
                login:{stat:false}
            }
        default:
             return state;
    }
}