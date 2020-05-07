import * as ActionTypes from './home-constant';

export const loginCheck = (userDetail) => {
    return function(dispatch){
       let userName = userDetail.username,password = userDetail.password;
       fetch(`https://swapi.dev/api/people/?search=${userName}`, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            
        }).then(response => response.json())
        .then(data => {
            let birsthyear = data.results[0] ? data.results[0].birth_year:'';
            if(birsthyear == password){
                dispatch({
                    type:ActionTypes.NAV_LOGIN_SUCCESS
                })
            }else{
                dispatch({
                    type:ActionTypes.NAV_LOGIN_FAIL
                })
            }
        })

    }
}
