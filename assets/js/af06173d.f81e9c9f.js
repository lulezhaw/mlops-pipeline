"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[6310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="User Guide",p={unversionedId:"user-guide/welcome",id:"user-guide/welcome",title:"User Guide",description:"Warning: The dataset must be pushed to the pipeline's data repo before running the pipeline.",source:"@site/docs/user-guide/welcome.md",sourceDirName:"user-guide",slug:"/user-guide/welcome",permalink:"/mlops-pipeline/docs/user-guide/welcome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/welcome.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/mlops-pipeline/docs/category/user-guide"},next:{title:"Developer Guide",permalink:"/mlops-pipeline/docs/category/developer-guide"}},u={},c=[],l={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-guide"},"User Guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," The dataset must be pushed to the pipeline's data repo before running the pipeline."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important:")," The user must adhere to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker_model.py")," file."))}d.isMDXComponent=!0}}]);