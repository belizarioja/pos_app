import{c as i,K as r,h as s,e as p,$ as c,b4 as d,b5 as u,as as h}from"./index.66b20ca1.js";var m=i({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=r(()=>parseInt(e.lines,10)),n=r(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),a=r(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>s("div",{style:a.value,class:n.value},p(t.default))}});function l(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var b=c({name:"close-popup",beforeMount(e,{value:t}){const o={depth:l(t),handler(n){o.depth!==0&&setTimeout(()=>{const a=d(e);a!==void 0&&u(a,n,o.depth)})},handlerKey(n){h(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=l(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{b as C,m as Q};
