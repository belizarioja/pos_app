import{_ as q,a9 as K,r as u,N as V,k as g,l as _,w as i,q as l,m as t,B as b,z as x,y as h,au as N,av as z,aw as D,Q as I,x as p,a6 as C,C as f,A as B,ax as E,ab as c,F as m,ac as j,az as $,aB as F}from"./index.fef160fa.js";import{Q as L}from"./QImg.f4ac4603.js";import{Q}from"./QBadge.2e26ae86.js";import{Q as y,C as U}from"./ClosePopup.8351a24f.js";import{Q as P,a as v}from"./QItem.b105b6c7.js";import{Q as T}from"./format.b90bddac.js";import{a as S}from"./QSelect.5c5a6082.js";import{Q as M}from"./QPage.60836d02.js";import{a as w}from"./axios.7331a07d.js";const k="https://posapi-test.factura-smart.com/",H=K({name:"IndexPage",setup(){return{slide:u(2),inventariocompuesto:u(0),rows:u([]),rowsproductosfiltre:u([]),rowsproductosimple:u([]),rowsproductocompuesto:u([]),textitemsimple:u(""),textitem:u(""),productocompuestoedit:u(""),sku:u(""),producto:u(""),idproducto:u(null),descripcion:u(""),costo:u(0),precio:u(0),costousd:u(0),preciousd:u(0),utilidad:u(0),inventario:u(0),buscaritem:u(!1),buscarsimples:u(!1),buscarcompuestos:u(!1),editaritem:u(!1),model:u(null),options:[],modeltax:u(null),optionstax:[],modelunidad:u(null),modeltipoproducto:u(null),buscadoproducto:u(!0),buscadoproductosimple:u(!0),optionsunidad:u([]),optionstipoproducto:u([])}},methods:{calcularMonto(o){console.log(o.inventario);const e=document.getElementById("cantidad"+o.cod);if(e){const a=e.value>0?e.value:1;console.log(o.inventario,a),document.getElementById("estimado"+o.cod).innerHTML=(o.inventario/a).toFixed(2)}},listar(){this.btndisable=!1;const o=0;w.get(k+"productos/"+sessionStorage.getItem("co_empresa")+"/"+o).then(async e=>{console.log(e.data);const a=e.data.resp;this.rows=[];for(const d in a){const n={};n.cod=a[d].id,n.sku=a[d].sku,n.producto=a[d].producto,n.categoria=a[d].categoria,n.idcategoria=a[d].idcategoria,n.descripcion=a[d].descripcion,n.unidad=a[d].unidad,n.idunidad=a[d].idunidad,n.impuesto=a[d].impuesto,n.idimpuesto=a[d].idimpuesto,n.intipoproducto=a[d].intipoproducto,n.precio=a[d].precio,n.costo=a[d].costo,n.utilidad=a[d].utilidad,n.preciousd=a[d].preciousd,n.costousd=a[d].costousd,n.inventario=Number(a[d].inventario1)||0,this.rows.push(n)}this.rowsproductosfiltre=this.rows,this.rowsproductosimple=this.rows.filter(d=>Number(d.intipoproducto)===1),console.log("this.rowsproductosimple"),console.log(this.rowsproductosimple)}).catch(e=>{V.create("Problemas al listar Categorias "+e)})},openEditarCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto,this.buscarsimples=!0},openAbrirCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto;const e={idproducto:o.cod};w.post(k+"productos/getcompuesto",e).then(async a=>{console.log(a.data);const d=a.data.resp;this.rowsproductocompuesto=[],this.minimacantidad=1e6;for(const n in d){const r={};r.cod=d[n].id,r.sku=d[n].sku,r.producto=d[n].producto,r.categoria=d[n].categoria,r.idcategoria=d[n].idcategoria,r.descripcion=d[n].descripcion,r.unidad=d[n].unidad,r.idunidad=d[n].idunidad,r.impuesto=d[n].impuesto,r.idimpuesto=d[n].idimpuesto,r.intipoproducto=d[n].intipoproducto,r.precio=d[n].precio,r.costo=d[n].costo,r.utilidad=d[n].utilidad,r.preciousd=d[n].preciousd,r.costousd=d[n].costousd,r.cantidad=d[n].cantidad,r.inventario=Number(d[n].inventario1)||0,r.estimado=d[n].cantidad>0?(r.inventario/d[n].cantidad).toFixed(2):0,this.rowsproductocompuesto.push(r)}console.log(this.rowsproductocompuesto)}).catch(a=>{V.create("Problemas al listar Productos Compuesto "+a)}),this.buscarcompuestos=!0},addproductosimple(o){console.log(o.idunidad),console.log(o.cod),console.log(this.idproducto);const e={idunidad:o.idunidad,idproductohijo:o.cod,idproductopadre:this.idproducto,cantidad:0};w.post(k+"productos/compuesto",e).then(async a=>{this.modalcrear=!1,V.create(a.data.message),this.buscarsimples=!1,this.listar()}).catch(a=>{V.create("Problemas al Crear Producto Compuesto >>> "+a)})},openEditar(o){console.log(o.intipoproducto),console.log(this.optionstipoproducto),this.editaritem=!0;const e=this.options.find(r=>r.cod===o.idcategoria);this.model=e;const a=this.optionstax.find(r=>r.cod===o.idimpuesto);this.modeltax=a;const d=this.optionsunidad.find(r=>r.cod===o.idunidad);this.modelunidad=d;const n=this.optionstipoproducto.find(r=>r.id===Number(o.intipoproducto));this.modeltipoproducto=n,console.log(n),this.sku=o.sku,this.descripcion=o.descripcion,this.idproducto=o.cod,this.producto=o.producto,this.costo=o.costo,this.inventario=o.inventario,this.precio=o.precio,this.costousd=o.costousd,this.utilidad=o.utilidad,this.preciousd=o.preciousd},openCrear(){this.limpiar(),this.buscaritem=!0},limpiar(){this.model=null,this.modeltax=null,this.modelunidad=null,this.sku="",this.descripcion="",this.producto="",this.costo=0,this.costousd=0,this.inventario="",this.precio=0,this.preciousd=0},async editarCompuesto(){let o=999999999;for(const a in this.rowsproductocompuesto){const d=this.rowsproductocompuesto[a],n=document.getElementById("cantidad"+d.cod).value,r=document.getElementById("estimado"+d.cod).innerHTML;Number(r)<Number(o)&&(o=r);const s={idproductopadre:this.idproducto,idproductohijo:d.cod,cantidad:n};await w.post(k+"productos/updatecompuesto",s)}console.log(parseInt(o));const e={idproducto:this.idproducto,inventario:parseInt(o)};await w.post(k+"productos/updateinventario",e),this.buscarcompuestos=!1,this.listar()},editar(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={id:this.idproducto,idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modelunidad.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo||0,costousd:this.costousd||0,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio,preciousd:this.preciousd};w.post(k+"productos/updateproductos",o).then(async e=>{this.modalcrear=!1,console.log(e.data),V.create(e.data.resp.message),this.listar()})},crear(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modeltipoproducto.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo,costousd:this.costousd,preciousd:this.preciousd,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio};w.post(k+"productos",o).then(async e=>{this.modalcrear=!1,V.create({message:"Producto creado exitosamente",color:"positive",icon:"check"}),this.listar()}).catch(e=>{V.create("Problemas al Crear Producto "+e)})},listarCategoria(){w.get(k+"categoria/"+sessionStorage.getItem("co_empresa")).then(async o=>{const e=o.data.resp;this.options=[];for(const a in e){const d={};d.cod=e[a].id,d.categoria=e[a].categoria,d.descripcion=e[a].descripcion,this.options.push(d)}}).catch(o=>{V.create("Problemas al listar Categorias "+o)})},listarImpuesto(){w.get(k+"impuestos").then(async o=>{const e=o.data.resp;this.optionstax=[];for(const a in e){const d={};d.cod=e[a].id,d.impuesto=e[a].impuesto,d.tasa=e[a].tasa,this.optionstax.push(d)}}).catch(o=>{V.create("Problemas al listar Impuestos "+o)})},listarUnidades(){w.get(k+"unidades").then(async o=>{const e=o.data.resp;this.optionsunidad=[];for(const a in e){const d={};d.cod=e[a].id,d.unidad=e[a].unidad,this.optionsunidad.push(d)}}).catch(o=>{V.create("Problemas al listar Unidades "+o)})},primeraletra(o){return o[0]},colorLetra(o){const e=o[0].charCodeAt(0);return"#"+e+"0"},async cargar(){const o=await w.get(k+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(e=>{V.create("Problemas al listar Configuracion "+e)});return console.log(o),o.data.resp}},watch:{textitem(o){console.log("textitem"),console.log(o),this.buscadoproducto=!1,o.length>0?this.rowsproductosfiltre=this.rowsproductosfiltre.filter(e=>!!(e.producto.toUpperCase().includes(o.toUpperCase())||e.sku&&e.sku.includes(o))):this.rowsproductosfiltre=this.rows,this.buscadoproducto=!0},textitemsimple(o){console.log("textitemsimple"),console.log(o),this.buscadoproductosimple=!1,o.length>0?this.rowsproductosimple=this.rowsproductosimple.filter(e=>!!(e.producto.toUpperCase().includes(o.toUpperCase())||e.sku&&e.sku.includes(o))):this.rowsproductosimple=this.rows,this.buscadoproductosimple=!0},costo(){this.costo>0?(this.costousd=(this.costo/this.tasausd).toFixed(2),this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(2)):(this.costousd=0,this.utilidad=0,this.costo=0)},precio(){this.precio>0?(this.preciousd=(this.precio/this.tasausd).toFixed(2),this.costo>0&&(this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(2))):(this.preciousd=0,this.utilidad=0,this.precio=0)}},async mounted(){const o=await this.cargar();this.tasausd=o.tasabcv,this.listar(),this.listarCategoria(),this.listarImpuesto(),this.listarUnidades();let e={};e.id=1,e.tipoproducto="Simple",this.optionstipoproducto.push(e),e={},e.id=2,e.tipoproducto="Compuesto",this.optionstipoproducto.push(e),e={},e.id=3,e.tipoproducto="Servicio",this.optionstipoproducto.push(e)}}),G={class:"col"},O=l("div",{class:"botones row fondo-gris shadow-up-9"},[l("h6",{class:"p-2"},"Productos")],-1),J={class:"listarcategorias row",style:{"margin-top":"20px"}},R={class:"listarcategorias row",style:{"margin-top":"20px"}},W={class:"row"},X={key:1,class:"listarcategoriasconitem col"},Y={class:"row justify-center"},Z={class:"row no-wrap"},oo={class:"overlay-content",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",color:"white",background:"rgba(0, 0, 0, 0.5)"}},to={class:"col-8"},eo={style:{display:"flex","justify-content":"space-between","align-items":"center"}},so={class:"q-mb-none"},io=l("div",{class:"text-center"},[l("h6",null,"Crear producto")],-1),lo={class:"col",style:{padding:"0 10px"}},ao={class:"col"},no={class:""},ro={class:"col"},uo={class:"col"},co={class:"row"},po={class:"row"},mo={class:"row"},ho=l("div",{class:"text-center"},[l("h6",null,"Editar producto")],-1),fo={class:"col",style:{padding:"0 10px"}},go={class:"col"},bo={class:""},yo={class:"col"},vo={class:"col"},Vo={class:"row"},wo={class:"row"},ko={class:"row"},_o={class:"text-center"},Co=l("span",{class:"titulobuscar"},"Agregar item al Producto Compuesto",-1),Uo={class:"subtitulobuscar"},xo={class:""},Po={style:{display:"flex"}},So={style:{display:"flex"}},Io={style:{display:"flex"}},jo={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},Qo=l("div",{class:"text-center"},"Unidad",-1),No={class:"text-secondary"},Bo={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},Eo=l("div",{class:"text-center"},"Impuesto.",-1),zo={class:"text-secondary"},Do={class:"text-center"},Ao=l("span",{class:"titulobuscar"},"Editar items del Producto Compuesto",-1),$o={class:"subtitulobuscar"},Fo=l("div",{class:"titulonohay"},"No tiene item asignado",-1),Lo={style:{display:"flex"}},qo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Ko=l("div",{class:"text-center"},"Cantidad",-1),To=["id","value","onInput"],Mo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Ho=l("div",{class:"text-center"},"Disponible",-1),Go={class:"text-secondary text-center"},Oo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Jo=l("div",{class:"text-center"},"Unidad",-1),Ro={class:"text-secondary text-center"},Wo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Xo=l("div",{class:"text-center"},"Estimado",-1),Yo=["id"];function Zo(o,e,a,d,n,r){return g(),_(M,null,{default:i(()=>[l("div",G,[O,l("div",J,[t(b,{"no-caps":"",unelevated:"",dense:"",class:"gradient-btn",icon:"add_circle",onClick:o.openCrear,label:"Agregar producto",style:{width:"180px"}},null,8,["onClick"])]),l("div",R,[t(h,{color:"blue-grey-3","bg-color":"white",dense:"",outlined:"",modelValue:o.textitem,"onUpdate:modelValue":e[1]||(e[1]=s=>o.textitem=s),label:"Nombre o Sku de producto",style:{width:"30%"},autofocus:""},{prepend:i(()=>[t(x,{name:"search"})]),append:i(()=>[t(x,{name:"close",onClick:e[0]||(e[0]=s=>o.textitem=""),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),l("div",W,[o.slide===1?(g(),_(L,{key:0,src:"img/sin-productos.png",style:{width:"35%",height:"auto",display:"block",margin:"auto"},fit:"contain"})):(g(),N("div",X,[l("div",Y,[(g(!0),N(z,null,D(o.rowsproductosfiltre,s=>(g(),_(I,{key:s.id,class:"my-card custom-shadow custom-border-radius col-md-4 col-sm-11 col-xs-11",bordered:"",flat:"",style:{margin:"10px"}},{default:i(()=>[l("div",Z,[t(L,{class:"borde-cust col-4",src:"img/no-photo-prod.avif"},{default:i(()=>[l("div",oo,[t($,{"text-color":"white",style:F("background: "+o.colorLetra(s.producto)),size:"40px"},{default:i(()=>[m(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),l("div",null,[l("b",null,c(s.producto),1)]),m(" "+c(s.categoria)+" ",1),t(Q,{color:(s.intipoproducto==="1"||s.intipoproducto==="2","grey-5"),class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:i(()=>[m(c(s.intipoproducto==="1"?"Simple":s.intipoproducto==="2"?"Compuesto":"Servicio"),1)]),_:2},1032,["color"]),l("div",null,"SKU: "+c(s.sku),1)])]),_:2},1024),l("div",to,[t(p,{class:"q-pa-sm"},{default:i(()=>[l("div",eo,[l("h6",so,c(s.producto),1),t(b,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"edit",onClick:A=>o.openEditar(s)},null,8,["onClick"])])]),_:2},1024),t(f),t(p,{class:"q-pa-sm"},{default:i(()=>[t(y,{caption:""},{default:i(()=>[m("Precio:")]),_:1}),l("h6",null," Bs. "+c(s.precio),1)]),_:2},1024),t(f),t(T,null,{default:i(()=>[t(P,null,{default:i(()=>[t(v,{avatar:""},{default:i(()=>[t(x,{name:"attach_money"})]),_:1}),t(v,null,{default:i(()=>[t(y,{caption:""},{default:i(()=>[m("Impuesto:")]),_:1}),t(y,null,{default:i(()=>[m(c(s.impuesto),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(P,null,{default:i(()=>[t(v,{avatar:""},{default:i(()=>[t(x,{name:"description"})]),_:1}),t(v,null,{default:i(()=>[t(y,{caption:""},{default:i(()=>[m("Descripci\xF3n:")]),_:1}),t(y,null,{default:i(()=>[m(c(s.descripcion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(P,null,{default:i(()=>[t(v,{avatar:""},{default:i(()=>[t(x,{name:"straighten"})]),_:1}),t(v,null,{default:i(()=>[t(y,{caption:""},{default:i(()=>[m("Unidad:")]),_:1}),t(y,null,{default:i(()=>[m(c(s.unidad),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(P,null,{default:i(()=>[t(v,{avatar:""},{default:i(()=>[t(x,{name:"inventory"})]),_:1}),t(v,null,{default:i(()=>[t(y,{caption:""},{default:i(()=>[m("Inventario:")]),_:1}),t(y,null,{default:i(()=>[l("div",null,[s.inventario>10?(g(),_(Q,{key:0,class:"estatusbien"},{default:i(()=>[m(c(s.inventario),1)]),_:2},1024)):j("",!0),s.inventario>0&&s.inventario<=10?(g(),_(Q,{key:1,class:"estatusmedio"},{default:i(()=>[m(c(s.inventario),1)]),_:2},1024)):j("",!0),s.inventario===0?(g(),_(Q,{key:2,class:"estatusmal"},{default:i(()=>[m(c(s.intipoproducto==="3"?"N/A":0),1)]),_:2},1024)):j("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])]),_:2},1024))),128))])]))])]),t(E,{modelValue:o.buscaritem,"onUpdate:modelValue":e[15]||(e[15]=s=>o.buscaritem=s)},{default:i(()=>[t(I,{class:"custom-shadow custom-border-radius"},{default:i(()=>[t(p,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[io,C(t(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(p,{class:"row"},{default:i(()=>[t(h,{outlined:"",class:"col",modelValue:o.sku,"onUpdate:modelValue":e[2]||(e[2]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",lo,[t(S,{outlined:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":e[3]||(e[3]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),t(p,{class:"row"},{default:i(()=>[l("div",ao,[t(S,{outlined:"",modelValue:o.model,"onUpdate:modelValue":e[4]||(e[4]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),t(p,null,{default:i(()=>[l("div",no,[t(h,{outlined:"",modelValue:o.producto,"onUpdate:modelValue":e[5]||(e[5]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),t(p,null,{default:i(()=>[t(h,{outlined:"",modelValue:o.descripcion,"onUpdate:modelValue":e[6]||(e[6]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",rows:"2",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),t(f),t(p,{class:"row"},{default:i(()=>[l("div",ro,[t(S,{outlined:"",modelValue:o.modeltax,"onUpdate:modelValue":e[7]||(e[7]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",uo,[t(S,{outlined:"",modelValue:o.modelunidad,"onUpdate:modelValue":e[8]||(e[8]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:"",style:{padding:"0 10px"}},null,8,["modelValue","options"])])]),_:1}),t(f),t(p,null,{default:i(()=>[l("div",co,[t(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":e[9]||(e[9]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":e[10]||(e[10]=s=>o.costousd=s),label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",po,[t(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":e[11]||(e[11]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":e[12]||(e[12]=s=>o.preciousd=s),label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",mo,[t(h,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":e[13]||(e[13]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":e[14]||(e[14]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),t(f),t(B,{align:"center"},{default:i(()=>[C(t(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),C(t(b,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check",onClick:o.crear},null,8,["onClick"]),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(E,{modelValue:o.editaritem,"onUpdate:modelValue":e[29]||(e[29]=s=>o.editaritem=s)},{default:i(()=>[t(I,{class:"custom-shadow custom-border-radius"},{default:i(()=>[t(p,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[ho,C(t(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(f),t(p,{class:"row"},{default:i(()=>[t(h,{class:"col",outlined:"",modelValue:o.sku,"onUpdate:modelValue":e[16]||(e[16]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",fo,[t(S,{outlined:"",disable:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":e[17]||(e[17]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),t(f),t(p,{class:"row"},{default:i(()=>[l("div",go,[t(S,{outlined:"",modelValue:o.model,"onUpdate:modelValue":e[18]||(e[18]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),t(f),t(p,null,{default:i(()=>[l("div",bo,[t(h,{outlined:"",modelValue:o.producto,"onUpdate:modelValue":e[19]||(e[19]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),t(f),t(p,null,{default:i(()=>[t(h,{modelValue:o.descripcion,"onUpdate:modelValue":e[20]||(e[20]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",outlined:"",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),t(f),t(p,{class:"row"},{default:i(()=>[l("div",yo,[t(S,{outlined:"",modelValue:o.modeltax,"onUpdate:modelValue":e[21]||(e[21]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",vo,[t(S,{outlined:"",modelValue:o.modelunidad,"onUpdate:modelValue":e[22]||(e[22]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:""},null,8,["modelValue","options"])])]),_:1}),t(f),t(p,null,{default:i(()=>[l("div",Vo,[t(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":e[23]||(e[23]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":e[24]||(e[24]=s=>o.costousd=s),label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",wo,[t(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":e[25]||(e[25]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":e[26]||(e[26]=s=>o.preciousd=s),label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",ko,[t(h,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":e[27]||(e[27]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),t(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":e[28]||(e[28]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),t(f),t(B,{align:"center"},{default:i(()=>[C(t(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),C(t(b,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check",onClick:o.editar},null,8,["onClick"]),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(E,{modelValue:o.buscarsimples,"onUpdate:modelValue":e[32]||(e[32]=s=>o.buscarsimples=s),position:"top",persistent:""},{default:i(()=>[t(I,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[t(p,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[l("div",_o,[Co,l("span",Uo,c(o.productocompuestoedit),1)]),C(t(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(f),t(p,{style:{padding:"10px 15px 7px"}},{default:i(()=>[l("div",xo,[t(h,{color:"white","bg-color":"primary",rounded:"",standout:"","bottom-slots":"",modelValue:o.textitemsimple,"onUpdate:modelValue":e[31]||(e[31]=s=>o.textitemsimple=s),label:"Nombre o Sku Producto Simple",counter:"",autofocus:""},{prepend:i(()=>[t(x,{name:"search"})]),append:i(()=>[t(x,{name:"close",onClick:e[30]||(e[30]=s=>o.textitemsimple=""),class:"cursor-pointer"})]),hint:i(()=>[m(" Cantidad de letras ")]),_:1},8,["modelValue"])])]),_:1}),t(f),o.buscadoproductosimple?(g(),_(p,{key:0,style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(g(!0),N(z,null,D(o.rowsproductosimple,s=>(g(),_(I,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[t(P,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[t(y,null,{default:i(()=>[m(c(s.producto),1)]),_:2},1024),t(y,null,{default:i(()=>[m("SKU "+c(s.sku),1)]),_:2},1024),t(y,{caption:""},{default:i(()=>[m(c(s.categoria),1)]),_:2},1024)]),_:2},1024),t(v,{side:""},{default:i(()=>[l("div",Po,[t(b,{flat:"",round:"",color:"blue",icon:"add_box",onClick:A=>o.addproductosimple(s),style:{"font-size":"20px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),t(P,{horizontal:""},{default:i(()=>[t(v,{avatar:"",style:{"padding-right":"15px","align-items":"center"}},{default:i(()=>[t($,{"text-color":"white",style:F("background: "+o.colorLetra(s.producto))},{default:i(()=>[m(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),t(Q,{color:"blue",style:{"margin-top":"5px"}},{default:i(()=>[m(" Bs. "+c(s.precio),1)]),_:2},1024)]),_:2},1024),t(v,{class:"tarjeticainside"},{default:i(()=>[l("div",So,c(s.descripcion),1),l("div",Io,[l("div",jo,[Qo,l("div",No,c(s.unidad),1)]),l("div",Bo,[Eo,l("div",zo,c(s.impuesto),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):j("",!0),t(f),t(B,{align:"center"},{default:i(()=>[C(t(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(E,{modelValue:o.buscarcompuestos,"onUpdate:modelValue":e[33]||(e[33]=s=>o.buscarcompuestos=s),position:"top",persistent:""},{default:i(()=>[t(I,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[t(p,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[l("div",Do,[Ao,l("span",$o,c(o.productocompuestoedit),1)]),C(t(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(f),o.rowsproductocompuesto.length===0?(g(),_(p,{key:0,style:{padding:"10px 15px 7px"}},{default:i(()=>[Fo]),_:1})):j("",!0),t(p,{style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(g(!0),N(z,null,D(o.rowsproductocompuesto,s=>(g(),_(I,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[t(P,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[t(y,null,{default:i(()=>[m(c(s.producto),1)]),_:2},1024),t(y,{caption:""},{default:i(()=>[m("SKU "+c(s.sku)+" - "+c(s.categoria),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(P,{horizontal:""},{default:i(()=>[t(v,{class:"tarjeticainside"},{default:i(()=>[l("div",Lo,[l("div",qo,[Ko,l("input",{class:"inputCantidad",id:"cantidad"+s.cod,value:s.cantidad,pattern:"^\\d*(\\.\\d{0,2})?$",onInput:A=>o.calcularMonto(s)},null,40,To)]),l("div",Mo,[Ho,l("div",Go,c(s.inventario),1)]),l("div",Oo,[Jo,l("div",Ro,c(s.unidad),1)]),l("div",Wo,[Xo,l("div",{id:"estimado"+s.cod,class:"text-secondary text-center"},c(s.estimado),9,Yo)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(f),t(B,{align:"center"},{default:i(()=>[C(t(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),t(b,{unelevated:"","no-caps":"",label:"Guardar",color:"primary","icon-right":"check",onClick:o.editarCompuesto},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var rt=q(H,[["render",Zo]]);export{rt as default};
