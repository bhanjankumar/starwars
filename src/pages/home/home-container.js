import {connect} from 'react-redux';

import HomeComponent from './components/home';
import * as action from './home-action';


const mapStateToProps = (state, currentProps) => {
    const errorLogin = state.home.error;
    return{
      errorLogin
    }
}

export default connect(mapStateToProps,action)(HomeComponent);