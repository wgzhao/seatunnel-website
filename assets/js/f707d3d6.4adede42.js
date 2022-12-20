"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73858],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32457:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],l={sidebar_position:3},a="Run Job With Cluster Mode",c={unversionedId:"seatunnel-engine/cluster-mode",id:"seatunnel-engine/cluster-mode",title:"Run Job With Cluster Mode",description:"This is the most recommended way to use SeaTunnel Engine in the production environment. Full functionality of SeaTunnel Engine is supported in this mode and the cluster mode will have better performance and stability.",source:"@site/docs/seatunnel-engine/cluster-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/cluster-mode",permalink:"/docs/seatunnel-engine/cluster-mode",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/cluster-mode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Run Job With Local Mode",permalink:"/docs/seatunnel-engine/local-mode"},next:{title:"Checkpoint Storage",permalink:"/docs/seatunnel-engine/checkpoint-storage"}},s={},p=[{value:"Deploy SeaTunnel Engine Cluster",id:"deploy-seatunnel-engine-cluster",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-job-with-cluster-mode"},"Run Job With Cluster Mode"),(0,i.kt)("p",null,"This is the most recommended way to use SeaTunnel Engine in the production environment. Full functionality of SeaTunnel Engine is supported in this mode and the cluster mode will have better performance and stability."),(0,i.kt)("p",null,"In the cluster mode, the SeaTunnel Engine cluster needs to be deployed first, and the client will submit the job to the SeaTunnel Engine cluster for running."),(0,i.kt)("h2",{id:"deploy-seatunnel-engine-cluster"},"Deploy SeaTunnel Engine Cluster"),(0,i.kt)("p",null,"Deploy a SeaTunnel Engine Cluster reference ",(0,i.kt)("a",{parentName:"p",href:"/docs/seatunnel-engine/deployment"},"SeaTunnel Engine Cluster Deploy")))}f.isMDXComponent=!0}}]);