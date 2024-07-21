"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2358],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),s=l,g=m["".concat(p,".").concat(s)]||m[s]||y[s]||r;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11121:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=a(58168),l=(a(96540),a(15680));const r={},i="Sink \u53c2\u6570\u5360\u4f4d\u7b26",o={unversionedId:"concept/sink-options-placeholders",id:"concept/sink-options-placeholders",title:"Sink \u53c2\u6570\u5360\u4f4d\u7b26",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/sink-options-placeholders.md",sourceDirName:"concept",slug:"/concept/sink-options-placeholders",permalink:"/zh-CN/docs/concept/sink-options-placeholders",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/sink-options-placeholders.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u5360\u4f4d\u7b26\u53d8\u91cf",id:"\u5360\u4f4d\u7b26\u53d8\u91cf",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u793a\u4f8b 1",id:"\u914d\u7f6e\u793a\u4f8b-1",level:3},{value:"\u914d\u7f6e\u793a\u4f8b 2",id:"\u914d\u7f6e\u793a\u4f8b-2",level:3}],c={toc:u},m="wrapper";function y(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sink-\u53c2\u6570\u5360\u4f4d\u7b26"},"Sink \u53c2\u6570\u5360\u4f4d\u7b26"),(0,l.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.yg)("p",null,"SeaTunnel \u63d0\u4f9b\u4e86 Sink \u53c2\u6570\u5360\u4f4d\u7b26\u81ea\u52a8\u66ff\u6362\u529f\u80fd\uff0c\u53ef\u8ba9\u60a8\u901a\u8fc7\u5360\u4f4d\u7b26\u83b7\u53d6\u4e0a\u6e38\u8868\u5143\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u5f53\u60a8\u9700\u8981\u52a8\u6001\u83b7\u53d6\u4e0a\u6e38\u8868\u5143\u6570\u636e\uff08\u4f8b\u5982\u591a\u8868\u5199\u5165\uff09\u65f6\uff0c\u6b64\u529f\u80fd\u81f3\u5173\u91cd\u8981\u3002"),(0,l.yg)("p",null,"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u5360\u4f4d\u7b26\u4ee5\u53ca\u5982\u4f55\u6709\u6548\u5730\u5229\u7528\u5b83\u4eec\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSpark",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u5360\u4f4d\u7b26\u53d8\u91cf"},"\u5360\u4f4d\u7b26\u53d8\u91cf"),(0,l.yg)("p",null,"\u5360\u4f4d\u7b26\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u8868\u8fbe\u5f0f\u5b9e\u73b0:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${database_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684\u6570\u636e\u5e93\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u6307\u5b9a\u9ed8\u8ba4\u503c\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${database_name:default_my_db}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684 schema \u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u6307\u5b9a\u9ed8\u8ba4\u503c\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name:default_my_schema}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684 table \u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u6307\u5b9a\u9ed8\u8ba4\u503c\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${table_name:default_my_table}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684 schema \u5168\u8def\u5f84\u540d\u79f0\uff0c\u5305\u542b database/schema \u540d\u79f0"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684 table \u5168\u8def\u5f84\u540d\u79f0\uff0c\u5305\u542b database/schema/table \u540d\u79f0"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${primary_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684\u4e3b\u952e\u5b57\u6bb5\u540d\u79f0\u5217\u8868"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${unique_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684\u552f\u4e00\u952e\u5b57\u6bb5\u540d\u79f0\u5217\u8868"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${field_names}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u8868\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\u540d\u79f0\u5217\u8868")))),(0,l.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"\u5148\u51b3\u6761\u4ef6"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u786e\u8ba4 Sink \u8fde\u63a5\u5668\u5df2\u7ecf\u652f\u6301\u4e86 ",(0,l.yg)("inlineCode",{parentName:"li"},"TableSinkFactory")," API")),(0,l.yg)("h3",{id:"\u914d\u7f6e\u793a\u4f8b-1"},"\u914d\u7f6e\u793a\u4f8b 1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  MySQL-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${database_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("h3",{id:"\u914d\u7f6e\u793a\u4f8b-2"},"\u914d\u7f6e\u793a\u4f8b 2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  Oracle-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${schema_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("p",null,"\u5360\u4f4d\u7b26\u7684\u66ff\u6362\u5c06\u5728\u8fde\u63a5\u5668\u542f\u52a8\u4e4b\u524d\u5b8c\u6210\uff0c\u786e\u4fdd Sink \u53c2\u6570\u5728\u4f7f\u7528\u524d\u5df2\u51c6\u5907\u5c31\u7eea\u3002\n\u82e5\u8be5\u5360\u4f4d\u7b26\u53d8\u91cf\u6ca1\u6709\u88ab\u66ff\u6362\uff0c\u5219\u53ef\u80fd\u662f\u4e0a\u6e38\u8868\u5143\u6570\u636e\u7f3a\u5c11\u8be5\u9009\u9879\uff0c\u4f8b\u5982\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysql")," source \u8fde\u63a5\u5668\u4e0d\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}")," \u5143\u6570\u636e"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"oracle")," source \u8fde\u63a5\u5668\u4e0d\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"li"},"${databse_name}")," \u5143\u6570\u636e"),(0,l.yg)("li",{parentName:"ul"},"...")))}y.isMDXComponent=!0}}]);