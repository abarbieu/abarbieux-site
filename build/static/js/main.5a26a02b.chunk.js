(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(t){t.exports=JSON.parse('[{"root":{"title":"Enter","children":["projects","resume","tools","art","about"]}},{"projects":{"title":"Projects","background":"icons/code.png","children":["fun","all-projects","web","school"]},"resume":{"title":"Interactive Resume","route":"/interactive-resume/"},"tools":{"title":"Tools","background":"icons/notes.png","children":["notes","timeline"]},"art":{"title":"Arty Things","background":"icons/sherbert.svg","children":["all-art","ceramics","photography"]},"about":{"title":"About Me","background":"icons/cookie-power.png","route":"/about/"}},{"all-projects":{"title":"View All","link":"https://github.com/abarbieu?tab=repositories"},"web":{"title":"Web Dev","background":"icons/internet.png","children":["frontend","backend"]},"fun":{"title":"Fun","background":"icons/mzoom.gif","children":["fractals","data-vis"]},"school":{"title":"School Projects","children":["highschool","thumbsim"]},"notes":{"title":"Notes","background":"icons/notes.png","route":"/notes/"},"timeline":{"title":"TimeLine","route":"/timeline/"},"all-art":{"title":"View All","route":"/art/"},"ceramics":{"title":"Ceramics","background":"icons/color-bowl.jpg","route":"/art/ceramics/"},"photography":{"title":"Photography","background":"icons/droplet-o.png","route":"/art/photography"},"random":{"title":"Random","route":"/art/random"}},{"frontend":{"title":"Front-End","background":"icons/react.png","link":"https://github.com/abarbieu/abarbieux-frontend"},"backend":{"title":"Back-End","background":"icons/postgres.png","link":"https://github.com/abarbieu/abarbieux-backend"},"database":{"title":"Postgres Fun","background":"icons/postgres.png","link":"https://github.com/abarbieu/postgreSQL-playground"},"thumbsim":{"title":"ARM Simulator","link":"https://github.com/abarbieu/arm-thumb-simulator"},"highschool":{"title":"Highschool CS","children":["ants","food-rater","trig-circles"]},"fractals":{"title":"Fractals","background":"icons/jzoom-o.gif","link":"https://github.com/abarbieu/Mandelbrot"},"data-vis":{"title":"Data Visualization","background":"icons/gpxdemo-o.gif","link":"https://github.com/abarbieu/gpxVis"}},{"ants":{"title":"Langtons Ant","link":"https://github.com/abarbieu/Ants"},"food-rater":{"title":"Food Rater IOS App","link":"https://github.com/abarbieu/FoodRater"},"trig-circles":{"title":"Trig Circles","link":"https://github.com/abarbieu/Trig-Circles"}}]')},48:function(t,e,n){t.exports=n(78)},76:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(43),r=n.n(o),s=n(6),c=n(8),l=n(15),u=n(10),d=n(9),p=n(24),m=n(1);var b={background:"#333",color:"white",textAlight:"center",padding:"10px"},h=function(){return i.a.createElement("header",{style:b},i.a.createElement("h1",null,"Notes"))},f=n(29),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).getStyle=function(){return{background:"#ccc",textAlign:"left",padding:"10px",border:"1px #c2c2c2 dotted",color:"rgb(125,102,142)",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return i.a.createElement("div",{style:this.getStyle()},i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,i.a.createElement("button",{style:y,onClick:this.props.deleteTodo.bind(this,e)},"x")))}}]),n}(a.Component),y={background:"#ff0000",borderRadius:"50%",padding:"5px 10px",color:"#fff",float:"right",cursor:"pointer"},v=n(16),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={title:""},t.onType=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},i.a.createElement("input",{type:"text",name:"title",style:{flex:"10"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onType}),i.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1",padding:"5px"}}))}}]),n}(a.Component),w=n(17),j=n.n(w),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).getAllTodos=function(){j.a.get(a.apiUrl+"todos").then((function(t){a.setState({todos:t.data})}))},a.markComplete=function(t){j.a.put(a.apiUrl+"todos/".concat(t)).then((function(t){console.log("toggled data: "+t.data)})),a.setState({todos:a.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},a.deleteTodo=function(t){j.a.delete(a.apiUrl+"todos/".concat(t)).then((function(t){console.log("deleted data: "+t.data)})),a.setState({todos:Object(f.a)(a.state.todos.filter((function(e){return e.id!==t})))})},a.addTodo=function(t){var e={};j.a.post(a.apiUrl+"todos/",{title:t,complete:!1}).then((function(t){e=t.data,console.log(e),a.setState({todos:[].concat(Object(f.a)(a.state.todos),[e])})}))},a.state={todos:[]},a.apiUrl=t.apiUrl,a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){j.a.get(this.apiUrl).then((function(t){console.log(t.data)})),this.getAllTodos()}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement(k,{addTodo:this.addTodo}),this.state.todos.map((function(e){return i.a.createElement(g,{key:e.id,todo:e,markComplete:t.markComplete,deleteTodo:t.deleteTodo})})))}}]),n}(i.a.Component),x=n(44),S=n(25),E=n(11),T=n(12),C=n(14);function A(){var t=Object(E.a)(["\n    0% {\n      visibility: hidden;\n    }\n    100% {\n      visibility: hidden;\n      }\n    }"]);return A=function(){return t},t}function D(){var t=Object(E.a)(["\n    0% {\n      transform: translate(0px, 0px);\n      visibility: visible;\n      opacity: 1;\n      z-index: 0;\n    }\n    \n    100% {\n      z-index: 0;\n      transform: translate(\n        ","",",\n        ","",");\n        visibility: hidden;\n        opacity: 0;\n      }\n    }"]);return D=function(){return t},t}function z(){var t=Object(E.a)(["\n    0% {\n      transform: rotate(0deg) translate(0px, 0px);\n      visibility: hidden;\n      opacity: 0;\n    }\n    70% {\n      transform: translate(\n        ","",",\n        ","","\n      );\n    }\n    80% {\n      transform: translate(\n        ","",",\n        ","","\n      );\n    }\n    100% {\n      transform: translate(\n        ","",",\n        ","","\n      );\n      visibility: visible;\n      opacity: 1;\n    }"]);return z=function(){return t},t}var R=function t(e){var n=this;Object(s.a)(this,t),this.scale=void 0,this.units=void 0,this.menu=void 0,this.handleSpawn=function(t,e,a){var i=t[e][a],o=i.spawnRange.from,r=i.spawnRange.to,s=n.menu[e][a].children;o+2===r&&(r-=2/s.length);var c=(r-o)/(s.length-1);return t.splice(e+2),i.parent=!0,t[e]=Object(v.a)({},a,i),t[e+1]=t[e+1]?t[e+1]:{},s.forEach((function(a,r){if(!t[e+1][a]||t[e+1][a].hiding){var s=o+r*c,l=n.dirToDist(s),u=n.menu[e+1][a],d={title:u.title,background:u.background,parent:!1,hiding:!1,willSpawn:!0,pos:{x:l.x+i.pos.x,y:l.y+i.pos.y},animation:{keyframes:n.getKeyframes(s),startPos:i.pos}};u.children?t[e+1][a]=Object(C.a)(Object(C.a)({},d),{},{spawnRange:n.getSpawnRange(s)}):u.route?t[e+1][a]=Object(C.a)(Object(C.a)({},d),{},{route:u.route}):u.link&&(t[e+1][a]=Object(C.a)(Object(C.a)({},d),{},{link:u.link}))}})),e+1},this.killKids=function(t,e,a){for(var i=t[e][a],o=e+1;o<t.length;o++)Object.entries(t[o]).forEach((function(t){var e=Object(S.a)(t,2),a=(e[0],e[1]);a.hiding?a.animation&&(a.animation.keyframes=n.getHiddenKeyframes()):(a.hiding=!0,a.animation&&(a.animation.keyframes=n.getHidingKeyframes(i.pos,a.pos)))}));return e+1},this.getKeyframes=function(t){var e=n.dirToDist(t),a=e.x,i=e.y;return Object(T.c)(z(),-3*a,n.units,-3*i,n.units,-2.5*a,n.units,-2.5*i,n.units,-3*a,n.units,-3*i,n.units)},this.getHidingKeyframes=function(t,e){return Object(T.c)(D(),t.x-e.x,n.units,t.y-e.y,n.units)},this.getHiddenKeyframes=function(){return Object(T.c)(A())},this.dirToDist=function(t){return t=Math.PI*t,{x:Math.trunc(Math.cos(t)*n.scale),y:Math.trunc(Math.sin(t)*-n.scale)}},this.getSpawnRange=function(t){return{from:1.5+t,to:2.5+t}},this.scale=e.scale,this.units=e.units,this.menu=e.menu},U=n(22),P=n.n(U);function L(){var t=Object(E.a)(["\n    left: ","px;\n    top: ","px;\n    \n    background-image: linear-gradient(\n      rgba(0, 0, 0, 0.25),\n      rgba(0, 0, 0, 0.25)\n    ), url(/",");\n    ","\n    "]);return L=function(){return t},t}function M(){var t=Object(E.a)(["\n        animation: "," 500ms ease-in forwards;\n      "]);return M=function(){return t},t}function W(){var t=Object(E.a)(["\n        animation: "," 350ms ease-in forwards;\n      "]);return W=function(){return t},t}function K(){var t=Object(E.a)([""]);return K=function(){return t},t}function F(){var t=Object(E.a)(["\n      font-size: 9pt;\n      font-weight: 600;\n      color: #ffffff;\n      text-shadow: 2px 2px #000000;\n\n      outline: none;\n      position: fixed;\n\n      width: ","",";\n      height: ","",";\n      margin-top: -","",";\n      margin-left: -","",";\n\n      background-size: contain;\n      transition: all ease-out 500ms;\n      transition-delay: 200ms;\n      border-radius: 50%;\n      &:active {\n        border-color: #fdb241;\n        border-width: 2px;\n        z-index: 20;\n        font-size: 0pt;\n        margin-top: -","",";\n        margin-left: -","",";\n        width: ","",";\n        height: ","",";\n      }\n    "]);return F=function(){return t},t}var H=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).scale=75,i.units="px",i.menuApi=void 0,i.animatedLayer=1,i.nodeToJSX=function(t,e,n){var o=i.getDynamicStyle(t,e);return t.route?a.createElement(p.b,{to:t.route,key:P.a.v4()},a.createElement(o,null,t.title)):t.spawnRange?a.createElement(o,{key:P.a.v4(),onClick:i.nodeClicked.bind(Object(l.a)(i),e,n)},t.title):t.link?a.createElement(o,{key:P.a.v4(),onClick:function(){return window.location.href=t.link}},t.title):a.createElement(o,{key:P.a.v4()},t.title)},i.nodeClicked=function(t,e){i.setState((function(n){return n.elements[t][e].willSpawn?(n.elements[t][e].willSpawn=!1,i.animatedLayer=i.menuApi.handleSpawn(n.elements,t,e)):(n.elements[t][e].willSpawn=!0,i.animatedLayer=i.menuApi.killKids(n.elements,t,e),setTimeout((function(){console.log("respawning"),i.nodeClicked(t,e)}),250)),n}))},i.baseStyle=function(){return T.b.button(F(),i.scale,i.units,i.scale,i.units,i.scale/2,i.units,i.scale/2,i.units,2*i.scale,i.units,2*i.scale,i.units,4*i.scale,i.units,4*i.scale,i.units)},i.getDynamicStyle=function(t,e){var n=t.pos.x,a=t.pos.y,o=Object(T.a)(K());return t.hiding&&t.animation?o=Object(T.a)(W(),t.animation.keyframes):t.animation&&i.animatedLayer===e&&!t.parent&&(n=-3*t.animation.startPos.x+4*n,a=-3*t.animation.startPos.y+4*a,o=Object(T.a)(M(),t.animation.keyframes)),Object(T.b)(i.baseStyle())(L(),i.props.rootPos.x+n,i.props.rootPos.y+a,t.background||"icons/default.png",o)},i.state={elements:[{root:{pos:{x:0,y:0},title:t.menu[0].root.title,willSpawn:!0,spawnRange:t.spawnRange}}]},i.menuApi=new R({menu:t.menu,scale:75,units:"px"}),i}return Object(c.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=function(n){Object.entries(t.state.elements[n]).forEach((function(a){var i=Object(S.a)(a,2),o=i[0],r=i[1];e.push(t.nodeToJSX(r,n,o))}))},a=0;a<this.state.elements.length;a++)n(a);return this.animatedLayer++,e}}]),n}(a.Component),J=(n(76),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).apiUrl=void 0,a.randoo=function(){setTimeout((function(){a.setState({rando:i.a.createElement("p",{style:{fontSize:20}},"hello!")})}),3e3)},a.apiUrl="https://abarbieux.com/api/",a.state={windowSize:{x:0,y:0}},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Tiled-back"},i.a.createElement("div",null,i.a.createElement("main",null,i.a.createElement(p.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/notes/"},i.a.createElement(h,null),i.a.createElement(O,{apiUrl:this.apiUrl})),i.a.createElement(m.a,{path:"/"},i.a.createElement(H,{rootPos:{x:this.state.windowSize.x/2,y:this.state.windowSize.y/2},spawnRange:{from:.5,to:2.5},menu:x})))))))}},{key:"componentDidMount",value:function(){this.randoo(),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({windowSize:{x:window.innerWidth,y:window.innerHeight}})}}]),n}(i.a.Component));n(77);r.a.render(i.a.createElement(J,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5a26a02b.chunk.js.map