(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20811b"],{a2e9:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"inner-container"},[a("page-title",{attrs:{"icon-class":"redeem",title:"Redeem"}}),a("div",{staticClass:"tab-contain"},[a("van-tabs",{on:{click:e.changeTab},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("van-tab",{attrs:{name:"Mint",title:"Mint"}}),a("van-tab",{attrs:{name:"Redeem",title:"Redeem"}})],1)],1),a("div",{staticClass:"content"},[a("div",{staticClass:"bretton-card content-left-container"},[a("div",{staticClass:"content-left-inner"},[a("div",{class:["coin-choose-card","error"===e.status?"card-error":""]},[a("div",{staticClass:"flex"},[a("p",{staticClass:"font16 c-3B4554"},[e._v("FROM")]),a("span",{staticClass:"flex1"}),a("p",{staticClass:"font16 c-A5ADB8 "},[e._v(" "+e._s(e.$t("WalletBalance"))+":  ")]),e.userBalances?a("p",{staticClass:"font16 c-A5ADB8"},[e._v(" "+e._s(e._f("formatNumber")(e.userBalances[e.redeemFromToken],4))+" ")]):e._e()]),a("div",{staticClass:"flex mt10 drop-display"},[a("img",{attrs:{src:n("f646"),width:"40"}}),a("div",{staticClass:"font18 c-3B4554 bold ml10"},[e._v(e._s(e.redeemFromToken))]),a("span",{staticClass:"flex1"}),a("van-field",{attrs:{type:"number",placeholder:"0.0"},on:{input:e.onChangeRedeemFromAmount},model:{value:e.redeemFromAmount,callback:function(t){e.redeemFromAmount=t},expression:"redeemFromAmount"}}),a("van-button",{staticClass:"max-btn",attrs:{disabled:!e.userBalances},on:{click:function(t){return e.onChangeRedeemFromAmount(e.userBalances[e.redeemFromToken])}}},[e._v("MAX")])],1)]),a("div",{staticClass:"flex transfer-contain"},[a("div",{staticClass:"non-transfer flex"},[a("span",[a("svg-icon",{attrs:{"icon-class":"tansfer2",className:"transfer-icon"}})],1)])]),a("div",{class:["coin-choose-card","error"===e.status?"card-error":""]},[a("div",{staticClass:"flex"},[a("p",{staticClass:"font16 c-3B4554"},[e._v("TO")]),a("span",{staticClass:"flex1"}),a("p",{staticClass:"font16 c-A5ADB8 "},[e._v(" "+e._s(e.$t("WalletBalance"))+":  ")]),e.userBalances?a("p",{staticClass:"font16 c-A5ADB8"},[e._v(" "+e._s(e._f("formatNumber")(e.userBalances[e.redeemToToken],4))+" ")]):e._e()]),a("div",{staticClass:"flex drop-choose"},[e.supportedSwapTokenDetails&&e.redeemToToken?a("bretton-drop-down",{attrs:{value:e.redeemToToken,options:e.supportedSwapTokenDetails},on:{onChange:e.onChangeRedeemToToken}}):e._e(),a("span",{staticClass:"flex1"}),a("van-field",{attrs:{type:"number",placeholder:"0.0","error-message":""},on:{input:e.onChangeRedeemToAmount},model:{value:e.redeemToAmount,callback:function(t){e.redeemToAmount=t},expression:"redeemToAmount"}})],1)]),a("div",{staticClass:"error-container"},[e.user&&e.userBalances&&e.liquidities&&e.errorMessage?a("div",{staticClass:"flex balance-error"},[a("svg-icon",{attrs:{"icon-class":"warning",className:"warning-icon error-icon"}}),a("p",{staticClass:"font16 c-error ml5"},[e._v(" "+e._s(e.errorMessage)+" ")])],1):e._e()]),e.user?a("div",[e.hasAllowance?a("van-button",{staticClass:"bretton-btn gradient-btn",attrs:{disabled:e.disableRedeem,loading:e.isRedeeming,"loading-text":e.$t("Redeeming")},on:{click:function(t){return e.redeem()}}},[e._v(" "+e._s(e.$t("Redeem"))+" ")]):a("van-button",{staticClass:"bretton-btn gradient-btn",attrs:{loading:e.isApproving,"loading-text":e.$t("Approving")},on:{click:function(t){return e.approve()}}},[e._v(" "+e._s(e.$t("Approve"))+" ")])],1):a("div",[a("van-button",{staticClass:"bretton-btn gradient-btn",attrs:{loading:e.isConnecting,"loading-text":e.$t("Connecting")},on:{click:function(t){return e.connectWallet()}}},[e._v(" "+e._s(e.$t("ConnectWallet"))+" ")])],1)]),a("div",{staticClass:"fee-contain"},[a("div",{staticClass:"flex"},[a("label",{staticClass:"font16 bold c-3B4554"},[e._v(e._s(e.$t("swap.fee"))+"  ")]),a("span",{staticClass:"flex1"}),a("p",{staticClass:"font16 c-A5ADB8"},[e._v(e._s(e._f("formatPercent")(e.redeemFee,2)))])])])]),a("div",{staticClass:"content-right-container"},[a("div",{staticClass:"bretton-card content-right-card"},[a("h3",{staticClass:"font16 c-8C5AFF bold"},[e._v(e._s(e.$t("Liquidity")))]),e.liquidities?a("div",e._l(e.liquidities,(function(t,n){return a("li",{key:n},[a("div",{staticClass:"flex mt20"},[a("img",{staticClass:"mr10",attrs:{src:e.getTokenImg(n),width:"24"}}),a("div",{staticClass:"font16 bold c-A5ADB8"},[e._v(e._s(n))]),a("span",{staticClass:"flex1"}),a("div",{staticClass:"font16 c-3B4554"},[e._v(e._s(e._f("formatNumber")(t,4)))])])])})),0):a("div",[a("van-loading",{staticClass:"flex mt20",attrs:{type:"spinner"}},[e._v("Loading...")])],1)])])])],1)])},s=[],r=n("b85c"),i=n("1da1"),o=n("5530"),c=(n("96cf"),n("d3b7"),n("25f0"),n("99af"),n("d81d"),n("89dd")),u=n("124b"),l=(n("9b7c"),n("a886"),n("2f62")),d=n("73f9"),m=n("11da"),p=n("65e2"),f=n("46eb"),h=n("901e"),v={name:"Redeem",components:{PageTitle:c["a"],BrettonDropDown:u["a"]},data:function(){return{active:"Redeem",status:"default",showFeeTips:!1,redeemFromAmount:null,redeemToAmount:null,redeemFromToken:"bretUSD",redeemToToken:null,supportedSwapTokens:null,supportedSwapTokenDetails:null,redeemFee:null,liquidities:null,userBalances:null,userAllowances:null,isConnecting:!1,isApproving:!1,isRedeeming:!1,intervals:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])({user:function(e){return e.wallet.user},chainId:function(e){return e.wallet.chainId},isWeb3Initialized:function(e){return e.wallet.isWeb3Initialized}})),{},{hasAllowance:function(){return!(!this.userAllowances||!this.userAllowances[this.redeemFromToken])&&new h["BigNumber"](this.userAllowances[this.redeemFromToken]).gt(new h["BigNumber"]("1e18"))},disableRedeem:function(){return!this.hasEnoughLiquidity||!this.hasEnoughBalance||!this.redeemFromAmount||new h["BigNumber"](this.redeemFromAmount).lte(0)},errorMessage:function(){return this.hasEnoughBalance?this.hasEnoughLiquidity?null:"not enough ".concat(this.redeemToToken," liquidity in pool"):"not enough ".concat(this.redeemFromToken," balance in your wallet")},hasEnoughLiquidity:function(){return!!this.liquidities&&(!this.redeemFromAmount||new h["BigNumber"](this.liquidities[this.redeemToToken]).gte(this.redeemFromAmount))},hasEnoughBalance:function(){return!(!this.user||!this.userBalances)&&(!this.redeemFromAmount||new h["BigNumber"](this.userBalances[this.redeemFromToken]).gte(this.redeemFromAmount))}}),methods:{onChangeRedeemToToken:function(e){this.redeemToToken=e.value},onChangeRedeemFromAmount:function(e){e?(this.redeemFromAmount=e,this.redeemToAmount=new h["BigNumber"](this.redeemFromAmount).times(new h["BigNumber"](1).minus(this.redeemFee)).toString(10)):this.redeemToAmount=null},onChangeRedeemToAmount:function(e){e?(this.newRedeemToAmount=e,this.redeemFromAmount=new h["BigNumber"](this.newRedeemToAmount).div(new h["BigNumber"](1).minus(this.redeemFee)).toString(10)):this.redeemFromAmount=null},connectWallet:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isConnecting=!0,t.next=4,e.$store.dispatch("connectWallet");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$notify({type:"danger",message:t.t0.message});case 9:return t.prev=9,e.isConnecting=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},approve:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isApproving=!0,t.prev=1,t.next=4,m["a"](window.web3,e.chainId,e.redeemFromToken,e.user["account"],p["a"][e.chainId]["bretUSD"]["address"],e.openTxNotification);case 4:return t.next=6,e.loadUserAllowances();case 6:e.$notify({type:"success",message:"Approve Success!"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$notify({type:"danger",message:t.t0.message});case 12:return t.prev=12,e.isApproving=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()},redeem:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isRedeeming=!0,t.prev=1,t.next=4,d["g"](window.web3,e.redeemToToken,e.redeemFromAmount,e.openTxNotification);case 4:e.resetInputAmounts(),e.$notify({type:"success",message:"Redeem Success!"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$notify({type:"danger",message:t.t0.message});case 11:return t.prev=11,e.isRedeeming=!1,t.finish(11);case 14:e.loadLiquidities(),e.loadUserBalances(),e.loadUserAllowances();case 17:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},resetInputAmounts:function(){this.redeemFromAmount=null,this.redeemToAmount=null},loadRedeemFee:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["d"](window.web3);case 2:e.redeemFee=t.sent;case 3:case"end":return t.stop()}}),t)})))()},loadLiquidities:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["b"](window.web3);case 2:e.liquidities=t.sent;case 3:case"end":return t.stop()}}),t)})))()},loadUserBalances:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.user){t.next=21;break}n={},a=Object(r["a"])(e.supportedSwapTokens.concat(["bretUSD"])),t.prev=3,a.s();case 5:if((s=a.n()).done){t.next=12;break}return i=s.value,t.next=9,m["e"](window.web3,e.chainId,i,e.user["account"]);case 9:n[i]=t.sent;case 10:t.next=5;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](3),a.e(t.t0);case 17:return t.prev=17,a.f(),t.finish(17);case 20:e.userBalances=n;case 21:case"end":return t.stop()}}),t,null,[[3,14,17,20]])})))()},loadUserAllowances:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.user){t.next=4;break}return t.next=3,m["d"](window.web3,e.chainId,e.supportedSwapTokens.concat(["bretUSD"]),e.user["account"],p["a"][e.chainId]["bretUSD"]["address"]);case 3:e.userAllowances=t.sent;case 4:case"end":return t.stop()}}),t)})))()},changeTab:function(e,t){"Mint"===t&&this.$router.push({name:"Mint"})},openTxNotification:function(e){var t="".concat(f["a"][this.chainId]["scanLink"],"/tx/").concat(e);this.$dialog.confirm({title:"Transaction Submitted",message:e,cancelButtonText:"Confirm",confirmButtonText:"View Transanction"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},getTokenImg:function(e){try{return n("e078")("./".concat(e,".png"))}catch(t){console.warn("can not find token image for ".concat(e))}return n("0d9c")}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("initWeb3");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.$notify({type:"danger",message:t.t0.message});case 8:return t.next=10,d["c"](window.web3);case 10:e.supportedSwapTokens=t.sent,e.redeemToToken=e.supportedSwapTokens[0],e.supportedSwapTokenDetails=e.supportedSwapTokens.map((function(t){return{text:t,iconUrl:e.getTokenImg(t),value:t}})),e.loadRedeemFee(),e.loadLiquidities(),e.loadUserBalances(),e.loadUserAllowances(),e.intervals.push(setInterval(e.loadLiquidities,1e4)),e.intervals.push(setInterval(e.loadUserBalances,13e3));case 19:case"end":return t.stop()}}),t,null,[[0,5]])})))()},mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){var e,t=Object(r["a"])(this.intervals);try{for(t.s();!(e=t.n()).done;){var n=e.value;clearInterval(n)}}catch(a){t.e(a)}finally{t.f()}}},g=v,b=n("2877"),w=Object(b["a"])(g,a,s,!1,null,"1d34174a",null);t["default"]=w.exports}}]);