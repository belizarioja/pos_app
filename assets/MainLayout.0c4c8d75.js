import{c as re,K as s,h as q,e as xe,G as Fe,H as J,I as je,r as _,L as k,M as Me,Z as lt,g as Te,$ as rt,a0 as oe,O as nt,a1 as it,a2 as de,a3 as ye,a4 as Oe,a5 as ge,a6 as ke,a7 as ze,s as ut,a8 as We,a9 as Re,aa as st,o as ct,a as dt,Y as vt,ab as E,ac as _e,ad as Pe,ae as ft,af as ht,ag as mt,ah as bt,ai as pt,d as yt,n as De,aj as Le,ak as gt,_ as zt,al as _t,N as St,am as wt,k as Q,l as H,w as C,m as z,B as Ae,q as x,an as Se,z as F,ao as Z,ap as j}from"./index.ce421a4b.js";import{b as qe,c as Ct,Q as kt,a as qt}from"./QLayout.e4f7485e.js";import{Q as W,a as R}from"./QItem.3371e9ec.js";import{c as xt,b as X,Q as Mt}from"./format.719d0233.js";import{Q as Tt}from"./QImg.7666c6be.js";import{a as $t}from"./axios.7331a07d.js";var Bt=re({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const c=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:c.value},xe(r.default))}}),Ot=re({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const c=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:c.value,role:"toolbar"},xe(r.default))}}),Pt=re({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:c}){const{proxy:{$q:S}}=Te(),t=Fe(je,J);if(t===J)return console.error("QHeader needs to be child of QLayout"),J;const o=_(parseInt(e.heightHint,10)),i=_(!0),a=s(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||S.platform.is.ios&&t.isContainer.value===!0),b=s(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?o.value:0;const v=o.value-t.scroll.value.position;return v>0?v:0}),f=s(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),u=s(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),M=s(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=s(()=>{const v=t.rows.value.top,$={};return v[0]==="l"&&t.left.space===!0&&($[S.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&($[S.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function y(v,$){t.update("header",v,$)}function m(v,$){v.value!==$&&(v.value=$)}function P({height:v}){m(o,v),y("size",v)}function T(v){u.value===!0&&m(i,!0),c("focusin",v)}k(()=>e.modelValue,v=>{y("space",v),m(i,!0),t.animate()}),k(b,v=>{y("offset",v)}),k(()=>e.reveal,v=>{v===!1&&m(i,e.modelValue)}),k(i,v=>{t.animate(),c("reveal",v)}),k(t.scroll,v=>{e.reveal===!0&&m(i,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&y("size",o.value),y("space",e.modelValue),y("offset",b.value),Me(()=>{t.instances.header===g&&(t.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const v=lt(r.default,[]);return e.elevated===!0&&v.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(q(qe,{debounce:0,onResize:P})),q("header",{class:M.value,style:w.value,onFocusin:T},v)}}});const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Dt=Object.keys($e);$e.all=!0;function Ee(e){const r={};for(const c of Dt)e[c]===!0&&(r[c]=!0);return Object.keys(r).length===0?$e:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const Lt=["INPUT","TEXTAREA"];function Qe(e,r){return r.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof r.handler=="function"&&Lt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(r.uid)===-1)}function we(e,r,c){const S=ke(e);let t,o=S.left-r.event.x,i=S.top-r.event.y,a=Math.abs(o),b=Math.abs(i);const f=r.direction;f.horizontal===!0&&f.vertical!==!0?t=o<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=i<0?"up":"down":f.up===!0&&i<0?(t="up",a>b&&(f.left===!0&&o<0?t="left":f.right===!0&&o>0&&(t="right"))):f.down===!0&&i>0?(t="down",a>b&&(f.left===!0&&o<0?t="left":f.right===!0&&o>0&&(t="right"))):f.left===!0&&o<0?(t="left",a<b&&(f.up===!0&&i<0?t="up":f.down===!0&&i>0&&(t="down"))):f.right===!0&&o>0&&(t="right",a<b&&(f.up===!0&&i<0?t="up":f.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&c===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,u=!0,t==="left"||t==="right"?(S.left-=o,a=0,o=0):(S.top-=i,b=0,i=0)}return{synthetic:u,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:S,direction:t,isFirst:r.event.isFirst,isFinal:c===!0,duration:Date.now()-r.event.time,distance:{x:a,y:b},offset:{x:o,y:i},delta:{x:S.left-r.event.lastX,y:S.top-r.event.lastY}}}}let At=0;var le=rt({name:"touch-pan",beforeMount(e,{value:r,modifiers:c}){if(c.mouse!==!0&&oe.has.touch!==!0)return;function S(o,i){c.mouse===!0&&i===!0?ut(o):(c.stop===!0&&ge(o),c.prevent===!0&&Oe(o))}const t={uid:"qvtp_"+At++,handler:r,modifiers:c,direction:Ee(c),noop:nt,mouseStart(o){Qe(o,t)&&it(o)&&(de(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Qe(o,t)){const i=o.target;de(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,i){if(oe.is.firefox===!0&&ye(e,!0),t.lastEvt=o,i===!0||c.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Oe(f),o.cancelBubble===!0&&ge(f),Object.assign(f,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:f}}ge(o)}const{left:a,top:b}=ke(o);t.event={x:a,y:b,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:b}},move(o){if(t.event===void 0)return;const i=ke(o),a=i.left-t.event.x,b=i.top-t.event.y;if(a===0&&b===0)return;t.lastEvt=o;const f=t.event.mouse===!0,u=()=>{S(o,f);let y;c.preserveCursor!==!0&&c.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),f===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{P(),m()},50):P()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&S(o,t.event.mouse);const{payload:y,synthetic:m}=we(o,t,!1);y!==void 0&&(t.handler(y)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=y.position.left,t.event.lastY=y.position.top,t.event.lastDir=m===!0?void 0:y.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(o);return}const M=Math.abs(a),w=Math.abs(b);M!==w&&(t.direction.horizontal===!0&&M>w||t.direction.vertical===!0&&M<w||t.direction.up===!0&&M<w&&b<0||t.direction.down===!0&&M<w&&b>0||t.direction.left===!0&&M>w&&a<0||t.direction.right===!0&&M>w&&a>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,i){if(t.event!==void 0){if(ze(t,"temp"),oe.is.firefox===!0&&ye(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(we(o===void 0?t.lastEvt:o,t).payload);const{payload:a}=we(o===void 0?t.lastEvt:o,t,!0),b=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(b):b()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,c.mouse===!0){const o=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";de(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}oe.has.touch===!0&&de(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const c=e.__qtouchpan;c!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&c.end(),c.handler=r.value),c.direction=Ee(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),ze(r,"main"),ze(r,"temp"),oe.is.firefox===!0&&ye(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const He=["vertical","horizontal"],Ce={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ie={prevent:!0,mouse:!0,mouseAllDir:!0},Ve=e=>e>=250?50:Math.ceil(e/5);var Et=re({name:"QScrollArea",props:{...We,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:r,emit:c}){const S=_(!1),t=_(!1),o=_(!1),i={vertical:_(0),horizontal:_(0)},a={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:b}=Te(),f=Re(e,b.$q);let u=null,M;const w=_(null),y=s(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=s(()=>{const n=a.vertical.size.value-i.vertical.value;if(n<=0)return 0;const d=X(a.vertical.position.value/n,0,1);return Math.round(d*1e4)/1e4}),a.vertical.thumbHidden=s(()=>(e.visible===null?o.value:e.visible)!==!0&&S.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=s(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=s(()=>Math.round(X(i.vertical.value*i.vertical.value/a.vertical.size.value,Ve(i.vertical.value),i.vertical.value))),a.vertical.style=s(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=s(()=>{const n=a.horizontal.size.value-i.horizontal.value;if(n<=0)return 0;const d=X(Math.abs(a.horizontal.position.value)/n,0,1);return Math.round(d*1e4)/1e4}),a.horizontal.thumbHidden=s(()=>(e.visible===null?o.value:e.visible)!==!0&&S.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=s(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=s(()=>Math.round(X(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,Ve(i.horizontal.value),i.horizontal.value))),a.horizontal.style=s(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[b.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const m=s(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),P=[[le,n=>{ie(n,"vertical")},void 0,{vertical:!0,...Ie}]],T=[[le,n=>{ie(n,"horizontal")},void 0,{horizontal:!0,...Ie}]];function g(){const n={};return He.forEach(d=>{const p=a[d];n[d+"Position"]=p.position.value,n[d+"Percentage"]=p.percentage.value,n[d+"Size"]=p.size.value,n[d+"ContainerSize"]=i[d].value}),n}const v=st(()=>{const n=g();n.ref=b,c("scroll",n)},0);function $(n,d,p){if(He.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?Pe:_e)(w.value,d,p)}function ne({height:n,width:d}){let p=!1;i.vertical.value!==n&&(i.vertical.value=n,p=!0),i.horizontal.value!==d&&(i.horizontal.value=d,p=!0),p===!0&&A()}function ee({position:n}){let d=!1;a.vertical.position.value!==n.top&&(a.vertical.position.value=n.top,d=!0),a.horizontal.position.value!==n.left&&(a.horizontal.position.value=n.left,d=!0),d===!0&&A()}function Y({height:n,width:d}){a.horizontal.size.value!==d&&(a.horizontal.size.value=d,A()),a.vertical.size.value!==n&&(a.vertical.size.value=n,A())}function ie(n,d){const p=a[d];if(n.isFirst===!0){if(p.thumbHidden.value===!0)return;M=p.position.value,t.value=!0}else if(t.value!==!0)return;n.isFinal===!0&&(t.value=!1);const O=Ce[d],G=i[d].value,ve=(p.size.value-G)/(G-p.thumbSize.value),fe=n.distance[O.dist],se=M+(n.direction===O.dir?1:-1)*fe*ve;te(se,d)}function ue(n,d){const p=a[d];if(p.thumbHidden.value!==!0){const O=n[Ce[d].offset];if(O<p.thumbStart.value||O>p.thumbStart.value+p.thumbSize.value){const G=O-p.thumbSize.value/2;te(G/i[d].value*p.size.value,d)}p.ref.value!==null&&p.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function K(n){ue(n,"vertical")}function L(n){ue(n,"horizontal")}function A(){S.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,S.value=!1},e.delay),e.onScroll!==void 0&&v()}function te(n,d){w.value[Ce[d].scroll]=n}function I(){o.value=!0}function ae(){o.value=!1}let U=null;return k(()=>b.$q.lang.rtl,n=>{w.value!==null&&_e(w.value,Math.abs(a.horizontal.position.value)*(n===!0?-1:1))}),ct(()=>{U={top:a.vertical.position.value,left:a.horizontal.position.value}}),dt(()=>{if(U===null)return;const n=w.value;n!==null&&(_e(n,U.left),Pe(n,U.top))}),Me(v.cancel),Object.assign(b,{getScrollTarget:()=>w.value,getScroll:g,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(n,d,p){$(n,d*(a[n].size.value-i[n].value)*(n==="horizontal"&&b.$q.lang.rtl===!0?-1:1),p)}}),()=>q("div",{class:y.value,onMouseenter:I,onMouseleave:ae},[q("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[q("div",{class:"q-scrollarea__content absolute",style:m.value},vt(r.default,[q(qe,{debounce:0,onResize:Y})])),q(Ct,{axis:"both",onScroll:ee})]),q(qe,{debounce:0,onResize:ne}),q("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:K}),q("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:L}),E(q("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),P),E(q("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),T)])}});const Ne=150;var Qt=re({name:"QDrawer",inheritAttrs:!1,props:{...ft,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ht,"onLayout","miniState"],setup(e,{slots:r,emit:c,attrs:S}){const t=Te(),{proxy:{$q:o}}=t,i=Re(e,o),{preventBodyScroll:a}=gt(),{registerTimeout:b,removeTimeout:f}=mt(),u=Fe(je,J);if(u===J)return console.error("QDrawer needs to be child of QLayout"),J;let M,w=null,y;const m=_(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),P=s(()=>e.mini===!0&&m.value!==!0),T=s(()=>P.value===!0?e.miniWidth:e.width),g=_(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),v=s(()=>e.persistent!==!0&&(m.value===!0||G.value===!0));function $(l,h){if(ie(),l!==!1&&u.animate(),D(0),m.value===!0){const B=u.instances[n.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),V(1),u.isContainer.value!==!0&&a(!0)}else V(0),l!==!1&&me(!1);b(()=>{l!==!1&&me(!0),h!==!0&&c("show",l)},Ne)}function ne(l,h){ue(),l!==!1&&u.animate(),V(0),D(A.value*T.value),be(),h!==!0?b(()=>{c("hide",l)},Ne):f()}const{show:ee,hide:Y}=bt({showing:g,hideOnRouteChange:v,handleShow:$,handleHide:ne}),{addToHistory:ie,removeFromHistory:ue}=pt(g,Y,v),K={belowBreakpoint:m,hide:Y},L=s(()=>e.side==="right"),A=s(()=>(o.lang.rtl===!0?-1:1)*(L.value===!0?1:-1)),te=_(0),I=_(!1),ae=_(!1),U=_(T.value*A.value),n=s(()=>L.value===!0?"left":"right"),d=s(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),p=s(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(L.value?"R":"L")>-1||o.platform.is.ios===!0&&u.isContainer.value===!0),O=s(()=>e.overlay===!1&&g.value===!0&&m.value===!1),G=s(()=>e.overlay===!0&&g.value===!0&&m.value===!1),ve=s(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&I.value===!1?" hidden":"")),fe=s(()=>({backgroundColor:`rgba(0,0,0,${te.value*.4})`})),se=s(()=>L.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Xe=s(()=>L.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Ye=s(()=>{const l={};return u.header.space===!0&&se.value===!1&&(p.value===!0?l.top=`${u.header.offset}px`:u.header.space===!0&&(l.top=`${u.header.size}px`)),u.footer.space===!0&&Xe.value===!1&&(p.value===!0?l.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(l.bottom=`${u.footer.size}px`)),l}),Ue=s(()=>{const l={width:`${T.value}px`,transform:`translateX(${U.value}px)`};return m.value===!0?l:Object.assign(l,Ye.value)}),Ke=s(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=s(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(p.value===!0||O.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(se.value===!0?" q-drawer--top-padding":""))),Ze=s(()=>{const l=o.lang.rtl===!0?e.side:n.value;return[[le,at,void 0,{[l]:!0,mouse:!0}]]}),Je=s(()=>{const l=o.lang.rtl===!0?n.value:e.side;return[[le,Be,void 0,{[l]:!0,mouse:!0}]]}),et=s(()=>{const l=o.lang.rtl===!0?n.value:e.side;return[[le,Be,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){ot(m,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}k(m,l=>{l===!0?(M=g.value,g.value===!0&&Y(!1)):e.overlay===!1&&e.behavior!=="mobile"&&M!==!1&&(g.value===!0?(D(0),V(0),be()):ee(!1))}),k(()=>e.side,(l,h)=>{u.instances[h]===K&&(u.instances[h]=void 0,u[h].space=!1,u[h].offset=0),u.instances[l]=K,u[l].size=T.value,u[l].space=O.value,u[l].offset=d.value}),k(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),k(()=>e.behavior+e.breakpoint,he),k(u.isContainer,l=>{g.value===!0&&a(l!==!0),l===!0&&he()}),k(u.scrollbarWidth,()=>{D(g.value===!0?0:void 0)}),k(d,l=>{N("offset",l)}),k(O,l=>{c("onLayout",l),N("space",l)}),k(L,()=>{D()}),k(T,l=>{D(),pe(e.miniToOverlay,l)}),k(()=>e.miniToOverlay,l=>{pe(l,T.value)}),k(()=>o.lang.rtl,()=>{D()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),u.animate())}),k(P,l=>{c("miniState",l)});function D(l){l===void 0?De(()=>{l=g.value===!0?0:T.value,D(A.value*l)}):(u.isContainer.value===!0&&L.value===!0&&(m.value===!0||Math.abs(l)===T.value)&&(l+=A.value*u.scrollbarWidth.value),U.value=l)}function V(l){te.value=l}function me(l){const h=l===!0?"remove":u.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function tt(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,w=setTimeout(()=>{w=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(l){if(g.value!==!1)return;const h=T.value,B=X(l.distance.x,0,h);if(l.isFinal===!0){B>=Math.min(75,h)===!0?ee():(u.animate(),V(0),D(A.value*h)),I.value=!1;return}D((o.lang.rtl===!0?L.value!==!0:L.value)?Math.max(h-B,0):Math.min(0,B-h)),V(X(B/h,0,1)),l.isFirst===!0&&(I.value=!0)}function Be(l){if(g.value!==!0)return;const h=T.value,B=l.direction===e.side,ce=(o.lang.rtl===!0?B!==!0:B)?X(l.distance.x,0,h):0;if(l.isFinal===!0){Math.abs(ce)<Math.min(75,h)===!0?(u.animate(),V(1),D(0)):Y(),I.value=!1;return}D(A.value*ce),V(X(1-ce/h,0,1)),l.isFirst===!0&&(I.value=!0)}function be(){a(!1),me(!0)}function N(l,h){u.update(e.side,l,h)}function ot(l,h){l.value!==h&&(l.value=h)}function pe(l,h){N("size",l===!0?e.miniWidth:h)}return u.instances[e.side]=K,pe(e.miniToOverlay,T.value),N("space",O.value),N("offset",d.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),yt(()=>{c("onLayout",O.value),c("miniState",P.value),M=e.showIfAbove===!0;const l=()=>{(g.value===!0?$:ne)(!1,!0)};if(u.totalWidth.value!==0){De(l);return}y=k(u.totalWidth,()=>{y(),y=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?ee(!1):l()})}),Me(()=>{y!==void 0&&y(),w!==null&&(clearTimeout(w),w=null),g.value===!0&&be(),u.instances[e.side]===K&&(u.instances[e.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const l=[];m.value===!0&&(e.noSwipeOpen===!1&&l.push(E(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ze.value)),l.push(Le("div",{ref:"backdrop",class:ve.value,style:fe.value,"aria-hidden":"true",onClick:Y},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>et.value)));const h=P.value===!0&&r.mini!==void 0,B=[q("div",{...S,key:""+h,class:[Ke.value,S.class]},h===!0?r.mini():xe(r.default))];return e.elevated===!0&&g.value===!0&&B.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Le("aside",{ref:"content",class:Ge.value,style:Ue.value},B,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Je.value)),q("div",{class:"q-drawer-container"},l)}}});const Ht="https://bckpos.factura-smart.com/",It=_t({name:"MainLayout",setup(){const e=_(!1),r=_(0),c=_(sessionStorage.getItem("tx_nombre")),S=_(sessionStorage.getItem("tx_rol")),t=_(sessionStorage.getItem("co_rol")),o=_(sessionStorage.getItem("tx_empresa"));return{rol:S,corol:t,empresa:o,saldoactual:r,nombreusuario:c,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{salir(){this.$q.dialog({title:"Confirmaci\xF3n",message:"\xBFEst\xE1 seguro que quieres cerrar sesi\xF3n?",ok:{label:"S\xED",color:"primary",flat:!1,outline:!1,unelevated:!0,icon:"check",noCaps:!0},cancel:{label:"No",color:"primary",icon:"close",flat:!1,outline:!0,unelevated:!0,noCaps:!0},persistent:!0}).onOk(()=>{sessionStorage.removeItem("id_usuario"),sessionStorage.removeItem("tx_nombre"),sessionStorage.removeItem("tx_empresa"),sessionStorage.removeItem("co_empresa"),sessionStorage.removeItem("tx_rol"),sessionStorage.removeItem("co_rol"),this.$router.push("/")})},usuarios(){this.$router.push("/usuarios")},empresas(){this.$router.push("/empresas")},ventas(){this.$router.push("/ventas")},cuentasporcobrar(){this.$router.push("/cuentasporcobrar")},puntodeventa(){this.$router.push("/puntodeventa")},categorias(){this.$router.push("/categorias")},productos(){this.$router.push("/productos")},configuracion(){this.$router.push("/configuracion")},async cargar(){const e=await $t.get(Ht+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(r=>{St.create("Problemas al listar Configuracion "+r)});return console.log(e),e.data.resp}}}),Vt={class:"rulusuario"},Nt={class:"bienvenido"},Ft={class:"text-accent text-center"},jt=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Punto de venta",-1),Wt={class:"text-accent text-center"},Rt=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Categorias",-1),Xt={class:"text-accent text-center"},Yt=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Productos",-1),Ut={class:"text-accent text-center"},Kt=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Configuraci\xF3n",-1),Gt={class:"text-accent text-center"},Zt=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Emisores",-1),Jt={class:"text-accent text-center"},ea=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Ventas",-1),ta={class:"text-accent text-center"},aa=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Cuentas por cobrar",-1),oa={class:"text-accent text-center"},la=x("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Usuarios",-1);function ra(e,r,c,S,t,o){const i=wt("router-view");return Q(),H(kt,{view:"hHh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:C(()=>[z(Pt,{class:"bg-accent"},{default:C(()=>[z(Ot,null,{default:C(()=>[z(Ae,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"primary"},null,8,["onClick"]),z(Bt,{style:{display:"grid"}},{default:C(()=>[x("span",Vt,Se(e.empresa),1),x("span",Nt,Se(e.nombreusuario)+' "'+Se(e.rol)+'"',1)]),_:1}),z(Ae,{flat:"",dense:"",icon:"logout","aria-label":"Salir",onClick:e.salir,color:"primary"},null,8,["onClick"])]),_:1})]),_:1}),z(Qt,{bordered:"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=a=>e.leftDrawerOpen=a),"show-if-above":"",width:120,breakpoint:600},{default:C(()=>[z(Et,{style:{height:"calc(100% - 30px)","margin-top":"40px","border-right":"1px solid #ddd"}},{default:C(()=>[z(Mt,{padding:""},{default:C(()=>[E((Q(),H(W,{clickable:"",onClick:e.puntodeventa},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Ft,[z(F,{color:"accent",name:"receipt_long",size:"40px"})]),jt]),_:1})]),_:1},8,["onClick"])),[[j]]),e.corol==="1"||e.corol==="2"?E((Q(),H(W,{key:0,clickable:"",onClick:e.categorias},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Wt,[z(F,{color:"accent",name:"collections_bookmark",size:"40px"})]),Rt]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0),e.corol==="1"||e.corol==="2"?E((Q(),H(W,{key:1,clickable:"",onClick:e.productos},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Xt,[z(F,{color:"accent",name:"inventory_2",size:"40px"})]),Yt]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0),e.corol==="1"||e.corol==="2"?E((Q(),H(W,{key:2,clickable:"",onClick:e.configuracion},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Ut,[z(F,{color:"accent",name:"settings",size:"40px"})]),Kt]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0),e.corol==="1"?E((Q(),H(W,{key:3,clickable:"",onClick:e.empresas},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Gt,[z(F,{color:"accent",name:"store",size:"40px"})]),Zt]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0),E((Q(),H(W,{clickable:"",onClick:e.ventas},{default:C(()=>[z(R,null,{default:C(()=>[x("div",Jt,[z(F,{color:"accent",name:"payments",size:"40px"})]),ea]),_:1})]),_:1},8,["onClick"])),[[j]]),e.corol==="1"||e.corol==="2"?E((Q(),H(W,{key:4,clickable:"",onClick:e.cuentasporcobrar},{default:C(()=>[z(R,null,{default:C(()=>[x("div",ta,[z(F,{color:"accent",name:"fact_check",size:"40px"})]),aa]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0),e.corol==="1"||e.corol==="2"?E((Q(),H(W,{key:5,clickable:"",onClick:e.usuarios},{default:C(()=>[z(R,null,{default:C(()=>[x("div",oa,[z(F,{color:"accent",name:"people",size:"40px"})]),la]),_:1})]),_:1},8,["onClick"])),[[j]]):Z("",!0)]),_:1})]),_:1}),z(Tt,{class:"absolute-top",src:"img/logo-prosales-white.png",style:{margin:"5px",width:"90px"}})]),_:1},8,["modelValue"]),z(qt,null,{default:C(()=>[z(i)]),_:1})]),_:1})}var fa=zt(It,[["render",ra]]);export{fa as default};
