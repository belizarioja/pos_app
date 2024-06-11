import{_ as y,ah as v,r,N as f,k as c,aj as b,t as d,m as t,q as n,y as w,z as I,B as u,ar as C,ak as s,w as T,Q as V,x as k,as as m,l as h,al as Q,au as B,at as P,A as N,a3 as D,av as S}from"./index.e3a55ec6.js";import{Q as A}from"./QBadge.e60c1cd5.js";import{Q as g,a as j}from"./QTable.0dc22071.js";import{Q as $}from"./QPage.d68c3533.js";import{C as F}from"./ClosePopup.98cc657b.js";import{h as x}from"./moment.40bc58bf.js";import{a as _}from"./axios.7331a07d.js";import"./QList.1b309987.js";import"./QSelect.809ee005.js";import"./QItem.76938c0a.js";import"./format.9982cb3e.js";const p="https://posapi-test.factura-smart.com/",H=v({name:"IndexPage",setup(){return{modaldetalleinvoice:r(!1),rows:r([]),ventas:r([]),cols:[{name:"tipofactura",align:"center",label:"Tipo Documento",field:"tipofactura"},{name:"numerointerno",align:"center",label:"N\xB0 Interno",field:"numerointerno"},{name:"numerocontrol",align:"center",label:"# Control",field:"numerocontrol"},{name:"fecha",align:"center",label:"Fecha",field:"fecha"},{name:"cliente",align:"left",label:"Cliente",field:"cliente"},{name:"documento",align:"left",label:"Identificaci\xF3n",field:"documento"},{name:"usuario",align:"left",label:"Usuario",field:"usuario"},{name:"subtotal",align:"left",label:"Subtotal",field:"subtotal"},{name:"impuesto",align:"left",label:"Impuesto",field:"impuesto"},{name:"total",align:"center",label:"Total",field:"total"},{name:"estatus",align:"center",label:"Estatus",field:"estatus"},{name:"accion",align:"left",label:"Accion",field:"accion"}],filterTable:r(""),empresa:r(""),direccion:r(""),rif:r(""),telefono:r(""),email:r(""),buscaritem:r(!1),detalleventa:r({}),loading:r(!1),id_usuario:r(sessionStorage.getItem("id_usuario")),co_rol:r(sessionStorage.getItem("co_rol")),pagination:{page:1,rowsPerPage:20}}},methods:{imprimir(){window.frames.print_frame.document.body.innerHTML=document.getElementById("areaImprimir").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print(),this.modaldetalleinvoice=!1},async abrirDetalleInvoive(e){console.log(e),this.detalleventa=e,await _.get(p+"ventas/getitemsventas/"+e.cod).then(async a=>{this.ventas=a.data.resp;for(const o in this.holds){const l=this.ventas[o];this.ventas.push(l)}}).catch(a=>{f.create("Problemas al listar items Ventas "+a)}),this.modaldetalleinvoice=!0},listar(){this.btndisable=!1,_.get(p+"ventas/getventas/"+sessionStorage.getItem("co_empresa")).then(async e=>{console.log(e.data);const a=e.data.resp;this.rows=[];for(const o in a){const l={};l.cod=a[o].id,l.numerointerno=a[o].numerointerno,l.numerocontrol=a[o].numerocontrol,l.fecha=x(a[o].fecha).format("DD/MM/YYYY HH:mm:ss"),l.subtotal=a[o].subtotal,l.impuesto=a[o].impuesto,l.total=a[o].total,l.totalusd=a[o].totalusd,l.igtf=a[o].igtf,l.descuentos=a[o].descuentos,l.usuario=a[o].usuario,l.documentosolo=a[o].documento,l.documento=a[o].abrev+"-"+a[o].documento,l.cliente=a[o].nombrecliente,l.abrev=a[o].abrev,l.tipofactura=a[o].tipofactura,l.estatus=a[o].estatus,this.co_rol==="3"?a[o].idusuario===this.id_usuario&&this.rows.push(l):this.rows.push(l)}console.log(this.rows)}).catch(e=>{f.create("Problemas al listar Ventas "+e)})},async cargar(){const a=(await _.get(p+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(o=>{f.create("Problemas al listar Configuracion "+o)})).data.resp;this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email}},mounted(){console.log("Listar ventas"),this.cargar(),this.listar()}}),L={class:"col"},M=t("div",{class:"botones row",style:{background:"#ededed"}},[t("div",{class:"text-h6"},"Reporte de Ventas")],-1),z={class:"listarcategorias row"},E={class:"listarcategoriasconitem col"},U={class:"row justify-center"},Y={style:{display:"inline"}},q={id:"areaImprimir",style:{width:"100%"}},R={class:"text-center letratotalesfactura",style:{}},G={class:"text-center letratotalesfactura",style:{}},O={class:"text-center letratotalesfactura",style:{}},J={class:"text-center letratotalesfactura",style:{}},K={key:0,class:"anulada",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%"}},W={style:{display:"flex","align-items":"left",width:"100%"}},X={class:"numero",style:{"margin-left":"10px"}},Z={class:"numero",style:{"margin-left":"10px"}},tt={style:{display:"flex","align-items":"center"}},et=t("div",{class:"control",style:{"margin-left":"10px"}}," N\xB0 de control:",-1),at={class:"control",style:{"margin-left":"10px"}},st={style:{width:"100%"}},ot={class:"letratotalesfactura"},lt=t("td",{style:{width:"30%"}},"Raz\xF3n social:",-1),it={style:{"font-weight":"bold"}},nt={class:"letratotalesfactura"},rt={style:{"font-weight":"bold"}},dt={class:"letratotalesfactura"},ct=t("td",null,"Fecha:",-1),ut={style:{"font-weight":"bold"}},ft={class:"letratotalesfactura"},mt=t("td",null,"Cajero:",-1),ht={style:{"font-weight":"bold"}},_t={style:{width:"100%"}},pt=t("tr",{style:{"font-weight":"bold","font-size":"11px"}},[t("td",{class:"rayafactura rayaarriba"},"Producto"),t("td",{class:"rayafactura rayaarriba"},"Precio"),t("td",{class:"rayafactura rayaarriba"},"Cant."),t("td",{class:"rayafactura rayaarriba"},"Imp %"),t("td",{class:"rayafactura rayaarriba"},"Total")],-1),gt={style:{width:"140px","font-style":"italic"}},yt={style:{"text-align":"right"}},vt=t("tr",null,[t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"})],-1),bt={style:{width:"100%"}},wt={class:"letratotalesfactura"},It=t("td",{style:{width:"40%"}},null,-1),Ct=t("td",null,"Subtotal Bs.:",-1),Tt={style:{"text-align":"right"}},Vt={class:"letratotalesfactura"},kt=t("td",null,null,-1),Qt=t("td",null,"Impuestos Bs.:",-1),Bt={style:{"text-align":"right"}},Pt={class:"letratotalesfactura"},Nt=t("td",null,null,-1),Dt=t("td",null,"Descuentos Bs.:",-1),St={style:{"text-align":"right"}},At={class:"letratotalesfactura"},jt=t("td",null,null,-1),$t=t("td",{class:"rayafactura"},"IGTF 3% Bs.:",-1),Ft={class:"rayafactura",style:{"text-align":"right"}},xt={class:"letratotalesfactura",style:{"font-weight":"bold"}},Ht=t("td",null,null,-1),Lt=t("td",null,"Total Bs.:",-1),Mt={style:{"text-align":"right"}},zt={class:"letratotalesfactura",style:{"font-weight":"bold"}},Et=t("td",null,null,-1),Ut=t("td",null,"Total $:",-1),Yt={style:{"text-align":"right"}},qt=t("iframe",{name:"print_frame",width:"0",height:"0",frameborder:"0",src:"about:blank"},null,-1);function Rt(e,a,o,l,Gt,Ot){return c(),b($,{class:"bg-white row"},{default:d(()=>[t("div",L,[M,t("div",z,[t("div",E,[t("div",U,[n(j,{dense:"",rows:e.rows,title:"Ventas",columns:e.cols,"row-key":"num",pagination:e.pagination,style:{width:"95%","margin-top":"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"No hay registros!"},{"top-left":d(()=>[n(w,{dense:"",debounce:"300",color:"primary",modelValue:e.filterTable,"onUpdate:modelValue":a[0]||(a[0]=i=>e.filterTable=i),placeholder:"Buscar"},{append:d(()=>[n(I,{name:"search"})]),_:1},8,["modelValue"])]),"top-right":d(()=>[t("div",Y,[n(u,{"icon-right":"filter_alt",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3",color:"secondary",label:"Filtrar",onClick:a[1]||(a[1]=i=>e.drawerFilters=!0)})])]),"body-cell-estatus":d(i=>[n(g,{props:i},{default:d(()=>[t("div",null,[n(A,{color:i.row.estatus==="1"?"info":"negative"},{default:d(()=>[C(s(i.row.estatus==="1"?"Procesada":"Anulada"),1)]),_:2},1032,["color"])])]),_:2},1032,["props"])]),"body-cell-accion":d(i=>[n(g,{props:i},{default:d(()=>[t("div",null,[n(u,{color:"primary",icon:"plagiarism",onClick:T(Jt=>e.abrirDetalleInvoive(i.row),["stop"]),dense:""},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),n(S,{modelValue:e.modaldetalleinvoice,"onUpdate:modelValue":a[2]||(a[2]=i=>e.modaldetalleinvoice=i),persistent:""},{default:d(()=>[n(V,{style:{width:"320px"}},{default:d(()=>[t("div",q,[n(k,{style:{"justify-content":"center"}},{default:d(()=>[t("div",R,s(e.empresa)+" - "+s(e.rif),1),t("div",G,s(e.direccion),1),t("div",O,s(e.telefono),1),t("div",J,s(e.email),1),n(m,{style:{margin:"10px 0px"}}),e.detalleventa.estatus==="2"?(c(),h("div",K,"ANULADA")):Q("",!0),t("div",W,[t("div",X,s(e.detalleventa.tipofactura),1),t("div",Z,s(e.detalleventa.numerointerno),1)]),t("div",tt,[et,t("div",at,s(e.detalleventa.numerocontrol),1)]),n(m,{style:{margin:"10px 0px"}}),t("table",st,[t("tr",ot,[lt,t("td",it,s(e.detalleventa.cliente),1)]),t("tr",nt,[t("td",null,s(e.detalleventa.abrev),1),t("td",rt,s(e.detalleventa.documentosolo),1)]),t("tr",dt,[ct,t("td",ut,s(e.detalleventa.fecha),1)]),t("tr",ft,[mt,t("td",ht,s(e.detalleventa.usuario),1)])]),t("table",_t,[pt,(c(!0),h(P,null,B(e.ventas,i=>(c(),h("tr",{key:i,style:{"font-size":"11px"}},[t("td",gt,s(i.producto),1),t("td",null,s(i.precio),1),t("td",null,s(i.cantidad),1),t("td",null,s(i.tasa)+"%",1),t("td",yt,s(i.subtotal),1)]))),128)),vt]),t("table",bt,[t("tr",wt,[It,Ct,t("td",Tt,s(e.detalleventa.subtotal),1)]),t("tr",Vt,[kt,Qt,t("td",Bt,s(e.detalleventa.impuesto),1)]),t("tr",Pt,[Nt,Dt,t("td",St,s(e.detalleventa.descuentos),1)]),t("tr",At,[jt,$t,t("td",Ft,s(e.detalleventa.igtf),1)]),t("tr",xt,[Ht,Lt,t("td",Mt,s(e.detalleventa.total),1)]),t("tr",zt,[Et,Ut,t("td",Yt,s(e.detalleventa.totalusd),1)])])]),_:1}),n(m)]),qt,n(N,{align:"right"},{default:d(()=>[D(n(u,{label:"Cerrar",color:"negative"},null,512),[[F]]),n(u,{label:"Imprimir",color:"secondary",onClick:e.imprimir},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ne=y(H,[["render",Rt]]);export{ne as default};
