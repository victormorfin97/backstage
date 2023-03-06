/*! For license information please see 950fab60.a289d74a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[223889],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},316008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});a(827378);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},s=void 0,l={permalink:"/blog/2023/01/31/incremental-entity-provider",source:"@site/../microsite/blog/2023-01-31-incremental-entity-provider.md",title:"Scaling Backstage Ingestion with Incremental Entity Providers",description:"At the heart of Backstage is the Backstage Software Catalog, which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets.",date:"2023-01-31T00:00:00.000Z",formattedDate:"January 31, 2023",tags:[],readingTime:4.785,hasTruncateMarker:!0,authors:[{name:"Paul Cowan & Taras Mankovski",url:"https://frontside.com/"}],frontMatter:{title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},prevItem:{title:"What\u2019s Ahead in 2023?",permalink:"/blog/2023/02/06/whats-ahead-in-2023"},nextItem:{title:"Backstage Wrapped 2022",permalink:"/blog/2022/12/19/backstage-wrapped-2022"}},c={authorsImageUrls:[void 0]},p=[{value:"Entity Providers",id:"entity-providers",level:2},{value:"Incremental entity providers",id:"incremental-entity-providers",level:2},{value:"Go forth and ingest!",id:"go-forth-and-ingest",level:2}],u={toc:p};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At the heart of ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/"}),"Backstage")," is the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/"}),"Backstage Software Catalog"),", which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"catalog pipeline",src:a(377382).Z,width:"451",height:"241"})),(0,n.kt)("p",null,"A common use case is for an organization to want to surface ownership and metadata about repositories. Backstage provides a mechanism for discovering and transforming repository information into a standard data structure and persisting it into the Backstage ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/"}),"Catalog"),". This process is known as ingestion, where all data is transformed into a standard Backstage data structure known as an entity. Entities in the Catalog\u2019s data store are accessible to the Backstage App via the REST API."),(0,n.kt)("p",null,"Data is transformed into entities via what is known as the ingestion and processing loop, which can be thought of as an ",(0,n.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Extract,_transform,_load"}),"extract, transform and load (ETL) pipeline"),", where raw data such as GitHub repositories are loaded from GitHub, transformed into entities and outputted to the Catalog."),(0,n.kt)("h2",r({},{id:"entity-providers"}),"Entity Providers"),(0,n.kt)("p",null,"Backstage offers what are known as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity"}),"entity providers")," as a means for ingesting the raw data into the pipeline and transforming them into Backstage entities. For example, Backstage comes with a ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/reference/plugin-catalog-backend-module-github"}),"GitHub Entity Provider")," that finds all catalog-info.yaml files in GitHub repositories. The processing loop transforms them into Backstage entities and subsequently persists them to the software catalog."),(0,n.kt)("p",null,"Entity providers are a relatively new abstraction and the recommended way to ingest data into the catalog. The Backstage catalog engine starts each registered entity provider, which connects to its data source (e.g., the GitHub Entity Provider connects to GitHub). The entity provider will query the external data source and convert the data into the entity format. Finally, the entity provider issues what is known as a mutation to the catalog engine. A mutation is a signal from the entity provider to the catalog engine that entities are available to be processed and stored."),(0,n.kt)("p",null,"A mutation can be either a full mutation or a delta mutation. A full mutation replaces all entities previously ingested by the entity provider with a new set of entities. The entity provider will remove all entities not found in the latest ingestion. A full mutation can be used to ingest relatively small datasets (less than 10,000 entities); however, ingesting more during a full ingestion may cause out-of-memory errors and delay the processing of entities from other entity providers. A delta mutation can surgically add and remove entities from the catalog. A delta mutation is useful when the data source provides events-based APIs like webhooks, which allows the Backstage catalog engine to ingest a small number of entities as they get added, updated and/or deleted."),(0,n.kt)("h2",r({},{id:"incremental-entity-providers"}),"Incremental entity providers"),(0,n.kt)("p",null,"A large organization typically deals with massive datasets. Until recently, ingesting large datasets with entity providers has been problematic because performing a full ingestion resulted in out-of-memory errors, and many data sources don\u2019t provide webhooks or other events-based APIs. At the same time, the datasets were too large to efficiently manage through targeted delta mutations."),(0,n.kt)("p",null,"This is a problem that ",(0,n.kt)("a",r({parentName:"p"},{href:"http://hp.com"}),"DevEx team at HP")," faced when building their software catalog with Backstage. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/dekoding"}),"Damon Kaswell"),", Senior Application Developer on the DevEx team at HP, shared their experience at ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=5qHyZntKXRU&list=PLj6h78yzYM2OKySsTuiip3BqmdYZQRnSf&index=13"}),"BackstageCon 2022"),", detailing the problem and the solution that ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," created in collaboration with developers on HP\u2019s DevEx team."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Damon Kaswell",src:a(252896).Z,width:"204",height:"224"})),(0,n.kt)("p",null,"The solution HP and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," arrived at was to implement an incremental entity provider. An incremental entity provider effectively performs a full mutation using a series of delta mutations combined with a mark and sweep mechanism. It paginates through the dataset, tracking entities retrieved from each page and the cursor of the next page, pausing ingestion every few seconds to give the processing loop time to process existing entities. Once it reaches the end of the dataset, it determines which entities were not ingested during this ingestion cycle and emits a delta mutation to delete unmarked entities."),(0,n.kt)("p",null,"Simply by adding a few new tables to the database schema, the incremental ingestion entity provider converts any existing entity provider into an incremental entity provider. These tables allow the incremental entity provider to be long-lived and keep track of its current location in the dataset by persisting a cursor that it uses to page through any large dataset. The larger the dataset, the more pages of data or bursts of work the incremental entity provider will ingest\u2014but there will be no out-of-memory errors, effectively removing scalability problems."),(0,n.kt)("p",null,"The results speak for themselves. Migrating from regular entity providers to incremental entity providers reduced ingestion time by 92% \u2013 from over 4 and a half hours to just 20 minutes. Incremental entity providers eliminated the ingestion maintenance burden from being a constant problem to a non-issue. Writing reliable integration with external services can now be done in days instead of weeks."),(0,n.kt)("h2",r({},{id:"go-forth-and-ingest"}),"Go forth and ingest!"),(0,n.kt)("p",null,"Backstage provides a robust framework for ingesting data from external sources, but HP needed to scale it beyond its design. The Backstage framework allowed ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," and HP\u2019s developers to extend it with a plugin to support HP\u2019s scaling requirements."),(0,n.kt)("p",null,"We're delighted to share that as of ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/14356"}),"this PR"),", the incremental ingestion backend is available for anyone to use with Backstage. The solution was released open source as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion#backstageplugin-catalog-backend-module-incremental-ingestion"}),"@backstage/plugin-catalog-backend-module-incremental-ingestion")," and contains a package for creating incremental entity providers. The plugin's ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion"}),"repository README")," has detailed configuration and usage outlined."),(0,n.kt)("p",null,"The incremental ingestion entity provider is an excellent addition to the Backstage stack. Battle-tested on large datasets, the incremental entity provider is a significant step forward in smoothing the path to successful ingestion at scale."))}d.isMDXComponent=!0},377382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-pipeline-1c001702d710f795d338a19754eacfcf.png"},252896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/damon-32d83539fe147296dc9e4b3c3bcab6ff.jpg"},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))a.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},541535:(e,t,a)=>{var n=a(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}function y(){}function v(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=v.prototype=new y;b.constructor=v,n(b,m.prototype),b.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,a){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,a,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+E(l,0):n,Array.isArray(i)?(a="",null!=e&&(a=e.replace(T,"$&/")+"/"),x(i,t,a,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+E(s=e[c],c);l+=x(s,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=x(s=s.value,t,a,p=n+E(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,a){if(null==e)return e;var n=[],r=0;return x(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function A(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,a)=>{a(541535)}}]);