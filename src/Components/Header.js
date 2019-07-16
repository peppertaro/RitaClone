import React from "react";
class Header extends React.Component {
    render() { 
        return ( 
            <div className="header">
                <div className="container">
                    <div className="header-box">
                        <a className="h_item" href="https://www.rakuten.co.jp/ritainc/info.html" target="_blank" rel="noopener noreferrer"><i className="fas fa-info hd-i"></i>ABOUT US</a>
                        <p className="header_msg">全品送料無料！</p>
                        <div className="header_right">
                            <a className="h_item" href="https://my.bookmark.rakuten.co.jp/?l2-id=shop_header_bookmark" target="_blank" rel="noopener noreferrer"><i className="fas fa-heart hd-i"></i>MY FAVORITE</a>
                            <a className="h_item" href="https://basket.step.rakuten.co.jp/rms/mall/bs/cartempty/" target="_blank" rel="noopener noreferrer" ><i className="fas fa-shopping-basket hd-i"></i>SHOPPING BAG</a>
                        </div>
                    </div>           
                </div>
            </div>         );
    }
}
 
export default Header;