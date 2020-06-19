(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7PJU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=a("7ljp"),l=a("EbFK"),d=a("VKGP"),p=(i.a.createElement,{}),s=l.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)(s,Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"First steps"),Object(c.a)("p",null,"Adding behaviors to existing HTML elements is straight forward. Generally speaking you have 2 options:"),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"Using HTML attributes"),Object(c.a)("li",{parentName:"ol"},"Using the Mojo API in JavaScript")),Object(c.a)("h2",null,"1. Adding a behavior with a HTML attribute"),Object(c.a)("p",null,"This is the simplest and fastest way to add a behavior to an element."),Object(c.a)("pre",null,Object(c.a)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<img src="brand.png" mojo-fx-magnet></div>\n')),Object(c.a)("h2",null,"2. Adding a behavior using JavaScript"),Object(c.a)("p",null,"Adding the same effect with JavaScript looks like this:"),Object(c.a)("pre",null,Object(c.a)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Manually add behavior\nvar box = document.getElementById('blue');\nmojo.add(box, 'hover', mojo.fx.Magnet);  \n")),Object(c.a)("h2",null,"Live Demo"),Object(c.a)(d.a,{title:"Live example",src:"/demos/000_architype/index.html",height:"300px",mdxType:"IFrame"}),Object(c.a)("p",null,"This is the markup of the demo:"),Object(c.a)("pre",null,Object(c.a)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<div>\n  \n  \x3c!-- HTML attribute --\x3e\n  <div style="width: 80px; height: 80px; left: 50px; top: 50px; background-color: lime;"\n       mojo-fx-magnet></div>\n\n  \x3c!-- HTML attribute with effect options --\x3e\n  <div style="width: 80px; height: 80px; left: 150px; top: 50px; background-color: green;"\n       mojo-fx-magnet="{scale: 1.5, duration: 2000}"></div>\n\n  \x3c!-- Scripted element (just an id for now) --\x3e\n  <div id="blue" style="width: 80px; height: 80px; left: 400px; top: 50px; background-color: blue;"></div>\n  \n  \x3c!-- Scripted element (just an id for now) --\x3e\n  <div id="darkblue" style="width: 80px; height: 80px; left: 500px; top: 50px; background-color: darkblue;"></div>\n\n</div>\n')),Object(c.a)("p",null,"And the JavaScript:"),Object(c.a)("pre",null,Object(c.a)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"  // Manually add behavior\n  var blue = scene.content.querySelector('#blue');\n  mojo.add(blue, 'hover', mojo.fx.Magnet);\n  \n  // Manually add behavior with options\n  var darkblue = scene.content.querySelector('#darkblue');\n  mojo.add(darkblue, 'hover', mojo.fx.Magnet, {scale: 1.5, duration: 2000});\n")))}b.isMDXComponent=!0},VKGP:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var o=a("q1tI"),n=a.n(o),r=a("Ff2n"),i=a("wx14"),c=(a("17x9"),a("iuhU")),l=a("H2TA"),d=a("ye/S"),p=a("VD++"),s=a("NqtD"),b=o.forwardRef((function(e,t){var a=e.children,n=e.classes,l=e.className,d=e.color,b=void 0===d?"default":d,u=e.component,m=void 0===u?"button":u,h=e.disabled,g=void 0!==h&&h,x=e.disableElevation,y=void 0!==x&&x,v=e.disableFocusRipple,f=void 0!==v&&v,j=e.endIcon,S=e.focusVisibleClassName,O=e.fullWidth,w=void 0!==O&&O,k=e.size,z=void 0===k?"medium":k,C=e.startIcon,N=e.type,E=void 0===N?"button":N,T=e.variant,I=void 0===T?"text":T,M=Object(r.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=C&&o.createElement("span",{className:Object(c.a)(n.startIcon,n["iconSize".concat(Object(s.a)(z))])},C),R=j&&o.createElement("span",{className:Object(c.a)(n.endIcon,n["iconSize".concat(Object(s.a)(z))])},j);return o.createElement(p.a,Object(i.a)({className:Object(c.a)(n.root,n[I],l,"inherit"===b?n.colorInherit:"default"!==b&&n["".concat(I).concat(Object(s.a)(b))],"medium"!==z&&[n["".concat(I,"Size").concat(Object(s.a)(z))],n["size".concat(Object(s.a)(z))]],y&&n.disableElevation,g&&n.disabled,w&&n.fullWidth),component:m,disabled:g,focusRipple:!f,focusVisibleClassName:Object(c.a)(n.focusVisible,S),ref:t,type:E},M),o.createElement("span",{className:n.label},L,a,R))}));Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(b),a("p2q9");function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.a.Component;var m=function(e){function t(t){return e.call(this,t)||this}return u(t,e),t.prototype.render=function(){return n.a.createElement("figure",{className:"ts-Image"},n.a.createElement("img",{src:this.props.src}),n.a.createElement("figcaption",null,this.props.children),this.props.source&&n.a.createElement("figcaption",{className:"source"},"(source: ",this.props.source,")"))},t}(n.a.Component);function h(e){return n.a.createElement("div",{className:"ts-IFrame",style:Object.assign({},e.style)},n.a.createElement("iframe",{width:"100%",height:"100%",src:e.src,frameBorder:"0",style:{height:e.height,boxSizing:"content-box",border:""+(e.border?e.border:"none"),boxShadow:""+(e.boxShadow?e.boxShadow:"0px 0px 22px #E0E0E0")}}),n.a.createElement("p",{className:"caption"},e.title))}},WgcS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guide/010_first_steps",function(){return a("7PJU")}])},p2q9:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.default=r}},[["WgcS",0,2,1,3,4]]]);