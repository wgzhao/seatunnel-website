"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79633],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,u=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(u,i(i({ref:t},g),{},{components:n})):a.createElement(u,i({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const l={},i="JDBC",o={unversionedId:"connector-v2/sink/Jdbc",id:"version-2.2.0-beta/connector-v2/sink/Jdbc",title:"JDBC",description:"JDBC sink connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/sink/Jdbc.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Jdbc",permalink:"/docs/2.2.0-beta/connector-v2/sink/Jdbc",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/sink/Jdbc.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/2.2.0-beta/connector-v2/sink/IoTDB"},next:{title:"Kudu",permalink:"/docs/2.2.0-beta/connector-v2/sink/Kudu"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"max_retriesint",id:"max_retriesint",level:3},{value:"batch_sizeint",id:"batch_sizeint",level:3},{value:"batch_interval_msint",id:"batch_interval_msint",level:3},{value:"is_exactly_onceboolean",id:"is_exactly_onceboolean",level:3},{value:"xa_data_source_class_namestring",id:"xa_data_source_class_namestring",level:3},{value:"max_commit_attemptsint",id:"max_commit_attemptsint",level:3},{value:"transaction_timeout_secint",id:"transaction_timeout_secint",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2}],g={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jdbc"},"JDBC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once semantics (using XA transaction guarantee)."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is support ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,r.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it."),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"300")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")))),(0,r.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,r.yg)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is com.mysql.cj.jdbc.Driver.\nWarn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy mysql-connector-java-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"userName"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"password"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Query statement"),(0,r.yg)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,r.yg)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,r.yg)("h3",{id:"max_retriesint"},"max_retries","[int]"),(0,r.yg)("p",null,"The number of retries to submit failed (executeBatch)"),(0,r.yg)("h3",{id:"batch_sizeint"},"batch_size","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the database"),(0,r.yg)("h3",{id:"batch_interval_msint"},"batch_interval_ms","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the database"),(0,r.yg)("h3",{id:"is_exactly_onceboolean"},"is_exactly_once","[boolean]"),(0,r.yg)("p",null,"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"xa_data_source_class_name"),"."),(0,r.yg)("h3",{id:"xa_data_source_class_namestring"},"xa_data_source_class_name","[string]"),(0,r.yg)("p",null,"The xa data source class name of the database Driver, for example, mysql is ",(0,r.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.MysqlXADataSource"),", and please refer to appendix for other data sources"),(0,r.yg)("h3",{id:"max_commit_attemptsint"},"max_commit_attempts","[int]"),(0,r.yg)("p",null,"The number of retries for transaction commit failures"),(0,r.yg)("h3",{id:"transaction_timeout_secint"},"transaction_timeout_sec","[int]"),(0,r.yg)("p",null,"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect exactly-once semantics"),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("p",null,'In the case of is_exactly_once = "true", Xa transactions are used. This requires database support, and some databases require some setup :\n1 postgres needs to set ',(0,r.yg)("inlineCode",{parentName:"p"},"max_prepared_transactions > 1")," such as ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM set max_prepared_transactions to 10"),".\n2 mysql version need >= ",(0,r.yg)("inlineCode",{parentName:"p"},"8.0.29")," and Non-root users need to grant ",(0,r.yg)("inlineCode",{parentName:"p"},"XA_RECOVER_ADMIN")," permissions. such as ",(0,r.yg)("inlineCode",{parentName:"p"},"grant XA_RECOVER_ADMIN on test_db.* to 'user1'@'%'"),"."),(0,r.yg)("h2",{id:"appendix"},"appendix"),(0,r.yg)("p",null,"there are some reference value for params above."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mysql"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.MysqlXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.xa.PGXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dm"),(0,r.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,r.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmdbXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'jdbc {\n    url = "jdbc:mysql://localhost/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n}\n\n')),(0,r.yg)("p",null,"Exactly-once"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'jdbc {\n\n    url = "jdbc:mysql://localhost/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n\n    max_retries = 0\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n\n    is_exactly_once = "true"\n\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n}\n')))}m.isMDXComponent=!0}}]);