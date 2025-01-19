"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[41008],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),s=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(g.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,d=m["".concat(g,".").concat(c)]||m[c]||u[c]||l;return a?t.createElement(d,o(o({ref:n},p),{},{components:a})):t.createElement(d,o({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27544:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const l={},o="Kafka",i={unversionedId:"connector-v2/source/Kafka",id:"version-2.3.9/connector-v2/source/Kafka",title:"Kafka",description:"Kafka \u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/source/Kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Kafka",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Kafka",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/source/Kafka.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Jira",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Jira"},next:{title:"Kingbase",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Kingbase"}},g={},s=[{value:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6e90\u9009\u9879",id:"\u6e90\u9009\u9879",level:2},{value:"debezium_record_table_filter",id:"debezium_record_table_filter",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3b\u9898",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3b\u9898",level:3},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3},{value:"Kerberos \u8ba4\u8bc1\u793a\u4f8b",id:"kerberos-\u8ba4\u8bc1\u793a\u4f8b",level:3},{value:"\u591a Kafka \u6e90\u793a\u4f8b",id:"\u591a-kafka-\u6e90\u793a\u4f8b",level:3},{value:"Protobuf\u914d\u7f6e",id:"protobuf\u914d\u7f6e",level:3}],p={toc:s},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kafka \u6e90\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"},"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),(0,r.yg)("br",{parentName:"p"}),"\n","Flink",(0,r.yg)("br",null),(0,r.yg)("br",{parentName:"p"}),"\n","Seatunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u5217\u6295\u5f71")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u5b9a\u4e49\u62c6\u5206"))),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u7528\u4e8e Apache Kafka \u7684\u6e90\u8fde\u63a5\u5668\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.yg)("p",null,"\u4f7f\u7528 Kafka \u8fde\u63a5\u5668\u9700\u8981\u4ee5\u4e0b\u4f9d\u8d56\u9879\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u901a\u8fc7 install-plugin.sh \u4e0b\u8f7d\u6216\u4ece Maven \u4e2d\u592e\u4ed3\u5e93\u83b7\u53d6\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven \u4e0b\u8f7d\u94fe\u63a5"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"\u901a\u7528\u7248\u672c"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-kafka"},"\u4e0b\u8f7d"))))),(0,r.yg)("h2",{id:"\u6e90\u9009\u9879"},"\u6e90\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8868\u4f5c\u4e3a\u6570\u636e\u6e90\u65f6\u8981\u8bfb\u53d6\u6570\u636e\u7684\u4e3b\u9898\u540d\u79f0\u3002\u5b83\u4e5f\u652f\u6301\u901a\u8fc7\u9017\u53f7\u5206\u9694\u7684\u591a\u4e2a\u4e3b\u9898\u5217\u8868\uff0c\u4f8b\u5982 'topic-1,topic-2'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3b\u9898\u5217\u8868\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u540c\u65f6\u914d\u7f6e\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"td"},"table_list")," \u548c\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"td"},"topic"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9017\u53f7\u5206\u9694\u7684 Kafka brokers \u5217\u8868\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"td"},"pattern")," \u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u6307\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5e76\u8ba2\u9605\u4e3b\u9898\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Kafka \u6d88\u8d39\u8005\u7ec4 ID"),"\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u7ec4\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a true\uff0c\u6d88\u8d39\u8005\u7684\u504f\u79fb\u91cf\u5c06\u4f1a\u5b9a\u671f\u5728\u540e\u53f0\u63d0\u4ea4\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"kafka\u4e3b\u52a8\u62c9\u53d6\u65f6\u95f4\u95f4\u9694(\u6beb\u79d2)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kafka.config"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9664\u4e86\u4e0a\u8ff0\u5fc5\u8981\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u975e\u5f3a\u5236\u7684\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u53c2\u6570\uff0c\u8986\u76d6 ",(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"Kafka \u5b98\u65b9\u6587\u6863")," \u4e2d\u6307\u5b9a\u7684\u6240\u6709\u6d88\u8d39\u8005\u53c2\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u7ed3\u6784\uff0c\u5305\u62ec\u5b57\u6bb5\u540d\u79f0\u548c\u5b57\u6bb5\u7c7b\u578b\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u4e3a json\u3002\u53ef\u9009\u683c\u5f0f\u5305\u62ec text, canal_json, debezium_json, ogg_json, maxwell_json, avro \u548c protobuf\u3002\u9ed8\u8ba4\u5b57\u6bb5\u5206\u9694\u7b26\u4e3a ", "\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u6dfb\u52a0 "field_delimiter" \u9009\u9879\u3002\u5982\u679c\u4f7f\u7528 canal \u683c\u5f0f\uff0c\u8bf7\u53c2\u8003 ',(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.9/connector-v2/formats/canal-json"},"canal-json")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002\u5982\u679c\u4f7f\u7528 debezium \u683c\u5f0f\uff0c\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.9/connector-v2/formats/debezium-json"},"debezium-json"),"\u3002\u4e00\u4e9bFormat\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"td",href:"../formats"},"formats"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f\u9519\u8bef\u7684\u5904\u7406\u65b9\u5f0f\u3002\u9ed8\u8ba4\u503c\u4e3a fail\uff0c\u53ef\u9009\u503c\u4e3a fail \u548c skip\u3002\u5f53\u9009\u62e9 fail \u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u5c06\u963b\u585e\u5e76\u629b\u51fa\u5f02\u5e38\u3002\u5f53\u9009\u62e9 skip \u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u5c06\u8df3\u8fc7\u6b64\u884c\u6570\u636e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium_record_table_filter"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fc7\u6ee4 debezium \u683c\u5f0f\u7684\u6570\u636e\uff0c\u4ec5\u5f53\u683c\u5f0f\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium_json")," \u65f6\u4f7f\u7528\u3002\u8bf7\u53c2\u9605\u4e0b\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium_record_table_filter"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"StartMode","[earliest]",",","[group_offsets]"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"group_offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u7684\u521d\u59cb\u6d88\u8d39\u6a21\u5f0f\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e specific_offsets \u6d88\u8d39\u6a21\u5f0f\u7684\u504f\u79fb\u91cf\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'\u7528\u4e8e "timestamp" \u6d88\u8d39\u6a21\u5f0f\u7684\u65f6\u95f4\u3002')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition-discovery.interval-millis"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u52a8\u6001\u53d1\u73b0\u4e3b\u9898\u548c\u5206\u533a\u7684\u95f4\u9694\u65f6\u95f4\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.9/connector-v2/source-common-options"},"Source Common Options"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"protobuf_message_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u683c\u5f0f\u8bbe\u7f6e\u4e3a protobuf \u65f6\u6709\u6548\uff0c\u6307\u5b9a\u6d88\u606f\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"protobuf_schema"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u683c\u5f0f\u8bbe\u7f6e\u4e3a protobuf \u65f6\u6709\u6548\uff0c\u6307\u5b9a Schema \u5b9a\u4e49\u3002")))),(0,r.yg)("h3",{id:"debezium_record_table_filter"},"debezium_record_table_filter"),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"debezium_record_table_filter")," \u6765\u8fc7\u6ee4 debezium \u683c\u5f0f\u7684\u6570\u636e\u3002\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'debezium_record_table_filter {\n  database_name = "test"\n  schema_name = "public" // null \u5982\u679c\u4e0d\u5b58\u5728\n  table_name = "products"\n}\n')),(0,r.yg)("p",null,"\u53ea\u6709 ",(0,r.yg)("inlineCode",{parentName:"p"},"test.public.products")," \u8868\u7684\u6570\u636e\u5c06\u88ab\u6d88\u8d39\u3002"),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u8bfb\u53d6 Kafka \u7684 topic_1\u3001topic_2 \u548c topic_3 \u7684\u6570\u636e\u5e76\u5c06\u5176\u6253\u5370\u5230\u5ba2\u6237\u7aef\u3002\u5982\u679c\u5c1a\u672a\u5b89\u88c5\u548c\u90e8\u7f72 SeaTunnel\uff0c\u8bf7\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/start-v2/locally/deployment"},"\u5b89\u88c5\u6307\u5357")," \u8fdb\u884c\u5b89\u88c5\u548c\u90e8\u7f72\u3002\u7136\u540e\uff0c\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/start-v2/locally/quick-start-seatunnel-engine"},"\u5feb\u901f\u5f00\u59cb")," \u8fd0\u884c\u6b64\u4efb\u52a1\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'# \u5b9a\u4e49\u8fd0\u884c\u73af\u5883\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource {\n  Kafka {\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#"\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.servers = "localhost:9092"\n    kafka.config = {\n      client.id = client_1\n      max.poll.records = 500\n      auto.offset.reset = "earliest"\n      enable.auto.commit = "false"\n    }\n  }  \n}\nsink {\n  Console {}\n}\n')),(0,r.yg)("h3",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3b\u9898"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3b\u9898"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,r.yg)("p",null,"\u5c06\u4ee5\u4e0b ",(0,r.yg)("inlineCode",{parentName:"p"},"${username}")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"${password}")," \u66ff\u6362\u4e3a AWS MSK \u4e2d\u7684\u914d\u7f6e\u503c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9096,xxx.amazonaws.com.cn:9096,xxxx.amazonaws.com.cn:9096"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_SSL\n            sasl.mechanism=SCRAM-SHA-512\n            sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"\u6b64\u5904")," \u4e0b\u8f7d ",(0,r.yg)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," \u5e76\u5c06\u5176\u653e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," \u76ee\u5f55\u4e0b\u3002"),(0,r.yg)("p",null,"\u786e\u4fdd IAM \u7b56\u7565\u4e2d\u5305\u542b ",(0,r.yg)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect"')," \u6743\u9650\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,r.yg)("p",null,"\u6e90\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9098,xxx.amazonaws.com.cn:9098,xxxx.amazonaws.com.cn:9098"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_SSL\n            sasl.mechanism=AWS_MSK_IAM\n            sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"kerberos-\u8ba4\u8bc1\u793a\u4f8b"},"Kerberos \u8ba4\u8bc1\u793a\u4f8b"),(0,r.yg)("p",null,"\u6e90\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "127.0.0.1:9092"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_PLAINTEXT\n            sasl.kerberos.service.name=kafka\n            sasl.mechanism=GSSAPI\n            java.security.krb5.conf="/etc/krb5.conf"\n            sasl.jaas.config="com.sun.security.auth.module.Krb5LoginModule required \\n        useKeyTab=true \\n        storeKey=true  \\n        keyTab=\\"/path/to/xxx.keytab\\" \\n        principal=\\"user@xxx.com\\";"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"\u591a-kafka-\u6e90\u793a\u4f8b"},"\u591a Kafka \u6e90\u793a\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6839\u636e\u4e0d\u540c\u7684 Kafka \u4e3b\u9898\u548c\u683c\u5f0f\u89e3\u6790\u6570\u636e\uff0c\u5e76\u57fa\u4e8e ID \u6267\u884c upsert \u64cd\u4f5c\u3002")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f: Kafka\u662f\u4e00\u4e2a\u975e\u7ed3\u6784\u5316\u6570\u636e\u6e90\uff0c\u5e94\u8be5\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"tables_configs"),"\uff0c\u5c06\u6765\u4f1a\u5220\u9664",(0,r.yg)("inlineCode",{parentName:"p"},"table_list"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafka_e2e:9092"\n    tables_configs = [\n      {\n        topic = "^test-ogg-sou.*"\n        pattern = "true"\n        consumer.group = "ogg_multi_group"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = ogg_json\n      },\n      {\n        topic = "test-cdc_mds"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = canal_json\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://postgresql:5432/test?loggerLevel=OFF"\n    user = test\n    password = test\n    generate_sink_sql = true\n    database = test\n    table = public.sink\n    primary_keys = ["id"]\n  }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n   \n\n bootstrap.servers = "kafka_e2e:9092"\n    table_list = [\n      {\n        topic = "^test-ogg-sou.*"\n        pattern = "true"\n        consumer.group = "ogg_multi_group"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = ogg_json\n      },\n      {\n        topic = "test-cdc_mds"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = canal_json\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://postgresql:5432/test?loggerLevel=OFF"\n    user = test\n    password = test\n    generate_sink_sql = true\n    database = test\n    table = public.sink\n    primary_keys = ["id"]\n  }\n}\n')),(0,r.yg)("h3",{id:"protobuf\u914d\u7f6e"},"Protobuf\u914d\u7f6e"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"format")," \u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf"),"\uff0c\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf"),"\u6570\u636e\u7ed3\u6784\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf_message_name"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf_schema"),"\u53c2\u6570"),(0,r.yg)("p",null,"\u4f7f\u7528\u6837\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Kafka {\n    topic = "test_protobuf_topic_fake_source"\n    format = protobuf\n    protobuf_message_name = Person\n    protobuf_schema = """\n              syntax = "proto3";\n\n              package org.apache.seatunnel.format.protobuf;\n\n              option java_outer_classname = "ProtobufE2E";\n\n              message Person {\n                int32 c_int32 = 1;\n                int64 c_int64 = 2;\n                float c_float = 3;\n                double c_double = 4;\n                bool c_bool = 5;\n                string c_string = 6;\n                bytes c_bytes = 7;\n\n                message Address {\n                  string street = 1;\n                  string city = 2;\n                  string state = 3;\n                  string zip = 4;\n                }\n\n                Address address = 8;\n\n                map<string, float> attributes = 9;\n\n                repeated string phone_numbers = 10;\n              }\n              """\n    bootstrap.servers = "kafkaCluster:9092"\n    start_mode = "earliest"\n    plugin_output = "kafka_table"\n  }\n}\n')))}u.isMDXComponent=!0}}]);