import React from "react";
class Footer extends React.Component {
    render() { 
        return ( 
            <div className="footer">
                <div className="container">
                    <div className="footer-box">
                        <div className="f-shopingGuide f-index-box">
                            <h3 className="f-title">ショッピングガイド</h3>
                            <div className="f-links">
                                <a className="f-link" href="#envio" alt="">送料について</a>
                                <a className="f-link" href="#payment" alt="">お支払い方法について</a>
                                <a className="f-link" href="#return" alt="">返却・交換について</a>
                            </div>
                        </div>
                        <div className="f-query f-index-box">
                            <h3 className="f-title">ご案内</h3>
                            <div className="f-links">
                                <a className="f-link" href="#query" alt="">お問い合わせ</a>
                                <a className="f-link" href="#about" alt="">会社概要</a>
                            </div>
                        </div>
                        <img className="Store-i" src="/logo.svg" alt="" />
                    </div>            
                </div>
            </div>         );
    }
}
 
export default Footer;