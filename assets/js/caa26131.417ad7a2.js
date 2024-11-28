"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96657],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||l;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={},o="Kafka",i={unversionedId:"connector-v2/source/Kafka",id:"connector-v2/source/Kafka",title:"Kafka",description:"Kafka source connector",source:"@site/docs/connector-v2/source/Kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Kafka",permalink:"/docs/connector-v2/source/Kafka",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Jira",permalink:"/docs/connector-v2/source/Jira"},next:{title:"Kingbase",permalink:"/docs/connector-v2/source/Kingbase"}},s={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Regex Topic",id:"regex-topic",level:3},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3},{value:"Kerberos Authentication Example",id:"kerberos-authentication-example",level:3},{value:"Multiple Kafka Source",id:"multiple-kafka-source",level:3},{value:"Protobuf configuration",id:"protobuf-configuration",level:3}],u={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kafka source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeatunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Source connector for Apache Kafka."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Kafka connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"Universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-kafka"},"Download"))))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic name(s) to read data from when the table is used as source. It also supports topic list for source by separating topic by comma like 'topic-1,topic-2'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic list config You can configure only one ",(0,r.yg)("inlineCode",{parentName:"td"},"table_list")," and one ",(0,r.yg)("inlineCode",{parentName:"td"},"topic")," at the same time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Comma separated list of Kafka brokers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"pattern")," is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),",the regular expression for a pattern of topic names to read from. All topics in clients with names that match the specified regular expression will be subscribed by the consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Kafka consumer group id"),", used to distinguish different consumer groups.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"If true the consumer's offset will be periodically committed in the background.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval(millis) for poll messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kafka.config"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"In addition to the above necessary parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"td"},"Kafka consumer")," client, users can also specify multiple ",(0,r.yg)("inlineCode",{parentName:"td"},"consumer")," client non-mandatory parameters, covering ",(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The structure of the data, including field names and field types.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format, canal_json, debezium_json, maxwell_json, ogg_json, avro and protobuf. If you use json or text format. The default field separator is ", ". If you customize the delimiter, add the "field_delimiter" option.If you use canal format, please refer to ',(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/formats/canal-json"},"canal-json")," for details.If you use debezium format, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/formats/debezium-json"},"debezium-json")," for details. Some format details please refer ",(0,r.yg)("a",{parentName:"td",href:"../formats"},"formats"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"The processing method of data format error. The default value is fail, and the optional value is (fail, skip). When fail is selected, data format error will block and an exception will be thrown. When skip is selected, data format error will skip this line data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"StartMode","[earliest]",",","[group_offsets]",",","[latest]",",","[specific_offsets]",",","[timestamp]"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"group_offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"The initial consumption pattern of consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The offset required for consumption mode to be specific_offsets.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'The time required for consumption mode to be "timestamp".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition-discovery.interval-millis"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval for dynamically discovering topics and partitions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"protobuf_message_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Effective when the format is set to protobuf, specifies the Message name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"protobuf_schema"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Effective when the format is set to protobuf, specifies the Schema definition")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example reads the data of kafka's topic_1, topic_2, topic_3 and prints it to the client.And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in Install SeaTunnel to install and deploy SeaTunnel. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.\nIn batch mode, during the enumerator sharding process, it will fetch the latest offset for each partition and use it as the stopping point.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource {\n  Kafka {\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#"\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.servers = "localhost:9092"\n    kafka.config = {\n      client.id = client_1\n      max.poll.records = 500\n      auto.offset.reset = "earliest"\n      enable.auto.commit = "false"\n    }\n  }  \n}\nsink {\n  Console {}\n}\n')),(0,r.yg)("h3",{id:"regex-topic"},"Regex Topic"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,r.yg)("p",null,"Replace the following ",(0,r.yg)("inlineCode",{parentName:"p"},"${username}")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${password}")," with the configuration values in AWS MSK."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9096,xxx.amazonaws.com.cn:9096,xxxx.amazonaws.com.cn:9096"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_SSL\n            sasl.mechanism=SCRAM-SHA-512\n            sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=AWS_MSK_IAM\n            #sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            #sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,r.yg)("p",null,"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," and put it in ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," dir."),(0,r.yg)("p",null,"Please ensure the IAM policy have ",(0,r.yg)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect",'),". Like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,r.yg)("p",null,"Source Config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9098,xxx.amazonaws.com.cn:9098,xxxx.amazonaws.com.cn:9098"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=SCRAM-SHA-512\n            #sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            security.protocol=SASL_SSL\n            sasl.mechanism=AWS_MSK_IAM\n            sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"kerberos-authentication-example"},"Kerberos Authentication Example"),(0,r.yg)("p",null,"Source Config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "127.0.0.1:9092"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_PLAINTEXT\n            sasl.kerberos.service.name=kafka\n            sasl.mechanism=GSSAPI\n            java.security.krb5.conf="/etc/krb5.conf"\n            sasl.jaas.config="com.sun.security.auth.module.Krb5LoginModule required \\n        useKeyTab=true \\n        storeKey=true  \\n        keyTab=\\"/path/to/xxx.keytab\\" \\n        principal=\\"user@xxx.com\\";"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"multiple-kafka-source"},"Multiple Kafka Source"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This is written to the same pg table according to different formats and topics of parsing kafka Perform upsert operations based on the id")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: Kafka is an unstructured data source and should be use 'tables_configs', and 'table_list' will be removed in the future.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafka_e2e:9092"\n    tables_configs = [\n      {\n        topic = "^test-ogg-sou.*"\n        pattern = "true"\n        consumer.group = "ogg_multi_group"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = ogg_json\n      },\n      {\n        topic = "test-cdc_mds"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = canal_json\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://postgresql:5432/test?loggerLevel=OFF"\n    user = test\n    password = test\n    generate_sink_sql = true\n    database = test\n    table = public.sink\n    primary_keys = ["id"]\n  }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafka_e2e:9092"\n    table_list = [\n      {\n        topic = "^test-ogg-sou.*"\n        pattern = "true"\n        consumer.group = "ogg_multi_group"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = ogg_json\n      },\n      {\n        topic = "test-cdc_mds"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = canal_json\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://postgresql:5432/test?loggerLevel=OFF"\n    user = test\n    password = test\n    generate_sink_sql = true\n    database = test\n    table = public.sink\n    primary_keys = ["id"]\n  }\n}\n')),(0,r.yg)("h3",{id:"protobuf-configuration"},"Protobuf configuration"),(0,r.yg)("p",null,"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"format")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf"),", configure ",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf")," data structure, ",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf_message_name")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"protobuf_schema")," parameters"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Kafka {\n    topic = "test_protobuf_topic_fake_source"\n    format = protobuf\n    protobuf_message_name = Person\n    protobuf_schema = """\n              syntax = "proto3";\n\n              package org.apache.seatunnel.format.protobuf;\n\n              option java_outer_classname = "ProtobufE2E";\n\n              message Person {\n                int32 c_int32 = 1;\n                int64 c_int64 = 2;\n                float c_float = 3;\n                double c_double = 4;\n                bool c_bool = 5;\n                string c_string = 6;\n                bytes c_bytes = 7;\n\n                message Address {\n                  string street = 1;\n                  string city = 2;\n                  string state = 3;\n                  string zip = 4;\n                }\n\n                Address address = 8;\n\n                map<string, float> attributes = 9;\n\n                repeated string phone_numbers = 10;\n              }\n              """\n    bootstrap.servers = "kafkaCluster:9092"\n    start_mode = "earliest"\n    plugin_output = "kafka_table"\n  }\n}\n')))}c.isMDXComponent=!0}}]);