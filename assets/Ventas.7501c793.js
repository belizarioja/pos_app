import{_ as y,ah as v,r,N as f,k as c,aj as b,t as d,m as t,q as i,y as w,z as C,B as u,ar as I,ak as s,w as V,Q,x as T,as as h,l as m,al as k,aw as B,av as P,A as N,a3 as D,ax as S}from"./index.ff7428e5.js";import{Q as A}from"./QBadge.5929b60c.js";import{Q as p,a as j}from"./QTable.3b6fa270.js";import{Q as $}from"./QPage.5e147bb7.js";import{C as x}from"./ClosePopup.33959ee2.js";import{h as F}from"./moment.40bc58bf.js";import{a as _}from"./axios.7331a07d.js";import"./QList.8af68d01.js";import"./QSelect.c266bff4.js";import"./QItem.f4989903.js";import"./format.68127358.js";const g="https://posapi-test.factura-smart.com/",z=v({name:"IndexPage",setup(){return{modaldetalleinvoice:r(!1),rows:r([]),ventas:r([]),cols:[{name:"tipofactura",align:"center",label:"Tipo Documento",field:"tipofactura"},{name:"numerointerno",align:"center",label:"N\xB0 Interno",field:"numerointerno"},{name:"numerocontrol",align:"center",label:"# Control",field:"numerocontrol"},{name:"fecha",align:"center",label:"Fecha",field:"fecha"},{name:"cliente",align:"left",label:"Cliente",field:"cliente"},{name:"documento",align:"left",label:"Identificaci\xF3n",field:"documento"},{name:"usuario",align:"left",label:"Usuario",field:"usuario"},{name:"subtotal",align:"left",label:"Subtotal",field:"subtotal"},{name:"impuesto",align:"left",label:"Impuesto",field:"impuesto"},{name:"total",align:"center",label:"Total",field:"total"},{name:"estatus",align:"center",label:"Estatus",field:"estatus"},{name:"accion",align:"left",label:"Accion",field:"accion"}],filterTable:r(""),empresa:r(""),direccion:r(""),rif:r(""),telefono:r(""),email:r(""),buscaritem:r(!1),detalleventa:r({}),loading:r(!1),id_usuario:r(sessionStorage.getItem("id_usuario")),co_rol:r(sessionStorage.getItem("co_rol")),pagination:{page:1,rowsPerPage:20}}},methods:{async abrirDetalleInvoive(e){console.log(e),this.detalleventa=e,await _.get(g+"ventas/getitemsventas/"+e.cod).then(async a=>{this.ventas=a.data.resp;for(const o in this.holds){const l=this.ventas[o];this.ventas.push(l)}}).catch(a=>{f.create("Problemas al listar items Ventas "+a)}),this.modaldetalleinvoice=!0},listar(){this.btndisable=!1,_.get(g+"ventas/getventas/"+sessionStorage.getItem("co_empresa")).then(async e=>{console.log(e.data);const a=e.data.resp;this.rows=[];for(const o in a){const l={};l.cod=a[o].id,l.numerointerno=a[o].numerointerno,l.numerocontrol=a[o].numerocontrol,l.fecha=F(a[o].fecha).format("DD/MM/YYYY HH:mm:ss"),l.subtotal=a[o].subtotal,l.impuesto=a[o].impuesto,l.total=a[o].total,l.totalusd=a[o].totalusd,l.igtf=a[o].igtf,l.descuentos=a[o].descuentos,l.usuario=a[o].usuario,l.documentosolo=a[o].documento,l.documento=a[o].abrev+"-"+a[o].documento,l.cliente=a[o].nombrecliente,l.abrev=a[o].abrev,l.tipofactura=a[o].tipofactura,l.estatus=a[o].estatus,this.co_rol==="3"?a[o].idusuario===this.id_usuario&&this.rows.push(l):this.rows.push(l)}console.log(this.rows)}).catch(e=>{f.create("Problemas al listar Ventas "+e)})},async cargar(){const a=(await _.get(g+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(o=>{f.create("Problemas al listar Configuracion "+o)})).data.resp;this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email}},mounted(){console.log("Listar ventas"),this.cargar(),this.listar()}}),U={class:"col"},Y=t("div",{class:"botones row",style:{background:"#ededed"}},[t("div",{class:"text-h6"},"Reporte de Ventas")],-1),E={class:"listarcategorias row"},H={class:"listarcategoriasconitem col"},L={class:"row justify-center"},M={style:{display:"inline"}},q={class:"text-center letratotalesfactura",style:{}},R={class:"text-center letratotalesfactura",style:{}},G={class:"text-center letratotalesfactura",style:{}},O={class:"text-center letratotalesfactura",style:{}},J={key:0,class:"anulada",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%"}},K={style:{display:"flex","align-items":"left",width:"100%"}},W={class:"numero",style:{"margin-left":"10px"}},X={class:"numero",style:{"margin-left":"10px"}},Z={style:{display:"flex","align-items":"center"}},tt=t("div",{class:"control",style:{"margin-left":"10px"}}," N\xB0 de control:",-1),et={class:"control",style:{"margin-left":"10px"}},at={style:{width:"100%"}},st={class:"letratotalesfactura"},ot=t("td",{style:{width:"30%"}},"Raz\xF3n social:",-1),lt={style:{"font-weight":"bold"}},nt={class:"letratotalesfactura"},it={style:{"font-weight":"bold"}},rt={class:"letratotalesfactura"},dt=t("td",null,"Fecha:",-1),ct={style:{"font-weight":"bold"}},ut={class:"letratotalesfactura"},ft=t("td",null,"Cajero:",-1),ht={style:{"font-weight":"bold"}},mt={style:{width:"100%"}},_t=t("tr",{style:{"font-weight":"bold","font-size":"11px"}},[t("td",{class:"rayafactura rayaarriba"},"Producto"),t("td",{class:"rayafactura rayaarriba"},"Precio"),t("td",{class:"rayafactura rayaarriba"},"Cant."),t("td",{class:"rayafactura rayaarriba"},"Imp %"),t("td",{class:"rayafactura rayaarriba"},"Total")],-1),gt={style:{"text-align":"right"}},pt=t("tr",null,[t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"})],-1),yt={style:{width:"100%"}},vt={class:"letratotalesfactura"},bt=t("td",{style:{width:"40%"}},null,-1),wt=t("td",null,"Subtotal Bs.:",-1),Ct={style:{"text-align":"right"}},It={class:"letratotalesfactura"},Vt=t("td",null,null,-1),Qt=t("td",null,"Impuestos Bs.:",-1),Tt={style:{"text-align":"right"}},kt={class:"letratotalesfactura"},Bt=t("td",null,null,-1),Pt=t("td",null,"Descuentos Bs.:",-1),Nt={style:{"text-align":"right"}},Dt={class:"letratotalesfactura"},St=t("td",null,null,-1),At=t("td",{class:"rayafactura"},"IGTF 3% Bs.:",-1),jt={class:"rayafactura",style:{"text-align":"right"}},$t={class:"letratotalesfactura",style:{"font-weight":"bold"}},xt=t("td",null,null,-1),Ft=t("td",null,"Total Bs.:",-1),zt={style:{"text-align":"right"}},Ut={class:"letratotalesfactura",style:{"font-weight":"bold"}},Yt=t("td",null,null,-1),Et=t("td",null,"Total $:",-1),Ht={style:{"text-align":"right"}};function Lt(e,a,o,l,Mt,qt){return c(),b($,{class:"bg-white row"},{default:d(()=>[t("div",U,[Y,t("div",E,[t("div",H,[t("div",L,[i(j,{dense:"",rows:e.rows,title:"Ventas",columns:e.cols,"row-key":"num",pagination:e.pagination,style:{width:"95%","margin-top":"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"No hay registros!"},{"top-left":d(()=>[i(w,{dense:"",debounce:"300",color:"primary",modelValue:e.filterTable,"onUpdate:modelValue":a[0]||(a[0]=n=>e.filterTable=n),placeholder:"Buscar"},{append:d(()=>[i(C,{name:"search"})]),_:1},8,["modelValue"])]),"top-right":d(()=>[t("div",M,[i(u,{"icon-right":"filter_alt",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3",color:"secondary",label:"Filtrar",onClick:a[1]||(a[1]=n=>e.drawerFilters=!0)})])]),"body-cell-estatus":d(n=>[i(p,{props:n},{default:d(()=>[t("div",null,[i(A,{color:n.row.estatus==="1"?"info":"negative"},{default:d(()=>[I(s(n.row.estatus==="1"?"Procesada":"Anulada"),1)]),_:2},1032,["color"])])]),_:2},1032,["props"])]),"body-cell-accion":d(n=>[i(p,{props:n},{default:d(()=>[t("div",null,[i(u,{color:"primary",icon:"plagiarism",onClick:V(Rt=>e.abrirDetalleInvoive(n.row),["stop"]),dense:""},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),i(S,{modelValue:e.modaldetalleinvoice,"onUpdate:modelValue":a[2]||(a[2]=n=>e.modaldetalleinvoice=n),persistent:""},{default:d(()=>[i(Q,{style:{width:"320px"}},{default:d(()=>[i(T,{style:{"justify-content":"center"}},{default:d(()=>[t("div",q,s(e.empresa)+" - "+s(e.rif),1),t("div",R,s(e.direccion),1),t("div",G,s(e.telefono),1),t("div",O,s(e.email),1),i(h,{style:{margin:"10px 0px"}}),e.detalleventa.estatus==="2"?(c(),m("div",J,"ANULADA")):k("",!0),t("div",K,[t("div",W,s(e.detalleventa.tipofactura),1),t("div",X,s(e.detalleventa.numerointerno),1)]),t("div",Z,[tt,t("div",et,s(e.detalleventa.numerocontrol),1)]),i(h,{style:{margin:"10px 0px"}}),t("table",at,[t("tr",st,[ot,t("td",lt,s(e.detalleventa.cliente),1)]),t("tr",nt,[t("td",null,s(e.detalleventa.abrev),1),t("td",it,s(e.detalleventa.documentosolo),1)]),t("tr",rt,[dt,t("td",ct,s(e.detalleventa.fecha),1)]),t("tr",ut,[ft,t("td",ht,s(e.detalleventa.usuario),1)])]),t("table",mt,[_t,(c(!0),m(P,null,B(e.ventas,n=>(c(),m("tr",{key:n,style:{"font-size":"11px"}},[t("td",null,s(n.producto),1),t("td",null,s(n.precio),1),t("td",null,s(n.cantidad),1),t("td",null,s(n.tasa)+"%",1),t("td",gt,s(n.subtotal),1)]))),128)),pt]),t("table",yt,[t("tr",vt,[bt,wt,t("td",Ct,s(e.detalleventa.subtotal),1)]),t("tr",It,[Vt,Qt,t("td",Tt,s(e.detalleventa.impuesto),1)]),t("tr",kt,[Bt,Pt,t("td",Nt,s(e.detalleventa.descuentos),1)]),t("tr",Dt,[St,At,t("td",jt,s(e.detalleventa.igtf),1)]),t("tr",$t,[xt,Ft,t("td",zt,s(e.detalleventa.total),1)]),t("tr",Ut,[Yt,Et,t("td",Ht,s(e.detalleventa.totalusd),1)])])]),_:1}),i(h),i(N,{align:"right"},{default:d(()=>[D(i(u,{label:"Cerrar",color:"negative"},null,512),[[x]]),i(u,{label:"Imprimir",color:"secondary"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var oe=y(z,[["render",Lt]]);export{oe as default};
