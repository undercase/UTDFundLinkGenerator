(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),c=(n(15),n(8)),r=n(1),s=n(2),u=n(4),b=n(3),h=n(5),d=(n(16),n(19),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"radioButton"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",name:this.props.name,value:this.props.value,checked:this.props.selectedOption===this.props.value,onChange:this.props.handleOptionChange}),this.props.label))}}]),t}(a.Component)),g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(b.a)(t).call(this,e))).toggleCheckboxChange=function(){var e=n.props,t=e.handleCheckboxChange,a=e.value;n.setState(function(e){return{isChecked:!e.isChecked}}),t(a)},n.state={isChecked:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,a=this.state.isChecked;return o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",value:n,checked:a,onChange:this.toggleCheckboxChange}),t))}}]),t}(a.Component),m=["25","50","100","250","500","1000","2500","5000"],f=["60","120","240","480","1000","2500","5000","10000"],v=[{value:"3",label:"Area of Greatest Need"},{value:"301",label:"Athletics"},{value:"435",label:"Ackerman Center for Holocaust Studies"},{value:"2",label:"Alumni Relations"},{value:"386",label:"School of Arts & Humanities"},{value:"1895",label:"Arts, Technology, and Emerging Communication"},{value:"1221",label:"Asia Center"},{value:"472",label:"Behavioral and Brain Sciences"},{value:"727",label:"Callier Center for Communication Disorders"},{value:"276",label:"Center for BrainHealth"},{value:"1395",label:"Center for Vital Longevity"},{value:"721",label:"Economic, Political and Policy Sciences"},{value:"692",label:"Eugene McDermott Scholars Program"},{value:"485",label:"Friends of McDermott Library"},{value:"2118",label:"Fund for UT Dallas"},{value:"289",label:"Galerstein Gender Center"},{value:"83",label:"Interdisciplinary Studies (General Studies)"},{value:"84",label:"Johnsson School of Engineering & Computer Science"},{value:"2259",label:"Margaret McDermott Memorial Fund"},{value:"39",label:"Naveen Jindal School of Management"},{value:"299",label:"School of Natural Sciences and Mathematics"},{value:"1011",label:"Office of Diversity and Community Engagement"},{value:"139",label:"Scholarships and Fellowships"}],p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(b.a)(t).call(this,e))).componentWillMount=function(){n.selectedDesignations=new Set},n.handleOptionChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.toggleCheckbox=function(e){n.selectedDesignations.has(e)?n.selectedDesignations.delete(e):n.selectedDesignations.add(e),n.forceUpdate()},n.state={bboxdonation$gift$BBFormGiftChoice:"bboxdonation_gift_lblChoiceSingleGift",bboxdonation$gift$GivingLevel:"100",bboxdonation$gift$PledgeAmount:"60",copySuccess:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"buildURI",value:function(){Array.from(this.selectedDesignations),this.state.bboxdonation$gift$BBFormGiftChoice;var e="https://cmsdev.utdallas.edu/development/giving/?bboxdonation$gift$BBFormGiftChoice=".concat(this.state.bboxdonation$gift$BBFormGiftChoice);return"bboxdonation_gift_lblChoiceSingleGift"===this.state.bboxdonation$gift$BBFormGiftChoice?e+="&bboxdonation$gift$GivingLevel=".concat(this.state.bboxdonation$gift$GivingLevel):e+="&bboxdonation$gift$PledgeAmount=".concat(this.state.bboxdonation$gift$PledgeAmount),e+=Array.from(this.selectedDesignations).reduce(function(e,t){return e+"&bboxdonation$designation$ddDesignations[]=".concat(t)},"")}},{key:"render",value:function(){var e,t=this;e="bboxdonation_gift_lblChoiceSingleGift"===this.state.bboxdonation$gift$BBFormGiftChoice?m.map(function(e){return o.a.createElement(d,{name:"bboxdonation$gift$GivingLevel",value:e,selectedOption:t.state.bboxdonation$gift$GivingLevel,handleOptionChange:t.handleOptionChange,label:e,key:e})}):f.map(function(e){return o.a.createElement(d,{name:"bboxdonation$gift$PledgeAmount",value:e,selectedOption:t.state.bboxdonation$gift$PledgeAmount,handleOptionChange:t.handleOptionChange,label:e,key:e})});var n=v.map(function(e){return o.a.createElement(g,{label:e.label,value:e.value,handleCheckboxChange:t.toggleCheckbox,key:e.value})});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Link Generator"),o.a.createElement("div",{className:"giftType"},o.a.createElement("h3",null,"Gift Type"),o.a.createElement(d,{name:"bboxdonation$gift$BBFormGiftChoice",value:"bboxdonation_gift_lblChoiceSingleGift",selectedOption:this.state.bboxdonation$gift$BBFormGiftChoice,handleOptionChange:this.handleOptionChange,label:"One-time gift"}),o.a.createElement(d,{name:"bboxdonation$gift$BBFormGiftChoice",value:"bboxdonation_gift_lblChoicePledge",selectedOption:this.state.bboxdonation$gift$BBFormGiftChoice,handleOptionChange:this.handleOptionChange,label:"Pledge to Give"})),o.a.createElement("div",{className:"donationAmount"},o.a.createElement("h3",null,"Donation Amount"),e),o.a.createElement("div",{className:"designations"},o.a.createElement("h3",null,"Designations"),n),o.a.createElement("div",{className:"uri"},o.a.createElement("h3",null,"Your URI: ",o.a.createElement("a",{href:this.buildURI()},this.buildURI()))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.1c325a6d.chunk.js.map