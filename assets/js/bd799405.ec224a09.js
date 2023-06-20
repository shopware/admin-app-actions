"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Get",d={unversionedId:"guide/api-reference/data/get",id:"guide/api-reference/data/get",title:"Get",description:"With data.get you can receive datasets from the Shopware administration.",source:"@site/docs/guide/2_api-reference/data/get.md",sourceDirName:"guide/2_api-reference/data",slug:"/guide/api-reference/data/get",permalink:"/admin-extension-sdk/docs/guide/api-reference/data/get",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Tabs",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/tabs"},next:{title:"Repository",permalink:"/admin-extension-sdk/docs/guide/api-reference/data/repository"}},s={},c=[{value:"Usage:",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get"},"Get"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"data.get")," you can receive datasets from the Shopware administration.\nMore information on how to find the unique identifiers can be found in ",(0,a.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/guide/internals/datahandling"},"this guide"),"."),(0,a.kt)("p",null,"Compared to data.subscribe, data.get only gives you the current state of the data. If the data is not available yet,\nsuch as when opening a page, you won't receive any data. In these cases, it's better to subscribe to data changes instead."),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"data.get({\n    id: 'sw-product-detail__product',\n    selectors: ['name', 'manufacturer.name'],\n}).then((data) => {\n    console.log(data);\n});\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Options containing the unique ",(0,a.kt)("inlineCode",{parentName:"td"},"id")," and optional ",(0,a.kt)("inlineCode",{parentName:"td"},"selectors")," for minimizing the payload and needed privileges")))))}p.isMDXComponent=!0}}]);