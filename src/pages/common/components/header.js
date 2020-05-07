import React,{PureComponent} from 'react';


class HeaderComponent extends PureComponent{

    render(){
        return(
            <div>
            <header>
            <nav className="navbar-dark">
                {this.props.loginSuccess &&
                <div className="logout" onClick={()=>this.props.logout()}>
                    Logout
                </div>
                }
            </nav>

            </header>
            </div>
        )
    }
}

export default HeaderComponent;