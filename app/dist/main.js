module.exports=function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=2)}([function(n,e){n.exports=require("axios")},function(n,e){n.exports=require("electron")},function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(){c=new f({height:700,maxHeight:720,minHeight:400,width:414,maxWidth:500,minWidth:400,titleBarStyle:"hidden-inset"}),c.loadURL(s),c.on("closed",function(){c=null}),console.log("mainWindow opened")}var i=t(1),u=o(i),l=t(0),a=o(l);console.log(a.default);var c=void 0,d=u.default.app,f=u.default.BrowserWindow,s="file://"+__dirname+"/index.html";d.on("ready",r),d.on("window-all-closed",function(){"darwin"!==process.platform&&d.quit()}),d.on("activate",function(){null===c&&r()})}]);