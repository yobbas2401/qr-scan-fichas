$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){if(this._log("init"),this._inited){this._log("Already Inited"),this._inited=!0;return}this._requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,t){window.setTimeout(a,1e3/60)},this._onScroll(!0)},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(a){this.showLogs&&console.log("Parallax Scroll / "+a)},_onScroll:function(a){var t=$(document).scrollTop(),e=$(window).height();this._log("onScroll "+t),$("[data-parallax]").each($.proxy(function(i,s){var r,o=$(s),l=[],n=!1,c=o.data("style");void 0==c&&(c=o.attr("style")||"",o.data("style",c));var d=[o.data("parallax")];for(r=2;;r++)if(o.data("parallax"+r))d.push(o.data("parallax-"+r));else break;var v=d.length;for(r=0;r<v;r++){var m=d[r],u=m["from-scroll"];void 0==u&&(u=Math.max(0,$(s).offset().top-e)),u|=0;var p=m.distance,h=m["to-scroll"];void 0==p&&void 0==h&&(p=e),p=Math.max(0|p,1);var x=m.easing,g=m["easing-return"];if(void 0!=x&&$.easing&&$.easing[x]||(x=null),void 0!=g&&$.easing&&$.easing[g]||(g=x),x){var f=m.duration;void 0==f&&(f=p),f=Math.max(0|f,1);var y=m["duration-return"];void 0==y&&(y=f),p=1;var _=o.data("current-time");void 0==_&&(_=0)}void 0==h&&(h=u+p),h|=0;var A=m.smoothness;void 0==A&&(A=30),A|=0,(a||0==A)&&(A=1),A|=0;var X=t;X=Math.min(X=Math.max(X,u),h),x&&(void 0==o.data("sens")&&o.data("sens","back"),X>u&&("back"==o.data("sens")?(_=1,o.data("sens","go")):_++),X<h&&("go"==o.data("sens")?(_=1,o.data("sens","back")):_++),a&&(_=f),o.data("current-time",_)),this._properties.map($.proxy(function(a){var t=0,e=m[a];if(void 0!=e){"scale"==a||"scaleX"==a||"scaleY"==a||"scaleZ"==a?t=1:e|=0;var i=o.data("_"+a);void 0==i&&(i=t);var s=(e-t)*((X-u)/(h-u))+t,r=i+(s-i)/A;if(x&&_>0&&_<=f){var c=t;"back"==o.data("sens")&&(c=e,e=-e,x=g,f=y),r=$.easing[x](null,_,c,e,f)}(r=Math.ceil(r*this.round)/this.round)==i&&s==e&&(r=e),l[a]||(l[a]=0),l[a]+=r,i!=l[a]&&(o.data("_"+a,l[a]),n=!0)}},this))}if(n){if(void 0!=l.z){var Y=m.perspective;void 0==Y&&(Y=800);var Z=o.parent();Z.data("style")||Z.data("style",Z.attr("style")||""),Z.attr("style","perspective:"+Y+"px; -webkit-perspective:"+Y+"px; "+Z.data("style"))}void 0==l.scaleX&&(l.scaleX=1),void 0==l.scaleY&&(l.scaleY=1),void 0==l.scaleZ&&(l.scaleZ=1),void 0!=l.scale&&(l.scaleX*=l.scale,l.scaleY*=l.scale,l.scaleZ*=l.scale);var q,F="translate3d("+(l.x?l.x:0)+"px, "+(l.y?l.y:0)+"px, "+(l.z?l.z:0)+"px)",b=F+" "+("rotateX("+(l.rotateX?l.rotateX:0)+"deg) rotateY("+(l.rotateY?l.rotateY:0)+"deg) rotateZ("+(l.rotateZ?l.rotateZ:0)+"deg)")+" "+("scaleX("+l.scaleX+") scaleY("+l.scaleY+") scaleZ("+l.scaleZ)+");";this._log(b),o.attr("style","transform:"+b+" -webkit-transform:"+b+" "+c)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};