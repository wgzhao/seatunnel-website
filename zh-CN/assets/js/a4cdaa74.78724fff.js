"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25662],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21320:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="OneSignal",c={unversionedId:"connector-v2/source/OneSignal",id:"version-2.3.3/connector-v2/source/OneSignal",title:"OneSignal",description:"OneSignal source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/OneSignal.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/OneSignal",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/OneSignal",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/OneSignal.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"OceanBase",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/OceanBase"},next:{title:"OpenMldb",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/OpenMldb"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url String",id:"url-string",level:3},{value:"password String",id:"password-string",level:3},{value:"method String",id:"method-string",level:3},{value:"params Map",id:"params-map",level:3},{value:"body String",id:"body-string",level:3},{value:"poll_interval_ms int",id:"poll_interval_ms-int",level:3},{value:"retry int",id:"retry-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"retry_backoff_max_ms int",id:"retry_backoff_max_ms-int",level:3},{value:"format String",id:"format-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"content_json String",id:"content_json-string",level:3},{value:"json_field Config",id:"json_field-config",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"onesignal"},"OneSignal"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"OneSignal source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to read data from OneSignal."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"get")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema.fields"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json_field"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content_json"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poll_interval_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_backoff_max_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"10000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_multi_lines"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"url-string"},"url ","[String]"),(0,l.kt)("p",null,"http request url"),(0,l.kt)("h3",{id:"password-string"},"password ","[String]"),(0,l.kt)("p",null,"Auth key for login, you can get more detail at this link:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key"},"https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key")),(0,l.kt)("h3",{id:"method-string"},"method ","[String]"),(0,l.kt)("p",null,"http request method, only supports GET, POST method"),(0,l.kt)("h3",{id:"params-map"},"params ","[Map]"),(0,l.kt)("p",null,"http params"),(0,l.kt)("h3",{id:"body-string"},"body ","[String]"),(0,l.kt)("p",null,"http body"),(0,l.kt)("h3",{id:"poll_interval_ms-int"},"poll_interval_ms ","[int]"),(0,l.kt)("p",null,"request http api interval(millis) in stream mode"),(0,l.kt)("h3",{id:"retry-int"},"retry ","[int]"),(0,l.kt)("p",null,"The max retry times if request http return to ",(0,l.kt)("inlineCode",{parentName:"p"},"IOException")),(0,l.kt)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,l.kt)("p",null,"The retry-backoff times(millis) multiplier if request http failed"),(0,l.kt)("h3",{id:"retry_backoff_max_ms-int"},"retry_backoff_max_ms ","[int]"),(0,l.kt)("p",null,"The maximum retry-backoff times(millis) if request http failed"),(0,l.kt)("h3",{id:"format-string"},"format ","[String]"),(0,l.kt)("p",null,"the format of upstream data, now only support ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", default ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,l.kt)("p",null,"when you assign format is ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,l.kt)("p",null,"upstream data is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,l.kt)("p",null,"you should assign schema as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.kt)("p",null,"connector will generate data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"data"),(0,l.kt)("th",{parentName:"tr",align:null},"success"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"get success"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"when you assign format is ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,l.kt)("p",null,"upstream data is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": "get success",\n  "success": true\n}\n')),(0,l.kt)("p",null,"connector will generate data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,l.kt)("h3",{id:"schema-config"},"schema ","[Config]"),(0,l.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.kt)("p",null,"the schema fields of upstream data"),(0,l.kt)("h3",{id:"content_json-string"},"content_json ","[String]"),(0,l.kt)("p",null,"This parameter can get some json data.If you only need the data in the 'book' section, configure ",(0,l.kt)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"'),"."),(0,l.kt)("p",null,"If your return data looks something like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,l.kt)("p",null,"You can configure ",(0,l.kt)("inlineCode",{parentName:"p"},'content_field = "$.store.book.*"')," and the result returned looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "category": "reference",\n    "author": "Nigel Rees",\n    "title": "Sayings of the Century",\n    "price": 8.95\n  },\n  {\n    "category": "fiction",\n    "author": "Evelyn Waugh",\n    "title": "Sword of Honour",\n    "price": 12.99\n  }\n]\n')),(0,l.kt)("p",null,"Then you can get the desired result with a simpler schema,like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'Http {\n  url = "http://mockserver:1080/contentjson/mock"\n  method = "GET"\n  format = "json"\n  content_field = "$.store.book.*"\n  schema = {\n    fields {\n      category = string\n      author = string\n      title = string\n      price = string\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test data can be found at this link ",(0,l.kt)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,l.kt)("li",{parentName:"ul"},"See this link for task configuration ",(0,l.kt)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_contentjson_to_assert.conf"},"http_contentjson_to_assert.conf"),".")),(0,l.kt)("h3",{id:"json_field-config"},"json_field ","[Config]"),(0,l.kt)("p",null,"This parameter helps you configure the schema,so this parameter must be used with schema."),(0,l.kt)("p",null,"If your data looks something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  },\n  "expensive": 10\n}\n')),(0,l.kt)("p",null,"You can get the contents of 'book' by configuring the task as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Http {\n    url = "http://mockserver:1080/jsonpath/mock"\n    method = "GET"\n    format = "json"\n    json_field = {\n      category = "$.store.book[*].category"\n      author = "$.store.book[*].author"\n      title = "$.store.book[*].title"\n      price = "$.store.book[*].price"\n    }\n    schema = {\n      fields {\n        category = string\n        author = string\n        title = string\n        price = string\n      }\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test data can be found at this link ",(0,l.kt)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/mockserver-config.json"},"mockserver-config.json")),(0,l.kt)("li",{parentName:"ul"},"See this link for task configuration ",(0,l.kt)("a",{parentName:"li",href:"../../../../seatunnel-e2e/seatunnel-connector-v2-e2e/connector-http-e2e/src/test/resources/http_jsonpath_to_assert.conf"},"http_jsonpath_to_assert.conf"),".")),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.3/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\nOneSignal {\n    url = "https://onesignal.com/api/v1/apps"\n    password = "SeaTunnel-test"\n    schema = {\n       fields {\n         id = string\n         name = string\n         gcm_key = string\n         chrome_key = string\n         chrome_web_key = string\n         chrome_web_origin = string\n         chrome_web_gcm_sender_id = string\n         chrome_web_default_notification_icon = string\n         chrome_web_sub_domain = string\n         apns_env = string\n         apns_certificates = string\n         apns_p8 = string\n         apns_team_id = string\n         apns_key_id = string\n         apns_bundle_id = string\n         safari_apns_certificate = string\n         safari_site_origin = string\n         safari_push_id = string\n         safari_icon_16_16 = string\n         safari_icon_32_32 = string\n         safari_icon_64_64 = string\n         safari_icon_128_128 = string\n         safari_icon_256_256 = string\n         site_name = string\n         created_at = string\n         updated_at = string\n         players = int\n         messageable_players = int\n         basic_auth_key = string\n         additional_data_is_root_payload = string\n       }\n    }   \n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add OneSignal Source Connector"),(0,l.kt)("li",{parentName:"ul"},"[Feature][Connector-V2]","[HTTP]"," Use json-path parsing (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3510"},"3510"),")")))}d.isMDXComponent=!0}}]);