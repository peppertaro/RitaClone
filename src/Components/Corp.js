import React from 'react';
class Corporate extends React.Component {
    render() { 
        return ( 
            <div className="CorpSection">
                <div className="container">
                    <div className="Corporate">
                        <h3 className="InfoTitle">会社概要</h3>                    
                        <div className="corpDetail corpInfos">
                            <h4 className="corpName">株式会社Rit@</h4>
                            <p className="corpAddr corpInfo">〒2750012 千葉県習志野市************</p>
                            <p className="corpTel corpInfo">TEL:050********</p>
                            <p className="corpFax corpInfo">FAX:04********</p>
                        </div>
                        <div className="corpAdmi corpInfos">
                            <p className="corpHour corpInfo">営業時間10:00～17:00(土日祝休み)</p>
                            <p className="corpAdmiName corpInfo">店舗運営責任者:TARO Rita</p>
                            <p className="corpSecAdminName corpInfo">店舗運営セキュリティ:荒瀬</p>
                            <p className="corpEmail corpInfo">店舗連絡先:*******rit@shop.rakuten.co.jp</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Corporate;