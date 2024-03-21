(()=>{"use strict";var n={133:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),s=t(417),c=t.n(s),d=new URL(t(287),t.b),l=a()(i()),u=c()(d);l.push([n.id,`* {\n  box-sizing: border-box !important;\n}\n\nbody {\n  font-size: 14px;\n  background-color: #222222;\n  color: #fff;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#app {\n  padding-bottom: 48px;\n}\n\n*:focus {\n  outline: none;\n}\n.item-view,\n.item-test {\n  width: 100%;\n}\n\n.item-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.item-view h2 {\n  font-size: 2rem;\n  font-weight: bold;\n  user-select: none;\n}\n\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\n\n.item-list {\n  display: grid;\n  margin: 48px 0;\n  grid-template-columns: repeat(4, 180px);\n  grid-column-gap: 160px;\n  grid-row-gap: 48px;\n}\n\n.item-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-thumbnail {\n  border-radius: 8px;\n  width: 180px;\n  height: 270px;\n  background-size: contain;\n}\n\n.item-title {\n  margin-top: 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.item-score {\n  margin-top: 16px;\n  font-size: 1.2rem;\n}\n\n.item-score::after {\n  margin-left: 8px;\n}\n\n.item-title.skeleton::after,\n.item-score.skeleton::after {\n  font-size: 0;\n  content: "loading";\n}\n\n.full-width {\n  width: 100%;\n}\n\n.last-item {\n  margin-top: 48px;\n}\n\nbutton.btn {\n  border: 0;\n  border-radius: 8px;\n  height: 30px;\n  color: #fff;\n}\n\nbutton.primary {\n  background: #f33f3f;\n}\n\n.item-card .skeleton {\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n  background-size: 400%;\n  animation: skeleton-animation 5s infinite ease-out;\n  border-radius: 8px;\n}\n\n@keyframes skeleton-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\nheader {\n  width: 100%;\n  min-width: 1200px;\n  height: 72px;\n  background-color: #222;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid white;\n  margin-bottom: 48px;\n}\n\nheader h1 {\n  cursor: pointer;\n  user-select: none;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: -0.1rem;\n  color: #f33f3f;\n}\n\nheader > .search-box {\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n\nheader .search-box > input {\n  border: 0;\n}\n\nheader .search-box > .search-button {\n  width: 14px;\n  border: 0;\n  text-indent: -1000rem;\n  background: url(${u}) transparent no-repeat 0 1px;\n  background-size: contain;\n}\n\n.empty-result {\n  width: 100%;\n  height: 50vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 1.2rem;\n  line-height: 24px;\n}\n\n.hidden {\n  display: none;\n}\n`,""]);const h=l},773:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var h=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=i(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},287:(n,e,t)=>{n.exports=t.p+"f1bd4269f4446ceae306.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),i=t.n(r),o=t(659),a=t.n(o),s=t(56),c=t.n(s),d=t(540),l=t.n(d),u=t(113),h=t.n(u),p=t(773),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;var f=t(133),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),e()(f.A,v),f.A&&f.A.locals&&f.A.locals,t.p;const g=t.p+"6328741810b732410eec.png",b=t.p+"2e162b4fefb34cd7ed8d.png";t(287);const y=n=>document.querySelector(n);class x{constructor(n,e){this.$target=n,this.props=e,this.initializeState(),this.render(),this.setEvent()}getTemplate(){return""}setEvent(){}createChild(){}render(){this.$target.innerHTML=this.getTemplate(),this.createChild()}initializeState(){}setState(n){this.state=n}}const w=class extends x{constructor(){super(...arguments),this.formElement=y("#search-form")}getTemplate(){return`\n      <h1 id="logo"><img src="${b}" alt="MovieList 로고" /></h1>\n      <div class="search-box">\n          <input id="search-input" type="text" name="search-input" placeholder="검색" required/>\n          <button id="search-button" type="submit" class="search-button">검색</button>\n      </div>\n    `}resetSearchForm(){this.formElement&&this.formElement.reset()}setEvent(){var n,e;if(!this.props)return;const{onLogoClick:t,onSearchKeywordSubmit:r}=this.props;null===(n=y("#logo"))||void 0===n||n.addEventListener("click",(()=>{t(),this.resetSearchForm()}));const i=y("#search-input");null==i||i.addEventListener("keydown",(n=>{n instanceof KeyboardEvent&&"Enter"===n.key&&r(i.value)})),null===(e=y("#search-button"))||void 0===e||e.addEventListener("click",(()=>{i&&r(i.value)}))}},k=(n=20)=>'\n    <li class="item-skeleton">\n      <a href="#">\n        <div class="item-card">\n          <div class="item-thumbnail skeleton"></div>\n          <div class="item-title skeleton"></div>\n          <div class="item-score skeleton"></div>\n        </div>\n      </a>\n    </li>'.repeat(n);const E=new class{constructor(n){this.MOVIE_API_END_POINT={popular:n=>`movie/popular?language=ko-KR&page=${n}`,search:(n,e)=>`search/movie?query=${e}&include_adult=false&language=ko-KR&page=${n}`},this.BASE_URL=n}decideEndPoint(n,e){return""===e?this.MOVIE_API_END_POINT.popular(n):this.MOVIE_API_END_POINT.search(n,e)}handleResponseStatus(n){if(200!==n)switch(n){case 401:throw new Error("유효하지 않은 access_token 입니다. 재설정 후, 다시 요청해주세요.");case 403:throw new Error("해당 컨텐츠에 대한 접근 권한이 없습니다.");case 404:throw new Error("요청한 컨텐츠를 찾을 수 없습니다. 요청 URL을 다시 확인해주세요.");case 500:throw new Error("서버에서 알 수 없는 문제가 발생했습니다.");case 503:throw new Error("서버가 컨텐츠를 보여줄 준비가 되지 않았습니다.")}}get(n,e){return t=this,r=void 0,o=function*(){const t=this.decideEndPoint(n,e),r=yield fetch(`${this.BASE_URL}/${t}`,{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDk3OGYxYjdmZWRhZWIyMmYwNDEzMWFlN2UwN2RmNSIsInN1YiI6IjY1Zjg2NDZlYTZmZGFhMDE0YTZkNzAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qdg8U-LaZhQeEljaO5uQOL4nV79PWxxCHELhDoa2IjI"}});return this.handleResponseStatus(r.status),r.json()},new((i=void 0)||(i=Promise))((function(n,e){function a(n){try{c(o.next(n))}catch(n){e(n)}}function s(n){try{c(o.throw(n))}catch(n){e(n)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(n){n(t)}))).then(a,s)}c((o=o.apply(t,r||[])).next())}));var t,r,i,o}}("https://api.themoviedb.org/3");class M extends x{initializeState(){this.state={currentPage:0,searchKeyword:""}}getTemplate(){return'\n      <h2 id="main-text">지금 인기 있는 영화</h2>\n      <div id="movie-list">\n        <ul id="movie-list-container" class="item-list">\n        </ul>\n      </div>\n      <div id="empty-result" class="empty-result hidden"></div>\n      <button id="next-button" class="btn primary full-width">더 보기</button>\n    '}render(){this.$target.innerHTML=this.getTemplate(),this.handleRenderMovieList()}hideEmptyResult(){const n=y("#empty-result");n&&(n.classList.add("hidden"),n.innerText="")}renderEmptyResult(){var n;const e=y("#empty-result");if(!e)return;null==e||e.classList.remove("hidden");const t=`${null===(n=this.state)||void 0===n?void 0:n.searchKeyword} 에 대한 검색 결과가 존재하지 않아요..😅\n정확한 검색어를 다시 입력해주세요`;e.innerText=t}renderMovies(n){const e=y("#movie-list-container");e&&(n.length<1?this.renderEmptyResult():(this.hideEmptyResult(),n.forEach((n=>{const{id:t,title:r,backdrop_path:i,vote_average:o}=n,a=(({id:n,title:e,backdrop_path:t,vote_average:r})=>{const i=document.createElement("li");return i.id=String(n),i.innerHTML=`\n    <a href="#">\n      <div class="item-card">\n        <img\n        class="item-thumbnail"\n        src="https://image.tmdb.org/t/p/w220_and_h330_face/${t}"\n        loading="lazy"\n        alt="${e}"\n        />\n        <p class="item-title">${e}</p>\n        <p class="item-score">\n        <img src="${g}" alt="별점" /> ${r.toFixed(1)}\n        </p>\n      </div>\n    </a> \n`,i})({id:t,title:r,backdrop_path:i,vote_average:o});e.append(a)}))))}toggleMainText(n=""){const e=y("#main-text");e&&(e.innerText=""===n?"지금 인기 있는 영화":`"${n}" 검색 결과`)}resetCurrentMovieList(){const n=y("#movie-list-container");n&&(n.innerHTML="")}handleRenderMovieList(){(()=>{const n=y("#movie-list-container"),e=document.createElement("ul");e.id="skeleton-list",e.className="item-list",e.innerHTML=k(),n&&n.appendChild(e)})(),this.getNextPage().then((n=>{n&&this.renderMovies(n.results)})).catch((n=>{n instanceof Error&&alert(n.message)})).finally((()=>{(()=>{var n;const e=y("#skeleton-list");e&&(null===(n=e.parentNode)||void 0===n||n.removeChild(e))})()}))}handleRemoveMoreButton(){if(!this.state||this.state.currentPage<10)return;const n=y("#next-button");n&&n.remove()}updateCurrentPage(){this.state&&(this.setState(Object.assign(Object.assign({},this.state),{currentPage:this.state.currentPage+1})),this.handleRemoveMoreButton())}getNextPage(){return n=this,e=void 0,r=function*(){if(this.updateCurrentPage(),!this.state)return;const{currentPage:n,searchKeyword:e}=this.state;return yield E.get(n,e)},new((t=void 0)||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,t,r}setEvent(){const n=y("#next-button");null==n||n.addEventListener("click",(()=>{this.handleRenderMovieList()}))}handleSearchMovie(n){this.toggleMainText(n),this.setState({currentPage:0,searchKeyword:n}),this.resetCurrentMovieList(),this.handleRenderMovieList()}handleResetMovieList(){this.toggleMainText(),this.setState({currentPage:0,searchKeyword:""}),this.resetCurrentMovieList(),this.handleRenderMovieList()}}const L=y("#app");L&&new class extends x{getTemplate(){return'\n      <header></header>\n      <main>\n        <section class="item-view">\n        </section>\n      </main>\n    '}createChild(){const n=y("header"),e=y(".item-view");if(e){const t=new M(e);n&&new w(n,{onLogoClick:t.handleResetMovieList.bind(t),onSearchKeywordSubmit:t.handleSearchMovie.bind(t)})}}}(L)})()})();