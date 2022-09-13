"use strict";(self.webpackChunkbobadocs=self.webpackChunkbobadocs||[]).push([[282],{5318:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return r?o.createElement(g,i(i({ref:t},m),{},{components:r})):o.createElement(g,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(5773),n=(r(7378),r(5318));const a={},i="Recommended Tools",s={unversionedId:"engineering/knowledge-base/recommended-tools",id:"engineering/knowledge-base/recommended-tools",title:"Recommended Tools",description:"While there is no obligation to use these tools, here's a rundown of the editor many contributors prefer and some resources to make it work more smoothly for you - both in general, and with BobaBoard in particular.",source:"@site/docs/engineering/knowledge-base/recommended-tools.md",sourceDirName:"engineering/knowledge-base",slug:"/engineering/knowledge-base/recommended-tools",permalink:"/docs/engineering/knowledge-base/recommended-tools",draft:!1,editUrl:"https://github.com/essential-randomness/bobadocs/edit/main/docs/engineering/knowledge-base/recommended-tools.md",tags:[],version:"current",frontMatter:{},sidebar:"engineering",previous:{title:"Caching",permalink:"/docs/engineering/knowledge-base/caching"},next:{title:"legacy-overview",permalink:"/docs/engineering/legacy-pages/legacy-overview"}},l={},c=[{value:"Recommended Editor",id:"recommended-editor",level:2},{value:"Recommended VSCode Extensions",id:"recommended-vscode-extensions",level:3}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recommended-tools"},"Recommended Tools"),(0,n.kt)("p",null,"While there is no obligation to use these tools, here's a rundown of the editor many contributors prefer and some resources to make it work more smoothly for you - both in general, and with BobaBoard in particular. "),(0,n.kt)("h2",{id:"recommended-editor"},"Recommended Editor"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode"),". Basically the modern standard for code editors. Great code completion, GitHub integration, and Typescript working out of the box."),(0,n.kt)("h3",{id:"recommended-vscode-extensions"},"Recommended VSCode Extensions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},(0,n.kt)("strong",{parentName:"a"},"ESLint")),": ESLint will automatically warn you when you use JavaScript/React constructs that are wrong or prone to errors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},(0,n.kt)("strong",{parentName:"a"},"Prettier")),": Prettier automatically formats your code to follow the standards of the BobaBoard codebase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-languageserver"},(0,n.kt)("strong",{parentName:"a"},"Styled-JSX Language Server"))," & ",(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-syntax"},(0,n.kt)("strong",{parentName:"a"},"Styled-JSX Syntax Highlighting")),": Enable CSS highlighting and autocompletion for BobaBoard's CSS library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"},(0,n.kt)("strong",{parentName:"a"},"Visual Studio Intellicode")),": Get good typescript code suggestions with AI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=amatiasq.sort-imports"},(0,n.kt)("strong",{parentName:"a"},"Sort Imports")),": Automatically sorts JavaScript imports in a consistent order.")))}d.isMDXComponent=!0}}]);