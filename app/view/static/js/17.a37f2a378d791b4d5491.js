webpackJsonp([17],{"m/jK":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),window.ulp=null;var e={data:function(){return{version:"V2.0.0.S2T2",hasLoaded:0,hasUpdate:!1,percentage:0,status:1}},created:function(){this.version=window.Android.getVersionName(),this.status=window.Android.checkVersion()},mounted:function(){window.ulp=this.ulp,this.drawBg()},methods:{download:function(){this.status=2,window.Android.startUpdate()||(this.status=0)},install:function(){window.Android.installApp()},ulp:function(t){var s=this;100===t&&setTimeout(function(){s.status=3},1e3),this.percentage=this.hasLoaded;var a=this,e=0,n=null;n=setInterval(function(){if(a.hasLoaded>100)return clearInterval(n),n=null,!0;e<t-a.percentage?(e++,a.hasLoaded+=1,a.d()):(clearInterval(n),n=null)},10)},d:function(){var t=document.getElementById("loadingProgress"),s=t.getContext("2d");document.getElementById("loadedNum").innerHTML=this.hasLoaded;var a=2*this.hasLoaded/100*Math.PI,e=t.width,n=t.width/2;s.clearRect(0,0,e,e),s.beginPath(),s.lineCap="round",s.arc(n,n,n-5,0,a,!1),s.lineWidth=8,s.strokeStyle="#007aff",s.stroke()},drawBg:function(){window.canvas=document.getElementById("loadingProgressBg");canvas.width;var t=canvas.width/2,s=canvas.getContext("2d");s.beginPath(),s.arc(t,t,t-5,0,2*Math.PI,!1),s.lineWidth=4,s.strokeStyle="#6e6e6e",s.stroke()}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"update"},[a("vx-header",{attrs:{showback:1,title:t.$t("settings.checkForUpdates")}}),t._v(" "),a("div",{staticClass:"vx-container"},[a("div",{staticClass:"logo"}),t._v(" "),a("div",{staticClass:"br"},[t._v(t._s(t.$t("common.version"))+" "+t._s(t.version))]),t._v(" "),t.hasLoaded<100?a("div",{staticClass:"list"},[t._v(t._s(t.$t("settings.versiond")))]):t._e(),t._v(" "),a("div",{staticClass:"more"},[a("vx-cell",{attrs:{title:t.$t("settings.more")},on:{link:function(s){t.$router.push({name:"verdetail"})}}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.status,expression:"status===2"}],staticClass:"down"},[t._m(0),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n        "+t._s(t.$t("common.currentVer"))+"\n      ")])]),t._v(" "),2===t.status?a("div",{staticClass:"download yellow-btn",on:{click:t.download}},[t._v(t._s(t.$t("common.updating")))]):t._e(),t._v(" "),0===t.status?a("div",{staticClass:"download yellow-btn",on:{click:t.download}},[t._v(t._s(t.$t("common.downloading")))]):t._e(),t._v(" "),3===t.status?a("div",{staticClass:"download yellow-btn",on:{click:t.install}},[t._v(t._s(t.$t("common.install")))]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loading-circle"},[s("p",{staticClass:"text"},[s("span",{attrs:{id:"loadedNum"}},[this._v("0")]),s("span",{staticClass:"bfh"},[this._v("%")])]),this._v(" "),s("canvas",{staticClass:"mask",attrs:{id:"loadingProgress",width:"110",height:"110"}}),this._v(" "),s("canvas",{staticClass:"bg",attrs:{id:"loadingProgressBg",width:"110",height:"110"}})])}]};var i=a("VU/8")(e,n,!1,function(t){a("t5zw")},"data-v-bf315668",null);s.default=i.exports},t5zw:function(t,s){}});
//# sourceMappingURL=17.a37f2a378d791b4d5491.js.map