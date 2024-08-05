(function(){"use strict";var t={7802:function(t,e,n){var r=n(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},i=[],c=function(){var t=this,e=t._self._c;return e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("主页")]),e("router-link",{attrs:{to:"/ai-techs"}},[t._v("AI前沿技术")])],1)},u=[],a={name:"NavBar"},s=a,l=n(1656),f=(0,l.A)(s,c,u,!1,null,"17281420",null),h=f.exports,p={name:"App",components:{NavBar:h}},d=p,v=(0,l.A)(d,o,i,!1,null,null,null),m=v.exports,_=function(){var t=this,e=t._self._c;return e("div",[e("div",{domProps:{innerHTML:t._s(t.projectReadMeContent)}})])},g=[],A={name:"HomeComponent",data(){return{projectReadMeContent:""}},mounted(){this.fetchProjectReadMe()},methods:{fetchProjectReadMe(){fetch("/ProjectReadMe.html").then((t=>t.text())).then((t=>{this.projectReadMeContent=t})).catch((t=>console.error("加载 ProjectReadMe 时出错:",t)))}}},y=A,w=(0,l.A)(y,_,g,!1,null,null,null),M=w.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("div",{domProps:{innerHTML:t._s(t.post.content)}})])},b=[],j={name:"SiteDetail",data(){return{post:{title:"",content:""}}},mounted(){const t=this.$route.params.id;"1"===t?this.fetchHtmlContent("Ai-TechArticles/TypraMdEditorGuide.html","Typra - Markdown编辑器指南"):"2"===t?this.fetchHtmlContent("Ai-TechArticles/PromptEngineeringGuide/PromptEngineeringGuide.html","AI技术前沿：从零到精通提示工程(Prompt Engineering)"):this.fetchPost(t)},methods:{fetchPost(t){const e=[{id:1,title:"Typra - Markdown编辑器指南",content:"Content of the first post."},{id:2,title:"AI技术前沿：从零到精通提示工程(Prompt Engineering)",content:"Content of the second post."}];this.post=e.find((e=>e.id===parseInt(t)))},fetchHtmlContent(t,e){fetch(`/ai-tech/${t}`).then((t=>{if(!t.ok)throw new Error("网络响应不正常");return t.text()})).then((t=>{this.post={title:e,content:t}})).catch((t=>console.error("加载HTML内容时出错:",t)))}}},k=j,x=(0,l.A)(k,P,b,!1,null,null,null),T=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("文章一览")]),e("ul",t._l(t.posts,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:"/ai-techs/"+n.id}},[t._v(t._s(n.title))])],1)})),0)])},O=[],E={name:"SiteList",data(){return{posts:[{id:1,title:"Typra - Markdown编辑器指南"},{id:2,title:"AI技术前沿：从零到精通提示工程(Prompt Engineering)"}]}}},H=E,R=(0,l.A)(H,C,O,!1,null,null,null),I=R.exports,L=n(6178);r.Ay.use(L.Ay);var S=new L.Ay({routes:[{path:"/",name:"Home",component:M},{path:"/ai-techs",name:"SiteList",component:I},{path:"/ai-techs/:id",name:"SiteDetail",component:T}]});r.Ay.config.productionTip=!1,new r.Ay({router:S,render:t=>t(m)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var c=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(u=!1,i<c&&(c=i));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,c=r[0],u=r[1],a=r[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var l=a(n)}for(e&&e(r);s<c.length;s++)i=c[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkai_tech"]=self["webpackChunkai_tech"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7802)}));r=n.O(r)})();
//# sourceMappingURL=app.6f030a0c.js.map