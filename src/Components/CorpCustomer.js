import React from 'react';
class CorpCustomer extends React.Component {
    render() { 
        return ( 
            <div className="CorpCustomerSection">
                <div className="container">
                    <h3 className="InfoTitle">カスタマーサポート / 無料メールマガジン登録</h3> 
                    <div className="CorpCustomer">                                       
                        <div className="corpTelQuery corpInfos">
                            <h4 className="corpTitle">商品に関することから、お部屋のコーディネートの相談まで、お気軽にお問い合わせください。</h4>
                            <div className="corpTelDetail">
                                <div className="corpInfo-box">
                                    <i className="fas fa-phone-volume tel-i"></i>
                                    <div className="corpInfo">
                                        <h2 className="corpTelNum">050-5323-2931</h2>
                                        <p className="corpTelHour">営業時間10:00～17:00(土日祝休み)</p>
                                    </div>
                                    <button className="corpMailQuery mail-btn"><i className="far fa-envelope"></i>メールでのお問い合わせ</button>
                                </div>
                            </div>
                            <p className="corpcaution">※17:00以降,休業日のメール受信につきましては,翌営業日に返信させていただきますので,予めご了承ください。</p>
                            <p className="corpcaution">※お問い合わせの内容次第では,回答を差し上げるのにお時間をいただくことがございます。</p>
                        </div>
                        <div className="corpContMail corpInfos">
                            <h4 className="corpTitle">無料メルマガ登録で当店のお得な情報をお届けします!</h4>
                            <div className="corpInfo-box">
                                <div className="corpMailInput">
                                    <input className="corpInpMail" placeholder="メールアドレスをご入力ください" />
                                    <input className="corpInpMail" placeholder="確認用メールアドレス" />
                                </div>
                                <button className="corpreg mail-btn">登録する</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CorpCustomer;