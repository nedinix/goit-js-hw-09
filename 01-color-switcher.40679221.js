const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){const o=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=o})),t.stopBtn.addEventListener("click",(()=>{console.log("stop",t.stopBtn)}));
//# sourceMappingURL=01-color-switcher.40679221.js.map
