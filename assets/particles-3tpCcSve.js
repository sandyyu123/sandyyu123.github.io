(function(){let c,l,m,s,a,t,d,g=!0;v(),L(),p();function v(){c=window.innerWidth,l=window.innerHeight,d={x:c/2,y:l/2},m=document.getElementById("particles-wrapper"),m.style.height=l+"px",s=document.getElementById("particles-canvas"),s.width=c,s.height=l,a=s.getContext("2d"),t=[];for(let e=0;e<c;e=e+c/20)for(let i=0;i<l;i=i+l/20){let o=e+Math.random()*c/20,n=i+Math.random()*l/20,f={x:o,originX:o,y:n,originY:n};t.push(f)}for(let e=0;e<t.length;e++){let i=[],o=t[e];for(let n=0;n<t.length;n++){let f=t[n];if(o!=f){let h=!1;for(let r=0;r<5;r++)h||i[r]==null&&(i[r]=f,h=!0);for(let r=0;r<5;r++)h||u(o,f)<u(o,i[r])&&(i[r]=f,h=!0)}}o.closest=i}for(let e in t){let i=new T(t[e],2+Math.random()*2,"rgba(255,255,255,0.3)");t[e].circle=i}}function p(){"ontouchstart"in window||window.addEventListener("mousemove",x),window.addEventListener("scroll",M),window.addEventListener("resize",b)}function x(e){let i=0,o=0;e.pageX||e.pageY?(i=e.pageX,o=e.pageY):(e.clientX||e.clientY)&&(i=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,o=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),d.x=i,d.y=o}function M(){document.body.scrollTop>l?g=!1:g=!0}function b(){c=window.innerWidth,l=window.innerHeight,m.style.height=l+"px",s.width=c,s.height=l}function L(){w();for(let e in t)y(t[e])}function w(){if(g){a.clearRect(0,0,c,l);for(let e in t)Math.abs(u(d,t[e]))<4e3?(t[e].active=.3,t[e].circle.active=.6):Math.abs(u(d,t[e]))<2e4?(t[e].active=.1,t[e].circle.active=.3):Math.abs(u(d,t[e]))<4e4?(t[e].active=.02,t[e].circle.active=.1):(t[e].active=0,t[e].circle.active=0),E(t[e]),t[e].circle.draw()}requestAnimationFrame(w)}function y(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+Math.random()*100,y:e.originY-50+Math.random()*100,ease:Circ.easeInOut,onComplete:function(){y(e)}})}function E(e){if(e.active)for(let i in e.closest)a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(e.closest[i].x,e.closest[i].y),a.strokeStyle="rgba(156,217,249,"+e.active+")",a.stroke()}function T(e,i,o){let n=this;(function(){n.pos=e||null,n.radius=i||null,n.color=o||null})(),this.draw=function(){n.active&&(a.beginPath(),a.arc(n.pos.x,n.pos.y,n.radius,0,2*Math.PI,!1),a.fillStyle="rgba(156,217,249,"+n.active+")",a.fill())}}function u(e,i){return Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)}})();