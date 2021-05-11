(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var c,o,r,a,i,b,s,d,l,j,u,x,O,p,f,g,h,k,m,y,v,w,z,T,D,C,S,A,I,F,Z,M,P,U,B,G,J,K,L=t(2),N=t.n(L),q=t(14),E=t.n(q),H=(t(28),t(23)),W=t(5),Q=t(6),R=t(3),V=t(4),X=t(18),Y=V.b.div(c||(c=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n  color: #333;\n  background-color: #ccc;\n  border: 1px solid #8c8c8c;\n  border-radius: ",";\n  cursor: pointer;\n\n  margin-bottom: ",";\n"])),(function(n){return n.show?"15px 15px 0 0":"15px"}),(function(n){return n.show?"0":"20px"})),$=V.b.h2(o||(o=Object(R.a)(["\n  font-size: 18px;\n"]))),_=Object(V.b)(X.a)(r||(r=Object(R.a)(["\n  font-size: 30px;\n  transition: 0.4s linear;\n\n  ","\n"])),(function(n){return n.show&&Object(V.a)(a||(a=Object(R.a)(["\n    transform: rotate(90deg);\n  "])))})),nn=t(1),en=function(n){var e=n.title,t=n.onAction,c=n.show;return Object(nn.jsxs)(Y,{onClick:t,show:c,children:[Object(nn.jsx)($,{children:e}),Object(nn.jsx)(_,{show:c})]})},tn=V.b.form(i||(i=Object(R.a)(["\n  display: flex;\n  min-height: 150px;\n  justify-content: space-between;\n  align-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n  padding: 20px 30px;\n  background-color: #e6e6e6;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  border-color: #8c8c8c;\n  border-radius: 0 0 15px 15px;\n"]))),cn=V.b.p(b||(b=Object(R.a)(["\n  color: #333;\n  font-weight: bold;\n"]))),on=V.b.label(s||(s=Object(R.a)(["\n  flex-basis: 83%;\n\n  ","\n"])),(function(n){return n.secondary&&Object(V.a)(d||(d=Object(R.a)(["\n    flex-basis: 15%;\n  "])))})),rn=V.b.input(l||(l=Object(R.a)(["\n  padding: 5px 10px;\n  width: 100%;\n"]))),an=V.b.input(j||(j=Object(R.a)(["\n  flex-basis: 100%;\n  padding: 10px;\n  color: #b6b6b6;\n  font-weight: bold;\n  letter-spacing: .5px;\n  background-color: #23232e;\n  border: none;\n  border-radius: 15px;\n\n  &:active{\n    color: #ececec;\n    background-color: #141418;\n  }\n"]))),bn=function(n){var e=n.onAddTask,t=Object(L.useState)(""),c=Object(Q.a)(t,2),o=c[0],r=c[1],a=Object(L.useState)(""),i=Object(Q.a)(a,2),b=i[0],s=i[1];return Object(nn.jsxs)(tn,{onSubmit:function(n){n.preventDefault(),e({name:o,date:b}),r(""),s("")},children:[Object(nn.jsx)(cn,{children:"Podaj nazw\u0119 i termin ko\u0144cowy na wykonanie zadania"}),Object(nn.jsx)(on,{primary:!0,children:Object(nn.jsx)(rn,{type:"text",placeholder:"nazwa zadania..",required:!0,value:o,onChange:function(n){return r(n.target.value)}})}),Object(nn.jsx)(on,{secondary:!0,children:Object(nn.jsx)(rn,{type:"date",value:b,onChange:function(n){return s(n.target.value)}})}),Object(nn.jsx)(an,{type:"submit",value:"Zapisz zadanie"})]})},sn=t(19),dn=V.b.header(u||(u=Object(R.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 20px;\n  color: #b6b6b6;\n  background-color: #141418;\n"]))),ln=V.b.h1(x||(x=Object(R.a)(["\n  font-size: 26px;\n"]))),jn=Object(V.b)(sn.a)(O||(O=Object(R.a)(["\n  font-size: 30px;\n  margin-right: 10px;\n"]))),un=function(n){var e=n.title;return Object(nn.jsxs)(dn,{children:[Object(nn.jsx)(jn,{}),Object(nn.jsx)(ln,{children:e})]})},xn=t(20),On=V.b.div(p||(p=Object(R.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 15px;\n"]))),pn=V.b.button(f||(f=Object(R.a)(["\n  margin: 3px;\n  font-size: 16px;\n  color: #00ace6;\n  background-color: unset;\n  border: none;\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.disabled&&Object(V.a)(g||(g=Object(R.a)(["\n    color: #777;\n  "])))})),fn=V.b.div(h||(h=Object(R.a)(["\n  padding: 12px 30px 20px 30px;\n  background-color: #e6e6e6;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  border-color: #8c8c8c;\n  border-radius: 0 0 15px 15px;\n"]))),gn=V.b.div(k||(k=Object(R.a)(["\n  flex-grow: 1;\n"]))),hn=V.b.p(m||(m=Object(R.a)(["\n\n  color: #333;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(n){return n.noTasks&&Object(V.a)(y||(y=Object(R.a)(["\n    font-style: italic;\n  "])))}),(function(n){return n.primary&&Object(V.a)(v||(v=Object(R.a)(["\n    font-weight: bold;\n  "])))}),(function(n){return n.secondary&&Object(V.a)(w||(w=Object(R.a)(["\n    margin-top: 5px;\n    margin-left: 15px;\n    font-style: italic;\n  "])))})),kn=Object(V.b)(xn.a)(z||(z=Object(R.a)(["\n  color: red;\n  font-size: 20px;\n"]))),mn=V.b.ul(T||(T=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"]))),yn=V.b.li(D||(D=Object(R.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  align-items: center;\n  padding: 10px 15px;\n  color: #b6b6b6;\n  background-color: #f2f2f2;\n  cursor: pointer;\n\n  ","\n\n  &:hover{\n    background-color: #f6f6f6;\n  }\n"])),(function(n){return n.done&&Object(V.a)(C||(C=Object(R.a)(["\n    border-left: 8px solid green;\n  "])))})),vn=function(n){var e=n.task,t=n.onDelete,c=n.onToggleTaskDone;return Object(nn.jsxs)(yn,{onDoubleClick:function(){return c(e.id)},done:e.done,children:[Object(nn.jsxs)(gn,{children:[Object(nn.jsx)(hn,{primary:!0,children:e.name}),Object(nn.jsx)(hn,{secondary:!0,children:e.date?"Termin do: ".concat(e.date):"bez terminu"})]}),Object(nn.jsx)(kn,{onClick:function(){return t(e.id)}})]})},wn=function(n){var e=n.tasks,t=n.onDelete,c=n.onToggleTaskDone,o=n.onSetAllDone,r=n.onSetAllUndone,a=Object(L.useState)(0),i=Object(Q.a)(a,2),b=i[0],s=i[1];return 0===e.length?Object(nn.jsx)(fn,{children:Object(nn.jsx)(hn,{noTasks:!0,children:"Brak zada\u0144 do wy\u015bwietlenia."})}):Object(nn.jsxs)(fn,{children:[Object(nn.jsxs)(On,{children:[Object(nn.jsx)(pn,{onClick:function(){return s(0)},disabled:!1,children:"[Wszystkie]"}),Object(nn.jsx)(pn,{onClick:function(){return s(1)},disabled:!1,children:"[Zako\u0144czone]"}),Object(nn.jsx)(pn,{onClick:function(){return s(2)},disabled:!1,children:"[Niezako\u0144czone]"}),Object(nn.jsx)(pn,{disabled:e.every((function(n){return n.done})),onClick:o,children:"[Zako\u0144cz wszystkie]"}),Object(nn.jsx)(pn,{disabled:e.every((function(n){return!n.done})),onClick:r,children:"[Odznacz wszystkie]"})]}),Object(nn.jsx)(mn,{children:function(){switch(b){case 0:return e.map((function(n){return Object(nn.jsx)(vn,{task:n,onDelete:t,onToggleTaskDone:c},n.id)}));case 1:return e.filter((function(n){return!0===n.done})).map((function(n){return Object(nn.jsx)(vn,{task:n,onDelete:t,onToggleTaskDone:c},n.id)}));case 2:return e.filter((function(n){return!1===n.done})).map((function(n){return Object(nn.jsx)(vn,{task:n,onDelete:t,onToggleTaskDone:c},n.id)}));default:return""}}()})]})},zn=t(10),Tn=t(21),Dn=t(22),Cn=V.b.nav(S||(S=Object(R.a)(["\n\n"]))),Sn=V.b.ul(A||(A=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"]))),An=V.b.li(I||(I=Object(R.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20px;\n  color: #b6b6b6;\n  cursor: pointer;\n\n  ","\n\n  &:hover{\n    background-color: #141418;\n  }\n"])),(function(n){return n.activeItem&&Object(V.a)(F||(F=Object(R.a)(["\n    color: #ececec;\n    background-color: #141418;\n  "])))})),In=V.b.a(Z||(Z=Object(R.a)(["\n  display: block;\n  font-size: 18px;\n  text-decoration: none;\n  letter-spacing: 1px;\n"]))),Fn=V.b.div(M||(M=Object(R.a)(["\n  margin-right: 10px;\n  font-size: 25px;\n"]))),Zn=function(n){switch(n.itemID){case 1:return Object(nn.jsx)(Fn,{color:"red",children:Object(nn.jsx)(zn.b,{})});case 2:return Object(nn.jsx)(Fn,{children:Object(nn.jsx)(Tn.a,{})});case 3:return Object(nn.jsx)(Fn,{children:Object(nn.jsx)(zn.a,{})});case 4:return Object(nn.jsx)(Fn,{children:Object(nn.jsx)(Dn.a,{})});default:return""}},Mn=function(n){var e=n.item,t=n.onToggleItemActive;return Object(nn.jsxs)(An,{activeItem:e.active,onClick:function(){t(e.id)},children:[Object(nn.jsx)(Zn,{itemID:e.id}),Object(nn.jsx)(In,{children:e.name.toUpperCase()})]})},Pn=function(){var n=Object(L.useState)([{id:1,name:"G\u0142\xf3wna",active:!0},{id:2,name:"Zadania",active:!1},{id:3,name:"Kalendarz",active:!1},{id:4,name:"Notatnik",active:!1}]),e=Object(Q.a)(n,2),t=e[0],c=e[1],o=function(n){c(t.map((function(e){return e.id===n?Object(W.a)(Object(W.a)({},e),{},{active:!0}):Object(W.a)(Object(W.a)({},e),{},{active:!1})})))};return Object(nn.jsx)(Cn,{children:Object(nn.jsx)(Sn,{children:t.map((function(n){return Object(nn.jsx)(Mn,{item:n,onToggleItemActive:o},n.id)}))})})},Un=V.b.footer(P||(P=Object(R.a)(["\n  padding: 5px;\n  background-color: #141418;\n"]))),Bn=V.b.p(U||(U=Object(R.a)(["\n  color: #b6b6b6;\n  text-align: center;\n"]))),Gn=function(){return Object(nn.jsx)(Un,{children:Object(nn.jsx)(Bn,{children:"Micha\u0142 Kowalczyk | GitHub"})})},Jn=V.b.div(B||(B=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]))),Kn=V.b.div(G||(G=Object(R.a)(["\n  width: 200px;\n  background-color: #23232e;\n"]))),Ln=V.b.section(J||(J=Object(R.a)(["\n  padding: 20px;\n  flex-grow: 1;\n  background-color: #f2f2f2;\n"]))),Nn=V.b.div(K||(K=Object(R.a)(["\n  display: flex;\n  flex-grow: 1;\n"])));var qn=function(){var n=Object(L.useState)([{id:1,name:"sko\u0144czy\u0107 projekt w react",date:"2021-05-28",done:!1},{id:2,name:"spotkanie zespo\u0142u",date:"2021-05-25",done:!0},{id:3,name:"wykona\u0107 sprawozdania",date:"2021-07-17",done:!1}]),e=Object(Q.a)(n,2),t=e[0],c=e[1],o=Object(L.useState)(!0),r=Object(Q.a)(o,2),a=r[0],i=r[1],b=Object(L.useState)(!0),s=Object(Q.a)(b,2),d=s[0],l=s[1];return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)(Jn,{children:[Object(nn.jsx)(un,{title:"Task Tracker App"}),Object(nn.jsxs)(Nn,{children:[Object(nn.jsx)(Kn,{children:Object(nn.jsx)(Pn,{})}),Object(nn.jsxs)(Ln,{children:[Object(nn.jsx)(en,{title:"".concat(a?"Zamknij":"Otw\xf3rz"," panel nowego zadania"),onAction:function(){return i(!a)},show:a}),a&&Object(nn.jsx)(bn,{onAddTask:function(n){var e=Math.floor(1e4*Math.random())+1,o=Object(W.a)(Object(W.a)({id:e},n),{},{done:!1});c([].concat(Object(H.a)(t),[o]))}}),Object(nn.jsx)(en,{title:"".concat(d?"Ukryj":"Poka\u017c"," list\u0119 zada\u0144"),onAction:function(){return l(!d)},show:d}),d&&Object(nn.jsx)(wn,{tasks:t,onDelete:function(n){c(t.filter((function(e){return e.id!==n})))},onToggleTaskDone:function(n){c(t.map((function(e){return e.id===n?Object(W.a)(Object(W.a)({},e),{},{done:!e.done}):e})))},onSetAllDone:function(){c((function(n){return n.map((function(n){return Object(W.a)(Object(W.a)({},n),{},{done:!0})}))}))},onSetAllUndone:function(){c((function(n){return n.map((function(n){return Object(W.a)(Object(W.a)({},n),{},{done:!1})}))}))}})]})]}),Object(nn.jsx)(Gn,{})]})})},En=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),o(n),r(n),a(n)}))};E.a.render(Object(nn.jsx)(N.a.StrictMode,{children:Object(nn.jsx)(qn,{})}),document.getElementById("root")),En()}},[[32,1,2]]]);
//# sourceMappingURL=main.0c0c86e8.chunk.js.map