import{S as f,i,a as m}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function h(n){const t=document.querySelector(".gallery"),r=document.querySelector(".fetchButton");r.style.display="block";const a=n.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${e.webformatURL}" 
                    alt="${e.tags}" 
                />
            </a>
            <div class="gallery-container">
            <p class="gallery-text">Likes: <span class="gallery-span">${e.likes}</span></p>
            <p class="gallery-text">Views: <span class="gallery-span">${e.views}</span></p>
            <p class="gallery-text">Comments: <span class="gallery-span">${e.comments}</span></p>
            <p class="gallery-text">Downloads: <span class="gallery-span">${e.downloads}</span></p>
            </div>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",a)}const p=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});p.refresh();const b="47343073-38824ad25c719e3c94b2dfcbe",d=document.querySelector(".button"),w=document.querySelector(".input"),l=document.getElementById("loading"),u=document.querySelector(".gallery"),o=document.querySelector(".fetchButton");let c=1,L=15;d.addEventListener("click",async n=>{n.preventDefault(),d.disabled=!0;try{o.style.display="none",u.innerHTML="",c=1;const t=await g()}catch(t){console.log(t)}finally{d.disabled=!1}});o.addEventListener("click",async n=>{n.preventDefault(),o.disabled=!0;try{o.style.display="none",c+=1;const t=await g(),r=Math.ceil(t.totalHits/15);if(c>=r){i.info({title:"Hint",message:"We're sorry, but you've reached the end of search results."}),o.style.display="none";return}const a=u.firstElementChild;if(a){const{height:e}=a.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}catch(t){console.log(t)}finally{o.disabled=!1}});async function g(){const n=w.value.trim();if(!n){i.warning({title:"Hint",message:"Try to enter something into the input..."});return}const t=new URLSearchParams({key:b,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:L});try{l.style.display="block";const{data:r}=await m.get(`https://pixabay.com/api/?${t}`);if(r.hits.length===0){l.style.display="none",i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}return l.style.display="none",h(r.hits),p.refresh(),r}catch(r){l.style.display="none",i.error({title:"Error",message:`Something went wrong: ${r.message}`}),console.error("Fetch error:",r);return}}
//# sourceMappingURL=index.js.map
