!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){t.exports=n(4)},function(t,e,n){},function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},function(t,e){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3);var i=window,Oi=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,Di=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Hi(t){for(var e,n,i,r=t||{},a=1,o=arguments.length;a<o;a++)if(null!==(e=arguments[a]))for(n in e)r!==(i=e[n])&&void 0!==i&&(r[n]=i);return r}function Pi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function ki(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Ri(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var a=document.documentElement;function Ii(t){var e="";return t.fake&&(e=a.style.overflow,t.style.background="",t.style.overflow=a.style.overflow="hidden",a.appendChild(t)),e}function zi(t,e){t.fake&&(t.remove(),a.style.overflow=e,a.offsetHeight)}function Wi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function ji(t){return("insertRule"in t?t.cssRules:t.rules).length}function Fi(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var o="classList"in document.createElement("_"),qi=o?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},_i=o?function(t,e){qi(t,e)||t.classList.add(e)}:function(t,e){qi(t,e)||(t.className+=" "+e)},Vi=o?function(t,e){qi(t,e)&&t.classList.remove(e)}:function(t,e){qi(t,e)&&(t.className=t.className.replace(e,""))};function Gi(t,e){return t.hasAttribute(e)}function Qi(t,e){return t.getAttribute(e)}function u(t){return void 0!==t.item}function Xi(t,e){if(t=u(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Yi(t,e){t=u(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function Ki(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Ji(t,e){"none"!==t.style.display&&(t.style.display="none")}function Ui(t,e){"none"===t.style.display&&(t.style.display="")}function Zi(t){return"none"!==window.getComputedStyle(t).display}function $i(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),r=(e.length,0);r<e.length;r++){var a=e[r];if(void 0!==t.style[a])return a}return!1}function tr(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var l=!1;try{var s=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,s)}catch(t){}var c=!!l&&{passive:!0};function er(t,e,n){for(var i in e){var r=0<=["touchstart","touchmove"].indexOf(i)&&!n&&c;t.addEventListener(i,e[i],r)}}function nr(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&c;t.removeEventListener(n,e[n],i)}}function ir(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}var rr=function(O){O=Hi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},O||{});var D=document,h=window,r={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=O.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,o,u,l,s,c,f,y=e.tC?Pi(e.tC):ki(e,"tC",function(){var t=document,e=Ri(),n=Ii(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var a,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(a=u[l],i.style.width=a,100===i.offsetWidth){r=a.replace(o,"");break}}catch(t){}return e.fake?zi(e,n):i.remove(),r}(),n),g=e.tPL?Pi(e.tPL):ki(e,"tPL",function(){var t,e=document,n=Ri(),i=Ii(n),r=e.createElement("div"),a=e.createElement("div"),o="";r.className="tns-t-subp2",a.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return a.innerHTML=o,r.appendChild(a),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?zi(n,i):r.remove(),t}(),n),H=e.tMQ?Pi(e.tMQ):ki(e,"tMQ",(o=document,u=Ri(),l=Ii(u),s=o.createElement("div"),c=o.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",c.type="text/css",s.className="tns-mq-test",u.appendChild(c),u.appendChild(s),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(o.createTextNode(f)),a=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,u.fake?zi(u,l):s.remove(),"absolute"===a),n),d=e.tTf?Pi(e.tTf):ki(e,"tTf",$i("transform"),n),v=e.t3D?Pi(e.t3D):ki(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ri(),r=Ii(i),a=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(o),i.fake?zi(i,r):a.remove(),void 0!==e&&0<e.length&&"none"!==e}(d),n),x=e.tTDu?Pi(e.tTDu):ki(e,"tTDu",$i("transitionDuration"),n),p=e.tTDe?Pi(e.tTDe):ki(e,"tTDe",$i("transitionDelay"),n),b=e.tADu?Pi(e.tADu):ki(e,"tADu",$i("animationDuration"),n),m=e.tADe?Pi(e.tADe):ki(e,"tADe",$i("animationDelay"),n),C=e.tTE?Pi(e.tTE):ki(e,"tTE",tr(x,"Transition"),n),w=e.tAE?Pi(e.tAE):ki(e,"tAE",tr(b,"Animation"),n),M=h.console&&"function"==typeof h.console.warn,T=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],E={};if(T.forEach(function(t){if("string"==typeof O[t]){var e=O[t],n=D.querySelector(e);if(E[t]=e,!n||!n.nodeName)return void(M&&console.warn("Can't find",O[t]));O[t]=n}}),!(O.container.children.length<1)){var P=O.responsive,k=O.nested,R="carousel"===O.mode;if(P){0 in P&&(O=Hi(O,P[0]),delete P[0]);var S={};for(var A in P){var N=P[A];N="number"==typeof N?{items:N}:N,S[A]=N}P=S,S=null}if(R||!function t(e){for(var n in e)R||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(O),!R){O.axis="horizontal",O.slideBy="page",O.edgePadding=!1;var I=O.animateIn,z=O.animateOut,B=O.animateDelay,W=O.animateNormal}var L,j,F="horizontal"===O.axis,q=D.createElement("div"),_=D.createElement("div"),V=O.container,G=V.parentNode,Q=V.outerHTML,X=V.children,Y=X.length,K=sn(),J=!1;P&&Bn(),R&&(V.className+=" tns-vpfix");var U,Z,$,tt,et,nt,it,rt,at=O.autoWidth,ot=vn("fixedWidth"),ut=vn("edgePadding"),lt=vn("gutter"),st=fn(),ct=vn("center"),ft=at?1:Math.floor(vn("items")),dt=vn("slideBy"),vt=O.viewportMax||O.fixedWidthViewportWidth,pt=vn("arrowKeys"),mt=vn("speed"),ht=O.rewind,yt=!ht&&O.loop,gt=vn("autoHeight"),xt=vn("controls"),bt=vn("controlsText"),Ct=vn("nav"),wt=vn("touch"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),Et=vn("autoplayTimeout"),St=vn("autoplayText"),At=vn("autoplayHoverPause"),Nt=vn("autoplayResetOnVisibility"),Bt=(rt=document.createElement("style"),it&&rt.setAttribute("media",it),document.querySelector("head").appendChild(rt),rt.sheet?rt.sheet:rt.styleSheet),Lt=O.lazyload,Ot=(O.lazyloadSelector,[]),Dt=yt?(et=function(){{if(at||ot&&!vt)return Y-1;var t=ot?"fixedWidth":"items",e=[];if((ot||O[t]<Y)&&e.push(O[t]),P)for(var n in P){var i=P[n][t];i&&(ot||i<Y)&&e.push(i)}return e.length||e.push(0),Math.ceil(ot?vt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=R?Math.ceil((5*et-Y)/2):4*et-Y,nt=Math.max(et,nt),dn("edgePadding")?nt+1:nt):0,Ht=R?Y+2*Dt:Y+Dt,Pt=!(!ot&&!at||yt),kt=ot?ni():null,Rt=!R||!yt,It=F?"left":"top",zt="",Wt="",jt=ot?function(){return ct&&!yt?Y-1:Math.ceil(-kt/(ot+lt))}:at?function(){for(var t=Ht;t--;)if(U[t]>=-kt)return t}:function(){return ct&&R&&!yt?Y-1:yt||R?Math.max(0,Ht-Math.ceil(ft)):Ht-1},Ft=on(vn("startIndex")),qt=Ft,_t=(an(),0),Vt=at?null:jt(),Gt=O.preventActionWhenRunning,Qt=O.swipeAngle,Xt=!Qt||"?",Yt=!1,Kt=O.onInit,Jt=new ir,Ut=" tns-slider tns-"+O.mode,Zt=V.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),$t=vn("disable"),te=!1,ee=O.freezable,ne=!(!ee||at)&&Nn(),ie=!1,re={click:fi,keydown:function(t){t=xi(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ee.disabled||fi(t,-1):Se.disabled||fi(t,1))}},ae={click:function(t){if(Yt){if(Gt)return;si()}var e=bi(t=xi(t));for(;e!==Le&&!Gi(e,"data-nav");)e=e.parentNode;if(Gi(e,"data-nav")){var n=Pe=Number(Qi(e,"data-nav")),i=ot||at?n*Y/De:n*ft;ci(ve?n:Math.min(Math.ceil(i),Y-1),t),ke===n&&(Fe&&hi(),Pe=-1)}},keydown:function(t){t=xi(t);var e=D.activeElement;if(!Gi(e,"data-nav"))return;var n=[r.LEFT,r.RIGHT,r.ENTER,r.SPACE].indexOf(t.keyCode),i=Number(Qi(e,"data-nav"));0<=n&&(0===n?0<i&&gi(Be[i-1]):1===n?i<De-1&&gi(Be[i+1]):ci(Pe=i,t))}},oe={mouseover:function(){Fe&&(vi(),qe=!0)},mouseout:function(){qe&&(di(),qe=!1)}},ue={visibilitychange:function(){D.hidden?Fe&&(vi(),Ve=!0):Ve&&(di(),Ve=!1)}},le={keydown:function(t){t=xi(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);0<=e&&fi(t,0===e?-1:1)}},se={touchstart:Ti,touchmove:Ei,touchend:Si,touchcancel:Si},ce={mousedown:Ti,mousemove:Ei,mouseup:Si,mouseleave:Si},fe=dn("controls"),de=dn("nav"),ve=!!at||O.navAsThumbnails,pe=dn("autoplay"),me=dn("touch"),he=dn("mouseDrag"),ye="tns-slide-active",ge="tns-complete",xe={load:function(t){zn(bi(t))},error:function(t){!function(t){_i(t,"failed"),Wn(t)}(bi(t))}},be="force"===O.preventScrollOnTouch;if(fe)var Ce,we,Me=O.controlsContainer,Te=O.controlsContainer?O.controlsContainer.outerHTML:"",Ee=O.prevButton,Se=O.nextButton,Ae=O.prevButton?O.prevButton.outerHTML:"",Ne=O.nextButton?O.nextButton.outerHTML:"";if(de)var Be,Le=O.navContainer,Oe=O.navContainer?O.navContainer.outerHTML:"",De=at?Y:Ni(),He=0,Pe=-1,ke=ln(),Re=ke,Ie="tns-nav-active",ze="Carousel Page ",We=" (Current Slide)";if(pe)var je,Fe,qe,_e,Ve,Ge="forward"===O.autoplayDirection?1:-1,Qe=O.autoplayButton,Xe=O.autoplayButton?O.autoplayButton.outerHTML:"",Ye=["<span class='tns-visually-hidden'>"," animation</span>"];if(me||he)var Ke,Je,Ue={},Ze={},$e=!1,tn=F?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};at||rn($t||ne),d&&(It=d,zt="translate",Wt=v?(zt+=F?"3d(":"3d(0px, ",F?", 0px, 0px)":", 0px)"):(zt+=F?"X(":"Y(",")")),R&&(V.className=V.className.replace("tns-vpfix","")),function(){dn("gutter");q.className="tns-outer",_.className="tns-inner",q.id=Zt+"-ow",_.id=Zt+"-iw",""===V.id&&(V.id=Zt);Ut+=g||at?" tns-subpixel":" tns-no-subpixel",Ut+=y?" tns-calc":" tns-no-calc",at&&(Ut+=" tns-autowidth");Ut+=" tns-"+O.axis,V.className+=Ut,R?((L=D.createElement("div")).id=Zt+"-mw",L.className="tns-ovh",q.appendChild(L),L.appendChild(_)):q.appendChild(_);if(gt){(L||_).className+=" tns-ah"}if(G.insertBefore(q,V),_.appendChild(V),Fi(X,function(t,e){_i(t,"tns-item"),t.id||(t.id=Zt+"-item"+e),!R&&W&&_i(t,W),Xi(t,{"aria-hidden":"true",tabindex:"-1"})}),Dt){for(var t=D.createDocumentFragment(),e=D.createDocumentFragment(),n=Dt;n--;){var i=n%Y,r=X[i].cloneNode(!0);if(Yi(r,"id"),e.insertBefore(r,e.firstChild),R){var a=X[Y-1-i].cloneNode(!0);Yi(a,"id"),t.appendChild(a)}}V.insertBefore(t,V.firstChild),V.appendChild(e),X=V.children}}(),function(){if(!R)for(var t=Ft,e=Ft+Math.min(Y,ft);t<e;t++){var n=X[t];n.style.left=100*(t-Ft)/ft+"%",_i(n,I),Vi(n,W)}F&&(g||at?(Wi(Bt,"#"+Zt+" > .tns-item","font-size:"+h.getComputedStyle(X[0]).fontSize+";",ji(Bt)),Wi(Bt,"#"+Zt,"font-size:0;",ji(Bt))):R&&Fi(X,function(t,e){var n;t.style.marginLeft=(n=e,y?y+"("+100*n+"% / "+Ht+")":100*n/Ht+"%")}));if(H){if(x){var i=L&&O.autoHeight?xn(O.speed):"";Wi(Bt,"#"+Zt+"-mw",i,ji(Bt))}i=pn(O.edgePadding,O.gutter,O.fixedWidth,O.speed,O.autoHeight),Wi(Bt,"#"+Zt+"-iw",i,ji(Bt)),R&&(i=F&&!at?"width:"+mn(O.fixedWidth,O.gutter,O.items)+";":"",x&&(i+=xn(mt)),Wi(Bt,"#"+Zt,i,ji(Bt))),i=F&&!at?hn(O.fixedWidth,O.gutter,O.items):"",O.gutter&&(i+=yn(O.gutter)),R||(x&&(i+=xn(mt)),b&&(i+=bn(mt))),i&&Wi(Bt,"#"+Zt+" > .tns-item",i,ji(Bt))}else{Vn(),_.style.cssText=pn(ut,lt,ot,gt),R&&F&&!at&&(V.style.width=mn(ot,lt,ft));i=F&&!at?hn(ot,lt,ft):"";lt&&(i+=yn(lt)),i&&Wi(Bt,"#"+Zt+" > .tns-item",i,ji(Bt))}if(P&&H)for(var r in P){r=parseInt(r);var a=P[r],o=(i="",""),u="",l="",s="",c=at?null:vn("items",r),f=vn("fixedWidth",r),d=vn("speed",r),v=vn("edgePadding",r),p=vn("autoHeight",r),m=vn("gutter",r);x&&L&&vn("autoHeight",r)&&"speed"in a&&(o="#"+Zt+"-mw{"+xn(d)+"}"),("edgePadding"in a||"gutter"in a)&&(u="#"+Zt+"-iw{"+pn(v,m,f,d,p)+"}"),R&&F&&!at&&("fixedWidth"in a||"items"in a||ot&&"gutter"in a)&&(l="width:"+mn(f,m,c)+";"),x&&"speed"in a&&(l+=xn(d)),l=l&&"#"+Zt+"{"+l+"}",("fixedWidth"in a||ot&&"gutter"in a||!R&&"items"in a)&&(s+=hn(f,m,c)),"gutter"in a&&(s+=yn(m)),!R&&"speed"in a&&(x&&(s+=xn(d)),b&&(s+=bn(d))),(i=o+u+l+(s=s&&"#"+Zt+" > .tns-item{"+s+"}"))&&Bt.insertRule("@media (min-width: "+r/16+"em) {"+i+"}",Bt.cssRules.length)}}(),Cn();var en=yt?R?function(){var t=_t,e=Vt;t+=dt,e-=dt,ut?(t+=1,--e):ot&&(st+lt)%(ot+lt)&&--e,Dt&&(e<Ft?Ft-=Y:Ft<t&&(Ft+=Y))}:function(){if(Vt<Ft)for(;_t+Y<=Ft;)Ft-=Y;else if(Ft<_t)for(;Ft<=Vt-Y;)Ft+=Y}:function(){Ft=Math.max(_t,Math.min(Vt,Ft))},nn=R?function(){var e,n,i,r,t,a,o,u,l,s,c;ti(V,""),x||!mt?(ai(),mt&&Zi(V)||si()):(e=V,n=It,i=zt,r=Wt,t=ii(),a=mt,o=si,u=Math.min(a,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),s=Number(e.style[n].replace(i,"").replace(r,"").replace(l,"")),c=(t-s)/a*u,setTimeout(function t(){a-=u,s+=c,e.style[n]=i+s+l+r,0<a?setTimeout(t,u):o()},u)),F||Ai()}:function(){Ot=[];var t={};t[C]=t[w]=si,nr(X[qt],t),er(X[Ft],t),oi(qt,I,z,!0),oi(Ft,W,I),C&&w&&mt&&Zi(V)||si()};return{version:"2.9.2",getInfo:Li,events:Jt,goTo:ci,play:function(){Tt&&!Fe&&(mi(),_e=!1)},pause:function(){Fe&&(hi(),_e=!0)},isOn:J,updateSliderHeight:Qn,refresh:Cn,destroy:function(){if(Bt.disabled=!0,Bt.ownerNode&&Bt.ownerNode.remove(),nr(h,{resize:Sn}),pt&&nr(D,le),Me&&nr(Me,re),Le&&nr(Le,ae),nr(V,oe),nr(V,ue),Qe&&nr(Qe,{click:yi}),Tt&&clearInterval(je),R&&C){var t={};t[C]=si,nr(V,t)}wt&&nr(V,se),Mt&&nr(V,ce);var a=[Q,Te,Ae,Ne,Oe,Xe];for(var e in T.forEach(function(t,e){var n="container"===t?q:O[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,r=n.parentNode;n.outerHTML=a[e],O[t]=i?i.nextElementSibling:r.firstElementChild}}),T=I=z=B=W=F=q=_=V=G=Q=X=Y=j=K=at=ot=ut=lt=st=ft=dt=vt=pt=mt=ht=yt=gt=Bt=Lt=U=Ot=Dt=Ht=Pt=kt=Rt=It=zt=Wt=jt=Ft=qt=_t=Vt=Qt=Xt=Yt=Kt=Jt=Ut=Zt=$t=te=ee=ne=ie=re=ae=oe=ue=le=se=ce=fe=de=ve=pe=me=he=ye=ge=xe=Z=xt=bt=Me=Te=Ee=Se=Ce=we=Ct=Le=Oe=Be=De=He=Pe=ke=Re=Ie=ze=We=Tt=Et=Ge=St=At=Qe=Xe=Nt=Ye=je=Fe=qe=_e=Ve=Ue=Ze=Ke=$e=Je=tn=wt=Mt=null,this)"rebuild"!==e&&(this[e]=null);J=!1},rebuild:function(){return rr(Hi(O,E))}}}function rn(t){t&&(xt=Ct=wt=Mt=pt=Tt=At=Nt=!1)}function an(){for(var t=R?Ft-Dt:Ft;t<0;)t+=Y;return t%Y+1}function on(t){return t=t?Math.max(0,Math.min(yt?Y-1:Y-ft,t)):0,R?t+Dt:t}function un(t){for(null==t&&(t=Ft),R&&(t-=Dt);t<0;)t+=Y;return Math.floor(t%Y)}function ln(){var t,e=un();return t=ve?e:ot||at?Math.ceil((e+1)*De/Y-1):Math.floor(e/ft),!yt&&R&&Ft===Vt&&(t=De-1),t}function sn(){return h.innerWidth||D.documentElement.clientWidth||D.body.clientWidth}function cn(t){return"top"===t?"afterbegin":"beforeend"}function fn(){var t=ut?2*ut-lt:0;return function t(e){var n,i,r=D.createElement("div");return e.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||t(e.parentNode)}(G)-t}function dn(t){if(O[t])return!0;if(P)for(var e in P)if(P[e][t])return!0;return!1}function vn(t,e){if(null==e&&(e=K),"items"===t&&ot)return Math.floor((st+lt)/(ot+lt))||1;var n=O[t];if(P)for(var i in P)e>=parseInt(i)&&t in P[i]&&(n=P[i][t]);return"slideBy"===t&&"page"===n&&(n=vn("items")),R||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e,n,i,r){var a="";if(void 0!==t){var o=t;e&&(o-=e),a=F?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";a="margin: 0 "+(F?u+" 0 0":"0 "+u+" 0")+";"}return!R&&r&&x&&i&&(a+=xn(i)),a}function mn(t,e,n){return t?(t+e)*Ht+"px":y?y+"("+100*Ht+"% / "+n+")":100*Ht/n+"%"}function hn(t,e,n){var i;if(t)i=t+e+"px";else{R||(n=Math.floor(n));var r=R?Ht:n;i=y?y+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==k?i+";":i+" !important;"}function yn(t){var e="";!1!==t&&(e=(F?"padding-":"margin-")+(F?"right":"bottom")+": "+t+"px;");return e}function gn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n=n&&"-"+n+"-"}function xn(t){return gn(x,18)+"transition-duration:"+t/1e3+"s;"}function bn(t){return gn(b,17)+"animation-duration:"+t/1e3+"s;"}function Cn(){if(dn("autoHeight")||at||!F){var t=V.querySelectorAll("img");Fi(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(er(t,xe),t.src="",t.src=e,_i(t,"loading")):Lt||zn(t)}),Oi(function(){qn(Ki(t),function(){Z=!0})}),!at&&F&&(t=jn(Ft,Math.min(Ft+ft-1,Ht-1))),Lt?wn():Oi(function(){qn(Ki(t),wn)})}else R&&ri(),Tn(),En()}function wn(){if(at){var e=yt?Ft:Y-1;!function t(){X[e-1].getBoundingClientRect().right.toFixed(2)===X[e].getBoundingClientRect().left.toFixed(2)?Mn():setTimeout(function(){t()},16)}()}else Mn()}function Mn(){F&&!at||(Xn(),at?(kt=ni(),ee&&(ne=Nn()),Vt=jt(),rn($t||ne)):Ai()),R&&ri(),Tn(),En()}function Tn(){if(Yn(),q.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+kn()+"</span>  of "+Y+"</div>"),$=q.querySelector(".tns-liveregion .current"),pe){var t=Tt?"stop":"start";Qe?Xi(Qe,{"data-action":t}):O.autoplayButtonOutput&&(q.insertAdjacentHTML(cn(O.autoplayPosition),'<button data-action="'+t+'">'+Ye[0]+t+Ye[1]+St[0]+"</button>"),Qe=q.querySelector("[data-action]")),Qe&&er(Qe,{click:yi}),Tt&&(mi(),At&&er(V,oe),Nt&&er(V,ue))}if(de){if(Le)Xi(Le,{"aria-label":"Carousel Pagination"}),Fi(Be=Le.children,function(t,e){Xi(t,{"data-nav":e,tabindex:"-1","aria-label":ze+(e+1),"aria-controls":Zt})});else{for(var e="",n=ve?"":'style="display:none"',i=0;i<Y;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+Zt+'" '+n+' aria-label="'+ze+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",q.insertAdjacentHTML(cn(O.navPosition),e),Le=q.querySelector(".tns-nav"),Be=Le.children}if(Bi(),x){var r=x.substring(0,x.length-18).toLowerCase(),a="transition: all "+mt/1e3+"s";r&&(a="-"+r+"-"+a),Wi(Bt,"[aria-controls^="+Zt+"-item]",a,ji(Bt))}Xi(Be[ke],{"aria-label":ze+(ke+1)+We}),Yi(Be[ke],"tabindex"),_i(Be[ke],Ie),er(Le,ae)}fe&&(Me||Ee&&Se||(q.insertAdjacentHTML(cn(O.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Zt+'">'+bt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Zt+'">'+bt[1]+"</button></div>"),Me=q.querySelector(".tns-controls")),Ee&&Se||(Ee=Me.children[0],Se=Me.children[1]),O.controlsContainer&&Xi(Me,{"aria-label":"Carousel Navigation",tabindex:"0"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&Xi([Ee,Se],{"aria-controls":Zt,tabindex:"-1"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&(Xi(Ee,{"data-controls":"prev"}),Xi(Se,{"data-controls":"next"})),Ce=Jn(Ee),we=Jn(Se),$n(),Me?er(Me,re):(er(Ee,re),er(Se,re))),Ln()}function En(){if(R&&C){var t={};t[C]=si,er(V,t)}wt&&er(V,se,O.preventScrollOnTouch),Mt&&er(V,ce),pt&&er(D,le),"inner"===k?Jt.on("outerResized",function(){An(),Jt.emit("innerLoaded",Li())}):(P||ot||at||gt||!F)&&er(h,{resize:Sn}),gt&&("outer"===k?Jt.on("innerLoaded",Fn):$t||Fn()),In(),$t?Hn():ne&&Dn(),Jt.on("indexChanged",_n),"inner"===k&&Jt.emit("innerLoaded",Li()),"function"==typeof Kt&&Kt(Li()),J=!0}function Sn(t){Oi(function(){An(xi(t))})}function An(t){if(J){"outer"===k&&Jt.emit("outerResized",Li(t)),K=sn();var e,n=j,i=!1;P&&(Bn(),(e=n!==j)&&Jt.emit("newBreakpointStart",Li(t)));var r,a,o,u,l=ft,s=$t,c=ne,f=pt,d=xt,v=Ct,p=wt,m=Mt,h=Tt,y=At,g=Nt,x=Ft;if(e){var b=ot,C=gt,w=bt,M=ct,T=St;if(!H)var E=lt,S=ut}if(pt=vn("arrowKeys"),xt=vn("controls"),Ct=vn("nav"),wt=vn("touch"),ct=vn("center"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),At=vn("autoplayHoverPause"),Nt=vn("autoplayResetOnVisibility"),e&&($t=vn("disable"),ot=vn("fixedWidth"),mt=vn("speed"),gt=vn("autoHeight"),bt=vn("controlsText"),St=vn("autoplayText"),Et=vn("autoplayTimeout"),H||(ut=vn("edgePadding"),lt=vn("gutter"))),rn($t),st=fn(),F&&!at||$t||(Xn(),F||(Ai(),i=!0)),(ot||at)&&(kt=ni(),Vt=jt()),(e||ot)&&(ft=vn("items"),dt=vn("slideBy"),(a=ft!==l)&&(ot||at||(Vt=jt()),en())),e&&$t!==s&&($t?Hn:function(){if(!te)return;if(Bt.disabled=!1,V.className+=Ut,ri(),yt)for(var t=Dt;t--;)R&&Ui(X[t]),Ui(X[Ht-t-1]);if(!R)for(var e=Ft,n=Ft+Y;e<n;e++){var i=X[e],r=e<Ft+ft?I:W;i.style.left=100*(e-Ft)/ft+"%",_i(i,r)}On(),te=!1})(),ee&&(e||ot||at)&&(ne=Nn())!==c&&(ne?(ai(ii(on(0))),Dn()):(function(){if(!ie)return;ut&&H&&(_.style.margin="");if(Dt)for(var t="tns-transparent",e=Dt;e--;)R&&Vi(X[e],t),Vi(X[Ht-e-1],t);On(),ie=!1}(),i=!0)),rn($t||ne),Tt||(At=Nt=!1),pt!==f&&(pt?er:nr)(D,le),xt!==d&&(xt?Me?Ui(Me):(Ee&&Ui(Ee),Se&&Ui(Se)):Me?Ji(Me):(Ee&&Ji(Ee),Se&&Ji(Se))),Ct!==v&&(Ct?Ui:Ji)(Le),wt!==p&&(wt?er(V,se,O.preventScrollOnTouch):nr(V,se)),Mt!==m&&(Mt?er:nr)(V,ce),Tt!==h&&(Tt?(Qe&&Ui(Qe),Fe||_e||mi()):(Qe&&Ji(Qe),Fe&&hi())),At!==y&&(At?er:nr)(V,oe),Nt!==g&&(Nt?er:nr)(D,ue),e){if(ot===b&&ct===M||(i=!0),gt!==C&&(gt||(_.style.height="")),xt&&bt!==w&&(Ee.innerHTML=bt[0],Se.innerHTML=bt[1]),Qe&&St!==T){var A=Tt?1:0,N=Qe.innerHTML,B=N.length-T[A].length;N.substring(B)===T[A]&&(Qe.innerHTML=N.substring(0,B)+St[A])}}else ct&&(ot||at)&&(i=!0);if((a||ot&&!at)&&(De=Ni(),Bi()),(r=Ft!==x)?(Jt.emit("indexChanged",Li()),i=!0):a?r||_n():(ot||at)&&(In(),Yn(),Pn()),a&&!R&&function(){for(var t=Ft+Math.min(Y,ft),e=Ht;e--;){var n=X[e];Ft<=e&&e<t?(_i(n,"tns-moving"),n.style.left=100*(e-Ft)/ft+"%",_i(n,I),Vi(n,W)):n.style.left&&(n.style.left="",_i(n,W),Vi(n,I)),Vi(n,z)}setTimeout(function(){Fi(X,function(t){Vi(t,"tns-moving")})},300)}(),!$t&&!ne){if(e&&!H&&(gt===autoheightTem&&mt===speedTem||Vn(),ut===S&&lt===E||(_.style.cssText=pn(ut,lt,ot,mt,gt)),F)){R&&(V.style.width=mn(ot,lt,ft));var L=hn(ot,lt,ft)+yn(lt);u=ji(o=Bt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Wi(Bt,"#"+Zt+" > .tns-item",L,ji(Bt))}gt&&Fn(),i&&(ri(),qt=Ft)}e&&Jt.emit("newBreakpointEnd",Li(t))}}function Nn(){if(!ot&&!at)return Y<=(ct?ft-(ft-1)/2:ft);var t=ot?(ot+lt)*Y:U[Y],e=ut?st+2*ut:st+lt;return ct&&(e-=ot?(st-ot)/2:(st-(U[Ft+1]-U[Ft]-lt))/2),t<=e}function Bn(){for(var t in j=0,P)(t=parseInt(t))<=K&&(j=t)}function Ln(){!Tt&&Qe&&Ji(Qe),!Ct&&Le&&Ji(Le),xt||(Me?Ji(Me):(Ee&&Ji(Ee),Se&&Ji(Se)))}function On(){Tt&&Qe&&Ui(Qe),Ct&&Le&&Ui(Le),xt&&(Me?Ui(Me):(Ee&&Ui(Ee),Se&&Ui(Se)))}function Dn(){if(!ie){if(ut&&(_.style.margin="0px"),Dt)for(var t="tns-transparent",e=Dt;e--;)R&&_i(X[e],t),_i(X[Ht-e-1],t);Ln(),ie=!0}}function Hn(){if(!te){if(Bt.disabled=!0,V.className=V.className.replace(Ut.substring(1),""),Yi(V,["style"]),yt)for(var t=Dt;t--;)R&&Ji(X[t]),Ji(X[Ht-t-1]);if(F&&R||Yi(_,["style"]),!R)for(var e=Ft,n=Ft+Y;e<n;e++){var i=X[e];Yi(i,["style"]),Vi(i,I),Vi(i,W)}Ln(),te=!0}}function Pn(){var t=kn();$.innerHTML!==t&&($.innerHTML=t)}function kn(){var t=Rn(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function Rn(t){null==t&&(t=ii());var n,i,r,a=Ft;if(ct||ut?(at||ot)&&(i=-(parseFloat(t)+ut),r=i+st+2*ut):at&&(i=U[Ft],r=i+st),at)U.forEach(function(t,e){e<Ht&&((ct||ut)&&t<=i+.5&&(a=e),.5<=r-t&&(n=e))});else{if(ot){var e=ot+lt;n=ct||ut?(a=Math.floor(i/e),Math.ceil(r/e-1)):a+Math.ceil(st/e)-1}else if(ct||ut){var o=ft-1;if(n=ct?(a-=o/2,Ft+o/2):Ft+o,ut){var u=ut*ft/st;a-=u,n+=u}a=Math.floor(a),n=Math.ceil(n)}else n=a+ft-1;a=Math.max(a,0),n=Math.min(n,Ht-1)}return[a,n]}function In(){Lt&&!$t&&jn.apply(null,Rn()).forEach(function(t){if(!qi(t,ge)){var e={};e[C]=function(t){t.stopPropagation()},er(t,e),er(t,xe),t.src=Qi(t,"data-src");var n=Qi(t,"data-srcset");n&&(t.srcset=n),_i(t,"loading")}})}function zn(t){_i(t,"loaded"),Wn(t)}function Wn(t){_i(t,"tns-complete"),Vi(t,"loading"),nr(t,xe)}function jn(t,e){for(var n=[];t<=e;)Fi(X[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function Fn(){var t=jn.apply(null,Rn());Oi(function(){qn(t,Qn)})}function qn(n,t){return Z?t():(n.forEach(function(t,e){qi(t,ge)&&n.splice(e,1)}),n.length?void Oi(function(){qn(n,t)}):t())}function _n(){In(),Yn(),Pn(),$n(),function(){if(Ct&&(ke=0<=Pe?Pe:ln(),Pe=-1,ke!==Re)){var t=Be[Re],e=Be[ke];Xi(t,{tabindex:"-1","aria-label":ze+(Re+1)}),Vi(t,Ie),Xi(e,{"aria-label":ze+(ke+1)+We}),Yi(e,"tabindex"),_i(e,Ie),Re=ke}}()}function Vn(){R&&gt&&(L.style[x]=mt/1e3+"s")}function Gn(t,e){for(var n=[],i=t,r=Math.min(t+e,Ht);i<r;i++)n.push(X[i].offsetHeight);return Math.max.apply(null,n)}function Qn(){var t=gt?Gn(Ft,ft):Gn(Dt,Y),e=L||_;e.style.height!==t&&(e.style.height=t+"px")}function Xn(){U=[0];var n=F?"left":"top",i=F?"right":"bottom",r=X[0].getBoundingClientRect()[n];Fi(X,function(t,e){e&&U.push(t.getBoundingClientRect()[n]-r),e===Ht-1&&U.push(t.getBoundingClientRect()[i]-r)})}function Yn(){var t=Rn(),n=t[0],i=t[1];Fi(X,function(t,e){n<=e&&e<=i?Gi(t,"aria-hidden")&&(Yi(t,["aria-hidden","tabindex"]),_i(t,ye)):Gi(t,"aria-hidden")||(Xi(t,{"aria-hidden":"true",tabindex:"-1"}),Vi(t,ye))})}function Kn(t){return t.nodeName.toLowerCase()}function Jn(t){return"button"===Kn(t)}function Un(t){return"true"===t.getAttribute("aria-disabled")}function Zn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function $n(){if(xt&&!ht&&!yt){var t=Ce?Ee.disabled:Un(Ee),e=we?Se.disabled:Un(Se),n=Ft<=_t,i=!ht&&Vt<=Ft;n&&!t&&Zn(Ce,Ee,!0),!n&&t&&Zn(Ce,Ee,!1),i&&!e&&Zn(we,Se,!0),!i&&e&&Zn(we,Se,!1)}}function ti(t,e){x&&(t.style[x]=e)}function ei(t){return null==t&&(t=Ft),at?(st-(ut?lt:0)-(U[t+1]-U[t]-lt))/2:ot?(st-ot)/2:(ft-1)/2}function ni(){var t=st+(ut?lt:0)-(ot?(ot+lt)*Ht:U[Ht]);return ct&&!yt&&(t=ot?-(ot+lt)*(Ht-1)-ei():ei(Ht-1)-U[Ht-1]),0<t&&(t=0),t}function ii(t){var e;if(null==t&&(t=Ft),F&&!at)if(ot)e=-(ot+lt)*t,ct&&(e+=ei());else{var n=d?Ht:ft;ct&&(t-=ei()),e=100*-t/n}else e=-U[t],ct&&at&&(e+=ei());return Pt&&(e=Math.max(e,kt)),e+=!F||at||ot?"px":"%"}function ri(t){ti(V,"0s"),ai(t)}function ai(t){null==t&&(t=ii()),V.style[It]=zt+t+Wt}function oi(t,e,n,i){var r=t+ft;yt||(r=Math.min(r,Ht));for(var a=t;a<r;a++){var o=X[a];i||(o.style.left=100*(a-Ft)/ft+"%"),B&&p&&(o.style[p]=o.style[m]=B*(a-t)/1e3+"s"),Vi(o,e),_i(o,n),i&&Ot.push(o)}}function ui(t,e){Rt&&en(),Ft===qt&&!e||(Jt.emit("indexChanged",Li()),Jt.emit("transitionStart",Li()),gt&&Fn(),Fe&&t&&0<=["click","keydown"].indexOf(t.type)&&hi(),Yt=!0,nn())}function li(t){return t.toLowerCase().replace(/-/g,"")}function si(t){if(R||Yt){if(Jt.emit("transitionEnd",Li(t)),!R&&0<Ot.length)for(var e=0;e<Ot.length;e++){var n=Ot[e];n.style.left="",m&&p&&(n.style[m]="",n.style[p]=""),Vi(n,z),_i(n,W)}if(!t||!R&&t.target.parentNode===V||t.target===V&&li(t.propertyName)===li(It)){if(!Rt){var i=Ft;en(),Ft!==i&&(Jt.emit("indexChanged",Li()),ri())}"inner"===k&&Jt.emit("innerLoaded",Li()),Yt=!1,qt=Ft}}}function ci(t,e){if(!ne)if("prev"===t)fi(e,-1);else if("next"===t)fi(e,1);else{if(Yt){if(Gt)return;si()}var n=un(),i=0;if("first"===t?i=-n:"last"===t?i=R?Y-ft-n:Y-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Y-1,t))),i=t-n)),!R&&i&&Math.abs(i)<ft){var r=0<i?1:-1;i+=_t<=Ft+i-Y?Y*r:2*Y*r*-1}Ft+=i,R&&yt&&(Ft<_t&&(Ft+=Y),Vt<Ft&&(Ft-=Y)),un(Ft)!==un(qt)&&ui(e)}}function fi(t,e){if(Yt){if(Gt)return;si()}var n;if(!e){for(var i=bi(t=xi(t));i!==Me&&[Ee,Se].indexOf(i)<0;)i=i.parentNode;var r=[Ee,Se].indexOf(i);0<=r&&(n=!0,e=0===r?-1:1)}if(ht){if(Ft===_t&&-1===e)return void ci("last",t);if(Ft===Vt&&1===e)return void ci("first",t)}e&&(Ft+=dt*e,at&&(Ft=Math.floor(Ft)),ui(n||t&&"keydown"===t.type?t:null))}function di(){je=setInterval(function(){fi(null,Ge)},Et),Fe=!0}function vi(){clearInterval(je),Fe=!1}function pi(t,e){Xi(Qe,{"data-action":t}),Qe.innerHTML=Ye[0]+t+Ye[1]+e}function mi(){di(),Qe&&pi("stop",St[1])}function hi(){vi(),Qe&&pi("start",St[0])}function yi(){_e=Fe?(hi(),!0):(mi(),!1)}function gi(t){t.focus()}function xi(t){return Ci(t=t||h.event)?t.changedTouches[0]:t}function bi(t){return t.target||h.event.srcElement}function Ci(t){return 0<=t.type.indexOf("touch")}function wi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Mi(){return r=Ze.y-Ue.y,a=Ze.x-Ue.x,t=Math.atan2(r,a)*(180/Math.PI),e=Qt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===O.axis;var t,e,n,i,r,a}function Ti(t){if(Yt){if(Gt)return;si()}Tt&&Fe&&vi(),$e=!0,Je&&(Di(Je),Je=null);var e=xi(t);Jt.emit(Ci(t)?"touchStart":"dragStart",Li(t)),!Ci(t)&&0<=["img","a"].indexOf(Kn(bi(t)))&&wi(t),Ze.x=Ue.x=e.clientX,Ze.y=Ue.y=e.clientY,R&&(Ke=parseFloat(V.style[It].replace(zt,"")),ti(V,"0s"))}function Ei(t){if($e){var e=xi(t);Ze.x=e.clientX,Ze.y=e.clientY,R?Je=Je||Oi(function(){!function t(e){if(!Xt)return void($e=!1);Di(Je);$e&&(Je=Oi(function(){t(e)}));"?"===Xt&&(Xt=Mi());if(Xt){!be&&Ci(e)&&(be=!0);try{e.type&&Jt.emit(Ci(e)?"touchMove":"dragMove",Li(e))}catch(t){}var n=Ke,i=tn(Ze,Ue);if(!F||ot||at)n+=i,n+="px";else{var r=d?i*ft*100/((st+lt)*Ht):100*i/(st+lt);n+=r,n+="%"}V.style[It]=zt+n+Wt}}(t)}):("?"===Xt&&(Xt=Mi()),Xt&&(be=!0)),be&&t.preventDefault()}}function Si(i){if($e){Je&&(Di(Je),Je=null),R&&ti(V,""),$e=!1;var t=xi(i);Ze.x=t.clientX,Ze.y=t.clientY;var r=tn(Ze,Ue);if(Math.abs(r)){if(!Ci(i)){var n=bi(i);er(n,{click:function t(e){wi(e),nr(n,{click:t})}})}R?Je=Oi(function(){if(F&&!at){var t=-r*ft/(st+lt);t=0<r?Math.floor(t):Math.ceil(t),Ft+=t}else{var e=-(Ke+r);if(e<=0)Ft=_t;else if(e>=U[Ht-1])Ft=Vt;else for(var n=0;n<Ht&&e>=U[n];)e>U[Ft=n]&&r<0&&(Ft+=1),n++}ui(i,r),Jt.emit(Ci(i)?"touchEnd":"dragEnd",Li(i))}):Xt&&fi(i,0<r?-1:1)}}"auto"===O.preventScrollOnTouch&&(be=!1),Qt&&(Xt="?"),Tt&&!Fe&&di()}function Ai(){(L||_).style.height=U[Ft+ft]-U[Ft]+"px"}function Ni(){var t=ot?(ot+lt)*Y/st:Y/ft;return Math.min(Math.ceil(t),Y)}function Bi(){if(Ct&&!ve&&De!==He){var t=He,e=De,n=Ui;for(De<He&&(t=De,e=He,n=Ji);t<e;)n(Be[t]),t++;He=De}}function Li(t){return{container:V,slideItems:X,navContainer:Le,navItems:Be,controlsContainer:Me,hasControls:fe,prevButton:Ee,nextButton:Se,items:ft,slideBy:dt,cloneCount:Dt,slideCount:Y,slideCountNew:Ht,index:Ft,indexCached:qt,displayIndex:an(),navCurrentIndex:ke,navCurrentIndexCached:Re,pages:De,pagesCached:He,sheet:Bt,isOn:J,event:t||{}}}M&&console.warn("No slides found in",O.container)};rr({autoplay:!0,autoplayButtonOutput:!1,autoplayTimeout:5e3,container:".carousel",controls:!1,items:1,loop:!0,nav:!1,slideBy:"page",speed:500})}]);