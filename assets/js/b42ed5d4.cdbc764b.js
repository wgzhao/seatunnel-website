"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92127],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return a?t.createElement(u,o(o({ref:n},d),{},{components:a})):t.createElement(u,o({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={},o="Paimon",i={unversionedId:"connector-v2/sink/Paimon",id:"connector-v2/sink/Paimon",title:"Paimon",description:"Paimon sink connector",source:"@site/docs/connector-v2/sink/Paimon.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Paimon",permalink:"/docs/connector-v2/sink/Paimon",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Paimon.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/docs/connector-v2/sink/OssJindoFile"},next:{title:"Phoenix",permalink:"/docs/connector-v2/sink/Phoenix"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Single table",id:"single-table",level:3},{value:"Single table(Specify hadoop HA config and kerberos config)",id:"single-tablespecify-hadoop-ha-config-and-kerberos-config",level:3},{value:"Single table(Hive catalog)",id:"single-tablehive-catalog",level:3},{value:"Single table with write props of paimon",id:"single-table-with-write-props-of-paimon",level:3},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"example2",id:"example2",level:4}],d={toc:p},m="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paimon"},"Paimon"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Paimon sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Sink connector for Apache Paimon. It can support cdc mode \u3001auto create table."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependent"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,r.yg)("td",{parentName:"tr",align:null},"hive-exec"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.hive/hive-exec"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,r.yg)("td",{parentName:"tr",align:null},"libfb303"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.thrift/libfb303"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In order to be compatible with different versions of Hadoop and Hive, the scope of hive-exec in the project pom file are provided, so if you use the Flink engine, first you may need to add the following Jar packages to <FLINK_HOME>/lib directory, if you are using the Spark engine and integrated with Hadoop, then you do not need to add the following Jar packages.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Some versions of the hive-exec package do not have libfb303-xxx.jar, so you also need to manually import the Jar package.")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support multiple table write"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Paimon warehouse path")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"filesystem"),(0,r.yg)("td",{parentName:"tr",align:null},"Catalog type of Paimon, support filesystem and hive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Catalog uri of Paimon, only needed when catalog_type is hive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The database you want to access")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The table you want to access")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The path of hdfs-site.xml")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"The schema save mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"The data save mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.primary-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Default comma-separated list of columns (primary key) that identify a row in tables.(Notice: The partition field needs to be included in the primary key fields)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.partition-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Default comma-separated list of partition fields to use when creating tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.table.write-props"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Properties passed through to paimon table initialization, ",(0,r.yg)("a",{parentName:"td",href:"https://paimon.apache.org/docs/0.6/maintenance/configurations/#coreoptions"},"reference"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Properties in hadoop conf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files")))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"single-table"},"Single table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n  }\n}\n')),(0,r.yg)("h3",{id:"single-tablespecify-hadoop-ha-config-and-kerberos-config"},"Single table(Specify hadoop HA config and kerberos config)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n      security.kerberos.login.principal = "your-kerberos-principal"\n      security.kerberos.login.keytab = "your-kerberos-keytab-path"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"single-tablehive-catalog"},"Single table(Hive catalog)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Paimon {\n    schema_save_mode = "RECREATE_SCHEMA"\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"single-table-with-write-props-of-paimon"},"Single table with write props of paimon"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = 2\n        file.format = "parquet"\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,r.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,r.yg)("h4",{id:"example1"},"example1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${database_name}_test"\n    table="${table_name}_test"\n  }\n}\n')),(0,r.yg)("h4",{id:"example2"},"example2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${schema_name}_test"\n    table="${table_name}_test"\n  }\n}\n')))}g.isMDXComponent=!0}}]);