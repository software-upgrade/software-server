webpackJsonp([18],{Y7I0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Y8t/"),a=s("hkf/"),r={data:function(){return{selected:"",screemList:[{testPattern:0},{testPattern:1},{testPattern:2},{testPattern:3},{testPattern:4},{testPattern:5},{testPattern:6},{testPattern:7},{testPattern:16},{testPattern:17},{testPattern:18},{testPattern:19},{testPattern:20},{testPattern:21},{testPattern:32},{testPattern:33},{testPattern:34},{testPattern:35},{testPattern:36},{testPattern:37},{testPattern:38},{testPattern:39}],type:"",style:{},orientation:!0,rows:0}},created:function(){this.getTsList(),this.selected=1},mounted:function(){n.a.post(a.a.setTestPicture,{testControl:1,testPattern:this.selected})},methods:{getTsList:function(){this.TsHandler()},TsHandler:function(){this.screemList.forEach(function(t){t.class="test"+t.testPattern})},setTest:function(t){this.selected=t.testPattern,this.use(1)},use:function(t){n.a.post(a.a.setTestPicture,{testControl:t,testPattern:this.selected})}},beforeRouteLeave:function(t,e,s){n.a.post(a.a.setTestPicture,{testControl:0,testPattern:0}),s()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test"},[s("vx-header",{attrs:{showback:1,title:t.$t("common.test")}}),t._v(" "),s("div",{staticClass:"vx-container"},[s("div",{staticClass:"test_cont"},[s("div",{staticClass:"test_list"},t._l(t.screemList,function(e,n){return s("div",{key:n,staticClass:"test_list_item",class:{selected:e.testPattern==t.selected},on:{click:function(s){t.setTest(e)}}},[s("div",{staticClass:"screem",class:e.class})])}))])])],1)},staticRenderFns:[]};var c=s("VU/8")(r,i,!1,function(t){s("rRxX")},"data-v-a85bd636",null);e.default=c.exports},rRxX:function(t,e){}});
//# sourceMappingURL=18.be139c279a1659519145.js.map