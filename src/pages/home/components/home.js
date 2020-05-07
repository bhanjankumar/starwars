import React,{PureComponent} from 'react';
import 'react-input-range/lib/css/index.css';

class HomeComponent extends PureComponent{
    constructor(){
        super();
    }
    loginCheck(){
        const userDetail={
            username:this.refs.username.value,
            password:this.refs.password.value
        }
        this.props.loginCheck(userDetail);
    }

    render(){
        const {errorLogin} = this.props;
        return(
    <div className="content">
  		<div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                                <h3 className="text-center">Login</h3>
                                {errorLogin}
                                <div className="form-group">
                                    <label for="username" >Username:</label><br/>
                                    <input type="text" ref="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" >Password:</label><br/>
                                    <input type="text" ref="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                   <button onClick={()=>this.loginCheck()} className="btn btn-info btn-md">Login</button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  	</div>
        )
    }
}

export default HomeComponent;