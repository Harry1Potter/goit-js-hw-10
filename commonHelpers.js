import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p,i as u}from"./assets/vendor-77e16229.js";let s,c;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s-new Date<0?(u.error({color:"red",position:"topRight",message:"Please choose a date in the future"}),o.disabled=!0,i.disabled=!1):(o.disabled=!1,i.disabled=!0)}};document.querySelector("[data-days]"),document.querySelector("[data-hours]"),document.querySelector("[data-minutes]"),document.querySelector("[data-seconds]");p("#datetime-picker",S);const i=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),r=document.querySelectorAll(".value");o.disabled=!0;o.addEventListener("click",()=>{c=setInterval(()=>{const e=s-new Date;if(e<0){clearInterval(c),o.disabled=!0,i.disabled=!1,u.success({title:"Completed",message:"The countdown has finished!",titleColor:"#fff",titleSize:"16px",position:"topRight",backgroundColor:"green",messageColor:"white",theme:"dark"});return}const{days:t,hours:n,minutes:a,seconds:d}=y(e);g({days:t,hours:n,minutes:a,seconds:d})},1e3)});function y(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:f}}function g({days:e,hours:t,minutes:n,seconds:a}){r[0].textContent=String(e).padStart(2,"0"),r[1].textContent=String(t).padStart(2,"0"),r[2].textContent=String(n).padStart(2,"0"),r[3].textContent=String(a).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
