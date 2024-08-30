import{_ as q,al as K,r as u,N as V,k as g,l as v,w as i,q as l,m as e,B as b,z,y as h,aw as N,ax as F,ay as $,Q as P,x as m,ab as _,C as f,A as B,az as E,an as c,F as p,ao as S,aB as A,aE as D}from"./index.0372c13d.js";import{Q as L}from"./QImg.5ca1ad7b.js";import{Q as j}from"./QBadge.c2316f27.js";import{Q as y,C as U}from"./ClosePopup.804a8e16.js";import{Q as I,a as k}from"./QItem.ea2cb55d.js";import{Q as T}from"./format.6a4c5490.js";import{a as x}from"./QSelect.b178cbb3.js";import{Q as M}from"./QPage.d8752507.js";import{a as w}from"./axios.7331a07d.js";const C="https://posapi-test.factura-smart.com/",H=K({name:"IndexPage",setup(){return{slide:u(2),decimales:u(2),tipomoneda:u(""),inventariocompuesto:u(0),rows:u([]),rowsproductosfiltre:u([]),rowsproductosimple:u([]),rowsproductocompuesto:u([]),textitemsimple:u(""),textitem:u(""),productocompuestoedit:u(""),sku:u(""),producto:u(""),idproducto:u(null),descripcion:u(""),costo:u(0),precio:u(0),costousd:u(0),preciousd:u(0),utilidad:u(0),inventario:u(0),buscaritem:u(!1),buscarsimples:u(!1),buscarcompuestos:u(!1),editaritem:u(!1),model:u(null),options:[],modeltax:u(null),optionstax:[],modelunidad:u(null),modeltipoproducto:u(null),buscadoproducto:u(!0),buscadoproductosimple:u(!0),optionsunidad:u([]),optionstipoproducto:u([])}},methods:{convertirCosto(){console.log(this.costo,this.costousd),this.costousd>0?(this.costo=(this.costousd*this.tasausd).toFixed(this.decimales),this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(this.decimales)):(this.costousd=0,this.utilidad=0,this.costo=0)},convertirPrecio(){console.log(this.precio,this.preciousd),this.preciousd>0?(this.precio=(this.preciousd*this.tasausd).toFixed(this.decimales),this.costo>0&&(this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(this.decimales))):(this.preciousd=0,this.utilidad=0,this.precio=0)},calcularMonto(o){console.log(o.inventario);const t=document.getElementById("cantidad"+o.cod);if(t){const a=t.value>0?t.value:1;console.log(o.inventario,a),document.getElementById("estimado"+o.cod).innerHTML=(o.inventario/a).toFixed(this.decimales)}},listar(){this.btndisable=!1;const o=0;w.get(C+"productos/"+sessionStorage.getItem("co_empresa")+"/"+o).then(async t=>{const a=t.data.resp;this.rows=[];for(const d in a){const n={};n.cod=a[d].id,n.sku=a[d].sku,n.producto=a[d].producto,n.categoria=a[d].categoria,n.idcategoria=a[d].idcategoria,n.descripcion=a[d].descripcion,n.unidad=a[d].unidad,n.idunidad=a[d].idunidad,n.impuesto=a[d].impuesto,n.idimpuesto=a[d].idimpuesto,n.intipoproducto=a[d].intipoproducto,n.precio=a[d].precio,n.costo=a[d].costo,n.utilidad=a[d].utilidad,n.preciousd=a[d].preciousd,n.costousd=a[d].costousd,n.inventario=Number(a[d].inventario1)||0,this.rows.push(n)}this.rowsproductosfiltre=this.rows,this.rowsproductosimple=this.rows.filter(d=>Number(d.intipoproducto)===1),console.log("this.rowsproductosimple"),console.log(this.rowsproductosimple)}).catch(t=>{V.create("Problemas al listar Categorias "+t)})},openEditarCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto,this.buscarsimples=!0},openAbrirCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto;const t={idproducto:o.cod};w.post(C+"productos/getcompuesto",t).then(async a=>{console.log(a.data);const d=a.data.resp;this.rowsproductocompuesto=[],this.minimacantidad=1e6;for(const n in d){const r={};r.cod=d[n].id,r.sku=d[n].sku,r.producto=d[n].producto,r.categoria=d[n].categoria,r.idcategoria=d[n].idcategoria,r.descripcion=d[n].descripcion,r.unidad=d[n].unidad,r.idunidad=d[n].idunidad,r.impuesto=d[n].impuesto,r.idimpuesto=d[n].idimpuesto,r.intipoproducto=d[n].intipoproducto,r.precio=d[n].precio,r.costo=d[n].costo,r.utilidad=d[n].utilidad,r.preciousd=d[n].preciousd,r.costousd=d[n].costousd,r.cantidad=d[n].cantidad,r.inventario=Number(d[n].inventario1)||0,r.estimado=d[n].cantidad>0?(r.inventario/d[n].cantidad).toFixed(this.decimales):0,this.rowsproductocompuesto.push(r)}console.log(this.rowsproductocompuesto)}).catch(a=>{V.create("Problemas al listar Productos Compuesto "+a)}),this.buscarcompuestos=!0},addproductosimple(o){console.log(o.idunidad),console.log(o.cod),console.log(this.idproducto);const t={idunidad:o.idunidad,idproductohijo:o.cod,idproductopadre:this.idproducto,cantidad:0};w.post(C+"productos/compuesto",t).then(async a=>{this.modalcrear=!1,V.create(a.data.message),this.buscarsimples=!1,this.listar()}).catch(a=>{V.create("Problemas al Crear Producto Compuesto >>> "+a)})},openEditar(o){console.log(o.intipoproducto),console.log(this.optionstipoproducto),this.editaritem=!0;const t=this.options.find(r=>r.cod===o.idcategoria);this.model=t;const a=this.optionstax.find(r=>r.cod===o.idimpuesto);this.modeltax=a;const d=this.optionsunidad.find(r=>r.cod===o.idunidad);this.modelunidad=d;const n=this.optionstipoproducto.find(r=>r.id===Number(o.intipoproducto));this.modeltipoproducto=n,console.log(n),this.sku=o.sku,this.descripcion=o.descripcion,this.idproducto=o.cod,this.producto=o.producto,this.costo=o.costo.toFixed(this.decimales),this.inventario=o.inventario,this.precio=o.precio.toFixed(this.decimales),this.costousd=o.costousd.toFixed(this.decimales),this.utilidad=o.utilidad,this.preciousd=o.preciousd.toFixed(this.decimales)},openCrear(){this.limpiar(),this.buscaritem=!0},limpiar(){this.model=null,this.modeltax=null,this.modelunidad=null,this.sku="",this.descripcion="",this.producto="",this.costo=0,this.costousd=0,this.inventario="",this.precio=0,this.preciousd=0},async editarCompuesto(){let o=999999999;for(const a in this.rowsproductocompuesto){const d=this.rowsproductocompuesto[a],n=document.getElementById("cantidad"+d.cod).value,r=document.getElementById("estimado"+d.cod).innerHTML;Number(r)<Number(o)&&(o=r);const s={idproductopadre:this.idproducto,idproductohijo:d.cod,cantidad:n};await w.post(C+"productos/updatecompuesto",s)}console.log(parseInt(o));const t={idproducto:this.idproducto,inventario:parseInt(o)};await w.post(C+"productos/updateinventario",t),this.buscarcompuestos=!1,this.listar()},editar(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={id:this.idproducto,idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modelunidad.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo||0,costousd:this.costousd||0,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio,preciousd:this.preciousd};w.post(C+"productos/updateproductos",o).then(async t=>{this.modalcrear=!1,console.log(t.data),V.create(t.data.resp.message),this.listar()})},crear(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modeltipoproducto.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo,costousd:this.costousd,preciousd:this.preciousd,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio};w.post(C+"productos",o).then(async t=>{this.modalcrear=!1,V.create({message:"Producto creado exitosamente",color:"positive",icon:"check"}),this.listar()}).catch(t=>{V.create("Problemas al Crear Producto "+t)})},listarCategoria(){w.get(C+"categoria/"+sessionStorage.getItem("co_empresa")).then(async o=>{const t=o.data.resp;this.options=[];for(const a in t){const d={};d.cod=t[a].id,d.categoria=t[a].categoria,d.descripcion=t[a].descripcion,this.options.push(d)}}).catch(o=>{V.create("Problemas al listar Categorias "+o)})},listarImpuesto(){w.get(C+"impuestos").then(async o=>{const t=o.data.resp;this.optionstax=[];for(const a in t){const d={};d.cod=t[a].id,d.impuesto=t[a].impuesto,d.tasa=t[a].tasa,this.optionstax.push(d)}}).catch(o=>{V.create("Problemas al listar Impuestos "+o)})},listarUnidades(){w.get(C+"unidades").then(async o=>{const t=o.data.resp;this.optionsunidad=[];for(const a in t){const d={};d.cod=t[a].id,d.unidad=t[a].unidad,this.optionsunidad.push(d)}}).catch(o=>{V.create("Problemas al listar Unidades "+o)})},primeraletra(o){return o[0]},colorLetra(o){const t=o[0].charCodeAt(0);return"#"+t+"0"},async cargar(){const o=await w.get(C+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(t=>{V.create("Problemas al listar Configuracion "+t)});return console.log(o),o.data.resp}},watch:{textitem(o){console.log("textitem"),console.log(o),this.buscadoproducto=!1,o.length>0?this.rowsproductosfiltre=this.rowsproductosfiltre.filter(t=>!!(t.producto.toUpperCase().includes(o.toUpperCase())||t.sku&&t.sku.includes(o))):this.rowsproductosfiltre=this.rows,this.buscadoproducto=!0},textitemsimple(o){console.log("textitemsimple"),console.log(o),this.buscadoproductosimple=!1,o.length>0?this.rowsproductosimple=this.rowsproductosimple.filter(t=>!!(t.producto.toUpperCase().includes(o.toUpperCase())||t.sku&&t.sku.includes(o))):this.rowsproductosimple=this.rows,this.buscadoproductosimple=!0},costo(){this.costo>0?(this.costousd=(this.costo/this.tasausd).toFixed(this.decimales),this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(this.decimales)):(this.costousd=0,this.utilidad=0,this.costo=0)},precio(){this.precio>0?(this.preciousd=(this.precio/this.tasausd).toFixed(this.decimales),this.costo>0&&(this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(this.decimales))):(this.preciousd=0,this.utilidad=0,this.precio=0)}},async mounted(){const o=await this.cargar();this.tasausd=o.tasabcv,this.tipomoneda=o.tipomoneda,this.decimales=o.tipomoneda==="1"?2:4,this.listar(),this.listarCategoria(),this.listarImpuesto(),this.listarUnidades();let t={};t.id=1,t.tipoproducto="Simple",this.optionstipoproducto.push(t),t={},t.id=2,t.tipoproducto="Compuesto",this.optionstipoproducto.push(t),t={},t.id=3,t.tipoproducto="Servicio",this.optionstipoproducto.push(t)}}),G={class:"col"},O=l("div",{class:"botones row fondo-gris shadow-up-9"},[l("h6",{class:"p-2"},"Productos")],-1),J={class:"listarcategorias row",style:{"margin-top":"20px"}},R={class:"listarcategorias row",style:{margin:"20px"}},W={class:"row"},X={key:1,class:"listarcategoriasconitem col"},Y={class:"row justify-center"},Z={style:{display:"flex","justify-content":"space-between","align-items":"center"}},oo={class:"q-mb-none"},eo={class:"row no-wrap"},to={class:"overlay-content",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",color:"white",background:"rgba(0, 0, 0, 0.5)"}},so={style:{"font-size":"12px"}},io={class:"q-pa-sm",style:{"font-size":"11px"}},lo={class:"col-7"},ao=l("div",{class:"text-center"},[l("h6",null,"Crear producto")],-1),no={class:"col",style:{padding:"0 10px"}},ro={class:"col"},uo={class:""},co={class:"col"},po={class:"col"},mo={class:"row"},ho={class:"row"},fo={class:"row"},go=l("div",{class:"text-center"},[l("h6",null,"Editar producto")],-1),bo={class:"col",style:{padding:"0 10px"}},yo={class:"col"},vo={class:""},Vo={class:"col"},ko={class:"col"},wo={class:"row"},Co={class:"row"},_o={class:"row"},Uo={class:"text-center"},xo=l("span",{class:"titulobuscar"},"Agregar item al Producto Compuesto",-1),Po={class:"subtitulobuscar"},So={class:""},Io={style:{display:"flex"}},jo={style:{display:"flex"}},Qo={style:{display:"flex"}},zo={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},No=l("div",{class:"text-center"},"Unidad",-1),Bo={class:"text-secondary"},Eo={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},Fo=l("div",{class:"text-center"},"Impuesto.",-1),$o={class:"text-secondary"},Ao={class:"text-center"},Do=l("span",{class:"titulobuscar"},"Editar items del Producto Compuesto",-1),Lo={class:"subtitulobuscar"},qo=l("div",{class:"titulonohay"},"No tiene item asignado",-1),Ko={style:{display:"flex"}},To={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Mo=l("div",{class:"text-center"},"Cantidad",-1),Ho=["id","value","onInput"],Go={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Oo=l("div",{class:"text-center"},"Disponible",-1),Jo={class:"text-secondary text-center"},Ro={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Wo=l("div",{class:"text-center"},"Unidad",-1),Xo={class:"text-secondary text-center"},Yo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Zo=l("div",{class:"text-center"},"Estimado",-1),oe=["id"];function ee(o,t,a,d,n,r){return g(),v(M,null,{default:i(()=>[l("div",G,[O,l("div",J,[e(b,{"no-caps":"",unelevated:"",dense:"",class:"gradient-btn",icon:"add_circle",onClick:o.openCrear,label:"Agregar producto",style:{width:"180px"}},null,8,["onClick"])]),l("div",R,[e(h,{color:"blue-grey-3","bg-color":"white",dense:"",outlined:"",modelValue:o.textitem,"onUpdate:modelValue":t[1]||(t[1]=s=>o.textitem=s),label:"Nombre o Sku de producto",style:{width:"300px"},autofocus:""},{prepend:i(()=>[e(z,{name:"search"})]),append:i(()=>[e(z,{name:"close",onClick:t[0]||(t[0]=s=>o.textitem=""),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),l("div",W,[o.slide===1?(g(),v(L,{key:0,src:"img/sin-productos.png",style:{width:"333px",height:"auto",display:"block",margin:"auto"},fit:"contain"})):(g(),N("div",X,[l("div",Y,[(g(!0),N(F,null,$(o.rowsproductosfiltre,s=>(g(),v(P,{key:s.id,class:"my-card custom-shadow custom-border-radius col-md-4 col-sm-11 col-xs-11",bordered:"",flat:"",style:{margin:"10px"}},{default:i(()=>[e(m,{class:"q-pa-sm"},{default:i(()=>[l("div",Z,[l("h6",oo,c(s.producto),1),s.intipoproducto==="2"?(g(),v(b,{key:0,round:"",unelevated:"",color:"blue-1","text-color":"blue-10",icon:"dashboard_customize",onClick:Q=>o.openEditarCompuesto(s),style:{"font-size":"12px"}},null,8,["onClick"])):S("",!0),s.intipoproducto==="2"?(g(),v(b,{key:1,round:"",unelevated:"",color:"blue-1","text-color":"blue-10",icon:"inventory_2",onClick:Q=>o.openAbrirCompuesto(s),style:{"font-size":"12px"}},null,8,["onClick"])):S("",!0),e(b,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"edit",onClick:Q=>o.openEditar(s),style:{"font-size":"12px"}},null,8,["onClick"])])]),_:2},1024),e(f),l("div",eo,[e(L,{class:"borde-cust-up col-5",src:"img/no-photo-prod.avif"},{default:i(()=>[l("div",to,[e(A,{"text-color":"white",style:D("background: "+o.colorLetra(s.producto)),size:"40px"},{default:i(()=>[p(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),l("div",so,[l("b",null,c(s.categoria),1)]),e(j,{color:s.intipoproducto==="1"?"blue-1":s.intipoproducto==="2"?"orange-1":"purple-1","text-color":s.intipoproducto==="1"?"blue-10":s.intipoproducto==="2"?"orange-10":"purple-10",class:"q-mt-xs q-mr-xs q-pa-xs",rounded:""},{default:i(()=>[p(c(s.intipoproducto==="1"?"Simple":s.intipoproducto==="2"?"Compuesto":"Servicio"),1)]),_:2},1032,["color","text-color"]),l("div",io,[l("b",null,"SKU: "+c(s.sku),1)])])]),_:2},1024),l("div",lo,[e(T,null,{default:i(()=>[e(I,null,{default:i(()=>[e(k,null,{default:i(()=>[e(y,{caption:""},{default:i(()=>[p("Descripci\xF3n:")]),_:1}),e(y,null,{default:i(()=>[p(c(s.descripcion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(f),e(I,null,{default:i(()=>[e(k,null,{default:i(()=>[e(y,{caption:""},{default:i(()=>[p("Precio:")]),_:1}),e(y,null,{default:i(()=>[p(c(o.tipomoneda==="1"?"Bs. "+s.precio.toFixed(o.decimales):"$ "+s.preciousd.toFixed(o.decimales)),1)]),_:2},1024)]),_:2},1024),e(k,{side:""},{default:i(()=>[e(y,{caption:""},{default:i(()=>[p("Impuesto:")]),_:1}),e(y,null,{default:i(()=>[p(c(s.impuesto),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(f),e(I,null,{default:i(()=>[e(k,null,{default:i(()=>[e(y,{caption:""},{default:i(()=>[p("Unidad:")]),_:1}),e(y,null,{default:i(()=>[p(c(s.unidad),1)]),_:2},1024)]),_:2},1024),e(k,{side:""},{default:i(()=>[e(y,{caption:""},{default:i(()=>[p("Inventario:")]),_:1}),e(y,null,{default:i(()=>[l("div",null,[s.inventario>10?(g(),v(j,{key:0,class:"estatusbien"},{default:i(()=>[p(c(s.inventario),1)]),_:2},1024)):S("",!0),s.inventario>0&&s.inventario<=10?(g(),v(j,{key:1,class:"estatusmedio"},{default:i(()=>[p(c(s.inventario),1)]),_:2},1024)):S("",!0),s.inventario===0?(g(),v(j,{key:2,class:"estatusmal"},{default:i(()=>[p(c(s.intipoproducto==="3"?"N/A":0),1)]),_:2},1024)):S("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])]),_:2},1024))),128))])]))])]),e(E,{modelValue:o.buscaritem,"onUpdate:modelValue":t[15]||(t[15]=s=>o.buscaritem=s)},{default:i(()=>[e(P,{class:"custom-shadow custom-border-radius"},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[ao,_(e(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),e(m,{class:"row"},{default:i(()=>[e(h,{outlined:"",class:"col",modelValue:o.sku,"onUpdate:modelValue":t[2]||(t[2]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",no,[e(x,{outlined:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":t[3]||(t[3]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),e(m,{class:"row"},{default:i(()=>[l("div",ro,[e(x,{outlined:"",modelValue:o.model,"onUpdate:modelValue":t[4]||(t[4]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),e(m,null,{default:i(()=>[l("div",uo,[e(h,{outlined:"",modelValue:o.producto,"onUpdate:modelValue":t[5]||(t[5]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(m,null,{default:i(()=>[e(h,{outlined:"",modelValue:o.descripcion,"onUpdate:modelValue":t[6]||(t[6]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",rows:"2",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e(f),e(m,{class:"row"},{default:i(()=>[l("div",co,[e(x,{outlined:"",modelValue:o.modeltax,"onUpdate:modelValue":t[7]||(t[7]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",po,[e(x,{outlined:"",modelValue:o.modelunidad,"onUpdate:modelValue":t[8]||(t[8]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:"",style:{padding:"0 10px"}},null,8,["modelValue","options"])])]),_:1}),e(f),e(m,null,{default:i(()=>[l("div",mo,[e(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":t[9]||(t[9]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":[t[10]||(t[10]=s=>o.costousd=s),o.convertirCosto],label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",ho,[e(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":t[11]||(t[11]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":[t[12]||(t[12]=s=>o.preciousd=s),o.convertirPrecio],label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",fo,[e(h,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":t[13]||(t[13]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":t[14]||(t[14]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(f),e(B,{align:"center"},{default:i(()=>[_(e(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),_(e(b,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check",onClick:o.crear},null,8,["onClick"]),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.editaritem,"onUpdate:modelValue":t[29]||(t[29]=s=>o.editaritem=s)},{default:i(()=>[e(P,{class:"custom-shadow custom-border-radius"},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[go,_(e(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),e(f),e(m,{class:"row"},{default:i(()=>[e(h,{class:"col",outlined:"",modelValue:o.sku,"onUpdate:modelValue":t[16]||(t[16]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",bo,[e(x,{outlined:"",disable:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":t[17]||(t[17]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),e(f),e(m,{class:"row"},{default:i(()=>[l("div",yo,[e(x,{outlined:"",modelValue:o.model,"onUpdate:modelValue":t[18]||(t[18]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),e(f),e(m,null,{default:i(()=>[l("div",vo,[e(h,{outlined:"",modelValue:o.producto,"onUpdate:modelValue":t[19]||(t[19]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(f),e(m,null,{default:i(()=>[e(h,{modelValue:o.descripcion,"onUpdate:modelValue":t[20]||(t[20]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",outlined:"",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e(f),e(m,{class:"row"},{default:i(()=>[l("div",Vo,[e(x,{outlined:"",modelValue:o.modeltax,"onUpdate:modelValue":t[21]||(t[21]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",ko,[e(x,{outlined:"",modelValue:o.modelunidad,"onUpdate:modelValue":t[22]||(t[22]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:""},null,8,["modelValue","options"])])]),_:1}),e(f),e(m,null,{default:i(()=>[l("div",wo,[e(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":t[23]||(t[23]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":[t[24]||(t[24]=s=>o.costousd=s),o.convertirCosto],label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",Co,[e(h,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":t[25]||(t[25]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":[t[26]||(t[26]=s=>o.preciousd=s),o.convertirPrecio],label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",_o,[e(h,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":t[27]||(t[27]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),e(h,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":t[28]||(t[28]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(f),e(B,{align:"center"},{default:i(()=>[_(e(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),_(e(b,{unelevated:"","no-caps":"",label:"Aceptar",color:"primary","icon-right":"check",onClick:o.editar},null,8,["onClick"]),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.buscarsimples,"onUpdate:modelValue":t[32]||(t[32]=s=>o.buscarsimples=s),position:"top",persistent:""},{default:i(()=>[e(P,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[l("div",Uo,[xo,l("span",Po,c(o.productocompuestoedit),1)]),_(e(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),e(f),e(m,{style:{padding:"10px 15px 7px"}},{default:i(()=>[l("div",So,[e(h,{color:"white","bg-color":"primary",rounded:"",standout:"","bottom-slots":"",modelValue:o.textitemsimple,"onUpdate:modelValue":t[31]||(t[31]=s=>o.textitemsimple=s),label:"Nombre o Sku Producto Simple",counter:"",autofocus:""},{prepend:i(()=>[e(z,{name:"search"})]),append:i(()=>[e(z,{name:"close",onClick:t[30]||(t[30]=s=>o.textitemsimple=""),class:"cursor-pointer"})]),hint:i(()=>[p(" Cantidad de letras ")]),_:1},8,["modelValue"])])]),_:1}),e(f),o.buscadoproductosimple?(g(),v(m,{key:0,style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(g(!0),N(F,null,$(o.rowsproductosimple,s=>(g(),v(P,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[e(I,{horizontal:""},{default:i(()=>[e(k,null,{default:i(()=>[e(y,null,{default:i(()=>[p(c(s.producto),1)]),_:2},1024),e(y,null,{default:i(()=>[p("SKU "+c(s.sku),1)]),_:2},1024),e(y,{caption:""},{default:i(()=>[p(c(s.categoria),1)]),_:2},1024)]),_:2},1024),e(k,{side:""},{default:i(()=>[l("div",Io,[e(b,{flat:"",round:"",color:"blue",icon:"add_box",onClick:Q=>o.addproductosimple(s),style:{"font-size":"20px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),e(I,{horizontal:""},{default:i(()=>[e(k,{avatar:"",style:{"padding-right":"15px","align-items":"center"}},{default:i(()=>[e(A,{"text-color":"white",style:D("background: "+o.colorLetra(s.producto))},{default:i(()=>[p(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),e(j,{color:"blue",style:{"margin-top":"5px"}},{default:i(()=>[p(" Bs. "+c(s.precio),1)]),_:2},1024)]),_:2},1024),e(k,{class:"tarjeticainside"},{default:i(()=>[l("div",jo,c(s.descripcion),1),l("div",Qo,[l("div",zo,[No,l("div",Bo,c(s.unidad),1)]),l("div",Eo,[Fo,l("div",$o,c(s.impuesto),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):S("",!0),e(f),e(B,{align:"center"},{default:i(()=>[_(e(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.buscarcompuestos,"onUpdate:modelValue":t[33]||(t[33]=s=>o.buscarcompuestos=s),position:"top",persistent:""},{default:i(()=>[e(P,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px",display:"flex","justify-content":"space-between","align-items":"center"}},{default:i(()=>[l("div",Ao,[Do,l("span",Lo,c(o.productocompuestoedit),1)]),_(e(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),e(f),o.rowsproductocompuesto.length===0?(g(),v(m,{key:0,style:{padding:"10px 15px 7px"}},{default:i(()=>[qo]),_:1})):S("",!0),e(m,{style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(g(!0),N(F,null,$(o.rowsproductocompuesto,s=>(g(),v(P,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[e(I,{horizontal:""},{default:i(()=>[e(k,null,{default:i(()=>[e(y,null,{default:i(()=>[p(c(s.producto),1)]),_:2},1024),e(y,{caption:""},{default:i(()=>[p("SKU "+c(s.sku)+" - "+c(s.categoria),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(I,{horizontal:""},{default:i(()=>[e(k,{class:"tarjeticainside"},{default:i(()=>[l("div",Ko,[l("div",To,[Mo,l("input",{class:"inputCantidad",id:"cantidad"+s.cod,value:s.cantidad,pattern:"^\\d*(\\.\\d{0,2})?$",onInput:Q=>o.calcularMonto(s)},null,40,Ho)]),l("div",Go,[Oo,l("div",Jo,c(s.inventario),1)]),l("div",Ro,[Wo,l("div",Xo,c(s.unidad),1)]),l("div",Yo,[Zo,l("div",{id:"estimado"+s.cod,class:"text-secondary text-center"},c(s.estimado),9,oe)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(f),e(B,{align:"center"},{default:i(()=>[_(e(b,{outline:"","no-caps":"","icon-right":"close",label:"Cancelar",color:"primary"},null,512),[[U]]),e(b,{unelevated:"","no-caps":"",label:"Guardar",color:"primary","icon-right":"check",onClick:o.editarCompuesto},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ce=q(H,[["render",ee]]);export{ce as default};
