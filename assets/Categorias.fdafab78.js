import{_ as I,al as A,r as c,N as v,k as d,l as p,w as t,q as s,m as e,B as l,aw as w,ax as B,ay as N,Q as C,x as m,ab as g,C as f,y as Q,z as h,A as S,az as D,aB as P,aE as j,F as k,an as _}from"./index.27454c76.js";import{Q as z}from"./QImg.bb932eda.js";import{Q as y,a as i}from"./QItem.92811588.js";import{Q as $,C as b}from"./ClosePopup.1b9ca989.js";import{Q as L}from"./QPage.8ccd4f1a.js";import{a as x}from"./axios.7331a07d.js";const V="https://posapi-test.factura-smart.com/",E=A({name:"IndexPage",setup(){return{rows:c([]),slide:c(2),categoria:c(""),descripcion:c(""),buscaritem:c(!1)}},methods:{listar(){this.btndisable=!1,x.get(V+"categoria/"+sessionStorage.getItem("co_empresa")).then(async a=>{console.log(a.data);const o=a.data.resp;this.rows=[];for(const u in o){const n={};n.cod=o[u].id,n.categoria=o[u].categoria,n.descripcion=o[u].descripcion,this.rows.push(n)}console.log(this.rows)}).catch(a=>{v.create("Problemas al listar Categorias "+a)})},crear(){if(this.categoria.length===0||this.descripcion.length===0)return;const a={categoria:this.categoria,descripcion:this.descripcion,idempresa:sessionStorage.getItem("co_empresa")};console.log(a),x.post(V+"categoria",a).then(async o=>{this.modalcrear=!1,console.log(o.data),v.create(o.data.message),this.listar()})},primeraletra(a){return a[0]},colorLetra(a){const o=a[0].charCodeAt(0);return"#"+o+"0"}},mounted(){console.log("Modo producci\xF3n"),this.listar()}}),F={class:"col"},T=s("div",{class:"botones row fondo-gris shadow-up-9"},[s("h6",{class:"p-2"},"Categor\xEDas")],-1),U={class:"listarcategorias row",style:{"margin-top":"20px"}},q={class:"listarcategorias row"},H={key:1,class:"listarcategoriasconitem col"},M={class:"row justify-center"},O={class:"text-h6"},G={class:"text-h6 color-texto ml-2"},J={style:{display:"flex"}},K=s("div",{class:"text-center"},[s("h6",null,"Crear categor\xEDa")],-1),R={class:""};function W(a,o,u,n,X,Y){return d(),p(L,{class:"row"},{default:t(()=>[s("div",F,[T,s("div",U,[e(l,{"no-caps":"",unelevated:"",dense:"",class:"gradient-btn","icon-right":"add_circle",onClick:o[0]||(o[0]=r=>a.buscaritem=!0),label:"Agregar categoria",style:{margin:"10px"}})]),s("div",q,[a.slide===1?(d(),p(z,{key:0,src:"img/sin-productos.png",style:{width:"35%",height:"auto",display:"block",margin:"auto"},fit:"contain"})):(d(),w("div",H,[s("div",M,[(d(!0),w(B,null,N(a.rows,r=>(d(),p(C,{key:r,class:"my-card tarjetaitem col-md-5 col-sm-11 col-xs-11 custom-shadow custom-border-radius",bordered:""},{default:t(()=>[e(y,{horizontal:""},{default:t(()=>[e(i,null,{default:t(()=>[s("div",O,[e(P,{"text-color":"white",style:j("background: "+a.colorLetra(r.categoria))},{default:t(()=>[k(_(a.primeraletra(r.categoria)),1)]),_:2},1032,["style"]),s("span",G,_(r.categoria),1)])]),_:2},1024),e(i,{side:""},{default:t(()=>[s("div",J,[e(l,{round:"",unelevated:"",color:"red-1","text-color":"red-10",icon:"delete",style:{"margin-right":"10px"}}),e(l,{round:"",unelevated:"",color:"orange-1","text-color":"orange-10",icon:"edit"})])]),_:1})]),_:2},1024),e(y,{horizontal:""},{default:t(()=>[e(i,{avatar:"",style:{"padding-right":"15px","align-items":"center"}}),e(i,{class:"tarjeticainside"},{default:t(()=>[e(y,null,{default:t(()=>[e(i,{avatar:""},{default:t(()=>[e(h,{name:"description",color:"grey-7"})]),_:1}),e(i,null,{default:t(()=>[e($,{caption:""},{default:t(()=>[k("Descripci\xF3n:")]),_:1}),s("p",null,_(r.descripcion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]))])]),e(D,{modelValue:a.buscaritem,"onUpdate:modelValue":o[3]||(o[3]=r=>a.buscaritem=r)},{default:t(()=>[e(C,{class:"q-pa-lg custom-shadow custom-border-radius"},{default:t(()=>[e(m,{style:{display:"flex","justify-content":"space-between","align-items":"center"}},{default:t(()=>[K,g(e(l,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])]),_:1}),e(f),e(m,null,{default:t(()=>[s("div",R,[e(Q,{outlined:"",modelValue:a.categoria,"onUpdate:modelValue":o[1]||(o[1]=r=>a.categoria=r),label:"Categor\xEDa","stack-label":""},{prepend:t(()=>[e(h,{name:"collections_bookmark"})]),_:1},8,["modelValue"])])]),_:1}),e(f),e(m,null,{default:t(()=>[e(Q,{outlined:"",modelValue:a.descripcion,"onUpdate:modelValue":o[2]||(o[2]=r=>a.descripcion=r),label:"Descripci\xF3n",filled:"",type:"textarea"},{prepend:t(()=>[e(h,{name:"description"})]),_:1},8,["modelValue"])]),_:1}),e(f),e(S,{align:"center "},{default:t(()=>[g(e(l,{outline:"","no-caps":"",label:"Cancelar","icon-right":"close",color:"primary"},null,512),[[b]]),g(e(l,{unelevated:"","no-caps":"",label:"Aceptar (F4)",color:"primary","icon-right":"check",onClick:a.crear},null,8,["onClick"]),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var re=I(E,[["render",W]]);export{re as default};
