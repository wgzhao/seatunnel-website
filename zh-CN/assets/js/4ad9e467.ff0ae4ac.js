"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[57817],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44641:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var t=r(58168),a=(r(96540),r(15680));const c={},o="\u6a21\u5f0f\u6f14\u8fdb",l={unversionedId:"concept/schema-evolution",id:"concept/schema-evolution",title:"\u6a21\u5f0f\u6f14\u8fdb",description:"\u6a21\u5f0f\u6f14\u8fdb\u662f\u6307\u6570\u636e\u8868\u7684Schema\u53ef\u4ee5\u6539\u53d8\uff0c\u6570\u636e\u540c\u6b65\u4efb\u52a1\u53ef\u4ee5\u81ea\u52a8\u9002\u5e94\u65b0\u7684\u8868\u7ed3\u6784\u7684\u53d8\u5316\u800c\u65e0\u9700\u5176\u4ed6\u64cd\u4f5c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/schema-evolution.md",sourceDirName:"concept",slug:"/concept/schema-evolution",permalink:"/zh-CN/docs/concept/schema-evolution",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u76d1\u542c\u5668",permalink:"/zh-CN/docs/concept/event-listener"},next:{title:"Source",permalink:"/zh-CN/docs/connector-v2/source"}},s={},i=[{value:"\u5df2\u652f\u6301\u7684\u5f15\u64ce",id:"\u5df2\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u5df2\u652f\u6301\u7684\u6a21\u5f0f\u53d8\u66f4\u4e8b\u4ef6\u7c7b\u578b",id:"\u5df2\u652f\u6301\u7684\u6a21\u5f0f\u53d8\u66f4\u4e8b\u4ef6\u7c7b\u578b",level:2},{value:"\u5df2\u652f\u6301\u7684\u8fde\u63a5\u5668",id:"\u5df2\u652f\u6301\u7684\u8fde\u63a5\u5668",level:2},{value:"\u6e90",id:"\u6e90",level:3},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u542f\u7528Schema evolution\u529f\u80fd",id:"\u542f\u7528schema-evolution\u529f\u80fd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Mysql-CDC -&gt; Jdbc-Mysql",id:"mysql-cdc---jdbc-mysql",level:3},{value:"Oracle-cdc -&gt; Jdbc-Oracle",id:"oracle-cdc---jdbc-oracle",level:3},{value:"Oracle-cdc -&gt; Jdbc-Mysql",id:"oracle-cdc---jdbc-mysql",level:3},{value:"Mysql-cdc -&gt; StarRocks",id:"mysql-cdc---starrocks",level:3}],u={toc:i},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6a21\u5f0f\u6f14\u8fdb"},"\u6a21\u5f0f\u6f14\u8fdb"),(0,a.yg)("p",null,"\u6a21\u5f0f\u6f14\u8fdb\u662f\u6307\u6570\u636e\u8868\u7684Schema\u53ef\u4ee5\u6539\u53d8\uff0c\u6570\u636e\u540c\u6b65\u4efb\u52a1\u53ef\u4ee5\u81ea\u52a8\u9002\u5e94\u65b0\u7684\u8868\u7ed3\u6784\u7684\u53d8\u5316\u800c\u65e0\u9700\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,a.yg)("h2",{id:"\u5df2\u652f\u6301\u7684\u5f15\u64ce"},"\u5df2\u652f\u6301\u7684\u5f15\u64ce"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Zeta")),(0,a.yg)("h2",{id:"\u5df2\u652f\u6301\u7684\u6a21\u5f0f\u53d8\u66f4\u4e8b\u4ef6\u7c7b\u578b"},"\u5df2\u652f\u6301\u7684\u6a21\u5f0f\u53d8\u66f4\u4e8b\u4ef6\u7c7b\u578b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ADD COLUMN")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DROP COLUMN")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RENAME COLUMN")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MODIFY COLUMN"))),(0,a.yg)("h2",{id:"\u5df2\u652f\u6301\u7684\u8fde\u63a5\u5668"},"\u5df2\u652f\u6301\u7684\u8fde\u63a5\u5668"),(0,a.yg)("h3",{id:"\u6e90"},"\u6e90"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/MySQL-CDC.md"},"Mysql-CDC"),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/Oracle-CDC.md"},"Oracle-CDC")),(0,a.yg)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/zh/connector-v2/sink/Jdbc.md"},"Jdbc-Mysql"),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Oracle"),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/StarRocks.md"},"StarRocks"),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/zh/connector-v2/sink/Paimon.md#%E6%A8%A1%E5%BC%8F%E6%BC%94%E5%8F%98"},"Paimon")),(0,a.yg)("p",null,"\u6ce8\u610f: \u76ee\u524d\u6a21\u5f0f\u6f14\u8fdb\u4e0d\u652f\u6301transform\u3002\u4e0d\u540c\u7c7b\u578b\u6570\u636e\u5e93(Oracle-CDC -> Jdbc-Mysql)\u7684\u6a21\u5f0f\u6f14\u8fdb\u76ee\u524d\u4e0d\u652f\u6301ddl\u4e2d\u5217\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.yg)("p",null,"\u5f53\u4f60\u4f7f\u7528Oracle-CDC\u65f6\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528\u7528\u6237\u540d",(0,a.yg)("inlineCode",{parentName:"p"},"SYS"),"\u6216",(0,a.yg)("inlineCode",{parentName:"p"},"SYSTEM"),"\u6765\u4fee\u6539\u8868\u7ed3\u6784\uff0c\u5426\u5219ddl\u4e8b\u4ef6\u5c06\u88ab\u8fc7\u6ee4\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u6a21\u5f0f\u6f14\u8fdb\u4e0d\u8d77\u4f5c\u7528\uff1b\n\u53e6\u5916\uff0c\u5982\u679c\u4f60\u7684\u8868\u540d\u4ee5",(0,a.yg)("inlineCode",{parentName:"p"},"ORA_TEMP_"),"\u5f00\u5934\uff0c\u4e5f\u4f1a\u6709\u76f8\u540c\u7684\u95ee\u9898\u3002"),(0,a.yg)("h2",{id:"\u542f\u7528schema-evolution\u529f\u80fd"},"\u542f\u7528Schema evolution\u529f\u80fd"),(0,a.yg)("p",null,"\u5728CDC\u6e90\u8fde\u63a5\u5668\u4e2d\u6a21\u5f0f\u6f14\u8fdb\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002\u4f60\u9700\u8981\u5728CDC\u8fde\u63a5\u5668\u4e2d\u914d\u7f6e",(0,a.yg)("inlineCode",{parentName:"p"},"schema-changes.enabled = true"),"\u6765\u542f\u7528\u5b83\u3002"),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("h3",{id:"mysql-cdc---jdbc-mysql"},"Mysql-CDC -> Jdbc-Mysql"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    database = shop\n    table = mysql_cdc_e2e_sink_table_with_schema_change_exactly_once\n    primary_keys = ["id"]\n    is_exactly_once = true\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n  }\n}\n')),(0,a.yg)("h3",{id:"oracle-cdc---jdbc-oracle"},"Oracle-cdc -> Jdbc-Oracle"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n    Jdbc {\n      plugin_input = "customers"\n      driver = "oracle.jdbc.driver.OracleDriver"\n      url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n      user = "dbzuser"\n      password = "dbz"\n      generate_sink_sql = true\n      database = "ORCLCDB"\n      table = "DEBEZIUM.FULL_TYPES_SINK"\n      batch_size = 1\n      primary_keys = ["ID"]\n      connection.pool.size = 1\n    }\n}\n')),(0,a.yg)("h3",{id:"oracle-cdc---jdbc-mysql"},"Oracle-cdc -> Jdbc-Mysql"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    plugin_input = "customers"\n    url = "jdbc:mysql://oracle-host:3306/oracle_sink"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = oracle_sink\n    table = oracle_cdc_2_mysql_sink_table\n    primary_keys = ["ID"]\n  }\n}\n')),(0,a.yg)("h3",{id:"mysql-cdc---starrocks"},"Mysql-cdc -> StarRocks"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  MySQL-CDC {\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["starrocks_cdc_e2e:8030"]\n    username = "root"\n    password = ""\n    database = "shop"\n    table = "${table_name}"\n    base-url = "jdbc:mysql://starrocks_cdc_e2e:9030/shop"\n    max_retries = 3\n    enable_upsert_delete = true\n    schema_save_mode="RECREATE_SCHEMA"\n    data_save_mode="DROP_DATA"\n    save_mode_create_template = """\n    CREATE TABLE IF NOT EXISTS shop.`${table_name}` (\n        ${rowtype_primary_key},\n        ${rowtype_fields}\n        ) ENGINE=OLAP\n        PRIMARY KEY (${rowtype_primary_key})\n        DISTRIBUTED BY HASH (${rowtype_primary_key})\n        PROPERTIES (\n                "replication_num" = "1",\n                "in_memory" = "false",\n                "enable_persistent_index" = "true",\n                "replicated_storage" = "true",\n                "compression" = "LZ4"\n          )\n    """\n  }\n}\n')))}p.isMDXComponent=!0}}]);