const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null;function n(e){t.startBtn.disabled=e,t.stopBtn.disabled=!e}t.startBtn.addEventListener("click",(function(){n(!0),e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),n(!1)})),t.stopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.af1abf3d.js.map
