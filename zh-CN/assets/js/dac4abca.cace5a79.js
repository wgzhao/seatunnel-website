"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67492],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20485:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return d},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="Clickhouse",u={unversionedId:"connector-v2/sink/Clickhouse",id:"connector-v2/sink/Clickhouse",title:"Clickhouse",description:"Clickhouse sink connector",source:"@site/docs/connector-v2/sink/Clickhouse.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cassandra",permalink:"/zh-CN/docs/connector-v2/sink/Cassandra"},next:{title:"ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"}},s={},d=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"How to Create a Clickhouse Data Synchronization Jobs",id:"how-to-create-a-clickhouse-data-synchronization-jobs",level:2},{value:"Tips",id:"tips",level:3},{value:"Clickhouse Sink Config",id:"clickhouse-sink-config",level:2},{value:"Split Mode",id:"split-mode",level:2},{value:"CDC(Change data capture) Sink",id:"cdcchange-data-capture-sink",level:2},{value:"CDC(Change data capture) for *MergeTree engine",id:"cdcchange-data-capture-for-mergetree-engine",level:2}],c={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse"},"Clickhouse"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Clickhouse sink connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Clickhouse sink plug-in can achieve accuracy once by implementing idempotent writing, and needs to cooperate with aggregatingmergetree and other engines that support deduplication.")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to write data to Clickhouse."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("p",null,"In order to use the Clickhouse connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Dependency"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clickhouse"),(0,l.kt)("td",{parentName:"tr",align:null},"universal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-clickhouse"},"Download"))))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Clickhouse Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"String / Int128 / UInt128 / Int256 / UInt256 / Point / Ring / Polygon MultiPolygon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Int8 / UInt8 / Int16 / UInt16 / Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt64 / Int64 / IntervalYear / IntervalQuarter / IntervalMonth / IntervalWeek / IntervalDay / IntervalHour / IntervalMinute / IntervalSecond")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Float64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"Float32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAP"),(0,l.kt)("td",{parentName:"tr",align:null},"Map")))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ClickHouse")," cluster address, the format is ",(0,l.kt)("inlineCode",{parentName:"td"},"host:port")," , allowing multiple ",(0,l.kt)("inlineCode",{parentName:"td"},"hosts")," to be specified. Such as ",(0,l.kt)("inlineCode",{parentName:"td"},'"host1:8123,host2:8123"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"ClickHouse")," database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ClickHouse")," user username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ClickHouse")," user password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.config"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"In addition to the above mandatory parameters that must be specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"clickhouse-jdbc")," , users can also specify multiple optional parameters, which cover all the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-client#configuration"},"parameters")," provided by ",(0,l.kt)("inlineCode",{parentName:"td"},"clickhouse-jdbc"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bulk_size"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20000"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows written through ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," each time, the ",(0,l.kt)("inlineCode",{parentName:"td"},"default is 20000"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"This mode only support clickhouse table which engine is 'Distributed'.And ",(0,l.kt)("inlineCode",{parentName:"td"},"internal_replication")," option-should be ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will counted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sharding_key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"When use split_mode, which node to send data to is a problem, the default is random selection, but the 'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only worked when 'split_mode' is true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary_key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Mark the primary key column from clickhouse table, and based on primary key execute INSERT/UPDATE/DELETE to clickhouse table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"support_upsert"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Support upsert row by query primary key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_experimental_lightweight_delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow experimental lightweight delete based on ",(0,l.kt)("inlineCode",{parentName:"td"},"*MergeTree")," table engine.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details.")))),(0,l.kt)("h2",{id:"how-to-create-a-clickhouse-data-synchronization-jobs"},"How to Create a Clickhouse Data Synchronization Jobs"),(0,l.kt)("p",null,"The following example demonstrates how to create a data synchronization job that writes randomly generated data to a Clickhouse database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval  = 1000\n}\n\nsource {\n  FakeSource {\n      row.num = 2\n      bigint.min = 0\n      bigint.max = 10000000\n      split.num = 1\n      split.read-interval = 300\n      schema {\n        fields {\n          c_bigint = bigint\n        }\n      }\n    }\n}\n\nsink {\n  Clickhouse {\n    host = "127.0.0.1:9092"\n    database = "default"\n    table = "test"\n    username = "xxxxx"\n    password = "xxxxx"\n  }\n}\n')),(0,l.kt)("h3",{id:"tips"},"Tips"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"SeaTunnel Deployment Document"),". ",(0,l.kt)("br",null),"\n2.The table to be written to needs to be created in advance before synchronization.",(0,l.kt)("br",null),"\n3.When sink is writing to the ClickHouse table, you don't need to set its schema because the connector will query ClickHouse for the current table's schema information before writing.",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"clickhouse-sink-config"},"Clickhouse Sink Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    clickhouse.config = {\n      max_rows_to_read = "100"\n      read_overflow_mode = "throw"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"split-mode"},"Split Mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # split mode options\n    split_mode = true\n    sharding_key = "age"\n  }\n}\n')),(0,l.kt)("h2",{id:"cdcchange-data-capture-sink"},"CDC(Change data capture) Sink"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n  }\n}\n')),(0,l.kt)("h2",{id:"cdcchange-data-capture-for-mergetree-engine"},"CDC(Change data capture) for *MergeTree engine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n    allow_experimental_lightweight_delete = true\n  }\n}\n')))}k.isMDXComponent=!0}}]);