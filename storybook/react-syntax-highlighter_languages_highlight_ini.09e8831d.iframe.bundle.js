(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5740],{"../node_modules/highlight.js/lib/languages/ini.js":(module,__unused_webpack_exports,__webpack_require__)=>{function source(re){return re?"string"==typeof re?re:re.source:null}function concat(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.map((function(x){return source(x)})).join("")}__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),module.exports=function ini(hljs){var NUMBERS={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:hljs.NUMBER_RE}]},COMMENTS=hljs.COMMENT();COMMENTS.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var VARIABLES={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},LITERALS={className:"literal",begin:/\bon|off|true|false|yes|no\b/},STRINGS={className:"string",contains:[hljs.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},ARRAY={begin:/\[/,end:/\]/,contains:[COMMENTS,LITERALS,VARIABLES,STRINGS,NUMBERS,"self"],relevance:0},ANY_KEY=function either(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return"("+args.map((function(x){return source(x)})).join("|")+")"}(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[COMMENTS,{className:"section",begin:/\[+/,end:/\]+/},{begin:concat(ANY_KEY,"(\\s*\\.\\s*",ANY_KEY,")*",function lookahead(re){return concat("(?=",re,")")}(/\s*=\s*[^#\s]/)),className:"attr",starts:{end:/$/,contains:[COMMENTS,ARRAY,LITERALS,VARIABLES,STRINGS,NUMBERS]}}]}}}}]);