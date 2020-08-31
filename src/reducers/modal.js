// 액션 타입 정의
const MODAL_OPEN = "modal/MODAL_OPEN";
const MODAL_CLOSE = "modal/MODAL_CLOSE";


// 액션 생섬함수 정의
export const openModal = () => ({ type: MODAL_OPEN });
export const closeModal = () => ({ type: MODAL_CLOSE });



// **** 초기상태 정의
const initState = {
    stat:false
}

// **** 리듀서 작성
export default function reducer(state=initState, action){
    switch (action.type) {
        case MODAL_OPEN: 
            return {
                ...state,
                stat:true
            }
        case MODAL_CLOSE:
            return {
                ...state,
                stat:false
            }
        default:
             return state;
    }
}