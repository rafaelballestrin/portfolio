(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/homeBgCropS1.db94a951.jpg"},16:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(12),o=n.n(l),c=(n(22),n(6)),r=n(5),s=n(9),u=n(7),m=n(10),d=n(32),v=n(31),h=(n(23),n(30)),E=(n(24),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={windowWidth:window.innerWidth,mobileNavVisible:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav_container"},i.a.createElement("div",{className:"site_title"}),this.renderNavigation())}}]),Object(r.a)(t,[{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize.bind(this))}},{key:"navigationLinks",value:function(){return[i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(h.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/aboutme"},"About Me")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/contact"},"Contact")))]}},{key:"renderMobileNav",value:function(){if(this.state.mobileNavVisible)return this.navigationLinks()}},{key:"handleNavClick",value:function(){this.state.mobileNavVisible?this.setState({mobileNavVisible:!1}):this.setState({mobileNavVisible:!0})}},{key:"renderNavigation",value:function(){return this.state.windowWidth<=1080?[i.a.createElement("div",{className:"mobile_nav"},i.a.createElement("p",{onClick:this.handleNavClick.bind(this)},i.a.createElement("i",{class:"material-icons"},"view_headline")),this.renderMobileNav())]:[i.a.createElement("div",{key:7,className:"nav_menu"},this.navigationLinks())]}}]),t}(a.Component)),b=(n(27),n(13)),p=n.n(b);function f(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h3",null,"Hello, my name is Rafael. I am a Web Developer liviving in London, UK."),i.a.createElement("img",{src:p.a,alt:"Home"})))}function w(){return i.a.createElement("div",null,i.a.createElement("h3",null,"AboutMe"))}function k(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Projects"))}function N(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Contact"))}var j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-body"},i.a.createElement(E,null),i.a.createElement(v.a,{exact:!0,path:"/",component:f}),i.a.createElement(v.a,{exact:!0,path:"/aboutme",component:w}),i.a.createElement(v.a,{exact:!0,path:"/projects",component:k}),i.a.createElement(v.a,{exact:!0,path:"/contact",component:N}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e165fd3c.chunk.js.map