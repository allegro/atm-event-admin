(window["webpackJsonpatm-event-admin"]=window["webpackJsonpatm-event-admin"]||[]).push([[0],{137:function(e,t,a){e.exports=a(170)},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(236),i=(a(142),a(145),a(171),a(172),a(80)),m=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(53),s=a(43),p=a(125),d=a.n(p),E=a(239),f=a(235),b=a(62),g=a(238),y=a(13),h=a(7),v=a(176),k=a(223),O=a(227),w=a(226),j=a(224),C=a(225),S=a(90),R=a(32),D=a(221),N=a(222),P=a(56),T=a.n(P),A=a(244),W=a(217),x=a(218),I=a(228),L=a(242),G=a(240),B=a(229),H=a(246),V=a(219),U=a(220),F=a(57),K=a.n(F),z=a(245),M=a(2),X=a(214);function J(e){var t=e.message,a=e.children,l=e.onSubmit,o=Object(M.a)(e,["message","children","onSubmit"]),c=Object(n.useState)(!1),i=Object(h.a)(c,2),m=i[0],u=i[1];return[r.a.createElement(X.a,Object.assign({key:"button",onClick:function(){return u(!0)}},o),a),r.a.createElement(A.a,{fullWidth:!0,key:"confirmation",disableBackdropClick:!0,disableEscapeKeyDown:!0,open:m},r.a.createElement(W.a,{id:"confirmation-dialog-title"},"Confirmation"),r.a.createElement(x.a,{dividers:!0},r.a.createElement("p",null,t)),r.a.createElement(V.a,null,r.a.createElement(U.a,{onClick:function(){return u(!1)},color:"primary"},"Cancel"),r.a.createElement(U.a,{onClick:function(){l(),u(!1)},color:"primary"},"Ok")))]}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $=Object(v.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",marginBottom:e.spacing(10)},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)}}});function q(e){var t=e.users,a=$(),l=Object(n.useState)(!1),o=Object(h.a)(l,2),c=o[0],i=o[1],m=Object(R.a)(t),u=Object(h.a)(m,3),s=u[0],p=u[1],d=u[2];return p?r.a.createElement(D.a,{style:{position:"absolute",top:"50%",left:"50%"}}):d?r.a.createElement("p",null,"ERROR: ",d.toString()):[r.a.createElement(b.a,{key:"title",variant:"h5"},"Edit users"),r.a.createElement(Q,{key:"table",rows:s.docs,onRemove:function(e){e.admin||t.doc(e.id).delete()},onActivate:function(e,a){t.doc(e.id).update({isActive:a})}}),r.a.createElement(Y,{key:"add-user",open:c,onClose:function(){i(!1)},onSubmit:function(e){t.add(Z({},e,{isActive:!0})),i(!1)}}),r.a.createElement(N.a,{key:"action",onClick:function(){return i(!0)},className:a.fab,color:"secondary"},r.a.createElement(T.a,null))]}function Q(e){var t=e.rows,a=e.onRemove,n=e.onActivate,l=$();return r.a.createElement(S.a,{className:l.root},r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(w.a,{component:"th"},"Name"),r.a.createElement(w.a,{component:"th"},"Email"),r.a.createElement(w.a,{component:"th"},"Type"),r.a.createElement(w.a,{component:"th"},"Actions"),r.a.createElement(w.a,{component:"th",align:"right"},"Active"))),r.a.createElement(O.a,null,t.map(function(e){var t=Z({id:e.id},e.data());return r.a.createElement(C.a,{key:t.id},r.a.createElement(w.a,{scope:"row"},t.displayName),r.a.createElement(w.a,{scope:"row"},t.email),r.a.createElement(w.a,{scope:"row"},t.type),r.a.createElement(w.a,{scope:"row"},r.a.createElement(J,{disabled:t.admin,onSubmit:function(){return a(t)},message:"Do you really want to remove ".concat(t.displayName,"?")},r.a.createElement(K.a,null))),r.a.createElement(w.a,{align:"right"},r.a.createElement(z.a,{checked:t.isActive,onChange:function(e){return n(t,e.target.checked)}})))}))))}function Y(e){var t=e.open,a=e.onClose,n=e.onSubmit,l={type:"REGULAR"};return r.a.createElement(A.a,{open:t,onClose:a,fullWidth:!0},r.a.createElement(W.a,null,"Add User"),r.a.createElement(x.a,null,r.a.createElement(I.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(L.a,{margin:"dense",label:"name",type:"text",fullWidth:!0,onChange:o("displayName")}),r.a.createElement(L.a,{margin:"dense",label:"email",type:"email",fullWidth:!0,onChange:o("email")}),r.a.createElement(B.a,{fullWidth:!0},r.a.createElement(H.a,{htmlFor:"user-type"},"type"),r.a.createElement(G.a,{native:!0,inputProps:{name:"type",id:"user-type"},onChange:o("type"),defaultValue:l.type},r.a.createElement("option",{value:"REGULAR"},"Regular"),r.a.createElement("option",{value:"STAFF"},"Staff"),r.a.createElement("option",{value:"SPEAKER"},"Speaker"))))),r.a.createElement(V.a,null,r.a.createElement(U.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(U.a,{onClick:function(){return n(l)},color:"primary"},"Save")));function o(e){return function(t){return l[e]=t.target.value}}}var ee=a(150),te=a(78),ae=a.n(te),ne=a(122),re=a.n(ne),le=a(230),oe=a(231),ce=a(232),ie=a(233);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var se=Object(v.a)(function(e){return{root:{marginTop:e.spacing(3),flexGrow:1,marginBottom:e.spacing(10)},bio:{height:"175px",overflow:"auto"},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)},avatar:{width:128,height:128}}});function pe(e){var t=e.speakers,a=e.storage,l=se(),o=Object(n.useState)({open:!1,speaker:{}}),c=Object(h.a)(o,2),i=c[0],m=c[1],u=Object(R.a)(t),s=Object(h.a)(u,3),p=s[0],d=s[1],E=s[2];return d?r.a.createElement(D.a,{style:{position:"absolute",top:"50%",left:"50%"}}):E?r.a.createElement("p",null,"ERROR: ",E.toString()):[r.a.createElement(b.a,{key:"title",variant:"h5"},"Edit speakers"),r.a.createElement(de,{key:"grid",rows:p.docs,onEdit:function(e){m({open:!0,speaker:e})},onRemove:function(e){t.doc(e.id).delete()}}),r.a.createElement(Ee,{key:"edit-speaker",speaker:i.speaker,open:i.open,onClose:function(){m(function(e){return ue({},e,{open:!1})})},onUpdate:function(e){e.id?t.doc(e.id).set(e):t.add(e);m(function(e){return ue({},e,{open:!1})})},storage:a}),r.a.createElement(N.a,{key:"action",onClick:function(){return m({open:!0,speaker:{}})},className:l.fab,color:"secondary"},r.a.createElement(T.a,null))]}function de(e){var t=e.rows,a=e.onEdit,n=e.onRemove,l=se();return r.a.createElement("div",{className:l.root},r.a.createElement(I.a,{container:!0,spacing:3},t.map(function(e){var t=ue({id:e.id},e.data());return r.a.createElement(I.a,{item:!0,xs:12,md:4,key:t.id},r.a.createElement(le.a,null,r.a.createElement(oe.a,{avatar:r.a.createElement(ee.a,{alt:t.name,src:t.photo}),title:t.name}),r.a.createElement(ce.a,{className:l.bio},r.a.createElement(b.a,{variant:"caption",color:"textSecondary",component:"p"},t.bio)),r.a.createElement(ie.a,{disableSpacing:!0},r.a.createElement(X.a,{style:{marginLeft:"auto"},onClick:function(){return a(t)}},r.a.createElement(ae.a,null)),r.a.createElement(J,{onSubmit:function(){return n(t)},message:"Do you really want to remove ".concat(t.name,"?")},r.a.createElement(K.a,null)))))})))}function Ee(e){var t=e.speaker,a=e.open,n=e.onClose,l=e.onUpdate,o=e.storage;return r.a.createElement(A.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(W.a,null,t.name?"Edit Speaker":"Add Speaker"),r.a.createElement(x.a,null,r.a.createElement(I.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(fe,{speaker:t,storage:o,onUpdate:function(e){return t.photo=e}}),r.a.createElement(L.a,{margin:"dense",label:"name",type:"text",fullWidth:!0,defaultValue:t.name,onChange:c("name")}),r.a.createElement(L.a,{multiline:!0,margin:"dense",label:"bio",type:"text",fullWidth:!0,defaultValue:t.bio,onChange:c("bio")}))),r.a.createElement(V.a,null,r.a.createElement(U.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(U.a,{onClick:function(){return l(t)},color:"primary"},"Save")));function c(e){return function(a){return t[e]=a.target.value}}}function fe(e){var t,a=e.speaker,l=e.storage,o=e.onUpdate,c=se(),i=Object(n.useState)(a.photo),m=Object(h.a)(i,2),u=m[0],s=m[1];return[r.a.createElement("input",{key:"file",type:"file",ref:function(e){return t=e},style:{display:"none"},onChange:function(e){var t=e.target.files[0];l.child(t.name).put(t).then(function(e){return e.ref.getDownloadURL()}).then(function(e){o(e),s(e)})}}),u?r.a.createElement(ee.a,{key:"avatar",onClick:p,alt:a.name,src:a.photo,className:c.avatar}):r.a.createElement(ee.a,{key:"avatar",onClick:p,alt:a.name,className:c.avatar},r.a.createElement(re.a,{className:c.avatar}))];function p(){t.click()}}var be=a(237),ge=a(241),ye=a(247),he=a(123),ve=a.n(he);function ke(e){var t=e.speaker,a=Object(M.a)(e,["speaker"]);return r.a.createElement(ye.a,Object.assign({avatar:t.photo?r.a.createElement(ee.a,{src:t.photo}):r.a.createElement(ee.a,null,r.a.createElement(ve.a,null)),label:t.name},a))}var Oe=a(177),we=a(121);function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Se=Object(v.a)(function(e){return{root:{marginTop:e.spacing(3),flexGrow:1,marginBottom:e.spacing(10)},bio:{height:"175px",overflow:"auto"},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)},avatar:{width:128,height:128}}});function Re(e){var t=e.slots,a=e.speakers,l=Se(),o=Object(n.useState)({open:!1,slot:{}}),c=Object(h.a)(o,2),i=c[0],m=c[1],u=Object(R.a)(t.orderBy("start")),s=Object(h.a)(u,3),p=s[0],d=s[1],E=s[2],f=Object(R.a)(a),g=Object(h.a)(f,3),y=g[0],v=g[1],k=g[2];return d||v?r.a.createElement(D.a,{style:{position:"absolute",top:"50%",left:"50%"}}):E||k?r.a.createElement("p",null,"ERROR: ",E.toString()+k.toString()):[r.a.createElement(b.a,{key:"title",variant:"h5"},"Edit schedule"),r.a.createElement(De,{key:"table",rows:p.docs,speakers:y.docs,onEdit:function(e){m({open:!0,slot:e})},onRemove:function(e){t.doc(e.id).delete()}}),r.a.createElement(Ne,{key:"edit-slot",slot:i.slot,open:i.open,onClose:function(){m(function(e){return Ce({},e,{open:!1})})},onUpdate:function(e){var a={start:Number.isInteger(e.start)?e.start:Date.parse(e.start),end:Number.isInteger(e.end)?e.end:Date.parse(e.end),title:e.title,type:e.type,content:e.content,order:e.order};console.log({slot:e,updateSlotData:a}),e.id?t.doc(e.id).set(a,{merge:!0}):t.add(a);m(function(e){return Ce({},e,{open:!1})})},speakers:y.docs}),r.a.createElement(N.a,{key:"action",onClick:function(){return m(function(e){return{open:!0,slot:{}}})},className:l.fab,color:"secondary"},r.a.createElement(T.a,null))]}function De(e){var t=e.rows,a=e.speakers,n=e.onEdit,l=e.onRemove,o=Se(),c=t.sort(function(e,t){return e.start-t.start||(e.order||0)-(t.order||0)});return r.a.createElement(S.a,{className:o.root},r.a.createElement(k.a,{size:"small"},r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(w.a,{component:"th"},"Day"),r.a.createElement(w.a,{component:"th"},"Start"),r.a.createElement(w.a,{component:"th"},"End"),r.a.createElement(w.a,{component:"th"},"Type"),r.a.createElement(w.a,{component:"th"},"Order"),r.a.createElement(w.a,{component:"th"},"Title"),r.a.createElement(w.a,{component:"th",style:{minWidth:400}},"Speakers"),r.a.createElement(w.a,{style:{minWidth:145},component:"th"},"Actions"))),r.a.createElement(O.a,null,c.map(function(e){var t=Ce({id:e.id},e.data());return r.a.createElement(C.a,{key:t.id},r.a.createElement(w.a,{scope:"row"},Object(be.a)(new Date(t.start),"EEEE",{locale:ge.a})),r.a.createElement(w.a,{scope:"row"},Object(be.a)(new Date(t.start),"H:mm:ss",{locale:ge.a})),r.a.createElement(w.a,{scope:"row"},Object(be.a)(new Date(t.end),"H:mm:ss",{locale:ge.a})),r.a.createElement(w.a,{scope:"row"},t.type),r.a.createElement(w.a,{scope:"row"},t.order),r.a.createElement(w.a,{scope:"row"},t.title),r.a.createElement(w.a,{scope:"row"},Pe(t.speakers,a)),r.a.createElement(w.a,null,r.a.createElement(X.a,{onClick:function(){return n(t)}},r.a.createElement(ae.a,null)),r.a.createElement(J,{onSubmit:function(){return l(t)},message:"Do you really want to remove ".concat(t.title,"?")},r.a.createElement(K.a,null))))}))))}function Ne(e){var t=e.slot,a=e.open,n=e.onClose,l=e.onUpdate,o=e.speakers,c=t.start?new Date(t.start):new Date,i=t.end?new Date(t.end):new Date;return r.a.createElement(A.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(W.a,null,t.title?"Edit Slot":"Add Slot"),r.a.createElement(x.a,null,r.a.createElement(L.a,{margin:"dense",label:"title",type:"text",fullWidth:!0,defaultValue:t.title,onChange:m("title")}),r.a.createElement(L.a,{margin:"dense",label:"content",type:"text",fullWidth:!0,defaultValue:t.content,multiline:!0,onChange:m("content")}),r.a.createElement(L.a,{margin:"dense",label:"start",type:"datetime-local",fullWidth:!0,defaultValue:Object(be.a)(c,"yyyy-MM-dd'T'HH:mm",{locale:ge.a}),onChange:m("start")}),r.a.createElement(L.a,{margin:"dense",label:"end",type:"datetime-local",fullWidth:!0,defaultValue:Object(be.a)(i,"yyyy-MM-dd'T'HH:mm",{locale:ge.a}),onChange:m("end")}),r.a.createElement(B.a,{margin:"dense",fullWidth:!0},r.a.createElement(H.a,{shrink:!0},"type"),r.a.createElement(we.a,{defaultValue:t.type,input:r.a.createElement(Oe.a,{onChange:m("type")})},r.a.createElement("option",{value:"TALK"},"TALK"),r.a.createElement("option",{value:"TECHNICAL"},"TECHNICAL"),r.a.createElement("option",{value:"LIGHTNING"},"LIGHTNING"))),r.a.createElement(L.a,{margin:"dense",label:"order",type:"number",fullWidth:!0,defaultValue:t.order,onChange:m("order"),inputProps:{min:0}}),Pe(t.speakers,o)),r.a.createElement(V.a,null,r.a.createElement(U.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(U.a,{onClick:function(){return l(t)},color:"primary"},"Save")));function m(e){return function(a){return t[e]=a.target.value}}}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map(function(e){return e.id}).map(function(e){return t.find(function(t){return t.id===e})}).map(function(e){return r.a.createElement(ke,{key:e.id,speaker:e.data(),style:{marginRight:10}})})}var Te="rgba(214, 175, 54, 0.3)",Ae=Object(v.a)(function(e){return{root:{marginTop:e.spacing(3),flexGrow:1,marginBottom:e.spacing(10)},bio:{height:"175px",overflow:"auto"},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)},avatar:{width:128,height:128},tableRegular:{"& tbody tr:nth-child(-n+3)":{backgroundColor:"rgba(167, 112, 68, 0.1)"},"& tbody tr:nth-child(-n+2)":{backgroundColor:"rgba(215, 215, 215, 0.3)"},"& tbody tr:nth-child(-n+1)":{backgroundColor:Te}},tableLightning:{"& tbody tr:nth-child(-n+1)":{backgroundColor:Te}}}});function We(e){var t=e.slots,a=e.speakers,l=Ae(),o=Object(R.b)(t.orderBy("start")),c=Object(h.a)(o,3),i=c[0],m=c[1],u=c[2],s=Object(R.a)(a),p=Object(h.a)(s,3),d=p[0],E=p[1],f=p[2];if(m||E)return r.a.createElement(D.a,{style:{position:"absolute",top:"50%",left:"50%"}});if(u||f)return r.a.createElement("p",null,"ERROR: ",u.toString()+f.toString());var g=i.filter(function(e){return"TALK"===e.type}).sort(function(e,t){var a=e.score,n=void 0===a?0:a,r=t.score;return(void 0===r?0:r)-n}),y=i.filter(function(e){return"LIGHTNING"===e.type}).sort(function(e,t){var a=e.score,n=void 0===a?0:a,r=t.score;return(void 0===r?0:r)-n});function v(e){return e.map(function(e){var t=e.id;return d.docs.find(function(e){return e.id===t})}).map(function(e){return r.a.createElement(ke,{key:e.id,speaker:e.data(),style:{marginRight:10}})})}return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{key:"title",variant:"h5"},"Voting results"),r.a.createElement(I.a,{container:!0,spacing:10},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement("h4",{className:l.cardTitleWhite},"Regular Talks"),r.a.createElement(S.a,{className:l.root},r.a.createElement(k.a,{className:l.table,size:"small"},r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(w.a,null,"Rank"),r.a.createElement(w.a,null,"Score (Votes Count)"),r.a.createElement(w.a,null,"Title"),r.a.createElement(w.a,null,"Speakers"))),r.a.createElement(O.a,null,g.map(function(e,t){return r.a.createElement(C.a,{key:e.title},r.a.createElement(w.a,null,t+1),r.a.createElement(w.a,null,"".concat(e.score||0," (").concat(e.votesCount||0,")")),r.a.createElement(w.a,null,e.title),r.a.createElement(w.a,null,v(e.speakers||[])))}))))),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement("h4",{className:l.cardTitleWhite},"Lightning Talks"),r.a.createElement(S.a,{className:l.root},r.a.createElement(k.a,{className:l.table,size:"small"},r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement(w.a,null,"Rank"),r.a.createElement(w.a,null,"Score (Votes Count)"),r.a.createElement(w.a,null,"Title"),r.a.createElement(w.a,null,"Speakers"))),r.a.createElement(O.a,null,y.map(function(e,t){return r.a.createElement(C.a,{key:e.title},r.a.createElement(w.a,null,t+1),r.a.createElement(w.a,null,"".concat(e.score||0," (").concat(e.votesCount||0,")")),r.a.createElement(w.a,null,e.title),r.a.createElement(w.a,null,v(e.speakers||[])))})))))))}function xe(e){var t=e.children;return r.a.createElement(b.a,{component:"section",role:"tabpanel"},r.a.createElement(g.a,{p:3},t))}var Ie=function(e){var t=e.db,a=e.storage;return r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",render:function(e){var l=e.location;return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{position:"static",key:"appbar"},r.a.createElement(E.a,{value:l.pathname,component:"div",centered:!0,variant:"fullWidth"},r.a.createElement(f.a,{label:"Home",value:"/",component:u.b,to:"/"}),r.a.createElement(f.a,{label:"Users",value:"/users",component:u.b,to:"/users"}),r.a.createElement(f.a,{label:"Speakers",value:"/speakers",component:u.b,to:"/speakers"}),r.a.createElement(f.a,{label:"Schedule",value:"/schedule",component:u.b,to:"/schedule"}),r.a.createElement(f.a,{label:"Results",value:"/results",component:u.b,to:"/results"}))),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/users",render:function(){return r.a.createElement(xe,null,r.a.createElement(q,{users:t.collection("users")}))}}),r.a.createElement(s.a,{path:"/speakers",render:function(){return r.a.createElement(xe,null,r.a.createElement(pe,{speakers:t.collection("speakers"),storage:a.ref()}))}}),r.a.createElement(s.a,{path:"/schedule",render:function(){return r.a.createElement(xe,null,r.a.createElement(Re,{slots:t.collection("schedule"),speakers:t.collection("speakers")}))}}),r.a.createElement(s.a,{path:"/results",render:function(){return r.a.createElement(xe,null,r.a.createElement(We,{slots:t.collection("schedule"),speakers:t.collection("speakers")}))}})))}}))};m.a.initializeApp({projectId:"atm-voting",apiKey:"AIzaSyDwGFsr2F-ju_u162LengdX2BeGZ_Bh4Xw",authDomain:"firebase-adminsdk-99hyc@atm-voting.iam.gserviceaccount.com",storageBucket:"atm-voting.appspot.com"}),o.a.render([r.a.createElement(c.a,{key:"css"}),r.a.createElement(Ie,{key:"app",db:m.a.firestore(),storage:m.a.storage()})],document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.b72de130.chunk.js.map