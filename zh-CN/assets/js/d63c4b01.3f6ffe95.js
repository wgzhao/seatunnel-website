"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72664],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,y=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[c]="string"==typeof e?e:r,i[1]=g;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="StarRocks",g={unversionedId:"connector-v2/source/StarRocks",id:"connector-v2/source/StarRocks",title:"StarRocks",description:"StarRocks \u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/StarRocks.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/StarRocks",permalink:"/zh-CN/docs/connector-v2/source/StarRocks",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/StarRocks.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQL Server",permalink:"/zh-CN/docs/connector-v2/source/SqlServer"},next:{title:"TDengine",permalink:"/zh-CN/docs/connector-v2/source/TDengine"}},o={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:2},{value:"nodeUrls list",id:"nodeurls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"scan_filter string",id:"scan_filter-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"request_tablet_size int",id:"request_tablet_size-int",level:3},{value:"scan_connect_timeout_ms int",id:"scan_connect_timeout_ms-int",level:3},{value:"scan_query_timeout_sec int",id:"scan_query_timeout_sec-int",level:3},{value:"scan_keep_alive_min int",id:"scan_keep_alive_min-int",level:3},{value:"scan_batch_rows int",id:"scan_batch_rows-int",level:3},{value:"scan_mem_limit long",id:"scan_mem_limit-long",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"scan.params. string",id:"scanparams-string",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"starrocks"},"StarRocks"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"StarRocks \u6e90\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks"),"\u8bfb\u53d6\u5916\u90e8\u6570\u636e\u6e90\u6570\u636e\u3002\n",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks"),"\u6e90\u8fde\u63a5\u5668\u7684\u5185\u90e8\u5b9e\u73b0\u662f\u4ece",(0,r.yg)("inlineCode",{parentName:"p"},"FE"),"\u83b7\u53d6\u67e5\u8be2\u8ba1\u5212\uff0c\n\u5c06\u67e5\u8be2\u8ba1\u5212\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9",(0,r.yg)("inlineCode",{parentName:"p"},"BE"),"\u8282\u70b9\uff0c\u7136\u540e\u4ece",(0,r.yg)("inlineCode",{parentName:"p"},"BE"),"\u8282\u70b9\u83b7\u53d6\u6570\u636e\u7ed3\u679c\u3002"),(0,r.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5217\u6295\u5f71")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u5b9a\u4e49\u62c6\u5206"))),(0,r.yg)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeUrls"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_filter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"request_tablet_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_connect_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"30000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_query_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"3600")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_keep_alive_min"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_batch_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_mem_limit"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483648")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.params.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"nodeurls-list"},"nodeUrls ","[list]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u96c6\u7fa4\u5730\u5740\u914d\u7f6e\u683c\u5f0f ",(0,r.yg)("inlineCode",{parentName:"p"},'["fe_ip:fe_http_port", ...]'),"\u3002"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u7528\u6237\u540d\u79f0\u3002"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u7528\u6237\u5bc6\u7801\u3002"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u6570\u636e\u5e93\u540d\u3002"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u8868\u540d\u3002"),(0,r.yg)("h3",{id:"scan_filter-string"},"scan_filter ","[string]"),(0,r.yg)("p",null,"\u8fc7\u6ee4\u67e5\u8be2\u7684\u8868\u8fbe\u5f0f\uff0c\u8be5\u8868\u8fbe\u5f0f\u900f\u660e\u5730\u4f20\u8f93\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u3002",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"tinyint_1 = 100"\n')),(0,r.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.yg)("p",null,"\u8981\u751f\u6210\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"starRocks"),"\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"schema")),(0,r.yg)("p",null,"\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"schema {\n    fields {\n        name = string\n        age = int\n    }\n  }\n")),(0,r.yg)("h3",{id:"request_tablet_size-int"},"request_tablet_size ","[int]"),(0,r.yg)("p",null,"\u4e0e\u5206\u533a\u5bf9\u5e94\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks tablet"),"\u7684\u6570\u91cf\u3002\u6b64\u503c\u8bbe\u7f6e\u5f97\u8d8a\u5c0f\uff0c\u751f\u6210\u7684\u5206\u533a\u5c31\u8d8a\u591a\u3002\u8fd9\u5c06\u589e\u52a0\u5f15\u64ce\u7684\u5e73\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4e5f\u4f1a\u7ed9",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks"),"\u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\uff0c\u7528\u4e8e\u89e3\u91ca\u5982\u4f55\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"request_tablet_size"),"\u6765\u63a7\u5236\u5206\u533a\u7684\u751f\u6210\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"StarRocks \u96c6\u7fa4\u4e2d\u8868\u7684 tablet \u5206\u5e03\u4f5c\u4e3a follower\n\nbe_node_1 tablet[1, 2, 3, 4, 5]\nbe_node_2 tablet[6, 7, 8, 9, 10]\nbe_node_3 tablet[11, 12, 13, 14, 15]\n\n1.\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e request_tablet_size\uff0c\u5219\u5355\u4e2a\u5206\u533a\u4e2d\u7684 tablet \u6570\u91cf\u5c06\u6ca1\u6709\u9650\u5236\u3002\u5206\u533a\u5c06\u6309\u4ee5\u4e0b\u65b9\u5f0f\u751f\u6210\uff1a\n\npartition[0] \u4ece be_node_1 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[1, 2, 3, 4, 5]\npartition[1] \u4ece be_node_2 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[6, 7, 8, 9, 10]\npartition[2] \u4ece be_node_3 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[11, 12, 13, 14, 15]\n\n2.\u5982\u679c\u8bbe\u7f6e\u4e86 request_tablet_size=3\uff0c\u5219\u6bcf\u4e2a\u5206\u533a\u4e2d\u6700\u591a\u5305\u542b 3 \u4e2a tablet\u3002\u5206\u533a\u5c06\u6309\u4ee5\u4e0b\u65b9\u5f0f\u751f\u6210\n\npartition[0] \u4ece be_node_1 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[1, 2, 3]\npartition[1] \u4ece be_node_1 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[4, 5]\npartition[2] \u4ece be_node_2 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[6, 7, 8]\npartition[3] \u4ece be_node_2 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[9, 10]\npartition[4] \u4ece be_node_3 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[11, 12, 13]\npartition[5] \u4ece be_node_3 \u8bfb\u53d6 tablet \u6570\u636e\uff1atablet[14,15]\n")),(0,r.yg)("h3",{id:"scan_connect_timeout_ms-int"},"scan_connect_timeout_ms ","[int]"),(0,r.yg)("p",null,"\u53d1\u9001\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u7684\u8bf7\u6c42\u8fde\u63a5\u8d85\u65f6\u3002"),(0,r.yg)("h3",{id:"scan_query_timeout_sec-int"},"scan_query_timeout_sec ","[int]"),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u4e2d\uff0c\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u7684\u9ed8\u8ba4\u503c\u4e3a 1 \u5c0f\u65f6\uff0c-1 \u8868\u793a\u6ca1\u6709\u8d85\u65f6\u9650\u5236\u3002"),(0,r.yg)("h3",{id:"scan_keep_alive_min-int"},"scan_keep_alive_min ","[int]"),(0,r.yg)("p",null,"\u67e5\u8be2\u4efb\u52a1\u7684\u4fdd\u6301\u8fde\u63a5\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u5206\u949f\uff0c\u9ed8\u8ba4\u503c\u4e3a 10 \u5206\u949f\u3002\u6211\u4eec\u5efa\u8bae\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a\u5927\u4e8e\u6216\u7b49\u4e8e 5 \u7684\u503c\u3002"),(0,r.yg)("h3",{id:"scan_batch_rows-int"},"scan_batch_rows ","[int]"),(0,r.yg)("p",null,"\u4e00\u6b21\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"BE")," \u8282\u70b9\u8bfb\u53d6\u7684\u6700\u5927\u6570\u636e\u884c\u6570\u3002\u589e\u52a0\u6b64\u503c\u53ef\u4ee5\u51cf\u5c11\u5f15\u64ce\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u4e4b\u95f4\u5efa\u7acb\u7684\u8fde\u63a5\u6570\u91cf\uff0c\u4ece\u800c\u51cf\u8f7b\u7531\u7f51\u7edc\u5ef6\u8fdf\u5f15\u8d77\u7684\u5f00\u9500\u3002"),(0,r.yg)("h3",{id:"scan_mem_limit-long"},"scan_mem_limit ","[long]"),(0,r.yg)("p",null,"\u5355\u4e2a\u67e5\u8be2\u5728 BE \u8282\u70b9\u4e0a\u5141\u8bb8\u7684\u6700\u5927\u5185\u5b58\u7a7a\u95f4\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c\u9ed8\u8ba4\u503c\u4e3a 2147483648 \u5b57\u8282\uff08\u5373 2 GB\uff09\u3002"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"\u53d1\u9001\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," \u7684\u91cd\u8bd5\u8bf7\u6c42\u6b21\u6570\u3002"),(0,r.yg)("h3",{id:"scanparams-string"},"scan.params. ","[string]"),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"BE")," \u8282\u70b9\u626b\u63cf\u6570\u636e\u76f8\u5173\u7684\u53c2\u6570\u3002"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n  StarRocks {\n    nodeUrls = ["starrocks_e2e:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_source"\n    scan_batch_rows = 10\n    max_retries = 3\n    schema {\n        fields {\n           BIGINT_COL = BIGINT\n           LARGEINT_COL = STRING\n           SMALLINT_COL = SMALLINT\n           TINYINT_COL = TINYINT\n           BOOLEAN_COL = BOOLEAN\n           DECIMAL_COL = "DECIMAL(20, 1)"\n           DOUBLE_COL = DOUBLE\n           FLOAT_COL = FLOAT\n           INT_COL = INT\n           CHAR_COL = STRING\n           VARCHAR_11_COL = STRING\n           STRING_COL = STRING\n           DATETIME_COL = TIMESTAMP\n           DATE_COL = DATE\n        }\n    }\n    scan.params.scanner_thread_pool_thread_num = "3"\n    \n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add StarRocks Source Connector")))}d.isMDXComponent=!0}}]);