/* eslint-disable */
(function(window){var svgSprite='<svg><symbol id="icon-heart" viewBox="0 0 1024 1024"><path d="M486.4 972.8c-4.3008 0-8.5504-1.0752-12.4416-3.2256-4.8128-2.6624-119.0912-66.6112-235.1104-171.3664-68.6592-61.952-123.4432-125.3376-162.9696-188.416-50.3808-80.4352-75.8784-160.7168-75.8784-238.592 0-148.224 120.576-268.8 268.8-268.8 50.176 0 103.4752 18.7904 150.0672 52.9408 27.2384 19.968 50.432 44.032 67.5328 69.5808 17.1008-25.5488 40.2944-49.6128 67.5328-69.5808 46.592-34.1504 99.8912-52.9408 150.0672-52.9408 148.224 0 268.8 120.576 268.8 268.8 0 77.8752-25.5488 158.1568-75.8784 238.592-39.4752 63.0784-94.3104 126.464-162.9184 188.416-116.0192 104.7552-230.2976 168.704-235.1104 171.3664-3.8912 2.1504-8.1408 3.2256-12.4416 3.2256zM268.8 153.6c-119.9616 0-217.6 97.6384-217.6 217.6 0 155.648 120.32 297.0624 221.2352 388.352 90.112 81.5104 181.4528 138.6496 213.9648 158.0544 32.512-19.4048 123.8528-76.544 213.9648-158.0544 100.9152-91.2384 221.2352-232.704 221.2352-388.352 0-119.9616-97.6384-217.6-217.6-217.6-87.1936 0-171.8784 71.7312-193.3312 136.0896-3.4816 10.4448-13.2608 17.5104-24.2688 17.5104s-20.7872-7.0656-24.2688-17.5104c-21.4528-64.3584-106.1376-136.0896-193.3312-136.0896z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)