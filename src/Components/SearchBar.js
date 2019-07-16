import React from 'react';
class SearchBar extends React.Component {
     RakuSub = ()=>{
        document.charset='EUC-JP'; 
        document.rakutenSubmit.submit();
    }
    render() { 
        return ( 
            <div className="SearchBarSection">
                <div className="container">
                    <div className="SearchBar-Box">
                        <i className="fas fa-bars header-i"></i> 
                        <a className="StoreLink"  href="https://www.rakuten.ne.jp/gold/ritainc/"  target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-search search-i-sm"></i>
                        </a>
                        <a className="StoreLink"  href="https://www.rakuten.ne.jp/gold/ritainc/"  target="_blank" rel="noopener noreferrer">
                            <img className="Store-i" src="/logo.png" alt="" />
                        </a>
                        <a className="StoreLink" href="https://my.bookmark.rakuten.co.jp/?l2-id=shop_header_bookmark" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-heart search-i-sm"></i>
                        </a>
                        <a className="StoreLink" href="https://basket.step.rakuten.co.jp/rms/mall/bs/cartempty/" target="_blank" rel="noopener noreferrer" >
                            <i className="fas fa-shopping-basket search-i-sm"></i>
                        </a>
                        <form method="get" className="SearchBar" action="http://esearch.rakuten.co.jp/rms/sd/esearch/vc" target="_top" acceptCharset="euc-jp">
                            <button type="submit" name="sa" value="Search" className="search-i" onClick="RakuSub()">
                                <i className="fas fa-search"></i>
                            </button>
                            <input type="hidden" name="sv" value="6" />
                            <input type="hidden" name="sid" value="361620"/>
                            <input type="hidden" name="su" value="https://www.rakuten.ne.jp/gold/ritainc/" />
                            <input type="hidden" name="sn" value="ideart" />
                            <input type="text" name="sitem" className="formtext" autoComplete="off" /> 
                            <input type="hidden" name="f" value="A"/>
                        </form>                            
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;