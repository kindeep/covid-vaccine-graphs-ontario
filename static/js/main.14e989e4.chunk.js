(this["webpackJsonpcovid-vaccine-graphs"]=this["webpackJsonpcovid-vaccine-graphs"]||[]).push([[0],{156:function(t,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),n=a(15),i=a.n(n),d=(a(51),a(52),a(1)),l=a(43),c=a.n(l),s=a(46),u=function(t){return new Promise((function(t,e){c()("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",(function(e,a){t(a)}))}))};function _(t){return t?parseInt(t.replace(/,/g,"")):0}function f(t){return{report_date:new Date(t.report_date),previous_day_doses_administered:_(t.previous_day_doses_administered),total_doses_administered:_(t.total_doses_administered),total_doses_in_fully_vaccinated_individuals:_(t.total_doses_in_fully_vaccinated_individuals),total_individuals_fully_vaccinated:_(t.total_individuals_fully_vaccinated)}}var p=a(44),v=a(6);var b=function(){for(var t=function(){var t,e,a=Object(s.a)("/api/user",u),r=a.data,o=!!a.error,n=!r;return{data:(null!==(t=null===r||void 0===r||null===(e=r.result)||void 0===e?void 0:e.records)&&void 0!==t?t:[]).map(f).map((function(t){var e=t.total_doses_administered-t.total_individuals_fully_vaccinated,a=e/1457e4;return Object(d.a)(Object(d.a)({},t),{},{at_least_1:e,at_least_1_ratio:a})})),failed:o,loading:n}}().data,e=[],a=new Date("June 5, 2021"),r=new Date("December 24, 2020");r<=a;)e.push(r),r=new Date(r.getTime()+864e5);var o,n,i,l,c={},_={};if(t&&t.length>0){var b=t[t.length-1],g=e.findIndex((function(t){return t.toDateString()===b.report_date.toDateString()})),h=(o=g,n=b.at_least_1_ratio,i=e.length-1,l=.75,function(t){return(l-n)/(i-o)*(t-o)+n});e.forEach((function(t,e){t>=b.report_date&&(_[t.toDateString()]=h(e))}))}t.forEach((function(t){c[t.report_date.toDateString()]=t}));var m=e.map((function(t){var e;return null===(e=c[t.toDateString()])||void 0===e?void 0:e.at_least_1_ratio})),D=e.map((function(t){return _[t.toDateString()]})),j={labels:e.map((function(t){return t.toDateString()})),datasets:[{label:"Ratio of Ontario population with at least one dose",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:m},{type:"line",label:"Required trajectory for 75% by June 5",fill:!1,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(75, 75, 75, 1)",data:D,borderDash:[20,20],borderWidth:0,pointBorderColor:"rgba(0,0,0,0)"}]};return Object(v.jsx)("div",{style:{height:"100vh"},children:Object(v.jsx)(p.Line,{data:j})})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,157)).then((function(e){var a=e.getCLS,r=e.getFID,o=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),r(t),o(t),n(t),i(t)}))},h=a(45);i.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(h.a,{children:Object(v.jsx)(b,{})})}),document.getElementById("root")),g()},51:function(t,e,a){},52:function(t,e,a){}},[[156,1,2]]]);
//# sourceMappingURL=main.14e989e4.chunk.js.map