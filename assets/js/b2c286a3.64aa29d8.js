/*! For license information please see b2c286a3.64aa29d8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[931669],{973889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const c={id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"},i=void 0,s={unversionedId:"reference/plugin-search-backend-node.testpipeline",id:"reference/plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline",source:"@site/../docs/reference/plugin-search-backend-node.testpipeline.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.testpipeline",permalink:"/docs/reference/plugin-search-backend-node.testpipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.testpipeline.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"}},a={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline",children:(0,r.jsx)(t.code,{children:"TestPipeline"})})]}),"\n",(0,r.jsx)(t.p,{children:"Test utility for Backstage Search collators, decorators, and indexers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class TestPipeline \n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"An example test checking that a collator provides expected documents."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"it('provides expected documents', async () => {\n  const testSubject = await yourCollatorFactory.getCollator();\n  const pipeline = TestPipeline.fromCollator(testSubject);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(2);\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"An example test checking that a decorator behaves as expected."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"it('filters private documents', async () => {\n  const testSubject = await yourDecoratorFactory.getDecorator();\n  const pipeline = TestPipeline\n    .fromDecorator(testSubject)\n    .withDocuments([{ title: 'Private', location: '/private', text: '' }]);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(0);\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.execute",children:"execute()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Execute the test pipeline so that you can make assertions about the result or behavior of the given test subject."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromcollator",children:"fromCollator(collator)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given a collator you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromdecorator",children:"fromDecorator(decorator)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given a decorator you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromindexer",children:"fromIndexer(indexer)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given an indexer you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withcollator",children:"withCollator(collator)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add a collator to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdecorator",children:"withDecorator(decorator)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add a decorator to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdocuments",children:"withDocuments(documents)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide documents for testing decorators and indexers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withindexer",children:"withIndexer(indexer)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add an indexer to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withsubject",children:"withSubject(subject)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Provide the collator, decorator, or indexer to be tested."})]})]})]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in c=Object(arguments[a]))n.call(c,l)&&(s[l]=c[l]);if(t){i=t(c);for(var d=0;d<i.length;d++)r.call(c,i[d])&&(s[i[d]]=c[i[d]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:c,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,a=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),c=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),s=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function j(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var b=m.prototype=new y;b.constructor=m,r(b,j.prototype),b.isPureReactComponent=!0;var v={current:null},g=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,c={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,r)&&!_.hasOwnProperty(r)&&(c[r]=t[r]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];c.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===c[r]&&(c[r]=a[r]);return{$$typeof:o,type:e,key:i,ref:s,props:c,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return i=i(a=e),e=""===r?"."+S(a,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+S(s=e[l],l);a+=O(s,t,n,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)a+=O(s=s.value,t,n,d=r+S(s,l++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(f(321));return e}var T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=j,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var c=r({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=v.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)g.call(t,d)&&!_.hasOwnProperty(d)&&(c[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)c.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];c.children=l}return{$$typeof:o,type:e.type,key:i,ref:s,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(o.Provider,{value:s},t)}}}]);