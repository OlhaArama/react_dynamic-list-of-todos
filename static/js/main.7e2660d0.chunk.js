(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1),o=(c(10),c(11),c(5)),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(r.jsx)("span",{className:"icon",children:s===e.id?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.onSelect,c=e.onSearch,a=e.selectionOption,n=e.searchTodo;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){t(e.target.value)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.selectedTodo,c=e.selectTodo,s=Object(i.useState)(),a=Object(l.a)(s,2),n=a[0],o=a[1],d=Object(i.useState)(!1),j=Object(l.a)(d,2),b=j[0],m=j[1];return Object(i.useEffect)((function(){var e;m(!0),(e=t.userId,h("/users/".concat(e))).then((function(e){o(e),m(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),b?Object(r.jsx)(u,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),n&&Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),d=o[0],O=o[1],x=Object(i.useState)(0),f=Object(l.a)(x,2),p=f[0],N=f[1],v=Object(i.useState)("all"),y=Object(l.a)(v,2),g=y[0],k=y[1],S=Object(i.useState)(""),T=Object(l.a)(S,2),C=T[0],w=T[1];Object(i.useEffect)((function(){O(!0),h("/todos").then((function(e){a(e),O(!1)}))}),[]);var A=function(e){N(e)},I=Object(i.useMemo)((function(){var e=c;switch(g){case s.Active:e=c.filter((function(e){return!e.completed}));break;case s.Completed:e=c.filter((function(e){return e.completed}));break;case s.All:default:e=c}return e.filter((function(e){return e.title.toLowerCase().includes(C.toLowerCase())}))}),[c,g,C]),_=I.find((function(e){return e.id===p}))||null;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{onSelect:function(e){k(e)},onSearch:function(e){w(e)},selectionOption:g,searchTodo:C})}),Object(r.jsxs)("div",{className:"block",children:[d&&Object(r.jsx)(u,{}),Object(r.jsx)(j,{todos:I,selectTodo:A,selectedTodoId:p})]})]})})}),_&&Object(r.jsx)(m,{selectedTodo:_,selectTodo:A})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e2660d0.chunk.js.map