(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),s=a(4),l=a(6),i=a(0),u=a.n(i),o=a(22),m=a.n(o),p=(a(33),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).setTasks=function(){fetch(a.props.backend,{mode:"cors",method:"GET"}).then(function(e){return console.log(e),e.json()}).then(function(e){if(void 0!==e||null!==e)return a.setState({tasks:e})}).catch(console.error)},a.state={tasks:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setTasks()}},{key:"componentDidUpdate",value:function(e){this.props.tasks!==e.tasks&&this.setTasks()}},{key:"render",value:function(){return u.a.createElement("section",{id:"alltasks",className:"alltasks-container"},u.a.createElement("h3",{id:"tasksTitle"},"All Tasks"),u.a.createElement("ul",{id:"alltaskslist"},this.state.tasks.map(function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:e.id},u.a.createElement("p",null,e.title),u.a.createElement("div",{id:"taskDiv"},u.a.createElement("p",null,"Task Description: ",e.description),u.a.createElement("p",null,"Assigned To: ",e.assignee),u.a.createElement("p",null,"Status: ",e.status))),u.a.createElement("hr",null))})))}}]),t}(u.a.Component)),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"main"},u.a.createElement(p,{backend:this.props.backend})))}}]),t}(u.a.Component),h=a(25),k=a(10),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(e),fetch("".concat(a.props.backend,"/tasks"),{mode:"cors",method:"POST",body:"title=".concat(e.target.title.value,"&description=").concat(e.target.description.value,"&assignee=").concat(e.target.assignee.value)}).then(function(e){console.log(e)}).catch(console.error)},a.state={title:"",description:"",assignee:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("form",{id:"task-form",onSubmit:this.handleSubmit},u.a.createElement("h3",null,"Create a New Task"),u.a.createElement("p",null,"Title: ",u.a.createElement("input",{id:"title",type:"text",name:"title"})),u.a.createElement("p",null,"Description: ",u.a.createElement("input",{id:"description=",type:"text",name:"description"})),u.a.createElement("p",null,"Assignee: ",u.a.createElement("input",{id:"assignee",type:"text",name:"assignee"})),u.a.createElement("p",null,u.a.createElement("input",{type:"submit",value:"Create Task"})))}}]),t}(u.a.Component),b=a(14),f=a.n(b),O=a(23),j=a(24),v=a.n(j),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).setTasks=function(){var e=Object(O.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).BACKEND_URL));case 2:n=e.sent,a.setState({tasks:n.body});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={tasks:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setTasks()}},{key:"render",value:function(){return u.a.createElement("section",{id:"usertasks",className:"usertasks-container"},u.a.createElement("ul",{id:"usertaskslist"},u.a.createElement("h2",null,"Tasks"),this.state.tasks.map(function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement("li",{key:t},u.a.createElement("p",null,e.title),u.a.createElement("div",{id:"taskDiv"},u.a.createElement("p",null,"Task Description: ",e.description),u.a.createElement("p",null,"Assigned To: ",e.assignee),u.a.createElement("p",null,e.status))),u.a.createElement("hr",null))})))}}]),t}(u.a.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];return t.push(u.a.createElement("li",{key:1},u.a.createElement("a",{href:"/"},"Home"))),t.push(u.a.createElement("li",{key:2},u.a.createElement("a",{href:"/addtask"},"Create New Task"))),t.push(u.a.createElement("li",{key:3},u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{onChange:this.handleSearchKeyword}),u.a.createElement("input",{type:"submit",value:"Search Task of User"})))),u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,null,u.a.createElement("div",null,u.a.createElement("ul",{id:"nav"},t),u.a.createElement(k.a,{exact:!0,path:"/",render:function(t){return u.a.createElement(d,{backend:e.props.backend})}}),u.a.createElement(k.a,{path:"/addtask",render:function(t){return u.a.createElement(E,{backend:e.props.backend})}}),u.a.createElement(k.a,{path:"/user",render:function(t){return u.a.createElement(y,{parentState:e.props.parentState})}}))))}}]),t}(u.a.Component),T=function(e){return u.a.createElement("header",null,u.a.createElement("h1",null,"TaskMaster"))};a(34).config();var C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={backend:"http://taskmaster-env.csiiybveap.us-east-1.elasticbeanstalk.com/"},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(T,null),u.a.createElement("div",null,u.a.createElement(g,{backend:this.state.backend})))}}]),t}(u.a.Component),S=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(C,null)}}]),t}(u.a.Component);m.a.render(u.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.799bd09c.chunk.js.map