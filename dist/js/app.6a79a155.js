(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"08ae":function(t,e,a){},1499:function(t,e,a){"use strict";a("43a8")},1708:function(t,e,a){"use strict";a("18e5")},"18e5":function(t,e,a){},"19cd":function(t,e,a){"use strict";a("19f5")},"19f5":function(t,e,a){},"1dd7":function(t,e,a){"use strict";a("67da")},"43a8":function(t,e,a){},"48c9":function(t,e,a){"use strict";a("9e6f")},"50f6":function(t,e,a){"use strict";a("08ae")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},["Login"!=this.$router.currentRoute.name?a("Menu"):t._e(),a("router-view"),"Login"!=this.$router.currentRoute.name?a("Footer"):t._e()],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand text-white",attrs:{href:"#"}},[t._v("PET")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-item text-white nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-item text-white nav-link",attrs:{to:"/gerenciamento-de-pets"}},[t._v("Pets")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-item text-white  nav-link",attrs:{to:"/gerenciamento-de-usuarios"}},[t._v("Usuarios")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-item text-white nav-link",attrs:{to:"/gerenciamento-de-adotantes"}},[t._v("Adotantes")])],1)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=(a("d3b7"),a("bc3a")),l=a.n(c),u=(a("e9c4"),a("d4ec")),d=a("bee2"),m=(a("b0c0"),function(){function t(e){Object(u["a"])(this,t),e=e||{},this.id=e.id,this.name=e.name,this.email=e.email,this.password=e.password}return Object(d["a"])(t,[{key:"modeloValidoLogin",value:function(){return!(!this.email||!this.password)}},{key:"modelValidForRegistration",value:function(){return!!this.name}},{key:"modelValidToUpdate",value:function(){return!(!this.id||!this.name)}}]),t}());function p(t){var e=JSON.stringify(t);localStorage.setItem("usuario",e)}function f(){var t=localStorage.getItem("usuario");return new m(JSON.parse(t))}function v(t){localStorage.setItem("token",t)}function h(){return localStorage.getItem("token")}function g(){localStorage.removeItem("token")}function b(){localStorage.removeItem("usuario")}var C={salvarUsuarioNaStorage:p,obterUsuarioNaStorage:f,salvarTokenNaStorage:v,obterTokenNaStorage:h,removerTokenNaStorage:g,removerUsuarioNaStorage:b},_=l.a.create({baseURL:"localhost:3000"});_.interceptors.request.use((function(t){var e=C.obterTokenNaStorage();return t.headers.Authorization=e,t}));var w=_;function A(t,e){return new Promise((function(a,o){return w.post("/login",{email:t,password:e}).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function x(t){return new Promise((function(e,a){return w.post("/users",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function y(){return new Promise((function(t,e){return w.delete("/logout").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}function k(t){return new Promise((function(e,a){return w.get("/users/".concat(t)).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}var $={login:A,logout:y,getById:k,register:x},P={name:"Menu",data:function(){return{}},methods:{logout:function(){var t=this;$.logout().then((function(){C.removerUsuarioNaStorage(),C.removerTokenNaStorage(),t.$router.push({path:"/login"})})).catch((function(t){console.log(t)}))}}},E=P,N=(a("1708"),a("2877")),B=Object(N["a"])(E,i,s,!1,null,"015229e7",null),S=B.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-center text-white",staticStyle:{"background-color":"#f1f1f1"}},[a("div",{staticClass:"container pt-4"},[a("section",{staticClass:"mb-4"},[a("a",{staticClass:"btn btn-link btn-floating btn-lg text-dark m-1",attrs:{href:"#!",role:"button","data-mdb-ripple-color":"dark"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"btn btn-link btn-floating btn-lg text-dark m-1",attrs:{href:"#!",role:"button","data-mdb-ripple-color":"dark"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"btn btn-link btn-floating btn-lg text-dark m-1",attrs:{href:"#!",role:"button","data-mdb-ripple-color":"dark"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{staticClass:"btn btn-link btn-floating btn-lg text-dark m-1",attrs:{href:"#!",role:"button","data-mdb-ripple-color":"dark"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{staticClass:"btn btn-link btn-floating btn-lg text-dark m-1",attrs:{href:"https://github.com/FernandodotDEV",role:"button","data-mdb-ripple-color":"dark"}},[a("i",{staticClass:"fab fa-github"})])])]),a("div",{staticClass:"text-center text-dark p-3",staticStyle:{"background-color":"rgba(0, 0, 0, 0.2)"}},[t._v(" © 2022 Copyright: All rights reserved "),a("a",{staticClass:"text-dark",attrs:{href:"https://github.com/FernandodotDEV"}},[t._v("FernandodotDEV")])])])}],I={name:"Footer",data:function(){return{}},methods:{}},T=I,F=Object(N["a"])(T,O,j,!1,null,"1cf59f46",null),U=F.exports,M={components:{Menu:S,Footer:U}},z=M,D=(a("034f"),Object(N["a"])(z,n,r,!1,null,null,null)),V=D.exports,q=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-login"},[t._m(0),a("Input",{attrs:{label:"E-mail",placeHolder:"exemplo@exemplo.com"},model:{value:t.usuario.email,callback:function(e){t.$set(t.usuario,"email",e)},expression:"usuario.email"}}),a("Input",{attrs:{label:"Senha",type:"password",placeHolder:"******"},model:{value:t.usuario.password,callback:function(e){t.$set(t.usuario,"password",e)},expression:"usuario.password"}}),a("Button",{attrs:{value:"Entrar",callback:t.login}})],1)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("h1",[t._v("Login")])])}],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{attrs:{for:""}},[t._v(" "+t._s(t.label))]),t._v(" "),a("br"),"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.valor,expression:"valor"}],attrs:{placeholder:t.placeHolder,type:"checkbox"},domProps:{checked:Array.isArray(t.valor)?t._i(t.valor,null)>-1:t.valor},on:{change:function(e){var a=t.valor,o=e.target,n=!!o.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);o.checked?i<0&&(t.valor=a.concat([r])):i>-1&&(t.valor=a.slice(0,i).concat(a.slice(i+1)))}else t.valor=n}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.valor,expression:"valor"}],attrs:{placeholder:t.placeHolder,type:"radio"},domProps:{checked:t._q(t.valor,null)},on:{change:function(e){t.valor=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.valor,expression:"valor"}],attrs:{placeholder:t.placeHolder,type:t.type},domProps:{value:t.valor},on:{input:function(e){e.target.composing||(t.valor=e.target.value)}}})])},J=[],G={name:"Input",model:{prop:"value",event:"onChange"},props:{label:{type:String,default:""},type:{type:String,default:"text"},placeHolder:{type:String,default:""},value:{type:String,default:""}},data:function(){return{valor:this.value}},watch:{valor:function(){this.$emit("onChange",this.valor)}}},Q=G,K=(a("a960"),Object(N["a"])(Q,R,J,!1,null,"0f5c173f",null)),W=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"d-md-block",on:{click:t.callback}},[t._v(" "+t._s(t.value))])])},Y=[],Z={name:"Button",props:{value:{type:String,default:""},callback:{type:Function,default:function(){}}}},tt=Z,et=(a("1499"),Object(N["a"])(tt,X,Y,!1,null,"a8253442",null)),at=et.exports,ot={name:"Login",components:{Input:W,Button:at},data:function(){return{usuario:new m}},methods:{recebendoValor:function(t){alert(t)},login:function(){var t=this;this.usuario.modeloValidoLogin()?$.login(this.usuario.email,this.usuario.password).then((function(e){t.usuario=new m(e.data.usuario),C.salvarUsuarioNaStorage(t.usuario),C.salvarTokenNaStorage(e.data.token),t.$router.push({name:"PetController"})})).catch((function(t){console.log(t)})):this.$swal({icon:"warning",title:"Email e senha são obrigatórios.",confirmButtonColor:"#0039A8",animate:!0})}}},nt=ot,rt=(a("d6db"),Object(N["a"])(nt,H,L,!1,null,null,null)),it=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cols-1 row-cols-md-3 g-3"},t._l(t.pets,(function(e){return a("div",{key:e.id,staticClass:"col"},[a("div",{staticClass:"card"},[a("router-link",{attrs:{to:"/gerenciamento-de-adotantes/novo"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.logo,alt:"",height:"200",width:"200"}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-center"},[t._v(t._s(e.name))]),a("p",{staticClass:"text text-center"},[t._v(t._s(e.species)+" | "+t._s(e.sex)+" | "+t._s(e.age)+" | Porte: "+t._s(e.size))])]),a("div",{staticClass:"link text-center"},[a("router-link",{attrs:{to:"/gerenciamento-de-adotantes/novo"}},[a("p",[t._v("ADOTE")])])],1)],1)])})),0)])])])},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid hero-image"},[a("div",{staticClass:"hero-text col-xs-12 col-sm-12 col-md-8 col-lg-6"},[a("h2",[a("strong",[t._v("Amigo não se compra")])]),a("strong",[a("p",{staticClass:"text-justify"},[t._v("A adoção é um ato de amor e responsabilidade. Para adotar, basta se comprometer com um bichinho que dependerá sempre de você, cuidar dele, dar afeto e um lar seguro. O amor é uma obrigação para adotar um coração. ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("strong",[a("h2",[t._v("Adote um amigo")])]),a("p",{staticClass:"text-justify"},[t._v(" Adotar é salvar vidas! Ter um animalzinho de estimação é ter uma amizade verdadeira e leal. Animais conseguem nos amar com pureza e livre de julgamentos, mesmo nos momentos mais difíceis. Adotar um animal é adotar um amigo! ")])])])])}];a("99af"),a("c740"),a("a434"),a("d81d");function lt(){return new Promise((function(t,e){return w.get("/dogs").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}function ut(t){return new Promise((function(e,a){return w.get("/dogs/".concat(t)).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function dt(t){return new Promise((function(e,a){return w.post("/dogs",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function mt(t){return new Promise((function(e,a){return w.put("/dogs/".concat(t.id),t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function pt(t){return new Promise((function(e,a){return w.delete("/dogs/".concat(t)).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}var ft={getAll:lt,getById:ut,register:dt,update:mt,remove:pt},vt=function(){function t(e){Object(u["a"])(this,t),e=e||{},this.id=e.id,this.name=e.name,this.species=e.species,this.sex=e.sex,this.age=e.age,this.size=e.size,this.logo=e.logo}return Object(d["a"])(t,[{key:"modelValidForRegistration",value:function(){return!!this.name}},{key:"modelValidToUpdate",value:function(){return!(!this.id||!this.name)}}]),t}(),ht={data:function(){return{pets:[]}},mounted:function(){this.getAllPets()},methods:{editPets:function(t){this.$router.push({name:"EditPet",params:{id:t.id}})},removePet:function(t){var e=this;this.$swal({icon:"question",title:"Deseja excluir o pet?",text:"Código: ".concat(t.id," - Nome: ").concat(t.name),showCancelButton:!0,confirmButtonColor:"#0039A8",confirmButtonText:"Sim",cancelButtonText:"Não",animate:!0}).then((function(a){a.isConfirmed&&ft.remove(t.id).then((function(){var a=e.pets.findIndex((function(e){return e.id==t.id}));e.pets.splice(a,1),e.$swal({icon:"success",title:"Pet deletado com sucesso!",confirmButtonColor:"#0039A8",animate:!0})})).catch((function(t){console.log(t)}))}))},orderPets:function(t,e){return t.id<e.id?-1:t.id>e.id?1:0},getAllPets:function(){var t=this;ft.getAll().then((function(e){var a=e.data.map((function(t){return new vt(t)}));t.pets=a.reverse()})).catch((function(t){console.log(t)}))}}},gt=ht,bt={name:"Dashboard",mixins:[gt],components:{},data:function(){return{}}},Ct=bt,_t=(a("19cd"),Object(N["a"])(Ct,st,ct,!1,null,null,null)),wt=_t.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-register"},[t._m(0),a("Input",{attrs:{label:"Nome",placeHolder:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("Input",{attrs:{label:"E-mail",placeHolder:"exemplo@exemplo.com"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("Input",{attrs:{label:"Senha",placeHolder:"******",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("button",{staticClass:"btn btn-default float-right",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v(" Cancelar ")]),a("button",{staticClass:"btn btn-primary float-right mr-2",attrs:{type:"button"},on:{click:t.save}},[t._v(" Salvar ")])],1)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("h1",[t._v("Cadastrar")])])}],yt={name:"UserForm",components:{Input:W},data:function(){return{user:new m,registrationMode:!0,continueAdding:!1}},mounted:function(){var t=this.$route.params.id;t&&(this.registrationMode=!1,this.getProductById(t))},methods:{cancelAction:function(){this.user=new m,this.$router.push({name:"Dashboard"})},registerUser:function(){var t=this;this.user.modelValidForRegistration()?$.register(this.user).then((function(){t.$swal({icon:"success",title:"Usuario cadastrado com sucesso!",confirmButtonColor:"#0039A8",animate:!0}),t.user=new m,t.continueAdding||t.$router.push({name:"Dashboard"})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Não foi possível cadastrar o Usuario",confirmButtonColor:"#0039A8",animate:!0})})):this.$swal({icon:"warning",title:"O nome do usuario é obrigatório para o cadastro.",confirmButtonColor:"#0039A8",animate:!0})},save:function(){this.registerUser()}}},kt=yt,$t=(a("a7bd"),Object(N["a"])(kt,At,xt,!1,null,"6c60b906",null)),Pt=$t.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"subcontainer row sub-cointainer"},[a("div",{staticClass:"col-sm-2"},[a("Button",{attrs:{callback:t.addPet,value:"Adicionar"}})],1),a("div",{staticClass:"col-sm-8"},[a("a",{staticClass:"float-end ver-em-cards",on:{click:t.seePetsInCards}},[t._v(" Home ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"table-responsive col-sm-11"},[a("table",{staticClass:"table table-hover table-borderless "},[t._m(1),a("tbody",t._l(t.pets,(function(e){return a("tr",{key:e.id},[a("td",[a("img",{staticClass:"img-responsive rounded-pill",attrs:{src:e.logo,alt:"",height:"40",width:"60"}})]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.species))]),a("td",[t._v(t._s(e.sex))]),a("td",[t._v(t._s(e.age))]),a("td",[t._v(t._s(e.size))]),a("td",[a("i",{staticClass:"fas fa-pencil-alt edit",on:{click:function(a){return t.editPets(e)}}}),a("i",{staticClass:"fas fa-trash-alt remove",on:{click:function(a){return t.removePet(e)}}})])])})),0)])])])])},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"title col-sm-10"},[a("h2",{staticClass:"title00"},[t._v("Pets")]),a("hr")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Logo")]),a("th",[t._v("Nome")]),a("th",[t._v("Espécie")]),a("th",[t._v("Sexo")]),a("th",[t._v("Idade")]),a("th",[t._v("Tamanho")]),a("th",[t._v("Ações")]),a("th")])])}],Bt={name:"PetController",mixins:[gt],components:{Button:at},data:function(){return{}},methods:{seePetsInCards:function(){this.$router.push({name:"Dashboard"})},addPet:function(){this.$router.push({name:"NewPet"})}}},St=Bt,Ot=(a("48c9"),Object(N["a"])(St,Et,Nt,!1,null,"8a06f75c",null)),jt=Ot.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"subcontainer row sub-cointainer"},[a("div",{staticClass:"col-sm-2"},[a("Button",{attrs:{callback:t.addAdopter,value:"Adicionar"}})],1),a("div",{staticClass:"col-sm-8"},[a("a",{staticClass:"float-end ver-em-cards",on:{click:t.seeAdopInCards}},[t._v(" Home ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"table-responsive col-sm-11"},[a("table",{staticClass:"table table-hover table-borderless "},[t._m(1),a("tbody",t._l(t.adopters,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.telephone))]),a("td",[t._v(t._s(e.description))]),a("td",[a("i",{staticClass:"fas fa-pencil-alt edit",on:{click:function(a){return t.editAdopters(e)}}}),a("i",{staticClass:"fas fa-trash-alt remove",on:{click:function(a){return t.removeAdopters(e)}}})])])})),0)])])])])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"title col-sm-10"},[a("h2",{staticClass:"title"},[t._v("Adotantes")]),a("hr")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Nome")]),a("th",[t._v("Email")]),a("th",[t._v("Telefone")]),a("th",[t._v("Pet")]),a("th")])])}];function Ft(){return new Promise((function(t,e){return w.get("/adopters").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}function Ut(t){return new Promise((function(e,a){return w.get("/adopters/".concat(t)).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function Mt(t){return new Promise((function(e,a){return w.post("/adopters",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function zt(t){return new Promise((function(e,a){return w.put("/adopters/".concat(t.id),t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function Dt(t){return new Promise((function(e,a){return w.delete("/adopters/".concat(t)).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}var Vt={getAll:Ft,getById:Ut,register:Mt,update:zt,remove:Dt},qt=(a("a4d3"),a("e01a"),function(){function t(e){Object(u["a"])(this,t),e=e||{},this.id=e.id,this.name=e.name,this.email=e.email,this.telephone=e.telephone,this.description=e.description}return Object(d["a"])(t,[{key:"modelValidForRegistration",value:function(){return!!this.name}},{key:"modelValidToUpdate",value:function(){return!(!this.id||!this.name)}}]),t}()),Ht={data:function(){return{adopters:[]}},mounted:function(){this.gettAllAdopters()},methods:{editAdopters:function(t){this.$router.push({name:"EditAdopter",params:{id:t.id}})},removeAdopters:function(t){var e=this;this.$swal({icon:"question",title:"Deseja excluir o adotante?",text:"Código: ".concat(t.id," - Nome: ").concat(t.name),showCancelButton:!0,confirmButtonColor:"#0039A8",confirmButtonText:"Sim",cancelButtonText:"Não",animate:!0}).then((function(a){a.isConfirmed&&Vt.remove(t.id).then((function(){var a=e.adopters.findIndex((function(e){return e.id==t.id}));e.adopters.splice(a,1),e.$swal({icon:"success",title:"Adotante deletado com sucesso!",confirmButtonColor:"#0039A8",animate:!0})})).catch((function(t){console.log(t)}))}))},orderAdopter:function(t,e){return t.id<e.id?-1:t.id>e.id?1:0},gettAllAdopters:function(){var t=this;Vt.getAll().then((function(e){var a=e.data.map((function(t){return new qt(t)}));t.adopters=a.reverse()})).catch((function(t){console.log(t)}))}}},Lt=Ht,Rt={name:"AdopterController",mixins:[Lt],components:{Button:at},data:function(){return{}},methods:{seeAdopInCards:function(){this.$router.push({name:"Dashboard"})},addAdopter:function(){this.$router.push({name:"NewAdopter"})}}},Jt=Rt,Gt=(a("6917"),Object(N["a"])(Jt,It,Tt,!1,null,"1b99bf08",null)),Qt=Gt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container col-sm-5 "},[a("div",{staticClass:"row "},[a("div",{staticClass:"col-sm-10"},[a("h1",{staticClass:"titulo"},[t._v(t._s(t.registrationMode?"Adicionar":"Editar")+" Pet")]),a("hr")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"id"}},[t._v("Código")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pet.id,expression:"pet.id"}],staticClass:"form-control",attrs:{id:"id",type:"text",disabled:""},domProps:{value:t.pet.id},on:{input:function(e){e.target.composing||t.$set(t.pet,"id",e.target.value)}}})])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pet.name,expression:"pet.name"}],staticClass:"form-control",attrs:{id:"name",type:"text"},domProps:{value:t.pet.name},on:{input:function(e){e.target.composing||t.$set(t.pet,"name",e.target.value)}}})])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"species"}},[t._v("Especies")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pet.species,expression:"pet.species"}],staticClass:"form-control",attrs:{id:"size"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pet,"species",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Cachorro")]),a("option",[t._v("Gato")])])])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"sex"}},[t._v("Sexo")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pet.sex,expression:"pet.sex"}],staticClass:"form-control",attrs:{id:"size"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pet,"sex",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Masculino")]),a("option",[t._v("Feminino")])])])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"age"}},[t._v("Idade")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pet.age,expression:"pet.age"}],staticClass:"form-control",attrs:{id:"size"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pet,"age",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Adulto")]),a("option",[t._v("Filhote")])])])]),a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"size"}},[t._v("Tamanho")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pet.size,expression:"pet.size"}],staticClass:"form-control",attrs:{id:"size"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pet,"size",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Grande")]),a("option",[t._v("Médio")]),a("option",[t._v("Pequeno")])])])]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"fas fa-cloud-upload-alt",attrs:{for:"image"}},[t._v("Upload")]),a("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:t.onFileChange}})])]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}}),a("img",{staticClass:"img-responsive",attrs:{src:t.pet.logo,height:"100",width:"100"}})])])]),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-sm-10"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.registrationMode,expression:"registrationMode"}],staticClass:"form-check-inline"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.continueAdding,expression:"continueAdding"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.continueAdding)?t._i(t.continueAdding,null)>-1:t.continueAdding},on:{change:function(e){var a=t.continueAdding,o=e.target,n=!!o.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);o.checked?i<0&&(t.continueAdding=a.concat([r])):i>-1&&(t.continueAdding=a.slice(0,i).concat(a.slice(i+1)))}else t.continueAdding=n}}}),t._v(" Continuar adicionando ")])]),a("button",{staticClass:"btn btn-default float-right",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v(" Cancelar ")]),a("button",{staticClass:"btn btn-primary float-right mr-2",attrs:{type:"button"},on:{click:t.save}},[t._v(" Salvar ")])])])])},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("hr")])}],Xt={name:"PetForm",data:function(){return{pet:new vt,registrationMode:!0,continueAdding:!1}},mounted:function(){var t=this.$route.params.id;t&&(this.registrationMode=!1,this.getProductById(t))},methods:{getProductById:function(t){var e=this;ft.getById(t).then((function(t){e.pet=new vt(t.data)})).catch((function(a){console.log(a),e.$swal({icon:"error",title:"Não foi possível obter o produto pelo id "+t,confirmButtonColor:"#0039A8",animate:!0})}))},cancelAction:function(){this.pet=new vt,this.$router.push({name:"PetController"})},registerPet:function(){var t=this;this.pet.modelValidForRegistration()?ft.register(this.pet).then((function(){t.$swal({icon:"success",title:"Pet cadastrado com sucesso!",confirmButtonColor:"#0039A8",animate:!0}),t.pet=new vt,t.continueAdding||t.$router.push({name:"PetController"})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Não foi possível cadastrar o produto",confirmButtonColor:"#0039A8",animate:!0})})):this.$swal({icon:"warning",title:"O nome do produto é obrigatório para o cadastro.",confirmButtonColor:"#0039A8",animate:!0})},updatePet:function(){var t=this;this.pet.modelValidToUpdate()?ft.update(this.pet).then((function(){t.$swal({icon:"success",title:"Pet atualizado com sucesso!",confirmButtonColor:"#0039A8",animate:!0}),t.$router.push({name:"PetController"})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Não foi possível atualizar o pet",confirmButtonColor:"#0039A8",animate:!0})})):this.$swal({icon:"warning",title:"O código e nome do pet são obrigatórios para o cadastro.",confirmButtonColor:"#0039A8",animate:!0})},save:function(){this.registrationMode?this.registerPet():this.updatePet()},onFileChange:function(t){var e=this,a=t.target.files[0],o=new FileReader;o.onload=function(t){e.pet.logo=t.target.result},o.readAsDataURL(a)}}},Yt=Xt,Zt=(a("50f6"),Object(N["a"])(Yt,Kt,Wt,!1,null,"2e83c615",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"col-lg-4 offset-lg-4"},[a("div",{staticClass:"container"},[a("div",{},[a("h1",{staticClass:"titulo"},[t._v(t._s(t.registrationMode?"Adicionar":"Editar")+" Pet")])]),t._m(0)]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Nome do Pet")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adopter.description,expression:"adopter.description"}],staticClass:"form-control",attrs:{id:"description",type:"text"},domProps:{value:t.adopter.description},on:{input:function(e){e.target.composing||t.$set(t.adopter,"description",e.target.value)}}})])]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("O seu nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adopter.name,expression:"adopter.name"}],staticClass:"form-control",attrs:{id:"name",type:"text"},domProps:{value:t.adopter.name},on:{input:function(e){e.target.composing||t.$set(t.adopter,"name",e.target.value)}}})])]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adopter.email,expression:"adopter.email"}],staticClass:"form-control",attrs:{id:"email",type:"email"},domProps:{value:t.adopter.email},on:{input:function(e){e.target.composing||t.$set(t.adopter,"email",e.target.value)}}})])]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Telefone para contato")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adopter.telephone,expression:"adopter.telephone"}],staticClass:"form-control",attrs:{id:"telefone",type:"nunber"},domProps:{value:t.adopter.telephone},on:{input:function(e){e.target.composing||t.$set(t.adopter,"telephone",e.target.value)}}})])]),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-sm-10"},[a("button",{staticClass:"btn btn-default float-end",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v(" Cancelar ")]),a("button",{staticClass:"btn btn-primary float-end",attrs:{type:"button"},on:{click:t.save}},[t._v(" Enviar ")])])])])])},ae=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("p",[t._v(" Quem você deseja adotar ? ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-10"},[a("hr")])}],oe={name:"AdopterForm",data:function(){return{adopter:new qt,registrationMode:!0}},mounted:function(){var t=this.$route.params.id;t&&(this.registrationMode=!1,this.getProductById(t))},methods:{getProductById:function(t){var e=this;Vt.getById(t).then((function(t){e.adopter=new qt(t.data)})).catch((function(a){console.log(a),e.$swal({icon:"error",title:"Não foi possível obter o produto pelo id "+t,confirmButtonColor:"#0039A8",animate:!0})}))},cancelAction:function(){this.adopter=new qt,this.$router.push({name:"Dashboard"})},registerAdopter:function(){var t=this;this.adopter.modelValidForRegistration()?Vt.register(this.adopter).then((function(){t.$swal({icon:"success",title:"Aguarde entraremos em contato com você!",confirmButtonColor:"#0039A8",animate:!0}),t.adopter=new qt,t.$router.push({name:"Dashboard"})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Não foi possível cadastrar o produto",confirmButtonColor:"#0039A8",animate:!0})})):this.$swal({icon:"warning",title:"O nome do adotante é obrigatório para o cadastro.",confirmButtonColor:"#0039A8",animate:!0})},updateAdopter:function(){var t=this;this.adopter.modelValidToUpdate()?Vt.update(this.adopter).then((function(){t.$swal({icon:"success",title:"Adotante atualizado com sucesso!",confirmButtonColor:"#0039A8",animate:!0}),t.$router.push({name:"Dashboard"})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Não foi possível atualizar o adotante",confirmButtonColor:"#0039A8",animate:!0})})):this.$swal({icon:"warning",title:"O código e nome do adotante são obrigatórios para o cadastro.",confirmButtonColor:"#0039A8",animate:!0})},save:function(){this.registrationMode?this.registerAdopter():this.updateAdopter()}}},ne=oe,re=(a("1dd7"),Object(N["a"])(ne,ee,ae,!1,null,"5fbcefaa",null)),ie=re.exports,se=[{path:"/login",name:"Login",component:it,title:"Login",meta:{requiredAuth:!1}},{path:"/",name:"Dashboard",component:wt,title:"Dashboard",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-usuarios",name:"UserForm",component:Pt,title:"Usuarios",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-pets",name:"PetController",component:jt,title:"Pets",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-pets/novo",name:"NewPet",component:te,title:"Adicionar Pet",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-pets/editar",name:"EditPet",component:te,title:"Editar pet",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-adotantes",name:"AdopterController",component:Qt,title:"Adopters",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-adotantes/novo",name:"NewAdopter",component:ie,title:"Adicionar Pet",meta:{requiredAuth:!0}},{path:"/gerenciamento-de-adotantes/editar",name:"EditAdopter",component:ie,title:"Editar adopter",meta:{requiredAuth:!0}}],ce=se;o["a"].use(q["a"]);var le=new q["a"]({mode:"history",routes:ce});le.beforeEach((function(t,e,a){var o=localStorage.getItem("token");"Login"==t.name?o?a({name:"PetController"}):a():t.matched.some((function(t){return t.meta.requiredAuth}))?null==o?a({path:"/login",params:{nextUrl:t.fullPath}}):a():null==o?a():a({name:"PetController"})}));var ue=le,de=a("f9d5"),me=a.n(de);a("4413");o["a"].use(me.a),o["a"].config.productionTip=!1,new o["a"]({router:ue,render:function(t){return t(V)}}).$mount("#app")},"65ba":function(t,e,a){},"67da":function(t,e,a){},6917:function(t,e,a){"use strict";a("9fd9")},"85ec":function(t,e,a){},"9e6f":function(t,e,a){},"9fd9":function(t,e,a){},a7bd:function(t,e,a){"use strict";a("65ba")},a960:function(t,e,a){"use strict";a("bcfb")},bcfb:function(t,e,a){},d6db:function(t,e,a){"use strict";a("e67a")},e67a:function(t,e,a){}});
//# sourceMappingURL=app.6a79a155.js.map