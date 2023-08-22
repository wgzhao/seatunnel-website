"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[30862],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45538:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="Neo4j",c={unversionedId:"connector-v2/source/Neo4j",id:"version-2.3.3/connector-v2/source/Neo4j",title:"Neo4j",description:"Neo4j source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/Neo4j.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Neo4j",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Neo4j",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/Neo4j.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Mysql"},next:{title:"Notion",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Notion"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"schema.fields string",id:"schemafields-string",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"neo4j"},"Neo4j"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Neo4j source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from Neo4j."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bearer_token"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")))),(0,l.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,l.kt)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,l.kt)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"username of the Neo4j"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password of the Neo4j. required if ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," is provided"),(0,l.kt)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,l.kt)("p",null,"base64 encoded bearer token of the Neo4j. for Auth."),(0,l.kt)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,l.kt)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"database name."),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Query statement."),(0,l.kt)("h3",{id:"schemafields-string"},"schema.fields ","[string]"),(0,l.kt)("p",null,"returned fields of ",(0,l.kt)("inlineCode",{parentName:"p"},"query")),(0,l.kt)("p",null,"see ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,l.kt)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,l.kt)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,l.kt)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,l.kt)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'source {\n    Neo4j {\n        uri = "neo4j://localhost:7687"\n        username = "neo4j"\n        password = "1234"\n        database = "neo4j"\n    \n        max_transaction_retry_time = 1\n        max_connection_timeout = 1\n    \n        query = "MATCH (a:Person) RETURN a.name, a.age"\n    \n        schema {\n            fields {\n                a.age=INT\n                a.name=STRING\n            }\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Neo4j Source Connector")))}m.isMDXComponent=!0}}]);