"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[797],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"index",title:"Introduction",slug:"/guide/",sidebar_label:"Introduction",sidebar_position:.5,custom_edit_url:null},s="Introduction",p={unversionedId:"guide/index",id:"guide/index",isDocsHomePage:!1,title:"Introduction",description:"The Admin Extension SDK is a NPM library for Shopware 6 apps and plugins which want any easy way to extend or customize the administration.",source:"@site/docs/guide/index.md",sourceDirName:"guide",slug:"/guide/",permalink:"/admin-extension-sdk/docs/guide/",editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"index",title:"Introduction",slug:"/guide/",sidebar_label:"Introduction",sidebar_position:.5,custom_edit_url:null},sidebar:"Guide",next:{title:"Installation",permalink:"/admin-extension-sdk/docs/guide/getting-started/installation"}},u=[{value:"Quick start",id:"quick-start",children:[{value:"App",id:"app",children:[],level:3},{value:"Plugin",id:"plugin",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Admin Extension SDK is a NPM library for Shopware 6 apps and plugins which want any easy way to extend or customize the administration."),(0,a.kt)("p",null,"It contains helper functions to communicate to the Admin, execute actions, subscribing data or extending the user interface."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfd7\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Works for Shopware 6 Apps and Plugins:")," you can use the SDK for your plugins or apps. The API usage is identical."),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfa2\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Low learning curve:")," you don't need to have knowledge about the internal of the Shopware 6 admin. The SDK hides the complicated stuff behind beautiful API."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\uddf0\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Many extension capabilities:")," from throwing notifications, accessing context information or extending the current UI. The feature set of the SDK will grow more and more. This gives you more possibilities and flexibility for your ideas and solutions."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udea8\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Stable API with great backward compatibility:")," don't fear Shopware updates. Breaking changes in this SDK are the exception. If you use it then your Apps and Plugins will stay stable for a long time. Without code maintenance."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udded\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Type safety:")," the whole SDK is written in TypeScript. This provides you great autocompletion support and more safety for your Apps and Plugins."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc99\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Developer experience:")," get a great development experience from the beginning. And it will be improved more and more in the future."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udeb6\xa0\xa0",(0,a.kt)("strong",{parentName:"li"},"Lightweight:")," the whole library is completely tree-shakable, dependency-free and every functionality can be imported granularly so that your bundle stays small and fast.")),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"Understand the Shopware Extension SDK in ",(0,a.kt)("strong",{parentName:"p"},"5 minutes")," by playing."),(0,a.kt)("p",null,"The requirements for this quick start are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.shopware.com/docs/guides/installation"},"development Shopware 6 instance")," or a ",(0,a.kt)("a",{parentName:"li",href:"https://www.shopware.com/en/products/shopware-cloud/"},"Shopware 6 cloud instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.shopware.com/docs/guides/plugins/overview"},"clean Shopware 6 Plugin or App")," which is activated")),(0,a.kt)("h3",{id:"app"},"App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a HTML file with following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <script src="https://unpkg.com/@shopware-ag/admin-extension-sdk/cdn"><\/script>\n\n  <script>\n    sw.notification.dispatch({\n      title: \'My first notification\',\n      message: \'This was really easy to do\'\n    })\n  <\/script>\n</body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the link to the webpage to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.shopware.com/docs/guides/plugins/apps/app-base-guide#manifest-file"},"manifest.xml")," of your App. For local files you can use ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," to create a public URL for your HTML file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the Administration. After you logged in you should see the notification from your app."))),(0,a.kt)("p",null,"Congratulation \ud83c\udf89 You just create your first interaction with the Admin via the Admin Extension SDK."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice:")," Plugins are only working on self-hosted instances. You can't use the Shopware 6 cloud instance for plugins."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new ",(0,a.kt)("inlineCode",{parentName:"li"},"index.html")," file to your new plugin in the following path: ",(0,a.kt)("inlineCode",{parentName:"li"},"custom/plugins/yourPlugin/src/Resources/app/administration/index.html"),". The HTML file should contain the following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <script src="https://unpkg.com/@shopware-ag/admin-extension-sdk/cdn"><\/script>\n\n  <script>\n    sw.notification.dispatch({\n      title: \'My first notification\',\n      message: \'This was really easy to do\'\n    })\n  <\/script>\n</body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start the Shopware 6 Administration Watcher with the following command: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./psh.phar administration:watch\n")),(0,a.kt)("p",null,"After compiling all files a new browser window should be opened. There you should see the Administration. After logging in you should see the notification from your plugin."),(0,a.kt)("p",null,"Congratulation \ud83c\udf89 You just create your first interaction with the Admin via the Admin Extension SDK."))}d.isMDXComponent=!0}}]);