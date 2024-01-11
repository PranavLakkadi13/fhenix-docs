"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[9186],{1733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(5893),r=n(1151),o=n(4866),i=n(5162);const l={description:"How to set up a development environment for Fhenix"},s="Setting Up",c={id:"tutorial/Basic/Setting-Up",title:"Setting Up",description:"How to set up a development environment for Fhenix",source:"@site/docs/tutorial/Basic/Setting-Up.mdx",sourceDirName:"tutorial/Basic",slug:"/tutorial/Basic/Setting-Up",permalink:"/fhenix-docs/docs/tutorial/Basic/Setting-Up",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/tutorial/Basic/Setting-Up.mdx",tags:[],version:"current",frontMatter:{description:"How to set up a development environment for Fhenix"},sidebar:"tutorialSidebar",previous:{title:"Deploying",permalink:"/fhenix-docs/docs/tutorial/Basic/Deploying"},next:{title:"Writing the Contract",permalink:"/fhenix-docs/docs/tutorial/Basic/Writing-The-Contract"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Prerequisites",id:"installing-prerequisites",level:4},{value:"Installation",id:"installation",level:3},{value:"Set up from Template Project",id:"set-up-from-template-project",level:4},{value:"LocalFhenix",id:"localfhenix",level:3},{value:"Alternative - Gitpod",id:"alternative---gitpod",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"setting-up",children:"Setting Up"}),"\n",(0,a.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["In this guide we'll be using ",(0,a.jsx)(t.code,{children:"git"}),", ",(0,a.jsx)(t.code,{children:"make"})," and ",(0,a.jsx)(t.code,{children:"docker, typescript"})," and ",(0,a.jsx)(t.code,{children:"pnpm"}),".   Installing these is usually pretty straightforward, but here's some helpful instructions if you need them"]}),"\n",(0,a.jsx)(t.h4,{id:"installing-prerequisites",children:"Installing Prerequisites"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(i.Z,{value:"macos",label:"MacOS",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# install git and make\nbrew install git make\n# Installing node through Homebrew\nbrew install node\nnpm install -g pnpm\n"})})}),(0,a.jsx)(i.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# update package list\nsudo apt update\n\nsudo apt install git make\n\ncurl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh\nsudo bash /tmp/nodesource_setup.sh\nsudo apt install nodejs\n\nsudo npm install -g pnpm\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h4,{id:"set-up-from-template-project",children:"Set up from Template Project"}),"\n",(0,a.jsxs)(t.p,{children:["First, let's clone our template project. Go to our ",(0,a.jsx)(t.a,{href:"https://github.com/FhenixProtocol/hardhat-template",children:"hardhat template repo"}),' and click "use this template". Choose your new project name and set up a repository.']}),"\n",(0,a.jsx)(t.p,{children:"Next, clone the repository or open a cloud-based workspace."}),"\n",(0,a.jsx)(t.p,{children:"Now, we'll set up the .env file, that contains the mnemonics for the keys that we will use for testing and deployment."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Careful",type:"danger",children:(0,a.jsx)(t.p,{children:"We provide example mnemonics that can be used for testing, but highly recommend changing them for usage outside LocalFhenix"})}),"\n",(0,a.jsx)(t.p,{children:"Lastly, we'll also want to install all the dependencies for the environment using"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm install\n"})}),"\n",(0,a.jsx)(t.h3,{id:"localfhenix",children:"LocalFhenix"}),"\n",(0,a.jsxs)(t.p,{children:["For development we recommend using LocalFhenix as a testing tool (",(0,a.jsx)(t.em,{children:"pretty please hardhat network support one day"}),"). LocalFhenix is a complete Fhenix devnet and ecosystem containerized with Docker. It is similar to Ganache, and we'll use it to test our code during development."]}),"\n",(0,a.jsx)(t.p,{children:"To start LocalFhenix, use the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm start:localfhenix\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you want to learn more about this tool, check out our ",(0,a.jsx)(t.a,{href:"#localfhenix",children:"LocalFhenix Documentation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"If you want more control over the docker image being executed, you can manually execute and customize the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker run -it -p 8545:8545 -p 6000:6000 -p 5000:5000 \\\n  --name localfhenix ghcr.io/fhenixprotocol/fhenix-devnet:0.1.6\n"})}),"\n",(0,a.jsx)(t.h3,{id:"alternative---gitpod",children:"Alternative - Gitpod"}),"\n",(0,a.jsx)(t.p,{children:"If you're more of a cloud-based developer, you can skip all the installation steps and work directly with our Gitpod environment. This environment includes a LocalFhenix instance and all the tools you need to dive in."}),"\n",(0,a.jsxs)(t.p,{children:["You can run an instance of LocalFhenix in Gitpod by ",(0,a.jsx)(t.a,{href:"https://gitpod.io/#https://github.com/scrtlabs/GitpodLocalSecret",children:"clicking here"}),", or by clicking the gitpod button in the repository you cloned previously."]}),"\n",(0,a.jsx)(t.p,{children:"The Gitpod environment comes with everything pre-installed and set up, so you can jump right in!"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(512);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(512),o=n(2466),i=n(6550),l=n(469),s=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);