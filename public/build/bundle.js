var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function g(t){m=t}const p=[],h=[],v=[],$=[],y=Promise.resolve();let x=!1;function b(t){v.push(t)}let k=!1;const w=new Set;function _(){if(!k){k=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];g(e),M(e.$$)}for(g(null),p.length=0;h.length;)h.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];w.has(e)||(w.add(e),e())}v.length=0}while(p.length);for(;$.length;)$.pop()();x=!1,k=!1,w.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const T=new Set;function E(t,e){t&&t.i&&(T.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push(()=>{T.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function A(t){t&&t.c()}function L(t,n,r){const{fragment:i,on_mount:l,on_destroy:a,after_update:c}=t.$$;i&&i.m(n,r),b(()=>{const n=l.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(b)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(p.push(t),x||(x=!0,y.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,s,r,i,l,c,u=[-1]){const f=m;g(e);const d=s.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(p.ctx=r?r(e,d,(t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&H(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();s.intro&&E(e.$$.fragment),L(e,s.target,s.anchor),_()}g(f)}class C{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(e){let n,s,r,m,g,p,h,v,$,y,x,b;return{c(){n=c("about"),s=c("div"),r=c("section"),r.innerHTML='<h2>Who i am?</h2> \n\t\t\t\t<p>Hello friend! My name is Sergio Posse, im a simple guy interested by every kind of programming but experienced in web development. In my free time i play the guitar and write music, i like experimental or underground bands that blows your mind! Check my \n\t\t\t\t\t<a style="z-index:120;color:#F2E6FC;" target="_blank" href="https://soundcloud.com/kumikobox" class="svelte-1gfomlx">Soundcloud</a> if you feel curious.</p>',m=u(),g=c("section"),g.innerHTML='<h2>Formation</h2> \n\t\t\t\t\t<img alt="graduatedImage" class="img-fluid svelte-1gfomlx" src="/images/graduated.png"/> \n\t\t\t\t\t<strong class="svelte-1gfomlx">High School:</strong><p class="svelte-1gfomlx">IPEM 259 Ambrosio Olmos - INDUSTRIAL (graduated as metalworking speciality)</p> \n\t\t\t\t\t\t<strong class="svelte-1gfomlx">Tertiary Studies:</strong><p class="svelte-1gfomlx">ITec Instituto Tecnológico Río Cuarto (graduated as Superior techichian in soft development)</p>',p=u(),h=c("div"),v=c("section"),v.innerHTML='<h2>Working Experience</h2> \n\t\t\t\t<img alt="programmerImage" class="img-fluid svelte-1gfomlx" src="/images/work.png"/> \n\n\t\t\t\t<p class="svelte-1gfomlx">Practices when i was studying, like scrum simulations, QA Testing and frontend/backend basics</p> \n\t\t\t\t\t<p class="svelte-1gfomlx">Amateur projects for friends and family</p>',$=u(),y=c("section"),y.innerHTML="<h2>Main skills</h2> \n\t\t\t\t<p>Global vision - Selflearning - Modeling (UML) - Control versioning (Git) - Operative Systems &amp; Virtual Machines config - Hardware - UX Design (Figma)</p>",d(r,"class","card-simple svelte-1gfomlx"),d(g,"class","card-over svelte-1gfomlx"),d(s,"class","row svelte-1gfomlx"),d(v,"class","card-over svelte-1gfomlx"),d(y,"class","card-simple svelte-1gfomlx"),d(h,"class","row svelte-1gfomlx"),d(n,"class","about svelte-1gfomlx")},m(t,o){l(t,n,o),i(n,s),i(s,r),e[3](r),i(s,m),i(s,g),i(n,p),i(n,h),i(h,v),i(h,$),i(h,y),e[5](y),x||(b=[f(r,"mousemove",e[4]),f(y,"mousemove",e[6])],x=!0)},p:t,i:t,o:t,d(t){t&&a(n),e[3](null),e[5](null),x=!1,o(b)}}}function O(t,e,n){let o,s;const r=(t,e)=>{let n=t.target.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;"skills"===e&&(o.style.setProperty("--x",r+"px"),o.style.setProperty("--y",i+"px")),"who"===e&&(s.style.setProperty("--x",r+"px"),s.style.setProperty("--y",i+"px"))};return[o,s,r,function(t){h[t?"unshift":"push"](()=>{s=t,n(1,s)})},t=>r(t,"who"),function(t){h[t?"unshift":"push"](()=>{o=t,n(0,o)})},t=>r(t,"skills")]}class F extends C{constructor(t){super(),I(this,t,O,j,r,{})}}function N(e){let n;return{c(){n=c("nav"),n.innerHTML='<div class="about svelte-1viey4b">About</div> \n        <div class="portfolio svelte-1viey4b">Portfolio</div>',d(n,"class","svelte-1viey4b")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class R extends C{constructor(t){super(),I(this,t,null,N,r,{})}}function U(e){let n,o,s,r,f;return o=new R({}),r=new F({}),{c(){n=c("main"),A(o.$$.fragment),s=u(),A(r.$$.fragment),d(n,"class","svelte-fjiu9n")},m(t,e){l(t,n,e),L(o,n,null),i(n,s),L(r,n,null),f=!0},p:t,i(t){f||(E(o.$$.fragment,t),E(r.$$.fragment,t),f=!0)},o(t){S(o.$$.fragment,t),S(r.$$.fragment,t),f=!1},d(t){t&&a(n),P(o),P(r)}}}return new class extends C{constructor(t){super(),I(this,t,null,U,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
