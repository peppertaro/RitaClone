import React from "react";
import {NewProdList} from "../ListData";
import NewProdBox from "../Templates/Prod_type_Box";
class NewProd extends React.Component {
    render() { 
        return ( 
            <div className="NewProdSection">
                <div className="container">
                    <div className="NewProds">
                        {NewProdList.map(NewProdList => (
                            <NewProdBox
                                key={NewProdList.PTkey}
                                NewProdList={NewProdList}
                            />
                        ))}
                    </div>
                </div>
            </div>         );
    }
}
 
export default NewProd;