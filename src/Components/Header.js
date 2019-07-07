import React from "react";
class Header extends React.Component {
    render() { 
        return ( 
            <div className="header">
                <div className="container">
                    <div className="header-box">
                        <p><i className="fas fa-info hd-i"></i>ABOUT US</p>
                        <p className="header_msg">全品送料無料！</p>
                        <div className="header_right">
                            <p><i className="fas fa-heart hd-i"></i>MY FAVORITE</p>
                            <p><i className="fas fa-shopping-basket hd-i"></i>SHOPPING BAG</p>
                        </div>
                    </div>            
                </div>
            </div>         );
    }
}
 
export default Header;