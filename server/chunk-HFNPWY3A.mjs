import './polyfills.server.mjs';
import{A as M,B as E,E as F,K as w,a as l,b as g,c as m,d as u,e as _,f as o,g as v,h as c,i,j as n,k as y,l as d,m as r,n as a,o as C,t as V,w as D,y as b,z as A}from"./chunk-IHH2LFHO.mjs";import{a as f,b as p}from"./chunk-5XUXGTUW.mjs";var I=[];var S={providers:[V({eventCoalescing:!0}),w(I),E()]};var G={providers:[F()]},N=D(S,G);var j={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ke=p(f({},j),{"[class.ng-submitted]":"isSubmitted"});var T=new g("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";var B=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=l({})}}return e})();var O=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:T,useValue:t.callSetDisabledState??x}]}}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=l({imports:[B]})}}return e})();function U(e,k){if(e&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n(),i(5,"td"),y(6,"img",8),n(),i(7,"td"),r(8),n()()),e&2){let t=k.$implicit;o(2),a(t.id),o(2),a(t.camera.name),o(2),c("src",t.img_src,_),o(2),a(t.rover.name)}}var P=(()=>{class e{myObj={};displayMarsPhotos(){fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(t=>t.json()).then(t=>{this.myObj=t})}static \u0275fac=function(s){return new(s||e)};static \u0275cmp=m({type:e,selectors:[["app-display-curosity-data"]],standalone:!0,features:[C],decls:20,vars:1,consts:[[1,"ms-4"],[1,"d-flex","align-item-center","justify-content-center"],[1,""],[1,"d-flex","align-item-center","justify-content-center","mt-3"],[1,"btn","btn-success",3,"click"],[1,"table","table-striped","align-text-center","mt-3"],[1,"p-2"],[4,"ngFor","ngForOf"],["width","100px","height","100px","alt","",3,"src"]],template:function(s,h){s&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Mars Images By Curosity Rover"),n()(),i(4,"div",3)(5,"button",4),d("click",function(){return h.displayMarsPhotos()}),r(6,"Get Mars Data"),n()(),i(7,"table",5)(8,"thead")(9,"tr")(10,"th",6),r(11,"ID"),n(),i(12,"th",6),r(13,"Camera Name"),n(),i(14,"th",6),r(15,"Image"),n(),i(16,"th",6),r(17,"Rover Name"),n()()(),i(18,"tbody"),v(19,U,9,4,"tr",7),n()()()),s&2&&(o(19),c("ngForOf",h.myObj.photos))},dependencies:[O,A,b]})}return e})();var H=()=>M(P,N),We=H;export{We as a};
