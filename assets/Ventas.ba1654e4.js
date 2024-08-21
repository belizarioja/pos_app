import{_ as T,al as P,r as c,N as w,k as u,l as F,w as r,q as t,m as i,z as x,ab as Y,B as f,y as V,F as g,an as o,t as N,Q as B,x as S,C as y,aw as h,ao as p,ay as M,ax as b,A,az as U}from"./index.6f4f3d8f.js";import{Q,a as j}from"./QPopupProxy.e70268d9.js";import{Q as v,a as $}from"./QTable.dd6d378d.js";import{Q as k}from"./QBadge.9935eb4e.js";import{Q as q}from"./QPage.51add07b.js";import{C as D}from"./ClosePopup.51075fd9.js";import{h as m}from"./moment.40bc58bf.js";import{a as C}from"./axios.7331a07d.js";import"./format.d1e1b5d1.js";import"./QSelect.4b222a03.js";import"./QItem.2ddb4f55.js";const I="https://posapi-test.factura-smart.com/",z=P({name:"IndexPage",setup(){const e=c(m().format("YYYY-MM-DD")),l=c(m().format("YYYY/MM/DD")),s=c(m().format("YYYY/MM/DD"));return{today:e,desde:l,hasta:s,modaldetalleinvoice:c(!1),prefijo:c("Bs."),prefijo2:c("$"),mostrartotal:c("1"),tipomoneda:c("1"),rows:c([]),ventas:c([]),cols:[{name:"accion",align:"left",label:"\u{1F527}Accion",field:"accion"},{name:"tipofactura",align:"center",label:"\u{1F4C3}Tipo",field:"tipofactura"},{name:"numerointerno",align:"center",label:"\u{1F522}N\xB0 Interno",field:"numerointerno"},{name:"numerocontrol",align:"center",label:"\u{1F50D}# Control",field:"numerocontrol"},{name:"fecha",align:"center",label:"\u{1F4C5}Fecha",field:"fecha"},{name:"cliente",align:"left",label:"\u{1F468}\u200D\u{1F4BC}Cliente",field:"cliente"},{name:"usuario",align:"left",label:"\u{1F464}Usuario",field:"usuario"},{name:"subtotal",align:"left",label:"\u{1F4B2}Subtotal",field:"subtotal"},{name:"impuesto",align:"left",label:"\u{1F3DB}Impuesto",field:"impuesto"},{name:"total",align:"center",label:"\u{1F4B5}Total",field:"total"},{name:"formadepago",align:"center",label:"\u{1F3DB}\uFE0FPago",field:"formadepago"},{name:"estatus",align:"center",label:"\u{1F504}Estatus",field:"estatus"}],filterTable:c(""),empresa:c(""),direccion:c(""),rif:c(""),telefono:c(""),email:c(""),buscaritem:c(!1),detalleventa:c({}),loading:c(!1),id_usuario:c(sessionStorage.getItem("id_usuario")),co_rol:c(sessionStorage.getItem("co_rol")),pagination:{page:1,rowsPerPage:20}}},methods:{imprimir(){window.frames.print_frame.document.body.innerHTML=document.getElementById("areaImprimir").innerHTML,window.frames.print_frame.window.focus(),window.frames.print_frame.window.print(),this.modaldetalleinvoice=!1},async abrirDetalleInvoive(e){console.log(e),this.detalleventa=e,await C.get(I+"ventas/getitemsventas/"+e.cod).then(async l=>{this.ventas=l.data.resp;for(const s in this.holds){const n=this.ventas[s];this.ventas.push(n)}}).catch(l=>{w.create("Problemas al listar items Ventas "+l)}),this.modaldetalleinvoice=!0},listar(){this.btndisable=!1;const e={idempresa:sessionStorage.getItem("co_empresa"),desde:m(this.desde,"YYYY/MM/DD").format("YYYY-MM-DD"),hasta:m(this.hasta,"YYYY/MM/DD").format("YYYY-MM-DD")};C.post(I+"ventas/getventas",e).then(async l=>{console.log(l.data);const s=l.data.resp;this.rows=[];for(const n in s){const d={};d.cod=s[n].id,d.numerointerno=s[n].numerointerno,d.numerocontrol=s[n].numerocontrol,d.fecha=m(s[n].fecha).format("DD/MM/YYYY HH:mm:ss"),d.subtotal=s[n].subtotal?s[n].subtotal.toFixed(2):"0.00",d.impuesto=s[n].impuesto?s[n].impuesto.toFixed(2):"0.00",d.total=s[n].total?s[n].total.toFixed(2):"0.00",d.totalusd=s[n].totalusd?s[n].totalusd.toFixed(2):"0.00",d.igtf=s[n].igtf?s[n].igtf.toFixed(2):"0.00",d.descuentos=s[n].descuentos,d.usuario=s[n].usuario,d.documentosolo=s[n].documento,d.documento=s[n].abrev+"-"+s[n].documento,d.cliente=s[n].nombrecliente,d.abrev=s[n].abrev,d.tipofactura=s[n].tipofactura,d.estatus=s[n].estatus,d.formadepago=s[n].formadepago,d.relacionado=s[n].relacionado,this.co_rol==="3"?s[n].idusuario===this.id_usuario&&this.rows.push(d):this.rows.push(d)}console.log(this.rows)}).catch(l=>{w.create("Problemas al listar Ventas "+l)})},async cargar(){const l=(await C.get(I+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(s=>{w.create("Problemas al listar Configuracion "+s)})).data.resp;this.empresa=l.empresa,this.rif=l.rif,this.direccion=l.direccion,this.telefono=l.telefono,this.email=l.email,this.tipomoneda=l.tipomoneda,this.prefijo=l.tipomoneda==="1"?"Bs.":"$",this.prefijo2=l.tipomoneda==="1"?"$":"Bs.",this.mostrartotal=l.mostrartotal}},watch:{desde(e){this.listar()},hasta(e){this.listar()}},mounted(){this.cargar(),this.listar()}}),H={class:"col"},E=t("div",{class:"botones row fondo-gris shadow-up-9"},[t("h6",{class:"p-2"},"Reporte de Ventas")],-1),L={class:"listarcategorias row",style:{margin:"20px 0 10px 0"}},R={class:"col-md-2 col-sm-6 col-xs-12",style:{padding:"5px"}},G={class:"row items-center justify-end"},O={class:"col-md-2 col-sm-6 col-xs-12",style:{padding:"5px"}},J={class:"row items-center justify-end"},K={class:"col-md-3 col-sm-6 col-xs-12",style:{padding:"5px"}},W={class:"row",style:{height:"74vh",overflow:"auto"}},X={class:"col"},Z={class:"row justify-center"},tt={class:"text-left"},et=t("br",null,null,-1),at={class:"text-center"},ot={class:"text-center"},st={align:"center"},lt={id:"areaImprimir",style:{width:"100%"}},it={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},nt={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},rt={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},dt={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},ct={class:"text-center letratotalesfactura",style:{"line-height":"10px"}},ut={key:0,class:"anuladaV",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%"}},ht={style:{display:"flex","align-items":"left",width:"100%"}},mt={class:"numero",style:{"margin-left":"10px"}},ft={class:"numero",style:{"margin-left":"10px"}},pt={style:{display:"flex","align-items":"center"}},_t=t("div",{class:"control",style:{"margin-left":"10px"}}," N\xB0 de control:",-1),gt={class:"control",style:{"margin-left":"10px"}},yt={key:1,style:{display:"flex","align-items":"center"}},bt=t("div",{class:"control",style:{"margin-left":"10px"}}," Afecta a Documento:",-1),vt={class:"control",style:{"margin-left":"10px"}},wt={style:{width:"100%"}},xt={class:"letratotalesfactura",style:{"line-height":"10px"}},Yt=t("td",{style:{width:"30%"}},"Raz\xF3n social:",-1),Vt={style:{"font-weight":"bold"}},Dt={class:"letratotalesfactura",style:{"line-height":"10px"}},Ct={style:{"font-weight":"bold"}},It={class:"letratotalesfactura",style:{"line-height":"10px"}},Mt=t("td",null,"Fecha:",-1),Qt={style:{"font-weight":"bold"}},jt={class:"letratotalesfactura",style:{"line-height":"10px"}},kt=t("td",null,"Cajero:",-1),Tt={style:{"font-weight":"bold"}},Pt={style:{width:"100%"}},Ft=t("tr",{style:{"font-weight":"bold","font-size":"11px"}},[t("td",{class:"rayafactura rayaarriba",style:{width:"130px"}},"Producto"),t("td",{class:"rayafactura rayaarriba",style:{"text-align":"right"}},"Precio"),t("td",{class:"rayafactura rayaarriba"},"Cant."),t("td",{class:"rayafactura rayaarriba"},"Imp %"),t("td",{class:"rayafactura rayaarriba",style:{"text-align":"right"}},"Total")],-1),Nt={style:{"font-size":"11px"}},Bt={style:{"text-align":"right"}},St={style:{"text-align":"center"}},At={style:{"text-align":"center"}},Ut={style:{"text-align":"right"}},$t={key:0,style:{"line-height":"10px"}},qt={style:{"font-style":"italic","font-size":"9px"}},zt={key:0},Ht=t("td",null,null,-1),Et=t("td",null,null,-1),Lt=t("td",null,null,-1),Rt=t("td",null,null,-1),Gt=t("tr",null,[t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"}),t("td",{class:"rayafactura"})],-1),Ot={style:{width:"100%"}},Jt={class:"letratotalesfactura",style:{"line-height":"10px"}},Kt=t("td",{style:{width:"40%"}},null,-1),Wt={style:{"text-align":"right"}},Xt={class:"letratotalesfactura",style:{"line-height":"10px"}},Zt=t("td",null,null,-1),te={style:{"text-align":"right"}},ee={class:"letratotalesfactura",style:{"line-height":"10px"}},ae=t("td",null,null,-1),oe={style:{"text-align":"right"}},se={class:"letratotalesfactura",style:{"line-height":"10px"}},le=t("td",null,null,-1),ie={class:"rayafactura"},ne={class:"rayafactura",style:{"text-align":"right"}},re={class:"letratotalesfactura",style:{"font-weight":"bold"}},de=t("td",null,null,-1),ce={style:{"text-align":"right"}},ue={key:0,class:"letratotalesfactura",style:{"font-weight":"bold"}},he=t("td",null,null,-1),me={style:{"text-align":"right"}},fe=t("iframe",{name:"print_frame",width:"0",height:"0",frameborder:"0",src:"about:blank"},null,-1);function pe(e,l,s,n,d,_e){return u(),F(q,{class:"row"},{default:r(()=>[t("div",H,[E,t("div",L,[t("div",R,[i(V,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.desde,"onUpdate:modelValue":l[1]||(l[1]=a=>e.desde=a),label:"Desde"},{append:r(()=>[i(x,{name:"event",class:"cursor-pointer"},{default:r(()=>[i(Q,{"transition-show":"scale","transition-hide":"scale"},{default:r(()=>[i(j,{modelValue:e.desde,"onUpdate:modelValue":l[0]||(l[0]=a=>e.desde=a)},{default:r(()=>[t("div",G,[Y(i(f,{label:"Close",color:"primary",flat:""},null,512),[[D]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t("div",O,[i(V,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.hasta,"onUpdate:modelValue":l[3]||(l[3]=a=>e.hasta=a),label:"Hasta"},{append:r(()=>[i(x,{name:"event",class:"cursor-pointer"},{default:r(()=>[i(Q,{"transition-show":"scale","transition-hide":"scale"},{default:r(()=>[i(j,{modelValue:e.hasta,"onUpdate:modelValue":l[2]||(l[2]=a=>e.hasta=a)},{default:r(()=>[t("div",J,[Y(i(f,{label:"Close",color:"primary",flat:""},null,512),[[D]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t("div",K,[i(V,{color:"blue-grey-3","bg-color":"white",outlined:"",standout:"",dense:"",debounce:"500",modelValue:e.filterTable,"onUpdate:modelValue":l[4]||(l[4]=a=>e.filterTable=a),placeholder:"Buscar"},{append:r(()=>[i(x,{name:"search"})]),_:1},8,["modelValue"])])]),t("div",W,[t("div",X,[t("div",Z,[i($,{rows:e.rows,title:"Ventas",columns:e.cols,"row-key":"num",pagination:e.pagination,dense:"",style:{width:"95%",margin:"20px"},loading:e.loading,filter:e.filterTable,"no-data-label":"\u26A0 Sin registros ","wrap-cells":"",separator:"cell",class:"custom-shadow custom-border-radius-table"},{"body-cell-cliente":r(a=>[i(v,{props:a},{default:r(()=>[t("div",tt,[g(o(a.row.cliente)+" ",1),et,g(" "+o(a.row.documento),1)])]),_:2},1032,["props"])]),"body-cell-estatus":r(a=>[i(v,{props:a},{default:r(()=>[t("div",at,[i(k,{color:a.row.estatus==="1"?"green-1":"red-1","text-color":a.row.estatus==="1"?"green-9":"red-9",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:r(()=>[g(o(a.row.estatus==="1"?"Procesada":"Anulada"),1)]),_:2},1032,["color","text-color"])])]),_:2},1032,["props"])]),"body-cell-formadepago":r(a=>[i(v,{props:a},{default:r(()=>[t("div",ot,[i(k,{color:a.row.formadepago==="1"?"blue-1":"orange-1","text-color":a.row.formadepago==="1"?"blue-9":"orange-9",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:r(()=>[g(o(a.row.formadepago==="1"?"Contado":"Cr\xE9dito"),1)]),_:2},1032,["color","text-color"])])]),_:2},1032,["props"])]),"body-cell-accion":r(a=>[i(v,{props:a},{default:r(()=>[t("div",st,[i(f,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"plagiarism",dense:"",onClick:N(_=>e.abrirDetalleInvoive(a.row),["stop"])},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter"])])])])]),i(U,{modelValue:e.modaldetalleinvoice,"onUpdate:modelValue":l[5]||(l[5]=a=>e.modaldetalleinvoice=a),persistent:""},{default:r(()=>[i(B,{style:{width:"320px"}},{default:r(()=>[t("div",lt,[i(S,{style:{"justify-content":"center"}},{default:r(()=>[t("div",it,o(e.empresa),1),t("div",nt,o(e.rif),1),t("div",rt,o(e.direccion),1),t("div",dt,o(e.telefono),1),t("div",ct,o(e.email),1),i(y,{style:{margin:"10px 0px"}}),e.detalleventa.estatus==="2"?(u(),h("div",ut,"ANULADA")):p("",!0),t("div",ht,[t("div",mt,o(e.detalleventa.tipofactura),1),t("div",ft,o(e.detalleventa.numerointerno),1)]),t("div",pt,[_t,t("div",gt,o(e.detalleventa.numerocontrol),1)]),e.detalleventa.relacionado?(u(),h("div",yt,[bt,t("div",vt,o(e.detalleventa.relacionado),1)])):p("",!0),i(y,{style:{margin:"10px 0px"}}),t("table",wt,[t("tr",xt,[Yt,t("td",Vt,o(e.detalleventa.cliente),1)]),t("tr",Dt,[t("td",null,o(e.detalleventa.abrev),1),t("td",Ct,o(e.detalleventa.documentosolo),1)]),t("tr",It,[Mt,t("td",Qt,o(e.detalleventa.fecha),1)]),t("tr",jt,[kt,t("td",Tt,o(e.detalleventa.usuario),1)])]),t("table",Pt,[Ft,(u(!0),h(b,null,M(e.ventas,a=>(u(),h(b,{key:a},[t("tr",Nt,[t("td",null,o(a.producto),1),t("td",Bt,o(Number(a.precio).toFixed(2)),1),t("td",St,o(a.cantidad),1),t("td",At,o(a.tasa)+"%",1),t("td",Ut,o(Number(a.subtotal).toFixed(2)),1)]),a.comentario&&a.comentario.length>0?(u(),h("tr",$t,[t("td",qt,[(u(!0),h(b,null,M(a.comentario.split("//"),_=>(u(),h(b,{key:_},[_.length>0?(u(),h("p",zt,"- "+o(_),1)):p("",!0)],64))),128))]),Ht,Et,Lt,Rt])):p("",!0)],64))),128)),Gt]),t("table",Ot,[t("tr",Jt,[Kt,t("td",null,"Subtotal "+o(e.prefijo)+":",1),t("td",Wt,o(e.detalleventa.subtotal),1)]),t("tr",Xt,[Zt,t("td",null,"Impuestos "+o(e.prefijo)+":",1),t("td",te,o(e.detalleventa.impuesto),1)]),t("tr",ee,[ae,t("td",null,"Descuentos "+o(e.prefijo)+":",1),t("td",oe,o(e.detalleventa.descuentos.toFixed(2)),1)]),t("tr",se,[le,t("td",ie,"IGTF 3% "+o(e.prefijo)+":",1),t("td",ne,o(e.detalleventa.igtf),1)]),t("tr",re,[de,t("td",null,"Total "+o(e.prefijo)+":",1),t("td",ce,o(e.detalleventa.total),1)]),e.mostrartotal==="2"?(u(),h("tr",ue,[he,t("td",null,"Total "+o(e.prefijo2)+":",1),t("td",me,o(e.detalleventa.totalusd),1)])):p("",!0)])]),_:1}),i(y)]),fe,i(y),i(A,{align:"center"},{default:r(()=>[Y(i(f,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[D]]),i(f,{unelevated:"","no-caps":"",label:"Imprimir",color:"primary","icon-right":"print",onClick:e.imprimir},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Me=T(z,[["render",pe]]);export{Me as default};