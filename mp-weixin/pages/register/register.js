(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"155d":function(t,i,e){"use strict";(function(t){e("a4ce"),e("921b");n(e("66fd"));var i=n(e("d675"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"1c70":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,i,e,n,r,a,u){try{var s=t[a](u),o=s.value}catch(h){return void e(h)}s.done?i(o):Promise.resolve(o).then(n,r)}function u(t){return function(){var i=this,e=arguments;return new Promise((function(n,r){var u=t.apply(i,e);function s(t){a(u,n,r,s,o,"next",t)}function o(t){a(u,n,r,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,maijiaxingbieOptions:[],maijiaxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var i=u(n.default.mark((function i(){var e;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:[],e=t.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"maijia"==this.tableName&&(this.maijiaxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.maijiaxingbieOptions[0]),this.styleChange();case 6:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},maijiaxingbieChange:function(t){this.maijiaxingbieIndex=t.target.value,this.ruleForm.xingbie=this.maijiaxingbieOptions[this.maijiaxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=u(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=9;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=15;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:if(this.ruleForm.maijiazhanghao||"maijia"!=this.tableName){t.next=18;break}return this.$utils.msg("卖家账号不能为空"),t.abrupt("return");case 18:if(this.ruleForm.mima||"maijia"!=this.tableName){t.next=21;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 21:if("maijia"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=24;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 24:if("maijia"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=27;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 27:if("maijia"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=30;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 30:return t.next=32,this.$api.register("".concat(this.tableName),this.ruleForm);case 32:this.$utils.msgBack("注册成功");case 34:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}};i.default=s}).call(this,e("543d")["default"])},2076:function(t,i,e){"use strict";var n=e("2b54"),r=e.n(n);r.a},"2b54":function(t,i,e){},"34ac":function(t,i,e){"use strict";e.r(i);var n=e("1c70"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},b176:function(t,i,e){"use strict";var n,r=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},d675:function(t,i,e){"use strict";e.r(i);var n=e("b176"),r=e("34ac");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("2076");var u,s=e("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"b83a235a",null,!1,n["a"],u);i["default"]=o.exports}},[["155d","common/runtime","common/vendor"]]]);