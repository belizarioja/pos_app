import{c as r,a8 as s,a9 as i,K as l,h as d,e as u,g as c,at as f}from"./index.e415d045.js";var p=r({name:"QList",props:{...s,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=c(),n=i(e,a.proxy.$q),o=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:o.value},u(t.default))}});function v(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),f.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function m(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function q(e,t,a){if(a<=t)return t;const n=a-t+1;let o=t+(e-t)%n;return o<t&&(o=n+o),o===0?0:o}function b(e,t=2,a="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(a)+n}export{p as Q,m as b,v as c,q as n,b as p};
