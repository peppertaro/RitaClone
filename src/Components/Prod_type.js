import React from "react";
import {ProdTypeList} from "../ListData";
import ProdTypeBox from "../Templates/Prod_type_Box";
class ProdType extends React.Component {
    render() { 
        return ( 
            <div className="ProdTypeSection">
                <div className="container">
                    <div className="ProdTypes">
                        {ProdTypeList.map(ProdTypeList => (
                            <ProdTypeBox
                                key={ProdTypeList.PTkey}
                                ProdTypeList={ProdTypeList}
                            />
                        ))}
                    </div>
                </div>
            </div>         );
    }
}
 
export default ProdType;