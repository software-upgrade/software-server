webpackJsonp([10],{"/snq":function(t,e){},"162o":function(t,e,i){(function(t){var a=void 0!==t&&t||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(n.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new s(n.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i("mypn"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,i("DuR2"))},mypn:function(t,e,i){(function(t,e){!function(t,i){"use strict";if(!t.setImmediate){var a,n,s,o,u,l=1,c={},r=!1,d=t.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(t);m=m&&m.setTimeout?m:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick(function(){h(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?t.MessageChannel?((s=new MessageChannel).port1.onmessage=function(t){h(t.data)},a=function(t){s.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(n=d.documentElement,a=function(t){var e=d.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):a=function(t){setTimeout(h,0,t)}:(o="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(o)&&h(+e.data.slice(o.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),a=function(e){t.postMessage(o+e,"*")}),m.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var n={callback:t,args:e};return c[l]=n,a(l),l++},m.clearImmediate=v}function v(t){delete c[t]}function h(t){if(r)setTimeout(h,0,t);else{var e=c[t];if(e){r=!0;try{!function(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(i,a)}}(e)}finally{v(t),r=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,i("DuR2"),i("W2nU"))},ufTF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("34+y");var a=i("X+yh"),n=i.n(a),s=(i("0xDb"),i("Y8t/")),o=i("hkf/"),u=(i("162o"),{data:function(){return{width:{value:64,max:32767,min:64},height:{value:64,max:32767,min:64},x:{value:0,max:32767,min:-32767},y:{value:0,max:32767,min:-32767},priority:"",canCom:!0}},created:function(){var t=this;s.a.post(o.a.getWinBaseInfo,{selectWindow:this.$route.params.winId}).then(function(e){var i=e.data;console.log(i),1e7===e.status&&(t.width.value=i.width,t.height.value=i.height,t.x.value=i.startX,t.y.value=i.startY,t.priority=i.priority)})},methods:{reset:function(){var t=this;this.width.value=800,this.height.value=600,this.x.value=100*(this.$route.params.winId-1),this.y.value=50*(this.$route.params.winId-1),s.a.post(o.a.setWinParam,{windowStartX:Number(this.x.value),windowStartY:Number(this.y.value),windowWidth:this.width.value,windowHeight:this.height.value,windowId:this.$route.params.winId}).then(function(e){1e7===e.status?n()(t.$t("common.successful")):n()(t.$t("common.requestFailed"))})},save:function(t){this.canCom=t,s.a.post(o.a.setWinParam,{windowStartX:Number(this.x.value),windowStartY:Number(this.y.value),windowWidth:this.width.value,windowHeight:this.height.value,windowId:this.$route.params.winId})},back:function(){this.$router.go(-1)}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"js-scenarist-child"},[i("div",{staticClass:"layout"},[i("vx-header",{attrs:{showback:1,lazy:1,title:t.$t("common.windowLayout")},on:{back:t.back,default:t.reset}}),t._v(" "),i("div",{staticClass:"vx-container"},[i("div",{staticClass:"list bm"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("common.width")))]),t._v(" "),i("div",{staticClass:"adds"},[i("vx-addminus",{attrs:{label:t.$t("common.widthl")+t.$t("common.rangesfrom"),num:t.width.value,regex:"^[1-9]*[1-9][0-9]*$",max:t.width.max,min:t.width.min},on:{touchend:t.save,update:function(e){return t.width.value=e}}})],1)]),t._v(" "),i("div",{staticClass:"list bm"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("common.height")))]),t._v(" "),i("div",{staticClass:"adds"},[i("vx-addminus",{attrs:{label:t.$t("common.heightl")+t.$t("common.rangesfrom"),num:t.height.value,regex:"^[1-9]*[1-9][0-9]*$",max:t.height.max,min:t.height.min},on:{touchend:t.save,update:function(e){return t.height.value=e}}})],1)]),t._v(" "),i("div",{staticClass:"list bm"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("common.X")))]),t._v(" "),i("div",{staticClass:"adds"},[i("vx-addminus",{attrs:{label:t.$t("common.Xl")+t.$t("common.rangesfrom"),num:t.x.value,regex:"^-?\\d+$",max:t.x.max,min:t.x.min},on:{touchend:t.save,update:function(e){return t.x.value=e}}})],1)]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("common.Y")))]),t._v(" "),i("div",{staticClass:"adds"},[i("vx-addminus",{attrs:{label:t.$t("common.Yl")+t.$t("common.rangesfrom"),num:t.y.value,regex:"^-?\\d+$",max:t.y.max,min:t.y.min},on:{touchend:t.save,update:function(e){return t.y.value=e}}})],1)]),t._v(" "),i("div",{staticClass:"button-box"},[i("button",{staticClass:"right-text  yellow-btn",on:{click:t.reset}},[t._v(t._s(t.$t("common.default")))])])])],1)])},staticRenderFns:[]};var c=i("VU/8")(u,l,!1,function(t){i("/snq")},"data-v-01438f13",null);e.default=c.exports}});
//# sourceMappingURL=10.e6c68d9449b0a85276f4.js.map