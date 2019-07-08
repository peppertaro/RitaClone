import React from "react";
import {NewProdList} from "../ListData";
import NewProdBox from "../Templates/New_Prod_Box";
class NewProd extends React.Component {
    render() { 
        return ( 
            <div className="NewProdSection">
                <div className="container">
                    <div className="Info">
                        <h3 className="Title">NEW ITEMS</h3>
                        <p className="Title_JP">新商品</p>
                    </div>
                    <div className="NewProds Slides">
                        {NewProdList.map(NewProdList => (
                            <NewProdBox
                                key={NewProdList.NPkey}
                                NewProdList={NewProdList}
                            />
                        ))}
                    </div>
                </div>
            </div>         );
    }
}
 
export default NewProd;