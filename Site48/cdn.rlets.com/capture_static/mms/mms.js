!function mms(e,t,r){var n="capture_base_site_id",isString=function(e){return"string"==typeof e},getPageUri=function(){return function(e){for(var t={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@?]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r=t.parser[t.strictMode?"strict":"loose"].exec(e),n={},o=14;o--;)n[t.key[o]]=r[o]||"";n[t.q.name]={},n[t.key[12]].replace(t.q.parser,(function(e,r,o){r&&(r=decodeURIComponent(r),n[t.q.name][r]&&n[t.q.name][r].constructor===Array?n[t.q.name][r].push(decodeURIComponent(o)):n[t.q.name][r]?n[t.q.name][r]=[n[t.q.name][r],decodeURIComponent(o)]:n[t.q.name][r]=decodeURIComponent(o))}));var a=n.host.split(".");return n.rootDomain=a.length>=2?a[a.length-2]+"."+a[a.length-1]:"",n.href=e,n}(e.location.href)},getSiteId=function(){var t=getPageUri().queryKey.rl_siteid||e.rl_siteid||(e.rl_widget_cfg||{}).id;try{return t&&localStorage.setItem(n,t),localStorage.getItem(n)}catch(e){return t}};!function(e){var t=e.url||"",r=e.method||"GET",n=e.payload||"",o=e.timeout||1e4;if(XMLHttpRequest){var a=new XMLHttpRequest;"withCredentials"in a&&(a.open(r,t,!0),a.setRequestHeader("Content-type","application/json"),a.timeout=o,a.send(JSON.stringify(n)))}}({method:"POST",payload:{events:[{event_name:"MMS_INIT",site_id:e.rl_siteid,capture_version:"5fd584f086a6d92a0ba688c82f86dfd546bf45fb",page_title:e.document.title,page_uri:location.href}],timestamp:Date.now()},url:"https://liqadprdct-capture-prod-east.gannettdigital.com/capture_logger/api/v1/insights"});var o=t.createElement("script");if(o.onerror=function(t){(new Image).src="https://fault.rlets.com/static/_.gif?s="+getSiteId()+"&m="+t.srcElement.src+"&f="+encodeURIComponent(e.location)},e.rl_widget_cfg||e.test_mode)o.src="https://cdn.rlets.com/capture_static/mms/capture.js";else{var a=function(){var e,t,r=getSiteId();if(r&&isString(r)&&32===(r=(e=r,isString(e)?!1!==t&&e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e).replace(/-/g,"")).length)return"/"+r.substr(0,3)+"/"+r.substr(3,3)+"/"+r.substr(6,3)+"/"+r.substr(9)+".js"}();a&&(o.src="https://cdn.rlets.com/capture_configs"+a)}t.head.appendChild(o)}(window,document);