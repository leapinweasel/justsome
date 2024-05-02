import"./chunk-76TU3OSB.js";import{b as _}from"./chunk-YZJLV2DQ.js";import{f as S,i as v}from"./chunk-DYE7QTCV.js";import{Ca as n,Ea as p,G as b,Ia as x,O as y,Q as k,e as h,kb as f,na as i,ua as r,va as e,wa as t,xa as s,za as c}from"./chunk-2FFS3JCV.js";import"./chunk-FC6Q6UXU.js";var D=(()=>{let a=class{constructor(){this._themeService=y(_),this._destroy$=new h}ngOnInit(){this._themeService.currentTheme$.pipe(b(this._destroy$)).subscribe(m=>this.currentTheme=m)}ngOnDestroy(){this._destroy$.complete(),this._destroy$.unsubscribe()}handleThemeChange(m){this._themeService.setTheme(m)}},d=a;return(()=>{a.\u0275fac=function(l){return new(l||a)}})(),(()=>{a.\u0275cmp=k({type:a,selectors:[["ng-component"]],standalone:!0,features:[x],decls:41,vars:15,consts:[[1,"mb-4"],[1,"flex","flex-wrap","gap-3","mb-6"],[3,"click"],[1,"icon-[carbon--screen]","text-2xl","mr-2"],["data-cy","theme-light-button",3,"click"],[1,"icon-[carbon--sun]","text-2xl","mr-2"],["data-cy","theme-dark-button",3,"click"],[1,"icon-[carbon--moon]","text-2xl","mr-2"],[1,"mt-12"],[1,"h5"],[1,"text-sm","link",3,"routerLink"],[1,"mt-6"],["text-sm","",1,"text-sm","link",3,"routerLink"]],template:function(l,o){l&1&&(e(0,"section")(1,"h1"),n(2,"Home"),t(),e(3,"h2",0),n(4,"Choose your theme"),t(),e(5,"div",1)(6,"button",2),c("click",function(){return o.handleThemeChange("system")}),s(7,"span",3),n(8," System "),t(),e(9,"button",4),c("click",function(){return o.handleThemeChange("light")}),s(10,"span",5),n(11," Light "),t(),e(12,"button",6),c("click",function(){return o.handleThemeChange("dark")}),s(13,"span",7),n(14," Dark "),t()(),e(15,"div",8)(16,"h3",9),n(17,"Settings"),t(),e(18,"ul")(19,"li")(20,"a",10),n(21," Accessibility "),t()(),e(22,"li")(23,"a",10),n(24," Account "),t()(),e(25,"li")(26,"a",10),n(27," Appearance "),t()()()(),e(28,"div",11)(29,"h3",9),n(30,"Profiles"),t(),e(31,"ul")(32,"li")(33,"a",12),n(34," Maria "),t()(),e(35,"li")(36,"a",12),n(37," Pedro "),t()(),e(38,"li")(39,"a",12),n(40," Sara "),t()()()()()),l&2&&(i(6),p("min-w-[150px] btn ",o.currentTheme==="system"?"btn-primary":"btn-secondary",""),i(3),p("min-w-[150px] btn ",o.currentTheme==="light"?"btn-primary":"btn-secondary",""),i(3),p("min-w-[150px] btn ",o.currentTheme==="dark"?"btn-primary":"btn-secondary",""),i(8),r("routerLink","/settings/accessibility"),i(3),r("routerLink","/settings/account"),i(3),r("routerLink","/settings/appearance"),i(7),r("routerLink","/users/maria"),i(3),r("routerLink","/users/pedro"),i(3),r("routerLink","/users/sara"))},dependencies:[f,v,S],encapsulation:2})})(),d})();export{D as HomeComponent};