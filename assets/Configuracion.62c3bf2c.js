import{_ as h,al as v,r as i,N as n,k as b,l as V,w as r,q as s,m as t,x as c,y as g,B as f,C as p,aD as u,A as C,Q as _}from"./index.c1f5bb9f.js";import{Q as y}from"./QPage.cd32d288.js";import{a as d}from"./axios.7331a07d.js";const m="https://bckpos.factura-smart.com/",k=v({name:"IndexPage",setup(){return{tasabcv:i(""),mostrartotal:i(""),tipomoneda:i(""),numerointerno:i("")}},methods:{confirmguardarbcv(){this.$q.dialog({title:"Importante!",message:"Desea tambi\xE9n actualizar inventario a la nueva tasa BCV?",ok:{label:"S\xED",color:"primary",flat:!1,outline:!1,unelevated:!0,icon:"check",noCaps:!0},cancel:{label:"No",color:"primary",icon:"close",flat:!1,outline:!0,unelevated:!0,noCaps:!0},persistent:!0}).onOk(()=>{this.actualizar=1,console.log("OK: ",this.actualizar),this.guardarbcv()}).onCancel(()=>{this.actualizar=2,console.log("Cancel: ",this.actualizar),this.guardarbcv()})},guardarbcv(){const o={tasabcv:this.tasabcv||"",actualizar:this.actualizar||2};console.log(o),d.put(m+"configuracion/"+sessionStorage.getItem("co_empresa"),o).then(async a=>{if(a.status===200){const l=a.data.resp;n.create({message:l,type:"positive"})}}).catch(a=>{n.create("Problemas al actualizar Configuracion "+a)})},guardar(){const o={tipomoneda:this.tipomoneda||1,mostrartotal:this.mostrartotal||1};d.put(m+"configuracion/"+sessionStorage.getItem("co_empresa"),o).then(async a=>{if(a.status===200){const l=a.data.resp;n.create({message:l,type:"positive"})}}).catch(a=>{n.create("Problemas al actualizar Configuracion "+a)})},async cargar(){const o=await d.get(m+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(l=>{n.create("Problemas al listar Configuracion "+l)});console.log(o);const a=o.data.resp;this.tasabcv=a.tasabcv,this.tokenfacturacion=a.tokenfacturacion,this.urlfacturacion=a.urlfacturacion,this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.tipomoneda=a.tipomoneda,this.mostrartotal=a.mostrartotal,this.telefono=a.telefono,this.email=a.email},async getNumeroInterno(){const o=await d.get(m+"configuracion/getnumerointerno/"+sessionStorage.getItem("co_empresa")).catch(l=>{n.create("Problemas al listar Ultimo Numero Interno "+l)});console.log(o);const a=o.data.resp;this.numerointerno=a.numerointerno}},mounted(){this.cargar(),this.getNumeroInterno()}}),N={class:"col"},q=s("div",{class:"botones row fondo-gris shadow-up-9"},[s("h6",{class:"p-2"},"Configuraci\xF3n")],-1),z={class:"zonaconfiguracion row"},I=s("div",{class:"text-h6 q-mt-sm q-mb-xs color-texto"},"Tasa BCV",-1),x={style:{display:"flex"}},w=s("div",{class:"text-h6 q-sm q-mb-xs color-texto"},"Divisa",-1),Q={class:"q-gutter-sm"},B=s("div",{class:"text-h6 q-sm q-mb-xs color-texto"},"Mostrar total otra divisa",-1),P={class:"q-gutter-sm"},S=s("div",{class:"text-h6 q-sm q-mb-xs color-texto"},"N\xFAmero interno actual",-1);function U(o,a,l,A,D,$){return b(),V(y,null,{default:r(()=>[s("div",N,[q,s("div",z,[t(_,{class:"my-card custom-shadow custom-border-radius",bordered:"",style:{"margin-top":"20px","padding-top":"10px"}},{default:r(()=>[t(c,null,{default:r(()=>[I,s("div",x,[t(g,{class:"",outlined:"",standout:"",modelValue:o.tasabcv,"onUpdate:modelValue":a[0]||(a[0]=e=>o.tasabcv=e),label:"Tasa BCV","stack-label":"",dense:"",style:{margin:"0 10px"}},null,8,["modelValue"]),t(f,{unelevated:"","no-caps":"",color:"warning","icon-right":"check",label:"Actualizar",onClick:o.confirmguardarbcv},null,8,["onClick"])])]),_:1}),t(p),t(c,null,{default:r(()=>[w,s("div",Q,[t(u,{modelValue:o.tipomoneda,"onUpdate:modelValue":a[1]||(a[1]=e=>o.tipomoneda=e),val:"1",label:"Bol\xEDvar"},null,8,["modelValue"]),t(u,{modelValue:o.tipomoneda,"onUpdate:modelValue":a[2]||(a[2]=e=>o.tipomoneda=e),val:"2",label:"D\xF3lar"},null,8,["modelValue"])])]),_:1}),t(c,null,{default:r(()=>[B,s("div",P,[t(u,{modelValue:o.mostrartotal,"onUpdate:modelValue":a[3]||(a[3]=e=>o.mostrartotal=e),val:"1",label:"No"},null,8,["modelValue"]),t(u,{modelValue:o.mostrartotal,"onUpdate:modelValue":a[4]||(a[4]=e=>o.mostrartotal=e),val:"2",label:"Si"},null,8,["modelValue"])])]),_:1}),t(C,{align:"center"},{default:r(()=>[t(f,{unelevated:"","no-caps":"",color:"warning","icon-right":"check",label:"Actualizar",onClick:o.guardar},null,8,["onClick"])]),_:1}),t(p),t(c,null,{default:r(()=>[S,t(g,{class:"",outlined:"",standout:"","bottom-slots":"",modelValue:o.numerointerno,"onUpdate:modelValue":a[5]||(a[5]=e=>o.numerointerno=e),label:"N\xFAmero Interno","stack-label":"",dense:"",readonly:"",style:{margin:"10px"}},null,8,["modelValue"])]),_:1}),t(p)]),_:1})])])]),_:1})}var H=h(k,[["render",U]]);export{H as default};
