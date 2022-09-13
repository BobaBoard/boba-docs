"use strict";(self.webpackChunkbobadocs=self.webpackChunkbobadocs||[]).push([[6031],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(5773),a=(n(7378),n(5318));const r={sidebar_position:1},o="Identity Management",s={unversionedId:"product/features/identities/identity-management",id:"product/features/identities/identity-management",title:"Identity Management",description:"This documentation and design are a WIP!",source:"@site/docs/product/features/identities/identity-management.md",sourceDirName:"product/features/identities",slug:"/product/features/identities/identity-management",permalink:"/docs/product/features/identities/identity-management",draft:!1,editUrl:"https://github.com/essential-randomness/bobadocs/edit/main/docs/product/features/identities/identity-management.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"product",previous:{title:"Roadmap",permalink:"/docs/product/roadmap"},next:{title:"BobaDex",permalink:"/docs/product/features/identities/bobadex"}},d={},l=[{value:"Benefits",id:"benefits",level:2},{value:"Identities can be managed as independent entities.",id:"identities-can-be-managed-as-independent-entities",level:3},{value:"Fine-grained data access",id:"fine-grained-data-access",level:3},{value:"User identities can be optional",id:"user-identities-can-be-optional",level:3},{value:"Identities can be shared across different users",id:"identities-can-be-shared-across-different-users",level:3},{value:"Creating Identities",id:"creating-identities",level:2},{value:"Managing Identities",id:"managing-identities",level:2},{value:"Anonymous Boards/Realms",id:"anonymous-boardsrealms",level:3},{value:"Non-Anonymous Boards/Realms",id:"non-anonymous-boardsrealms",level:3},{value:"Revealing Identities",id:"revealing-identities",level:2},{value:"Identity Data Management",id:"identity-data-management",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"identity-management"},"Identity Management"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This documentation and design are a WIP!")),(0,a.kt)("p",null,"Identity management is one of the mechanisms that set BobaBoard apart from other social networks. In particular, rather than surfacing\n",(0,a.kt)("inlineCode",{parentName:"p"},"user data")," in its APIs, BobaBoard surfaces ",(0,a.kt)("inlineCode",{parentName:"p"},"identity data"),"."),(0,a.kt)("h2",{id:"benefits"},"Benefits"),(0,a.kt)("p",null,"Decoupling ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," from the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," allows for the following benefits:"),(0,a.kt)("h3",{id:"identities-can-be-managed-as-independent-entities"},"Identities can be managed as independent entities."),(0,a.kt)("p",null,"By default, there is no world-visible connection between ",(0,a.kt)("inlineCode",{parentName:"p"},"Identities")," belonging to the same user account. These connections can, however, be revealed to other users through the ",(0,a.kt)("a",{parentName:"p",href:"#revealing-identities"},"Identity Reveal System"),"."),(0,a.kt)("h3",{id:"fine-grained-data-access"},"Fine-grained data access"),(0,a.kt)("p",null,"A user can maintain multiple, separate ",(0,a.kt)("inlineCode",{parentName:"p"},"Identities")," on a single account. Each of these ",(0,a.kt)("inlineCode",{parentName:"p"},"Identities")," can be used across different ",(0,a.kt)("inlineCode",{parentName:"p"},"Realms"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Boards")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"."),(0,a.kt)("p",null,"Users can independently decide which ",(0,a.kt)("inlineCode",{parentName:"p"},"Realm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Board"),"(?) or ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," has access to each ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity"),"'s activity and data. Users can also choose to\nselectively reveal which identities belong to the same ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,a.kt)("h3",{id:"user-identities-can-be-optional"},"User identities can be optional"),(0,a.kt)("p",null,"A user can choose not to reveal ",(0,a.kt)("em",{parentName:"p"},"any")," identity data on ",(0,a.kt)("inlineCode",{parentName:"p"},"Realms")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Boards")," that support ",(0,a.kt)("inlineCode",{parentName:"p"},"Anonymity"),"."),(0,a.kt)("h3",{id:"identities-can-be-shared-across-different-users"},"Identities can be shared across different users"),(0,a.kt)("p",null,"While this feature isn't currently designed (or planned), the separation of identities theoretically allows the same ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," to be associated\nwith separate accounts."),(0,a.kt)("h2",{id:"creating-identities"},"Creating Identities"),(0,a.kt)("admonition",{type:"TODO"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature still in the design phase!")," More information will be available in the future.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When a friendship relationship is present, the current implementation reveals the ",(0,a.kt)("inlineCode",{parentName:"p"},"user data")," rather than the data of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity"),"\nassociated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),". Fixing this should be trivial once the design is finalized.")),(0,a.kt)("h2",{id:"managing-identities"},"Managing Identities"),(0,a.kt)("h3",{id:"anonymous-boardsrealms"},"Anonymous Boards/Realms"),(0,a.kt)("p",null,"When a ",(0,a.kt)("inlineCode",{parentName:"p"},"Realm")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Board")," supports anonymity, BobaBoard randomly selects an ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," to associate with the user's activity. You can read more\nabout anonymous identity selection in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/product/features/identities/bobadex"},"BobaDex page"),"."),(0,a.kt)("h3",{id:"non-anonymous-boardsrealms"},"Non-Anonymous Boards/Realms"),(0,a.kt)("admonition",{type:"TODO"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature still in the design phase!")," More information will be available in the future.")),(0,a.kt)("admonition",{type:"OPEN QUESTION"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"How does the user decide which identity to join the board/realm with? When do they make the decision?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How does this work in Realms that allow both personal and multiple identities?"))),(0,a.kt)("li",{parentName:"ul"},"Can a user join a Realm with multiple identities? Are there pitfalls in allowing them to do so?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WARNING:")," Not allowing this possibility creates a danger of identity connection.",(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("div",null,"Alice asks Bob to join their Realm with a specific identity. Bob has already joined the Realm with a different one, and is unable to do accept Alice's request. Alice can now infer that one of the identities already in the Realm belongs to Bob."))))))),(0,a.kt)("h2",{id:"revealing-identities"},"Revealing Identities"),(0,a.kt)("admonition",{type:"TODO"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature still in the design phase!")," More information will be available in the future.")),(0,a.kt)("p",null,"While the codebase already accounts for this system, the exact mechanics governing identity reveal are not currently defined."),(0,a.kt)("p",null,"In the current setup, personal identity is revealed to users with a ",(0,a.kt)("inlineCode",{parentName:"p"},"friends")," relationship in the database. No mechanism to create a friendship\nis available in the API."),(0,a.kt)("h3",{id:"identity-data-management"},"Identity Data Management"),(0,a.kt)("admonition",{type:"OPEN QUESTION"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"How do we decide which subset of the identity data is available to who?"),(0,a.kt)("li",{parentName:"ul"},"How do we allow users to not repeat the same information over and over for which identity?"))),(0,a.kt)("admonition",{type:"TODO"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature still in the design phase!")," More information will be available in the future.")))}m.isMDXComponent=!0}}]);