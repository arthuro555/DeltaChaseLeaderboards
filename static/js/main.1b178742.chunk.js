(this.webpackJsonptypescript=this.webpackJsonptypescript||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var r=s(6),a=s.n(r),n=s(13),c=s.n(n),i=s(9),o=s(10),l=(s(23),function(e){var t=Object(r.useState)(matchMedia(e).matches),s=Object(i.a)(t,2),a=s[0],n=s[1];return Object(r.useEffect)((function(){var t=matchMedia(e),s=function(e){var t=e.matches;return n(t)};return t.addEventListener("change",s),function(){return t.removeEventListener("change",s)}}),[e]),a}),d=s(1),h=function(e){var t=e.onClose,s=l("(min-width:750px)"),r=!l("(min-width:300px)");return Object(d.jsxs)("article",{className:"message is-info",style:s?{position:"fixed",right:"0",bottom:0,width:"40%",height:"40%"}:{position:"fixed",right:"0",top:0,width:"100%",height:"100%"},children:[Object(d.jsxs)("div",{className:"message-header",children:["Welcome!",Object(d.jsx)("button",{className:"delete",onClick:t})]}),Object(d.jsxs)("div",{className:"message-body",children:[!r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["This is a leaderboard for the game DeltaChase by HelperWesley. To add you score, download the DeltaChase leaderboard GDMod mod."," ",Object(d.jsx)("br",{}),"See those links for more details:"]}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://github.com/arthuro555/gdmod/wiki/Installation-Guide#web-games",rel:"noopener noreferer",children:"GDMod installation guide"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://github.com/arthuro555/DeltaChaseLeaderboards/releases",rel:"noopener noreferer",children:"Mod download"})]}),!s&&!r&&Object(d.jsxs)("p",{style:{textAlign:"center",fontSize:"20px",fontFamily:'"Comic Sans MS", "Comic Sans"'},children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("i",{children:["Dear mobile/small screen user, ",Object(d.jsx)("br",{}),"I am truly sorry but I am not good at design, and ended up doing this css hack that left a lot of empty space here. ",Object(d.jsx)("br",{}),"This message is nothing more than something to fill it. Please, feel free to ignore it.",Object(d.jsx)("br",{}),"Every line here is not a sincere appology, just me hoping to fill the empty void. I really need to learn to write better CSS, huh?",Object(d.jsx)("br",{}),"Anyways, have fun playing delta chase!",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{textAlign:"right"},children:"Yours truly, the dev."})]})]}),r&&Object(d.jsx)("p",{children:"Sorry that screen is waaay too small. I don't have a degree in design I cannot make stuff for such small devices. Please buy a larger one."})]})]})};var b=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),s=t[0],a=t[1];Object(r.useEffect)((function(){return o.a.firestore().collection("scores").orderBy("time","asc").limit(10).onSnapshot((function(e){return a(e.docs)}))}),[]);var n=Object(r.useState)(!0),c=Object(i.a)(n,2),l=c[0],b=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title is-1",children:"Delta Chase Leaderboards"}),Object(d.jsx)("div",{className:"container",style:{border:"1px solid black",borderRadius:"2px",marginLeft:"5px",marginRight:"5px"},children:null===s?Object(d.jsx)("progress",{className:"progress is-info",max:"100",children:"60%"}):Object(d.jsxs)("table",{className:"table is-striped is-hoverable is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:{fontSize:18},children:[Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{children:"Time taken"})]})}),Object(d.jsx)("tbody",{children:s.map((function(e){return e.data()})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.time})]})}))})]})}),Object(d.jsx)("footer",{className:"footer",style:{position:"absolute",bottom:0,width:"100%",padding:"8px 0px 8px 0px"},children:Object(d.jsx)("div",{className:"content has-text-centered",children:Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Made with ",Object(d.jsx)("span",{"aria-label":"love",children:"\ud83d\udc96"})," by"," ",Object(d.jsx)("a",{href:"https://github.com/arthuro555",rel:"noopener noreferer",children:"Arthur Pacaud"})]})})})}),l&&Object(d.jsx)(h,{onClose:function(){return b(!1)}})]})};s(20),s(21);o.a.initializeApp({apiKey:"AIzaSyCkrAg7caZtjDXw7iJygaSacOYQKK1jX8E",authDomain:"deltachase-leaderboards.firebaseapp.com",projectId:"deltachase-leaderboards",storageBucket:"deltachase-leaderboards.appspot.com",messagingSenderId:"72712807157",appId:"1:72712807157:web:d8bab8a889550b7bce9bbc"}),c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1b178742.chunk.js.map