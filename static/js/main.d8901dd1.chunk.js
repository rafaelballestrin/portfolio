(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/HomeImg.ea3d19df.jpg"},18:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(11),r=a.n(i),o=(a(24),a(6)),c=a(5),s=a(9),m=a(7),u=a(10),d=a(47),h=a(46),p=(a(25),a(45)),v=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={windowWidth:window.innerWidth,mobileNavVisible:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav_container"},l.a.createElement("div",{className:"site_title"}),this.renderNavigation())}}]),Object(c.a)(t,[{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize.bind(this))}},{key:"navigationLinks",value:function(){return[l.a.createElement("div",{className:"menu-container"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/aboutme"},"About Me")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/tooltip"},"Tooltip"))))]}},{key:"renderMobileNav",value:function(){if(this.state.mobileNavVisible)return this.navigationLinks()}},{key:"handleNavClick",value:function(){this.state.mobileNavVisible?this.setState({mobileNavVisible:!1}):this.setState({mobileNavVisible:!0})}},{key:"renderNavigation",value:function(){return this.state.windowWidth<=1080?[l.a.createElement("div",{className:"mobile_nav"},l.a.createElement("p",{onClick:this.handleNavClick.bind(this)},l.a.createElement("i",{class:"material-icons"},"view_headline")),this.renderMobileNav())]:[l.a.createElement("div",{key:7,className:"nav_menu"},this.navigationLinks())]}}]),t}(n.Component));a(29);function E(){return l.a.createElement("div",null,l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement("div",{class:"icon-bar"},l.a.createElement("a",{href:"https://linkedin.com/in/rafaelballestrin/",target:"_blank",rel:"noopener noreferrer",class:"linkedin"},l.a.createElement("i",{class:"fa fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/rafaelballestrin",target:"_blank",rel:"noopener noreferrer",class:"github"},l.a.createElement("i",{class:"fa fa-github"})),l.a.createElement("a",{href:"mailto:rafaelballestrin@gmail.com",class:"contact"},l.a.createElement("i",{class:"fa fa-envelope"}))))}a(30);var f=a(14),b=a.n(f);function w(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Hello, my name is Rafael. I am a Web Developer liviving in London, UK."),l.a.createElement("img",{src:b.a,alt:"Home"})))}function k(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"AboutMe")),l.a.createElement("div",null,l.a.createElement("p",null,"My interest in coding started in my early teenager years, when I self-taught HTML and created a fan website to my favourite rock band. After that I also created one website for a Volkswagen car\u2019s dealer company. Years passed and I studied business and developed a career in marketing in global companies. Now I had the opportunity to go back to coding and I\u2019m searching for an opportunity to join a dynamic and exciting team.")),l.a.createElement("div",null))}function g(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Projects"))}function y(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Contact"))}var j=a(15),N=a.n(j);function O(){return l.a.createElement(N.a,{place:"top",type:"dark",effect:"solid"})}function x(){return l.a.createElement("div",null,l.a.createElement("h1",{"data-tip":"React-tooltip starts here"},"Tooltip Test"),l.a.createElement("p",{"data-tip":"React-tooltip"}," :| "),l.a.createElement("p",{"data-tip":"React-tooltip2"}," :D "),l.a.createElement("p",{"data-tip":"React-tooltip3"}," :) "),l.a.createElement(O,null))}var W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-body"},l.a.createElement(v,null),l.a.createElement(E,null),l.a.createElement(h.a,{exact:!0,path:"/",component:w}),l.a.createElement(h.a,{exact:!0,path:"/aboutme",component:k}),l.a.createElement(h.a,{exact:!0,path:"/projects",component:g}),l.a.createElement(h.a,{exact:!0,path:"/contact",component:y}),l.a.createElement(h.a,{exact:!0,path:"/tooltip",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.d8901dd1.chunk.js.map