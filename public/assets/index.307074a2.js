var u=Object.defineProperty;var g=(n,t,s)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var l=(n,t,s)=>(g(n,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function f(){let n=document.createElement("canvas");return n.getContext&&n.getContext("2d")?n.toDataURL("image/webp").indexOf("data:image/webp")==0:!1}window.onload=function(){let n=document.querySelectorAll("[data-bg]");for(let e=0;e<n.length;e++){let o=n[e].getAttribute("data-bg");n[e].style.backgroundImage="url("+o+")"}let t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),s=t?parseInt(t[1]):0;if(f()||s>=65){let e=document.querySelectorAll("[data-bg-webp]");for(let o=0;o<e.length;o++){let r=e[o].getAttribute("data-bg-webp");e[o].style.backgroundImage="url("+r+")"}}};const i=document.getElementById("burger"),a=document.getElementById("burger-close"),c=document.getElementById("nav");function m(){const n=()=>{i==null||i.classList.toggle("hidden"),a==null||a.classList.toggle("hidden"),c==null||c.classList.toggle("opened"),document.body.classList.toggle("stop-scroll")};console.dir(i),a==null||a.addEventListener("click",n),i==null||i.addEventListener("click",n),c==null||c.addEventListener("click",t=>{!t.target.closest("a")&&t.target.closest("ul")||n()})}class h{constructor(){l(this,"$pages");l(this,"pagesNames");l(this,"$anchors");this.$pages=Array.from(document.querySelectorAll("[data-page]")),this.pagesNames=this.$pages.map(t=>t.getAttribute("data-page")),this.$anchors=Array.from(document.querySelectorAll("a")),this.initAnchors(),this.goToInitialPage()}goToInitialPage(){window.location.pathname&&this.goTo(window.location.pathname.slice(1))}initAnchors(){this.$anchors.forEach(t=>{t.addEventListener("click",s=>{var r;const e=(r=s.target.closest("a"))==null?void 0:r.getAttribute("href");this.goTo(e||"")&&(document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"auto"}),document.documentElement.style.scrollBehavior="smooth",s.preventDefault())})})}goTo(t){const s=this.pagesNames.findIndex(e=>e===t);if(s!==-1){for(const e of this.$pages){if(e===this.$pages[s]){e.classList.remove("none");continue}e.classList.add("none")}return window.history.pushState("","",`/${this.pagesNames[s]}`),!0}return!1}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion").forEach(t=>{t.querySelectorAll(".accordion-item").forEach((e,o)=>{e.addEventListener("click",()=>{const r=e.querySelector(".accordion-collapse");e.classList.toggle("open"),e.classList.contains("open")?(e.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1)):(e.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0))})})})});m();new h;