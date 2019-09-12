(window["webpackJsonppeerjs-examples-file-transfering"]=window["webpackJsonppeerjs-examples-file-transfering"]||[]).push([[0],{47:function(e,n,t){e.exports=t(59)},52:function(e,n,t){},53:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=53},58:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(7),r=t.n(c),i=(t(52),t(24)),l=t(19),s=t(34),m=t(35),d=t(40),u=t(11),g=t(37),p=t(100),f=t(102),h=t(97),b=t(89),E=t(93),v=t(94),C=t(95),k=t(103),w=t(91),I=t(92),y=Object(b.a)({orangeAvatar:{margin:5,color:"#fff",backgroundColor:w.a[500]},purpleAvatar:{margin:5,color:"#fff",backgroundColor:I.a[500]}}),j=function(e){var n=e.isLocal,t=e.nickname,a=y(),c=n?"Me":t;return o.a.createElement(E.a,{className:n?a.orangeAvatar:a.purpleAvatar},c)},x=function(e){var n=e.message,t=(e.classes,n.nickname),a=n.text,c=n.ts,r=n.isLocal;return o.a.createElement(v.a,{alignItems:"flex-start"},o.a.createElement(C.a,null,o.a.createElement(j,{isLocal:r,nickname:t})),o.a.createElement(k.a,{primary:a,secondary:o.a.createElement(o.a.Fragment,null,c.toLocaleString())}))},S=t(96),L=Object(b.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}),O=function(e){var n=e.messages,t=L();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Lets sending files..."),o.a.createElement(S.a,{className:t.root},n.map(function(e){return o.a.createElement(x,{key:String(e.ts.getTime()),message:e,classes:t})})))},D=t(101),M=t(98),R=t(99),T=Object(b.a)(function(e){return{wrapper:{margin:e.spacing(1),padding:e.spacing(2),position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginLeft:"-12px",marginTop:"-12px"}}}),F=function(e){var n=e.connected,t=e.connecting,a=e.myId,c=e.remoteId,r=e.onConnectClick,i=e.onMyIdChange,l=e.onRemoteIdChange,s=T();return o.a.createElement(h.a,null,o.a.createElement(f.a,{m:"5px"},o.a.createElement(D.a,{placeholder:"Your nickname",value:a,label:"Your nickname",required:!0,disabled:t||n,onChange:i}),o.a.createElement(D.a,{placeholder:"Remote nickname",value:c,label:"Remote nickname",required:!0,disabled:t||n,onChange:l})),!n&&o.a.createElement(f.a,{className:s.wrapper},o.a.createElement(M.a,{variant:"contained",onClick:r,disabled:t},"Connect"),t&&o.a.createElement(R.a,{size:24,className:s.buttonProgress})))},N=t(29),U=function(e){var n=e.onFileSelected;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{accept:"*/*",style:{display:"none"},id:"raised-button-file",type:"file",onChange:function(e){var t=e.target.files||[],a=Object(N.a)(t,1)[0];a&&n(a)}}),o.a.createElement("label",{htmlFor:"raised-button-file"},o.a.createElement(M.a,{variant:"contained",component:"span"},"Upload")))},A=function e(n){var t=n.nickname,a=n.text,o=n.ts,c=n.isLocal;Object(i.a)(this,e),this.nickname=t,this.text=a,this.ts=o,this.isLocal=c},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Object(u.a)(Array(e)).map(function(e){return(~~(36*Math.random())).toString(36)}).join("")},J=function(){var e=document.createElement("a");return document.body.appendChild(e),e.style="display: none",function(n,t){var a=new Blob(n,{type:"octet/stream"}),o=window.URL.createObjectURL(a);e.href=o,e.download=t,e.click(),window.URL.revokeObjectURL(o)}}(),_=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).onMyIdChange=function(e){var n=e.target;t.setState({myId:n.value})},t.onRemoteIdChange=function(e){var n=e.target;t.setState({remoteId:n.value})},t.onConnectClick=function(){console.log("start connecting..."),t.setState({connecting:!0}),t.peer=new g.peerjs.Peer(t.state.myId,{debug:3}),t.peer.on("open",t.onConnectedToPeerJS),t.peer.on("connection",t.onIncomingDataConnection),window.pc=t.peer},t.onConnectedToPeerJS=function(){t.state.remoteId&&(t.dc=t.peer.connect(t.state.remoteId,{reliable:!0}),t.subscribeToDCEvents())},t.subscribeToDCEvents=function(){window.dc=t.dc,t.dc.on("open",function(){console.log("DC opened!"),t.setState({connecting:!1,connected:!0})}),t.dc.on("close",function(){console.log("DC closed!")}),t.dc.on("data",function(e){if(console.log("DC data:",e),e&&e.name){t.addMessage(new A({nickname:t.dc.peer,ts:new Date,text:"file ".concat(e.name," received"),isLocal:!1}));var n=e.file;J([n],e.name)}}),t.dc.on("error",function(e){console.error("DC error:".concat(e))})},t.onIncomingDataConnection=function(e){console.log("Incoming dc:",e),t.dc=e,t.setState({remoteId:e.peer}),t.subscribeToDCEvents()},t.onFileSelected=function(e){console.log(e),t.addMessage(new A({nickname:t.state.myId,ts:new Date,text:"file ".concat(e.name," was send"),isLocal:!0})),setTimeout(function(){console.log("start sending..."),t.dc.send({file:e,name:e.name})},500)},t.state={myId:"user_".concat(P()),remoteId:"",messages:[],connecting:!1,connected:!1,sending:!1},t.peer=null,t.dc=null,t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"addMessage",value:function(e){this.setState({messages:[].concat(Object(u.a)(this.state.messages),[e])})}},{key:"render",value:function(){var e=this.state,n=e.myId,t=e.remoteId,a=e.connecting,c=e.connected,r=e.messages;return o.a.createElement(p.a,{maxWidth:"sm"},o.a.createElement(f.a,null,o.a.createElement(F,{myId:n,remoteId:t,connecting:a,connected:c,onConnectClick:this.onConnectClick,onMyIdChange:this.onMyIdChange,onRemoteIdChange:this.onRemoteIdChange})),c&&o.a.createElement(f.a,{marginTop:"10px"},o.a.createElement(h.a,null,o.a.createElement(f.a,{padding:"5px"},o.a.createElement(O,{messages:r})),o.a.createElement(f.a,{padding:"5px"},o.a.createElement(U,{onFileSelected:this.onFileSelected})))))}}]),n}(o.a.Component),V=(t(58),function(e){var n=e.repoLink;return o.a.createElement("p",null,"View Source on ",o.a.createElement("a",{href:n,title:"View Source on GitHub",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{height:"24",width:"24",src:"https://unpkg.com/simple-icons@latest/icons/github.svg",alt:"View Source on GitHub"})))});r.a.render(o.a.createElement(function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null),o.a.createElement(V,{repoLink:"https://github.com/afrokick/peerjs-examples/tree/master/file-transfering"}))},null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f7f18945.chunk.js.map