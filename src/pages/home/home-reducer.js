import * as ActionType from './home-constant';

const initialState = {
    loginSuccess:false
}



const HomeReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_LOGIN_FAIL:
            return{
                ...state,
                error:'Login Failed Please try again...'
            }
         case ActionType.NAV_LOGIN_SUCCESS:
            return{
                ...state,
                loginSuccess:true
            }   
        default:
            return state;
    }

};
export default HomeReducer;