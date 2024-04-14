import{_ as U,aj as T,r as i,N as m,k as Q,al as _,t as s,m as o,q as l,y as c,z,B as u,w as g,Q as v,x as d,am as p,A as w,a3 as k,az as y,au as f}from"./index.f651fec0.js";import{Q as V,a as A}from"./QTable.0134ae83.js";import{Q as P}from"./QPage.5ee92a3b.js";import{C as E}from"./ClosePopup.31e4d802.js";import{a as h}from"./axios.7331a07d.js";import"./QList.41ccaa8b.js";import"./QSelect.5e656e7b.js";import"./QItem.e55bb5af.js";import"./format.a805a97a.js";const b="https://posapi-test.factura-smart.com/",j=T({name:"IndexPage",setup(){return{modalUpdEstatus:i(!1),tokenfacturacion:i(""),urlfacturacion:i(""),rif:i(""),empresa:i(""),direccion:i(""),telefono:i(""),email:i(""),tasabcv:i(""),rows:i([]),cols:[{name:"rif",align:"center",label:"Rif",field:"rif"},{name:"empresa",align:"center",label:"Raz\xF3n Social",field:"empresa"},{name:"direccion",align:"center",label:"Direcci\xF3n",field:"direccion"},{name:"telefono",align:"left",label:"Tel\xE9fono",field:"telefono"},{name:"email",align:"left",label:"Email",field:"email"},{name:"token",align:"left",label:"Token",field:"token"},{name:"url",align:"left",label:"Url Integraci\xF3n",field:"url"},{name:"tasabcv",align:"left",label:"Tasa BCV",field:"tasabcv"},{name:"estatus",align:"left",label:"Estatus",field:"estatus"},{name:"accion",align:"left",label:"Accion",field:"accion"}],filterTable:i(""),titulomodal:i(""),idUpd:i(""),buscaritem:i(!1),detalleventa:i({}),loading:i(!1),viewtoken:i(!1),modalEdit:i(!1),pagination:{page:1,rowsPerPage:20}}},methods:{btnviewtoken(e){console.log(e),this.razonsocialtitulo=e.empresa,this.riftitulo=e.rif,this.tokenservicios=e.token,this.viewtoken=!0},openEdit(e){console.log(e),this.titulomodal="Editar",this.idUpd=e.cod,this.tasabcv=e.tasabcv,this.tokenfacturacion=e.token,this.urlfacturacion=e.url,this.empresa=e.empresa,this.rif=e.rif,this.direccion=e.direccion,this.telefono=e.telefono,this.email=e.email,this.modalEdit=!0},openCrear(){this.idUpd=void 0,this.titulomodal="Crear",this.tasabcv="",this.tokenfacturacion="",this.urlfacturacion="",this.empresa="",this.rif="",this.direccion="",this.telefono="",this.email="",this.modalEdit=!0},crear(){const e={empresa:this.empresa||"",email:this.email||"",telefono:this.telefono||"",direccion:this.direccion||"",rif:this.rif||"",urlfacturacion:this.urlfacturacion||"",tasabcv:this.tasabcv||0,tokenfacturacion:this.tokenfacturacion||""};h.post(b+"sede",e).then(async a=>{if(a.status===200){const n=a.data.resp;m.create(n),this.modalEdit=!1,this.listar()}}).catch(a=>{m.create("Problemas al Crear Cliente Emisor "+a)})},guardar(){this.titulomodal==="Editar"?this.editar():this.crear()},editar(){const e={empresa:this.empresa||"",email:this.email||"",telefono:this.telefono||"",direccion:this.direccion||"",rif:this.rif||"",urlfacturacion:this.urlfacturacion||"",tasabcv:this.tasabcv||0,tokenfacturacion:this.tokenfacturacion||""};h.put(b+"configuracion/"+this.idUpd,e).then(async a=>{if(a.status===200){const n=a.data.resp;m.create(n),this.modalEdit=!1,this.listar()}}).catch(a=>{m.create("Problemas al actualizar Configuracion "+a)})},btnOpenUpdEstatus(e){this.idUpd=e.cod,this.messageActualizar=e.estatus==="1"?"desactivar":"activar",this.estatusAct=e.estatus,this.modalUpdEstatus=!0},actualizarEstatus(){const e={estatus:this.estatusAct==="1"?0:1};h.put(b+"sede/estatus/"+this.idUpd,e).then(async a=>{if(a.status===200){const n=a.data.resp;m.create(n),this.modalUpdEstatus=!1,this.listar()}})},listar(){this.btndisable=!1,h.get(b+"sede").then(async e=>{const a=e.data.data;this.rows=[];for(const n in a){const r={};r.cod=a[n].id,r.rif=a[n].rif,r.empresa=a[n].empresa,r.direccion=a[n].direccion,r.email=a[n].email,r.token=a[n].tokenfacturacion,r.url=a[n].urlfacturacion,r.telefono=a[n].telefono,r.tasabcv=a[n].tasabcv,r.estatus=a[n].estatus,this.rows.push(r)}}).catch(e=>{m.create("Problemas al listar Emisores "+e)})}},mounted(){console.log("Listar emisores"),this.listar()}}),B={class:"col"},D=o("div",{class:"botones row",style:{background:"#ededed"}},[o("div",{class:"text-h6"},"M\xF3dulo de Emisores")],-1),N={class:"listarcategorias row"},$={class:"listarcategoriasconitem col"},I={class:"row justify-center"},q={style:{display:"inline"}},S={class:"q-ml-sm"},R={style:{}},O={class:"text-h6"},M={class:"row justify-around"},F={class:"row justify-around"},G={class:"row justify-around"},H={class:"row justify-around"},L=o("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Estatus",-1),J={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}};function K(e,a,n,r,W,X){return Q(),_(P,{class:"bg-white row"},{default:s(()=>[o("div",B,[D,o("div",N,[o("div",$,[o("div",I,[l(A,{dense:"",rows:e.rows,title:"Emisores",columns:e.cols,"row-key":"num",pagination:e.pagination,style:{width:"95%","margin-top":"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"No hay registros!"},{"top-left":s(()=>[l(c,{dense:"",debounce:"300",color:"primary",modelValue:e.filterTable,"onUpdate:modelValue":a[0]||(a[0]=t=>e.filterTable=t),placeholder:"Buscar"},{append:s(()=>[l(z,{name:"search"})]),_:1},8,["modelValue"])]),"top-right":s(()=>[o("div",q,[l(u,{"icon-right":"add_business",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3",color:"secondary",label:"Crear Emisor",onClick:e.openCrear},null,8,["onClick"])])]),"body-cell-token":s(t=>[l(V,{props:t},{default:s(()=>[o("div",null,[l(u,{icon:"visibility",onClick:g(C=>e.btnviewtoken(t.row),["stop"]),dense:"",flat:""},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-accion":s(t=>[l(V,{props:t},{default:s(()=>[o("div",null,[l(u,{color:"primary",icon:"app_registration",onClick:g(C=>e.openEdit(t.row),["stop"]),dense:""},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-estatus":s(t=>[l(V,{props:t},{default:s(()=>[o("div",null,[l(u,{color:t.row.estatus==="1"?"secondary":"negative",icon:t.row.estatus==="1"?"toggle_on":"toggle_off",onClick:g(C=>e.btnOpenUpdEstatus(t.row),["stop"]),dense:""},null,8,["color","icon","onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),l(y,{modelValue:e.viewtoken,"onUpdate:modelValue":a[1]||(a[1]=t=>e.viewtoken=t),persistent:""},{default:s(()=>[l(v,{style:{width:"auto"}},{default:s(()=>[l(d,{class:"row items-center"},{default:s(()=>[o("span",S,"Token del Cliente Emisor "+p(e.razonsocialtitulo+" - "+e.riftitulo),1)]),_:1}),l(d,{class:"row items-center",style:{"word-break":"break-all"}},{default:s(()=>[o("div",R,p(e.tokenservicios),1)]),_:1}),l(w,{align:"right"},{default:s(()=>[k(l(u,{label:"Aceptar",color:"primary"},null,512),[[E]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(y,{modelValue:e.modalEdit,"onUpdate:modelValue":a[10]||(a[10]=t=>e.modalEdit=t),persistent:""},{default:s(()=>[l(v,{class:"col-md-6 col-sm-11 col-xs-11",style:{"margin-top":"20px"}},{default:s(()=>[l(d,{class:"row"},{default:s(()=>[o("div",O,p(e.titulomodal)+" Emisor",1)]),_:1}),l(f,{class:"row"}),l(d,null,{default:s(()=>[o("div",M,[l(c,{class:"col-md-3 col-sm-12 col-xs-12",filled:"",modelValue:e.tasabcv,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tasabcv=t),label:"Tasa BCV","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),l(c,{class:"col-md-8 col-sm-12 col-xs-12",filled:"",modelValue:e.urlfacturacion,"onUpdate:modelValue":a[3]||(a[3]=t=>e.urlfacturacion=t),label:"Url facturaci\xF3n","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),l(f,{class:"row"}),l(d,null,{default:s(()=>[o("div",F,[l(c,{class:"col-md-3 col-sm-12 col-xs-12",filled:"",modelValue:e.rif,"onUpdate:modelValue":a[4]||(a[4]=t=>e.rif=t),label:"RIF","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),l(c,{class:"col-md-8 col-sm-12 col-xs-12",filled:"",modelValue:e.empresa,"onUpdate:modelValue":a[5]||(a[5]=t=>e.empresa=t),label:"Raz\xF3n Social","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),l(f,{class:"row"}),l(d,null,{default:s(()=>[o("div",G,[l(c,{class:"col-md-5 col-sm-12 col-xs-12",filled:"",modelValue:e.telefono,"onUpdate:modelValue":a[6]||(a[6]=t=>e.telefono=t),label:"Tel\xE9fono","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),l(c,{class:"col-md-6 col-sm-12 col-xs-12",filled:"",modelValue:e.email,"onUpdate:modelValue":a[7]||(a[7]=t=>e.email=t),label:"Email","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),l(f,{class:"row"}),l(d,null,{default:s(()=>[o("div",H,[l(c,{class:"col-12",filled:"",modelValue:e.direccion,"onUpdate:modelValue":a[8]||(a[8]=t=>e.direccion=t),label:"Direcci\xF3n","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"])])]),_:1}),l(f),l(d,null,{default:s(()=>[l(c,{modelValue:e.tokenfacturacion,"onUpdate:modelValue":a[9]||(a[9]=t=>e.tokenfacturacion=t),label:"Token facturaci\xF3n",filled:"",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),l(f),l(w,{align:"right"},{default:s(()=>[k(l(u,{label:"Cerrar",color:"negative"},null,512),[[E]]),l(u,{label:"Guardar",color:"secondary",onClick:e.guardar},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(y,{modelValue:e.modalUpdEstatus,"onUpdate:modelValue":a[11]||(a[11]=t=>e.modalUpdEstatus=t),persistent:""},{default:s(()=>[l(v,{style:{width:"250px"}},{default:s(()=>[l(d,null,{default:s(()=>[L]),_:1}),l(d,{class:"q-pt-none"},{default:s(()=>[o("div",null," \xBFDesea "+p(e.messageActualizar)+" este usuario? ",1)]),_:1}),l(d,{class:"q-pt-none"},{default:s(()=>[o("div",J,[k(l(u,{color:"negative",label:"Cancelar"},null,512),[[E]]),l(u,{color:"secondary",label:"Aceptar",onClick:e.actualizarEstatus},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ie=U(j,[["render",K]]);export{ie as default};
