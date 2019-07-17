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
                        <div className="f-logo-i">
                            <a className="f-logo-link" href="https://www.rakuten.ne.jp/gold/ritainc/"  target="_blank" rel="noopener noreferrer">
                                <img className="Store-i f-Store-i " src="/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>         );
    }
}
 
export default Footer;