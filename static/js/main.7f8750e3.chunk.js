(window["webpackJsonpatm-event-admin"]=window["webpackJsonpatm-event-admin"]||[]).push([[0],{129:function(e,t,a){e.exports=a(162)},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=a(228),i=(a(134),a(137),a(163),a(164),a(75)),m=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(7),u=a(111),p=a.n(u),d=a(231),E=a(227),f=a(56),y=a(230),b=a(13),g=a(168),h=a(215),v=a(219),k=a(218),O=a(216),w=a(217),j=a(84),C=a(41),S=a(213),D=a(214),P=a(51),R=a.n(P),A=a(236),N=a(209),W=a(210),x=a(220),T=a(234),I=a(232),L=a(221),U=a(238),B=a(211),G=a(212),H=a(52),V=a.n(H),F=a(237),K=a(2),M=a(206);function z(e){var t=e.message,a=e.children,o=e.onSubmit,l=Object(K.a)(e,["message","children","onSubmit"]),c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],u=i[1];return[r.a.createElement(M.a,Object.assign({key:"button",onClick:function(){return u(!0)}},l),a),r.a.createElement(A.a,{fullWidth:!0,key:"confirmation",disableBackdropClick:!0,disableEscapeKeyDown:!0,open:m},r.a.createElement(N.a,{id:"confirmation-dialog-title"},"Confirmation"),r.a.createElement(W.a,{dividers:!0},r.a.createElement("p",null,t)),r.a.createElement(B.a,null,r.a.createElement(G.a,{onClick:function(){return u(!1)},color:"primary"},"Cancel"),r.a.createElement(G.a,{onClick:function(){o(),u(!1)},color:"primary"},"Ok")))]}function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _=Object(g.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",marginBottom:e.spacing(10)},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)}}});function Z(e){var t=e.users,a=_(),o=Object(n.useState)(!1),l=Object(s.a)(o,2),c=l[0],i=l[1],m=Object(C.a)(t),u=Object(s.a)(m,3),p=u[0],d=u[1],E=u[2];return d?r.a.createElement(S.a,{style:{position:"absolute",top:"50%",left:"50%"}}):E?r.a.createElement("p",null,"ERROR: ",E.toString()):[r.a.createElement(f.a,{key:"title",variant:"h5"},"Edit users"),r.a.createElement($,{key:"table",rows:p.docs,onRemove:function(e){e.admin||t.doc(e.id).delete()},onActivate:function(e,a){t.doc(e.id).update({isActive:a})}}),r.a.createElement(q,{key:"add-user",open:c,onClose:function(){i(!1)},onSubmit:function(e){t.add(J({},e,{isActive:!0})),i(!1)}}),r.a.createElement(D.a,{key:"action",onClick:function(){return i(!0)},className:a.fab,color:"secondary"},r.a.createElement(R.a,null))]}function $(e){var t=e.rows,a=e.onRemove,n=e.onActivate,o=_();return r.a.createElement(j.a,{className:o.root},r.a.createElement(h.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{component:"th"},"Name"),r.a.createElement(k.a,{component:"th"},"Email"),r.a.createElement(k.a,{component:"th"},"Actions"),r.a.createElement(k.a,{component:"th",align:"right"},"Active"))),r.a.createElement(v.a,null,t.map(function(e){var t=J({id:e.id},e.data());return r.a.createElement(w.a,{key:t.id},r.a.createElement(k.a,{scope:"row"},t.displayName),r.a.createElement(k.a,{scope:"row"},t.email),r.a.createElement(k.a,{scope:"row"},r.a.createElement(z,{disabled:t.admin,onSubmit:function(){return a(t)},message:"Do you really want to remove ".concat(t.displayName,"?")},r.a.createElement(V.a,null))),r.a.createElement(k.a,{align:"right"},r.a.createElement(F.a,{checked:t.isActive,onChange:function(e){return n(t,e.target.checked)}})))}))))}function q(e){var t=e.open,a=e.onClose,n=e.onSubmit,o={type:"REGULAR"};return r.a.createElement(A.a,{open:t,onClose:a,fullWidth:!0},r.a.createElement(N.a,null,"Add User"),r.a.createElement(W.a,null,r.a.createElement(x.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(T.a,{margin:"dense",label:"name",type:"text",fullWidth:!0,onChange:l("displayName")}),r.a.createElement(T.a,{margin:"dense",label:"email",type:"email",fullWidth:!0,onChange:l("email")}),r.a.createElement(L.a,{fullWidth:!0},r.a.createElement(U.a,{htmlFor:"user-type"},"type"),r.a.createElement(I.a,{native:!0,inputProps:{name:"type",id:"user-type"},onChange:l("type"),defaultValue:o.type},r.a.createElement("option",{value:"REGULAR"},"Regular"),r.a.createElement("option",{value:"STAFF"},"Staff"),r.a.createElement("option",{value:"SPEAKER"},"Speaker"))))),r.a.createElement(B.a,null,r.a.createElement(G.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(G.a,{onClick:function(){return n(o)},color:"primary"},"Save")));function l(e){return function(t){return o[e]=t.target.value}}}var Q=a(143),Y=a(73),ee=a.n(Y),te=a(109),ae=a.n(te),ne=a(222),re=a(223),oe=a(224),le=a(225);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var me=Object(g.a)(function(e){return{root:{marginTop:e.spacing(3),flexGrow:1,marginBottom:e.spacing(10)},bio:{height:"175px",overflow:"auto"},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)},avatar:{width:128,height:128}}});function se(e){var t=e.speakers,a=e.storage,o=me(),l=Object(n.useState)({open:!1,speaker:{}}),c=Object(s.a)(l,2),i=c[0],m=c[1],u=Object(C.a)(t),p=Object(s.a)(u,3),d=p[0],E=p[1],y=p[2];return E?r.a.createElement(S.a,{style:{position:"absolute",top:"50%",left:"50%"}}):y?r.a.createElement("p",null,"ERROR: ",y.toString()):[r.a.createElement(f.a,{key:"title",variant:"h5"},"Edit speakers"),r.a.createElement(ue,{key:"grid",rows:d.docs,onEdit:function(e){m({open:!0,speaker:e})},onRemove:function(e){t.doc(e.id).delete()}}),r.a.createElement(pe,{key:"edit-speaker",speaker:i.speaker,open:i.open,onClose:function(){m(function(e){return ie({},e,{open:!1})})},onUpdate:function(e){e.id?t.doc(e.id).set(e):t.add(e);m(function(e){return ie({},e,{open:!1})})},storage:a}),r.a.createElement(D.a,{key:"action",onClick:function(){return m({open:!0,speaker:{}})},className:o.fab,color:"secondary"},r.a.createElement(R.a,null))]}function ue(e){var t=e.rows,a=e.onEdit,n=e.onRemove,o=me();return r.a.createElement("div",{className:o.root},r.a.createElement(x.a,{container:!0,spacing:3},t.map(function(e){var t=ie({id:e.id},e.data());return r.a.createElement(x.a,{item:!0,xs:12,md:4,key:t.id},r.a.createElement(ne.a,null,r.a.createElement(re.a,{avatar:r.a.createElement(Q.a,{alt:t.name,src:t.photo}),title:t.name}),r.a.createElement(oe.a,{className:o.bio},r.a.createElement(f.a,{variant:"caption",color:"textSecondary",component:"p"},t.bio)),r.a.createElement(le.a,{disableSpacing:!0},r.a.createElement(M.a,{style:{marginLeft:"auto"},onClick:function(){return a(t)}},r.a.createElement(ee.a,null)),r.a.createElement(z,{onSubmit:function(){return n(t)},message:"Do you really want to remove ".concat(t.name,"?")},r.a.createElement(V.a,null)))))})))}function pe(e){var t=e.speaker,a=e.open,n=e.onClose,o=e.onUpdate,l=e.storage;return r.a.createElement(A.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(N.a,null,t.name?"Edit Speaker":"Add Speaker"),r.a.createElement(W.a,null,r.a.createElement(x.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(de,{speaker:t,storage:l,onUpdate:function(e){return t.photo=e}}),r.a.createElement(T.a,{margin:"dense",label:"name",type:"text",fullWidth:!0,defaultValue:t.name,onChange:c("name")}),r.a.createElement(T.a,{multiline:!0,margin:"dense",label:"bio",type:"text",fullWidth:!0,defaultValue:t.bio,onChange:c("bio")}))),r.a.createElement(B.a,null,r.a.createElement(G.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(G.a,{onClick:function(){return o(t)},color:"primary"},"Save")));function c(e){return function(a){return t[e]=a.target.value}}}function de(e){var t,a=e.speaker,o=e.storage,l=e.onUpdate,c=me(),i=Object(n.useState)(a.photo),m=Object(s.a)(i,2),u=m[0],p=m[1];return[r.a.createElement("input",{key:"file",type:"file",ref:function(e){return t=e},style:{display:"none"},onChange:function(e){var t=e.target.files[0];o.child(t.name).put(t).then(function(e){return e.ref.getDownloadURL()}).then(function(e){l(e),p(e)})}}),u?r.a.createElement(Q.a,{key:"avatar",onClick:d,alt:a.name,src:a.photo,className:c.avatar}):r.a.createElement(Q.a,{key:"avatar",onClick:d,alt:a.name,className:c.avatar},r.a.createElement(ae.a,{className:c.avatar}))];function d(){t.click()}}var Ee=a(229),fe=a(233),ye=a(239),be=a(110),ge=a.n(be);function he(e){var t=e.speaker,a=Object(K.a)(e,["speaker"]);return r.a.createElement(ye.a,Object.assign({avatar:t.photo?r.a.createElement(Q.a,{src:t.photo}):r.a.createElement(Q.a,null,r.a.createElement(ge.a,null)),label:t.name},a))}var ve=a(169),ke=a(108);function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var je=Object(g.a)(function(e){return{root:{marginTop:e.spacing(3),flexGrow:1,marginBottom:e.spacing(10)},bio:{height:"175px",overflow:"auto"},fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)},avatar:{width:128,height:128}}});function Ce(e){var t=e.slots,a=e.speakers,o=je(),l=Object(n.useState)({open:!1,slot:{}}),c=Object(s.a)(l,2),i=c[0],m=c[1],u=Object(C.a)(t.orderBy("start")),p=Object(s.a)(u,3),d=p[0],E=p[1],y=p[2],b=Object(C.a)(a),g=Object(s.a)(b,3),h=g[0],v=g[1],k=g[2];return E||v?r.a.createElement(S.a,{style:{position:"absolute",top:"50%",left:"50%"}}):y||k?r.a.createElement("p",null,"ERROR: ",y.toString()+k.toString()):[r.a.createElement(f.a,{key:"title",variant:"h5"},"Edit schedule"),r.a.createElement(Se,{key:"table",rows:d.docs,speakers:h.docs,onEdit:function(e){m({open:!0,slot:e})},onRemove:function(e){t.doc(e.id).delete()}}),r.a.createElement(De,{key:"edit-slot",slot:i.slot,open:i.open,onClose:function(){m(function(e){return we({},e,{open:!1})})},onUpdate:function(e){e.start=Date.parse(e.start),e.end=Date.parse(e.end),e.id?t.doc(e.id).set(e):t.add(e);m(function(e){return we({},e,{open:!1})})}}),r.a.createElement(D.a,{key:"action",onClick:function(){return m(function(e){return{open:!0,slot:{}}})},className:o.fab,color:"secondary"},r.a.createElement(R.a,null))]}function Se(e){var t=e.rows,a=e.speakers,n=e.onEdit,o=e.onRemove,l=je(),c=t.sort(function(e,t){return e.start-t.start||(e.order||0)-(t.order||0)});return r.a.createElement(j.a,{className:l.root},r.a.createElement(h.a,{size:"small"},r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{component:"th"},"Day"),r.a.createElement(k.a,{component:"th"},"Start"),r.a.createElement(k.a,{component:"th"},"End"),r.a.createElement(k.a,{component:"th"},"Type"),r.a.createElement(k.a,{component:"th"},"Order"),r.a.createElement(k.a,{component:"th"},"Title"),r.a.createElement(k.a,{component:"th",style:{minWidth:400}},"Speakers"),r.a.createElement(k.a,{style:{minWidth:145},component:"th"},"Actions"))),r.a.createElement(v.a,null,c.map(function(e){var t=we({id:e.id},e.data());return r.a.createElement(w.a,{key:t.id},r.a.createElement(k.a,{scope:"row"},Object(Ee.a)(new Date(t.start),"EEEE",{locale:fe.a})),r.a.createElement(k.a,{scope:"row"},Object(Ee.a)(new Date(t.start),"H:mm:ss",{locale:fe.a})),r.a.createElement(k.a,{scope:"row"},Object(Ee.a)(new Date(t.end),"H:mm:ss",{locale:fe.a})),r.a.createElement(k.a,{scope:"row"},t.type),r.a.createElement(k.a,{scope:"row"},t.order),r.a.createElement(k.a,{scope:"row"},t.title),r.a.createElement(k.a,{scope:"row"},t.speakers.map(function(e){return e.id}).map(function(e){return a.find(function(t){return t.id===e})}).map(function(e){return r.a.createElement(he,{key:e.id,speaker:e.data(),style:{marginRight:10}})})),r.a.createElement(k.a,null,r.a.createElement(M.a,{onClick:function(){return n(t)}},r.a.createElement(ee.a,null)),r.a.createElement(z,{onSubmit:function(){return o(t)},message:"Do you really want to remove ".concat(t.title,"?")},r.a.createElement(V.a,null))))}))))}function De(e){var t=e.slot,a=e.open,n=e.onClose,o=e.onUpdate,l=t.start?new Date(t.start):new Date,c=t.end?new Date(t.end):new Date;return r.a.createElement(A.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(N.a,null,t.title?"Edit Slot":"Add Slot"),r.a.createElement(W.a,null,r.a.createElement(T.a,{margin:"dense",label:"title",type:"text",fullWidth:!0,defaultValue:t.title,onChange:i("title")}),r.a.createElement(T.a,{margin:"dense",label:"start",type:"datetime-local",fullWidth:!0,defaultValue:Object(Ee.a)(l,"yyyy-MM-dd'T'HH:mm",{locale:fe.a}),onChange:i("start")}),r.a.createElement(T.a,{margin:"dense",label:"end",type:"datetime-local",fullWidth:!0,defaultValue:Object(Ee.a)(c,"yyyy-MM-dd'T'HH:mm",{locale:fe.a}),onChange:i("end")}),r.a.createElement(L.a,{margin:"dense",fullWidth:!0},r.a.createElement(U.a,{shrink:!0},"type"),r.a.createElement(ke.a,{defaultValue:t.type,input:r.a.createElement(ve.a,{onChange:i("type")})},r.a.createElement("option",{value:"TALK"},"TALK"),r.a.createElement("option",{value:"TECHNICAL"},"TECHNICAL"),r.a.createElement("option",{value:"LIGHTNING"},"LIGHTNING"))),r.a.createElement(T.a,{margin:"dense",label:"order",type:"number",fullWidth:!0,defaultValue:t.order,onChange:i("order"),inputProps:{min:0}}),r.a.createElement(T.a,{margin:"dense",label:"speakers",type:"text",fullWidth:!0,defaultValue:t.speakers,onChange:i("speakers")})),r.a.createElement(B.a,null,r.a.createElement(G.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(G.a,{onClick:function(){return o(t)},color:"primary"},"Save")));function i(e){return function(a){return t[e]=a.target.value}}}function Pe(e){var t=e.children,a=e.value,n=e.index;return r.a.createElement(f.a,{component:"section",role:"tabpanel",hidden:a!==n},r.a.createElement(y.a,{p:3},t))}var Re=function(e){var t=e.db,a=e.storage,o=Object(n.useState)(0),l=Object(s.a)(o,2),c=l[0],i=l[1];return[r.a.createElement(p.a,{position:"static",key:"appbar"},r.a.createElement(d.a,{component:"div",value:c,centered:!0,variant:"fullWidth",onChange:function(e,t){return i(t)}},r.a.createElement(E.a,{label:"Users"}),r.a.createElement(E.a,{label:"Speakers"}),r.a.createElement(E.a,{label:"Schedule"}))),r.a.createElement(Pe,{value:c,index:0,key:"usersTab"},r.a.createElement(Z,{users:t.collection("users")})),r.a.createElement(Pe,{value:c,index:1,key:"speakersTab"},r.a.createElement(se,{speakers:t.collection("speakers"),storage:a.ref()})),r.a.createElement(Pe,{value:c,index:2,key:"scheduleTab"},r.a.createElement(Ce,{slots:t.collection("schedule"),speakers:t.collection("speakers")}))]};m.a.initializeApp({projectId:"atm-voting",apiKey:"AIzaSyDwGFsr2F-ju_u162LengdX2BeGZ_Bh4Xw",authDomain:"firebase-adminsdk-99hyc@atm-voting.iam.gserviceaccount.com",storageBucket:"atm-voting.appspot.com"}),l.a.render([r.a.createElement(c.a,{key:"css"}),r.a.createElement(Re,{key:"app",db:m.a.firestore(),storage:m.a.storage()})],document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,1,2]]]);
//# sourceMappingURL=main.7f8750e3.chunk.js.map