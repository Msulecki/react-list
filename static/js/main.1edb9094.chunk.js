(this["webpackJsonpreact-list"]=this["webpackJsonpreact-list"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Blue","date":"2020-07-23T07:24:31+0000"},{"name":"Red","date":"2020-03-01T08:45:11+0000"},{"name":"Green","date":"1990-11-30T13:04:01+0000"},{"name":"Blue","date":"1990-11-30T13:04:01+0000"},{"name":"Pink","date":"1999-09-18T00:51:38+0000"},{"name":"Yellow","date":"1999-09-18T00:51:38+0000"},{"name":"Grey","date":"2016-10-03T20:32:13+0000"},{"name":"Orange","date":"2019-02-08T11:11:09+0000"},{"name":"Teal","date":"2020-06-21T03:05:21+0000"},{"name":"Black","date":"2002-02-22T13:45:43+0000"}]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(14),a(4)),o=a(1),i=function(e){var t=e.handleAddItem,a=e.newName,n=e.setNewName,c=e.newDate,l=e.setNewDate;return r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{type:"text",placeholder:"Name",maxLength:16,onChange:function(e){return n(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},value:a,required:!0}),r.a.createElement("input",{type:"date",onChange:function(e){return l(e.target.value)},value:c,required:!0}),r.a.createElement("input",{type:"submit",value:"Add"}))},m=function(e){var t=e.sort,a=e.handleSort;return r.a.createElement("div",{className:"sort"},"Sort by:\u2003",r.a.createElement("button",{className:"".concat(t.includes("name")?"active":""),onClick:function(){return a("name")}},"Name"),r.a.createElement("button",{className:"".concat(t.includes("date")?"active":""),onClick:function(){return a("date")}},"Date"),"List is",t.length?" sorted by ".concat(t.join(" and then by "),"."):" unsorted.")},s=a(7),d=a.n(s),p=a(8);a(17);var f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(p),s=Object(o.a)(l,2),f=s[0],b=s[1],E=Object(n.useState)(""),v=Object(o.a)(E,2),h=v[0],N=v[1],g=Object(n.useState)((new Date).toLocaleDateString().split(".").reverse().join("-")),j=Object(o.a)(g,2),O=j[0],S=j[1],w=Object(n.useState)(null),y=Object(o.a)(w,2),T=y[0],D=y[1];return r.a.createElement("main",null,r.a.createElement(i,{handleAddItem:function(e){e.preventDefault(),b([].concat(Object(u.a)(f),[{date:O,name:h}])),N("")},newName:h,setNewName:N,setNewDate:S,newDate:O}),r.a.createElement(m,{sort:a,handleSort:function(e){a.includes(e)?c(a.filter((function(t){return t!==e}))):c([].concat(Object(u.a)(a),[e]))}}),r.a.createElement("ul",null,d()(f,a).map((function(e,t){return r.a.createElement("li",{key:t,className:T===e?"active":""},r.a.createElement("input",{type:"radio",onChange:function(){return D(e)},checked:T===e}),r.a.createElement("span",null,e.name),r.a.createElement("span",null,new Date(e.date).toLocaleDateString()),r.a.createElement("button",{onClick:function(){return function(e){b(f.filter((function(t,a){return a!==e})))}(t)}},r.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c")))})),0===f.length&&r.a.createElement("li",null,"Sorry, no results \xaf\\_(\u30c4)_/\xaf")))};a(18);var b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1edb9094.chunk.js.map