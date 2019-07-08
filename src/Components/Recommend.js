import React from "react";
import {RecommendList} from "../ListData";
import RecommendBox from "../Templates/Rcmd_Box";
class Recommend extends React.Component {
    render() { 
        return ( 
            <div className="RecommendSection">
                <div className="container">
                    <div className="Info">
                        <h3 className="Title">RECOMMEND</h3>
                        <p className="Title_JP">おすすめ</p>
                    </div>
                    <div className="Recommends Slides">
                        {RecommendList.map(RecommendList => (
                            <RecommendBox
                                key={RecommendList.RDkey}
                                RecommendList={RecommendList}
                            />
                        ))}
                    </div>
                </div>
            </div>         );
    }
}
 
export default Recommend;