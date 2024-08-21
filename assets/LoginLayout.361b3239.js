import{c as E,r as T,p as L,o as N,a as A,d as M,h as u,e as R,g as D,v as U,s as P,n as j,f as z,i as O,u as H,j as K,_ as Y,N as h,k as G,l as J,w as c,m as r,q as o,Q as W,t as X,x as Z,y as F,z as B,A as $,B as ee,C as te,D as ae,E as oe,F as b}from"./index.975d1ba1.js";import{Q as se}from"./QPage.357aeba6.js";import{Q as re,a as ne}from"./QLayout.9faaacbe.js";import{a as ie}from"./axios.7331a07d.js";var le=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:i,emit:p}){const x=D(),n=T(null);let d=0;const s=[];function y(t){const m=typeof t=="boolean"?t:e.noErrorFocus!==!0,g=++d,Q=(a,l)=>{p("validation"+(a===!0?"Success":"Error"),l)},q=a=>{const l=a.validate();return typeof l.then=="function"?l.then(f=>({valid:f,comp:a}),f=>({valid:!1,comp:a,err:f})):Promise.resolve({valid:l,comp:a})};return(e.greedy===!0?Promise.all(s.map(q)).then(a=>a.filter(l=>l.valid!==!0)):s.reduce((a,l)=>a.then(()=>q(l).then(f=>{if(f.valid===!1)return Promise.reject(f)})),Promise.resolve()).catch(a=>[a])).then(a=>{if(a===void 0||a.length===0)return g===d&&Q(!0),!0;if(g===d){const{comp:l,err:f}=a[0];if(f!==void 0&&console.error(f),Q(!1,l),m===!0){const V=a.find(({comp:k})=>typeof k.focus=="function"&&U(k.$)===!1);V!==void 0&&V.comp.focus()}}return!1})}function S(){d++,s.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function C(t){t!==void 0&&P(t);const m=d+1;y().then(g=>{m===d&&g===!0&&(e.onSubmit!==void 0?p("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function w(t){t!==void 0&&P(t),p("reset"),j(()=>{S(),e.autofocus===!0&&e.noResetFocus!==!0&&v()})}function v(){z(()=>{if(n.value===null)return;const t=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),m=>m.tabIndex>-1);t!=null&&t.focus({preventScroll:!0})})}L(O,{bindComponent(t){s.push(t)},unbindComponent(t){const m=s.indexOf(t);m>-1&&s.splice(m,1)}});let I=!1;return N(()=>{I=!0}),A(()=>{I===!0&&e.autofocus===!0&&v()}),M(()=>{e.autofocus===!0&&v()}),Object.assign(x.proxy,{validate:y,resetValidation:S,submit:C,reset:w,focus:v,getValidationComponents:()=>s}),()=>u("form",{class:"q-form",ref:n,onSubmit:C,onReset:w},R(i.default))}});const ue=[u("g",{transform:"translate(20 50)"},[u("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.6"},[u("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),u("g",{transform:"translate(50 50)"},[u("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.8"},[u("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),u("g",{transform:"translate(80 50)"},[u("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.9"},[u("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var ce=E({name:"QSpinnerFacebook",props:H,setup(e){const{cSize:i,classes:p}=K(e);return()=>u("svg",{class:p.value,width:i.value,height:i.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},ue)}});const de="https://posapi-test.factura-smart.com/",fe={name:"LoginLayout",data(){return{term:"",usuarioCentro:"",claveCentro:"",loading:!1}},methods:{submit(){this.usuarioCentro===""?h.create("El Usuario es requerido para iniciar sesi\xF3n"):this.claveCentro===""?h.create("La contrase\xF1a es requerida para iniciar sesi\xF3n"):(this.loading=!0,ie.post(de+"usuario/login",{usuario:this.usuarioCentro,clave:this.claveCentro}).then(async e=>{this.loading=!1,e.status===200?(sessionStorage.setItem("id_usuario",e.data.resp.id),sessionStorage.setItem("tx_nombre",e.data.resp.nombre),sessionStorage.setItem("tx_empresa",e.data.resp.empresa),sessionStorage.setItem("co_empresa",e.data.resp.idempresa),sessionStorage.setItem("tx_rol",e.data.resp.rol),sessionStorage.setItem("co_rol",e.data.resp.idrol),this.$router.push("/puntodeventa")):(this.loading=!1,h.create(e.data.message))}).catch(e=>{this.loading=!1,h.create("Error "+e)}))}},mounted(){console.log("Modo producci\xF3n")}},_=e=>(ae("data-v-360c1ab0"),e=e(),oe(),e),me={class:"container"},pe=_(()=>o("div",{class:"left-pane"},[o("div",{class:"left-content"},[o("div",{class:"left-text"},[o("h4",{class:"text-left q-mb-md slogan"},[b(" Te ofrecemos la plataforma "),o("span",{class:"text-resaltado"},"m\xE1s f\xE1cil, segura y confiable"),b(" del mercado. ")])]),o("div",{class:"left-logo"},[o("img",{src:"img/logo_smart.avif",alt:"Logo",class:"img-logo"})])])],-1)),ve={class:"right-pane"},ge=_(()=>o("div",{class:"text-h6 text-center color-texto mb-2 mt-2"},[b("\xA1Bienvenido a Smart"),o("br"),o("b",null,"proSales"),b("! \u{1F9FE}")],-1)),he=_(()=>o("div",{class:"text-h6 text-center color-texto"},"Iniciar sesi\xF3n",-1)),be=_(()=>o("div",{class:"q-mt-sm text-center"},[o("img",{src:"img/logo-prosales.png",alt:"Logo",class:"img-logoPro q-mx-auto"})],-1));function _e(e,i,p,x,n,d){return G(),J(re,{view:"hHh lpR fFf"},{default:c(()=>[r(ne,null,{default:c(()=>[r(se,{class:"flex flex-center"},{default:c(()=>[o("div",me,[pe,o("div",ve,[ge,r(W,{bordered:"",class:"q-pa-md custom-shadow custom-border-radius card-width"},{default:c(()=>[he,o("form",{onSubmit:i[2]||(i[2]=X((...s)=>d.submit&&d.submit(...s),["prevent"])),class:"form-width-small"},[r(Z,null,{default:c(()=>[r(le,{class:"q-gutter-sm"},{default:c(()=>[r(F,{outlined:"",clearable:"",modelValue:n.usuarioCentro,"onUpdate:modelValue":i[0]||(i[0]=s=>n.usuarioCentro=s),type:"text",label:"Usuario"},{prepend:c(()=>[r(B,{name:"account_circle"})]),_:1},8,["modelValue"]),r(F,{outlined:"",clearable:"",modelValue:n.claveCentro,"onUpdate:modelValue":i[1]||(i[1]=s=>n.claveCentro=s),type:"password",label:"Clave"},{prepend:c(()=>[r(B,{name:"lock"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),r($,{class:"q-px-sm q-mt-sm"},{default:c(()=>[r(ee,{"no-caps":"",unelevated:"",class:"gradient-btn full-width",type:"submit",loading:n.loading,size:"md",label:"Ingresar"},{loading:c(()=>[r(ce)]),_:1},8,["loading"])]),_:1})],32),r(te),be]),_:1})])])]),_:1})]),_:1})]),_:1})}var Ie=Y(fe,[["render",_e],["__scopeId","data-v-360c1ab0"]]);export{Ie as default};
