"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3673],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return n?a.createElement(m,i(i({ref:t},y),{},{components:n})):a.createElement(m,i({ref:t},y))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Doris",g={unversionedId:"connector-v2/source/Doris",id:"version-2.3.9/connector-v2/source/Doris",title:"Doris",description:"Doris \u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/source/Doris.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Doris",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Doris",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/source/Doris.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"DB2",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/DB2"},next:{title:"Easysearch",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Easysearch"}},o={},p=[{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u5bf9\u4e8e Spark/Flink",id:"\u5bf9\u4e8e-sparkflink",level:3},{value:"\u5bf9\u4e8e SeaTunnel Zeta",id:"\u5bf9\u4e8e-seatunnel-zeta",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u6e90\u9009\u9879",id:"\u6e90\u9009\u9879",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u5355\u8868",id:"\u5355\u8868",level:3},{value:"\u591a\u8868",id:"\u591a\u8868",level:3}],y={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"doris"},"Doris"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Doris \u6e90\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u5217\u6295\u5f71")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u5206\u7247")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u652f\u6301\u591a\u8868\u8bfb"))),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u7528\u4e8e Apache Doris \u7684\u6e90\u8fde\u63a5\u5668\u3002"),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("h3",{id:"\u5bf9\u4e8e-sparkflink"},"\u5bf9\u4e8e Spark/Flink"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," \u5e76\u6dfb\u52a0\u5230\u76ee\u5f55 ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"\u5bf9\u4e8e-seatunnel-zeta"},"\u5bf9\u4e8e SeaTunnel Zeta"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," \u5e76\u6dfb\u52a0\u5230\u76ee\u5f55 ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ec5\u652f\u6301Doris2.0\u53ca\u4ee5\u4e0a\u7248\u672c."),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,r.yg)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"STRING",(0,r.yg)("br",null),"TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"DATETIME(p)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")))),(0,r.yg)("h2",{id:"\u6e90\u9009\u9879"},"\u6e90\u9009\u9879"),(0,r.yg)("p",null,"\u57fa\u7840\u914d\u7f6e:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"FE \u5730\u5740, \u683c\u5f0f\uff1a",(0,r.yg)("inlineCode",{parentName:"td"},'"fe_host:fe_http_port"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42Doris FE\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query-port"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"9030"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris\u67e5\u8be2\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"3600"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris\u626b\u63cf\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u6e05\u5355")))),(0,r.yg)("p",null,"\u8868\u6e05\u5355\u914d\u7f6e:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u8bfb\u53d6\u7684Doris\u8868\u5b57\u6bb5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'\u6570\u636e\u8fc7\u6ee4. \u683c\u5f0f\uff1a"\u5b57\u6bb5 = \u503c", \u4f8b\u5982\uff1adoris.filter.query = "F_ID > 2"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u80fd\u591f\u4eceBE\u4e2d\u8bfb\u53d6\u5230\u7684\u6700\u5927\u884c\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483648"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u4e2abe\u626b\u63cf\u8bf7\u6c42\u53ef\u4ee5\u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u3002\u9ed8\u8ba4\u5185\u5b58\u4e3a2G\uff082147483648\uff09")))),(0,r.yg)("p",null,"\u6ce8\u610f: \u5f53\u6b64\u914d\u7f6e\u5bf9\u5e94\u4e8e\u5355\u4e2a\u8868\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06table_list\u4e2d\u7684\u914d\u7f6e\u9879\u5c55\u5e73\u5230\u5916\u5c42\u3002"),(0,r.yg)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4e0d\u5efa\u8bae\u968f\u610f\u4fee\u6539\u9ad8\u7ea7\u53c2\u6570")),(0,r.yg)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.yg)("h3",{id:"\u5355\u8868"},"\u5355\u8868"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u4e2a\u4ecedoris\u8bfb\u53d6\u6570\u636e\u540e\uff0c\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u7684\u4f8b\u5b50\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource{\n  Doris {\n      fenodes = "doris_e2e:8030"\n      username = root\n      password = ""\n      database = "e2e_source"\n      table = "doris_e2e_table"\n  }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("p",null,"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"doris.read.field"),"\u53c2\u6570\u6765\u9009\u62e9\u9700\u8981\u8bfb\u53d6\u7684Doris\u8868\u5b57\u6bb5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource{\n  Doris {\n      fenodes = "doris_e2e:8030"\n      username = root\n      password = ""\n      database = "e2e_source"\n      table = "doris_e2e_table"\n      doris.read.field = "F_ID,F_INT,F_BIGINT,F_TINYINT,F_SMALLINT"\n  }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("p",null,"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"doris.filter.query"),"\u6765\u8fc7\u6ee4\u6570\u636e\uff0c\u53c2\u6570\u503c\u5c06\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\u76f4\u63a5\u4f20\u9012\u5230doris\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource{\n  Doris {\n      fenodes = "doris_e2e:8030"\n      username = root\n      password = ""\n      database = "e2e_source"\n      table = "doris_e2e_table"\n      doris.filter.query = "F_ID > 2"\n  }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h3",{id:"\u591a\u8868"},"\u591a\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env{\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource{\n  Doris {\n      fenodes = "xxxx:8030"\n      username = root\n      password = ""\n      table_list = [\n          {\n            database = "st_source_0"\n            table = "doris_table_0"\n            doris.read.field = "F_ID,F_INT,F_BIGINT,F_TINYINT"\n            doris.filter.query = "F_ID >= 50"\n          },\n          {\n            database = "st_source_1"\n            table = "doris_table_1"\n          }\n      ]\n  }\n}\n\ntransform {}\n\nsink{\n  Doris {\n      fenodes = "xxxx:8030"\n      schema_save_mode = "RECREATE_SCHEMA"\n      username = root\n      password = ""\n      database = "st_sink"\n      table = "${table_name}"\n      sink.enable-2pc = "true"\n      sink.label-prefix = "test_json"\n      doris.config = {\n          format="json"\n          read_json_by_line="true"\n      }\n  }\n}\n')))}s.isMDXComponent=!0}}]);