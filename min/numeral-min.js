// numeral.js
// version : 1.2.3
// author : Adam Draper
// license : MIT
// http://adamwdraper.github.com/Numeral-js/
(function(){function u(e){this._n=e}function a(e,t){var n=Math.pow(10,t);return(Math.round(e*n)/n).toFixed(t)}function f(e,t){var n;t.indexOf("$")>-1?n=c(e,t):t.indexOf("%")>-1?n=h(e,t):t.indexOf(":")>-1?n=p(e,t):n=v(e,t);return n}function l(e,t){if(t.indexOf(":")>-1)e._n=d(t);else{i[s].delimiters.decimal!=="."&&(t=t.replace(/\./g,"").replace(i[s].delimiters.decimal,"."));var n=new RegExp(i[s].abbreviations.thousand+"(?:\\)|\\"+i[s].currency.symbol+"?)$"),r=new RegExp(i[s].abbreviations.million+"(?:\\)|\\"+i[s].currency.symbol+"?)$");e._n=(t.match(n)?1e3:1)*(t.match(r)?1e6:1)*(t.indexOf("%")>-1?.01:1)*Number((t.indexOf("(")>-1?"-":"")+t.replace(/[^0-9\.'-]+/g,""))}return e._n}function c(e,t){t=t.replace("$","");var n=f(e,t);if(n.indexOf("(")>-1||n.indexOf("-")>-1){n=n.split("");n.splice(1,0,i[s].currency.symbol);n=n.join("")}else n=i[s].currency.symbol+n;return n}function h(e,t){t=t.replace("%","");e._n=e._n*100;var n=f(e,t);if(n.indexOf(")")>-1){n=n.split("");n.splice(-1,0,"%");n=n.join("")}else n+="%";return n}function p(e,t){var n=Math.floor(e._n/60/60),r=Math.floor((e._n-n*60*60)/60),i=Math.round(e._n-n*60*60-r*60);return n+":"+(r<10?"0"+r:r)+":"+(i<10?"0"+i:i)}function d(e){var t=e.split(":"),n=0;if(t.length===3){n+=Number(t[0])*60*60;n+=Number(t[1])*60;n+=Number(t[2])}else if(t.lenght===2){n+=Number(t[0])*60;n+=Number(t[1])}return Number(n)}function v(e,t){var n=!1,r=!1,o=!1,u=!1;if(t.indexOf("(")>-1){n=!0;t=t.slice(1,-1)}if(t.indexOf("a")>-1){t=t.replace("a","");if(e._n>1e6){r=i[s].abbreviations.million;e._n=e._n/1e6}else{r=i[s].abbreviations.thousand;e._n=e._n/1e3}}if(t.indexOf("b")>-1){t=t.replace("b","");var f=["b","kb","mb","gb","tb","pb","eb","zb","yb"],l,c;for(var h=0;h<=f.length;h++){l=Math.pow(1024,h);c=Math.pow(1024,h+1);if(e._n>l&&e._n<c){o=f[h];l>0&&(e._n=e._n/l);break}}}if(t.indexOf("o")>-1){t=t.replace("o","");u=i[s].ordinal(e._n)}var p=e._n.toString().split(".")[0],d=t.split(".")[1],v=t.indexOf(","),m="",g=!1;if(e._n<0){p=p.slice(1);g=!0}v>-1&&(p=p.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+i[s].delimiters.thousands));t.indexOf(".")===0&&(p="");d&&(m=i[s].delimiters.decimal+a(e._n,d.length).split(".")[1]);r;return(n&&g?"(":"")+(!n&&g?"-":"")+p+m+(u?u:"")+(r?r:"")+(o?o:"")+(n&&g?")":"")}function m(e,t){i[e]=t}var e,t="1.2.3",n=Math.round,r,i={},s="en",o=typeof module!="undefined"&&module.exports;e=function(t){e.isNumeral(t)?t=t.value():Number(t)||(t=0);return new u(Number(t))};e.isNumeral=function(e){return e instanceof u};e.version=t;e.isNumeral=function(e){return e instanceof u};e.language=function(e,t){if(!e)return s;e&&!t&&(s=e);(t||!i[e])&&m(e,t);return i};e.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m"},ordinal:function(e){var t=e%10;return~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"},currency:{symbol:"$"}});e.fn=u.prototype={clone:function(){return e(this)},format:function(t){return f(this,t?t:e.defaultFormat)},unformat:function(t){return l(this,t?t:e.defaultFormat)},value:function(){return this._n},set:function(e){this._n=Number(e);return this},add:function(e){this._n=this._n+Number(e);return this},subtract:function(e){this._n=this._n-Number(e);return this},multiply:function(e){this._n=this._n*Number(e);return this},divide:function(e){this._n=this._n/Number(e);return this},difference:function(e){var t=this._n-Number(e);t<0&&(t=-t);return t}};o&&(module.exports=e);typeof ender=="undefined"&&(this.numeral=e);typeof define=="function"&&define.amd&&define([],function(){return e})}).call(this);