import React from "react";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {

    render(){
        console.log(this.props);
        if (this.props.location.pathname === "/style" || this.props.location.pathname === "/cart") {
            return <></>;
        } else {
            return (
                <div className="nav-bar">
                    <div onClick={() => this.props.history.push("/")} className="logo">
                        BikeBuilder
                    </div>
                    <div className="nav-links">
                        <div className='link' onClick={() => this.props.history.push("/howto")}>How To</div>
                        <div className='link' onClick={() => this.props.history.push("/resource")}>
                            Resources
                        </div>
                        <button onClick={() => this.props.history.push("/style")} id="build-button">Build</button>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(NavBar);