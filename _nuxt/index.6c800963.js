import{L as m,$ as z,n as d,v as k,o,P as _,w as C,c as r,F as b,d as V,t as B,D as g,z as f,A as a,k as h,a0 as $,r as S,B as T,a1 as U}from"./entry.51a61baf.js";const v=Symbol("UI_TABS"),w=m({__name:"option",props:{label:{},icon:{},value:{},size:{}},setup(l){const i=l,n=z(v),c=d("ui-tabs-option"),t=k(()=>n.modelValue.value===i.value);return(e,s)=>{const u=h;return o(),_(u,{class:f(a(c).b()),type:a(t)?"filled":"ghost",color:a(t)?"primary":"secondary",icon:e.icon,size:e.size,onClick:s[0]||(s[0]=p=>a(n).handleOptionClick(e.value))},{default:C(()=>[e.label?(o(),r(b,{key:0},[V(B(e.label),1)],64)):g("",!0)]),_:1},8,["class","type","color","icon","size"])}}}),A=m({name:"UiTabs",__name:"index",props:{options:{},modelValue:{},size:{}},emits:["update:modelValue"],setup(l,{emit:i}){const n=l,c=i,t=d("ui-tabs");function e(s){c("update:modelValue",s)}return $(v,{modelValue:S(n,"modelValue"),handleOptionClick:e}),(s,u)=>(o(),r("div",{class:f(a(t).b())},[(o(!0),r(b,null,T(s.options,(p,y)=>(o(),_(w,U({key:y,size:s.size},p),null,16,["size"]))),128))],2))}});export{A as default};
