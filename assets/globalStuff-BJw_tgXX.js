(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let a=0;const o=document.querySelector("nav");function c(){window.addEventListener("scroll",()=>{let r=window.scrollY;r>a?(o.classList.remove("nav-in","nav-out"),o.classList.add("nav-out")):(o.classList.add("nav-in","nav-out"),o.classList.remove("nav-out")),a=r})}function u(){document.querySelector("nav").innerHTML=`
        <span class="nav-label">GaN's WEBPAGE</span>
            <div class="nav-button">
                <a href="/index.html">Hello World!</a>|
                <a href="/aboutme.html">About Me</a>|
                <a href="/education.html">Educational Background</a>|
                <a href="/links.html">Links</a>|
                <a href="https://zikang-bi.github.io/-she/">Back To Dorm</a>
            </div>
        `,c(),document.querySelector("footer").innerHTML=`
        <h6>2024.11 | GaN's webpage.</h6>
    `}export{u as i};