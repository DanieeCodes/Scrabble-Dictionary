(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.getElementById("search"),a=document.getElementById("result");l.addEventListener("keyup",async function(c){const r=l.value.toLowerCase().trim();if(!r)return a.innerHTML="";const s=await d();console.log(s);const o=s.includes(r),e=s.filter(i=>i.startsWith(r)),t=o?"Valid Word":"Invalid Word";console.log(e);const n=`
   <p data-result="${o?"valid":"invalid"}">${t}</p>
        <div>
          <ul>
            ${e.map(i=>`<li>${i}</li>`).join("")}
          </ul>
  `;a.innerHTML=n});async function d(c){return(await fetch("./data.json")).json()}
