"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92737],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41785:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={},s="Kafka",c={unversionedId:"connector-v2/source/kafka",id:"version-2.3.3/connector-v2/source/kafka",title:"Kafka",description:"Kafka source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/kafka",permalink:"/docs/2.3.3/connector-v2/source/kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/kafka.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"Source Common Options",permalink:"/docs/2.3.3/connector-v2/source/common-options"},next:{title:"Sink",permalink:"/docs/2.3.3/category/sink-v2"}},p={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Regex Topic",id:"regex-topic",level:3},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kafka"},"Kafka"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Kafka source connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeatunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Source connector for Apache Kafka."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("p",null,"In order to use the Kafka connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"Universal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-kafka"},"Download"))))),(0,l.kt)("h2",{id:"source-options"},"Source Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Topic name(s) to read data from when the table is used as source. It also supports topic list for source by separating topic by comma like 'topic-1,topic-2'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of Kafka brokers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"pattern")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),",the regular expression for a pattern of topic names to read from. All topics in clients with names that match the specified regular expression will be subscribed by the consumer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.group"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Kafka consumer group id"),", used to distinguish different consumer groups.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If true the consumer's offset will be periodically committed in the background.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.config"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"In addition to the above necessary parameters that must be specified by the ",(0,l.kt)("inlineCode",{parentName:"td"},"Kafka consumer")," client, users can also specify multiple ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer")," client non-mandatory parameters, covering ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The structure of the data, including field names and field types.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format, canal-json and debezium-json.If you use json or text format. The default field separator is ", ". If you customize the delimiter, add the "field_delimiter" option.If you use canal format, please refer to ',(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.3/connector-v2/formats/canal-json"},"canal-json")," for details.If you use debezium format, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.3/connector-v2/formats/debezium-json"},"debezium-json")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},"The processing method of data format error. The default value is fail, and the optional value is (fail, skip). When fail is selected, data format error will block and an exception will be thrown. When skip is selected, data format error will skip this line data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},","),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"StartMode","[earliest]",",","[group_offsets]",",","[latest]",",","[specific_offsets]",",","[timestamp]"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"group_offsets"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial consumption pattern of consumers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode.offsets"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The offset required for consumption mode to be specific_offsets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'The time required for consumption mode to be "timestamp".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition-discovery.interval-millis"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval for dynamically discovering topics and partitions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.3/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example reads the data of kafka's topic_1, topic_2, topic_3 and prints it to the client.And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in Install SeaTunnel to install and deploy SeaTunnel. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.3/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.3/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 2\n  job.mode = "BATCH"\n}\nsource {\n  Kafka {\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#"\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.servers = "localhost:9092"\n    kafka.config = {\n      client.id = client_1\n      max.poll.records = 500\n      auto.offset.reset = "earliest"\n      enable.auto.commit = "false"\n    }\n  }  \n}\nsink {\n  Console {}\n}\n')),(0,l.kt)("h3",{id:"regex-topic"},"Regex Topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n}\n')),(0,l.kt)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,l.kt)("p",null,"Replace the following ",(0,l.kt)("inlineCode",{parentName:"p"},"${username}")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"${password}")," with the configuration values in AWS MSK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9096,xxx.amazonaws.com.cn:9096,xxxx.amazonaws.com.cn:9096"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_SSL\n            sasl.mechanism=SCRAM-SHA-512\n            sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=AWS_MSK_IAM\n            #sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            #sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,l.kt)("p",null,"Download ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," and put it in ",(0,l.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," dir."),(0,l.kt)("p",null,"Please ensure the IAM policy have ",(0,l.kt)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect",'),". Like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,l.kt)("p",null,"Source Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9098,xxx.amazonaws.com.cn:9098,xxxx.amazonaws.com.cn:9098"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=SCRAM-SHA-512\n            #sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            security.protocol=SASL_SSL\n            sasl.mechanism=AWS_MSK_IAM\n            sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);