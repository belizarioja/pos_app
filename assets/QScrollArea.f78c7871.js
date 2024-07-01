import{ai as ce,aj as C,U as ve,ak as de,al as w,am as A,an as N,ao as T,ap as B,aq as O,s as fe,c as he,a0 as me,r as m,a2 as be,K as d,ar as pe,P as ze,o as ye,a as Se,T as ge,h as y,S as Ce,a6 as R,g as qe,as as D,at as U}from"./index.08a8f3c6.js";import{a as V,Q as _e}from"./QResizeObserver.308bbc63.js";import{c as Ee,b as P}from"./format.461cb615.js";const k={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Me=Object.keys(k);k.all=!0;function K(i){const a={};for(const s of Me)i[s]===!0&&(a[s]=!0);return Object.keys(a).length===0?k:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const we=["INPUT","TEXTAREA"];function I(i,a){return a.event===void 0&&i.target!==void 0&&i.target.draggable!==!0&&typeof a.handler=="function"&&we.includes(i.target.nodeName.toUpperCase())===!1&&(i.qClonedBy===void 0||i.qClonedBy.indexOf(a.uid)===-1)}function H(i,a,s){const f=B(i);let e,l=f.left-a.event.x,o=f.top-a.event.y,t=Math.abs(l),v=Math.abs(o);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?e=l<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=o<0?"up":"down":u.up===!0&&o<0?(e="up",t>v&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.down===!0&&o>0?(e="down",t>v&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.left===!0&&l<0?(e="left",t<v&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down"))):u.right===!0&&l>0&&(e="right",t<v&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down")));let p=!1;if(e===void 0&&s===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,p=!0,e==="left"||e==="right"?(f.left-=l,t=0,l=0):(f.top-=o,v=0,o=0)}return{synthetic:p,payload:{evt:i,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:f,direction:e,isFirst:a.event.isFirst,isFinal:s===!0,duration:Date.now()-a.event.time,distance:{x:t,y:v},offset:{x:l,y:o},delta:{x:f.left-a.event.lastX,y:f.top-a.event.lastY}}}}let Pe=0;var G=ce({name:"touch-pan",beforeMount(i,{value:a,modifiers:s}){if(s.mouse!==!0&&C.has.touch!==!0)return;function f(l,o){s.mouse===!0&&o===!0?fe(l):(s.stop===!0&&T(l),s.prevent===!0&&N(l))}const e={uid:"qvtp_"+Pe++,handler:a,modifiers:s,direction:K(s),noop:ve,mouseStart(l){I(l,e)&&de(l)&&(w(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(I(l,e)){const o=l.target;w(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,o){if(C.is.firefox===!0&&A(i,!0),e.lastEvt=l,o===!0||s.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&N(u),l.cancelBubble===!0&&T(u),Object.assign(u,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:u}}T(l)}const{left:t,top:v}=B(l);e.event={x:t,y:v,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:v}},move(l){if(e.event===void 0)return;const o=B(l),t=o.left-e.event.x,v=o.top-e.event.y;if(t===0&&v===0)return;e.lastEvt=l;const u=e.event.mouse===!0,p=()=>{f(l,u);let b;s.preserveCursor!==!0&&s.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ee(),e.styleCleanup=S=>{if(e.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),u===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{q(),S()},50):q()}else S!==void 0&&S()}};if(e.event.detected===!0){e.event.isFirst!==!0&&f(l,e.event.mouse);const{payload:b,synthetic:S}=H(l,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=S===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(l);return}const z=Math.abs(t),h=Math.abs(v);z!==h&&(e.direction.horizontal===!0&&z>h||e.direction.vertical===!0&&z<h||e.direction.up===!0&&z<h&&v<0||e.direction.down===!0&&z<h&&v>0||e.direction.left===!0&&z>h&&t<0||e.direction.right===!0&&z>h&&t>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,o){if(e.event!==void 0){if(O(e,"temp"),C.is.firefox===!0&&A(i,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(H(l===void 0?e.lastEvt:l,e).payload);const{payload:t}=H(l===void 0?e.lastEvt:l,e,!0),v=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(i.__qtouchpan=e,s.mouse===!0){const l=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";w(e,"main",[[i,"mousedown","mouseStart",`passive${l}`]])}C.has.touch===!0&&w(e,"main",[[i,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[i,"touchmove","noop","notPassiveCapture"]])},updated(i,a){const s=i.__qtouchpan;s!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&s.end(),s.handler=a.value),s.direction=K(a.modifiers))},beforeUnmount(i){const a=i.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),O(a,"main"),O(a,"temp"),C.is.firefox===!0&&A(i,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete i.__qtouchpan)}});const J=["vertical","horizontal"],j={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},W={prevent:!0,mouse:!0,mouseAllDir:!0},Z=i=>i>=250?50:Math.ceil(i/5);var De=he({name:"QScrollArea",props:{...me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(i,{slots:a,emit:s}){const f=m(!1),e=m(!1),l=m(!1),o={vertical:m(0),horizontal:m(0)},t={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:v}=qe(),u=be(i,v.$q);let p=null,z;const h=m(null),b=d(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=d(()=>{const r=t.vertical.size.value-o.vertical.value;if(r<=0)return 0;const n=P(t.vertical.position.value/r,0,1);return Math.round(n*1e4)/1e4}),t.vertical.thumbHidden=d(()=>(i.visible===null?l.value:i.visible)!==!0&&f.value===!1&&e.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=d(()=>t.vertical.percentage.value*(o.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=d(()=>Math.round(P(o.vertical.value*o.vertical.value/t.vertical.size.value,Z(o.vertical.value),o.vertical.value))),t.vertical.style=d(()=>({...i.thumbStyle,...i.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=d(()=>{const r=t.horizontal.size.value-o.horizontal.value;if(r<=0)return 0;const n=P(Math.abs(t.horizontal.position.value)/r,0,1);return Math.round(n*1e4)/1e4}),t.horizontal.thumbHidden=d(()=>(i.visible===null?l.value:i.visible)!==!0&&f.value===!1&&e.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=d(()=>t.horizontal.percentage.value*(o.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=d(()=>Math.round(P(o.horizontal.value*o.horizontal.value/t.horizontal.size.value,Z(o.horizontal.value),o.horizontal.value))),t.horizontal.style=d(()=>({...i.thumbStyle,...i.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=d(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?i.contentStyle:i.contentActiveStyle),q=[[G,r=>{L(r,"vertical")},void 0,{vertical:!0,...W}]],x=[[G,r=>{L(r,"horizontal")},void 0,{horizontal:!0,...W}]];function $(){const r={};return J.forEach(n=>{const c=t[n];r[n+"Position"]=c.position.value,r[n+"Percentage"]=c.percentage.value,r[n+"Size"]=c.size.value,r[n+"ContainerSize"]=o[n].value}),r}const F=pe(()=>{const r=$();r.ref=v,s("scroll",r)},0);function X(r,n,c){if(J.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?U:D)(h.value,n,c)}function ee({height:r,width:n}){let c=!1;o.vertical.value!==r&&(o.vertical.value=r,c=!0),o.horizontal.value!==n&&(o.horizontal.value=n,c=!0),c===!0&&_()}function te({position:r}){let n=!1;t.vertical.position.value!==r.top&&(t.vertical.position.value=r.top,n=!0),t.horizontal.position.value!==r.left&&(t.horizontal.position.value=r.left,n=!0),n===!0&&_()}function le({height:r,width:n}){t.horizontal.size.value!==n&&(t.horizontal.size.value=n,_()),t.vertical.size.value!==r&&(t.vertical.size.value=r,_())}function L(r,n){const c=t[n];if(r.isFirst===!0){if(c.thumbHidden.value===!0)return;z=c.position.value,e.value=!0}else if(e.value!==!0)return;r.isFinal===!0&&(e.value=!1);const g=j[n],M=o[n].value,ne=(c.size.value-M)/(M-c.thumbSize.value),ue=r.distance[g.dist],se=z+(r.direction===g.dir?1:-1)*ue*ne;Q(se,n)}function Y(r,n){const c=t[n];if(c.thumbHidden.value!==!0){const g=r[j[n].offset];if(g<c.thumbStart.value||g>c.thumbStart.value+c.thumbSize.value){const M=g-c.thumbSize.value/2;Q(M/o[n].value*c.size.value,n)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function re(r){Y(r,"vertical")}function ae(r){Y(r,"horizontal")}function _(){f.value=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,f.value=!1},i.delay),i.onScroll!==void 0&&F()}function Q(r,n){h.value[j[n].scroll]=r}function oe(){l.value=!0}function ie(){l.value=!1}let E=null;return ze(()=>v.$q.lang.rtl,r=>{h.value!==null&&D(h.value,Math.abs(t.horizontal.position.value)*(r===!0?-1:1))}),ye(()=>{E={top:t.vertical.position.value,left:t.horizontal.position.value}}),Se(()=>{if(E===null)return;const r=h.value;r!==null&&(D(r,E.left),U(r,E.top))}),ge(F.cancel),Object.assign(v,{getScrollTarget:()=>h.value,getScroll:$,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:X,setScrollPercentage(r,n,c){X(r,n*(t[r].size.value-o[r].value)*(r==="horizontal"&&v.$q.lang.rtl===!0?-1:1),c)}}),()=>y("div",{class:b.value,onMouseenter:oe,onMouseleave:ie},[y("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:i.tabindex!==void 0?i.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:S.value},Ce(a.default,[y(V,{debounce:0,onResize:le})])),y(_e,{axis:"both",onScroll:te})]),y(V,{debounce:0,onResize:ee}),y("div",{class:t.vertical.barClass.value,style:[i.barStyle,i.verticalBarStyle],"aria-hidden":"true",onMousedown:re}),y("div",{class:t.horizontal.barClass.value,style:[i.barStyle,i.horizontalBarStyle],"aria-hidden":"true",onMousedown:ae}),R(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),q),R(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),x)])}});export{De as Q,G as T};
