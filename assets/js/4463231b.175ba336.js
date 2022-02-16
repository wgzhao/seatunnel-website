"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7502],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),f=i,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},p="Split",s={unversionedId:"spark/configuration/transform-plugins/Split",id:"spark/configuration/transform-plugins/Split",title:"Split",description:"Transform plugin : Split [Spark]",source:"@site/docs/spark/configuration/transform-plugins/Split.md",sourceDirName:"spark/configuration/transform-plugins",slug:"/spark/configuration/transform-plugins/Split",permalink:"/docs/spark/configuration/transform-plugins/Split",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/transform-plugins/Split.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Json",permalink:"/docs/spark/configuration/transform-plugins/Json"},next:{title:"Sql",permalink:"/docs/spark/configuration/transform-plugins/Sql"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"delimiter string",id:"delimiter-string",children:[],level:3},{value:"fields list",id:"fields-list",children:[],level:3},{value:"source_field string",id:"source_field-string",children:[],level:3},{value:"target_field string",id:"target_field-string",children:[],level:3},{value:"common options string",id:"common-options-string",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"split"},"Split"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Transform plugin : Split ","[Spark]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Split string according to ",(0,a.kt)("inlineCode",{parentName:"p"},"delimiter")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},'" "(\u7a7a\u683c)')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fields"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source_field"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target_field"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"root"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"delimiter-string"},"delimiter ","[string]"),(0,a.kt)("p",null,"Separator, the input string is separated according to the separator. The default separator is a space ",(0,a.kt)("inlineCode",{parentName:"p"},'(" ")')," ."),(0,a.kt)("h3",{id:"fields-list"},"fields ","[list]"),(0,a.kt)("p",null,"In the split field name list, specify the field names of each character string after splitting in order. If the length of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," is greater than the length of the separation result, the extra fields are assigned null characters."),(0,a.kt)("h3",{id:"source_field-string"},"source_field ","[string]"),(0,a.kt)("p",null,"The source field of the string before being split, if not configured, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"raw_message")),(0,a.kt)("h3",{id:"target_field-string"},"target_field ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"target_field")," can specify the location where multiple split fields are added to the Event. If it is not configured, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"_root_")," , that is, all split fields will be added to the top level of the Event. If a specific field is specified, the divided field will be added to the next level of this field."),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/spark/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Split the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," field in the source data according to ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),", you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"field1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"field2")," as the key to get the corresponding value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_field = "message"\n    target_field = "info"\n    delimiter = ","\n    fields = ["field1", "field2"]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Split the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," field in the source data according to ",(0,a.kt)("inlineCode",{parentName:"p"},",")," , the split field is ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," , you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"info.field1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"info.field2")," as the key to get the corresponding value")))}c.isMDXComponent=!0}}]);