import{Q as d}from"./QImg.28a8ccc6.js";import{_ as u,a9 as m,r as p,N as c,k as f,l as g,w as r,q as s,m as o,x as h,y as _,C as b,A as v,B as C,Q as y}from"./index.08a8f3c6.js";import{Q as k}from"./QPage.37eafc0e.js";import{a as n}from"./axios.7331a07d.js";const i="https://bckpos.factura-smart.com/",x=m({name:"IndexPage",setup(){return{tasabcv:p("")}},methods:{guardar(){const t={tasabcv:this.tasabcv||""};n.put(i+"configuracion/"+sessionStorage.getItem("co_empresa"),t).then(async a=>{if(a.status===200){const e=a.data.resp;c.create(e)}}).catch(a=>{c.create("Problemas al actualizar Configuracion "+a)})},async cargar(){const t=await n.get(i+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(e=>{c.create("Problemas al listar Configuracion "+e)});console.log(t);const a=t.data.resp;this.tasabcv=a.tasabcv,this.tokenfacturacion=a.tokenfacturacion,this.urlfacturacion=a.urlfacturacion,this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email}},mounted(){this.cargar()}}),Q={class:"col"},w=s("div",{class:"botones row fondo-gris shadow-up-9"},[s("h6",{class:"p-2"},"Configuraci\xF3n")],-1),V={class:"zonaconfiguracion row"},B=s("div",{class:"text-h5 q-mt-sm q-mb-xs color-texto"},"Tasa del Banco Central de Venezuela",-1);function I(t,a,e,N,P,z){return f(),g(k,null,{default:r(()=>[s("div",Q,[w,s("div",V,[o(y,{class:"my-card custom-shadow custom-border-radius",bordered:"",style:{"margin-top":"20px","padding-top":"10px"}},{default:r(()=>[o(d,{src:"logo_bcv.png",style:{width:"20%",height:"auto",display:"block",margin:"auto"},fit:"contain"}),o(h,null,{default:r(()=>[B,o(_,{class:"",outlined:"",standout:"","bottom-slots":"",modelValue:t.tasabcv,"onUpdate:modelValue":a[0]||(a[0]=l=>t.tasabcv=l),label:"Tasa BCV","stack-label":"",dense:"",style:{margin:"10px"}},null,8,["modelValue"])]),_:1}),o(b),o(v,{align:"center"},{default:r(()=>[o(C,{unelevated:"","no-caps":"",color:"warning","icon-right":"check",label:"Actualizar",onClick:t.guardar},null,8,["onClick"])]),_:1})]),_:1})])])]),_:1})}var q=u(x,[["render",I]]);export{q as default};
