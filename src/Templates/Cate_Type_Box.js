import React from "react";



const CateTypeBox = ({ CategoryList}) => {
  const { CTindex, PTimg, CTname, CTtitle, CTlink,CTimg } = CategoryList;
  const CTimgTogl = (v)=>{
      if(document.getElementById(v).style.display!=="block"){
            document.getElementById(v).style.display="block";
        }else{
            document.getElementById(v).style.display="none"
        }
  };
  return (
    <div id={`CateTypeBox-${CTindex}`} className={`CT-L${CTindex%3} CT-M${CTindex%2} CateType`} onClick={()=>{CTimgTogl(`CTimg-${CTindex}`)}}>
        <div id={`CTcard-${CTindex}`} className="CT-img-box Slide-img-box">
            <div className="CT-infos">
                <div className="CT-info">
                    <img className="PT-img" src={PTimg} alt=""/>
                    <div className="CT-names">
                        <p className="CT-name">{CTname}</p>
                        <h3 className="CT-title">{CTtitle}</h3>
                        <a href={CTlink} className="CT-link link-item">
                            {CTlink}
                        </a>
                    </div>
                </div>
                <i className="fas fa-plus CT-plus"></i>
            </div>
            <img id={`CTimg-${CTindex}`} className="CT-img" src={CTimg}  alt=""  />
            
        </div>
        
    </div>
  );
};
export default CateTypeBox;

