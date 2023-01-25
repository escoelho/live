;/*FB_PKG_DELIM*/

__d("useServerTime",["JSScheduler","ServerTime","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useState,j=6e4,k=new Set(),l=null,m=!1;function n(){k.forEach(function(a){return a()}),m=!1}function o(a){a===void 0&&(a=j),l=window.setInterval(function(){m||(m=!0,d("JSScheduler").scheduleSpeculativeCallback(n))},a)}function p(){k.size===0&&(window.clearInterval(l),l=null)}function q(a,b){b===void 0&&(b=j);k.add(a);l==null&&o(b);return function(){k["delete"](a),p()}}function r(){return new Date(d("ServerTime").getMillis())}function a(a){a===void 0&&(a=j);var b=i(function(){return r()}),c=b[0],d=b[1],e=function(){return d(r())};h(function(){return q(e,a)},[a]);return c}g["default"]=a}),98);
__d("CometRelativeTimestamp.react",["fbt","react","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";e=d("react");function i(a,b){if(b==="minimized")return h._("1 min");else if(b==="shortened")return h._("Agora mesmo");return h._("h\u00e1 alguns segundos")}function j(a,b){return b==="minimized"?h._("1 min"):h._("em alguns segundos")}function k(a,b){if(b==="minimized")return h._({"*":"{minutes} min"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"{number} min","_1":"1 min"},[h._plural(a,"number")]);return h._({"*":"H\u00e1 {number} minutos","_1":"h\u00e1 \u00b1 um minuto"},[h._plural(a,"number")])}function l(a,b){if(b==="minimized")return h._({"*":"em {minutes} min"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"em {number} min","_1":"em 1 min"},[h._plural(a,"number")]);return h._({"*":"em {number} minutos","_1":"em cerca de um minuto"},[h._plural(a,"number")])}function m(a,b){if(b==="minimized")return h._("{hours} h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"{number} h","_1":"1 h"},[h._plural(a,"number")]);return h._({"*":"h\u00e1 {number} horas","_1":"h\u00e1 \u00b1 uma hora"},[h._plural(a,"number")])}function n(a,b){if(b==="minimized")return h._("em {hours} h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"em {number} h","_1":"em 1 h"},[h._plural(a,"number")]);return h._({"*":"em {number} horas","_1":"em cerca de uma hora"},[h._plural(a,"number")])}function o(a,b){if(b==="minimized")return h._("{days} d",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"{number} dias","_1":"1 dia"},[h._plural(a,"number")]);return h._({"*":"h\u00e1 {number} dias","_1":"H\u00e1 um dia"},[h._plural(a,"number")])}function p(a,b){if(b==="minimized")return h._("em {days} dias",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"em {number} dias","_1":"em 1 dia"},[h._plural(a,"number")]);return h._({"*":"em {number} dias","_1":"em um dia"},[h._plural(a,"number")])}function q(a,b){if(b==="minimized")return h._("{weeks} sem",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"{number} sem","_1":"1 sem."},[h._plural(a,"number")]);return h._({"*":"h\u00e1 {number} semanas","_1":"h\u00e1 uma semana"},[h._plural(a,"number")])}function r(a,b){if(b==="minimized")return h._("em {weeks} sem",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"em {number} sem.","_1":"em 1 sem."},[h._plural(a,"number")]);return h._({"*":"em {number} semanas","_1":"em uma semana"},[h._plural(a,"number")])}function s(a,b){if(b==="minimized")return h._("{years} a",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"{number} a","_1":"1 ano"},[h._plural(a,"number")]);return h._({"*":"h\u00e1 {number} anos","_1":"h\u00e1 um ano"},[h._plural(a,"number")])}function t(a,b){if(b==="minimized")return h._("em {years} anos",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"em {number} anos","_1":"em 1 ano"},[h._plural(a,"number")]);return h._({"*":"em {number} anos","4":"em {number} ano","_1":"em um ano"},[h._plural(a,"number")])}var u=60,v=60,w=24,x=7,y=365;function z(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<u)return i(a,c);b=a/u;a=Math.floor(b);if(a<v)return k(a,c);a=b/v;b=Math.floor(a);if(b<w)return m(b,c);b=a/w;a=Math.floor(b);if(a<x)return o(a,c);else if(b<y){a=Math.floor(b/x);return q(a,c)}a=Math.floor(b/y);return s(a,c)}function a(a,b,c){c===void 0&&(c="normal");b=(b.valueOf()-a.valueOf())/1e3;if(b<u)return j(b,c);a=b/u;b=Math.floor(a);if(b<v)return l(b,c);b=a/v;a=Math.floor(a/v);if(a<w)return n(a,c);a=b/w;b=Math.floor(a);if(b<x)return p(b,c);else if(a<y){b=Math.floor(a/x);return r(b,c)}b=Math.floor(a/y);return t(b,c)}function b(a){var b=a.date;a=a.format;var d=c("useServerTime")();d=z(d,b,a);return d}b.displayName=b.name+" [from "+f.id+"]";b.getRelativeTimestamp=z;b.getRelativeTimestampInFuture=a;g["default"]=b}),98);
__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g,h){function a(a){if(top!==window||document.domain==null||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;a=h._("Espere!");var b=h._("Este \u00e9 um recurso de navegador voltado para desenvolvedores. Se algu\u00e9m disse para voc\u00ea copiar e colar algo aqui para ativar um recurso do Facebook ou \"invadir\" a conta de outra pessoa, isso \u00e9 uma fraude e voc\u00ea dar\u00e1 a ele acesso \u00e0 sua conta."),c=h._("Consulte {url} para obter mais informa\u00e7\u00f5es.",[h._param("url","https://www.facebook.com/selfxss")]);if(window.chrome||window.safari){var d="font-family:helvetica; font-size:20px; ";[[a,d+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[b,d],[c,d],["",""]].map(function(a){window.setTimeout(console.log.bind(console,"\n%c"+a[0].toString(),a[1]))})}else{a=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];d=(""+b.toString()).match(/.{35}.+?\s+|.+$/g);if(d!=null){b=Math.floor(Math.max(0,(a.length-d.length)/2));for(var e=0;e<a.length||e<d.length;e++){var f=a[e];a[e]=f+new Array(45-f.length).join(" ")+(d[e-b]||"")}}console.log("\n\n\n"+a.join("\n")+"\n\n"+c.toString()+"\n");return}}g.start=a}),98);