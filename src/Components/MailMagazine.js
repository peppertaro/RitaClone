import React from 'react';
class MailMagazine extends React.Component {
    render() { 
        return ( 
            <div className="MailMagazineSection">
                <div className="container">
                    <div className="MailMagazineBox">
                        <div className="MM-infos">
                            <i class="fas fa-envelope-open-text MM-i"></i>
                            <div className="MM-info">
                                <h3 className="MM-title">MAIL MAGAZINE</h3>
                                <p className="MM-dsc">こちらから無料のメルマガ登録が可能です</p>
                            </div>
                        </div>
                        <img className="MM-img" src="./img/e-mail1.jpg" alt="" />
                        <a href="#MMlink" className="MM-link link-item">
                            #MMlink
                        </a>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default MailMagazine;