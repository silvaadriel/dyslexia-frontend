(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"setIsAnswered",function(){return g}),a.d(i,"setIsVerified",function(){return h}),a.d(i,"setCurrentAnswer",function(){return f}),a.d(i,"verifyAnswer",function(){return w});var n={};a.r(n),a.d(n,"fetchModules",function(){return E});var l={};a.r(l),a.d(l,"fetchQuestions",function(){return A});var r={};a.r(r),a.d(r,"getEarnedStars",function(){return j});var s={};a.r(s),a.d(s,"answer",function(){return i}),a.d(s,"module",function(){return n}),a.d(s,"lesson",function(){return l}),a.d(s,"score",function(){return r});var o=a(0),c=a.n(o),m=a(25),u=a.n(m),p=a(10),v=a(61),d=a(60),g=function(e,t){e.setState({isAnswered:t})},h=function(e,t){e.setState({isVerified:t})},f=function(e,t){e.setState({currentAnswer:t})},w=function(e,t){if(e.state.questions[t].rightAnswer===e.state.currentAnswer)e.setState({score:e.state.score+1}),console.log("correto",e.state.score),console.log(e.actions.score.getEarnedStars()," estrelas"),e.actions.answer.setIsVerified(!0);else{e.actions.answer.setIsVerified(!0);var a=Object(d.a)(e.state.questions);a.push(e.state.questions[t]),e.setState({questions:a})}},C=a(50),R=function(){return new Promise(function(e){setTimeout(function(){e(C)},10)})},E=function(e){R().then(function(t){return e.setState({modules:t})})},b=a(51),q=function(e){var t=e.lessonId,a=e.moduleId;return new Promise(function(e){setTimeout(function(){var i=b.filter(function(e){return e.id===parseInt(a)})[0].lessons.filter(function(e){return e.id===parseInt(t)})[0].questions;e(i)},1e3)})},A=function(e,t){e.setState({isLoading:!0}),q(t).then(function(t){e.setState({questions:t}),e.setState({isLoading:!1})})},j=function(e){var t=e.state,a=t.questions,i=100*t.score/a.length;return console.log(i),100===i?3:i>60?2:1},I=Object(v.a)(c.a,{isAnswered:!1,isVerified:!1,currentAnswer:"",modules:[],questions:[],score:0,isLoading:!0},s),x=a(102),Q=a(126),k=a(123),S=a(125),O=a(127),y=a(144),L=a(131),F=a(132),D=a(133),M=a(34),z=a.n(M),B=a(29),V=a(124),N=a(128),P=a(129),H=a(122),W=a(130),X=Object(x.a)(function(e){return{card:{maxHeight:300},rightIcon:{marginLeft:e.spacing(1)},description:{height:120},star:{color:"#112233"}}}),G=function(e){var t=X();return c.a.createElement(k.a,{className:t.card},c.a.createElement(V.a,null,c.a.createElement(S.a,null,c.a.createElement(Q.a,{container:!0,spacing:2,direction:"column",justify:"space-around",alignItems:"stretch"},c.a.createElement(Q.a,{container:!0,justify:"space-between",alignItems:"center",item:!0},c.a.createElement(Q.a,{item:!0},c.a.createElement(O.a,{component:"h2",variant:"h4"},e.lesson.title)),c.a.createElement(Q.a,{item:!0},function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0===t?a:(a.push(c.a.createElement(H.a,{key:t})),e(t-1,a))}(e.lesson.stars))),c.a.createElement(Q.a,{item:!0},c.a.createElement(O.a,{className:t.description,variant:"body1",component:"p"},e.lesson.description))))),c.a.createElement(N.a,null,c.a.createElement(P.a,{variant:"outlined",color:"primary",size:"small","aria-label":"Come\xe7ar",component:B.b,to:"/dyslexia-frontend/lesson/".concat(e.lesson.moduleId,"/").concat(e.lesson.lessonId)},"Come\xe7ar",c.a.createElement(W.a,{className:t.rightIcon}))))},U=["#FEC33F","#DA674F","#A2D076","#904A6A","#E95980"],Y=Object(x.a)({card:{minHeight:"100vh",paddingBottom:"50px"},mobileStepperRoot:{justifyContent:"space-around",background:"transparent",padding:"20px"}}),Z=function(e){var t=e.modules,a=Y(),i=t.length,n=Object(o.useState)(0),l=Object(p.a)(n,2),r=l[0],s=l[1];return c.a.createElement(Q.a,null,c.a.createElement(z.a,{index:r,onChangeIndex:function(e){return s(e)},enableMouseEvents:!0},t.map(function(e,t){return c.a.createElement(k.a,{square:!0,style:{background:U[t]},className:a.card,key:e.title},c.a.createElement(S.a,null,c.a.createElement(Q.a,{container:!0,spacing:4,direction:"row",justify:"center",alignItems:"center"},c.a.createElement(Q.a,{item:!0,xs:12},c.a.createElement(O.a,{align:"center",component:"h1",variant:"h2"},e.title)),e.lessons.map(function(e,t){return c.a.createElement(Q.a,{item:!0,md:!0,sm:12,xs:12,key:t},c.a.createElement(G,{lesson:e}))}))))})),c.a.createElement(y.a,{classes:{root:a.mobileStepperRoot},steps:i,activeStep:r,nextButton:c.a.createElement(L.a,{variant:"extended",size:"medium",onClick:function(){return s(function(e){return e+1})},disabled:r===i-1,"aria-label":"Pr\xf3ximo"},"Pr\xf3ximo",c.a.createElement(F.a,null)),backButton:c.a.createElement(L.a,{variant:"extended",size:"medium",onClick:function(){return s(function(e){return e-1})},disabled:0===r,"aria-label":"Anterior"},c.a.createElement(D.a,null),"Anterior")}))},J=function(){var e=I(),t=Object(p.a)(e,2),a=t[0],i=t[1];return Object(o.useEffect)(function(){i.module.fetchModules()},[i.module]),c.a.createElement(Z,{modules:a.modules})},K=a(21),T=a(138),_=a(135),$=a(142),ee=a(134),te=a(136),ae=a(145),ie=a(137),ne=Object(x.a)({img:{maxWidth:"400px",borderRadius:"10px"},toggleButtonRoot:{color:"#4F4F4F",border:"1px solid rgba(0, 0, 0, 0.25)",borderRadius:"2px",backgroundColor:"#FFFFFF","&:not(:first-child)":{borderLeft:"1px solid rgba(0, 0, 0, 0.25)",marginLeft:"0"},"&.Mui-selected":{color:"#000000",borderColor:"rgba(0, 0, 0, 0.5)"},"&.Mui-disabled":{color:"#AAAAAA",borderColor:"rgba(0, 0, 0, 0.1)"}},toggleButtonGroupRoot:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"200px",width:"350px",backgroundColor:"transparent"}}),le=function(e){var t=e.step,a=ne(),i=I(),n=Object(p.a)(i,2),l=n[0],r=n[1],s=Object(o.useState)(""),m=Object(p.a)(s,2),u=m[0],v=m[1];return c.a.createElement(Q.a,{container:!0,spacing:4,direction:"column",justify:"center",alignItems:"center"},c.a.createElement(Q.a,{item:!0,container:!0,spacing:4,justify:"center",alignItems:"center"},c.a.createElement(Q.a,{item:!0},c.a.createElement(O.a,{align:"center",component:"h1",variant:"h4"},c.a.createElement($.a,{fontWeight:"600"},t.question))),c.a.createElement(Q.a,{item:!0},c.a.createElement(ee.a,{title:"Ouvir","aria-label":"Escutar"},c.a.createElement(_.a,null)))),c.a.createElement(Q.a,{item:!0},c.a.createElement(te.a,{className:a.img,component:"img",alt:t.img.alt,image:t.img.url,title:t.img.title})),c.a.createElement(ae.a,{value:u,onChange:function(e,t){v(t),t?(r.answer.setIsAnswered(!0),r.answer.setCurrentAnswer(t)):r.answer.setIsAnswered(!1)},classes:{root:a.toggleButtonGroupRoot},exclusive:!0},t.alternatives.map(function(e,t){return c.a.createElement(ie.a,{key:t,classes:{root:a.toggleButtonRoot},value:e,disabled:l.isVerified},e)})))},re=Object(x.a)({card:{width:"100vw",height:"100vh",overflowY:"auto"}}),se=function(e){var t=e.step,a=re();return c.a.createElement(k.a,{square:!0,className:a.card},c.a.createElement(S.a,null,c.a.createElement(le,{step:t})))},oe=Object(x.a)(function(e){return{card:{width:"100vw",height:"100vh",overflowY:"auto"},stars:Object(K.a)({color:"#FFD900",fontSize:"150px"},e.breakpoints.down("xs"),{fontSize:"100px"})}}),ce=function(e){var t=oe(),a=I(),i=Object(p.a)(a,2),n=(i[0],i[1]);return c.a.createElement(k.a,{square:!0,className:t.card},c.a.createElement(S.a,null,c.a.createElement(Q.a,{container:!0,spacing:4,direction:"column",justify:"center",alignItems:"center"},c.a.createElement(Q.a,{item:!0},c.a.createElement(O.a,{align:"center",component:"h1",variant:"h4"},c.a.createElement($.a,{fontWeight:"600"},"Li\xe7\xe3o conclu\xedda!"))),c.a.createElement(Q.a,{item:!0},c.a.createElement("div",null,function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return 0===t?i:(i.push(c.a.createElement(H.a,{classes:{root:a},key:t})),e(t-1,a,i))}(n.score.getEarnedStars(),t.stars))))))},me=Object(x.a)(function(e){return{card:{minHeight:"100vh",paddingBottom:"50px"},mobileStepperRoot:{justifyContent:"center",background:"transparent",padding:"20px"},mobileStepperProgress:Object(K.a)({width:"35%",height:"10px",borderRadius:"10px",marginLeft:e.spacing(10),marginRight:e.spacing(10)},e.breakpoints.down("xs"),{width:"100%",height:"4px",margin:"0",position:"absolute",bottom:"0px",borderRadius:"0px"}),rightFab:{"&.MuiFab-sizeMedium":Object(K.a)({boxShadow:"none",width:"125px"},e.breakpoints.down("xs"),{width:"40%",borderRadius:"0px 20px 20px 0px"})},leftFab:{"&.MuiFab-sizeMedium":Object(K.a)({boxShadow:"none",width:"125px"},e.breakpoints.down("xs"),{width:"40%",borderRadius:"20px 0px 0px 20px"})},rightIconMargin:{marginRight:e.spacing(1)}}}),ue=function(e){var t=e.questions,a=me(),i=t.length+1,n=Object(o.useState)(0),l=Object(p.a)(n,2),r=l[0],s=l[1],m=I(),u=Object(p.a)(m,2),v=u[0],d=u[1];return c.a.createElement(Q.a,null,c.a.createElement(z.a,{index:r,onChangeIndex:function(e){return s(e)}},t.map(function(e,t){return c.a.createElement(se,{step:e,key:t})}),c.a.createElement(ce,null)),c.a.createElement(y.a,{variant:"progress",classes:{root:a.mobileStepperRoot,progress:a.mobileStepperProgress},steps:i,activeStep:r,nextButton:c.a.createElement(L.a,{variant:"extended",size:"medium",classes:{extended:a.rightFab},onClick:function(){v.isVerified?(s(function(e){return e+1}),d.answer.setIsVerified(!1),d.answer.setIsAnswered(!1)):d.answer.verifyAnswer(r)},disabled:!v.isAnswered,"aria-label":v.isVerified?"Continuar":"Verificar"},v.isVerified?"Continuar":"Verificar",c.a.createElement(F.a,null)),backButton:c.a.createElement(L.a,{variant:"extended",size:"medium",classes:{extended:a.leftFab},onClick:function(){return s(function(e){return e-1})},disabled:0===r,"aria-label":"Ajuda"},c.a.createElement(T.a,{className:a.rightIconMargin}),"Ajuda")}))},pe=a(139),ve=Object(x.a)({root:{width:"100vw",height:"100vh",overflowY:"auto"}}),de=function(){var e=ve();return c.a.createElement(Q.a,{className:e.root,container:!0,justify:"center",alignItems:"center"},c.a.createElement(pe.a,null))},ge=function(e){var t=I(),a=Object(p.a)(t,2),i=a[0],n=a[1],l=e.match.params;return Object(o.useEffect)(function(){n.lesson.fetchQuestions(l)},[n.lesson,l]),c.a.createElement(c.a.Fragment,null,i.isLoading?c.a.createElement(de,null):c.a.createElement(ue,{questions:i.questions}))},he=a(23);var fe=function(){return c.a.createElement(he.c,null,c.a.createElement(he.a,{exact:!0,path:"/dyslexia-frontend/",component:J}),c.a.createElement(he.a,{path:"/dyslexia-frontend/lesson/:moduleId/:lessonId",component:ge}))},we=a(141),Ce=a(140),Re=a(59),Ee=a(143),be=Object(Re.a)({typography:{fontFamily:["Dosis","sans-serif"].join(",")}}),qe=Object(Ee.a)(be);var Ae=function(){return c.a.createElement(B.a,null,c.a.createElement(Ce.a,{theme:qe},c.a.createElement(we.a,null),c.a.createElement(fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e){e.exports=[{title:"M\xf3dulo 1",lessons:[{moduleId:1,lessonId:1,title:"Li\xe7\xe3o 1",description:"Olhe as figuras e escolha a letra correta que completa a palavra.",stars:0},{moduleId:1,lessonId:2,title:"Li\xe7\xe3o 2",description:"Descri\xe7\xe3o",stars:3},{moduleId:1,lessonId:3,title:"Li\xe7\xe3o 3",description:"Descri\xe7\xe3o",stars:2},{moduleId:1,lessonId:4,title:"Li\xe7\xe3o 4",description:"Descri\xe7\xe3o",stars:1}]},{title:"M\xf3dulo 2",lessons:[{moduleId:2,lessonId:1,title:"Li\xe7\xe3o 1",description:"Descri\xe7\xe3o",stars:2},{moduleId:2,lessonId:2,title:"Li\xe7\xe3o 2",description:"Descri\xe7\xe3o",stars:3},{moduleId:2,lessonId:3,title:"Li\xe7\xe3o 3",description:"Descri\xe7\xe3o",stars:0}]},{title:"M\xf3dulo 3",lessons:[{moduleId:3,lessonId:1,title:"Li\xe7\xe3o 1",description:"Descri\xe7\xe3o",stars:2},{moduleId:3,lessonId:2,title:"Li\xe7\xe3o 2",description:"Descri\xe7\xe3o",stars:3},{moduleId:3,lessonId:3,title:"Li\xe7\xe3o 3",description:"Descri\xe7\xe3o",stars:0}]},{title:"M\xf3dulo 4",lessons:[{moduleId:4,lessonId:1,title:"Li\xe7\xe3o 1",description:"Descri\xe7\xe3o",stars:2},{moduleId:4,lessonId:2,title:"Li\xe7\xe3o 2",description:"Descri\xe7\xe3o",stars:3},{moduleId:4,lessonId:3,title:"Li\xe7\xe3o 3",description:"Descri\xe7\xe3o",stars:0}]},{title:"M\xf3dulo 5",lessons:[{moduleId:5,lessonId:1,title:"Li\xe7\xe3o 1",description:"Descri\xe7\xe3o",stars:2},{moduleId:5,lessonId:2,title:"Li\xe7\xe3o 2",description:"Descri\xe7\xe3o",stars:3},{moduleId:5,lessonId:3,title:"Li\xe7\xe3o 3",description:"Descri\xe7\xe3o",stars:0}]}]},51:function(e){e.exports=[{id:1,lessons:[{id:1,questions:[{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1rSObW_Yo86f3LoEqXaAXtz0l_-P4wkEQ=w1366-h625-iv1",alt:"...anheira",title:"...anheira"},alternatives:["p","b"],rightAnswer:"b"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1rr7D97XRPVzY2_EE3q99w4LujEHTJ6fS=w1366-h625-iv1",alt:"...abana",title:"...abana"},alternatives:["c","g"],rightAnswer:"c"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1Qc7H-EAWPj0k2H0S23FGzGsaGfRszpui=w709-h625-iv1",alt:"...inossauro",title:"...inossauro"},alternatives:["t","d"],rightAnswer:"d"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1RqZzNA86FlAvPPaF2V8Xs4hVtc7s5wlE=w709-h625-iv1",alt:"...ato",title:"...ato"},alternatives:["g","c"],rightAnswer:"g"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/13-kddxKMKIoiE98elUZszkHzUrimJ850=w709-h625-iv1",alt:"...obra",title:"...obra"},alternatives:["g","c"],rightAnswer:"c"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/11RnekvEStkNM9BZQep4HyLERSI4F6ABQ=w709-h625-iv1",alt:"...anela",title:"...anela"},alternatives:["p","b"],rightAnswer:"p"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1QWwkywF9f1fHS1t63bXqsDNVEqdkO4AX=w709-h625-iv1",alt:"...artaruga",title:"...artaruga"},alternatives:["d","t"],rightAnswer:"t"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/1A6KkD9XcO6SBpd08dzUu_HuuI1mwUU5q=w709-h625-iv1",alt:"...ipa",title:"...ipa"},alternatives:["p","b"],rightAnswer:"p"},{question:"Escolha a letra que falta.",img:{url:"https://lh3.google.com/u/0/d/11pheEW2D2Mm3ZzK1PZoCC8mTg5RR2qIB=w709-h625-iv1",alt:"...elefone",title:"...elefone"},alternatives:["t","d"],rightAnswer:"t"}]},{id:2,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]},{id:3,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]},{id:4,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]}]},{id:2,lessons:[{id:1,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]},{id:2,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]},{id:3,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]},{id:4,questions:[{question:"Quest\xe3o 1",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 2",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 3",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 4",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 5",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"},{question:"Quest\xe3o 6",img:{url:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"Contemplative Reptile",title:"Contemplative Reptile"},alternatives:["alternative 1","alternative 2","alternative 3"],rightAnswer:"alternative 1"}]}]}]},65:function(e,t,a){e.exports=a(101)}},[[65,1,2]]]);
//# sourceMappingURL=main.a366c305.chunk.js.map