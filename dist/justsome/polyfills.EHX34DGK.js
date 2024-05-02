import{a as We,b as qe}from"./chunk-FC6Q6UXU.js";(function(t){let n=t.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,T){n&&n.measure&&n.measure(L,T)}i("Zone");let c=t.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}let y=t[a("forceDuplicateZoneCheck")]===!0;if(t.Zone){if(y||typeof t.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return t.Zone}let d=(()=>{class L{static assertZonePatched(){if(t.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=L.current;for(;e.parent;)e=e.parent;return e}static get current(){return U.zone}static get currentTask(){return ne}static __load_patch(e,r,k=!1){if(oe.hasOwnProperty(e)){if(!k&&y)throw Error("Already loaded patch: "+e)}else if(!t["__Zone_disable_"+e]){let C="Zone:"+e;i(C),oe[e]=r(t,L,z),o(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(e,r){this._parent=e,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}get(e){let r=this.getZoneWith(e);if(r)return r._properties[e]}getZoneWith(e){let r=this;for(;r;){if(r._properties.hasOwnProperty(e))return r;r=r._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,r){if(typeof e!="function")throw new Error("Expecting function got: "+e);let k=this._zoneDelegate.intercept(this,e,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(e,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,e,r,k,C)}finally{U=U.parent}}runGuarded(e,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,e,r,k,C)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{U=U.parent}}runTask(e,r,k){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||J).name+"; Execution: "+this.name+")");if(e.state===x&&(e.type===Q||e.type===P))return;let C=e.state!=E;C&&e._transitionTo(E,A),e.runCount++;let Y=ne;ne=e,U={parent:U,zone:this};try{e.type==P&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{e.state!==x&&e.state!==h&&(e.type==Q||e.data&&e.data.isPeriodic?C&&e._transitionTo(A,E):(e.runCount=0,this._updateTaskCount(e,-1),C&&e._transitionTo(x,E,x))),U=U.parent,ne=Y}}scheduleTask(e){if(e.zone&&e.zone!==this){let k=this;for(;k;){if(k===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);k=k.parent}}e._transitionTo(X,x);let r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(k){throw e._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==X&&e._transitionTo(A,X),e}scheduleMicroTask(e,r,k,C){return this.scheduleTask(new m(I,e,r,k,C,void 0))}scheduleMacroTask(e,r,k,C,Y){return this.scheduleTask(new m(P,e,r,k,C,Y))}scheduleEventTask(e,r,k,C,Y){return this.scheduleTask(new m(Q,e,r,k,C,Y))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||J).name+"; Execution: "+this.name+")");if(!(e.state!==A&&e.state!==E)){e._transitionTo(G,A,E);try{this._zoneDelegate.cancelTask(this,e)}catch(r){throw e._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(e,-1),e._transitionTo(x,G),e.runCount=0,e}}_updateTaskCount(e,r){let k=e._zoneDelegates;r==-1&&(e._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(e.type,r)}}return L.__symbol__=a,L})(),b={name:"",onHasTask:(L,T,e,r)=>L.hasTask(e,r),onScheduleTask:(L,T,e,r)=>L.scheduleTask(e,r),onInvokeTask:(L,T,e,r,k,C)=>L.invokeTask(e,r,k,C),onCancelTask:(L,T,e,r)=>L.cancelTask(e,r)};class v{constructor(T,e,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=e,this._forkZS=r&&(r&&r.onFork?r:e._forkZS),this._forkDlgt=r&&(r.onFork?e:e._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:e._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:e._interceptZS),this._interceptDlgt=r&&(r.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:e._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:e._invokeZS),this._invokeDlgt=r&&(r.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:e._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:e._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:e._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:e._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:e._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:e._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:e._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:e._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let k=r&&r.onHasTask,C=e&&e._hasTaskZS;(k||C)&&(this._hasTaskZS=k?r:b,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}fork(T,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,e):new d(T,e)}intercept(T,e,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,e,r):e}invoke(T,e,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,e,r,k,C):e.apply(r,k)}handleError(T,e){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,e):!0}scheduleTask(T,e){let r=e;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,e),r||(r=e);else if(e.scheduleFn)e.scheduleFn(e);else if(e.type==I)R(e);else throw new Error("Task is missing scheduleFn.");return r}invokeTask(T,e,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,e,r,k):e.callback.apply(r,k)}cancelTask(T,e){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");r=e.cancelFn(e)}return r}hasTask(T,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,e)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,e){let r=this._taskCounts,k=r[T],C=r[T]=k+e;if(C<0)throw new Error("More tasks executed then were scheduled.");if(k==0||C==0){let Y={microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T};this.hasTask(this.zone,Y)}}}class m{constructor(T,e,r,k,C,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=e,this.data=k,this.scheduleFn=C,this.cancelFn=Y,!r)throw new Error("callback is not defined");this.callback=r;let l=this;T===Q&&k&&k.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(t,l,this,arguments)}}static invokeTask(T,e,r){T||(T=this),ee++;try{return T.runCount++,T.zone.runTask(T,e,r)}finally{ee==1&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(T,e,r){if(this._state===e||this._state===r)this._state=T,T==x&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let M=a("setTimeout"),O=a("Promise"),N=a("then"),B=[],j=!1,K;function q(L){if(K||t[O]&&(K=t[O].resolve(0)),K){let T=K[N];T||(T=K.then),T.call(K,L)}else t[M](L,0)}function R(L){ee===0&&B.length===0&&q(_),L&&B.push(L)}function _(){if(!j){for(j=!0;B.length;){let L=B;B=[];for(let T=0;T<L.length;T++){let e=L[T];try{e.zone.runTask(e,null,null)}catch(r){z.onUnhandledError(r)}}}z.microtaskDrainDone(),j=!1}}let J={name:"NO ZONE"},x="notScheduled",X="scheduling",A="scheduled",E="running",G="canceling",h="unknown",I="microTask",P="macroTask",Q="eventTask",oe={},z={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q},U={parent:null,zone:new d(null,null)},ne=null,ee=0;function W(){}return o("Zone","Zone"),t.Zone=d})(typeof window<"u"&&window||typeof self<"u"&&self||global);var me=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,at=Object.create,lt=Array.prototype.slice,Le="addEventListener",Me="removeEventListener",Se=Zone.__symbol__(Le),De=Zone.__symbol__(Me),ie="true",ce="false",pe=Zone.__symbol__("");function Ae(t,n){return Zone.current.wrap(t,n)}function je(t,n,i,o,c){return Zone.current.scheduleMacroTask(t,n,i,o,c)}var H=Zone.__symbol__,Pe=typeof window<"u",Te=Pe?window:void 0,$=Pe&&Te||typeof self=="object"&&self||global,ut="removeAttribute";function He(t,n){for(let i=t.length-1;i>=0;i--)typeof t[i]=="function"&&(t[i]=Ae(t[i],n+"_"+i));return t}function ft(t,n){let i=t.constructor.name;for(let o=0;o<n.length;o++){let c=n[o],a=t[c];if(a){let y=me(t,c);if(!Je(y))continue;t[c]=(d=>{let b=function(){return d.apply(this,He(arguments,i+"."+c))};return ae(b,d),b})(a)}}}function Je(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0}var Ke=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process<"u"&&{}.toString.call($.process)==="[object process]",xe=!we&&!Ke&&!!(Pe&&Te.HTMLElement),Qe=typeof $.process<"u"&&{}.toString.call($.process)==="[object process]"&&!Ke&&!!(Pe&&Te.HTMLElement),be={},Xe=function(t){if(t=t||$.event,!t)return;let n=be[t.type];n||(n=be[t.type]=H("ON_PROPERTY"+t.type));let i=this||t.target||$,o=i[n],c;if(xe&&i===Te&&t.type==="error"){let a=t;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),c===!0&&t.preventDefault()}else c=o&&o.apply(this,arguments),c!=null&&!c&&t.preventDefault();return c};function ze(t,n,i){let o=me(t,n);if(!o&&i&&me(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;let c=H("on"+n+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete o.writable,delete o.value;let a=o.get,y=o.set,d=n.slice(2),b=be[d];b||(b=be[d]=H("ON_PROPERTY"+d)),o.set=function(v){let m=this;if(!m&&t===$&&(m=$),!m)return;typeof m[b]=="function"&&m.removeEventListener(d,Xe),y&&y.call(m,null),m[b]=v,typeof v=="function"&&m.addEventListener(d,Xe,!1)},o.get=function(){let v=this;if(!v&&t===$&&(v=$),!v)return null;let m=v[b];if(m)return m;if(a){let M=a.call(this);if(M)return o.set.call(this,M),typeof v[ut]=="function"&&v.removeAttribute(n),M}return null},Ne(t,n,o),t[c]=!0}function et(t,n,i){if(n)for(let o=0;o<n.length;o++)ze(t,"on"+n[o],i);else{let o=[];for(let c in t)c.slice(0,2)=="on"&&o.push(c);for(let c=0;c<o.length;c++)ze(t,o[c],i)}}var re=H("originalInstance");function ge(t){let n=$[t];if(!n)return;$[H(t)]=n,$[t]=function(){let c=He(arguments,t);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},ae($[t],n);let i=new n(function(){}),o;for(o in i)t==="XMLHttpRequest"&&o==="responseBlob"||function(c){typeof i[c]=="function"?$[t].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:Ne($[t].prototype,c,{set:function(a){typeof a=="function"?(this[re][c]=Ae(a,t+"."+c),ae(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)o!=="prototype"&&n.hasOwnProperty(o)&&($[t][o]=n[o])}function le(t,n,i){let o=t;for(;o&&!o.hasOwnProperty(n);)o=Ie(o);!o&&t[n]&&(o=t);let c=H(n),a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))){a=o[c]=o[n];let y=o&&me(o,n);if(Je(y)){let d=i(a,c,n);o[n]=function(){return d(this,arguments)},ae(o[n],a)}}return a}function ht(t,n,i){let o=null;function c(a){let y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=le(t,n,a=>function(y,d){let b=i(y,d);return b.cbIdx>=0&&typeof d[b.cbIdx]=="function"?je(b.name,d[b.cbIdx],b,c):a.apply(y,d)})}function ae(t,n){t[H("OriginalDelegate")]=n}var Ye=!1,Ze=!1;function dt(){try{let t=Te.navigator.userAgent;if(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1)return!0}catch{}return!1}function _t(){if(Ye)return Ze;Ye=!0;try{let t=Te.navigator.userAgent;(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1||t.indexOf("Edge/")!==-1)&&(Ze=!0)}catch{}return Ze}Zone.__load_patch("ZoneAwarePromise",(t,n,i)=>{let o=Object.getOwnPropertyDescriptor,c=Object.defineProperty;function a(l){if(l&&l.toString===Object.prototype.toString){let u=l.constructor&&l.constructor.name;return(u||"")+": "+JSON.stringify(l)}return l?l.toString():Object.prototype.toString.call(l)}let y=i.symbol,d=[],b=t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]===!0,v=y("Promise"),m=y("then"),M="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){let u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){let l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};let O=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{let u=n[O];typeof u=="function"&&u.call(this,l)}catch{}}function B(l){return l&&l.then}function j(l){return l}function K(l){return e.reject(l)}let q=y("state"),R=y("value"),_=y("finally"),J=y("parentPromiseValue"),x=y("parentPromiseState"),X="Promise.then",A=null,E=!0,G=!1,h=0;function I(l,u){return s=>{try{z(l,u,s)}catch(f){z(l,!1,f)}}}let P=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",oe=y("currentTaskTrace");function z(l,u,s){let f=P();if(l===s)throw new TypeError(Q);if(l[q]===A){let g=null;try{(typeof s=="object"||typeof s=="function")&&(g=s&&s.then)}catch(w){return f(()=>{z(l,!1,w)})(),l}if(u!==G&&s instanceof e&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==A)ne(s),z(l,s[q],s[R]);else if(u!==G&&typeof g=="function")try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(w){f(()=>{z(l,!1,w)})()}else{l[q]=u;let w=l[R];if(l[R]=s,l[_]===_&&u===E&&(l[q]=l[x],l[R]=l[J]),u===G&&s instanceof Error){let p=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];p&&c(s,oe,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<w.length;)ee(l,w[p++],w[p++],w[p++],w[p++]);if(w.length==0&&u==G){l[q]=h;let p=s;try{throw new Error("Uncaught (in promise): "+a(s)+(s&&s.stack?`
`+s.stack:""))}catch(S){p=S}b&&(p.throwOriginal=!0),p.rejection=s,p.promise=l,p.zone=n.current,p.task=n.currentTask,d.push(p),i.scheduleMicroTask()}}}return l}let U=y("rejectionHandledHandler");function ne(l){if(l[q]===h){try{let u=n[U];u&&typeof u=="function"&&u.call(this,{rejection:l[R],promise:l})}catch{}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){ne(l);let w=l[q],p=w?typeof f=="function"?f:j:typeof g=="function"?g:K;u.scheduleMicroTask(X,()=>{try{let S=l[R],D=!!s&&_===s[_];D&&(s[J]=S,s[x]=w);let Z=u.run(p,void 0,D&&p!==K&&p!==j?[]:[S]);z(s,!0,Z)}catch(S){z(s,!1,S)}},s)}let W="function ZoneAwarePromise() { [native code] }",L=function(){},T=t.AggregateError;class e{static toString(){return W}static resolve(u){return z(new this(null),E,u)}static reject(u){return z(new this(null),G,u)}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new T([],"All promises were rejected"));let s=[],f=0;try{for(let p of u)f++,s.push(e.resolve(p))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(f===0)return Promise.reject(new T([],"All promises were rejected"));let g=!1,w=[];return new e((p,S)=>{for(let D=0;D<s.length;D++)s[D].then(Z=>{g||(g=!0,p(Z))},Z=>{w.push(Z),f--,f===0&&(g=!0,S(new T(w,"All promises were rejected")))})})}static race(u){let s,f,g=new this((S,D)=>{s=S,f=D});function w(S){s(S)}function p(S){f(S)}for(let S of u)B(S)||(S=this.resolve(S)),S.then(w,p);return g}static all(u){return e.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof e?this:e).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,w=new this((Z,V)=>{f=Z,g=V}),p=2,S=0,D=[];for(let Z of u){B(Z)||(Z=this.resolve(Z));let V=S;try{Z.then(F=>{D[V]=s?s.thenCallback(F):F,p--,p===0&&f(D)},F=>{s?(D[V]=s.errorCallback(F),p--,p===0&&f(D)):g(F)})}catch(F){g(F)}p++,S++}return p-=2,p===0&&f(D),w}constructor(u){let s=this;if(!(s instanceof e))throw new Error("Must be an instanceof Promise.");s[q]=A,s[R]=[];try{let f=P();u&&u(f(I(s,E)),f(I(s,G)))}catch(f){z(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return e}then(u,s){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||e);let g=new f(L),w=n.current;return this[q]==A?this[R].push(w,g,u,s):ee(this,w,g,u,s),g}catch(u){return this.then(null,u)}finally(u){let s=this.constructor?.[Symbol.species];(!s||typeof s!="function")&&(s=e);let f=new s(L);f[_]=_;let g=n.current;return this[q]==A?this[R].push(g,f,u,u):ee(this,g,f,u,u),f}}e.resolve=e.resolve,e.reject=e.reject,e.race=e.race,e.all=e.all;let r=t[v]=t.Promise;t.Promise=e;let k=y("thenPatched");function C(l){let u=l.prototype,s=o(u,"then");if(s&&(s.writable===!1||!s.configurable))return;let f=u.then;u[m]=f,l.prototype.then=function(g,w){return new e((S,D)=>{f.call(this,S,D)}).then(g,w)},l[k]=!0}i.patchThen=C;function Y(l){return function(u,s){let f=l.apply(u,s);if(f instanceof e)return f;let g=f.constructor;return g[k]||C(g),f}}return r&&(C(r),le(t,"fetch",l=>Y(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,e});Zone.__load_patch("toString",t=>{let n=Function.prototype.toString,i=H("OriginalDelegate"),o=H("Promise"),c=H("Error"),a=function(){if(typeof this=="function"){let v=this[i];if(v)return typeof v=="function"?n.call(v):Object.prototype.toString.call(v);if(this===Promise){let m=t[o];if(m)return n.call(m)}if(this===Error){let m=t[c];if(m)return n.call(m)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;let y=Object.prototype.toString,d="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?d:y.call(this)}});var _e=!1;if(typeof window<"u")try{let t=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{_e=!1}var Et={useG:!0},te={},tt={},nt=new RegExp("^"+pe+"(\\w+)(true|false)$"),rt=H("propagationStopped");function ot(t,n){let i=(n?n(t):t)+ce,o=(n?n(t):t)+ie,c=pe+i,a=pe+o;te[t]={},te[t][ce]=c,te[t][ie]=a}function Tt(t,n,i,o){let c=o&&o.add||Le,a=o&&o.rm||Me,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",b=H(c),v="."+c+":",m="prependListener",M="."+m+":",O=function(R,_,J){if(R.isRemoved)return;let x=R.callback;typeof x=="object"&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);let X;try{R.invoke(R,_,[J])}catch(E){X=E}let A=R.options;if(A&&typeof A=="object"&&A.once){let E=R.originalDelegate?R.originalDelegate:R.callback;_[a].call(_,J.type,E,A)}return X};function N(R,_,J){if(_=_||t.event,!_)return;let x=R||_.target||t,X=x[te[_.type][J?ie:ce]];if(X){let A=[];if(X.length===1){let E=O(X[0],x,_);E&&A.push(E)}else{let E=X.slice();for(let G=0;G<E.length&&!(_&&_[rt]===!0);G++){let h=O(E[G],x,_);h&&A.push(h)}}if(A.length===1)throw A[0];for(let E=0;E<A.length;E++){let G=A[E];n.nativeScheduleMicroTask(()=>{throw G})}}}let B=function(R){return N(this,R,!1)},j=function(R){return N(this,R,!0)};function K(R,_){if(!R)return!1;let J=!0;_&&_.useG!==void 0&&(J=_.useG);let x=_&&_.vh,X=!0;_&&_.chkDup!==void 0&&(X=_.chkDup);let A=!1;_&&_.rt!==void 0&&(A=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=Ie(E);if(!E&&R[c]&&(E=R),!E||E[b])return!1;let G=_&&_.eventNameToString,h={},I=E[b]=E[c],P=E[H(a)]=E[a],Q=E[H(y)]=E[y],oe=E[H(d)]=E[d],z;_&&_.prepend&&(z=E[H(_.prepend)]=E[_.prepend]);function U(s,f){return!_e&&typeof s=="object"&&s?!!s.capture:!_e||!f?s:typeof s=="boolean"?{capture:s,passive:!0}:s?typeof s=="object"&&s.passive!==!1?qe(We({},s),{passive:!0}):s:{passive:!0}}let ne=function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?j:B,h.options)},ee=function(s){if(!s.isRemoved){let f=te[s.eventName],g;f&&(g=f[s.capture?ie:ce]);let w=g&&s.target[g];if(w){for(let p=0;p<w.length;p++)if(w[p]===s){w.splice(p,1),s.isRemoved=!0,w.length===0&&(s.allRemoved=!0,s.target[g]=null);break}}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?j:B,s.options)},W=function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},L=function(s){return z.call(h.target,h.eventName,s.invoke,h.options)},T=function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},e=J?ne:W,r=J?ee:T,k=function(s,f){let g=typeof f;return g==="function"&&s.callback===f||g==="object"&&s.originalDelegate===f},C=_&&_.diff?_.diff:k,Y=Zone[H("UNPATCHED_EVENTS")],l=t[H("PASSIVE_EVENTS")],u=function(s,f,g,w,p=!1,S=!1){return function(){let D=this||t,Z=arguments[0];_&&_.transferEventName&&(Z=_.transferEventName(Z));let V=arguments[1];if(!V)return s.apply(this,arguments);if(we&&Z==="uncaughtException")return s.apply(this,arguments);let F=!1;if(typeof V!="function"){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;let ue=_e&&!!l&&l.indexOf(Z)!==-1,se=U(arguments[2],ue);if(Y){for(let he=0;he<Y.length;he++)if(Z===Y[he])return ue?s.call(D,Z,V,se):s.apply(this,arguments)}let Re=se?typeof se=="boolean"?!0:se.capture:!1,Ge=se&&typeof se=="object"?se.once:!1,ct=Zone.current,Ce=te[Z];Ce||(ot(Z,G),Ce=te[Z]);let Ve=Ce[Re?ie:ce],de=D[Ve],Fe=!1;if(de){if(Fe=!0,X){for(let he=0;he<de.length;he++)if(C(de[he],V))return}}else de=D[Ve]=[];let ke,Be=D.constructor.name,Ue=tt[Be];Ue&&(ke=Ue[Z]),ke||(ke=Be+f+(G?G(Z):Z)),h.options=se,Ge&&(h.options.once=!1),h.target=D,h.capture=Re,h.eventName=Z,h.isExisting=Fe;let ye=J?Et:void 0;ye&&(ye.taskData=h);let fe=ct.scheduleEventTask(ke,V,ye,g,w);if(h.target=null,ye&&(ye.taskData=null),Ge&&(se.once=!0),!_e&&typeof fe.options=="boolean"||(fe.options=se),fe.target=D,fe.capture=Re,fe.eventName=Z,F&&(fe.originalDelegate=V),S?de.unshift(fe):de.push(fe),p)return D}};return E[c]=u(I,v,e,r,A),z&&(E[m]=u(z,M,L,r,A,!0)),E[a]=function(){let s=this||t,f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));let g=arguments[2],w=g?typeof g=="boolean"?!0:g.capture:!1,p=arguments[1];if(!p)return P.apply(this,arguments);if(x&&!x(P,p,s,arguments))return;let S=te[f],D;S&&(D=S[w?ie:ce]);let Z=D&&s[D];if(Z)for(let V=0;V<Z.length;V++){let F=Z[V];if(C(F,p)){if(Z.splice(V,1),F.isRemoved=!0,Z.length===0&&(F.allRemoved=!0,s[D]=null,typeof f=="string")){let ue=pe+"ON_PROPERTY"+f;s[ue]=null}return F.zone.cancelTask(F),A?s:void 0}}return P.apply(this,arguments)},E[y]=function(){let s=this||t,f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));let g=[],w=st(s,G?G(f):f);for(let p=0;p<w.length;p++){let S=w[p],D=S.originalDelegate?S.originalDelegate:S.callback;g.push(D)}return g},E[d]=function(){let s=this||t,f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));let g=te[f];if(g){let w=g[ce],p=g[ie],S=s[w],D=s[p];if(S){let Z=S.slice();for(let V=0;V<Z.length;V++){let F=Z[V],ue=F.originalDelegate?F.originalDelegate:F.callback;this[a].call(this,f,ue,F.options)}}if(D){let Z=D.slice();for(let V=0;V<Z.length;V++){let F=Z[V],ue=F.originalDelegate?F.originalDelegate:F.callback;this[a].call(this,f,ue,F.options)}}}}else{let g=Object.keys(s);for(let w=0;w<g.length;w++){let p=g[w],S=nt.exec(p),D=S&&S[1];D&&D!=="removeListener"&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(A)return this},ae(E[c],I),ae(E[a],P),oe&&ae(E[d],oe),Q&&ae(E[y],Q),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=K(i[R],o);return q}function st(t,n){if(!n){let a=[];for(let y in t){let d=nt.exec(y),b=d&&d[1];if(b&&(!n||b===n)){let v=t[y];if(v)for(let m=0;m<v.length;m++)a.push(v[m])}}return a}let i=te[n];i||(ot(n),i=te[n]);let o=t[i[ce]],c=t[i[ie]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function yt(t,n){let i=t.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[rt]=!0,o&&o.apply(c,a)})}function mt(t,n,i,o,c){let a=Zone.__symbol__(o);if(n[a])return;let y=n[a]=n[o];n[o]=function(d,b,v){return b&&b.prototype&&c.forEach(function(m){let M=`${i}.${o}::`+m,O=b.prototype;try{if(O.hasOwnProperty(m)){let N=t.ObjectGetOwnPropertyDescriptor(O,m);N&&N.value?(N.value=t.wrapWithCurrentZone(N.value,M),t._redefineProperty(b.prototype,m,N)):O[m]&&(O[m]=t.wrapWithCurrentZone(O[m],M))}else O[m]&&(O[m]=t.wrapWithCurrentZone(O[m],M))}catch{}}),y.call(n,d,b,v)},t.attachOriginToPatched(n[o],y)}function it(t,n,i){if(!i||i.length===0)return n;let o=i.filter(a=>a.target===t);if(!o||o.length===0)return n;let c=o[0].ignoreProperties;return n.filter(a=>c.indexOf(a)===-1)}function $e(t,n,i,o){if(!t)return;let c=it(t,n,i);et(t,c,o)}function Oe(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function pt(t,n){if(we&&!Qe||Zone[t.symbol("patchEvents")])return;let i=n.__Zone_ignore_on_properties,o=[];if(xe){let c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let a=dt()?[{target:c,ignoreProperties:["error"]}]:[];$e(c,Oe(c),i&&i.concat(a),Ie(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){let a=n[o[c]];a&&a.prototype&&$e(a.prototype,Oe(a.prototype),i)}}Zone.__load_patch("util",(t,n,i)=>{let o=Oe(t);i.patchOnProperties=et,i.patchMethod=le,i.bindArguments=He,i.patchMacroTask=ht;let c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");t[a]&&(t[c]=t[a]),t[c]&&(n[c]=n[a]=t[c]),i.patchEventPrototype=yt,i.patchEventTarget=Tt,i.isIEOrEdge=_t,i.ObjectDefineProperty=Ne,i.ObjectGetOwnPropertyDescriptor=me,i.ObjectCreate=at,i.ArraySlice=lt,i.patchClass=ge,i.wrapWithCurrentZone=Ae,i.filterProperties=it,i.attachOriginToPatched=ae,i._redefineProperty=Object.defineProperty,i.patchCallbacks=mt,i.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:te,eventNames:o,isBrowser:xe,isMix:Qe,isNode:we,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Me})});var ve=H("zoneTask");function Ee(t,n,i,o){let c=null,a=null;n+=o,i+=o;let y={};function d(v){let m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=c.apply(t,m.args),v}function b(v){return a.call(t,v.data.handleId)}c=le(t,n,v=>function(m,M){if(typeof M[0]=="function"){let O={isPeriodic:o==="Interval",delay:o==="Timeout"||o==="Interval"?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||(typeof O.handleId=="number"?delete y[O.handleId]:O.handleId&&(O.handleId[ve]=null))}};let B=je(n,M[0],O,d,b);if(!B)return B;let j=B.data.handleId;return typeof j=="number"?y[j]=B:j&&(j[ve]=B),j&&j.ref&&j.unref&&typeof j.ref=="function"&&typeof j.unref=="function"&&(B.ref=j.ref.bind(j),B.unref=j.unref.bind(j)),typeof j=="number"||j?j:B}else return v.apply(t,M)}),a=le(t,i,v=>function(m,M){let O=M[0],N;typeof O=="number"?N=y[O]:(N=O&&O[ve],N||(N=O)),N&&typeof N.type=="string"?N.state!=="notScheduled"&&(N.cancelFn&&N.data.isPeriodic||N.runCount===0)&&(typeof O=="number"?delete y[O]:O&&(O[ve]=null),N.zone.cancelTask(N)):v.apply(t,M)})}function gt(t,n){let{isBrowser:i,isMix:o}=n.getGlobalObjects();if(!i&&!o||!t.customElements||!("customElements"in t))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];n.patchCallbacks(n,t.customElements,"customElements","define",c)}function kt(t,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let b=0;b<i.length;b++){let v=i[b],m=v+a,M=v+c,O=y+m,N=y+M;o[v]={},o[v][a]=O,o[v][c]=N}let d=t.EventTarget;if(!(!d||!d.prototype))return n.patchEventTarget(t,n,[d&&d.prototype]),!0}function vt(t,n){n.patchEventPrototype(t,n)}Zone.__load_patch("legacy",t=>{let n=t[Zone.__symbol__("legacyPatch")];n&&n()});Zone.__load_patch("queueMicrotask",(t,n,i)=>{i.patchMethod(t,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})});Zone.__load_patch("timers",t=>{let n="set",i="clear";Ee(t,n,i,"Timeout"),Ee(t,n,i,"Interval"),Ee(t,n,i,"Immediate")});Zone.__load_patch("requestAnimationFrame",t=>{Ee(t,"request","cancel","AnimationFrame"),Ee(t,"mozRequest","mozCancel","AnimationFrame"),Ee(t,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(t,n)=>{let i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++){let c=i[o];le(t,c,(a,y,d)=>function(b,v){return n.current.run(a,t,v,d)})}});Zone.__load_patch("EventTarget",(t,n,i)=>{vt(t,i),kt(t,i);let o=t.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(t,i,[o.prototype])});Zone.__load_patch("MutationObserver",(t,n,i)=>{ge("MutationObserver"),ge("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(t,n,i)=>{ge("IntersectionObserver")});Zone.__load_patch("FileReader",(t,n,i)=>{ge("FileReader")});Zone.__load_patch("on_property",(t,n,i)=>{pt(i,t)});Zone.__load_patch("customElements",(t,n,i)=>{gt(t,i)});Zone.__load_patch("XHR",(t,n)=>{b(t);let i=H("xhrTask"),o=H("xhrSync"),c=H("xhrListener"),a=H("xhrScheduled"),y=H("xhrURL"),d=H("xhrErrorBeforeScheduled");function b(v){let m=v.XMLHttpRequest;if(!m)return;let M=m.prototype;function O(h){return h[i]}let N=M[Se],B=M[De];if(!N){let h=v.XMLHttpRequestEventTarget;if(h){let I=h.prototype;N=I[Se],B=I[De]}}let j="readystatechange",K="scheduled";function q(h){let I=h.data,P=I.target;P[a]=!1,P[d]=!1;let Q=P[c];N||(N=P[Se],B=P[De]),Q&&B.call(P,j,Q);let oe=P[c]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[a]&&h.state===K){let U=P[n.__symbol__("loadfalse")];if(P.status!==0&&U&&U.length>0){let ne=h.invoke;h.invoke=function(){let ee=P[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!I.aborted&&h.state===K&&ne.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&P[a]===!1&&(P[d]=!0)};return N.call(P,j,oe),P[i]||(P[i]=h),E.apply(P,I.args),P[a]=!0,h}function R(){}function _(h){let I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}let J=le(M,"open",()=>function(h,I){return h[o]=I[2]==!1,h[y]=I[1],J.apply(h,I)}),x="XMLHttpRequest.send",X=H("fetchTaskAborting"),A=H("fetchTaskScheduling"),E=le(M,"send",()=>function(h,I){if(n.current[A]===!0||h[o])return E.apply(h,I);{let P={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=je(x,R,P,q,_);h&&h[d]===!0&&!P.aborted&&Q.state===K&&Q.invoke()}}),G=le(M,"abort",()=>function(h,I){let P=O(h);if(P&&typeof P.type=="string"){if(P.cancelFn==null||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(n.current[X]===!0)return G.apply(h,I)})}});Zone.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&ft(t.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(t,n)=>{function i(o){return function(c){st(t,o).forEach(y=>{let d=t.PromiseRejectionEvent;if(d){let b=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(b)}})}}t.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[H("rejectionHandledHandler")]=i("rejectionhandled"))});
