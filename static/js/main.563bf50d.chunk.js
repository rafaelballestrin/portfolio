(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/HomeImg.ea3d19df.jpg"},,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),r=a.n(l),c=(a(22),a(6)),o=a(5),s=a(9),m=a(7),u=a(10),d=a(33),h=a(32),v=(a(23),a(31)),f=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={windowWidth:window.innerWidth,mobileNavVisible:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav_container"},i.a.createElement("div",{className:"site_title"}),this.renderNavigation())}}]),Object(o.a)(t,[{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize.bind(this))}},{key:"navigationLinks",value:function(){return[i.a.createElement("div",{className:"menu-container"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/aboutme"},"About Me")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/contact"},"Contact"))))]}},{key:"renderMobileNav",value:function(){if(this.state.mobileNavVisible)return this.navigationLinks()}},{key:"handleNavClick",value:function(){this.state.mobileNavVisible?this.setState({mobileNavVisible:!1}):this.setState({mobileNavVisible:!0})}},{key:"renderNavigation",value:function(){return this.state.windowWidth<=600?[i.a.createElement("div",{className:"mobile_nav"},i.a.createElement("p",{onClick:this.handleNavClick.bind(this)},i.a.createElement("i",{class:"material-icons"},"MENU")),this.renderMobileNav())]:[i.a.createElement("div",{key:7,className:"nav_menu"},this.navigationLinks())]}}]),t}(n.Component));a(27);function E(){return i.a.createElement("div",null,i.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),i.a.createElement("div",{class:"icon-bar"},i.a.createElement("a",{href:"https://linkedin.com/in/rafaelballestrin/",target:"_blank",rel:"noopener noreferrer",class:"linkedin"},i.a.createElement("i",{class:"fa fa-linkedin"})),i.a.createElement("a",{href:"https://github.com/rafaelballestrin",target:"_blank",rel:"noopener noreferrer",class:"github"},i.a.createElement("i",{class:"fa fa-github"})),i.a.createElement("a",{href:"mailto:rafaelballestrin@gmail.com",class:"contact"},i.a.createElement("i",{class:"fa fa-envelope"}))))}a(28);var b=a(13),p=a.n(b);function w(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h4",null,"Hello, my name is Rafael. I am a Web Developer liviving in London, UK."),i.a.createElement("img",{src:p.a,alt:"Home"})))}function k(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h3",null,"AboutMe")),i.a.createElement("div",null,i.a.createElement("p",null,"My interest in coding started in my early teenager years, when I self-taught HTML and created a fan website to my favourite rock band. After that I also created one website for a Volkswagen car\u2019s dealer company. Years passed and I studied business and developed a career in marketing in global companies. Now I had the opportunity to go back to coding and I\u2019m searching for an opportunity to join a dynamic and exciting team.")),i.a.createElement("div",null))}function g(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Projects"))}function y(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Contact"))}var N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-body"},i.a.createElement(f,null),i.a.createElement(E,null),i.a.createElement(h.a,{exact:!0,path:"/",component:w}),i.a.createElement(h.a,{exact:!0,path:"/aboutme",component:k}),i.a.createElement(h.a,{exact:!0,path:"/projects",component:g}),i.a.createElement(h.a,{exact:!0,path:"/contact",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.563bf50d.chunk.js.map