/*! For license information please see cd485521.eed3d83c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[859947],{853792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"internationalization",title:"Internationalization (Experimental)",description:"Documentation on adding internationalization to the plugin"},a=void 0,u={unversionedId:"plugins/internationalization",id:"plugins/internationalization",title:"Internationalization (Experimental)",description:"Documentation on adding internationalization to the plugin",source:"@site/../docs/plugins/internationalization.md",sourceDirName:"plugins",slug:"/plugins/internationalization",permalink:"/docs/plugins/internationalization",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/internationalization.md",tags:[],version:"current",frontMatter:{id:"internationalization",title:"Internationalization (Experimental)",description:"Documentation on adding internationalization to the plugin"},sidebar:"docs",previous:{title:"Composability System",permalink:"/docs/plugins/composability"},next:{title:"Plugin Analytics",permalink:"/docs/plugins/analytics"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"For a plugin developer",id:"for-a-plugin-developer",level:2},{value:"For an application developer overwrite plugin messages",id:"for-an-application-developer-overwrite-plugin-messages",level:2}];function c(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Backstage core function provides internationalization for plugins"}),"\n",(0,r.jsx)(n.h2,{id:"for-a-plugin-developer",children:"For a plugin developer"}),"\n",(0,r.jsxs)(n.p,{children:["When you are creating your plugin, you have the possibility to use ",(0,r.jsx)(n.code,{children:"createTranslationRef"})," to define all messages for your plugin. For example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createTranslationRef } from '@backstage/core-plugin-api/alpha';\n\n/** @alpha */\nexport const myPluginTranslationRef = createTranslationRef({\n  id: 'plugin.my-plugin',\n  messages: {\n    index_page_title: 'All your components',\n    create_component_button_label: 'Create new component',\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"And the using this messages in your components like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useTranslationRef } from '@backstage/core-plugin-api/alpha';\n\nconst { t } = useTranslationRef(myPluginTranslationRef);\n\nreturn (\n  <PageHeader title={t('index_page_title')}>\n    <Button onClick={handleCreateComponent}>\n      {t('create_component_button_label')}\n    </Button>\n  </PageHeader>\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"for-an-application-developer-overwrite-plugin-messages",children:"For an application developer overwrite plugin messages"}),"\n",(0,r.jsx)(n.p,{children:"In an app you can both override the default messages, as well as register translations for additional languages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" const app = createApp({\n+  __experimentalTranslations: {\n+    availableLanguages: ['en', 'zh'],\n+    resources: [\n+      createTranslationMessages({\n+        ref: myPluginTranslationRef,\n+        messages: {\n+          create_component_button_label: 'Create new entity',\n+        },\n+      }),\n+      createTranslationResource({\n+        ref: myPluginTranslationRef,\n+        messages: {\n+          zh: () => import('./translations/zh'),\n+        },\n+      }),\n+    ],\n+  },\n })\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))t.call(i,l)&&(u[l]=i[l]);if(n){a=n(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(u[a[c]]=i[a[c]])}}return u}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)u.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,u=60110,s=60112;n.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),n.Fragment=p("react.fragment"),n.StrictMode=p("react.strict_mode"),n.Profiler=p("react.profiler"),a=p("react.provider"),u=p("react.context"),s=p("react.forward_ref"),n.Suspense=p("react.suspense"),l=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||y}function h(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var _=v.prototype=new h;_.constructor=v,r(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,i={},a=null,u=null;if(null!=n)for(r in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,r)&&!w.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:b.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,t,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+C(s,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),R(a,n,t,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+C(u=e[l],l);s+=R(u,n,t,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(u=e.next()).done;)s+=R(u=u.value,n,t,c=r+C(u,l++),a);else if("object"===u)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return s}function S(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:S,forEach:function(e,n,t){S(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},n.Component=m,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,s=b.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)j.call(n,c)&&!w.hasOwnProperty(c)&&(i[c]=void 0===n[c]&&void 0!==l?l[c]:n[c])}var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){l=Array(c);for(var p=0;p<c;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:s}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:u,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>u,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function u({components:e,children:n,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:u},n)}}}]);