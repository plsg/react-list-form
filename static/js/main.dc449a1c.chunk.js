(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),c=(a(15),a(9)),i=a(1),u=a(2),m=a(4),s=a(3),b=a(5),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tableData,a=e.removeTableData;return l.a.createElement("table",null,l.a.createElement(p,null),l.a.createElement(d,{tableData:t,removeTableData:a}))}}]),t}(n.Component),p=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Job"),l.a.createElement("th",null)))},d=function(e){var t=e.tableData.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.job),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeTableData(a)}},"Delete")))});return l.a.createElement("tbody",null,t)},f=h,v=a(8),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"type a name",value:t,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"job"},"Job"),l.a.createElement("input",{id:"job",type:"text",name:"job",placeholder:"type a job title",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={tableDataValues:[],data:[]},a.removeTableData=function(e){var t=a.state.tableDataValues;a.setState({tableDataValues:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({tableDataValues:Object(c.a)(a.state.tableDataValues).concat([e])})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=l.a.createElement("h1",{className:"site-heading"},"Hello, ","Tanya"," variable!"),t=this.state.data.map(function(e,t){return l.a.createElement("li",{key:t},e)});return l.a.createElement("div",{className:"App"},e,l.a.createElement(f,{tableData:this.state.tableDataValues,removeTableData:this.removeTableData}),l.a.createElement(E,{handleSubmit:this.handleSubmit}),l.a.createElement("ul",null,t),";")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.dc449a1c.chunk.js.map