import{_ as L,ah as T,r as u,N as v,k as f,aj as b,t as i,m as l,q as e,z as Q,y as p,B as y,l as z,at as A,au as $,al as C,Q as U,x as m,as as h,A as B,a3 as x,av as E,ak as c,ar as g,b2 as K,ax as D,az as F}from"./index.3b4f9f65.js";import{Q as S,C as P}from"./ClosePopup.8cfe35db.js";import{Q as I}from"./QBadge.5d0cec2e.js";import{Q as j,a as w}from"./QItem.7e366283.js";import{Q as _}from"./QSelect.37316759.js";import{Q as M}from"./QPage.091a7120.js";import{a as V}from"./axios.7331a07d.js";import"./format.2b120540.js";const k="https://bckpos.factura-smart.com/",H=T({name:"IndexPage",setup(){return{slide:u(2),inventariocompuesto:u(0),rows:u([]),rowsproductosfiltre:u([]),rowsproductosimple:u([]),rowsproductocompuesto:u([]),textitemsimple:u(""),textitem:u(""),productocompuestoedit:u(""),sku:u(""),producto:u(""),idproducto:u(null),descripcion:u(""),costo:u(0),precio:u(0),costousd:u(0),preciousd:u(0),utilidad:u(0),inventario:u(0),buscaritem:u(!1),buscarsimples:u(!1),buscarcompuestos:u(!1),editaritem:u(!1),model:u(null),options:[],modeltax:u(null),optionstax:[],modelunidad:u(null),modeltipoproducto:u(null),buscadoproducto:u(!0),buscadoproductosimple:u(!0),optionsunidad:u([]),optionstipoproducto:u([])}},methods:{calcularMonto(o){console.log(o.inventario);const t=document.getElementById("cantidad"+o.cod);if(t){const a=t.value>0?t.value:1;console.log(o.inventario,a),document.getElementById("estimado"+o.cod).innerHTML=(o.inventario/a).toFixed(2)}},listar(){this.btndisable=!1;const o=0;V.get(k+"productos/"+sessionStorage.getItem("co_empresa")+"/"+o).then(async t=>{console.log(t.data);const a=t.data.resp;this.rows=[];for(const d in a){const n={};n.cod=a[d].id,n.sku=a[d].sku,n.producto=a[d].producto,n.categoria=a[d].categoria,n.idcategoria=a[d].idcategoria,n.descripcion=a[d].descripcion,n.unidad=a[d].unidad,n.idunidad=a[d].idunidad,n.impuesto=a[d].impuesto,n.idimpuesto=a[d].idimpuesto,n.intipoproducto=a[d].intipoproducto,n.precio=a[d].precio,n.costo=a[d].costo,n.utilidad=a[d].utilidad,n.preciousd=a[d].preciousd,n.costousd=a[d].costousd,n.inventario=Number(a[d].inventario1)||0,this.rows.push(n)}this.rowsproductosfiltre=this.rows,this.rowsproductosimple=this.rows.filter(d=>Number(d.intipoproducto)===1),console.log("this.rowsproductosimple"),console.log(this.rowsproductosimple)}).catch(t=>{v.create("Problemas al listar Categorias "+t)})},openEditarCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto,this.buscarsimples=!0},openAbrirCompuesto(o){console.log(o),this.idproducto=o.cod,this.productocompuestoedit=o.producto;const t={idproducto:o.cod};V.post(k+"productos/getcompuesto",t).then(async a=>{console.log(a.data);const d=a.data.resp;this.rowsproductocompuesto=[],this.minimacantidad=1e6;for(const n in d){const r={};r.cod=d[n].id,r.sku=d[n].sku,r.producto=d[n].producto,r.categoria=d[n].categoria,r.idcategoria=d[n].idcategoria,r.descripcion=d[n].descripcion,r.unidad=d[n].unidad,r.idunidad=d[n].idunidad,r.impuesto=d[n].impuesto,r.idimpuesto=d[n].idimpuesto,r.intipoproducto=d[n].intipoproducto,r.precio=d[n].precio,r.costo=d[n].costo,r.utilidad=d[n].utilidad,r.preciousd=d[n].preciousd,r.costousd=d[n].costousd,r.cantidad=d[n].cantidad,r.inventario=Number(d[n].inventario1)||0,r.estimado=d[n].cantidad>0?(r.inventario/d[n].cantidad).toFixed(2):0,this.rowsproductocompuesto.push(r)}console.log(this.rowsproductocompuesto)}).catch(a=>{v.create("Problemas al listar Productos Compuesto "+a)}),this.buscarcompuestos=!0},addproductosimple(o){console.log(o.idunidad),console.log(o.cod),console.log(this.idproducto);const t={idunidad:o.idunidad,idproductohijo:o.cod,idproductopadre:this.idproducto,cantidad:0};V.post(k+"productos/compuesto",t).then(async a=>{this.modalcrear=!1,v.create(a.data.message),this.buscarsimples=!1,this.listar()}).catch(a=>{v.create("Problemas al Crear Producto Compuesto >>> "+a)})},openEditar(o){console.log(o.intipoproducto),console.log(this.optionstipoproducto),this.editaritem=!0;const t=this.options.find(r=>r.cod===o.idcategoria);this.model=t;const a=this.optionstax.find(r=>r.cod===o.idimpuesto);this.modeltax=a;const d=this.optionsunidad.find(r=>r.cod===o.idunidad);this.modelunidad=d;const n=this.optionstipoproducto.find(r=>r.id===Number(o.intipoproducto));this.modeltipoproducto=n,console.log(n),this.sku=o.sku,this.descripcion=o.descripcion,this.idproducto=o.cod,this.producto=o.producto,this.costo=o.costo,this.inventario=o.inventario,this.precio=o.precio,this.costousd=o.costousd,this.utilidad=o.utilidad,this.preciousd=o.preciousd},openCrear(){this.limpiar(),this.buscaritem=!0},limpiar(){this.model=null,this.modeltax=null,this.modelunidad=null,this.sku="",this.descripcion="",this.producto="",this.costo=0,this.costousd=0,this.inventario="",this.precio=0,this.preciousd=0},async editarCompuesto(){let o=999999999;for(const a in this.rowsproductocompuesto){const d=this.rowsproductocompuesto[a],n=document.getElementById("cantidad"+d.cod).value,r=document.getElementById("estimado"+d.cod).innerHTML;Number(r)<Number(o)&&(o=r);const s={idproductopadre:this.idproducto,idproductohijo:d.cod,cantidad:n};await V.post(k+"productos/updatecompuesto",s)}console.log(parseInt(o));const t={idproducto:this.idproducto,inventario:parseInt(o)};await V.post(k+"productos/updateinventario",t),this.buscarcompuestos=!1,this.listar()},editar(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={id:this.idproducto,idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modelunidad.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo||0,costousd:this.costousd||0,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio,preciousd:this.preciousd};V.post(k+"productos/updateproductos",o).then(async t=>{this.modalcrear=!1,console.log(t.data),v.create(t.data.resp.message),this.listar()})},crear(){if(this.producto.length===0||this.descripcion.length===0||this.precio.length===0||this.preciousd.length===0||this.inventario.length===0)return;const o={idcategoria:this.model.cod,idimpuesto:this.modeltax.cod,idunidad:this.modelunidad.cod,intipoproducto:this.modeltipoproducto.id,descripcion:this.descripcion,producto:this.producto,sku:this.sku,costo:this.costo,costousd:this.costousd,preciousd:this.preciousd,inventario:Number(this.modeltipoproducto.id)===3?0:this.inventario,utilidad:this.utilidad,precio:this.precio};V.post(k+"productos",o).then(async t=>{this.modalcrear=!1,v.create(t.data.message),this.listar()}).catch(t=>{v.create("Problemas al Crear Producto "+t)})},listarCategoria(){V.get(k+"categoria/"+sessionStorage.getItem("co_empresa")).then(async o=>{const t=o.data.resp;this.options=[];for(const a in t){const d={};d.cod=t[a].id,d.categoria=t[a].categoria,d.descripcion=t[a].descripcion,this.options.push(d)}}).catch(o=>{v.create("Problemas al listar Categorias "+o)})},listarImpuesto(){V.get(k+"impuestos").then(async o=>{const t=o.data.resp;this.optionstax=[];for(const a in t){const d={};d.cod=t[a].id,d.impuesto=t[a].impuesto,d.tasa=t[a].tasa,this.optionstax.push(d)}}).catch(o=>{v.create("Problemas al listar Impuestos "+o)})},listarUnidades(){V.get(k+"unidades").then(async o=>{const t=o.data.resp;this.optionsunidad=[];for(const a in t){const d={};d.cod=t[a].id,d.unidad=t[a].unidad,this.optionsunidad.push(d)}}).catch(o=>{v.create("Problemas al listar Unidades "+o)})},primeraletra(o){return o[0]},colorLetra(o){const t=o[0].charCodeAt(0);return"#"+t+"0"},async cargar(){const o=await V.get(k+"configuracion/"+sessionStorage.getItem("co_empresa")).catch(t=>{v.create("Problemas al listar Configuracion "+t)});return console.log(o),o.data.resp}},watch:{textitem(o){console.log("textitem"),console.log(o),this.buscadoproducto=!1,o.length>0?this.rowsproductosfiltre=this.rowsproductosfiltre.filter(t=>!!(t.producto.toUpperCase().includes(o.toUpperCase())||t.sku&&t.sku.includes(o))):this.rowsproductosfiltre=this.rows,this.buscadoproducto=!0},textitemsimple(o){console.log("textitemsimple"),console.log(o),this.buscadoproductosimple=!1,o.length>0?this.rowsproductosimple=this.rowsproductosimple.filter(t=>!!(t.producto.toUpperCase().includes(o.toUpperCase())||t.sku&&t.sku.includes(o))):this.rowsproductosimple=this.rows,this.buscadoproductosimple=!0},costo(){this.costo>0?(this.costousd=(this.costo/this.tasausd).toFixed(2),this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(2)):(this.costousd=0,this.utilidad=0,this.costo=0)},precio(){this.precio>0?(this.preciousd=(this.precio/this.tasausd).toFixed(2),this.costo>0&&(this.utilidad=((this.precio-this.costo)/this.costo*100).toFixed(2))):(this.preciousd=0,this.utilidad=0,this.precio=0)}},async mounted(){const o=await this.cargar();this.tasausd=o.tasabcv,this.listar(),this.listarCategoria(),this.listarImpuesto(),this.listarUnidades();let t={};t.id=1,t.tipoproducto="Simple",this.optionstipoproducto.push(t),t={},t.id=2,t.tipoproducto="Compuesto",this.optionstipoproducto.push(t),t={},t.id=3,t.tipoproducto="Servicio",this.optionstipoproducto.push(t)}}),q={class:"col"},G={class:"botones row",style:{background:"#ededed"}},O={class:"listarproductos row"},J={key:1,class:"puntodeventaconitem col"},R={key:0,class:"row justify-center"},W={style:{display:"flex"}},X={style:{display:"flex"}},Y={style:{display:"flex"}},Z={style:{display:"grid",width:"33%","font-size":"11px","justify-content":"center"}},oo=l("div",{class:"text-center"},"Unidad",-1),to={class:"text-secondary"},eo={style:{display:"grid",width:"33%","font-size":"11px","justify-content":"center"}},so=l("div",{class:"text-center"},"Impuesto.",-1),io={class:"text-secondary"},lo={style:{display:"grid",width:"33%","font-size":"11px","justify-content":"center"}},ao=l("div",{class:"text-center"},"Inventario",-1),no={class:"text-center"},ro=l("div",{class:"text-h6"},"Crear producto",-1),uo={class:"col",style:{padding:"0 10px"}},co={class:"col",style:{padding:"0 10px"}},po={class:""},mo={class:"col"},ho={class:"col"},fo={class:"row"},go={class:"row"},yo={class:"row"},bo=l("div",{class:"text-h6"},"Editar producto",-1),vo={class:"col",style:{padding:"0 10px"}},Vo={class:"col",style:{padding:"0 10px"}},ko={class:""},wo={class:"col"},Co={class:"col"},_o={class:"row"},Uo={class:"row"},xo={class:"row"},So=l("div",{class:"titulobuscar"},"Agregar item al Producto Compuesto",-1),Po={class:"subtitulobuscar"},Io={class:""},jo={style:{display:"flex"}},Qo={style:{display:"flex"}},zo={style:{display:"flex"}},No={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},Bo=l("div",{class:"text-center"},"Unidad",-1),Eo={class:"text-secondary"},Ao={style:{display:"grid",width:"48%","font-size":"11px","justify-content":"center"}},$o=l("div",{class:"text-center"},"Impuesto.",-1),Do={class:"text-secondary"},Fo=l("div",{class:"titulobuscar"},"Editar items del Producto Compuesto",-1),Lo={class:"subtitulobuscar"},To=l("div",{class:"titulonohay"},"No tiene item asignado",-1),Ko={style:{display:"flex"}},Mo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Ho=l("div",{class:"text-center"},"Cantidad",-1),qo=["id","value","onInput"],Go={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Oo=l("div",{class:"text-center"},"Disponible",-1),Jo={class:"text-secondary text-center"},Ro={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Wo=l("div",{class:"text-center"},"Unidad",-1),Xo={class:"text-secondary text-center"},Yo={style:{display:"grid",width:"25%","font-size":"11px","justify-content":"center"}},Zo=l("div",{class:"text-center"},"Estimado",-1),ot=["id"];function tt(o,t,a,d,n,r){return f(),b(M,{class:"bg-white"},{default:i(()=>[l("div",q,[l("div",G,[e(p,{color:"white","bg-color":"primary",rounded:"",standout:"",modelValue:o.textitem,"onUpdate:modelValue":t[1]||(t[1]=s=>o.textitem=s),label:"Nombre o Sku de producto",style:{margin:"5px",width:"310px"},autofocus:""},{prepend:i(()=>[e(Q,{name:"search"})]),append:i(()=>[e(Q,{name:"close",onClick:t[0]||(t[0]=s=>o.textitem=""),class:"cursor-pointer"})]),_:1},8,["modelValue"]),e(y,{color:"secondary",icon:"add_circle",onClick:o.openCrear,label:"Agregar producto",style:{margin:"10px"}},null,8,["onClick"])]),l("div",O,[o.slide===1?(f(),b(Q,{key:0,class:"carritofondo",name:"remove_shopping_cart"})):(f(),z("div",J,[o.buscadoproducto?(f(),z("div",R,[(f(!0),z(A,null,$(o.rowsproductosfiltre,s=>(f(),b(U,{key:s,class:"my-card tarjetaitem col-md-5 col-sm-11 col-xs-11"},{default:i(()=>[e(j,{horizontal:""},{default:i(()=>[e(w,null,{default:i(()=>[e(S,null,{default:i(()=>[g(c(s.sku)+" "+c(s.producto),1)]),_:2},1024),e(S,{caption:""},{default:i(()=>[e(I,{color:s.intipoproducto==="1"?"green":s.intipoproducto==="2"?"orange":"accent",style:{"margin-top":"5px","margin-right":"5px"}},{default:i(()=>[g(c(s.intipoproducto==="1"?"Simple":s.intipoproducto==="2"?"Compuesto":"Servicio"),1)]),_:2},1032,["color"]),g(" "+c(s.categoria),1)]),_:2},1024)]),_:2},1024),e(w,{side:""},{default:i(()=>[l("div",W,[s.intipoproducto==="2"?(f(),b(y,{key:0,dense:"",color:"primary",icon:"dashboard_customize",style:{margin:"3px"},onClick:N=>o.openEditarCompuesto(s)},null,8,["onClick"])):C("",!0),s.intipoproducto==="2"?(f(),b(y,{key:1,dense:"",color:"primary",icon:"inventory_2",style:{margin:"3px"},onClick:N=>o.openAbrirCompuesto(s)},null,8,["onClick"])):C("",!0),x(e(y,{dense:"",color:"primary",icon:"delete",style:{margin:"3px"}},null,512),[[K,!1]]),e(y,{dense:"",color:"primary",icon:"edit",onClick:N=>o.openEditar(s),style:{margin:"3px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),e(j,{horizontal:""},{default:i(()=>[e(w,{avatar:"",style:{"padding-right":"15px","align-items":"center"}},{default:i(()=>[e(D,{"text-color":"white",style:F("background: "+o.colorLetra(s.producto))},{default:i(()=>[g(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),e(I,{color:"secondary",style:{"margin-top":"5px"}},{default:i(()=>[g(" Bs."+c(s.precio),1)]),_:2},1024)]),_:2},1024),e(w,{class:"tarjeticainside"},{default:i(()=>[l("div",X,c(s.descripcion),1),l("div",Y,[l("div",Z,[oo,l("div",to,c(s.unidad),1)]),l("div",eo,[so,l("div",io,c(s.impuesto),1)]),l("div",lo,[ao,l("div",no,[s.inventario>10?(f(),b(I,{key:0,class:"estatusbien"},{default:i(()=>[g(c(s.inventario),1)]),_:2},1024)):C("",!0),s.inventario>0&&s.inventario<=10?(f(),b(I,{key:1,class:"estatusmedio"},{default:i(()=>[g(c(s.inventario),1)]),_:2},1024)):C("",!0),s.inventario===0?(f(),b(I,{key:2,class:"estatusmal"},{default:i(()=>[g(c(s.intipoproducto==="3"?"N/A":0),1)]),_:2},1024)):C("",!0)])])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):C("",!0)]))])]),e(E,{modelValue:o.buscaritem,"onUpdate:modelValue":t[15]||(t[15]=s=>o.buscaritem=s),position:"top"},{default:i(()=>[e(U,null,{default:i(()=>[e(m,null,{default:i(()=>[ro]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[e(p,{class:"col",filled:"",modelValue:o.sku,"onUpdate:modelValue":t[2]||(t[2]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",uo,[e(_,{filled:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":t[3]||(t[3]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[l("div",co,[e(_,{filled:"",modelValue:o.model,"onUpdate:modelValue":t[4]||(t[4]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,null,{default:i(()=>[l("div",po,[e(p,{filled:"",modelValue:o.producto,"onUpdate:modelValue":t[5]||(t[5]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(h),e(m,null,{default:i(()=>[e(p,{modelValue:o.descripcion,"onUpdate:modelValue":t[6]||(t[6]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",filled:"",rows:"2",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[l("div",mo,[e(_,{filled:"",modelValue:o.modeltax,"onUpdate:modelValue":t[7]||(t[7]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",ho,[e(_,{filled:"",modelValue:o.modelunidad,"onUpdate:modelValue":t[8]||(t[8]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,null,{default:i(()=>[l("div",fo,[e(p,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":t[9]||(t[9]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":t[10]||(t[10]=s=>o.costousd=s),label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",go,[e(p,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":t[11]||(t[11]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":t[12]||(t[12]=s=>o.preciousd=s),label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",yo,[e(p,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":t[13]||(t[13]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":t[14]||(t[14]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(h),e(B,{align:"right"},{default:i(()=>[x(e(y,{label:"Cancelar",color:"negative"},null,512),[[P]]),x(e(y,{label:"Aceptar",color:"secondary",onClick:o.crear},null,8,["onClick"]),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.editaritem,"onUpdate:modelValue":t[29]||(t[29]=s=>o.editaritem=s),position:"top"},{default:i(()=>[e(U,null,{default:i(()=>[e(m,null,{default:i(()=>[bo]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[e(p,{class:"col",filled:"",modelValue:o.sku,"onUpdate:modelValue":t[16]||(t[16]=s=>o.sku=s),label:"SKU","stack-label":"",dense:""},null,8,["modelValue"]),l("div",vo,[e(_,{filled:"",disable:"",modelValue:o.modeltipoproducto,"onUpdate:modelValue":t[17]||(t[17]=s=>o.modeltipoproducto=s),options:o.optionstipoproducto,"option-label":"tipoproducto","option-value":"id",label:"Seleccione tipo",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[l("div",Vo,[e(_,{filled:"",modelValue:o.model,"onUpdate:modelValue":t[18]||(t[18]=s=>o.model=s),options:o.options,"option-label":"categoria","option-value":"cod",label:"Seleccione categor\xEDa",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,null,{default:i(()=>[l("div",ko,[e(p,{filled:"",modelValue:o.producto,"onUpdate:modelValue":t[19]||(t[19]=s=>o.producto=s),label:"Producto","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(h),e(m,null,{default:i(()=>[e(p,{modelValue:o.descripcion,"onUpdate:modelValue":t[20]||(t[20]=s=>o.descripcion=s),label:"Descripci\xF3n de producto",filled:"",dense:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e(h),e(m,{class:"row"},{default:i(()=>[l("div",wo,[e(_,{filled:"",modelValue:o.modeltax,"onUpdate:modelValue":t[21]||(t[21]=s=>o.modeltax=s),options:o.optionstax,"option-label":"impuesto","option-value":"cod",label:"Elija impuesto",dense:""},null,8,["modelValue","options"])]),l("div",Co,[e(_,{filled:"",modelValue:o.modelunidad,"onUpdate:modelValue":t[22]||(t[22]=s=>o.modelunidad=s),options:o.optionsunidad,"option-label":"unidad","option-value":"cod",label:"Elija unidad",dense:""},null,8,["modelValue","options"])])]),_:1}),e(h),e(m,null,{default:i(()=>[l("div",_o,[e(p,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.costo,"onUpdate:modelValue":t[23]||(t[23]=s=>o.costo=s),label:"Costo Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.costousd,"onUpdate:modelValue":t[24]||(t[24]=s=>o.costousd=s),label:"Costo USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",Uo,[e(p,{style:{"margin-right":"5px"},type:"number",min:"0",class:"col",filled:"",modelValue:o.precio,"onUpdate:modelValue":t[25]||(t[25]=s=>o.precio=s),label:"Precio Bs.","stack-label":"",dense:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.preciousd,"onUpdate:modelValue":t[26]||(t[26]=s=>o.preciousd=s),label:"Precio USD","stack-label":"",dense:""},null,8,["modelValue"])]),l("div",xo,[e(p,{style:{"margin-right":"5px"},class:"col",filled:"",modelValue:o.utilidad,"onUpdate:modelValue":t[27]||(t[27]=s=>o.utilidad=s),label:"Utilidad %","stack-label":"",dense:"",readonly:""},null,8,["modelValue"]),e(p,{style:{"margin-left":"5px"},class:"col",filled:"",modelValue:o.inventario,"onUpdate:modelValue":t[28]||(t[28]=s=>o.inventario=s),label:"Inventario","stack-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(h),e(B,{align:"right"},{default:i(()=>[x(e(y,{label:"Cancelar",color:"negative"},null,512),[[P]]),x(e(y,{label:"Aceptar",color:"secondary",onClick:o.editar},null,8,["onClick"]),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.buscarsimples,"onUpdate:modelValue":t[32]||(t[32]=s=>o.buscarsimples=s),position:"top",persistent:""},{default:i(()=>[e(U,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px"}},{default:i(()=>[So,l("div",Po,c(o.productocompuestoedit),1)]),_:1}),e(h),e(m,{style:{padding:"10px 15px 7px"}},{default:i(()=>[l("div",Io,[e(p,{color:"white","bg-color":"primary",rounded:"",standout:"","bottom-slots":"",modelValue:o.textitemsimple,"onUpdate:modelValue":t[31]||(t[31]=s=>o.textitemsimple=s),label:"Nombre o Sku Producto Simple",counter:"",autofocus:""},{prepend:i(()=>[e(Q,{name:"search"})]),append:i(()=>[e(Q,{name:"close",onClick:t[30]||(t[30]=s=>o.textitemsimple=""),class:"cursor-pointer"})]),hint:i(()=>[g(" Cantidad de letras ")]),_:1},8,["modelValue"])])]),_:1}),e(h),o.buscadoproductosimple?(f(),b(m,{key:0,style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(f(!0),z(A,null,$(o.rowsproductosimple,s=>(f(),b(U,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[e(j,{horizontal:""},{default:i(()=>[e(w,null,{default:i(()=>[e(S,null,{default:i(()=>[g(c(s.producto),1)]),_:2},1024),e(S,null,{default:i(()=>[g("SKU "+c(s.sku),1)]),_:2},1024),e(S,{caption:""},{default:i(()=>[g(c(s.categoria),1)]),_:2},1024)]),_:2},1024),e(w,{side:""},{default:i(()=>[l("div",jo,[e(y,{flat:"",round:"",color:"blue",icon:"add_box",onClick:N=>o.addproductosimple(s),style:{"font-size":"20px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),e(j,{horizontal:""},{default:i(()=>[e(w,{avatar:"",style:{"padding-right":"15px","align-items":"center"}},{default:i(()=>[e(D,{"text-color":"white",style:F("background: "+o.colorLetra(s.producto))},{default:i(()=>[g(c(o.primeraletra(s.producto)),1)]),_:2},1032,["style"]),e(I,{color:"blue",style:{"margin-top":"5px"}},{default:i(()=>[g(" Bs. "+c(s.precio),1)]),_:2},1024)]),_:2},1024),e(w,{class:"tarjeticainside"},{default:i(()=>[l("div",Qo,c(s.descripcion),1),l("div",zo,[l("div",No,[Bo,l("div",Eo,c(s.unidad),1)]),l("div",Ao,[$o,l("div",Do,c(s.impuesto),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):C("",!0),e(h),e(B,{align:"right"},{default:i(()=>[x(e(y,{label:"Cerrar",color:"negative"},null,512),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(E,{modelValue:o.buscarcompuestos,"onUpdate:modelValue":t[33]||(t[33]=s=>o.buscarcompuestos=s),position:"top",persistent:""},{default:i(()=>[e(U,{style:{background:"#ddd",width:"350px"}},{default:i(()=>[e(m,{style:{padding:"10px 15px 7px"}},{default:i(()=>[Fo,l("div",Lo,c(o.productocompuestoedit),1)]),_:1}),e(h),o.rowsproductocompuesto.length===0?(f(),b(m,{key:0,style:{padding:"10px 15px 7px"}},{default:i(()=>[To]),_:1})):C("",!0),e(m,{style:{"max-height":"64vh"},class:"scroll"},{default:i(()=>[(f(!0),z(A,null,$(o.rowsproductocompuesto,s=>(f(),b(U,{key:s.id,class:"my-card tarjetaitem"},{default:i(()=>[e(j,{horizontal:""},{default:i(()=>[e(w,null,{default:i(()=>[e(S,null,{default:i(()=>[g(c(s.producto),1)]),_:2},1024),e(S,{caption:""},{default:i(()=>[g("SKU "+c(s.sku)+" - "+c(s.categoria),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(j,{horizontal:""},{default:i(()=>[e(w,{class:"tarjeticainside"},{default:i(()=>[l("div",Ko,[l("div",Mo,[Ho,l("input",{class:"inputCantidad",id:"cantidad"+s.cod,value:s.cantidad,pattern:"^\\d*(\\.\\d{0,2})?$",onInput:N=>o.calcularMonto(s)},null,40,qo)]),l("div",Go,[Oo,l("div",Jo,c(s.inventario),1)]),l("div",Ro,[Wo,l("div",Xo,c(s.unidad),1)]),l("div",Yo,[Zo,l("div",{id:"estimado"+s.cod,class:"text-secondary text-center"},c(s.estimado),9,ot)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(h),e(B,{align:"right"},{default:i(()=>[x(e(y,{label:"Cerrar",color:"negative"},null,512),[[P]]),e(y,{label:"Guardar",color:"primary",onClick:o.editarCompuesto},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ut=L(H,[["render",tt]]);export{ut as default};