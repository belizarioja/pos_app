import{_ as j,al as A,r as d,N as m,am as P,k as S,l as N,w as o,q as i,m as s,B as u,z as _,y as c,t as w,Q as v,x as r,ab as f,C as p,A as V,az as y,an as k,F as z}from"./index.c1f5bb9f.js";import{Q as C,a as T}from"./QTable.0749003a.js";import{a as E}from"./QSelect.69c0361d.js";import{Q as $}from"./QItem.96835f57.js";import{Q as I}from"./QPage.cd32d288.js";import{C as b}from"./ClosePopup.2c4e4ff1.js";import{a as g}from"./axios.7331a07d.js";import"./format.1c4274d2.js";const h="https://bckpos.factura-smart.com/",B=A({name:"UsersSetting",setup(){return{rows:d([]),cols:[{name:"id",align:"center",label:"\u{1F194} ID",field:"id"},{name:"usuario",align:"center",label:"\u{1F464} Usuario",field:"usuario"},{name:"clave",align:"center",label:"\u{1F511} Clave",field:"clave"},{name:"nombre",align:"left",label:"\u{1F4DD} Nombre",field:"nombre"},{name:"email",align:"left",label:"\u{1F4E7} Email",field:"email"},{name:"empresa",align:"left",label:"\u{1F3E2} Empresa",field:"empresa"},{name:"rol",align:"left",label:"\u{1F3AD} Rol",field:"rol"},{name:"estatus",align:"left",label:"\u{1F504} Estatus",field:"estatus"},{name:"accion",align:"left",label:"\u{1F527} Accion",field:"accion"}],co_rol:d(sessionStorage.getItem("co_rol")),co_empresa:d(sessionStorage.getItem("co_empresa")),filterTable:d(""),buscaritem:d(!1),loading:d(!1),modalEdit:d(!1),modalCreate:d(!1),modalUpdEstatus:d(!1),usuario:d(""),clave:d(""),nombre:d(""),email:d(""),modelrol:d(""),optionsrol:d([]),modelsede:d(""),viewpass:d(!1),optionssede:d([]),pagination:{page:1,rowsPerPage:20}}},methods:{listarSedes(){g.get(h+"sede").then(async e=>{const l=e.data.data;this.optionssede=[];for(const t in l){const n={};n.cod=l[t].id,n.name=l[t].empresa,this.co_rol==="1"?this.optionssede.push(n):this.co_empresa===n.cod&&(this.optionssede.push(n),this.modelsede=this.optionssede[0])}}).catch(e=>{m.create("Problemas al listar Sedes "+e)})},listarRoles(){g.get(h+"usuario/roles").then(async e=>{const l=e.data.resp;this.optionsrol=[];for(const t in l){const n={};n.cod=l[t].id,n.name=l[t].rol,l[t].id==="1"?this.co_rol==="1"&&this.optionsrol.push(n):this.optionsrol.push(n)}}).catch(e=>{m.create("Problemas al listar Roles "+e)})},openCreate(){this.idUpd="",this.usuario="",this.clave="",this.email="",this.nombre="",this.modalCreate=!0},openEdit(e){console.log(e),this.idUpd=e.id,this.usuario=e.usuario,this.clave=e.clave,this.email=e.email,this.nombre=e.nombre,this.modalEdit=!0},crear(){console.log(this.modelrol),console.log(this.modelsede);const e={usuario:this.usuario||"",clave:this.clave||"",email:this.email||"",idrol:this.modelrol.cod,idempresa:this.modelsede.cod,nombre:this.nombre||""};g.post(h+"usuario/",e).then(async l=>{if(console.log(l.status),l.status===200){const t=l.data.resp;console.log(t),m.create(t),this.modalCreate=!1,this.listar()}}).catch(l=>{m.create("Problemas al actualizar Configuracion "+l)})},guardar(){const e={usuario:this.usuario||"",clave:this.clave||"",email:this.email||"",nombre:this.nombre||""};g.put(h+"usuario/"+this.idUpd,e).then(async l=>{if(console.log(l.status),l.status===200){const t=l.data.resp;console.log(t),m.create(t),this.modalEdit=!1,this.listar()}}).catch(l=>{m.create("Problemas al actualizar Configuracion "+l)})},btnOpenUpdEstatus(e){this.idUpd=e.id,this.messageActualizar=e.estatus==="1"?"desactivar":"activar",this.estatusAct=e.estatus,this.modalUpdEstatus=!0},actualizarEstatus(){const e={estatus:this.estatusAct==="1"?0:1};g.put(h+"usuario/estatus/"+this.idUpd,e).then(async l=>{if(l.status===200){const t=l.data.resp;console.log(t),m.create(t),this.modalUpdEstatus=!1,this.listar()}})},listar(){this.btndisable=!1,g.get(h+"usuario").then(async e=>{console.log(e.data);const l=e.data.resp;this.rows=[];for(const t in l){const n={};n.id=l[t].id,n.usuario=l[t].usuario,n.clave=l[t].clave,n.nombre=l[t].nombre,n.email=l[t].email,n.rol=l[t].rol,n.idrol=l[t].idrol,n.empresa=l[t].empresa,n.idempresa=l[t].idempresa,n.estatus=l[t].estatus,this.co_rol==="1"?this.rows.push(n):this.co_empresa===n.idempresa&&this.rows.push(n)}console.log(this.rows)}).catch(e=>{m.create("Problemas al listar Emisores "+e)})},btnviewpass(e){console.log(e),this.password=e.clave,this.viewpass=!0}},mounted(){console.log("Listar emisores"),this.listarSedes(),this.listarRoles(),this.listar()}}),D={class:"col"},q=i("div",{class:"botones row fondo-gris shadow-up-9"},[i("h6",{class:"p-2"},"Usuarios")],-1),R={class:"listarcategorias row",style:{"margin-top":"20px"}},x={class:"listarcategorias row",style:{"margin-top":"20px"}},O={class:"listarcategorias row"},F={class:"listarcategoriasconitem col"},G={class:"row justify-center"},H={align:"center"},L={align:"center"},M={align:"center"},J=i("div",{class:"text-center"},[i("h6",null,"Crear Usuario")],-1),K={class:"row justify-around"},W={class:"row justify-around"},X={class:"row justify-around"},Y={class:"row justify-around"},Z=i("div",{class:"text-center"},[i("h6",null,"Editar usuario")],-1),ee={class:"row justify-around"},le={class:"row justify-around"},se=i("div",{class:"text-center"},[i("h6",null,"Actualizar Estatus")],-1),ae={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},oe=i("span",{class:"q-ml-sm"},"Esta informaci\xF3n es secreta \u{1F92B}",-1);function te(e,l,t,n,ie,ne){const Q=P("q-card-label");return S(),N(I,{class:"row"},{default:o(()=>[i("div",D,[q,i("div",R,[s(u,{"no-caps":"",unelevated:"",dense:"","icon-right":"person_add",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3 gradient-btn",label:"Crear Usuario",onClick:l[0]||(l[0]=a=>e.openCreate()),style:{width:"150px"}})]),i("div",x,[s(c,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"","bottom-slots":"",dense:"",debounce:"500",modelValue:e.filterTable,"onUpdate:modelValue":l[1]||(l[1]=a=>e.filterTable=a),placeholder:"Buscar",style:{width:"30%"}},{append:o(()=>[s(_,{name:"search"})]),_:1},8,["modelValue"])]),i("div",O,[i("div",F,[i("div",G,[s(T,{title:"Usuarios",rows:e.rows,columns:e.cols,"row-key":"num",pagination:e.pagination,style:{width:"95%","margin-top":"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"\u26A0 Sin registros ","wrap-cells":"",separator:"cell",class:"custom-shadow custom-border-radius-table"},{"body-cell-accion":o(a=>[s(C,{props:a},{default:o(()=>[i("div",H,[s(u,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"edit",onClick:w(U=>e.openEdit(a.row),["stop"])},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-clave":o(a=>[s(C,{props:a},{default:o(()=>[i("div",L,[s(u,{icon:"visibility",onClick:w(U=>e.btnviewpass(a.row),["stop"]),dense:"",flat:"",round:"",color:"grey-7"},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-estatus":o(a=>[s(C,{props:a},{default:o(()=>[i("div",M,[s(u,{color:a.row.estatus==="1"?"green":"grey",icon:a.row.estatus==="1"?"toggle_on":"toggle_off",onClick:w(U=>e.btnOpenUpdEstatus(a.row),["stop"]),dense:""},null,8,["color","icon","onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),s(y,{modelValue:e.modalCreate,"onUpdate:modelValue":l[8]||(l[8]=a=>e.modalCreate=a),persistent:""},{default:o(()=>[s(v,{class:"col-md-6 col-sm-11 col-xs-11",style:{"margin-top":"20px"}},{default:o(()=>[s(r,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:o(()=>[J,f(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",K,[s(c,{class:"col-md-6 col-sm-12 col-xs-12",outlined:"",modelValue:e.usuario,"onUpdate:modelValue":l[2]||(l[2]=a=>e.usuario=a),label:"Usuario","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),s(c,{class:"col-md-5 col-sm-12 col-xs-12",outlined:"",modelValue:e.clave,"onUpdate:modelValue":l[3]||(l[3]=a=>e.clave=a),label:"Clave","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",W,[s(c,{class:"col-md-4 col-sm-12 col-xs-12",outlined:"",modelValue:e.nombre,"onUpdate:modelValue":l[4]||(l[4]=a=>e.nombre=a),label:"Nombre","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),s(c,{class:"col-md-7 col-sm-12 col-xs-12",outlined:"",modelValue:e.email,"onUpdate:modelValue":l[5]||(l[5]=a=>e.email=a),label:"Email","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",X,[s(E,{dense:"",class:"col",outlined:"","options-dense":"",modelValue:e.modelrol,"onUpdate:modelValue":l[6]||(l[6]=a=>e.modelrol=a),options:e.optionsrol,"option-label":"name","option-value":"cod",label:"Rol de usuario",style:{margin:"10px"}},null,8,["modelValue","options"])])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",Y,[s(E,{dense:"",class:"col",outlined:"","options-dense":"",modelValue:e.modelsede,"onUpdate:modelValue":l[7]||(l[7]=a=>e.modelsede=a),options:e.optionssede,"option-label":"name","option-value":"cod",label:"Emisores",style:{margin:"10px"}},null,8,["modelValue","options"])])]),_:1}),s(p),s(V,{align:"center"},{default:o(()=>[f(s(u,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[b]]),s(u,{unelevated:"","no-caps":"",label:"Guardar",color:"primary","icon-right":"check",onClick:e.crear},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(y,{modelValue:e.modalEdit,"onUpdate:modelValue":l[13]||(l[13]=a=>e.modalEdit=a),persistent:""},{default:o(()=>[s(v,{class:"col-md-6 col-sm-11 col-xs-11",style:{"margin-top":"20px"}},{default:o(()=>[s(r,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:o(()=>[Z,f(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",ee,[s(c,{class:"col-md-6 col-sm-12 col-xs-12",outlined:"",modelValue:e.usuario,"onUpdate:modelValue":l[9]||(l[9]=a=>e.usuario=a),label:"Usuario","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),s(c,{class:"col-md-5 col-sm-12 col-xs-12",outlined:"",modelValue:e.clave,"onUpdate:modelValue":l[10]||(l[10]=a=>e.clave=a),label:"Clave","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),s(p,{class:"row"}),s(r,null,{default:o(()=>[i("div",le,[s(c,{class:"col-md-4 col-sm-12 col-xs-12",outlined:"",modelValue:e.nombre,"onUpdate:modelValue":l[11]||(l[11]=a=>e.nombre=a),label:"Nombre","stack-label":"",dense:"",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),s(c,{class:"col-md-7 col-sm-12 col-xs-12",outlined:"",modelValue:e.email,"onUpdate:modelValue":l[12]||(l[12]=a=>e.email=a),label:"Email","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),s(p),s(V,{align:"center"},{default:o(()=>[f(s(u,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[b]]),s(u,{unelevated:"","no-caps":"",label:"Guardar",color:"primary","icon-right":"check",onClick:e.guardar},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(y,{modelValue:e.modalUpdEstatus,"onUpdate:modelValue":l[14]||(l[14]=a=>e.modalUpdEstatus=a),persistent:""},{default:o(()=>[s(v,null,{default:o(()=>[s(r,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:o(()=>[se,f(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])]),_:1}),s(r,{class:"q-pt-none"},{default:o(()=>[i("div",null," \xBFDesea "+k(e.messageActualizar)+" este usuario? ",1)]),_:1}),s(r,{align:"center"},{default:o(()=>[i("div",ae,[f(s(u,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[b]]),s(u,{unelevated:"","no-caps":"",label:"Aceptar (F4)",color:"primary","icon-right":"check",onClick:e.actualizarEstatus,style:{"margin-left":"10px"}},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(y,{modelValue:e.viewpass,"onUpdate:modelValue":l[15]||(l[15]=a=>e.viewpass=a),persistent:""},{default:o(()=>[s(v,{style:{width:"auto"}},{default:o(()=>[s(r,{class:"row items-center"},{default:o(()=>[oe]),_:1}),s(r,{class:"tarjeticainside"},{default:o(()=>[s($,null,{default:o(()=>[s(r,{avatar:""},{default:o(()=>[s(_,{name:"password_2",color:"grey-7"})]),_:1}),s(r,null,{default:o(()=>[s(Q,{caption:""},{default:o(()=>[z("Contrase\xF1a:")]),_:1}),i("p",null,k(e.password),1)]),_:1})]),_:1})]),_:1}),s(V,{align:"right"},{default:o(()=>[f(s(u,{label:"Aceptar",color:"primary"},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ge=j(B,[["render",te]]);export{ge as default};
