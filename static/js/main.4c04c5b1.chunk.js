(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(9),i=s.n(r),c=(s(15),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))}),o=s(8),l=s.n(o),u=s(10),d=s(3),h=s(4),b=s(2),j=s(6),m=s(5),O=(s(17),s(0));function p(e){return Object(O.jsxs)("div",{children:[" ",e.error," "]})}function g(e){return Object(O.jsx)("span",{className:"popUpForm",children:e.message})}function f(e){return Object(O.jsx)("div",{className:"form-popup",id:"myForm",children:Object(O.jsxs)("form",{className:"form-container",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)("label",{htmlFor:"email",children:Object(O.jsx)("b",{children:"Email"})}),!e.emailIsCorrect&&e.emailFocusOut&&Object(O.jsx)(g,{message:e.messageIncorrectEmail}),Object(O.jsx)("input",{type:"text",placeholder:"Enter Email",name:"email",value:e.email,onChange:function(t){return e.handleEmailChange(t)},onBlur:e.checkEmailCorrectness}),Object(O.jsx)("label",{htmlFor:"psw",children:Object(O.jsx)("b",{children:"Password"})}),!e.passwordIsLong&&e.passwordFocusOut&&Object(O.jsx)(g,{message:e.messageShortPassword}),Object(O.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",value:e.password,onChange:function(t){return e.handlePasswordChanges(t)},onBlur:e.checkPasswordCorrectness}),Object(O.jsx)("button",{type:"submit",className:"btn",children:"Login"})]})})}var x=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={isOpened:!1,email:"",password:"",emailIsCorrect:!0,passwordIsLong:!0,emailFocusOut:!1,passwordFocusOut:!1,messageIncorrectEmail:"Incorrect Email",messageShortPassword:"Password must be longer then 6 symbols"},n.openCloseForm=n.openCloseForm.bind(Object(b.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(b.a)(n)),n.handlePasswordChanges=n.handlePasswordChanges.bind(Object(b.a)(n)),n.checkEmailCorrectness=n.checkEmailCorrectness.bind(Object(b.a)(n)),n.checkPasswordCorrectness=n.checkPasswordCorrectness.bind(Object(b.a)(n)),n}return Object(h.a)(s,[{key:"openCloseForm",value:function(){this.setState((function(e){return{isOpened:!e.isOpened}}))}},{key:"handleEmailChange",value:function(e){console.log("event",e),this.setState({email:e.target.value})}},{key:"handlePasswordChanges",value:function(e){this.setState({password:e.target.value})}},{key:"checkEmailCorrectness",value:function(){null!==this.state.email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)?this.setState((function(e){return{emailIsCorrect:e.emailIsCorrect=!0,emailFocusOut:e.emailFocusOut=!0}})):this.setState((function(e){return{emailIsCorrect:e.emailIsCorrect=!1,emailFocusOut:e.emailFocusOut=!0}})),console.log("email corectness function")}},{key:"checkPasswordCorrectness",value:function(){console.log("Password Length",this.state.password.length),this.state.password.length<6?this.setState({passwordIsLong:!1,passwordFocusOut:!0}):this.setState({passwordIsLong:!0,passwordFocusOut:!0})}},{key:"render",value:function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("button",{className:"open-button",onClick:this.openCloseForm,children:this.state.isOpened?"Close Form":"Open Form"}),this.state.isOpened&&Object(O.jsx)(f,{email:this.state.email,handleEmailChange:this.handleEmailChange,handlePasswordChanges:this.handlePasswordChanges,messageForEmail:this.state.messageForEmail,emailIsCorrect:this.state.emailIsCorrect,passwordIsLong:this.state.passwordIsLong,emailFocusOut:this.state.emailFocusOut,passwordFocusOut:this.state.passwordFocusOut,checkEmailCorrectness:this.checkEmailCorrectness,checkPasswordCorrectness:this.checkPasswordCorrectness,messageIncorrectEmail:this.state.messageIncorrectEmail,messageShortPassword:this.state.messageShortPassword})]})}}]),s}(a.a.Component),C=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(h.a)(s,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),this.props.filterCards(e.target.value)}},{key:"render",value:function(){return Object(O.jsx)("input",{value:this.state.value,onChange:this.handleChange})}}]),s}(a.a.Component);function v(e){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)("div",{className:"nameDescriptions",children:[Object(O.jsxs)("b",{children:[" ",e.name," "]}),Object(O.jsx)("span",{children:e.description})]}),Object(O.jsx)("img",{alt:e.name,src:e.image_url})]})}function w(e){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)("b",{children:[" Name: ",e.name," "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Description:"})," ",e.description]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"ABV:"})," ",e.abv]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Contributed by:"}),e.contributed_by]})," "," ",Object(O.jsx)("br",{}),"brewers_tips",Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Brewer Tips:"}),e.brewers_tips]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"First Brewed:"}),e.first_brewed]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"FoodPairing:"}),e.food_pairing]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"IBU:"}),e.ibu]}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"PH:"}),e.ph]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"SRM:"}),e.srm]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Tag Line:"}),e.tagline]})]})}var k=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={isDefault:!0},n.toggle=n.toggle.bind(Object(b.a)(n)),n}return Object(h.a)(s,[{key:"toggle",value:function(){this.setState((function(e){return{isDefault:!e.isDefault}}))}},{key:"render",value:function(){var e=this.props.item;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("button",{className:"showButton",onClick:this.toggle,children:this.state.isDefault?"Full Info":"Back"}),this.state.isDefault?Object(O.jsx)(v,{name:e.name,image_url:e.image_url,description:e.description}):Object(O.jsx)(w,{name:e.name,description:e.description,abv:e.abv,contributed_by:e.contributed_by,brewers_tips:e.brewers_tips,first_brewed:e.first_brewed,food_pairing:e.food_pairing,ibu:e.ibu,ph:e.ph,srm:e.srm,tagline:e.tagline})]})}}]),s}(a.a.Component);function F(e){return console.log("props.props",e.data),e.data.map((function(e){return Object(O.jsx)(k,{item:e},e.id)}))}var y=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={selectedValue:"abv",sortOrder:null},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleRadioChange=n.handleRadioChange.bind(Object(b.a)(n)),n.handleSortChanges=n.handleSortChanges.bind(Object(b.a)(n)),n}return Object(h.a)(s,[{key:"handleChange",value:function(e){this.setState({selectedValue:e.target.value}),console.log("SORTFORM",this.state.selectedValue)}},{key:"handleRadioChange",value:function(e){this.setState({sortOrder:e.target.value}),console.log("RadioButtonWorks",e.target.value)}},{key:"handleSortChanges",value:function(e){null===this.state.sortOrder&&console.log("Choose sort order"),this.props.sortedCards(this.state.selectedValue,this.state.sortOrder)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"sortForm",children:[Object(O.jsx)("label",{for:"sort",children:"Option to sort"}),Object(O.jsxs)("select",{id:"sort",name:"sort",onChange:function(t){e.handleChange(t)},children:[Object(O.jsx)("option",{name:"abv",value:"abv",children:"abv"}),Object(O.jsx)("option",{name:"ibu",value:"ibu",children:"ibu"}),Object(O.jsx)("option",{name:"ph",value:"ph",children:"ph"}),Object(O.jsx)("option",{name:"srm",value:"srm",children:"srm"})]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"radio",id:"fromBiggest",value:"fromBiggest",name:"checkOrder",onChange:function(t){e.handleRadioChange(t)}}),"\xa0 ",Object(O.jsx)("label",{for:"fromBiggest",children:"Sort from the biggest value to the smallest"})," ",Object(O.jsx)("br",{}),"\xa0"," ",Object(O.jsx)("input",{type:"radio",id:"fromSmallest",value:"fromSmallest",name:"checkOrder",onChange:function(t){e.handleRadioChange(t)}}),"\xa0",Object(O.jsx)("label",{for:"fromSmallest",children:"Sort from the smallest value to the biggest"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"button",value:"Sort",className:"btnSort",onClick:this.handleSortChanges})]})]})}}]),s}(a.a.Component),S="initial",P="failed",E="successful",I=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={list:[],statusRequest:S,filteredList:[]},n.filterCards=n.filterCards.bind(Object(b.a)(n)),n.sortedCards=n.sortedCards.bind(Object(b.a)(n)),n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getListProd("https://api.punkapi.com/v2/beers")}},{key:"filterCards",value:function(e){this.setState((function(t){return{filteredList:t.list.filter((function(t){return t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)}))}}))}},{key:"sortedCards",value:function(e,t){console.log("ORDER",t),"fromSmallest"===t&&this.setState((function(t){return{filteredList:t.list.sort((function(t,s){return t[e]-s[e]}))}})),"fromBiggest"===t&&this.setState((function(t){return{filteredList:t.list.sort((function(t,s){return s[e]-t[e]}))}}))}},{key:"getListProd",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:n=e.sent,console.log("response results",s,n),s.ok?this.setState({list:n,filteredList:n,statusRequest:E}):this.setState({statusRequest:P});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("state in render",this.state.list),console.log("stateID",this.state.idToShowFullInfo),Object(O.jsxs)("div",{children:[this.state.statusRequest===S&&Object(O.jsx)("p",{style:{textAlign:"center",padding:20},children:"Loading..."}),this.state.statusRequest===E&&Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(y,{sortedCards:this.sortedCards}),Object(O.jsx)(C,{filterCards:this.filterCards}),Object(O.jsx)(x,{}),Object(O.jsx)(F,{data:this.state.filteredList})]}),this.state.statusRequest===P&&Object(O.jsx)(p,{error:this.state.statusRequest})]})}}]),s}(a.a.Component);i.a.render(Object(O.jsx)(I,{}),document.getElementById("root")),c()}},[[19,1,2]]]);
//# sourceMappingURL=main.4c04c5b1.chunk.js.map