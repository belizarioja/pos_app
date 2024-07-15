import{c as Z,K as r,h as $,e as ie,G as be,H as N,I as pe,r as p,P as d,T as _e,Z as Pe,g as ke,$ as He,a0 as Ne,a1 as We,a2 as Ae,a3 as Fe,a4 as Re,a5 as Ue,d as Ee,n as me,a6 as I,a7 as he,a8 as je,_ as Ke,a9 as Ge,N as Xe,aa as Ze,k as T,l as Q,w as c,m as s,B as ye,q as h,ab as ne,z as L,ac as U,ad as V}from"./index.fa2a0b1d.js";import{a as Je}from"./QResizeObserver.1dde407e.js";import{Q as D,a as M}from"./QItem.7ca4fd43.js";import{b as X,Q as Ye}from"./format.526d684b.js";import{T as se,Q as et}from"./QScrollArea.98d1b493.js";import{Q as tt}from"./QImg.15bb00a5.js";import{Q as at,a as ot}from"./QLayout.3ddbc52b.js";import{a as lt}from"./axios.7331a07d.js";var rt=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const v=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>$("div",{class:v.value},ie(m.default))}}),nt=Z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const v=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>$("div",{class:v.value,role:"toolbar"},ie(m.default))}}),st=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:v}){const{proxy:{$q:x}}=ke(),n=be(pe,N);if(n===N)return console.error("QHeader needs to be child of QLayout"),N;const f=p(parseInt(e.heightHint,10)),k=p(!0),C=r(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||x.platform.is.ios&&n.isContainer.value===!0),W=r(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return k.value===!0?f.value:0;const o=f.value-n.scroll.value.position;return o>0?o:0}),E=r(()=>e.modelValue!==!0||C.value===!0&&k.value!==!0),a=r(()=>e.modelValue===!0&&E.value===!0&&e.reveal===!0),A=r(()=>"q-header q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(E.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=r(()=>{const o=n.rows.value.top,w={};return o[0]==="l"&&n.left.space===!0&&(w[x.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(w[x.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),w});function y(o,w){n.update("header",o,w)}function u(o,w){o.value!==w&&(o.value=w)}function O({height:o}){u(f,o),y("size",o)}function g(o){a.value===!0&&u(k,!0),v("focusin",o)}d(()=>e.modelValue,o=>{y("space",o),u(k,!0),n.animate()}),d(W,o=>{y("offset",o)}),d(()=>e.reveal,o=>{o===!1&&u(k,e.modelValue)}),d(k,o=>{n.animate(),v("reveal",o)}),d(n.scroll,o=>{e.reveal===!0&&u(k,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const i={};return n.instances.header=i,e.modelValue===!0&&y("size",f.value),y("space",e.modelValue),y("offset",W.value),_e(()=>{n.instances.header===i&&(n.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const o=Pe(m.default,[]);return e.elevated===!0&&o.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push($(Je,{debounce:0,onResize:O})),$("header",{class:A.value,style:q.value,onFocusin:g},o)}}});const ge=150;var it=Z({name:"QDrawer",inheritAttrs:!1,props:{...He,...Ne,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...We,"onLayout","miniState"],setup(e,{slots:m,emit:v,attrs:x}){const n=ke(),{proxy:{$q:f}}=n,k=Ae(e,f),{preventBodyScroll:C}=je(),{registerTimeout:W,removeTimeout:E}=Fe(),a=be(pe,N);if(a===N)return console.error("QDrawer needs to be child of QLayout"),N;let A,q=null,y;const u=p(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),O=r(()=>e.mini===!0&&u.value!==!0),g=r(()=>O.value===!0?e.miniWidth:e.width),i=p(e.showIfAbove===!0&&u.value===!1?!0:e.modelValue===!0),o=r(()=>e.persistent!==!0&&(u.value===!0||Ce.value===!0));function w(t,l){if(we(),t!==!1&&a.animate(),_(0),u.value===!0){const b=a.instances[K.value];b!==void 0&&b.belowBreakpoint===!0&&b.hide(!1),B(1),a.isContainer.value!==!0&&C(!0)}else B(0),t!==!1&&oe(!1);W(()=>{t!==!1&&oe(!0),l!==!0&&v("show",t)},ge)}function ue(t,l){xe(),t!==!1&&a.animate(),B(0),_(P.value*g.value),le(),l!==!0?W(()=>{v("hide",t)},ge):E()}const{show:J,hide:F}=Re({showing:i,hideOnRouteChange:o,handleShow:w,handleHide:ue}),{addToHistory:we,removeFromHistory:xe}=Ue(i,F,o),j={belowBreakpoint:u,hide:F},S=r(()=>e.side==="right"),P=r(()=>(f.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),ce=p(0),H=p(!1),Y=p(!1),de=p(g.value*P.value),K=r(()=>S.value===!0?"left":"right"),ee=r(()=>i.value===!0&&u.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:g.value:0),te=r(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(S.value?"R":"L")>-1||f.platform.is.ios===!0&&a.isContainer.value===!0),R=r(()=>e.overlay===!1&&i.value===!0&&u.value===!1),Ce=r(()=>e.overlay===!0&&i.value===!0&&u.value===!1),qe=r(()=>"fullscreen q-drawer__backdrop"+(i.value===!1&&H.value===!1?" hidden":"")),Se=r(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),ve=r(()=>S.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),$e=r(()=>S.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Be=r(()=>{const t={};return a.header.space===!0&&ve.value===!1&&(te.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&$e.value===!1&&(te.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),ze=r(()=>{const t={width:`${g.value}px`,transform:`translateX(${de.value}px)`};return u.value===!0?t:Object.assign(t,Be.value)}),Te=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Qe=r(()=>`q-drawer q-drawer--${e.side}`+(Y.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(k.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":i.value===!0?"":" q-layout--prevent-focus")+(u.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(te.value===!0||R.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),Ie=r(()=>{const t=f.lang.rtl===!0?e.side:K.value;return[[se,De,void 0,{[t]:!0,mouse:!0}]]}),Oe=r(()=>{const t=f.lang.rtl===!0?K.value:e.side;return[[se,fe,void 0,{[t]:!0,mouse:!0}]]}),Le=r(()=>{const t=f.lang.rtl===!0?K.value:e.side;return[[se,fe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){Me(u,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}d(u,t=>{t===!0?(A=i.value,i.value===!0&&F(!1)):e.overlay===!1&&e.behavior!=="mobile"&&A!==!1&&(i.value===!0?(_(0),B(0),le()):J(!1))}),d(()=>e.side,(t,l)=>{a.instances[l]===j&&(a.instances[l]=void 0,a[l].space=!1,a[l].offset=0),a.instances[t]=j,a[t].size=g.value,a[t].space=R.value,a[t].offset=ee.value}),d(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),d(()=>e.behavior+e.breakpoint,ae),d(a.isContainer,t=>{i.value===!0&&C(t!==!0),t===!0&&ae()}),d(a.scrollbarWidth,()=>{_(i.value===!0?0:void 0)}),d(ee,t=>{z("offset",t)}),d(R,t=>{v("onLayout",t),z("space",t)}),d(S,()=>{_()}),d(g,t=>{_(),re(e.miniToOverlay,t)}),d(()=>e.miniToOverlay,t=>{re(t,g.value)}),d(()=>f.lang.rtl,()=>{_()}),d(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ve(),a.animate())}),d(O,t=>{v("miniState",t)});function _(t){t===void 0?me(()=>{t=i.value===!0?0:g.value,_(P.value*t)}):(a.isContainer.value===!0&&S.value===!0&&(u.value===!0||Math.abs(t)===g.value)&&(t+=P.value*a.scrollbarWidth.value),de.value=t)}function B(t){ce.value=t}function oe(t){const l=t===!0?"remove":a.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function Ve(){q!==null&&clearTimeout(q),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),Y.value=!0,q=setTimeout(()=>{q=null,Y.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function De(t){if(i.value!==!1)return;const l=g.value,b=X(t.distance.x,0,l);if(t.isFinal===!0){b>=Math.min(75,l)===!0?J():(a.animate(),B(0),_(P.value*l)),H.value=!1;return}_((f.lang.rtl===!0?S.value!==!0:S.value)?Math.max(l-b,0):Math.min(0,b-l)),B(X(b/l,0,1)),t.isFirst===!0&&(H.value=!0)}function fe(t){if(i.value!==!0)return;const l=g.value,b=t.direction===e.side,G=(f.lang.rtl===!0?b!==!0:b)?X(t.distance.x,0,l):0;if(t.isFinal===!0){Math.abs(G)<Math.min(75,l)===!0?(a.animate(),B(1),_(0)):F(),H.value=!1;return}_(P.value*G),B(X(1-G/l,0,1)),t.isFirst===!0&&(H.value=!0)}function le(){C(!1),oe(!0)}function z(t,l){a.update(e.side,t,l)}function Me(t,l){t.value!==l&&(t.value=l)}function re(t,l){z("size",t===!0?e.miniWidth:l)}return a.instances[e.side]=j,re(e.miniToOverlay,g.value),z("space",R.value),z("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&i.value===!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),Ee(()=>{v("onLayout",R.value),v("miniState",O.value),A=e.showIfAbove===!0;const t=()=>{(i.value===!0?w:ue)(!1,!0)};if(a.totalWidth.value!==0){me(t);return}y=d(a.totalWidth,()=>{y(),y=void 0,i.value===!1&&e.showIfAbove===!0&&u.value===!1?J(!1):t()})}),_e(()=>{y!==void 0&&y(),q!==null&&(clearTimeout(q),q=null),i.value===!0&&le(),a.instances[e.side]===j&&(a.instances[e.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const t=[];u.value===!0&&(e.noSwipeOpen===!1&&t.push(I($("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ie.value)),t.push(he("div",{ref:"backdrop",class:qe.value,style:Se.value,"aria-hidden":"true",onClick:F},void 0,"backdrop",e.noSwipeBackdrop!==!0&&i.value===!0,()=>Le.value)));const l=O.value===!0&&m.mini!==void 0,b=[$("div",{...x,key:""+l,class:[Te.value,x.class]},l===!0?m.mini():ie(m.default))];return e.elevated===!0&&i.value===!0&&b.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(he("aside",{ref:"content",class:Qe.value,style:ze.value},b,"contentclose",e.noSwipeClose!==!0&&u.value===!0,()=>Oe.value)),$("div",{class:"q-drawer-container"},t)}}});const ut="https://bckpos.factura-smart.com/",ct=Ge({name:"MainLayout",setup(){const e=p(!1),m=p(0),v=p(sessionStorage.getItem("tx_nombre")),x=p(sessionStorage.getItem("tx_rol")),n=p(sessionStorage.getItem("co_rol")),f=p(sessionStorage.getItem("tx_empresa"));return{rol:x,corol:n,empresa:f,saldoactual:m,nombreusuario:v,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{salir(){this.$q.dialog({title:"Confirmaci\xF3n",message:"\xBFEst\xE1 seguro que quieres cerrar sesi\xF3n?",ok:{label:"S\xED",color:"primary",flat:!1,outline:!1,unelevated:!0,icon:"check",noCaps:!0},cancel:{label:"No",color:"primary",icon:"close",flat:!1,outline:!0,unelevated:!0,noCaps:!0},persistent:!0}).onOk(()=>{sessionStorage.removeItem("id_usuario"),sessionStorage.removeItem("tx_nombre"),sessionStorage.removeItem("tx_empresa"),sessionStorage.removeItem("co_empresa"),sessionStorage.removeItem("tx_rol"),sessionStorage.removeItem("co_rol"),this.$router.push("/")})},usuarios(){this.$router.push("/usuarios")},empresas(){this.$router.push("/empresas")},ventas(){this.$router.push("/ventas")},puntodeventa(){this.$router.push("/puntodeventa")},categorias(){this.$router.push("/categorias")},productos(){this.$router.push("/productos")},configuracion(){this.$router.push("/configuracion")},async cargar(){const e=await lt.get(ut+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(m=>{Xe.create("Problemas al listar Configuracion "+m)});return console.log(e),e.data.resp}}}),dt={class:"rulusuario"},vt={class:"bienvenido"},ft={class:"text-accent text-center"},mt=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Punto de venta",-1),ht={class:"text-accent text-center"},yt=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Categorias",-1),gt={class:"text-accent text-center"},bt=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Productos",-1),pt={class:"text-accent text-center"},_t=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Configuraci\xF3n",-1),kt={class:"text-accent text-center"},wt=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Emisores",-1),xt={class:"text-accent text-center"},Ct=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Ventas",-1),qt={class:"text-accent text-center"},St=h("div",{class:"text-accent text-center",style:{"font-size":"10px"}},"Usuarios",-1);function $t(e,m,v,x,n,f){const k=Ze("router-view");return T(),Q(at,{view:"hHh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:c(()=>[s(st,{class:"bg-accent"},{default:c(()=>[s(nt,null,{default:c(()=>[s(ye,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,color:"primary"},null,8,["onClick"]),s(rt,{style:{display:"grid"}},{default:c(()=>[h("span",dt,ne(e.empresa),1),h("span",vt,ne(e.nombreusuario)+' "'+ne(e.rol)+'"',1)]),_:1}),s(ye,{flat:"",dense:"",icon:"logout","aria-label":"Salir",onClick:e.salir,color:"primary"},null,8,["onClick"])]),_:1})]),_:1}),s(it,{bordered:"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":m[0]||(m[0]=C=>e.leftDrawerOpen=C),"show-if-above":"",width:120,breakpoint:600},{default:c(()=>[s(et,{style:{height:"calc(100% - 30px)","margin-top":"40px","border-right":"1px solid #ddd"}},{default:c(()=>[s(Ye,{padding:""},{default:c(()=>[I((T(),Q(D,{clickable:"",onClick:e.puntodeventa},{default:c(()=>[s(M,null,{default:c(()=>[h("div",ft,[s(L,{color:"accent",name:"receipt_long",size:"40px"})]),mt]),_:1})]),_:1},8,["onClick"])),[[V]]),e.corol==="1"||e.corol==="2"?I((T(),Q(D,{key:0,clickable:"",onClick:e.categorias},{default:c(()=>[s(M,null,{default:c(()=>[h("div",ht,[s(L,{color:"accent",name:"collections_bookmark",size:"40px"})]),yt]),_:1})]),_:1},8,["onClick"])),[[V]]):U("",!0),e.corol==="1"||e.corol==="2"?I((T(),Q(D,{key:1,clickable:"",onClick:e.productos},{default:c(()=>[s(M,null,{default:c(()=>[h("div",gt,[s(L,{color:"accent",name:"inventory_2",size:"40px"})]),bt]),_:1})]),_:1},8,["onClick"])),[[V]]):U("",!0),e.corol==="1"||e.corol==="2"?I((T(),Q(D,{key:2,clickable:"",onClick:e.configuracion},{default:c(()=>[s(M,null,{default:c(()=>[h("div",pt,[s(L,{color:"accent",name:"settings",size:"40px"})]),_t]),_:1})]),_:1},8,["onClick"])),[[V]]):U("",!0),e.corol==="1"?I((T(),Q(D,{key:3,clickable:"",onClick:e.empresas},{default:c(()=>[s(M,null,{default:c(()=>[h("div",kt,[s(L,{color:"accent",name:"store",size:"40px"})]),wt]),_:1})]),_:1},8,["onClick"])),[[V]]):U("",!0),I((T(),Q(D,{clickable:"",onClick:e.ventas},{default:c(()=>[s(M,null,{default:c(()=>[h("div",xt,[s(L,{color:"accent",name:"payments",size:"40px"})]),Ct]),_:1})]),_:1},8,["onClick"])),[[V]]),e.corol==="1"||e.corol==="2"?I((T(),Q(D,{key:4,clickable:"",onClick:e.usuarios},{default:c(()=>[s(M,null,{default:c(()=>[h("div",qt,[s(L,{color:"accent",name:"people",size:"40px"})]),St]),_:1})]),_:1},8,["onClick"])),[[V]]):U("",!0)]),_:1})]),_:1}),s(tt,{class:"absolute-top",src:"img/logo-prosales-dark.png",style:{margin:"5px",width:"102px"}})]),_:1},8,["modelValue"]),s(ot,null,{default:c(()=>[s(k)]),_:1})]),_:1})}var Mt=Ke(ct,[["render",$t]]);export{Mt as default};
