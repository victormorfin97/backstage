/*! For license information please see 1840c16d.88894db8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[81214],{603905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(r),y=a,m=s["".concat(u,".").concat(y)]||s[y]||f[y]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},74758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>i});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"plugin-catalog-import.steppreparecreatepullrequest",title:"StepPrepareCreatePullRequest()",description:"API reference for StepPrepareCreatePullRequest()"},p=void 0,u={unversionedId:"reference/plugin-catalog-import.steppreparecreatepullrequest",id:"reference/plugin-catalog-import.steppreparecreatepullrequest",title:"StepPrepareCreatePullRequest()",description:"API reference for StepPrepareCreatePullRequest()",source:"@site/../docs/reference/plugin-catalog-import.steppreparecreatepullrequest.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-import.steppreparecreatepullrequest",permalink:"/docs/reference/plugin-catalog-import.steppreparecreatepullrequest",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-import.steppreparecreatepullrequest.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-import.steppreparecreatepullrequest",title:"StepPrepareCreatePullRequest()",description:"API reference for StepPrepareCreatePullRequest()"}},c={},i=[{value:"Parameters",id:"parameters",level:2}],s={toc:i};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-catalog-import"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-catalog-import"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-catalog-import.steppreparecreatepullrequest"}),(0,n.kt)("inlineCode",{parentName:"a"},"StepPrepareCreatePullRequest"))),(0,n.kt)("p",null,"Prepares a pull request."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"function StepPrepareCreatePullRequest(props: StepPrepareCreatePullRequestProps): JSX.Element\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"props"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-catalog-import.steppreparecreatepullrequestprops"}),"StepPrepareCreatePullRequestProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"JSX.Element"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,p,u=a(e),c=1;c<arguments.length;c++){for(var i in l=Object(arguments[c]))r.call(l,i)&&(u[i]=l[i]);if(t){p=t(l);for(var s=0;s<p.length;s++)n.call(l,p[s])&&(u[p[s]]=l[p[s]])}}return u}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var l=60109,p=60110,u=60112;var c=60115,i=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),l=s("react.provider"),p=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),c=s("react.memo"),i=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function g(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||m}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=h.prototype=new b;v.constructor=h,n(v,g.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},l=null,p=null;if(null!=t)for(n in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),i=0;i<u;i++)c[i]=arguments[i+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:p,props:o,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,l){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var u=!1;if(null===e)u=!0;else switch(p){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return l=l(u=e),e=""===n?"."+q(u,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),_(l,t,r,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=n+q(p=e[c],c);u+=_(p,t,r,i,l)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),c=0;!(p=e.next()).done;)u+=_(p=p.value,t,r,i=n+q(p,c++),l);else if("object"===p)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);