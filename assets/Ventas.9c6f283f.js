import{_ as x,a9 as C,r,N as g,k as c,l as I,w as d,q as t,m as n,z as k,y as T,B as _,F as V,ab as o,t as Q,Q as F,x as B,C as f,aw as u,ac as p,ay as v,ax as m,A as N,a6 as P,az as D}from"./index.9e625e67.js";import{Q as S}from"./QBadge.16b825e6.js";import{Q as w,a as A}from"./QTable.9b33135b.js";import{Q as $}from"./QPage.e772441d.js";import{C as j}from"./ClosePopup.ba906a93.js";import{h as z}from"./moment.40bc58bf.js";import{a as y}from"./axios.7331a07d.js";import"./format.01eed05d.js";import"./QSelect.4f495585.js";import"./QItem.776ace9e.js";const b="https://posapi-test.factura-smart.com/",q=C({name:"IndexPage",setup(){return{modaldetalleinvoice:r(!1),rows:r([]),ventas:r([]),cols:[{name:"accion",align:"left",label:"\u{1F527} Accion",field:"accion"},{name:"tipofactura",align:"center",label:"\u{1F4C3} Tipo Documento",field:"tipofactura"},{name:"numerointerno",align:"center",label:"\u{1F522} N\xB0 Interno",field:"numerointerno"},{name:"numerocontrol",align:"center",label:"\u{1F50D} # Control",field:"numerocontrol"},{name:"fecha",align:"center",label:"\u{1F4C5} Fecha",field:"fecha"},{name:"cliente",align:"left",label:"\u{1F468}\u200D\u{1F4BC} Cliente",field:"cliente"},{name:"documento",align:"left",label:"\u{1F194} Identificaci\xF3n",field:"documento"},{name:"usuario",align:"left",label:"\u{1F464} Usuario",field:"usuario"},{name:"subtotal",align:"left",label:"\u{1F4B2} Subtotal",field:"subtotal"},{name:"impuesto",align:"left",label:"\u{1F3DB} Impuesto",field:"impuesto"},{name:"total",align:"center",label:"\u{1F4B5} Total",field:"total"},{name:"estatus",align:"center",label:"\u{1F504} Estatus",field:"estatus"}],filterTable:r(""),empresa:r(""),direccion:r(""),rif:r(""),telefono:r(""),email:r(""),buscaritem:r(!1),detalleventa:r({}),loading:r(!1),id_usuario:r(sessionStorage.getItem("id_usuario")),co_rol:r(sessionStorage.getItem("co_rol")),pagination:{page:1,rowsPerPage:20}}},methods:{imprimir(){window.frames.print_frame.document.body.innerHTML=document.getElementById("areaImprimir").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print(),this.modaldetalleinvoice=!1},async abrirDetalleInvoive(e){console.log(e),this.detalleventa=e,await y.get(b+"ventas/getitemsventas/"+e.cod).then(async a=>{this.ventas=a.data.resp;for(const s in this.holds){const l=this.ventas[s];this.ventas.push(l)}}).catch(a=>{g.create("Problemas al listar items Ventas "+a)}),this.modaldetalleinvoice=!0},listar(){this.btndisable=!1,y.get(b+"ventas/getventas/"+sessionStorage.getItem("co_empresa")).then(async e=>{console.log(e.data);const a=e.data.resp;this.rows=[];for(const s in a){const l={};l.cod=a[s].id,l.numerointerno=a[s].numerointerno,l.numerocontrol=a[s].numerocontrol,l.fecha=z(a[s].fecha).format("DD/MM/YYYY HH:mm:ss"),l.subtotal=a[s].subtotal?a[s].subtotal.toFixed(2):"0.00",l.impuesto=a[s].impuesto?a[s].impuesto.toFixed(2):"0.00",l.total=a[s].total?a[s].total.toFixed(2):"0.00",l.totalusd=a[s].totalusd?a[s].totalusd.toFixed(2):"0.00",l.igtf=a[s].igtf?a[s].igtf.toFixed(2):"0.00",l.descuentos=a[s].descuentos,l.usuario=a[s].usuario,l.documentosolo=a[s].documento,l.documento=a[s].abrev+"-"+a[s].documento,l.cliente=a[s].nombrecliente,l.abrev=a[s].abrev,l.tipofactura=a[s].tipofactura,l.estatus=a[s].estatus,this.co_rol==="3"?a[s].idusuario===this.id_usuario&&this.rows.push(l):this.rows.push(l)}console.log(this.rows)}).catch(e=>{g.create("Problemas al listar Ventas "+e)})},async cargar(){const a=(await y.get(b+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(s=>{g.create("Problemas al listar Configuracion "+s)})).data.resp;this.empresa=a.empresa,this.rif=a.rif,this.direccion=a.direccion,this.telefono=a.telefono,this.email=a.email}},mounted(){console.log("Listar ventas"),this.cargar(),this.listar()}}),H={class:"col"},L=t("div",{class:"botones row fondo-gris shadow-up-9"},[t("h6",{class:"p-2"},"Reporte de Ventas")],-1),M={class:"listarcategorias row",style:{margin:"20px 0 10px 0"}},E={class:"row",style:{height:"74vh",overflow:"auto"}},U={class:"col"},Y={class:"row justify-center"},R={style:{display:"inline"}},G={class:"text-center"},O={align:"center"},J={id:"areaImprimir",style:{width:"100%"}},K={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},W={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},X={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},Z={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},tt={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},et={key:0,class:"anulada",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%"}},at={style:{display:"flex","align-items":"left",width:"100%"}},st={class:"numero",style:{"margin-left":"10px"}},ot={class:"numero",style:{"margin-left":"10px"}},lt={style:{display:"flex","align-items":"center"}},it=t("div",{class:"control",style:{"margin-left":"10px"}}," N\xB0 de control:",-1),nt={class:"control",style:{"margin-left":"10px"}},rt={style:{width:"100%"}},dt={class:"letratotalesfactura",style:{"line-height":"10px"}},ct=t("td",{style:{width:"30%"}},"Raz\xF3n social:",-1),ut={style:{"font-weight":"bold"}},ht={class:"letratotalesfactura",style:{"line-height":"10px"}},_t={style:{"font-weight":"bold"}},ft={class:"letratotalesfactura",style:{"line-height":"10px"}},mt=t("td",null,"Fecha:",-1),gt={style:{"font-weight":"bold"}},pt={class:"letratotalesfactura",style:{"line-height":"10px"}},yt=t("td",null,"Cajero:",-1),bt={style:{"font-weight":"bold"}},vt={style:{width:"100%"}},wt=t("tr",{style:{"font-weight":"bold","font-size":"11px"}},[t("td",{class:"rayafactura rayaarriba",style:{width:"130px"}},"Producto"),t("td",{class:"rayafactura rayaarriba",style:{"text-align":"right"}},"Precio"),t("td",{class:"rayafactura rayaarriba"},"Cant."),t("td",{class:"rayafactura rayaarriba"},"Imp %"),t("td",{class:"rayafactura rayaarriba",style:{"text-align":"right"}},"Total")],-1),xt={style:{"font-size":"11px"}},Ct={style:{"text-align":"right"}},It={style:{"text-align":"center"}},kt={style:{"text-align":"center"}},Tt={style:{"text-align":"right"}},Vt={key:0,style:{"line-height":"10px"}},Qt={style:{"font-style":"italic","font-size":"9px"}},Ft={key:0},Bt=t("td",null,null,-1),Nt=t("td",null,null,-1),Pt=t("td",null,null,-1),Dt=t("td",null,null,-1),St=t("tr",null,[t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"})],-1),At={style:{width:"100%"}},$t={class:"letratotalesfactura",style:{"line-height":"10px"}},jt=t("td",{style:{width:"40%"}},null,-1),zt=t("td",null,"Subtotal Bs.:",-1),qt={style:{"text-align":"right"}},Ht={class:"letratotalesfactura",style:{"line-height":"10px"}},Lt=t("td",null,null,-1),Mt=t("td",null,"Impuestos Bs.:",-1),Et={style:{"text-align":"right"}},Ut={class:"letratotalesfactura",style:{"line-height":"10px"}},Yt=t("td",null,null,-1),Rt=t("td",null,"Descuentos Bs.:",-1),Gt={style:{"text-align":"right"}},Ot={class:"letratotalesfactura",style:{"line-height":"10px"}},Jt=t("td",null,null,-1),Kt=t("td",{class:"rayafactura"},"IGTF 3% Bs.:",-1),Wt={class:"rayafactura",style:{"text-align":"right"}},Xt={class:"letratotalesfactura",style:{"font-weight":"bold"}},Zt=t("td",null,null,-1),te=t("td",null,"Total Bs.:",-1),ee={style:{"text-align":"right"}},ae={class:"letratotalesfactura",style:{"font-weight":"bold"}},se=t("td",null,null,-1),oe=t("td",null,"Total $:",-1),le={style:{"text-align":"right"}},ie=t("iframe",{name:"print_frame",width:"0",height:"0",frameborder:"0",src:"about:blank"},null,-1);function ne(e,a,s,l,re,de){return c(),I($,{class:"row"},{default:d(()=>[t("div",H,[L,t("div",M,[n(T,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.filterTable,"onUpdate:modelValue":a[0]||(a[0]=i=>e.filterTable=i),placeholder:"Buscar",style:{width:"320px"}},{append:d(()=>[n(k,{name:"search"})]),_:1},8,["modelValue"])]),t("div",E,[t("div",U,[t("div",Y,[n(A,{rows:e.rows,title:"Ventas",columns:e.cols,"row-key":"num",pagination:e.pagination,dense:"",style:{width:"95%",margin:"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"\u26A0 Sin registros ","wrap-cells":"",separator:"cell",class:"custom-shadow custom-border-radius-table"},{"top-right":d(()=>[t("div",R,[n(_,{"icon-right":"filter_list",class:"q-ml-sm col-md-4 col-sm-3 col-xs-3",unelevated:"",rounded:"",color:"orange-1","text-color":"orange-10",label:"Filtrar",onClick:a[1]||(a[1]=i=>e.drawerFilters=!0)})])]),"body-cell-estatus":d(i=>[n(w,{props:i},{default:d(()=>[t("div",G,[n(S,{color:i.row.estatus==="1"?"green-1":"red-1","text-color":i.row.estatus==="1"?"green-9":"red-9",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:d(()=>[V(o(i.row.estatus==="1"?"Procesada":"Anulada"),1)]),_:2},1032,["color","text-color"])])]),_:2},1032,["props"])]),"body-cell-accion":d(i=>[n(w,{props:i},{default:d(()=>[t("div",O,[n(_,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"plagiarism",dense:"",onClick:Q(h=>e.abrirDetalleInvoive(i.row),["stop"])},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),n(D,{modelValue:e.modaldetalleinvoice,"onUpdate:modelValue":a[2]||(a[2]=i=>e.modaldetalleinvoice=i),persistent:""},{default:d(()=>[n(F,{style:{width:"320px"}},{default:d(()=>[t("div",J,[n(B,{style:{"justify-content":"center"}},{default:d(()=>[t("div",K,o(e.empresa),1),t("div",W,o(e.rif),1),t("div",X,o(e.direccion),1),t("div",Z,o(e.telefono),1),t("div",tt,o(e.email),1),n(f,{style:{margin:"10px 0px"}}),e.detalleventa.estatus==="2"?(c(),u("div",et,"ANULADA")):p("",!0),t("div",at,[t("div",st,o(e.detalleventa.tipofactura),1),t("div",ot,o(e.detalleventa.numerointerno),1)]),t("div",lt,[it,t("div",nt,o(e.detalleventa.numerocontrol),1)]),n(f,{style:{margin:"10px 0px"}}),t("table",rt,[t("tr",dt,[ct,t("td",ut,o(e.detalleventa.cliente),1)]),t("tr",ht,[t("td",null,o(e.detalleventa.abrev),1),t("td",_t,o(e.detalleventa.documentosolo),1)]),t("tr",ft,[mt,t("td",gt,o(e.detalleventa.fecha),1)]),t("tr",pt,[yt,t("td",bt,o(e.detalleventa.usuario),1)])]),t("table",vt,[wt,(c(!0),u(m,null,v(e.ventas,i=>(c(),u(m,{key:i},[t("tr",xt,[t("td",null,o(i.producto),1),t("td",Ct,o(Number(i.precio).toFixed(2)),1),t("td",It,o(i.cantidad),1),t("td",kt,o(i.tasa)+"%",1),t("td",Tt,o(Number(i.subtotal).toFixed(2)),1)]),i.comentario&&i.comentario.length>0?(c(),u("tr",Vt,[t("td",Qt,[(c(!0),u(m,null,v(i.comentario.split("//"),h=>(c(),u(m,{key:h},[h.length>0?(c(),u("p",Ft,"- "+o(h),1)):p("",!0)],64))),128))]),Bt,Nt,Pt,Dt])):p("",!0)],64))),128)),St]),t("table",At,[t("tr",$t,[jt,zt,t("td",qt,o(e.detalleventa.subtotal),1)]),t("tr",Ht,[Lt,Mt,t("td",Et,o(e.detalleventa.impuesto),1)]),t("tr",Ut,[Yt,Rt,t("td",Gt,o(e.detalleventa.descuentos.toFixed(2)),1)]),t("tr",Ot,[Jt,Kt,t("td",Wt,o(e.detalleventa.igtf),1)]),t("tr",Xt,[Zt,te,t("td",ee,o(e.detalleventa.total),1)]),t("tr",ae,[se,oe,t("td",le,o(e.detalleventa.totalusd),1)])])]),_:1}),n(f)]),ie,n(f),n(N,{align:"center"},{default:d(()=>[P(n(_,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[j]]),n(_,{unelevated:"","no-caps":"",label:"Imprimir",color:"primary","icon-right":"print",onClick:e.imprimir},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ve=x(q,[["render",ne]]);export{ve as default};