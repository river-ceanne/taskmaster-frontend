(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),s=a(4),u=a(6),l=a(0),i=a.n(l),o=a(24),m=a.n(o),h=(a(33),a(10)),p=a.n(h),f=a(12),d=a(14),E=a.n(d),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).setTasks=function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).BACKEND_URL));case 2:n=e.sent,console.log("--- TASK DATA --- "+n),a.setState({tasks:n.body});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={tasks:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setTasks()}},{key:"componentDidUpdate",value:function(e){this.props.tasks!==e.tasks&&this.setTasks()}},{key:"render",value:function(){return i.a.createElement("section",{id:"alltasks",className:"alltasks-container"})}}]),t}(i.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"main"},i.a.createElement(b,null)))}}]),t}(i.a.Component),O=a(25),j=a(11),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSearchKeyword=function(e){var t=e.target.value;a.setState({search_query:t})},a.handleSubmit=function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.state.search_query;case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={search_query:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{onChange:this.handleSearchKeyword}),i.a.createElement("button",{onClick:this.handleSubmit},"Create Task"))}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).setTasks=function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).BACKEND_URL));case 2:n=e.sent,a.setState({tasks:n.body});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={tasks:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setTasks()}},{key:"render",value:function(){return i.a.createElement("section",{id:"usertasks",className:"usertasks-container"},i.a.createElement("ul",{id:"usertaskslist"},i.a.createElement("h2",null,"Tasks"),this.state.tasks.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{key:t},i.a.createElement("p",null,e.title),i.a.createElement("div",{id:"taskDiv"},i.a.createElement("p",null,"Task Description: ",e.description),i.a.createElement("p",null,"Assigned To: ",e.assignee),i.a.createElement("p",null,e.status))),i.a.createElement("hr",null))})))}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSearchKeyword=function(e){var t=e.target.value;a.setState({search_query:t})},a.state={search_query:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];return t.push(i.a.createElement("li",{key:1},i.a.createElement("a",{href:"/main"},"Home"))),t.push(i.a.createElement("li",{key:2},i.a.createElement("a",{href:"/addtask"},"Create New Task"))),t.push(i.a.createElement("li",{key:3},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{onChange:this.handleSearchKeyword}),i.a.createElement("input",{type:"submit"})),i.a.createElement("a",{href:"/user"},"Search Task of User"))),i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,null,i.a.createElement("div",null,i.a.createElement("ul",{id:"nav"},t),i.a.createElement(j.a,{exact:!0,path:"/",component:k}),i.a.createElement(j.a,{path:"/main",component:k}),i.a.createElement(j.a,{path:"/addtask",component:v}),i.a.createElement(j.a,{path:"/user",render:function(t){return i.a.createElement(y,{parentState:e.props.parentState})}}))))}}]),t}(i.a.Component),w=function(e){return i.a.createElement("header",null,i.a.createElement("h1",null,"TaskMaster"))};a(34).config();var C=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null),i.a.createElement("div",null,i.a.createElement(S,null)),i.a.createElement("div",null,i.a.createElement(k,null)))}}]),t}(i.a.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(C,null)}}]),t}(i.a.Component);m.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d80c161e.chunk.js.map