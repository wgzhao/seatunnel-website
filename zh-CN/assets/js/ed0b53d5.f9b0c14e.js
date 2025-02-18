"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65855],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,c=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return n?a.createElement(c,l(l({ref:t},g),{},{components:n})):a.createElement(c,l({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},l=void 0,o={unversionedId:"configuration/output-plugins/Elasticsearch",id:"version-1.x/configuration/output-plugins/Elasticsearch",title:"Elasticsearch",description:"Output plugin : Elasticsearch",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/Elasticsearch.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Elasticsearch",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/Elasticsearch",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/Elasticsearch.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/Clickhouse"},next:{title:"File",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/File"}},s={},p=[{value:"Output plugin : Elasticsearch",id:"output-plugin--elasticsearch",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"hosts array",id:"hosts-array",level:5},{value:"index_type string",id:"index_type-string",level:5},{value:"index_time_format string",id:"index_time_format-string",level:5},{value:"index string",id:"index-string",level:5},{value:"es.* string",id:"es-string",level:5},{value:"Examples",id:"examples",level:3}],g={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"output-plugin--elasticsearch"},"Output plugin : Elasticsearch"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,r.yg)("li",{parentName:"ul"},"Homepage: ",(0,r.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,r.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to Elasticsearch. Support Elasticsearch >= 2.X"),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hosts-array"},"hosts")),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#index_type-string"},"index_type")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"_doc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#index_time_format-string"},"index_time_format")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"yyyy.MM.dd")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#index-string"},"index")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"seatunnel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#es-string"},"es")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h5",{id:"hosts-array"},"hosts ","[array]"),(0,r.yg)("p",null,"Elasticsearch hosts, format as ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port"),". For example, ",(0,r.yg)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]')),(0,r.yg)("h5",{id:"index_type-string"},"index_type ","[string]"),(0,r.yg)("p",null,"Elasticsearch index type"),(0,r.yg)("h5",{id:"index_time_format-string"},"index_time_format ","[string]"),(0,r.yg)("p",null,"Elasticsearch time format. If ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," likes ",(0,r.yg)("inlineCode",{parentName:"p"},"xxxx-${now}"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"index_time_format")," can be used to specify the format of index, default is ",(0,r.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd"),". The commonly used time formats are listed below:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"Year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"Month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"m"),(0,r.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,r.yg)("p",null,"The detailed time format syntax:",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"."),(0,r.yg)("h5",{id:"index-string"},"index ","[string]"),(0,r.yg)("p",null,"Elasticsearch index name, if you want to generate index based on time, you need to specify the field like ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-${now}"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"now")," means current time."),(0,r.yg)("h5",{id:"es-string"},"es.* ","[string]"),(0,r.yg)("p",null,"You can also specify multiple Elasticsearch's parameters described in ","[Elasticsearch Configuration]","(",(0,r.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"},"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"),"."),(0,r.yg)("p",null,'The way to specify parameters is to use the prefix "es" before the parameter. For example, ',(0,r.yg)("inlineCode",{parentName:"p"},"batch.size.entries")," is specified as: ",(0,r.yg)("inlineCode",{parentName:"p"},"es.batch.size.entries = 1000"),".If you do not specify these parameters, it will be set the default values according to Elasticsearch documentation"),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel"\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Index name is ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-${now}"\n    es.batch.size.entries = 100000\n    index_time_format = "yyyy.MM.dd"\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Create index by day. For example: ",(0,r.yg)("strong",{parentName:"p"},"seatunnel-2017.11.03"))))}y.isMDXComponent=!0}}]);