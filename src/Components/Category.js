import React from "react";
import {CategoryList} from "../ListData";
import CateTypeBox from "../Templates/Cate_Type_Box";
class Category extends React.Component {
    render() { 
        return ( 
            <div className="CateTypeSection">
                <div className="container">
                    <div className="Info">
                        <h3 className="Title">CATEGORY</h3>
                        <p className="Title_JP">カテゴリー</p>
                    </div>
                    <div className="CateTypes Slides">
                        {CategoryList.map(CategoryList => (
                            <CateTypeBox
                                key={CategoryList.CTkey}
                                CategoryList={CategoryList}
                            />
                        ))}
                    </div>
                </div>
            </div>         );
    }
}
 
export default Category;