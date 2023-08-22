"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[29744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="StarRocks",c={unversionedId:"connector-v2/source/StarRocks",id:"version-2.3.3/connector-v2/source/StarRocks",title:"StarRocks",description:"StarRocks source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/StarRocks.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/StarRocks",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/StarRocks",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/StarRocks.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"SqlServer CDC",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/SqlServer-CDC"},next:{title:"TDengine",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/TDengine"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"scan_filter string",id:"scan_filter-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"request_tablet_size int",id:"request_tablet_size-int",level:3},{value:"scan_connect_timeout_ms int",id:"scan_connect_timeout_ms-int",level:3},{value:"scan_query_timeout_sec int",id:"scan_query_timeout_sec-int",level:3},{value:"scan_keep_alive_min int",id:"scan_keep_alive_min-int",level:3},{value:"scan_batch_rows int",id:"scan_batch_rows-int",level:3},{value:"scan_mem_limit long",id:"scan_mem_limit-long",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"starrocks"},"StarRocks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"StarRocks source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through StarRocks.\nThe internal implementation of StarRocks source connector is obtains the query plan from the frontend (FE),\ndelivers the query plan as a parameter to BE nodes, and then obtains data results from BE nodes."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_filter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request_tablet_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_connect_timeout_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"30000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_query_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_keep_alive_min"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_batch_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scan_mem_limit"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483648")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," cluster address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},'["fe_ip:fe_http_port", ...]')),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," user username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," user password"),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"The name of StarRocks database"),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"The name of StarRocks table"),(0,l.kt)("h3",{id:"scan_filter-string"},"scan_filter ","[string]"),(0,l.kt)("p",null,"Filter expression of the query, which is transparently transmitted to StarRocks. StarRocks uses this expression to complete source-side data filtering."),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"tinyint_1 = 100"\n')),(0,l.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.kt)("p",null,"The schema of the starRocks that you want to generate"),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"schema {\n    fields {\n        name = string\n        age = int\n    }\n  }\n")),(0,l.kt)("h3",{id:"request_tablet_size-int"},"request_tablet_size ","[int]"),(0,l.kt)("p",null,"The number of StarRocks Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the engine side, but at the same time will cause greater pressure on StarRocks."),(0,l.kt)("p",null,"The following is an example to explain how to use request_tablet_size to controls the generation of partitions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"the tablet distribution of StarRocks table in cluster as follower\n\nbe_node_1 tablet[1, 2, 3, 4, 5]\nbe_node_2 tablet[6, 7, 8, 9, 10]\nbe_node_3 tablet[11, 12, 13, 14, 15]\n\n1.If not set request_tablet_size, there will no limit on the number of tablets in a single partition. The partitions will be generated as follows  \n\npartition[0] read data of tablet[1, 2, 3, 4, 5] from be_node_1 \npartition[1] read data of tablet[6, 7, 8, 9, 10] from be_node_2 \npartition[2] read data of tablet[11, 12, 13, 14, 15] from be_node_3 \n\n2.if set request_tablet_size=3, the limit on the number of tablets in a single partition is 3. The partitions will be generated as follows\n\npartition[0] read data of tablet[1, 2, 3] from be_node_1 \npartition[1] read data of tablet[4, 5] from be_node_1 \npartition[2] read data of tablet[6, 7, 8] from be_node_2 \npartition[3] read data of tablet[9, 10] from be_node_2 \npartition[4] read data of tablet[11, 12, 13] from be_node_3 \npartition[5] read data of tablet[14, 15] from be_node_3 \n")),(0,l.kt)("h3",{id:"scan_connect_timeout_ms-int"},"scan_connect_timeout_ms ","[int]"),(0,l.kt)("p",null,"requests connection timeout sent to StarRocks"),(0,l.kt)("h3",{id:"scan_query_timeout_sec-int"},"scan_query_timeout_sec ","[int]"),(0,l.kt)("p",null,"Query the timeout time of StarRocks, the default value is 1 hour, -1 means no timeout limit"),(0,l.kt)("h3",{id:"scan_keep_alive_min-int"},"scan_keep_alive_min ","[int]"),(0,l.kt)("p",null,"The keep-alive duration of the query task, in minutes. The default value is 10. we recommend that you set this parameter to a value greater than or equal to 5."),(0,l.kt)("h3",{id:"scan_batch_rows-int"},"scan_batch_rows ","[int]"),(0,l.kt)("p",null,"The maximum number of data rows to read from BE at a time. Increasing this value reduces the number of connections established between engine and StarRocks and therefore mitigates overhead caused by network latency."),(0,l.kt)("h3",{id:"scan_mem_limit-long"},"scan_mem_limit ","[long]"),(0,l.kt)("p",null,"The maximum memory space allowed for a single query in the BE node, in bytes. The default value is 2147483648 (2 GB)."),(0,l.kt)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,l.kt)("p",null,"number of retry requests sent to StarRocks"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'source {\n  StarRocks {\n    nodeUrls = ["starrocks_e2e:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_source"\n    scan_batch_rows = 10\n    max_retries = 3\n    fields {\n       BIGINT_COL = BIGINT\n       LARGEINT_COL = STRING\n       SMALLINT_COL = SMALLINT\n       TINYINT_COL = TINYINT\n       BOOLEAN_COL = BOOLEAN\n       DECIMAL_COL = "DECIMAL(20, 1)"\n       DOUBLE_COL = DOUBLE\n       FLOAT_COL = FLOAT\n       INT_COL = INT\n       CHAR_COL = STRING\n       VARCHAR_11_COL = STRING\n       STRING_COL = STRING\n       DATETIME_COL = TIMESTAMP\n       DATE_COL = DATE\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add StarRocks Source Connector")))}m.isMDXComponent=!0}}]);