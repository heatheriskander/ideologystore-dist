!function r(o,l,s){function c(n,e){if(!l[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(w)return w(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var a=l[n]={exports:{}};o[n][0].call(a.exports,function(e){return c(o[n][1][e]||e)},a,a.exports,r,o,l,s)}return l[n].exports}for(var w="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var E=e("./types"),m=e("./util");function i(){document.getElementById("regen").disabled=!0;for(var e=[],n=m.getRandomIntInclusive(1,3),t=0;t<n;t++)e.push(E.prefixes[Math.floor(Math.random()*E.prefixes.length)]);e.push(E.heads[Math.floor(Math.random()*E.heads.length)]);var i="";e.forEach(function(e){i=i.concat(e.name)}),Math.random()<.01&&(i=i.concat(" with chinese characteristics")),function(e,n){var t=document.getElementById("regen"),i=n.includes("anarch")||n.includes("mutualism"),a=n.includes("national")&&!n.includes("international"),r=new Set,o=new Set;e.forEach(function(e){e.colors.forEach(function(e){r.add(e)}),e.symbols.forEach(function(e){o.add(e)})}),i&&1<r.size&&r.has(E.Color.BLACK)&&r.delete(E.Color.BLACK);var l=document.getElementById("flagCanvas").getContext("2d");l.fillStyle="white",l.fillRect(0,0,600,400);var s=Array.from(r);if(2==s.length&&0<o.size||1==s.length){var c=s.pop();l.fillStyle="hsl("+c.h+", 100%, "+c.l+"%)",l.fillRect(0,0,600,400)}else if(2<=s.length){m.shuffle(s);c=s.pop();switch(l.fillStyle="hsl("+c.h+", 100%, "+c.l+"%)",l.fillRect(0,0,600,400),c=s.pop(),l.fillStyle="hsl("+c.h+", 100%, "+c.l+"%)",m.getRandomIntInclusive(0,E.FlagType.__LENGTH-1)){case E.FlagType.DIAGONAL_SPLIT:l.beginPath(),l.moveTo(0,0),l.lineTo(600,0),l.lineTo(600,400),l.fill();break;case E.FlagType.STRIPE:l.fillRect(0,80,600,80),l.fillRect(0,240,600,80)}}i&&(l.fillStyle="black",l.beginPath(),l.moveTo(0,400),l.lineTo(600,0),l.lineTo(600,400),l.fill());var w=Array.from(o);if(m.shuffle(w),0<w.length){var h=new Image;h.addEventListener("load",function(){l.drawImage(h,0,0),t.disabled=!1},!1),a?(l.fillStyle="white",l.beginPath(),l.arc(300,200,160,0,2*Math.PI,!1),l.fill(),h.src="./images/symbol/".concat(w[0].getFilename(E.Color.BLACK))):0<s.length?h.src="./images/symbol/".concat(w[0].getFilename(s.pop())):h.src="./images/symbol/".concat(w[0].getFilename(E.Color.WHITE))}else t.disabled=!1}(e,i),document.getElementById("ideologyLabel").textContent=i}(document.getElementById("regen").onclick=i)()},{"./types":2,"./util":3}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,n,t){void 0===n&&(n=[]),void 0===t&&(t=[]),this.name=e,this.colors=n,this.symbols=t,this.name="-"===e.slice(-1)?e:e.concat(" "),this.colors=n,this.symbols=t};t.IdeologyPart=i;var a=(r.RED=new r(0,100,50),r.BLUE=new r(240,100,50),r.GREEN=new r(120,100,50),r.ORANGE=new r(39,100,50),r.PINK=new r(330,100,71),r.PURPLE=new r(300,100,25),r.YELLOW=new r(60,100,50),r.TEAL=new r(180,100,25),r.WHITE=new r(0,0,100),r.BLACK=new r(0,0,0),r);function r(e,n,t){void 0===n&&(n=100),this.h=e,this.s=n,this.l=t,this.h=e,this.s=n,this.l=t}t.Color=a;var o,l,s=(c.prototype.getFilename=function(e){switch(e){case a.RED:return this.filename.concat("_red.png");case a.BLUE:return this.filename.concat("_blue.png");case a.GREEN:return this.filename.concat("_green.png");case a.ORANGE:return this.filename.concat("_orange.png");case a.PINK:return this.filename.concat("_pink.png");case a.PURPLE:return this.filename.concat("_purple.png");case a.YELLOW:return this.filename.concat("_yellow.png");case a.TEAL:return this.filename.concat("_teal.png");case a.WHITE:return this.filename.concat("_white.png");case a.BLACK:return this.filename.concat("_black.png")}},c.ALGIZ=new c("algiz"),c.HS_CN=new c("hs_cn"),c.HS_CPUSA=new c("hs_cpusa"),c.HS_USSR=new c("hs_ussr"),c.JUCHE=new c("juche"),c.SWASTIKA=new c("swastika"),c.STAR_DAVID=new c("david"),c.DHARMA=new c("dharma"),c.CROSS=new c("cross"),c.LABRYS=new c("labrys"),c.STAR_CRESCENT=new c("starcrescent"),c.FASCES=new c("fasces"),c.TROTSKY=new c("trotsky"),c);function c(e){this.filename=e,this.filename=e}t.Symbol=s,(l=o=o||{})[l.STRIPE=0]="STRIPE",l[l.DIAGONAL_SPLIT=1]="DIAGONAL_SPLIT",l[l.__LENGTH=2]="__LENGTH",t.FlagType=o;var w=[new i("left-",[a.RED,a.BLACK]),new i("right-",[a.YELLOW,a.BLUE]),new i("proto-"),new i("post-"),new i("neo-"),new i("paleo-"),new i("marxism-",[a.RED],[s.HS_CN,s.HS_USSR]),new i("leninism-",[a.RED],[s.HS_USSR]),new i("eco-",[a.GREEN]),new i("techno-"),new i("crypto-"),new i("anarcho-",[a.BLACK]),new i("anarcha-",[a.PURPLE]),new i("alt-"),new i("cyber-"),new i("ultra-"),new i("judeo-",[],[s.STAR_DAVID]),new i("trans-exclusionary",[a.PURPLE],[s.LABRYS]),new i("classical"),new i("orthodox"),new i("post-left"),new i("left",[a.RED]),new i("right"),new i("gender-abolitionist",[a.PURPLE,a.PINK]),new i("libertarian",[a.YELLOW]),new i("conservative",[a.RED]),new i("egoist",[a.TEAL]),new i("authoritarian"),new i("christian",[a.ORANGE],[s.CROSS]),new i("islamic",[],[s.STAR_CRESCENT]),new i("buddhist",[],[s.DHARMA]),new i("green",[a.GREEN]),new i("individualist",[a.YELLOW]),new i("collectivist",[a.RED]),new i("democratic",[a.BLUE]),new i("radical",[a.RED]),new i("utopian"),new i("scientific"),new i("egalitarian"),new i("hegelian"),new i("marxist",[a.RED]),new i("primitive",[a.GREEN]),new i("liberal",[a.YELLOW]),new i("fascist",[],[s.FASCES]),new i("state"),new i("national",[a.RED]),new i("international"),new i("queer",[a.PINK]),new i("pagan",[],[s.ALGIZ])];t.prefixes=w;var h=[new i("anarchism",[a.BLACK]),new i("communism",[a.RED],[s.HS_CN,s.HS_USSR,s.HS_CPUSA]),new i("socialism",[a.RED],[s.HS_CN,s.HS_USSR,s.HS_CPUSA]),new i("maoism",[a.RED,a.YELLOW],[s.HS_CN]),new i("juche",[a.RED,a.YELLOW],[s.JUCHE]),new i("marxism",[a.RED]),new i("leninism",[a.RED,a.YELLOW],[s.HS_USSR]),new i("trotskyism",[a.RED],[s.TROTSKY]),new i("deng xiaoping thought",[a.RED,a.YELLOW],[s.HS_CN]),new i("posadism",[a.RED],[s.TROTSKY]),new i("corporatism",[a.RED]),new i("fascism",[],[s.FASCES]),new i("nazism",[a.RED],[s.SWASTIKA]),new i("monarchism",[a.PURPLE]),new i("democracy",[a.BLUE]),new i("liberalism",[a.YELLOW]),new i("libertarianism",[a.YELLOW]),new i("centrism",[a.WHITE]),new i("primitivism",[a.GREEN]),new i("anarchism",[a.BLACK]),new i("mutualism",[a.ORANGE]),new i("individualism",[a.YELLOW])];t.heads=h},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomIntInclusive=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},t.getRandomItem=function(e){var n=Array.from(e);return n[Math.floor(Math.random()*n.length)]},t.shuffle=function(e){for(var n,t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1));n=[e[i],e[t]],e[t]=n[0],e[i]=n[1]}}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
