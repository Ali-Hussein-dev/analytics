!function(){"use strict";var p=window.location,f=window.document,d=f.currentScript,g=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function w(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(e){}var r=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===e){var n=!r||r&&r.split(",").some(o),i=a&&a.split(",").some(o);if(!n||i)return w("exclusion rule")}function o(e){var t=p.pathname;return console.log(t),t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=t&&t.u?t.u:p.href,l.d=d.getAttribute("data-domain"),l.r=f.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var c=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=l.p||{};c.forEach(function(e){var t=e.replace("event-",""),r=d.getAttribute(e);u[t]=u[t]||r}),l.p=u;var s=new XMLHttpRequest;s.open("POST",g,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(l)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}function t(e){for(var t=e.target,r="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==p.host&&((r||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){p.href=t.href},150),e.preventDefault()))}f.addEventListener("click",t),f.addEventListener("auxclick",t);var r=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<r.length;a++)e.apply(this,r[a])}();