const ProdTypeList = [
    {
        PTkey: 101,
        PTimg: "./svg/Bed.svg",
        PTindex: 0,
        PTname:"ベッド",
        PTtitle: "BED",
        PTlink: "#bed"
    },
    {
        PTkey: 102,
        PTimg: "./svg/Sofa.svg",
        PTindex: 1,
        PTname:"ソファ",
        PTtitle: "SOFA",
        PTlink: "#sofa"
    },
    {
        PTkey: 103,
        PTimg: "./svg/TV_Stand.svg", 
        PTindex: 2,
        PTname:"テレビ台",
        PTtitle: "TV Stand",
        PTlink: "#tv"
    },
    {
        PTkey: 104,
        PTimg: "./svg/Chair.svg",
        PTindex: 3,
        PTname:"チェア",
        PTtitle: "CHAIR",
        PTlink: "#chair"
    },
    {
        PTkey: 105,
        PTimg: "./svg/Kitchen.svg",
        PTindex: 4,
        PTname:"キッチン収納",
        PTtitle: "KITCHEN CABINET",
        PTlink: "#kitchen"
    },
    {
        PTkey: 106,
        PTimg: "./svg/Cabinet.svg",
        PTindex: 5,
        PTname:"収納家具",
        PTtitle: "CABINET",
        PTlink: "#cabinet"
    },
    {
        PTkey: 107,
        PTimg: "./svg/Dining.svg",
        PTindex: 6,
        PTname:"ダイニング",
        PTtitle: "DINING",
        PTlink: "#dining"
    },
    {
        PTkey: 108,
        PTimg: "./svg/Desk.svg",
        PTindex: 7,
        PTname:"デスク",
        PTtitle: "Desk",
        PTlink: "#desk"
    },
    {
        PTkey: 109,
        PTimg: "./svg/Mirror.svg",
        PTindex: 8,
        PTname:"ミラー・ドレッサー",
        PTtitle: "Mirror",
        PTlink: "#mirror"
    },
    {
        PTkey: 110,
        PTimg: "./svg/Rug.svg",
        PTindex: 9,
        PTname:"ラグ",
        PTtitle: "Rug",
        PTlink: "#rug"
    }
  ];

const NewProdList= [
    {
        NPkey:201,
        NPindex:"0", 
        NPimg:"./img/sofa_n1.jpg",
        NPtitle:"北欧ソファ",
        NPprc:"34,882", 
        NPlink:"#Nsofa"
    },
    {
        NPkey:202,
        NPindex:"1", 
        NPimg:"./img/sofa_antique3.jpg",
        NPtitle:"Vintage std Sofa",
        NPprc:"58,642", 
        NPlink:"#vstdsofa"
    },
    {
        NPkey:203,
        NPindex:"2", 
        NPimg:"./img/sofa_antique.jpg",
        NPtitle:"Vintage cafe style sofa",
        NPprc:"112,400", 
        NPlink:"#vsofa"
    },
    {
        NPkey:204,
        NPindex:"3", 
        NPimg:"./img/bed2.jpg",
        NPtitle:"【半額セール！】棚・コンセント付きフロアベッド 国産カバーポケットコイルマットレス付き シングル ",
        NPprc:"34,882", 
        NPlink:"#fbed"
    }
];

const RecommendList= [
    {
        RDkey:301,
        RDindex:"0", 
        RDimg:"./img/sofa_n1.jpg",
        RDtitle:"北欧ソファ",
        RDprc:"34,882", 
        RDlink:"#Nsofa"
    },
    {
        RDkey:302,
        RDindex:"1", 
        RDimg:"./img/sofa_antique3.jpg",
        RDtitle:"Vintage std Sofa",
        RDprc:"58,642", 
        RDlink:"#vstdsofa"
    },
    {
        RDkey:303,
        RDindex:"2", 
        RDimg:"./img/sofa_antique.jpg",
        RDtitle:"Vintage cafe style sofa",
        RDprc:"112,400", 
        RDlink:"#vsofa"
    },
    {
        RDkey:304,
        RDindex:"3", 
        RDimg:"./img/bed2.jpg",
        RDtitle:"【半額セール！】棚・コンセント付きフロアベッド 国産カバーポケットコイルマットレス付き シングル ",
        RDprc:"34,882", 
        RDlink:"#fbed"
    },
    {
        RDkey:305,
        RDindex:"4", 
        RDimg:"./img/desk1.jpg",
        RDtitle:"ウォールナット北欧デザインローテーブルシリーズ remot. レモット W90",
        RDprc:"11,230", 
        RDlink:"#ndesk"
    },
    {
        RDkey:306,
        RDindex:"5", 
        RDimg:"./img/bed1.jpg",
        RDtitle:"【半額セール！】棚・コンセント付きフロアベッド プレミアムポケットコイルマットレス付き シングル ",
        RDprc:"48,092", 
        RDlink:"#fbed_a"
    },
    {
        RDkey:307,
        RDindex:"6", 
        RDimg:"./img/tv_stand1.jpg",
        RDtitle:"オーク調リビング収納シリーズ olja オリア テレビボード",
        RDprc:"16,299", 
        RDlink:"#tvstand"
    },
    {
        RDkey:308,
        RDindex:"7", 
        RDimg:"./img/rug1.jpg",
        RDtitle:"グラデーションミックスシャギーラグ rayures レイユール 140×200cm(オーバル) ",
        RDprc:"20,758", 
        RDlink:"#rug"
    },
    {
        RDkey:309,
        RDindex:"8", 
        RDimg:"./img/sofa_antique2.jpg",
        RDtitle:"マルチソファベッド LADIE レディエ スツールタイプ",
        RDprc:"60,299", 
        RDlink:"#multisofa"
    },
    {
        RDkey:310,
        RDindex:"9", 
        RDimg:"./img/rug1.jpg",
        RDtitle:"【半額セール！】棚・コンセント付きフロアベッド 国産カバーポケットコイルマットレス付き シングル ",
        RDprc:"58,930", 
        RDlink:"#rug1"
    },
    {
        RDkey:311,
        RDindex:"10", 
        RDimg:"./img/dining1.jpg",
        RDtitle:"ヴィンテージ インダストリアルデザイン ダイニング 5点セット(テーブル+チェア4脚) W150",
        RDprc:"129,335", 
        RDlink:"#rug"
    },
    {
        RDkey:312,
        RDindex:"11", 
        RDimg:"./img/livingroom1.jpg",
        RDtitle:"ヴィンテージスタイル・リビングダイニングセット 5点セット(テーブル+ソファ1脚+アームソファ1脚+チェア1脚+ベンチ1脚) 右アーム W150",
        RDprc:"158,365", 
        RDlink:"#rug"
    },
];
  export{ProdTypeList,NewProdList,RecommendList};