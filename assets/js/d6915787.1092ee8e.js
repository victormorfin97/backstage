/*! For license information please see d6915787.1092ee8e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[467591],{916543:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(824246),s=r(511151);const o={id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"},c=void 0,i={unversionedId:"reference/plugin-kubernetes-common",id:"reference/plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common",source:"@site/../docs/reference/plugin-kubernetes-common.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common",permalink:"/docs/reference/plugin-kubernetes-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"}},d={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-kubernetes-common"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Common functionalities for Kubernetes, to be shared between the ",(0,t.jsx)(n.code,{children:"kubernetes"})," and ",(0,t.jsx)(n.code,{children:"kubernetes-backend"})," plugins"]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcontainerstatus",children:"ClientContainerStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",children:"ClientCurrentResourceUsage"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientpodstatus",children:"ClientPodStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:"ClusterAttributes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterobjects",children:"ClusterObjects"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.configmapfetchresponse",children:"ConfigMapFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.cronjobsfetchresponse",children:"CronJobsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customobjectsbyentityrequest",children:"CustomObjectsByEntityRequest"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcefetchresponse",children:"CustomResourceFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcematcher",children:"CustomResourceMatcher"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.daemonsetsfetchresponse",children:"DaemonSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",children:"DeploymentFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentresources",children:"DeploymentResources"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederror",children:"DetectedError"})}),(0,t.jsx)(n.td,{children:"Represents an error found on a Kubernetes object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.docssolution",children:"DocsSolution"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errormapper",children:"ErrorMapper"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.eventssolution",children:"EventsSolution"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupedresponses",children:"GroupedResponses"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.horizontalpodautoscalersfetchresponse",children:"HorizontalPodAutoscalersFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.ingressesfetchresponse",children:"IngressesFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.jobsfetchresponse",children:"JobsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestbody",children:"KubernetesRequestBody"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.limitrangefetchresponse",children:"LimitRangeFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.logsolution",children:"LogSolution"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podfetchresponse",children:"PodFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podstatusfetchresponse",children:"PodStatusFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfixbase",children:"ProposedFixBase"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.rawfetcherror",children:"RawFetchError"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.replicasetsfetchresponse",children:"ReplicaSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.resourceref",children:"ResourceRef"})}),(0,t.jsx)(n.td,{children:"A reference to a Kubernetes object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.servicefetchresponse",children:"ServiceFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statefulsetsfetchresponse",children:"StatefulSetsFetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statuserror",children:"StatusError"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.workloadsbyentityrequest",children:"WorkloadsByEntityRequest"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server_ca",children:"ANNOTATION_KUBERNETES_API_SERVER_CA"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the Certificate Authority of an API server for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server",children:"ANNOTATION_KUBERNETES_API_SERVER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the API server of a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_auth_provider",children:"ANNOTATION_KUBERNETES_AUTH_PROVIDER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the auth provider for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_assume_role",children:"ANNOTATION_KUBERNETES_AWS_ASSUME_ROLE"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the assume role use to authenticate with AWS."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_external_id",children:"ANNOTATION_KUBERNETES_AWS_EXTERNAL_ID"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying an external id when communicating with AWS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_app",children:"ANNOTATION_KUBERNETES_DASHBOARD_APP"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the dashboard app for a Kubernetes cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_url",children:"ANNOTATION_KUBERNETES_DASHBOARD_URL"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the dashboard url for a Kubernetes cluster."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_oidc_token_provider",children:"ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying the oidc provider used to get id tokens for a Kubernetes cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_metrics_lookup",children:"ANNOTATION_KUBERNETES_SKIP_METRICS_LOOKUP"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying boolean value for skip metric lookup."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",children:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"})}),(0,t.jsx)(n.td,{children:"Annotation for specifying boolean value for skip tls verify."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detecterrors",children:"detectErrors"})}),(0,t.jsx)(n.td,{children:"For each cluster try to find errors in each of the object types provided returning a map of cluster names to errors in that cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupresponses",children:"groupResponses"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetespermissions",children:"kubernetesPermissions"})}),(0,t.jsx)(n.td,{children:"List of all Kubernetes permissions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesproxypermission",children:"kubernetesProxyPermission"})}),(0,t.jsx)(n.td,{children:"This permission is used to check access to the proxy endpoint"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.authprovidertype",children:"AuthProviderType"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederrorsbycluster",children:"DetectedErrorsByCluster"})}),(0,t.jsx)(n.td,{children:"A list of errors keyed by Cluster name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errorseverity",children:"ErrorSeverity"})}),(0,t.jsx)(n.td,{children:"Severity of the error, where 10 is critical and 0 is very low."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.fetchresponse",children:"FetchResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kuberneteserrortypes",children:"KubernetesErrorTypes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesfetcherror",children:"KubernetesFetchError"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestauth",children:"KubernetesRequestAuth"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfix",children:"ProposedFix"})}),(0,t.jsx)(n.td,{})]})]})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var o,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),d=1;d<arguments.length;d++){for(var l in o=Object(arguments[d]))r.call(o,l)&&(i[l]=o[l]);if(n){c=n(o);for(var u=0;u<c.length;u++)t.call(o,c[u])&&(i[c[u]]=o[c[u]])}}return i}},371426:(e,n,r)=>{r(862525);var t=r(827378),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),n.Fragment=o("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,u=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:c.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),s=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var c=60109,i=60110,d=60112;n.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),o=a("react.portal"),n.Fragment=a("react.fragment"),n.StrictMode=a("react.strict_mode"),n.Profiler=a("react.profiler"),c=a("react.provider"),i=a("react.context"),d=a("react.forward_ref"),n.Suspense=a("react.suspense"),l=a("react.memo"),u=a("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function m(){}function b(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var y=b.prototype=new m;y.constructor=b,t(y,x.prototype),y.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function v(e,n,r){var t,o={},c=null,i=null;if(null!=n)for(t in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)k.call(n,t)&&!_.hasOwnProperty(t)&&(o[t]=n[t]);var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){for(var l=Array(d),u=0;u<d;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(t in d=e.defaultProps)void 0===o[t]&&(o[t]=d[t]);return{$$typeof:s,type:e,key:c,ref:i,props:o,_owner:g.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var R=/\/+/g;function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,r,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var d=!1;if(null===e)d=!0;else switch(i){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case s:case o:d=!0}}if(d)return c=c(d=e),e=""===t?"."+A(d,0):t,Array.isArray(c)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),O(c,n,r,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:s,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||d&&d.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),n.push(c)),1;if(d=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+A(i=e[l],l);d+=O(i,n,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)d+=O(i=i.value,n,r,u=t+A(i,l++),c);else if("object"===i)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return d}function S(e,n,r){if(null==e)return e;var t=[],s=0;return O(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function N(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function w(){var e=T.current;if(null===e)throw Error(f(321));return e}var C={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(f(143));return e}},n.Component=x,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,n.cloneElement=function(e,n,r){if(null==e)throw Error(f(267,e));var o=t({},e.props),c=e.key,i=e.ref,d=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,d=g.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)k.call(n,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var a=0;a<u;a++)l[a]=arguments[a+2];o.children=l}return{$$typeof:s,type:e.type,key:c,ref:i,props:o,_owner:d}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=v,n.createFactory=function(e){var n=v.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:N}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return w().useCallback(e,n)},n.useContext=function(e,n){return w().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return w().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return w().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return w().useLayoutEffect(e,n)},n.useMemo=function(e,n){return w().useMemo(e,n)},n.useReducer=function(e,n,r){return w().useReducer(e,n,r)},n.useRef=function(e){return w().useRef(e)},n.useState=function(e){return w().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>o});var t=r(667294);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:o(e),t.createElement(s.Provider,{value:i},n)}}}]);