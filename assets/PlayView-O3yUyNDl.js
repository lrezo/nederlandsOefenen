import{_ as C,u as I,e as a,f as A,o as u,c as v,a as r,t as p,b as s,w as B,g as S,v as M,n as V,i as P,h as y,F as j,r as z,j as D,k as F}from"./index-uucfscm0.js";const O={class:"main-play"},R={class:"card"},U={style:{"text-transform":"capitalize"}},$={class:"input-form"},q=["disabled"],E={class:"warn"},L={key:1,style:{"font-size":"1.5rem"}},T={class:"success"},W={class:"score-bar"},G={__name:"VerbCardApp",setup(N){const e=I();let t=a("");e.shuffleArray();const n=a(!1),_=a(!1),f=a(!1),l=a(""),m=a(!1),d=a(!1),o=a(!1),c=a(new Array(e.irreguliereVerba.length));let b=A(()=>n.value&&t.value===""?"input is required":"");const k=()=>{n.value=!0,b.value===""&&(f.value===!1&&(m.value===!0?t.value===e.randomIrreguliereVerba[e.startNumber].imperfectum.plural?(e.score+=1,d.value=!0,c.value[e.startNumber]=!0,l.value="correct"):(o.value=!0,c.value[e.startNumber]=!1,l.value="niet correct"):t.value===e.randomIrreguliereVerba[e.startNumber].imperfectum.singular?(e.score+=1,d.value=!0,c.value[e.startNumber]=!0,l.value="correct"):(o.value=!0,c.value[e.startNumber]=!1,l.value="niet correct")),f.value=!0)},w=()=>{t.value="",b.value="",e.startNumber+=1,_.value=!_,f.value=!1,n.value=!1,l.value="",m.value=Math.random()>=.5,d.value=!1,o.value=!1},x=()=>{e.shuffleArray(),c.value=new Array(e.irreguliereVerba.length),t.value="",b.value="",e.startNumber=0,_.value=!_,f.value=!1,n.value=!1,l.value="",m.value=Math.random()>=.5,d.value=!1,o.value=!1,e.score=0};return(K,h)=>(u(),v("div",O,[r("div",R,[r("div",null,[r("h2",U,p(s(e).randomIrreguliereVerba[s(e).startNumber].infinitief),1)]),r("div",null,[r("form",{onSubmit:B(k,["prevent"])},[r("div",$,[r("label",null," Imperfectum "+p(m.value===!1?"Singular":"Plural")+" : ",1),S(r("input",{class:V([d.value===!0?"correct-word":"",o.value===!0?"incorrect-word":""]),disabled:o.value===!0,placeholder:"Schrijf je antwoord hier","onUpdate:modelValue":h[0]||(h[0]=i=>P(t)?t.value=i:t=i),type:"text"},null,10,q),[[M,s(t)]]),r("p",E,p(s(b)),1)]),f.value?y("",!0):(u(),v("button",{key:0,onClick:h[1]||(h[1]=i=>n.value=!n.value),type:"submit"},"Check")),l.value==="niet correct"?(u(),v("div",L,[r("p",T,p(m.value===!0?s(e).randomIrreguliereVerba[s(e).startNumber].imperfectum.plural:s(e).randomIrreguliereVerba[s(e).startNumber].imperfectum.singular),1)])):y("",!0)],32),r("div",{class:"sub-nav"},[r("button",{class:"next",onClick:w},"Next"),r("button",{class:"reset",onClick:x},"Reset")])])]),r("div",W,[(u(!0),v(j,null,z(c.value,(i,g)=>(u(),v("p",{class:V([i===!0?"bg-success":"",i===!1?"bg-failed":"",g===s(e).startNumber?"bg-current":""]),key:g},p(g+1),3))),128))])]))}},H=C(G,[["__scopeId","data-v-b5712646"]]),J={__name:"PlayApp",setup(N){return(e,t)=>(u(),D(H))}},X={__name:"PlayView",setup(N){return(e,t)=>(u(),v("main",null,[F(J)]))}};export{X as default};
