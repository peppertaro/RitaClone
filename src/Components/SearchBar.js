import React from 'react';
import Modal from 'react-modal';
import {ProdTypeList,CategoryList} from "../ListData";
import ProdTypeBox from "../Templates/Prod_type_Box";
import CateTypeBox from "../Templates/Cate_Type_Box";

const customStyles = {
    overlay: {
      position: "relative",
      zIndex: "100",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    content: {
      width:"100%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: 0,
      transform: "translate(-50%, 0)"
    }
  };


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    toggle() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    } 
    closeModal() {
        this.setState({modalIsOpen: false});
      }
    
    RakuSub = ()=>{
        document.charset='EUC-JP'; 
        document.rakutenSubmit.submit();
    }
    render() { 
        return ( 
            <div className="SearchBarSection">
                <div className="container">
                    <div className="SearchBar-Box">
                        <i className="fas fa-bars header-i" onClick={this.toggle}></i> 
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
                    <div className="ProdTypes">
                        {ProdTypeList.map(ProdTypeList => (
                            <ProdTypeBox
                                key={ProdTypeList.PTkey}
                                ProdTypeList={ProdTypeList}
                            />
                        ))}
                    </div>
                    
                    <div id ="CTsmBox" className="Category-sm-box">
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Category-sm"
                            style={customStyles}
                            parentSelector={() => document.getElementById("CTsmBox")}
                        >
                            <i className="fas fa-times-circle closeModal-i" onClick={this.closeModal}></i>
                            {CategoryList.map(CategoryList => (
                                    <CateTypeBox
                                        key={CategoryList.CTkey}
                                        CategoryList={CategoryList}
                                    />
                                ))}
                                
                        </Modal>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;