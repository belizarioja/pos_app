import{_ as I,al as B,r as i,N as p,k as V,l as x,w as n,q as d,m as l,z as y,ab as f,B as m,y as v,F as g,an as u,t as T,ao as j,Q as k,x as w,C as D,aD as C,A as N,az as U}from"./index.14e261c8.js";import{Q as M,a as P}from"./QPopupProxy.37b79b94.js";import{Q as h,a as q}from"./QTable.aa78050f.js";import{Q}from"./QBadge.0bc3a218.js";import{Q as F}from"./QPage.b81d5810.js";import{C as b}from"./ClosePopup.bb2b5c5d.js";import{h as c}from"./moment.40bc58bf.js";import{a as _}from"./axios.7331a07d.js";import"./format.0c2ca588.js";import"./QSelect.ffa75661.js";import"./QItem.fe4c1761.js";const Y="https://bckpos.factura-smart.com/",A=B({name:"CuentasPorcobrar",setup(){const e=i(c().format("YYYY-MM-DD")),a=i(c().format("YYYY/MM/DD")),o=i(c().format("YYYY/MM/DD"));return{pendiente:i(0),formadepago:i("1"),numerointerno:i(""),idUpd:i(""),today:e,desde:a,hasta:o,modalformasdepago:i(!1),prefijo:i("Bs."),prefijo2:i("$"),mostrartotal:i("1"),tipomoneda:i("1"),rows:i([]),ventas:i([]),cols:[{name:"accion",align:"left",label:"\u{1F527}Accion",field:"accion"},{name:"tipofactura",align:"center",label:"\u{1F4C3}Tipo",field:"tipofactura"},{name:"numerointerno",align:"center",label:"\u{1F522}N\xB0 Interno",field:"numerointerno"},{name:"numerocontrol",align:"center",label:"\u{1F50D}# Control",field:"numerocontrol"},{name:"fecha",align:"center",label:"\u{1F4C5}Fecha",field:"fecha"},{name:"cliente",align:"left",label:"\u{1F468}\u200D\u{1F4BC}Cliente",field:"cliente"},{name:"usuario",align:"left",label:"\u{1F464}Usuario",field:"usuario"},{name:"total",align:"center",label:"\u{1F4B5}Total",field:"total"},{name:"abono",align:"left",label:"\u{1F4B2}Abono",field:"abono"},{name:"pendiente",align:"left",label:"\u{1F3DB}Pendiente",field:"pendiente"},{name:"fechavence",align:"center",label:"\u{1F4C5}Vence",field:"fechavence"},{name:"estatus",align:"center",label:"\u{1F504}Estatus",field:"estatus"}],filterTable:i(""),empresa:i(""),direccion:i(""),rif:i(""),telefono:i(""),email:i(""),buscaritem:i(!1),detalleventa:i({}),loading:i(!1),id_usuario:i(sessionStorage.getItem("id_usuario")),co_rol:i(sessionStorage.getItem("co_rol")),pagination:{page:1,rowsPerPage:20}}},methods:{imprimir(){window.frames.print_frame.document.body.innerHTML=document.getElementById("areaImprimir").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print(),this.modaldetalleinvoice=!1},async abrirDetalleInvoive(e){this.formadepago="1",this.pendiente=e.pendiente,this.idUpd=e.cod,this.numerointerno=e.numerointerno,this.modalformasdepago=!0},async abrirRealizarPago(){console.log(),console.log(this.formadepago);let e=document.getElementById("idpagoparcial")?document.getElementById("idpagoparcial").value:0;if(this.formadepago==="1")e=this.pendiente;else if(Number(e)===0){p.create({message:"Monto del pago parcial debe ser Mayor que cero (0) y Menor al monto pendiente",type:"negative"});return}const a={idventa:this.idUpd,abono:e};console.log(a),_.post(Y+"ventas/updventa",a).then(async o=>{console.log(o.data);const s=o.data.resp;p.create({message:s,type:"positive"}),this.listar(),this.modalformasdepago=!1}).catch(o=>{p.create("Problemas al Actualizar Pago "+o)})},listar(){this.btndisable=!1;const e={idempresa:sessionStorage.getItem("co_empresa"),formadepago:2,desde:c(this.desde,"YYYY/MM/DD").format("YYYY-MM-DD"),hasta:c(this.hasta,"YYYY/MM/DD").format("YYYY-MM-DD")};_.post(Y+"ventas/getventas",e).then(async a=>{console.log(a.data);const o=a.data.resp;this.rows=[];for(const s in o){const r={};r.cod=o[s].id,r.numerointerno=o[s].numerointerno,r.numerocontrol=o[s].numerocontrol,r.fecha=c(o[s].fecha).format("DD/MM/YYYY HH:mm:ss"),r.subtotal=o[s].subtotal?o[s].subtotal.toFixed(2):"0.00",r.impuesto=o[s].impuesto?o[s].impuesto.toFixed(2):"0.00",r.total=o[s].total?o[s].total.toFixed(2):"0.00",r.totalusd=o[s].totalusd?o[s].totalusd.toFixed(2):"0.00",r.igtf=o[s].igtf?o[s].igtf.toFixed(2):"0.00",r.descuentos=o[s].descuentos,r.usuario=o[s].usuario,r.documentosolo=o[s].documento,r.documento=o[s].abrev+"-"+o[s].documento,r.cliente=o[s].nombrecliente,r.abrev=o[s].abrev,r.tipofactura=o[s].tipofactura,r.estatus=o[s].estatus,r.formadepago=o[s].formadepago,r.fechavence=c(o[s].fechavence).format("DD/MM/YYYY"),r.abono=o[s].abono,r.pendiente=(o[s].total-o[s].abono).toFixed(2),this.co_rol==="3"?o[s].idusuario===this.id_usuario&&this.rows.push(r):this.rows.push(r)}console.log(this.rows)}).catch(a=>{p.create("Problemas al listar Ventas "+a)})},async cargar(){const a=(await _.get(Y+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(o=>{p.create("Problemas al listar Configuracion "+o)})).data.resp;this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email,this.tipomoneda=a.tipomoneda,this.prefijo=a.tipomoneda==="1"?"Bs.":"$",this.prefijo2=a.tipomoneda==="1"?"$":"Bs.",this.mostrartotal=a.mostrartotal}},watch:{desde(e){this.listar()},hasta(e){this.listar()}},mounted(){this.cargar(),this.listar()}}),S={class:"col"},$=d("div",{class:"botones row fondo-gris shadow-up-9"},[d("h6",{class:"p-2"},"Cuentas por Cobrar")],-1),z={class:"listarcategorias row",style:{margin:"20px 0 10px 0"}},H={class:"col-md-2 col-sm-6 col-xs-12",style:{padding:"5px"}},E={class:"row items-center justify-end"},R={class:"col-md-2 col-sm-6 col-xs-12",style:{padding:"5px"}},L={class:"row items-center justify-end"},G={class:"col-md-3 col-sm-6 col-xs-12",style:{padding:"5px"}},O={class:"row",style:{height:"74vh",overflow:"auto"}},J={class:"col"},K={class:"row justify-center"},W={class:"text-left"},X=d("br",null,null,-1),Z={class:"text-center"},ee={class:"text-center"},oe={align:"center"},ae=d("div",{class:"text-center"},[d("h6",null,"Gestionar Pago")],-1),te={class:"text-center",style:{"font-size":"16px"}},se={class:"q-gutter-sm",style:{display:"grid"}},le={style:{display:"flex","align-items":"center"}},ne={style:{"margin-right":"5px","margin-left":"5px"}},ie=["disabled","max"];function re(e,a,o,s,r,de){return V(),x(F,{class:"row"},{default:n(()=>[d("div",S,[$,d("div",z,[d("div",H,[l(v,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.desde,"onUpdate:modelValue":a[1]||(a[1]=t=>e.desde=t),label:"Desde"},{append:n(()=>[l(y,{name:"event",class:"cursor-pointer"},{default:n(()=>[l(M,{"transition-show":"scale","transition-hide":"scale"},{default:n(()=>[l(P,{modelValue:e.desde,"onUpdate:modelValue":a[0]||(a[0]=t=>e.desde=t)},{default:n(()=>[d("div",E,[f(l(m,{label:"Close",color:"primary",flat:""},null,512),[[b]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",R,[l(v,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.hasta,"onUpdate:modelValue":a[3]||(a[3]=t=>e.hasta=t),label:"Hasta"},{append:n(()=>[l(y,{name:"event",class:"cursor-pointer"},{default:n(()=>[l(M,{"transition-show":"scale","transition-hide":"scale"},{default:n(()=>[l(P,{modelValue:e.hasta,"onUpdate:modelValue":a[2]||(a[2]=t=>e.hasta=t)},{default:n(()=>[d("div",L,[f(l(m,{label:"Close",color:"primary",flat:""},null,512),[[b]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",G,[l(v,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.filterTable,"onUpdate:modelValue":a[4]||(a[4]=t=>e.filterTable=t),placeholder:"Buscar"},{append:n(()=>[l(y,{name:"search"})]),_:1},8,["modelValue"])])]),d("div",O,[d("div",J,[d("div",K,[l(q,{rows:e.rows,title:"Ventas",columns:e.cols,"row-key":"num",pagination:e.pagination,dense:"",style:{width:"95%",margin:"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"\u26A0 Sin registros ","wrap-cells":"",separator:"cell",class:"custom-shadow custom-border-radius-table"},{"body-cell-cliente":n(t=>[l(h,{props:t},{default:n(()=>[d("div",W,[g(u(t.row.cliente)+" ",1),X,g(" "+u(t.row.documento),1)])]),_:2},1032,["props"])]),"body-cell-estatus":n(t=>[l(h,{props:t},{default:n(()=>[d("div",Z,[l(Q,{color:t.row.pendiente>0?"red-1":"green-1","text-color":t.row.pendiente>0?"red-9":"green-9",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:n(()=>[g(u(t.row.pendiente>0?"Pendiente":"Pagada"),1)]),_:2},1032,["color","text-color"])])]),_:2},1032,["props"])]),"body-cell-formadepago":n(t=>[l(h,{props:t},{default:n(()=>[d("div",ee,[l(Q,{color:t.row.formadepago==="1"?"blue-1":"orange-1","text-color":t.row.formadepago==="1"?"blue-9":"orange-9",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:n(()=>[g(u(t.row.formadepago==="1"?"Contado":"Cr\xE9dito"),1)]),_:2},1032,["color","text-color"])])]),_:2},1032,["props"])]),"body-cell-accion":n(t=>[l(h,{props:t},{default:n(()=>[d("div",oe,[t.row.pendiente>0?(V(),x(m,{key:0,round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"tune",dense:"",onClick:T(ce=>e.abrirDetalleInvoive(t.row),["stop"])},null,8,["onClick"])):j("",!0)])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),l(U,{modelValue:e.modalformasdepago,"onUpdate:modelValue":a[7]||(a[7]=t=>e.modalformasdepago=t),persistent:""},{default:n(()=>[l(k,{class:"q-pa-lg custom-shadow custom-border-radius"},{default:n(()=>[l(w,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:n(()=>[ae,f(l(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])]),_:1}),l(D),l(w,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:n(()=>[d("div",te," Documento N\xB0 "+u(e.numerointerno),1)]),_:1}),l(w,{style:{height:"150px"}},{default:n(()=>[d("div",se,[l(C,{modelValue:e.formadepago,"onUpdate:modelValue":a[5]||(a[5]=t=>e.formadepago=t),val:"1",label:"Resto: "+e.prefijo+" "+Number(e.pendiente).toFixed(2)},null,8,["modelValue","label"]),d("div",le,[l(C,{modelValue:e.formadepago,"onUpdate:modelValue":a[6]||(a[6]=t=>e.formadepago=t),val:"2",label:"Parcial."},null,8,["modelValue"]),d("span",ne,"Abono "+u(e.prefijo),1),d("input",{class:"inputCantidad",id:"idpagoparcial",value:"0",style:{"margin-right":"10px"},disabled:e.formadepago==="1",type:"number",min:"0",max:e.pendiente},null,8,ie)])])]),_:1}),l(D),l(N,{align:"center"},{default:n(()=>[f(l(m,{outline:"","no-caps":"","icon-right":"close",color:"primary",label:"Cancelar"},null,512),[[b]]),l(m,{unelevated:"","no-caps":"","icon-right":"check",color:"primary",label:"Aceptar",onClick:e.abrirRealizarPago},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ye=I(A,[["render",re]]);export{Ye as default};
