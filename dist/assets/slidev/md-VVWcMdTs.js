import{d,z as u,o as c,b as p,e as m,f,h as _,c as v,q as $,s as g,B as a}from"../modules/vue-CM0cL0BL.js";import{u as l,f as k}from"./context-C1iCoFlI.js";import"../index-CTNjolfn.js";import"../modules/shiki-99lrWes_.js";function n(e){return e.startsWith("/")?"/"+e.slice(1):e}function h(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${n(e)})`:`url("${n(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const x={class:"my-auto w-full"},y=d({__name:"cover",props:{background:{default:""}},setup(e){l();const s=e,o=u(()=>h(s.background,!0));return(t,r)=>(c(),p("div",{class:"slidev-layout cover",style:_(o.value)},[m("div",x,[f(t.$slots,"default")])],4))}}),q={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:B,$renderContext:b,$frontmatter:i}=l();return t.setup(),(C,z)=>(c(),v(y,$(g(a(k)(a(i),0))),null,16))}};export{q as default};
