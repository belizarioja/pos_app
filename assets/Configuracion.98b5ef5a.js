import{_ as u,ak as m,r as f,N as n,k as p,am as _,t as e,m as s,q as o,x as r,y as g,ay as h,A as b,B as v,Q as C}from"./index.b0d3d67d.js";import{Q as x}from"./QPage.9fb1a8a7.js";import{a as i}from"./axios.7331a07d.js";const l="https://posapi-test.factura-smart.com/",y=m({name:"IndexPage",setup(){return{tasabcv:f("")}},methods:{guardar(){const t={tasabcv:this.tasabcv||""};i.put(l+"configuracion/"+sessionStorage.getItem("co_empresa"),t).then(async a=>{if(a.status===200){const c=a.data.resp;n.create(c)}}).catch(a=>{n.create("Problemas al actualizar Configuracion "+a)})},async cargar(){const t=await i.get(l+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(c=>{n.create("Problemas al listar Configuracion "+c)});console.log(t);const a=t.data.resp;this.tasabcv=a.tasabcv,this.tokenfacturacion=a.tokenfacturacion,this.urlfacturacion=a.urlfacturacion,this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email}},mounted(){this.cargar()}}),k={class:"col"},Q=s("div",{class:"botones row fondo-gris shadow-up-9"},[s("h6",{class:"p-4"},"Configuraci\xF3n")],-1),w={class:"zonaconfiguracion row"},V=s("div",{class:"text-center color-texto"},[s("h6",null,"\u{1F3E6} Tasa BCV")],-1),B={class:"row justify-around"};function N(t,a,c,P,I,A){return p(),_(x,null,{default:e(()=>[s("div",k,[Q,s("div",w,[o(C,{class:"col-md-6 col-sm-11 col-xs-11 custom-shadow custom-border-radius",style:{"margin-top":"20px"}},{default:e(()=>[o(r,null,{default:e(()=>[V]),_:1}),o(r,null,{default:e(()=>[s("div",B,[o(g,{class:"col-md-3 col-sm-12 col-xs-12",outlined:"",standout:"","bottom-slots":"",modelValue:t.tasabcv,"onUpdate:modelValue":a[0]||(a[0]=d=>t.tasabcv=d),label:"Tasa BCV","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"])])]),_:1}),o(h),o(b,{align:"center"},{default:e(()=>[o(v,{unelevated:"","no-caps":"",color:"warning","icon-right":"check",label:"Actualizar",onClick:t.guardar},null,8,["onClick"])]),_:1})]),_:1})])])]),_:1})}var z=u(y,[["render",N]]);export{z as default};