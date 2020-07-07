(this["webpackJsonpSpaceX React Ionic App"]=this["webpackJsonpSpaceX React Ionic App"]||[]).push([[7],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(33),r=n.n(c),o=n(1),i=n(4),s=n(9),m=(n(68),[{title:"Launches",url:"/",iosIcon:s.n,mdIcon:s.n},{title:"Launchpads",url:"/page/launchpads",iosIcon:s.c,mdIcon:s.c},{title:"Ships",url:"/page/ships",iosIcon:s.b,mdIcon:s.b}]),u=function(){var e=Object(i.g)();return l.a.createElement(o.v,{contentId:"main",type:"overlay",class:"ion-no-padding"},l.a.createElement(o.k,{class:"ion-no-padding"},l.a.createElement(o.t,{id:"inbox-list"},l.a.createElement(o.o,{src:"https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2019/12/SpaceX_rev-696x392.jpg"}),l.a.createElement(o.u,{class:"ion-margin-top ion-margin-bottom"},"SpaceX"),l.a.createElement(o.y,null,"Elon_Musk@SpaceX.com"),m.map((function(t,n){return l.a.createElement(o.x,{key:n,autoHide:!1},l.a.createElement(o.p,{className:e.pathname===t.url?"selected":"",routerLink:t.url,routerDirection:"none",lines:"none",detail:!1},l.a.createElement(o.n,{slot:"start",ios:t.iosIcon,md:t.mdIcon}),l.a.createElement(o.r,null,t.title)))})))))},E=n(56),d=n(12),p=n(20),j=n.n(p),y=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(i.h)().id;return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/launches/".concat(r)).then((function(e){c(e.data)}))}),[r]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Launch"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Launch - ",r))),n?l.a.createElement(o.f,null,l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement("h3",{"ion-text":"true",color:"secondary"},n.mission_name),l.a.createElement(o.c,{slot:"end",color:"warning"},n.flight_number," | Year : ",n.launch_year))),l.a.createElement(o.g,null,l.a.createElement(o.i,null,n.launch_site.site_name_long),l.a.createElement(o.o,{src:n.links.mission_patch_small,class:"ion-padding"}),n.details,l.a.createElement(o.q,null),n.timeline?l.a.createElement(o.l,null,Object.entries(n.timeline).map((function(e,t){return l.a.createElement(o.B,{key:t,style:{border:"2px solid grey"}},e.map((function(e,t){return l.a.createElement(o.j,{"text-center":!0,key:t},e)})))}))):"",l.a.createElement(o.q,null),l.a.createElement(o.B,{class:"ion-justify-content-end"},new Date(n.launch_date_utc).toLocaleDateString()))):l.a.createElement(o.f,null,l.a.createElement(o.g,null,l.a.createElement(o.i,null,"Data is Loading ...")))))},h=function(){var e=Object(i.h)().id,t=Object(a.useState)(),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/launchpads/".concat(e)).then((function(e){r(e.data)}))}),[e]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Launchepad"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Launchepad"))),c?l.a.createElement(o.f,null,l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement(o.i,{color:"secondary"},c.site_name_long),l.a.createElement(o.c,{slot:"end",color:"warning"},"Status : ".concat(c.status)))),l.a.createElement(o.g,null,l.a.createElement(o.B,{style:{border:"2px solid grey"}},l.a.createElement(o.j,null,"Latitude : ".concat(c.location.latitude))," ",l.a.createElement(o.j,null,"Longitude : ".concat(c.location.longitude))),c.details,l.a.createElement(o.q,null))):l.a.createElement(o.f,null,l.a.createElement(o.g,null,l.a.createElement(o.i,null,"Data is Loading ...")))))},g=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(i.h)().id;return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/ships/".concat(r)).then((function(e){c(e.data)}))}),[r]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Ship"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Ship"))),n?l.a.createElement(o.f,null,l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement("h3",{"ion-text":"true",color:"secondary"},n.ship_name),l.a.createElement(o.c,{slot:"end",color:"warning"},"Type : ".concat(n.ship_type)))),l.a.createElement(o.g,null,l.a.createElement(o.o,{src:n.image,class:"ion-padding"}),l.a.createElement(o.i,null,n.home_port),l.a.createElement(o.q,null),n.missions?l.a.createElement(o.l,null,l.a.createElement(o.B,{style:{border:"4px solid grey"}},l.a.createElement(o.j,null,"Name"),l.a.createElement(o.j,null,"Flights")),n.missions.map((function(e,t){return l.a.createElement(o.B,{key:t,style:{border:"2px solid grey"}},l.a.createElement(o.j,null,e.name),l.a.createElement(o.j,null,e.flight))}))):"",l.a.createElement(o.q,null),n.position.latitude?l.a.createElement(o.B,{style:{border:"2px solid grey"}},l.a.createElement(o.j,null,"Latitude : ".concat(n.position.latitude)),l.a.createElement(o.j,null,"Longitude : ".concat(n.position.longitude))):"")):l.a.createElement(o.f,null,l.a.createElement(o.g,null,l.a.createElement(o.i,null,"Data is Loading ...")))))},f=function(e){var t=e.flight_number,n=e.details,a=e.mission_name,c=e.launch_site;return l.a.createElement(o.p,{routerLink:"/page/launch/".concat(t)},l.a.createElement(o.f,{style:{width:"100%"}},l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement("h3",{"ion-text":"true",color:"secondary"},a),l.a.createElement(o.c,{slot:"end",color:"warning"},t))),l.a.createElement(o.g,null,l.a.createElement(o.i,null,c.site_name_long),n)))},b=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)([]),r=Object(d.a)(c,2),i=r[0],s=r[1],m=Object(a.useState)([]),u=Object(d.a)(m,2),E=u[0],p=u[1],y=Object(a.useState)(2),h=Object(d.a)(y,2),g=h[0],b=h[1];return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/launches").then((function(e){p(e.data),console.log(e.data),s(e.data.slice(0,10)),n(!1)})),console.log("Laucnhes UseEffect Called")}),[]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Launches"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Launches"))),i.map((function(e,t){return l.a.createElement(f,Object.assign({},e,{key:t}))})),l.a.createElement(o.d,{onClick:function(){var e=E.slice(5*g,5*g+5),t=i.concat(e);console.log(t),s(t),b(g+1)},expand:"block"},"Load More Data ...")))},_=function(e){e.id;var t=e.location,n=e.details,a=(e.vehicles_launched,e.site_id);return l.a.createElement(o.p,{routerLink:"/page/launchpad/".concat(a)},l.a.createElement(o.f,{style:{width:"100%"}},l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement("h3",{"ion-text":"true",color:"secondary"},t.name),l.a.createElement(o.c,{slot:"end",color:"warning"},"NOne Vehicle HEre"))),l.a.createElement(o.g,null,l.a.createElement(o.i,null,a),n)))},O=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),s=i[0],m=i[1],u=Object(a.useState)(2),E=Object(d.a)(u,2),p=E[0],y=E[1];return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/launchpads").then((function(e){m(e.data),c(e.data.slice(0,10))})),console.log("Laucnhepads UseEffect Called")}),[]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Launchpads"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Launnchpad"))),n.map((function(e,t){return l.a.createElement(_,Object.assign({},e,{key:t}))})),l.a.createElement(o.d,{onClick:function(){var e=s.slice(5*p,5*p+5),t=n.concat(e);console.log(t),c(t),y(p+1)},expand:"block"},"Load More Data ...")))},v=function(e){var t=e.ship_id,n=e.ship_name,a=e.ship_type,c=(e.year_built,e.home_port);e.image;return l.a.createElement(o.p,{routerLink:"/page/ship/".concat(t)},l.a.createElement(o.f,{style:{width:"100%"}},l.a.createElement(o.h,null,l.a.createElement(o.p,{class:"ion-no-margin"},l.a.createElement("h3",{"ion-text":"true",color:"secondary"},n),l.a.createElement(o.c,{slot:"end",color:"warning"},a))),l.a.createElement(o.g,null,l.a.createElement(o.D,null,c))))},k=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),s=i[0],m=i[1],u=Object(a.useState)(2),E=Object(d.a)(u,2),p=E[0],y=E[1];return Object(a.useEffect)((function(){j.a.get("https://api.spacexdata.com/v3/ships").then((function(e){m(e.data),c(e.data.slice(0,10))})),console.log("Laucnhepads UseEffect Called")}),[]),l.a.createElement(o.z,null,l.a.createElement(o.m,null,l.a.createElement(o.F,null,l.a.createElement(o.e,{slot:"start"},l.a.createElement(o.w,null)),l.a.createElement(o.E,null,"Ships"))),l.a.createElement(o.k,null,l.a.createElement(o.m,{collapse:"condense"},l.a.createElement(o.F,null,l.a.createElement(o.E,{size:"large"},"Ships"))),n.map((function(e,t){return l.a.createElement(v,Object.assign({},e,{key:t}))})),l.a.createElement(o.d,{onClick:function(){var e=s.slice(5*p,5*p+5),t=n.concat(e);console.log(t),c(t),y(p+1)},expand:"block"},"Load More Data ...")))},x=(n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),function(){return l.a.createElement(o.b,null,l.a.createElement(E.a,null,l.a.createElement(o.C,{contentId:"main"},l.a.createElement(u,null),l.a.createElement(o.A,{id:"main"},l.a.createElement(i.c,{exact:!0,path:"/page/launch/:id",component:y}),l.a.createElement(i.c,{exact:!0,path:"/page/launchpad/:id",component:h}),l.a.createElement(i.c,{exact:!0,path:"/page/ship/:id",component:g}),l.a.createElement(i.c,{exact:!0,path:"/page/launches",component:b}),l.a.createElement(i.c,{exact:!0,path:"/page/launchpads",component:O}),l.a.createElement(i.c,{exact:!0,path:"/page/ships",component:k}),l.a.createElement(i.b,{exact:!0,from:"/page",to:"/page/launches"}),l.a.createElement(i.b,{exact:!0,from:"/",to:"/page/launches"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){e.exports=n(100)},65:function(e,t,n){var a={"./ion-action-sheet-ios.entry.js":[104,11],"./ion-action-sheet-md.entry.js":[105,12],"./ion-alert-ios.entry.js":[106,13],"./ion-alert-md.entry.js":[107,14],"./ion-app_8-ios.entry.js":[108,16],"./ion-app_8-md.entry.js":[109,17],"./ion-avatar_3-ios.entry.js":[110,33],"./ion-avatar_3-md.entry.js":[111,34],"./ion-back-button-ios.entry.js":[112,35],"./ion-back-button-md.entry.js":[113,36],"./ion-backdrop-ios.entry.js":[114,77],"./ion-backdrop-md.entry.js":[115,78],"./ion-button_2-ios.entry.js":[116,37],"./ion-button_2-md.entry.js":[117,38],"./ion-card_5-ios.entry.js":[118,39],"./ion-card_5-md.entry.js":[119,40],"./ion-checkbox-ios.entry.js":[120,41],"./ion-checkbox-md.entry.js":[121,42],"./ion-chip-ios.entry.js":[122,43],"./ion-chip-md.entry.js":[123,44],"./ion-col_3.entry.js":[124,79],"./ion-datetime_3-ios.entry.js":[125,22],"./ion-datetime_3-md.entry.js":[126,23],"./ion-fab_3-ios.entry.js":[127,45],"./ion-fab_3-md.entry.js":[128,46],"./ion-img.entry.js":[129,80],"./ion-infinite-scroll_2-ios.entry.js":[130,81],"./ion-infinite-scroll_2-md.entry.js":[131,82],"./ion-input-ios.entry.js":[132,47],"./ion-input-md.entry.js":[133,48],"./ion-item-option_3-ios.entry.js":[134,49],"./ion-item-option_3-md.entry.js":[135,50],"./ion-item_8-ios.entry.js":[136,51],"./ion-item_8-md.entry.js":[137,52],"./ion-loading-ios.entry.js":[138,53],"./ion-loading-md.entry.js":[139,54],"./ion-menu_3-ios.entry.js":[140,55],"./ion-menu_3-md.entry.js":[141,56],"./ion-modal-ios.entry.js":[142,18],"./ion-modal-md.entry.js":[143,19],"./ion-nav_2.entry.js":[144,29],"./ion-popover-ios.entry.js":[145,20],"./ion-popover-md.entry.js":[146,21],"./ion-progress-bar-ios.entry.js":[147,57],"./ion-progress-bar-md.entry.js":[148,58],"./ion-radio_2-ios.entry.js":[149,59],"./ion-radio_2-md.entry.js":[150,60],"./ion-range-ios.entry.js":[151,61],"./ion-range-md.entry.js":[152,62],"./ion-refresher_2-ios.entry.js":[153,24],"./ion-refresher_2-md.entry.js":[154,25],"./ion-reorder_2-ios.entry.js":[155,31],"./ion-reorder_2-md.entry.js":[156,32],"./ion-ripple-effect.entry.js":[157,83],"./ion-route_4.entry.js":[158,63],"./ion-searchbar-ios.entry.js":[159,64],"./ion-searchbar-md.entry.js":[160,65],"./ion-segment_2-ios.entry.js":[161,66],"./ion-segment_2-md.entry.js":[162,67],"./ion-select_3-ios.entry.js":[163,68],"./ion-select_3-md.entry.js":[164,69],"./ion-slide_2-ios.entry.js":[165,84],"./ion-slide_2-md.entry.js":[166,85],"./ion-spinner.entry.js":[167,28],"./ion-split-pane-ios.entry.js":[168,86],"./ion-split-pane-md.entry.js":[169,87],"./ion-tab-bar_2-ios.entry.js":[170,70],"./ion-tab-bar_2-md.entry.js":[171,71],"./ion-tab_2.entry.js":[172,30],"./ion-text.entry.js":[173,72],"./ion-textarea-ios.entry.js":[174,73],"./ion-textarea-md.entry.js":[175,74],"./ion-toast-ios.entry.js":[176,75],"./ion-toast-md.entry.js":[177,76],"./ion-toggle-ios.entry.js":[178,26],"./ion-toggle-md.entry.js":[179,27],"./ion-virtual-scroll.entry.js":[180,88]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=65,e.exports=l},67:function(e,t,n){var a={"./ion-icon.entry.js":[184,91]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=67,e.exports=l},68:function(e,t,n){},99:function(e,t,n){}},[[59,9,10]]]);
//# sourceMappingURL=main.d79a971e.chunk.js.map