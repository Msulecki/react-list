(this["webpackJsonpreact-list"]=this["webpackJsonpreact-list"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Blue","date":"2020-07-23T07:24:31+0000"},{"name":"Red","date":"2020-03-01T08:45:11+0000"},{"name":"Green","date":"1990-11-30T13:04:01+0000"},{"name":"Blue","date":"1990-11-30T13:04:01+0000"},{"name":"Pink","date":"1999-09-18T00:51:38+0000"},{"name":"Yellow","date":"1999-09-18T00:51:38+0000"},{"name":"Grey","date":"2016-10-03T20:32:13+0000"},{"name":"Orange","date":"2019-02-08T11:11:09+0000"},{"name":"Teal","date":"2020-06-21T03:05:21+0000"},{"name":"Black","date":"2002-02-22T13:45:43+0000"}]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(14),a(4)),o=a(1),i=function(e){var t=e.handleAddItem,a=e.newName,n=e.setNewName,c=e.newDate,l=e.setNewDate;return r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{type:"text",placeholder:"Name",maxLength:16,onChange:function(e){return n(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},value:a,required:!0}),r.a.createElement("input",{type:"date",onChange:function(e){return l(e.target.value)},value:c,required:!0}),r.a.createElement("input",{type:"submit",value:"Add"}))},m=function(e){var t=e.sort,a=e.handleSort;return r.a.createElement("div",{className:"sort"},"Sort by:\u2003",r.a.createElement("button",{className:"".concat(t.includes("name")?"active":""),onClick:function(){return a("name")}},"Name"),r.a.createElement("button",{className:"".concat(t.includes("date")?"active":""),onClick:function(){return a("date")}},"Date"),"List is",t.length?" sorted by ".concat(t.join(" and then by "),"."):" unsorted.")},s=a(7),d=a.n(s),f=function(e){var t=e.items,a=e.sort,n=e.checkedItem,c=e.setCheckedItem,l=e.handleDeleteItem;return r.a.createElement("ul",null,d()(t,a).map((function(e,t){return r.a.createElement("li",{key:t,className:n===e?"active":""},r.a.createElement("input",{type:"radio",onChange:function(){return c(e)},checked:n===e}),r.a.createElement("span",null,e.name),r.a.createElement("span",null,new Date(e.date).toLocaleDateString()),r.a.createElement("button",{onClick:function(){return l(t)}},r.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c")))})),0===t.length&&r.a.createElement("li",null,"Sorry, no results \xaf\\_(\u30c4)_/\xaf"))},p=a(8);a(17);var E=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(p),s=Object(o.a)(l,2),d=s[0],E=s[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),v=h[0],N=h[1],g=Object(n.useState)((new Date).toLocaleDateString().split(".").reverse().join("-")),j=Object(o.a)(g,2),O=j[0],S=j[1],k=Object(n.useState)(null),w=Object(o.a)(k,2),D=w[0],y=w[1];return r.a.createElement("main",null,r.a.createElement(i,{handleAddItem:function(e){e.preventDefault(),E([].concat(Object(u.a)(d),[{date:O,name:v}])),N("")},newName:v,setNewName:N,setNewDate:S,newDate:O}),r.a.createElement(m,{sort:a,handleSort:function(e){a.includes(e)?c(a.filter((function(t){return t!==e}))):c([].concat(Object(u.a)(a),[e]))}}),r.a.createElement(f,{items:d,sort:a,checkedItem:D,setCheckedItem:y,handleDeleteItem:function(e){E(d.filter((function(t,a){return a!==e})))}}))};a(18);var b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.537855f3.chunk.js.map