webpackJsonp([33],{EAY2:function(t,e){},FmT2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("34+y");var c=i("X+yh"),s=i.n(c),n=i("Y8t/"),o=i("hkf/"),a={data:function(){return{selected:{},effects:[]}},created:function(){this.geteffects(),this.getTakeSpecialEfficiency()},methods:{getTakeSpecialEfficiency:function(){var t=this;n.a.get(o.a.getTakeSpecialEfficiency).then(function(e){1e7===e.status?(t.selected=e.data,t.effectHandler(t.selected)):s()(t.$t("common.requestFailed"))})},geteffects:function(){var t=this;this.effects=[{specialEfficiencyId:0},{specialEfficiencyId:1},{specialEfficiencyId:3},{specialEfficiencyId:9},{specialEfficiencyId:7},{specialEfficiencyId:5},{specialEfficiencyId:2},{specialEfficiencyId:8},{specialEfficiencyId:6},{specialEfficiencyId:4},{specialEfficiencyId:21},{specialEfficiencyId:22},{specialEfficiencyId:11},{specialEfficiencyId:10},{specialEfficiencyId:12},{specialEfficiencyId:23},{specialEfficiencyId:24},{specialEfficiencyId:25},{specialEfficiencyId:26},{specialEfficiencyId:27},{specialEfficiencyId:28},{specialEfficiencyId:29}],this.effects.forEach(function(e){t.effectHandler(e)})},effectHandler:function(t){switch(t.specialEfficiencyId){case 0:t.title=this.$t("settings.cut"),t.icon="cut";break;case 1:t.title=this.$t("settings.fade"),t.icon="fade";break;case 2:t.title=this.$t("settings.wipeTopleft"),t.icon="wipe-top-left";break;case 3:t.title=this.$t("settings.wipeLeft"),t.icon="wipe-left";break;case 4:t.title=this.$t("settings.wipeBottomLeft"),t.icon="wipe-bottom-left";break;case 5:t.title=this.$t("settings.wipeBottom"),t.icon="wipe-bottom";break;case 6:t.title=this.$t("settings.wipeBottomRight"),t.icon="wipe-bottom-right";break;case 7:t.title=this.$t("settings.wipeRight"),t.icon="wipe-right";break;case 8:t.title=this.$t("settings.wipeTopRight"),t.icon="wipe-top-right";break;case 9:t.title=this.$t("settings.wipeTop"),t.icon="wipe-top";break;case 11:t.title=this.$t("settings.splitHorizontallyOut"),t.icon="split-horizontally-out";break;case 10:t.title=this.$t("settings.splitVerticallyOut"),t.icon="split-vertically-out";break;case 12:t.title=this.$t("settings.zoomIn"),t.icon="zoom-in";break;case 13:t.title=this.$t("settings.coverTopLeft"),t.icon="cover-top-left";break;case 14:t.title=this.$t("settings.coverLeft"),t.icon="cover-left";break;case 15:t.title=this.$t("settings.coverBottomLeft"),t.icon="cover-bottom-left";break;case 16:t.title=this.$t("settings.coverBottom"),t.icon="cover-bottom";break;case 17:t.title=this.$t("settings.coverBottomRight"),t.icon="cover-bottom-right";break;case 18:t.title=this.$t("settings.coverRight"),t.icon="cover-right";break;case 19:t.title=this.$t("settings.coverTopRight"),t.icon="cover-top-right";break;case 20:t.title=this.$t("settings.coverTop"),t.icon="cover-top";break;case 21:t.title=this.$t("settings.splitHorizontallyIn"),t.icon="split-horizontally-in";break;case 22:t.title=this.$t("settings.splitVerticallyIn"),t.icon="split-vertically-in";break;case 23:t.title=this.$t("settings.zoomOut"),t.icon="zoom-out";break;case 24:t.title=this.$t("settings.zoomInRectangle"),t.icon="zoom-in-rectangle";break;case 25:t.title=this.$t("settings.zoomOutRectangle"),t.icon="zoom-out-rectangle";break;case 28:t.title=this.$t("settings.zoomInDiamond"),t.icon="zoom-in-diamond";break;case 29:t.title=this.$t("settings.zoomOutDiamond"),t.icon="zoom-out-diamond";break;case 26:t.title=this.$t("settings.zoomInCircular"),t.icon="zoom-in-circular";break;case 27:t.title=this.$t("settings.zoomOutCircular"),t.icon="zoom-out-circular";break;default:t.title=this.$t("settings.without"),t.icon="without"}},back:function(){this.$router.go(-1)},selectTake:function(t){this.selected=t,n.a.post(o.a.setTakeSpecialEfficiency,{specialEfficiencyId:this.selected.specialEfficiencyId})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sel-resolution"},[i("vx-header",{attrs:{showback:1,title:t.$t("settings.takeEffects")}}),t._v(" "),i("div",{staticClass:"vx-container"},[i("div",{staticClass:"sel-sources"},t._l(t.effects,function(e,c){return i("vx-cell",{key:c,class:{selected:t.selected.specialEfficiencyId===e.specialEfficiencyId},attrs:{icon:e.icon,title:e.title,showLink:!1},on:{link:function(i){t.selectTake(e)}}})}))])],1)},staticRenderFns:[]};var f=i("VU/8")(a,l,!1,function(t){i("EAY2")},"data-v-15694280",null);e.default=f.exports}});
//# sourceMappingURL=33.e14557b62a9cbe41c8db.js.map