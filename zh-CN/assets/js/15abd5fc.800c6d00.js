"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[776],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=y(e,["components","mdxType","originalType","parentName"]),s=p(t),c=r,d=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return t?a.createElement(d,i(i({ref:n},g),{},{components:t})):a.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var y={};for(var o in n)hasOwnProperty.call(n,o)&&(y[o]=n[o]);y.originalType=e,y[s]="string"==typeof e?e:r,i[1]=y;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={},i="Typesense",y={unversionedId:"connector-v2/sink/Typesense",id:"version-2.3.9/connector-v2/sink/Typesense",title:"Typesense",description:"\u63cf\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/sink/Typesense.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Typesense",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/Typesense",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/sink/Typesense.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Tablestore",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/Tablestore"},next:{title:"Vertica",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/Vertica"}},o={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"collection string",id:"collection-string",level:3},{value:"primary_keys array",id:"primary_keys-array",level:3},{value:"key_delimiter string",id:"key_delimiter-string",level:3},{value:"api_key config",id:"api_key-config",level:3},{value:"max_retry_count int",id:"max_retry_count-int",level:3},{value:"max_batch_size int",id:"max_batch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"schema_save_mode",id:"schema_save_mode",level:3},{value:"data_save_mode",id:"data_save_mode",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],g={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"typesense"},"Typesense"),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u8f93\u51fa\u6570\u636e\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Typesense")),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"_"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,r.yg)("p",null,"Typesense\u7684\u8bbf\u95ee\u5730\u5740\uff0c\u683c\u5f0f\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port"),"\uff0c\u4f8b\u5982\uff1a",'["typesense-01:8108"]'),(0,r.yg)("h3",{id:"collection-string"},"collection ","[string]"),(0,r.yg)("p",null,"\u8981\u5199\u5165\u7684\u96c6\u5408\u540d\uff0c\u4f8b\u5982\uff1a\u201cseatunnel\u201d"),(0,r.yg)("h3",{id:"primary_keys-array"},"primary_keys ","[array]"),(0,r.yg)("p",null,"\u4e3b\u952e\u5b57\u6bb5\u7528\u4e8e\u751f\u6210\u6587\u6863 ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\u3002"),(0,r.yg)("h3",{id:"key_delimiter-string"},"key_delimiter ","[string]"),(0,r.yg)("p",null,"\u8bbe\u5b9a\u590d\u5408\u952e\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"_"),"\uff09\u3002"),(0,r.yg)("h3",{id:"api_key-config"},"api_key ","[config]"),(0,r.yg)("p",null,"typesense \u5b89\u5168\u8ba4\u8bc1\u7684 api_key\u3002"),(0,r.yg)("h3",{id:"max_retry_count-int"},"max_retry_count ","[int]"),(0,r.yg)("p",null,"\u6279\u6b21\u6279\u91cf\u8bf7\u6c42\u6700\u5927\u5c1d\u8bd5\u5927\u5c0f"),(0,r.yg)("h3",{id:"max_batch_size-int"},"max_batch_size ","[int]"),(0,r.yg)("p",null,"\u6279\u6b21\u6279\u91cf\u6587\u6863\u6700\u5927\u5927\u5c0f"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/connector-v2/sink-common-options"},"Sink\u5e38\u7528\u9009\u9879")," \u4e86\u89e3\u8be6\u60c5"),(0,r.yg)("h3",{id:"schema_save_mode"},"schema_save_mode"),(0,r.yg)("p",null,"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u4fa7\u5df2\u6709\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848",(0,r.yg)("br",null),"\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u4f1a\u5220\u9664\u5e76\u91cd\u5efa",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u5219\u8df3\u8fc7\u521b\u5efa",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u5c06\u629b\u51fa\u9519\u8bef",(0,r.yg)("br",null)),(0,r.yg)("h3",{id:"data_save_mode"},"data_save_mode"),(0,r.yg)("p",null,"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u4fa7\u5df2\u5b58\u5728\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848",(0,r.yg)("br",null),"\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a \u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u5220\u9664\u6570\u636e",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1a\u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4fdd\u7559\u6570\u636e",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1a\u5f53\u6709\u6570\u636e\u65f6\u629b\u51fa\u9519\u8bef",(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u7b80\u5355\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Typesense {\n        plugin_input = "typesense_test_table"\n        hosts = ["localhost:8108"]\n        collection = "typesense_to_typesense_sink_with_query"\n        max_retry_count = 3\n        max_batch_size = 10\n        api_key = "xyz"\n        primary_keys = ["num_employees","id"]\n        key_delimiter = "="\n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode = "APPEND_DATA"\n      }\n}\n')))}m.isMDXComponent=!0}}]);