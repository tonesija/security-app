(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06409afe"],{"17c3":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=function(t){return Object(c["t"])("data-v-d9cf8c94"),t=t(),Object(c["r"])(),t},s=r((function(){return Object(c["f"])("h1",null,"View posts",-1)})),u=r((function(){return Object(c["f"])("tr",null,[Object(c["f"])("th",null,"Username"),Object(c["f"])("th",null,"Content")],-1)})),o={key:0},a=["innerHTML"];function b(t,e,n,r,b,l){return Object(c["q"])(),Object(c["e"])("div",null,[s,Object(c["f"])("form",null,[Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return b.q=t}),placeholder:"Query by content"},null,512),[[c["C"],b.q]]),Object(c["f"])("button",{onClick:e[1]||(e[1]=function(){return l.getPosts&&l.getPosts.apply(l,arguments)})},"Query")]),Object(c["f"])("table",null,[u,(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(b.posts,(function(e){return Object(c["q"])(),Object(c["e"])("tr",{key:e.id},[Object(c["f"])("td",null,Object(c["z"])(e.username),1),t.$store.state.xss?Object(c["d"])("",!0):(Object(c["q"])(),Object(c["e"])("td",o,Object(c["z"])(e.content),1)),t.$store.state.xss?(Object(c["q"])(),Object(c["e"])("td",{key:1,innerHTML:e.content},null,8,a)):Object(c["d"])("",!0)])})),128))])])}var l=n("1da1"),i=(n("96cf"),n("9b36")),f={name:"Posts",data:function(){return{q:null,posts:[]}},methods:{getPosts:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getPosts(t.q,t.$store.state.sqlInjection);case 2:t.posts=e.sent.data;case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.getPosts()}},j=(n("8545"),n("6b0d")),O=n.n(j);const d=O()(f,[["render",b],["__scopeId","data-v-d9cf8c94"]]);e["default"]=d},"34ec":function(t,e,n){},8545:function(t,e,n){"use strict";n("34ec")}}]);
//# sourceMappingURL=chunk-06409afe.3fecf66b.js.map