!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.body.style.backgroundColor=e,t.startBtn.setAttribute("disabled","true"),t.stopBtn.removeAttribute("disabled")}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.setAttribute("disabled","true"),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.68a6ee21.js.map
