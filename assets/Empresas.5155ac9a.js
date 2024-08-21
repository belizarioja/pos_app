import{_ as T,al as z,r as i,N as f,am as A,k as j,l as P,w as s,q as o,m as a,B as c,z as _,y as u,t as k,Q as y,x as r,C as m,F as Q,an as b,A as V,ab as p,az as w}from"./index.fbe353e9.js";import{Q as C,a as B}from"./QTable.9b075824.js";import{Q as q}from"./QItem.2607f2d9.js";import{Q as D}from"./QPage.a8c49698.js";import{C as h}from"./ClosePopup.a6548996.js";import{a as g}from"./axios.7331a07d.js";import"./format.ef5f6d3d.js";import"./QSelect.87560cba.js";const v="https://posapi-test.factura-smart.com/",I=z({name:"IndexPage",setup(){return{modalUpdEstatus:i(!1),tokenfacturacion:i(""),urlfacturacion:i(""),rif:i(""),empresa:i(""),direccion:i(""),telefono:i(""),email:i(""),tasabcv:i(""),rows:i([]),cols:[{name:"rif",align:"left",label:"\u{1F194} Rif",field:"rif"},{name:"empresa",align:"left",label:"\u{1F3E2} Raz\xF3n Social",field:"empresa",style:"min-width: 200px; width: 200px"},{name:"direccion",align:"left",label:"\u{1F4CD} Direcci\xF3n",field:"direccion",style:"min-width: 200px; width: 200px"},{name:"telefono",align:"left",label:"\u{1F4DE} Tel\xE9fono",field:"telefono"},{name:"email",align:"left",label:"\u{1F4E7} Email",field:"email"},{name:"token",align:"left",label:"\u{1F511} Token",field:"token"},{name:"url",align:"left",label:"\u{1F310} Url Integraci\xF3n",field:"url"},{name:"tasabcv",align:"left",label:"\u{1F4B9} Tasa BCV",field:"tasabcv"},{name:"estatus",align:"left",label:"\u{1F504} Estatus",field:"estatus"},{name:"accion",align:"left",label:"\u{1F527} Accion",field:"accion"}],filterTable:i(""),titulomodal:i(""),idUpd:i(""),buscaritem:i(!1),detalleventa:i({}),loading:i(!1),viewtoken:i(!1),modalEdit:i(!1),pagination:{page:1,rowsPerPage:20}}},methods:{btnviewtoken(e){console.log(e),this.razonsocialtitulo=e.empresa,this.riftitulo=e.rif,this.tokenservicios=e.token,this.viewtoken=!0},openEdit(e){console.log(e),this.titulomodal="Editar",this.idUpd=e.cod,this.tasabcv=e.tasabcv,this.tokenfacturacion=e.token,this.urlfacturacion=e.url,this.empresa=e.empresa,this.rif=e.rif,this.direccion=e.direccion,this.telefono=e.telefono,this.email=e.email,this.modalEdit=!0},openCrear(){this.idUpd=void 0,this.titulomodal="Crear",this.tasabcv="",this.tokenfacturacion="",this.urlfacturacion="",this.empresa="",this.rif="",this.direccion="",this.telefono="",this.email="",this.modalEdit=!0},crear(){const e={empresa:this.empresa||"",email:this.email||"",telefono:this.telefono||"",direccion:this.direccion||"",rif:this.rif||"",urlfacturacion:this.urlfacturacion||"",tasabcv:this.tasabcv||0,tokenfacturacion:this.tokenfacturacion||""};g.post(v+"sede",e).then(async l=>{if(l.status===200){const n=l.data.resp;f.create(n),this.modalEdit=!1,this.listar()}}).catch(l=>{f.create("Problemas al Crear Cliente Emisor "+l)})},guardar(){this.titulomodal==="Editar"?this.editar():this.crear()},editar(){const e={empresa:this.empresa||"",email:this.email||"",telefono:this.telefono||"",direccion:this.direccion||"",rif:this.rif||"",urlfacturacion:this.urlfacturacion||"",tasabcv:this.tasabcv||0,tokenfacturacion:this.tokenfacturacion||""};g.put(v+"sede/"+this.idUpd,e).then(async l=>{if(l.status===200){const n=l.data.resp;f.create(n),this.modalEdit=!1,this.listar()}}).catch(l=>{f.create("Problemas al actualizar Configuracion "+l)})},btnOpenUpdEstatus(e){this.idUpd=e.cod,this.messageActualizar=e.estatus==="1"?"desactivar":"activar",this.estatusAct=e.estatus,this.modalUpdEstatus=!0},actualizarEstatus(){const e={estatus:this.estatusAct==="1"?0:1};g.put(v+"sede/estatus/"+this.idUpd,e).then(async l=>{if(l.status===200){const n=l.data.resp;f.create(n),this.modalUpdEstatus=!1,this.listar()}})},listar(){this.btndisable=!1,g.get(v+"sede").then(async e=>{const l=e.data.data;this.rows=[];for(const n in l){const d={};d.cod=l[n].id,d.rif=l[n].rif,d.empresa=l[n].empresa,d.direccion=l[n].direccion,d.email=l[n].email,d.token=l[n].tokenfacturacion,d.url=l[n].urlfacturacion,d.telefono=l[n].telefono,d.tasabcv=l[n].tasabcv,d.estatus=l[n].estatus,this.rows.push(d)}}).catch(e=>{f.create("Problemas al listar Emisores "+e)})}},mounted(){console.log("Listar emisores"),this.listar()}}),N={class:"col"},$=o("div",{class:"botones row fondo-gris shadow-up-9"},[o("h6",{class:"p-2"},"M\xF3dulo emisores")],-1),S={class:"listarcategorias row",style:{"margin-top":"20px"}},R={class:"listarcategorias row",style:{"margin-top":"20px"}},x={class:"listarcategorias row"},O={class:"listarcategoriasconitem col"},F={class:"row justify-center"},M={align:"center"},G={align:"center"},H={align:"center"},L=o("span",{class:"q-ml-sm"},"Esta informaci\xF3n es secreta \u{1F92B}",-1),J={class:"q-ml-sm"},K={class:"text-center"},W={class:"row justify-around"},X={class:"row justify-around"},Y={class:"row justify-around"},Z={class:"row justify-around"},ee=o("div",{class:"text-center"},[o("h6",null,"Actualizar Estatus")],-1);function ae(e,l,n,d,le,te){const E=A("q-card-label");return j(),P(D,{class:"row"},{default:s(()=>[o("div",N,[$,o("div",S,[a(c,{"no-caps":"",unelevated:"",dense:"","icon-right":"add_business",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3 gradient-btn",label:"Crear Emisor",onClick:e.openCrear,style:{width:"150px"}},null,8,["onClick"])]),o("div",R,[a(u,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"","bottom-slots":"",dense:"",debounce:"500",modelValue:e.filterTable,"onUpdate:modelValue":l[0]||(l[0]=t=>e.filterTable=t),placeholder:"Buscar",style:{width:"30%"}},{append:s(()=>[a(_,{name:"search"})]),_:1},8,["modelValue"])]),o("div",x,[o("div",O,[o("div",F,[a(B,{rows:e.rows,title:"Emisores",columns:e.cols,"row-key":"num",pagination:e.pagination,dense:"",style:{width:"95%","margin-top":"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"\u26A0 Sin registros ","wrap-cells":"",separator:"cell",class:"custom-shadow custom-border-radius-table"},{"body-cell-token":s(t=>[a(C,{props:t},{default:s(()=>[o("div",M,[a(c,{icon:"visibility",onClick:k(U=>e.btnviewtoken(t.row),["stop"]),dense:"",flat:"",round:"",color:"grey-7"},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-accion":s(t=>[a(C,{props:t},{default:s(()=>[o("div",G,[a(c,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"edit",onClick:k(U=>e.openEdit(t.row),["stop"])},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-estatus":s(t=>[a(C,{props:t},{default:s(()=>[o("div",H,[a(c,{color:t.row.estatus==="1"?"green":"grey",icon:t.row.estatus==="1"?"toggle_on":"toggle_off",onClick:k(U=>e.btnOpenUpdEstatus(t.row),["stop"]),dense:""},null,8,["color","icon","onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),a(w,{modelValue:e.viewtoken,"onUpdate:modelValue":l[1]||(l[1]=t=>e.viewtoken=t),persistent:""},{default:s(()=>[a(y,{class:"q-pa-lg custom-shadow custom-border-radius"},{default:s(()=>[a(r,{class:"row items-center"},{default:s(()=>[L]),_:1}),a(m),a(r,{class:"row items-center"},{default:s(()=>[o("span",J,[Q("Cliente Emisor: "),o("b",null,b(e.razonsocialtitulo+" - "+e.riftitulo),1)])]),_:1}),a(r,{class:"tarjeticainside",style:{"word-break":"break-all"}},{default:s(()=>[a(q,null,{default:s(()=>[a(r,{avatar:""},{default:s(()=>[a(_,{name:"token",color:"grey-7"})]),_:1}),a(r,null,{default:s(()=>[a(E,{caption:""},{default:s(()=>[Q("Token:")]),_:1}),o("p",null,b(e.tokenservicios),1)]),_:1})]),_:1})]),_:1}),a(m),a(V,{align:"center"},{default:s(()=>[p(a(c,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check"},null,512),[[h]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(w,{modelValue:e.modalEdit,"onUpdate:modelValue":l[10]||(l[10]=t=>e.modalEdit=t),persistent:""},{default:s(()=>[a(y,{class:"col-md-6 col-sm-11 col-xs-11",style:{"margin-top":"20px"}},{default:s(()=>[a(r,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:s(()=>[o("div",K,[o("h6",null,b(e.titulomodal)+" Emisor",1)]),p(a(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[h]])]),_:1}),a(m,{class:"row"}),a(r,null,{default:s(()=>[o("div",W,[a(u,{class:"col-md-3 col-sm-12 col-xs-12",outlined:"",modelValue:e.tasabcv,"onUpdate:modelValue":l[2]||(l[2]=t=>e.tasabcv=t),label:"Tasa BCV","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),a(u,{class:"col-md-8 col-sm-12 col-xs-12",outlined:"",modelValue:e.urlfacturacion,"onUpdate:modelValue":l[3]||(l[3]=t=>e.urlfacturacion=t),label:"Url facturaci\xF3n","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),a(m,{class:"row"}),a(r,null,{default:s(()=>[o("div",X,[a(u,{class:"col-md-3 col-sm-12 col-xs-12",outlined:"",modelValue:e.rif,"onUpdate:modelValue":l[4]||(l[4]=t=>e.rif=t),label:"RIF","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),a(u,{class:"col-md-8 col-sm-12 col-xs-12",outlined:"",modelValue:e.empresa,"onUpdate:modelValue":l[5]||(l[5]=t=>e.empresa=t),label:"Raz\xF3n Social","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),a(m,{class:"row"}),a(r,null,{default:s(()=>[o("div",Y,[a(u,{class:"col-md-5 col-sm-12 col-xs-12",outlined:"",modelValue:e.telefono,"onUpdate:modelValue":l[6]||(l[6]=t=>e.telefono=t),label:"Tel\xE9fono","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),a(u,{class:"col-md-6 col-sm-12 col-xs-12",outlined:"",modelValue:e.email,"onUpdate:modelValue":l[7]||(l[7]=t=>e.email=t),label:"Email","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),a(m,{class:"row"}),a(r,null,{default:s(()=>[o("div",Z,[a(u,{class:"col-12",outlined:"",modelValue:e.direccion,"onUpdate:modelValue":l[8]||(l[8]=t=>e.direccion=t),label:"Direcci\xF3n","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"])])]),_:1}),a(m),a(r,null,{default:s(()=>[a(u,{modelValue:e.tokenfacturacion,"onUpdate:modelValue":l[9]||(l[9]=t=>e.tokenfacturacion=t),label:"Token facturaci\xF3n",outlined:"",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(m),a(V,{align:"center"},{default:s(()=>[p(a(c,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[h]]),a(c,{unelevated:"","no-caps":"",label:"Guardar",color:"primary","icon-right":"check",onClick:e.guardar},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(w,{modelValue:e.modalUpdEstatus,"onUpdate:modelValue":l[11]||(l[11]=t=>e.modalUpdEstatus=t),persistent:""},{default:s(()=>[a(y,{style:{width:"250px"}},{default:s(()=>[a(r,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:s(()=>[ee,p(a(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[h]])]),_:1}),a(r,{class:"q-pt-none"},{default:s(()=>[a(r,{class:"tarjeticainside"},{default:s(()=>[a(E,{caption:""}),o("p",null," \xBFDesea "+b(e.messageActualizar)+" este usuario?",1)]),_:1})]),_:1}),a(m),a(V,{align:"center"},{default:s(()=>[p(a(c,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[h]]),a(c,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check",onClick:e.actualizarEstatus},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var me=T(I,[["render",ae]]);export{me as default};
