(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{696:function(e,n,t){Promise.resolve().then(t.t.bind(t,3222,23)),Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,2721)),Promise.resolve().then(t.t.bind(t,9193,23))},2721:function(e,n,t){"use strict";t.r(n),t.d(n,{EconomyGold:function(){return o},EconomyGoldHead:function(){return d}});var i=t(230),l=t(7437),s=t(802);t(6691),t(1396);var r=t(4265);function c(){let e=(0,i._)(["\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    padding: ",";\n    border-radius: ",";\n    margin-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: ",";\n\n    .img-area {\n        width: 150px;\n        height: 120px;\n        /* border: 1px solid black; */\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .content {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        padding: 10px;\n        cursor: pointer;\n        /* border: 1px solid red; */\n\n        .title {\n            font-size: 20px;\n            font-weight: bold;\n        }\n        .description {}\n        .date {\n            width: 100%;\n            text-align: right;\n        }\n    }\n\n    .gold-wrapper {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n\n        .col {\n            width: 100px;\n            height: 50px;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n            align-items: center;\n        }\n\n        .variety {\n            justify-content: center;\n        }\n\n        .totalvol {\n            width: 150px;\n        }\n\n        .time {\n            width: 250px;\n            justify-content: center;\n        }\n    }\n\n    .future-wrapper {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n\n        .col {\n            width: 90px;\n            height: 50px;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n            align-items: center;\n        }\n\n        .name {\n            width: 100px;\n            justify-content: center;\n        }\n\n        .change {\n            justify-content: center;\n        }\n        .buyvol {\n            justify-content: center;\n        }\n        .sellvol {\n            justify-content: center;\n        }\n\n        .time {\n            width: 250px;\n            justify-content: center;\n        }\n    }\n"]);return c=function(){return e},e}t(6457);let a=s.ZP.div.withConfig({componentId:"sc-6c5b7025-0"})(c(),e=>e.$head?"25px":"20px",e=>e.$head?"bold":"normal",e=>e.$head?"white":"black",e=>e.$head?"10px":"0",e=>e.$head?"4px":"0",e=>e.$backgroundColor),o=e=>{let{params:n,item:t,index:i}=e,{id:s=""}=n,{preId:c,subId:o}=(0,r.P)(s),d="pink";if(3===o&&(d="orange"),i%2==0&&(d="white"),2===o){let{variety:e,latestpri:n,openpri:i,maxpri:s,minpri:r,limit:c,yespri:o,totalvol:u,time:h}=t;return(0,l.jsx)(a,{$backgroundColor:d,children:(0,l.jsxs)("div",{className:"gold-wrapper",children:[(0,l.jsx)("div",{className:"col variety",children:e}),(0,l.jsx)("div",{className:"col latestpri",children:n}),(0,l.jsx)("div",{className:"col openpri",children:i}),(0,l.jsx)("div",{className:"col maxpri",children:s}),(0,l.jsx)("div",{className:"col minpri",children:r}),(0,l.jsx)("div",{className:"col limit",children:c}),(0,l.jsx)("div",{className:"col yespri",children:o}),(0,l.jsx)("div",{className:"col totalvol",children:u}),(0,l.jsx)("div",{className:"col time",children:h})]})})}if(3===o){let{name:e,latestpri:n,change:i,buypri:s,buyvol:r,sellpri:c,sellvol:o,tradvol:u,open:h,lastclear:x,maxpri:f,minpri:m,position:p,zengcang:v,time:j}=t;return(0,l.jsx)(a,{$backgroundColor:d,children:(0,l.jsxs)("div",{className:"future-wrapper",children:[(0,l.jsx)("div",{className:"col name",children:e}),(0,l.jsx)("div",{className:"col latestpri",children:n}),(0,l.jsx)("div",{className:"col change",children:i}),(0,l.jsx)("div",{className:"col buypri",children:s}),(0,l.jsx)("div",{className:"col buyvol",children:r}),(0,l.jsx)("div",{className:"col sellpri",children:c}),(0,l.jsx)("div",{className:"col sellvol",children:o}),(0,l.jsx)("div",{className:"col tradvol",children:u}),(0,l.jsx)("div",{className:"col position",children:p}),(0,l.jsx)("div",{className:"col time",children:j})]})})}return null},d=e=>{let{params:n}=e,{id:t=""}=n,{preId:i,subId:s}=(0,r.P)(t),c="black";return 2===s?(0,l.jsx)(a,{$backgroundColor:c,$head:1,children:(0,l.jsxs)("div",{className:"gold-wrapper",children:[(0,l.jsx)("div",{className:"col variety",children:"品种"}),(0,l.jsx)("div",{className:"col latestpri",children:"最新价"}),(0,l.jsx)("div",{className:"col openpri",children:"开盘价"}),(0,l.jsx)("div",{className:"col maxpri",children:"最高价"}),(0,l.jsx)("div",{className:"col minpri",children:"最低价"}),(0,l.jsx)("div",{className:"col limit",children:"涨跌幅"}),(0,l.jsx)("div",{className:"col yespri",children:"昨收价"}),(0,l.jsx)("div",{className:"col totalvol",children:"总成交量"}),(0,l.jsx)("div",{className:"col time",children:"更新时间"})]})}):3===s?(0,l.jsx)(a,{$backgroundColor:c,$head:1,children:(0,l.jsxs)("div",{className:"future-wrapper",children:[(0,l.jsx)("div",{className:"col name",children:"名称"}),(0,l.jsx)("div",{className:"col latestpri",children:"最新价"}),(0,l.jsx)("div",{className:"col change",children:"涨跌"}),(0,l.jsx)("div",{className:"col buypri",children:"买价"}),(0,l.jsx)("div",{className:"col buyvol",children:"买量"}),(0,l.jsx)("div",{className:"col sellpri",children:"卖价"}),(0,l.jsx)("div",{className:"col sellvol",children:"卖量"}),(0,l.jsx)("div",{className:"col tradvol",children:"成交量"}),(0,l.jsx)("div",{className:"col position",children:"持仓量"}),(0,l.jsx)("div",{className:"col time",children:"更新时间"})]})}):null};n.default=e=>{let{params:n,item:t}=e,{href:i,image:s,title:r,description:c,date:o}=t,d=e=>{window.open(e,"_blank")},u=o;if(-1!==o.indexOf("-")){let e=o.split("-");u=null==e?void 0:e[1]}return(0,l.jsxs)(a,{children:[(0,l.jsx)("div",{className:"img-area",children:(0,l.jsx)("img",{src:s,alt:r,width:"150",height:"100"})}),(0,l.jsxs)("div",{className:"content",onClick:()=>d(i),children:[(0,l.jsx)("div",{className:"title",children:r}),(0,l.jsx)("div",{className:"description",children:c}),(0,l.jsx)("div",{className:"date",children:u})]})]})}},1295:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{default:function(){return o},unstable_getImgProps:function(){return a}});let i=t(1024),l=t(2301),s=t(7873),r=t(3222),c=i._(t(5033)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:n}=(0,l.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next13-skeleton-app/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(n))void 0===t&&delete n[e];return{props:n}},o=r.Image},4265:function(e,n,t){"use strict";t.d(n,{P:function(){return i}});let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=0,t=0;if(""!==e){if(-1!==e.indexOf("-")){let i=e.split("-");n=parseInt(null==i?void 0:i[0],10),t=parseInt(null==i?void 0:i[1],10)}else -1===e.indexOf("%")&&(n=parseInt(e,10))}return{preId:n,subId:t}}},6457:function(e,n,t){"use strict";t.d(n,{O9:function(){return h}});let i=e=>{switch(e){case 1:return"股票";case 2:return"经济";case 3:case 4:case 5:return""}},l=(e,n)=>{if(1===e)switch(n){case 1:return"沪深";case 2:return"港股";case 3:return"美股";case 4:return"沪深卡片";case 5:return"港股卡片";case 6:return"美股卡片"}else if(2===e)switch(n){case 1:return"财情";case 2:return"黄金";case 3:return"期货"}return""},s=(e,n)=>{let t="";switch(e){case 1:case 2:case 3:case 4:case 5:t=l(e,n)}return""!==t?i(e)+" - "+t:""},r=[],c={},a=[],o=[],d=0,u=0;r.push({href:"/stock/1",text:i(1)}),c[0]=[];for(let e=0;e<6;e++)u=e+1,c[0].push({href:"/stock/1-"+u,text:s(1,u)});r.push({href:"/economy/2",text:i(2)}),c[1]=[];for(let e=0;e<6;e++)u=e+1,c[1].push({href:"/economy/2-"+u,text:s(2,u)});for(let e=2;e<5;e++){d=e+1,r.push({href:"/menu/"+d,text:i(d)}),c[e]=[];for(let n=0;n<6;n++)u=n+1,c[e].push({href:"/menu/"+d+"-"+u,text:s(d,u)})}for(let e=0;e<10;e++)a.push({href:"/footer/"+(d=e+1),text:"footer"+d});for(let e=0;e<20;e++)o.push({tag:"p",text:"welcome to my site "+(d=e+1)});let h=["white","deeppink","burlywood","red","pink","orange","orangered"]},9193:function(){},6691:function(e,n,t){t(1295)},1396:function(e,n,t){t(6685)},230:function(e,n,t){"use strict";function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{_:function(){return i}})}},function(e){e.O(0,[685,946,222,971,596,744],function(){return e(e.s=696)}),_N_E=e.O()}]);