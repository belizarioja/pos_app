import{c as s,a0 as r,a2 as i,K as l,h as d,e as c,g as u,ah as g}from"./index.e50cf7d5.js";var v=s({name:"QList",props:{...r,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=u(),n=i(e,a.proxy.$q),o=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:o.value},c(t.default))}});function m(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),g.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function p(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function q(e,t,a){if(a<=t)return t;const n=a-t+1;let o=t+(e-t)%n;return o<t&&(o=n+o),o===0?0:o}export{v as Q,p as b,m as c,q as n};
