(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(9),r=n.n(o),c=n(7),i=n(6),l=n(2),s=n(3),u=n(5),b=n(4),d=(n(14),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onSearchChange=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChange(n)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("input",{type:"text",placeholder:"type to search",className:"form-control search-input",value:this.state.term,onChange:this.onSearchChange})}}]),n}(a.Component),h=m,j=(n(16),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.done,a=t.important,o=t.onDeleteItem,r=t.onToggleImportant,c=t.onToggleDone,i="todo-list-item";return n&&(i+=" done"),a&&(i+=" important"),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:i,children:Object(d.jsx)("span",{className:"todo-list-item-label",onClick:c,children:e})}),Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r,children:Object(d.jsx)("i",{className:"bi bi-exclamation"})}),Object(d.jsx)("button",{onClick:o,type:"button",className:"btn btn-outline-danger btn-sm float-right",children:Object(d.jsx)("i",{className:"bi bi-trash"})})]})]})})}}]),n}(a.Component)),f=j,p=(n(17),function(t){var e=t.todos,n=t.onDeleteItem,a=t.onToggleImportant,o=t.onToggleDone;return Object(d.jsx)("ul",{className:"list-group todo-list",children:e.map((function(t){var e=t.id,r=t.label,c=t.done,i=t.important;return Object(d.jsx)(f,{label:r,id:e,done:c,important:i,onDeleteItem:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleDone:function(){return o(e)}},e)}))})}),O=(n(18),n(19),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).btn=[{name:"all",label:"all"},{name:"active",label:"active"},{name:"done",label:"done"}],t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.btn.map((function(t){var a=t.name,o=t.label,r=e===a?"btn-info":"btn-outline-secondary";return Object(d.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return n(a)},children:o},a)}));return Object(d.jsx)("div",{className:"btn-group",children:a})}}]),n}(a.Component)),g=O,v=(n(20),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onChangeItem=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault();var n=t.state.label;(0,t.props.onAddItem)(n),t.setState({label:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.label;return Object(d.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(d.jsx)("input",{type:"text",className:"form-control",onChange:this.onChangeItem,placeholder:"What needs to be done",value:t}),Object(d.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}}]),n}(a.Component)),x=v,I=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).maxId=100,t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")],term:"",filter:"active"},t.onAddItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(i.a)(e),[n])}}))},t.onDeleteItem=function(e){t.setState((function(t){var n=t.todoData.filter((function(t){return t.id!==e}));return{todoData:Object(i.a)(n)}}))},t.onToggleDone=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(c.a)(Object(c.a)({},o),{},{done:!o.done});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},t.onToggleImportant=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(c.a)(Object(c.a)({},o),{},{important:!o.important});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},t.onSearchChange=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(s.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filterItems",value:function(t,e){return"all"===e?t:"active"===e?t.filter((function(t){return!t.done})):"done"===e?t.filter((function(t){return t.done})):void 0}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,o=this.filterItems(this.search(e,n),a),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(d.jsxs)("main",{className:"top-panel",children:[Object(d.jsxs)("div",{className:"header d-flex",children:[Object(d.jsx)("h1",{children:"My Todo List"}),Object(d.jsxs)("h2",{children:[c," more to do, ",r," done"]})]}),Object(d.jsxs)("div",{className:"search-panel",children:[Object(d.jsx)(h,{onSearchChange:this.onSearchChange}),Object(d.jsx)(g,{filter:a,onFilterChange:this.onFilterChange})]}),Object(d.jsx)(p,{todos:o,onDeleteItem:this.onDeleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(d.jsx)(x,{onAddItem:this.onAddItem})]})}}]),n}(a.Component),y=I;var C=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{})})};n(21);r.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.273bce5d.chunk.js.map