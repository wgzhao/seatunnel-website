"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Quick start",p={unversionedId:"spark/quick-start",id:"spark/quick-start",title:"Quick start",description:"Let's take an application that receives data through a socket , divides the data into multiple fields, and outputs the processing results as an example to quickly show how to use seatunnel.",source:"@site/docs/spark/quick-start.md",sourceDirName:"spark",slug:"/spark/quick-start",permalink:"/docs/spark/quick-start",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Download and install",permalink:"/docs/spark/installation"},next:{title:"Command usage instructions",permalink:"/docs/spark/commands/start-seatunnel-spark.sh"}},u=[{value:"Step 1: Prepare Spark runtime environment",id:"step-1-prepare-spark-runtime-environment",children:[{value:"Step 2: Download seatunnel",id:"step-2-download-seatunnel",children:[],level:3}],level:2},{value:"Step 3: Configure seatunnel",id:"step-3-configure-seatunnel",children:[],level:2},{value:"Step 4: Start the <code>netcat server</code> to send data",id:"step-4-start-the-netcat-server-to-send-data",children:[],level:2},{value:"Step 5: start seatunnel",id:"step-5-start-seatunnel",children:[],level:2},{value:"Step 6: Input at the <code>nc</code> terminal",id:"step-6-input-at-the-nc-terminal",children:[],level:2},{value:"summary",id:"summary",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's take an application that receives data through a ",(0,o.kt)("inlineCode",{parentName:"p"},"socket")," , divides the data into multiple fields, and outputs the processing results as an example to quickly show how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel"),".")),(0,o.kt)("h2",{id:"step-1-prepare-spark-runtime-environment"},"Step 1: Prepare Spark runtime environment"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are familiar with Spark or have prepared the Spark operating environment, you can ignore this step. Spark does not require any special configuration.")),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"download Spark")," first, please choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Spark version >= 2.x.x")," . After downloading and decompressing, you can submit the Spark ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy-mode = local")," mode task without any configuration. If you expect tasks to run on ",(0,o.kt)("inlineCode",{parentName:"p"},"Standalone clusters")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Yarn clusters")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Mesos clusters"),", please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/cluster-overview.html"},"Spark deployment documentation")," on the Spark official website."),(0,o.kt)("h3",{id:"step-2-download-seatunnel"},"Step 2: Download seatunnel"),(0,o.kt)("p",null,"Enter the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/releases"},"seatunnel installation package download page")," and download the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>.zip")),(0,o.kt)("p",null,"Or download the specified version directly (take ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0.4")," as an example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/InterestingLab/seatunnel/releases/download/v2.0.4/waterdrop-dist-2.0.4-2.11.8-release.zip -O seatunnel-2.0.4.zip\n")),(0,o.kt)("p",null,"After downloading, unzip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,o.kt)("h2",{id:"step-3-configure-seatunnel"},"Step 3: Configure seatunnel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh")," , specify the necessary environment configuration such as ",(0,o.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," (the directory after Spark downloaded and decompressed in Step 1)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"config/application.conf")," , which determines the method and logic of data input, processing, and output after ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," is started."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n  # seatunnel defined streaming batch duration in seconds\n  spark.streaming.batchDuration = 5\n\n  spark.app.name = "seatunnel"\n  spark.ui.port = 13000\n}\n\nsource {\n  socketStream {}\n}\n\ntransform {\n  split {\n    fields = ["msg", "name"]\n    delimiter = ","\n  }\n}\n\nsink {\n  console {}\n}\n')),(0,o.kt)("h2",{id:"step-4-start-the-netcat-server-to-send-data"},"Step 4: Start the ",(0,o.kt)("inlineCode",{parentName:"h2"},"netcat server")," to send data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nc -lk 9999\n")),(0,o.kt)("h2",{id:"step-5-start-seatunnel"},"Step 5: start seatunnel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd seatunnel\n./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/application.conf\n")),(0,o.kt)("h2",{id:"step-6-input-at-the-nc-terminal"},"Step 6: Input at the ",(0,o.kt)("inlineCode",{parentName:"h2"},"nc")," terminal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Hello World, seatunnel\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," log prints out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"+----------------------+-----------+---------+\n|raw_message           |msg        |name     |\n+----------------------+-----------+---------+\n|Hello World, seatunnel|Hello World|seatunnel|\n+----------------------+-----------+---------+\n")),(0,o.kt)("h2",{id:"summary"},"summary"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," is simple and easy to use, and there are more abundant data processing functions waiting to be discovered. The data processing case shown in this article does not require any code, compilation, and packaging, and is simpler than the official ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/streaming-programming-guide.html#a-quick-example"},"Quick Example"),"."),(0,o.kt)("p",null,"If you want to know more ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel configuration examples"),", please refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration example 2: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/InterestingLab/seatunnel/blob/dev/config/spark.batch.conf.template"},"Batch offline batch processing"))),(0,o.kt)("p",null,"The above configuration is the default ","[offline batch configuration template]",", which can be run directly, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd seatunnel\n./bin/start-seatunnel-spark.sh \\\n--master 'local[2]' \\\n--deploy-mode client \\\n--config ./config/spark.batch.conf.template\n")))}d.isMDXComponent=!0}}]);