(function(t){function e(e){for(var a,r,o=e[0],n=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var n=s[o];0!==l[n]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},l={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=n;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"38c8":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r=(s("a2c8"),s("2877")),o={},n=Object(r["a"])(o,l,i,!1,null,null,null),c=n.exports,u=s("5c96"),m=s.n(u);s("0fae");a["default"].use(m.a);var d=s("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("div",{staticClass:"login-container"},[e("el-card",{staticClass:"login-card",attrs:{header:"账号密码登录"}},[e("el-form",{ref:"loginFormRef",attrs:{rules:t.LoginRules,model:t.LoginForm},nativeOn:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"用户名",prop:"username"}},[e("el-input",{model:{value:t.LoginForm.username,callback:function(e){t.$set(t.LoginForm,"username",e)},expression:"LoginForm.username"}})],1),e("el-form-item",{attrs:{label:"密码",prop:"password"}},[e("el-input",{attrs:{type:"password"},model:{value:t.LoginForm.password,callback:function(e){t.$set(t.LoginForm,"password",e)},expression:"LoginForm.password"}})],1),e("el-form-item",{staticClass:"btns"},[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("登录")]),e("el-button",{attrs:{type:"info"},on:{click:t.resetLoginForm}},[t._v("重置")])],1)],1)],1)],1)])},h=[],f=(s("d9e2"),{data(){let t=(t,e,s)=>{const a=/^[a-zA-Z][\w]{2,9}$/;if(a.test(e))return s();s(new Error("请输入合法的用户名"))},e=(t,e,s)=>{const a=/^[\w.]{6,15}$/;if(a.test(e))return s();s(new Error("请输入合法的登陆密码"))};return{LoginForm:{username:"",password:""},LoginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:t,trigger:"blur"}],password:[{required:!0,message:"请输入登陆密码",trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{resetLoginForm(){this.$refs.loginFormRef.resetFields()},async login(){const t=await this.$http.post("login",this.LoginForm);localStorage.token=t.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"})}}}),b=f,v=(s("dfbf"),Object(r["a"])(b,p,h,!1,null,null,null)),g=v.exports,y=function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"100vh"}},[e("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 243)"},attrs:{width:"200px"}},[e("el-menu",{attrs:{router:"","default-openeds":["1"],"unique-opened":"","default-active":"$route.path"}},[e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-fold"}),t._v("内容管理")]),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("物品")]),e("el-menu-item",{attrs:{index:"/items/create"}},[t._v("新建物品")]),e("el-menu-item",{attrs:{index:"/items/list"}},[t._v("物品列表")])],2),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("英雄")]),e("el-menu-item",{attrs:{index:"/heroes/create"}},[t._v("新建英雄")]),e("el-menu-item",{attrs:{index:"/heroes/list"}},[t._v("英雄列表")])],2),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("文章")]),e("el-menu-item",{attrs:{index:"/articles/create"}},[t._v("新建文章")]),e("el-menu-item",{attrs:{index:"/articles/list"}},[t._v("文章列表")])],2)],2),e("el-submenu",{attrs:{index:"2"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-opportunity"}),t._v("运营管理 ")]),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("广告")]),e("el-menu-item",{attrs:{index:"/ads/create"}},[t._v("新建广告位")]),e("el-menu-item",{attrs:{index:"/ads/list"}},[t._v("广告位列表")])],2)],2),e("el-submenu",{attrs:{index:"3"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-menu"}),t._v("系统设置")]),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("分类")]),e("el-menu-item",{attrs:{index:"/categories/create"}},[t._v("新建分类")]),e("el-menu-item",{attrs:{index:"/categories/list"}},[t._v("分类列表")])],2),e("el-menu-item-group",[e("template",{slot:"title"},[t._v("管理员")]),e("el-menu-item",{attrs:{index:"/admin_users/create"}},[t._v("新建管理员")]),e("el-menu-item",{attrs:{index:"/admin_users/list"}},[t._v("管理员列表")])],2)],2)],1)],1),e("el-container",[e("el-header",{staticStyle:{"text-align":"right"}},[e("el-button",{staticStyle:{color:"black"},attrs:{size:"small"},on:{click:t.loginOut}},[t._v(" 退出")])],1),e("el-main",[e("router-view",{key:t.$route.path})],1)],1)],1)},_=[],w={methods:{loginOut(){this.$confirm("是否退出当前账户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{window.localStorage.clear(),this.$router.push("/login")})}}},x=w,$=(s("9c33"),Object(r["a"])(x,y,_,!1,null,null,null)),k=$.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"分类")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"上级分类"}},[e("el-select",{model:{value:t.model.parent,callback:function(e){t.$set(t.model,"parent",e)},expression:"model.parent"}},t._l(t.parents,(function(t){return e("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},O=[],S={props:{id:{}},data(){return{model:{},parents:[]}},methods:{async save(){let t;t=this.id?await this.$http.put("rest/categories/"+this.id,this.model):await this.$http.post("rest/categories",this.model),this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/categories/"+this.id);this.model=t.data},async fetchParents(){const t=await this.$http.get("rest/categories");this.parents=t.data}},created(){this.fetchParents(),this.id&&this.fetch()}},j=S,T=Object(r["a"])(j,C,O,!1,null,null,null),z=T.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("分类列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),e("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/categories/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},L=[],P={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/categories");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除分类"${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/categories/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},D=P,F=Object(r["a"])(D,B,L,!1,null,null,null),A=F.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"物品")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),e("el-form-item",{attrs:{label:"图标"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":t.afterUpload}},[t.model.icon?e("img",{staticClass:"avatar",attrs:{src:t.model.icon}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},I=[],E={props:{id:{}},data(){return{model:{}}},methods:{afterUpload(t){this.$set(this.model,"icon",t.url)},async save(){let t;t=this.id?await this.$http.put("rest/items/"+this.id,this.model):await this.$http.post("rest/items",this.model),this.$router.push("/items/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/items/"+this.id);this.model=t.data}},created(){this.id&&this.fetch()}},H=E,R=Object(r["a"])(H,U,I,!1,null,null,null),q=R.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("物品列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),e("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.icon}})]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/items/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},V=[],J={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/items");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除分类"${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/items/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},N=J,Z=Object(r["a"])(N,M,V,!1,null,null,null),G=Z.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"英雄")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-tabs",{attrs:{value:"basic",type:"border-card"}},[e("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),e("el-form-item",{attrs:{label:"称号"}},[e("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),e("el-form-item",{attrs:{label:"头像"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":e=>t.$set(t.model,"avatar",e.url)}},[t.model.avatar?e("img",{staticClass:"avatar",attrs:{src:t.model.avatar}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"Banner"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":e=>t.$set(t.model,"banner",e.url)}},[t.model.banner?e("img",{staticClass:"avatar",attrs:{src:t.model.banner}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"类型"}},[e("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return e("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),e("el-form-item",{attrs:{label:"难度"}},[e("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.difficult,callback:function(e){t.$set(t.model.scores,"difficult",e)},expression:"model.scores.difficult"}})],1),e("el-form-item",{attrs:{label:"技能"}},[e("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.skills,callback:function(e){t.$set(t.model.scores,"skills",e)},expression:"model.scores.skills"}})],1),e("el-form-item",{attrs:{label:"攻击"}},[e("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.attack,callback:function(e){t.$set(t.model.scores,"attack",e)},expression:"model.scores.attack"}})],1),e("el-form-item",{attrs:{label:"生存"}},[e("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.survive,callback:function(e){t.$set(t.model.scores,"survive",e)},expression:"model.scores.survive"}})],1),e("el-form-item",{attrs:{label:"顺风出装"}},[e("el-select",{attrs:{multiple:""},model:{value:t.model.items1,callback:function(e){t.$set(t.model,"items1",e)},expression:"model.items1"}},t._l(t.items,(function(t){return e("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),e("el-form-item",{attrs:{label:"逆风出装"}},[e("el-select",{attrs:{multiple:""},model:{value:t.model.items2,callback:function(e){t.$set(t.model,"items2",e)},expression:"model.items2"}},t._l(t.items,(function(t){return e("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),e("el-form-item",{attrs:{label:"使用技巧"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.model.usageTips,callback:function(e){t.$set(t.model,"usageTips",e)},expression:"model.usageTips"}})],1),e("el-form-item",{attrs:{label:"对抗技巧"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.model.battleTips,callback:function(e){t.$set(t.model,"battleTips",e)},expression:"model.battleTips"}})],1),e("el-form-item",{attrs:{label:"团战思路"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.model.teamTips,callback:function(e){t.$set(t.model,"teamTips",e)},expression:"model.teamTips"}})],1)],1),e("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.skills.push({})}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" 添加技能 ")]),e("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.skills,(function(s,a){return e("el-col",{key:a,attrs:{md:12}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:s.name,callback:function(e){t.$set(s,"name",e)},expression:"item.name"}})],1),e("el-form-item",{attrs:{label:"图标"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":e=>t.$set(s,"icon",e.url)}},[s.icon?e("img",{staticClass:"avatar",attrs:{src:s.icon}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"冷却值"}},[e("el-input",{model:{value:s.delay,callback:function(e){t.$set(s,"delay",e)},expression:"item.delay"}})],1),e("el-form-item",{attrs:{label:"消耗"}},[e("el-input",{model:{value:s.cost,callback:function(e){t.$set(s,"cost",e)},expression:"item.cost"}})],1),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{type:"textarea"},model:{value:s.description,callback:function(e){t.$set(s,"description",e)},expression:"item.description"}})],1),e("el-form-item",{attrs:{label:"小提示"}},[e("el-input",{attrs:{type:"textarea"},model:{value:s.tips,callback:function(e){t.$set(s,"tips",e)},expression:"item.tips"}})],1),e("el-form-item",[e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.skills.splice(a,1)}}},[t._v("删除")])],1)],1)})),1)],1),e("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.partners.push({})}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" 添加英雄 ")]),e("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners,(function(s,a){return e("el-col",{key:a,attrs:{md:12}},[e("el-form-item",{attrs:{label:"英雄"}},[e("el-select",{attrs:{filterable:""},model:{value:s.hero,callback:function(e){t.$set(s,"hero",e)},expression:"item.hero"}},t._l(t.heroes,(function(t){return e("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{type:"textarea"},model:{value:s.description,callback:function(e){t.$set(s,"description",e)},expression:"item.description"}})],1),e("el-form-item",[e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners.splice(a,1)}}},[t._v("删除")])],1)],1)})),1)],1)],1),e("el-form-item",{staticStyle:{"margin-top":"1rem"}},[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},Q=[],W={props:{id:{}},data(){return{categories:[],items:[],heroes:[],model:{name:"",avatar:"",skills:[],partners:[],scores:{difficult:0}}}},methods:{async save(){let t;t=this.id?await this.$http.put("rest/heroes/"+this.id,this.model):await this.$http.post("rest/heroes",this.model),this.$router.push("/heroes/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/heroes/"+this.id);this.model=Object.assign({},this.model,t.data)},async fetchCategories(){const t=await this.$http.get("rest/categories");this.categories=t.data},async fetchItems(){const t=await this.$http.get("rest/items");this.items=t.data},async fetchHeroes(){const t=await this.$http.get("rest/heroes");this.heroes=t.data}},created(){this.fetchItems(),this.fetchCategories(),this.fetchHeroes(),this.id&&this.fetch()}},X=W,Y=Object(r["a"])(X,K,Q,!1,null,null,null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("英雄列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),e("el-table-column",{attrs:{prop:"title",label:"称号"}}),e("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.avatar}})]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/heroes/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},st=[],at={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/heroes");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除分类"${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/heroes/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},lt=at,it=Object(r["a"])(lt,et,st,!1,null,null,null),rt=it.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"文章")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"所属分类"}},[e("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return e("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),e("el-form-item",{attrs:{label:"标题"}},[e("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),e("el-form-item",{attrs:{label:"详情"}},[e("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.model.body,callback:function(e){t.$set(t.model,"body",e)},expression:"model.body"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},nt=[],ct=s("5873"),ut={props:{id:{}},components:{VueEditor:ct["a"]},data(){return{model:{},categories:[]}},methods:{async handleImageAdded(t,e,s,a){const l=new FormData;l.append("file",t);const i=await this.$http.post("upload",l);e.insertEmbed(s,"image",i.data.url),a()},async save(){let t;t=this.id?await this.$http.put("rest/articles/"+this.id,this.model):await this.$http.post("rest/articles",this.model),this.$router.push("/articles/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/articles/"+this.id);this.model=t.data},async fetchCategories(){const t=await this.$http.get("rest/categories");this.categories=t.data}},created(){this.fetchCategories(),this.id&&this.fetch()}},mt=ut,dt=Object(r["a"])(mt,ot,nt,!1,null,null,null),pt=dt.exports,ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("文章列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"title",label:"标题"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/articles/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},ft=[],bt={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/articles");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除文章"${t.title}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/articles/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},vt=bt,gt=Object(r["a"])(vt,ht,ft,!1,null,null,null),yt=gt.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"广告位")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),e("el-form-item",{attrs:{label:"广告"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.items.push({})}}},[e("i",{staticClass:"el-icon-plus"}),t._v("添加广告")]),e("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.items,(function(s,a){return e("el-col",{key:a,attrs:{md:24}},[e("el-form-item",{attrs:{label:"跳转链接(URL)"}},[e("el-input",{model:{value:s.url,callback:function(e){t.$set(s,"url",e)},expression:"item.url"}})],1),e("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图片"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":e=>t.$set(s,"image",e.url)}},[s.image?e("img",{staticClass:"avatar",attrs:{src:s.image}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",[e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.items.splice(a,1)}}},[t._v("删除")])],1)],1)})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},wt=[],xt={props:{id:{}},data(){return{model:{items:[]}}},methods:{async save(){let t;t=this.id?await this.$http.put("rest/ads/"+this.id,this.model):await this.$http.post("rest/ads",this.model),this.$router.push("/ads/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/ads/"+this.id);this.model=Object.assign({},this.model,t.data)}},created(){this.id&&this.fetch()}},$t=xt,kt=Object(r["a"])($t,_t,wt,!1,null,null,null),Ct=kt.exports,Ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("广告位列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"name",label:"名称"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/ads/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},St=[],jt={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/ads");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除分类"${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/ads/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},Tt=jt,zt=Object(r["a"])(Tt,Ot,St,!1,null,null,null),Bt=zt.exports,Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.id?"编辑":"新建")+"管理员")]),e("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("el-form-item",{attrs:{label:"用户名"}},[e("el-input",{model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}})],1),e("el-form-item",{attrs:{label:"密码"}},[e("el-input",{attrs:{type:"text"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},Pt=[],Dt={props:{id:{}},data(){return{model:{}}},methods:{async save(){let t;t=this.id?await this.$http.put("rest/admin_users/"+this.id,this.model):await this.$http.post("rest/admin_users",this.model),this.$router.push("/admin_users/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/admin_users/"+this.id);this.model=t.data}},created(){this.id&&this.fetch()}},Ft=Dt,At=Object(r["a"])(Ft,Lt,Pt,!1,null,null,null),Ut=At.exports,It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("管理员列表")]),e("el-table",{attrs:{data:t.items}},[e("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),e("el-table-column",{attrs:{prop:"username",label:"用户名"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push("/admin_users/edit/"+s.row._id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.remove(s.row)}}},[t._v("删除")])]}}])})],1)],1)},Et=[],Ht={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/admin_users");this.items=t.data},async remove(t){this.$confirm(`是否确定要删除"${t.username}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/admin_users/"+t._id);this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},Rt=Ht,qt=Object(r["a"])(Rt,It,Et,!1,null,null,null),Mt=qt.exports;a["default"].use(d["a"]);const Vt=new d["a"]({routes:[{path:"/login",name:"login",component:g,meta:{isPublic:!0}},{path:"/",name:"main",component:k,children:[{path:"/categories/create",component:z},{path:"/categories/edit/:id",component:z,props:!0},{path:"/categories/list",component:A},{path:"/items/create",component:q},{path:"/items/edit/:id",component:q,props:!0},{path:"/items/list",component:G},{path:"/heroes/create",component:tt},{path:"/heroes/edit/:id",component:tt,props:!0},{path:"/heroes/list",component:rt},{path:"/articles/create",component:pt},{path:"/articles/edit/:id",component:pt,props:!0},{path:"/articles/list",component:yt},{path:"/ads/create",component:Ct},{path:"/ads/edit/:id",component:Ct,props:!0},{path:"/ads/list",component:Bt},{path:"/admin_users/create",component:Ut},{path:"/admin_users/edit/:id",component:Ut,props:!0},{path:"/admin_users/list",component:Mt}]}]});Vt.beforeEach((t,e,s)=>{if(!t.meta.isPublic&&!localStorage.token)return s("/login");s()});var Jt=Vt,Nt=(s("38c8"),s("bc3a")),Zt=s.n(Nt);const Gt=Zt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Gt.interceptors.request.use((function(t){return localStorage.token&&(t.headers.Authorization="Bearer "+localStorage.token),t}),(function(t){return Promise.reject(t)})),Gt.interceptors.response.use(t=>t,t=>(t.response.data.message&&(a["default"].prototype.$message({type:"error",message:t.response.data.message}),401===t.response.status&&Jt.push("/login")),Promise.reject(t)));var Kt=Gt;a["default"].config.productionTip=!1,a["default"].prototype.$http=Kt,a["default"].mixin({computed:{uploadUrl(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders(){return{Authorization:"Bearer "+(localStorage.token||"")}}}}),new a["default"]({router:Jt,render:t=>t(c)}).$mount("#app")},"65db":function(t,e,s){},"9c33":function(t,e,s){"use strict";s("feb1")},a2c8:function(t,e,s){"use strict";s("df5b")},df5b:function(t,e,s){},dfbf:function(t,e,s){"use strict";s("65db")},feb1:function(t,e,s){}});
//# sourceMappingURL=app.0f7dd6a7.js.map