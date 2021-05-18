(this["webpackJsonpurl-shortening-api"]=this["webpackJsonpurl-shortening-api"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c.n(n),l=c(19),r=c.n(l),o=(c(30),c(31),c(4)),a=function(){return Object(s.jsx)("nav",{className:"navigation",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("ul",{className:"nav-sections",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Features"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Pricing"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Resources"})})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("ul",{className:"nav-sections right",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Login"})}),Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"button sign-up-button",children:"Sign Up"})})]})})]})})},j=c.p+"static/media/logo.83464303.svg",d=c(20),h=c(21),b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("div",{className:"logo-container",children:Object(s.jsx)("img",{className:"logo",src:j,alt:"logo"})}),Object(s.jsx)("div",{className:"fa-icon",children:Object(s.jsx)("a",{href:"http://localhost:3000",onClick:function(e){e.preventDefault();var t=document.querySelector(".navigation");i(!c),c?(t.style.display="block",i(!c)):t.style.display="none"},children:Object(s.jsx)(d.a,{icon:h.a,size:"lg"})})}),Object(s.jsx)(a,{})]})},O=c(24),u=c(22),x=c.n(u),m=function(e){var t=e.link,c=t.long,i=t.short,l=Object(n.useState)(!1),r=Object(o.a)(l,2),a=r[0],j=r[1];return Object(s.jsxs)("div",{className:"link-card",children:[Object(s.jsx)("p",{children:function(e){if(e.length>25){for(var t=[],c=0;c<25;c++)t.push(e[c]);return"".concat(t.join(""),"...")}return e}(c)}),Object(s.jsxs)("div",{className:"copy-link",children:[Object(s.jsx)("p",{children:i}),Object(s.jsx)("button",{id:"".concat(c),className:"copy-link-button",onClick:function(){var e=document.getElementById("".concat(c)),t=document.querySelector(".copy-link").firstChild,s=document.createRange();s.selectNode(t),a||(window.getSelection().removeAllRanges(),window.getSelection().addRange(s),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.style.backgroundColor="hsl(257, 27%, 26%)",e.style.color="white",e.innerHTML="Copied!",j(!0),setTimeout((function(){e.style.backgroundColor="hsl(180, 66%, 49%)",e.style.color="white",e.innerHTML="Copy!",j(!1)}),3e3))},children:"Copy"})]})]})},p=function(e){var t=e.links;return Object(s.jsx)("div",{className:"display-links",children:Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsx)("li",{children:Object(s.jsx)(m,{link:e})},t)}))})})},f=c(23),g=c.n(f),v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],l=Object(n.useState)(""),r=Object(o.a)(l,2),a=r[0],j=r[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),b=h[0],u=h[1],m=Object(n.useState)(!1),f=Object(o.a)(m,2),v=f[0],y=f[1];return Object(n.useEffect)((function(){var e={long:c,short:a};""!==a&&u((function(t){return[].concat(Object(O.a)(t),[e])}))}),[a]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("section",{className:"link-form-container",children:Object(s.jsxs)("div",{className:"link-form",children:[Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c){var t=document.querySelector(".link-form").firstChild,s=document.querySelector(".form-input"),n=document.createElement("p"),l=document.createTextNode("Please add a link.");s.style.border="4px solid hsl(0, 87%, 67%)",n.appendChild(l),n.style.color="hsl(0, 87%, 67%)",s.style.setProperty("--c","hsl(0, 87%, 67%)"),n.style.fontSize="0.75rem",n.style.textAlign="left",window.screen.width<750?(s.after(n),setTimeout((function(){s.style.border="none",s.style.setProperty("--c","hsl(257, 7%, 63%)"),t.removeChild(t.childNodes[1])}),3e3)):(t.appendChild(n),setTimeout((function(){s.style.border="none",s.style.setProperty("--c","hsl(257, 7%, 63%)"),t.removeChild(t.childNodes[2])}),3e3))}else y(!0),x.a.post("http://localhost:3001/api/genurl",{longUrl:c}).then((function(e){var t=e.data;y(!1),j(t.shortUrl),i("")}))},method:"POST",children:[Object(s.jsx)("input",{required:!0,placeholder:"Shorten a link here...",onChange:function(e){i(e.target.value)},value:c,className:"form-input",type:"url"}),Object(s.jsx)("button",{className:"form-submit-button",type:"submit",children:"Shorten It!"})]}),v?Object(s.jsx)(g.a,{type:"Oval",color:"#00BFFF",height:30,width:30,className:"loader"}):null]})}),Object(s.jsx)(p,{links:b})]})},y=c.p+"static/media/illustration-working.c9b5ef54.svg",N=function(){return Object(s.jsxs)("section",{className:"hero",children:[Object(s.jsx)("div",{className:"hero-img",children:Object(s.jsx)("img",{src:y,alt:"working"})}),Object(s.jsxs)("div",{className:"hero-info",children:[Object(s.jsx)("h1",{children:"More than just shorter links"}),Object(s.jsx)("p",{children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(s.jsx)("button",{className:"hero-button",children:"Get Started"})]})]})},k=c.p+"static/media/icon-brand-recognition.c349d3b6.svg",w=c.p+"static/media/icon-detailed-records.265c8aea.svg",S=c.p+"static/media/icon-fully-customizable.a1532a74.svg",C=function(){return Object(s.jsxs)("section",{className:"info",children:[Object(s.jsxs)("div",{className:"info-title",children:[Object(s.jsx)("h1",{children:"Advanced Statistics"}),Object(s.jsx)("p",{children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(s.jsxs)("div",{className:"info-cards",children:[Object(s.jsxs)("div",{className:"info-card",children:[Object(s.jsx)("div",{className:"card-icon",children:Object(s.jsx)("div",{className:"icon",children:Object(s.jsx)("img",{src:k,alt:"brand-img"})})}),Object(s.jsx)("h2",{children:"Brand Recognition"}),Object(s.jsx)("p",{children:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."})]}),Object(s.jsxs)("div",{className:"info-card",children:[Object(s.jsx)("div",{className:"card-icon",children:Object(s.jsx)("div",{className:"icon",children:Object(s.jsx)("img",{src:w,alt:"detailed-img"})})}),Object(s.jsx)("h2",{children:"Detailed Records"}),Object(s.jsx)("p",{children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]}),Object(s.jsxs)("div",{className:"info-card",children:[Object(s.jsx)("div",{className:"card-icon",children:Object(s.jsx)("div",{className:"icon",children:Object(s.jsx)("img",{src:S,alt:"customizable-img"})})}),Object(s.jsx)("h2",{children:"Fully Customizable"}),Object(s.jsx)("p",{children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]}),Object(s.jsx)("div",{className:"green-bar"})]})]})},B=c.p+"static/media/icon-facebook.229c75a0.svg",T=c.p+"static/media/icon-instagram.df587328.svg",R=c.p+"static/media/icon-pinterest.a2d25ab4.svg",A=c.p+"static/media/icon-twitter.1d5c6d5e.svg",F=function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("div",{className:"footer-logo",children:Object(s.jsx)("img",{src:j,alt:"footer-logo"})}),Object(s.jsxs)("div",{className:"footer-links",children:[Object(s.jsxs)("div",{className:"footer-links-col",children:[Object(s.jsx)("h6",{children:"Features"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Link Shortening"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Branded Links"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Analytics"})})]})]}),Object(s.jsxs)("div",{className:"footer-links-col",children:[Object(s.jsx)("h6",{children:"Resources"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Blog"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Developers"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Support"})})]})]}),Object(s.jsxs)("div",{className:"footer-links-col",children:[Object(s.jsx)("h6",{children:"Company"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Our Team"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Careers"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"http://localhost:3000/",children:"Contact"})})]})]}),Object(s.jsxs)("div",{className:"footer-icons",children:[Object(s.jsx)("a",{href:"http://facebook.com",children:Object(s.jsx)("img",{src:B,alt:"facebook-icon"})}),Object(s.jsx)("a",{href:"http://twitter.com",children:Object(s.jsx)("img",{src:A,alt:"twitter-icon"})}),Object(s.jsx)("a",{href:"http://pinterest.com",children:Object(s.jsx)("img",{src:R,alt:"pinterest-icon"})}),Object(s.jsx)("a",{href:"http://instagram.com",children:Object(s.jsx)("img",{src:T,alt:"instagram-icon"})})]})]})]})},z=function(){return Object(s.jsx)("section",{className:"call-to-action",children:Object(s.jsxs)("div",{className:"call-to-action-content",children:[Object(s.jsx)("h1",{children:"Boost your links today"}),Object(s.jsx)("button",{className:"started-button",children:"Get Started"})]})})},P=function(){return Object(s.jsxs)("main",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(N,{}),Object(s.jsx)(v,{}),Object(s.jsx)(C,{}),Object(s.jsx)(z,{}),Object(s.jsx)(F,{})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2afdaf83.chunk.js.map