"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56499],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,f=d["".concat(l,".").concat(p)]||d[p]||g[p]||s;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},23814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const s={},o="Web UI",a={unversionedId:"seatunnel-engine/web-ui",id:"seatunnel-engine/web-ui",title:"Web UI",description:"Access",source:"@site/docs/seatunnel-engine/web-ui.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/web-ui",permalink:"/docs/seatunnel-engine/web-ui",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/seatunnel-engine/web-ui.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Telemetry",permalink:"/docs/seatunnel-engine/telemetry"},next:{title:"Slot Allocation Strategy",permalink:"/docs/seatunnel-engine/slot-allocation-strategy"}},l={},c=[{value:"Access",id:"access",level:2},{value:"Overview",id:"overview",level:2},{value:"Jobs",id:"jobs",level:2},{value:"Running Jobs",id:"running-jobs",level:3},{value:"Finished Jobs",id:"finished-jobs",level:3},{value:"Workers",id:"workers",level:2},{value:"Workers Information",id:"workers-information",level:3},{value:"Master",id:"master",level:2},{value:"Master Information",id:"master-information",level:3}],u={toc:c},d="wrapper";function g(e){let{components:n,...s}=e;return(0,i.yg)(d,(0,r.A)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"web-ui"},"Web UI"),(0,i.yg)("h2",{id:"access"},"Access"),(0,i.yg)("p",null,"Before accessing the web ui we need to enable the http rest api. first you need to configure it in the ",(0,i.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml")," configuration file"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"seatunnel:\n  engine:\n    http:\n      enable-http: true\n      port: 8080\n\n")),(0,i.yg)("p",null,"Then visit ",(0,i.yg)("inlineCode",{parentName:"p"},"http://ip:8080/#/overview")),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The Web UI of Apache SeaTunnel offers a user-friendly interface for monitoring and managing SeaTunnel jobs. Through the Web UI, users can view real-time information on currently running jobs, finished jobs, and the status of worker and master nodes within the cluster. The main functional modules include Jobs, Workers, and Master, each providing detailed status information and operational options to help users efficiently manage and optimize their data processing workflows.\n",(0,i.yg)("img",{alt:"overview.png",src:t(68547).A,width:"2552",height:"1309"})),(0,i.yg)("h2",{id:"jobs"},"Jobs"),(0,i.yg)("h3",{id:"running-jobs"},"Running Jobs"),(0,i.yg)("p",null,'The "Running Jobs" section lists all SeaTunnel jobs that are currently in execution. Users can view basic information for each job, including Job ID, submission time, status, execution time, and more. By clicking on a specific job, users can access detailed information such as task distribution, resource utilization, and log outputs, allowing for real-time monitoring of job progress and timely handling of potential issues.\n',(0,i.yg)("img",{alt:"running.png",src:t(22449).A,width:"2207",height:"210"}),"\n",(0,i.yg)("img",{alt:"detail.png",src:t(33537).A,width:"2326",height:"940"})),(0,i.yg)("h3",{id:"finished-jobs"},"Finished Jobs"),(0,i.yg)("p",null,'The "Finished Jobs" section displays all SeaTunnel jobs that have either successfully completed or failed. This section provides execution results, completion times, durations, and failure reasons (if any) for each job. Users can review past job records through this module to analyze job performance, troubleshoot issues, or rerun specific jobs as needed.\n',(0,i.yg)("img",{alt:"finished.png",src:t(78368).A,width:"2159",height:"265"})),(0,i.yg)("h2",{id:"workers"},"Workers"),(0,i.yg)("h3",{id:"workers-information"},"Workers Information"),(0,i.yg)("p",null,'The "Workers" section displays detailed information about all worker nodes in the cluster, including each worker\'s address, running status, CPU and memory usage, number of tasks being executed, and more. Through this module, users can monitor the health of each worker node, promptly identify and address resource bottlenecks or node failures, ensuring the stable operation of the SeaTunnel cluster.\n',(0,i.yg)("img",{alt:"workers.png",src:t(90925).A,width:"2552",height:"349"})),(0,i.yg)("h2",{id:"master"},"Master"),(0,i.yg)("h3",{id:"master-information"},"Master Information"),(0,i.yg)("p",null,"The \"Master\" section provides the status and configuration information of the master node in the SeaTunnel cluster. Users can view the master's address, running status, job scheduling responsibilities, and overall resource allocation within the cluster. This module helps users gain a comprehensive understanding of the cluster's core management components, facilitating cluster configuration optimization and troubleshooting.\n",(0,i.yg)("img",{alt:"master.png",src:t(23524).A,width:"2552",height:"360"})))}g.isMDXComponent=!0},33537:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/detail-59c4f1a10b45a55aea5d0ae6b5c51e97.png"},78368:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/finished-6bdb0f8c55f25044dc25e536acd73539.png"},23524:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/master-4961fba8eb20c7b45cd39cd3cdc5969e.png"},68547:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/overview-038cbb8efa057a25425719427077df03.png"},22449:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/running-2c646bac60b33658079bbdc3d48581c7.png"},90925:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/workers-6dac8ee6a01e4fd83264bee70f3fdee8.png"}}]);