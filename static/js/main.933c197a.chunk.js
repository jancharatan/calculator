(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{108:function(e,t,a){},167:function(e,t,a){},174:function(e,t,a){e.exports=a(586)},179:function(e,t,a){},180:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},586:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(168),l=a.n(c),o=(a(179),a(27)),u=a(11),i=(a(60),a(180),function(e){var t=e.children,a=e.isBig,n=e.notFirst,c=e.isWide;return r.a.createElement("button",{type:"button",className:"".concat(a?"routebutton-wrapper-big":"routebutton-wrapper-small"," ").concat(c&&!n?"isWide":""," ").concat(n?"top-margin":"")},t)});i.defaultProps={isBig:!1,notFirst:!1,isWide:!1};var s=i,m=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:"calculator/about"},r.a.createElement(s,null," About ")),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},"Select a tool."),r.a.createElement(o.b,{className:"link",to:"calculator/calc"},r.a.createElement(s,{isBig:!0},"Calculator")),r.a.createElement(o.b,{className:"link",to:"calculator/convert"},r.a.createElement(s,{isBig:!0,notFirst:!0},"Convert Units")),r.a.createElement("div",{className:"footer"},"Created in July 2020 by Jan Charatan."))))},d=a(170),p=a(171),h=a(172),E=a(173),v=(a(108),function(e){var t,a=e.handleClick,n=e.children;return r.a.createElement("button",{type:"button",className:"button-wrapper ".concat((t=n,["+","-","*","/"].includes(t)?null:"operator")),onClick:function(){return a(n)}},n)}),b=(a(185),function(e){var t=e.children,a=e.handleClear;return r.a.createElement("button",{type:"button",className:"reset-style clear-btn",onClick:a},t)}),C=(a(186),function(e){var t=e.input;return r.a.createElement("div",{className:"input"},t)}),f=a(31),w=a.n(f),k=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).addToInput=function(e){"Error"!==n.state.input&&n.state.input?n.setState({input:n.state.input+e}):n.setState({input:e})},n.downHandler=function(e){"Enter"!==e.key&&"="!==e.key||n.handleEqual(),"Backspace"===e.key&&("Error"===n.state.input&&n.setState({input:""}),n.removeChar()),"c"!==e.key&&"C"!==e.key||n.setState({input:""});["1","2","3","4","5","6","7","8","9","0","+","-","/","*","."].includes(e.key)&&n.addToInput(e.key)},n.handleEqual=function(){try{n.setState({input:w.a.eval(n.state.input)})}catch(e){n.setState({input:"Error"})}},n.state={input:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.downHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.downHandler)}},{key:"removeChar",value:function(){try{this.setState({input:this.state.input.slice(0,-1)})}catch(e){this.setState({input:""})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:"/calculator"},r.a.createElement(s,null," Back "))),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},"Calculator."),r.a.createElement("div",{className:"row"},r.a.createElement(C,{input:this.state.input})),r.a.createElement("div",{className:"row"},r.a.createElement(v,{handleClick:this.addToInput},"7"),r.a.createElement(v,{handleClick:this.addToInput},"8"),r.a.createElement(v,{handleClick:this.addToInput},"9"),r.a.createElement(v,{handleClick:this.addToInput},"/")),r.a.createElement("div",{className:"row"},r.a.createElement(v,{handleClick:this.addToInput},"4"),r.a.createElement(v,{handleClick:this.addToInput},"5"),r.a.createElement(v,{handleClick:this.addToInput},"6"),r.a.createElement(v,{handleClick:this.addToInput},"*")),r.a.createElement("div",{className:"row"},r.a.createElement(v,{handleClick:this.addToInput},"1"),r.a.createElement(v,{handleClick:this.addToInput},"2"),r.a.createElement(v,{handleClick:this.addToInput},"3"),r.a.createElement(v,{handleClick:this.addToInput},"+")),r.a.createElement("div",{className:"row"},r.a.createElement(v,{handleClick:this.addToInput},"."),r.a.createElement(v,{handleClick:this.addToInput},"0"),r.a.createElement(v,{handleClick:this.handleEqual},"="),r.a.createElement(v,{handleClick:this.addToInput},"-")),r.a.createElement("div",{className:"row"},r.a.createElement(b,{handleClear:function(){return e.setState({input:""})}},"Clear")),r.a.createElement("div",{className:"footer"},"Created in July 2020 by Jan Charatan."))))}}]),a}(r.a.Component),S=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:"/calculator"},r.a.createElement(s,null," Back ")),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},"About."),r.a.createElement("div",null,"This web app is a multitool for doing a bunch of things. It was built by"," ",r.a.createElement("a",{href:"http://www.jancharatan.com/"},"Jan Charatan"),", a computer science student at Pomona College using"," ",r.a.createElement("a",{href:"https://www.reactjs.org"},"React"),". If you have any suggestions for a tool that should be added or any comments, email Jan at jan.charatan@gmail.com or"," ",r.a.createElement("a",{href:"https://github.com/jancharatan/calculator"},"submit a pull request"),"."),r.a.createElement("div",{className:"footer"},"Created in July 2020 by Jan Charatan."))))},N=a(21),O=(a(167),function(e){var t=e.isOutput,a=e.isTitle,n=e.titleText,c=e.evaluateValue;return r.a.createElement("div",{className:"textfield-wrapper"},r.a.createElement("input",{className:"textfield ".concat(a?"title-styling":null),type:"text",disabled:t,value:n,onChange:function(e){return c(e)}}))});O.defaultProps={isOutput:!1,isTitle:!1,titleText:void 0,evaluateValue:void 0};var y=O,g=function(e){var t=e.children,a=e.isSelected,n=e.handleClick;return r.a.createElement("button",{type:"button",className:"tab-button-wrapper ".concat(a?"tab-button-selected":""),onClick:function(){return n(t)}},t)};g.defaultProps={isSelected:!1};var T=g,j=function(e){var t=e.inputFunction,a=e.outputFunction,n=e.selectedInput,c=e.selectedOutput,l=e.value;return r.a.createElement("div",{className:"flex-helper"},r.a.createElement(T,{handleClick:function(){return t(l)},isSelected:l===n},l),r.a.createElement(T,{handleClick:function(){return a(l)},isSelected:l===c},l))},I=["Meter","Kilometer","Centimeter","Millimeter","Micrometer","Nanometer","Mile","Yard","Foot","Inch"],q=["Second","Millisecond","Microsecond","Nanosecond","Picosecond","Minute","Hour","Day","Week","Month","Year"],F=["Celsius","Kelvin","Fahrenheit"],M=["Square Meter","Square Kilometer","Square Centimeter","Hectare","Square Mile","Square Yard","Square Foot","Square Inch","Acre"],L=["Cubic Meter","Cubic Kilometer","Cubic Centimeter","Liter","Milliliter","Gallon","Quart","Pint","Cup","Fluid Ounce","Table Spoon","Tea Spoon","Cubic Yard","Cubic Foot","Cubic Inch"],x=["Kilogram","Gram","Milligram","Ton","Tonne","Pound","Ounce"],J=function(){var e=Object(n.useState)("Length"),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Meter"),u=Object(N.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)("Meter"),p=Object(N.a)(d,2),h=p[0],E=p[1],v=Object(n.useState)("Second"),b=Object(N.a)(v,2),C=b[0],f=b[1],k=Object(n.useState)("Second"),S=Object(N.a)(k,2),O=S[0],g=S[1],J=Object(n.useState)("Celsius"),P=Object(N.a)(J,2),B=P[0],W=P[1],K=Object(n.useState)("Celsius"),A=Object(N.a)(K,2),H=A[0],V=A[1],Y=Object(n.useState)("Square Meter"),G=Object(N.a)(Y,2),U=G[0],D=G[1],Q=Object(n.useState)("Square Meter"),z=Object(N.a)(Q,2),R=z[0],$=z[1],X=Object(n.useState)("Cubic Meter"),Z=Object(N.a)(X,2),_=Z[0],ee=Z[1],te=Object(n.useState)("Cubic Meter"),ae=Object(N.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)("Kilogram"),le=Object(N.a)(ce,2),oe=le[0],ue=le[1],ie=Object(n.useState)("Kilogram"),se=Object(N.a)(ie,2),me=se[0],de=se[1],pe=Object(n.useState)(""),he=Object(N.a)(pe,2),Ee=he[0],ve=he[1],be={"Square Meter":"m2","Square Kilometer":"km2","Square Centimeter":"cm2",Hectare:"hectare","Square Mile":"sqmi","Square Yard":"sqyd","Square Foot":"sqft","Square Inch":"sqin",Acre:"acre"},Ce={"Cubic Meter":"m3","Cubic Kilometer":"km3","Cubic Centimeter":"cm3",Liter:"liter",Milliliter:"milliliter",Gallon:"gal",Quart:"qt",Pint:"pt",Cup:"cup","Fluid Ounce":"floz","Table Spoon":"tablespoon","Tea Spoon":"teaspoon","Cubic Yard":"cuyd","Cubic Foot":"cuft","Cubic Inch":"cuin"};return r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:"/calculator"},r.a.createElement(s,null," Back ")),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},"Convert Units."),r.a.createElement("div",null,r.a.createElement("div",{className:"row border-add"},r.a.createElement(y,{isOutput:!0,isTitle:!0,titleText:"Input"})),r.a.createElement("div",{className:"row border-add"},r.a.createElement(y,{titleText:Ee,evaluateValue:function(e){ve(e.target.value)}})),r.a.createElement("div",{className:"row border-add margin-top-row"},r.a.createElement(y,{isOutput:!0,isTitle:!0,titleText:"Output"})),r.a.createElement("div",{className:"row border-add"},r.a.createElement(y,{isOutput:!0,titleText:function(){if(!Ee)return"";if("Length"===a)try{var e="".concat(Ee," ").concat(i.toLowerCase()," to ").concat(h.toLowerCase());return w.a.eval(e)}catch(o){return"Error"}else if("Time"===a)try{var t="".concat(Ee," ").concat(C.toLowerCase()," to ").concat(O.toLowerCase());return w.a.eval(t)}catch(o){return"Error"}else if("Temperature"===a)try{var n="".concat(Ee," ").concat(B.toLowerCase()," to ").concat(H.toLowerCase());return w.a.eval(n)}catch(o){return"Error"}else if("Area"===a)try{var r="".concat(Ee," ").concat(be[U]," to ").concat(be[R]);return w.a.eval(r)}catch(o){return"Error"}else if("Volume"===a)try{var c="".concat(Ee," ").concat(Ce[_]," to ").concat(Ce[ne]);return w.a.eval(c)}catch(o){return"Error"}else{if("Weight"!==a)return"Error";try{if("Pound"===oe&&"Pound"===me)return w.a.eval("".concat(Ee," lb to lb"));if("Pound"===oe)return w.a.eval("".concat(Ee," lb to ").concat(me.toLowerCase()));if("Pound"===me)return w.a.eval("".concat(Ee," ").concat(oe.toLowerCase()," to lb"));var l="".concat(Ee," ").concat(oe.toLowerCase()," to ").concat(me.toLowerCase());return w.a.eval(l)}catch(o){return"Error"}}}()})),r.a.createElement("div",{className:"row border-add margin-top-row"},["Length","Time","Temperature","Area","Volume","Weight"].map((function(e){return r.a.createElement(T,{handleClick:function(){return c(e)},isSelected:a===e},e)}))),r.a.createElement("div",{className:"row border-add"},"Length"===a?r.a.createElement("div",{className:"width-helper"},I.map((function(e){return r.a.createElement(j,{value:e,inputFunction:m,outputFunction:E,selectedInput:i,selectedOutput:h})}))):null,"Time"===a?r.a.createElement("div",{className:"width-helper"},q.map((function(e){return r.a.createElement(j,{value:e,inputFunction:f,outputFunction:g,selectedInput:C,selectedOutput:O})}))):null,"Temperature"===a?r.a.createElement("div",{className:"width-helper"},F.map((function(e){return r.a.createElement(j,{value:e,inputFunction:W,outputFunction:V,selectedInput:B,selectedOutput:H})}))):null,"Area"===a?r.a.createElement("div",{className:"width-helper"},M.map((function(e){return r.a.createElement(j,{value:e,inputFunction:D,outputFunction:$,selectedInput:U,selectedOutput:R})}))):null,"Volume"===a?r.a.createElement("div",{className:"width-helper"},L.map((function(e){return r.a.createElement(j,{value:e,inputFunction:ee,outputFunction:re,selectedInput:_,selectedOutput:ne})}))):null,"Weight"===a?r.a.createElement("div",{className:"width-helper"},x.map((function(e){return r.a.createElement(j,{value:e,inputFunction:ue,outputFunction:de,selectedInput:oe,selectedOutput:me})}))):null)),r.a.createElement("div",{className:"footer"},"Created in July 2020 by Jan Charatan."))))},P=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/calculator",component:m,exact:!0}),r.a.createElement(u.a,{path:"/calculator/about",component:S,exact:!0}),r.a.createElement(u.a,{path:"/calculator/calc",component:k,exact:!0}),r.a.createElement(u.a,{path:"/calculator/convert",component:J,exact:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.933c197a.chunk.js.map