(this["webpackJsonpmy-appp"]=this["webpackJsonpmy-appp"]||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(10),i=n.n(c),s=n(14),l=n(11),r=n(12),u=n(16),o=n(15),h=(n.p,n(21),n(1));function j(t){return Object(h.jsx)("ul",{children:t.item.map((function(t,e){return Object(h.jsx)("li",{children:t},e)}))})}var b=function(t){Object(u.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).handelClick=function(t){t.preventDefault(),a.setState({item:[].concat(Object(s.a)(a.state.item),[a.state.value]),value:""})},a.handelChange=function(t){a.setState({value:t.target.value}),console.info(a.state.value)},a.state={value:"",item:[]},a}return Object(r.a)(n,[{key:"render",value:function(){return localStorage.setItem("storageTODO",this.state.item),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container mt-2",children:[Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{value:this.state.value,onChange:this.handelChange}),Object(h.jsx)("button",{onClick:this.handelClick,children:"submit"})]}),Object(h.jsx)(j,{item:this.state.item})]})})}}]),n}(a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))},d=n(6);i.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),m()}},[[28,1,2]]]);
//# sourceMappingURL=main.63ca741b.chunk.js.map