(this["webpackJsonpcovid-vaccine-graphs"]=this["webpackJsonpcovid-vaccine-graphs"]||[]).push([[0],{154:function(t,a,e){"use strict";e.r(a);var n=e(0),i=e.n(n),r=e(14),o=e.n(r),d=(e(49),e(50),e(15)),c=e.n(d),s=e(44),l=function(t){return new Promise((function(t,a){c()("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",(function(a,e){t(e)}))}))};function u(t){return t?parseInt(t.replace(/,/g,"")):0}function _(t){return{report_date:new Date(t.report_date),previous_day_doses_administered:u(t.previous_day_doses_administered),total_doses_administered:u(t.total_doses_administered),total_doses_in_fully_vaccinated_individuals:u(t.total_doses_in_fully_vaccinated_individuals),total_individuals_fully_vaccinated:u(t.total_individuals_fully_vaccinated)}}function f(){var t,a,e=Object(s.a)("/api/user",l),n=e.data,i=!!e.error,r=!n,o=(null!==(t=null===n||void 0===n||null===(a=n.result)||void 0===a?void 0:a.records)&&void 0!==t?t:[]).map(_),d=o.map((function(t){return t.total_individuals_fully_vaccinated})),c=o.map((function(t){return t.total_doses_administered})),u=function(t,a){for(var e=[],n=Math.max(t.length,a.length),i=0;i<n;i++){var r=t.length>i?t[i]:0,o=a.length>i?a[i]:0;e.push((null!==r&&void 0!==r?r:0)-(null!==o&&void 0!==o?o:0))}return e}(c,d);return{data:o,failed:i,loading:r,derived:{at_least_1:u,at_least_1_ratio:function(t,a){return t.map((function(t){return t*a}))}(u,1/1457e4),total_individuals_fully_vaccinated:d,total_doses_administered:c}}}var v=e(42),p=e(5);var b=function(){var t=f(),a=t.data,e=t.derived;Object(n.useEffect)((function(){c()("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",(function(t,a){}))}),[]);var i={labels:a.map((function(t){return t.report_date.toDateString()})),datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.at_least_1_ratio}]};return Object(p.jsx)("div",{children:Object(p.jsx)(v.Line,{data:i})})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,155)).then((function(a){var e=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,o=a.getTTFB;e(t),n(t),i(t),r(t),o(t)}))},g=e(43);o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g.a,{children:Object(p.jsx)(b,{})})}),document.getElementById("root")),h()},49:function(t,a,e){},50:function(t,a,e){}},[[154,1,2]]]);
//# sourceMappingURL=main.03e4f196.chunk.js.map