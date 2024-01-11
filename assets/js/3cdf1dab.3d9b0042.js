"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[87],{1414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(5893),i=n(1151);const o={},r="Hardhat",l={id:"devdocs/Setting Up Your Environment/Hardhat",title:"Hardhat",description:"Prerequisites",source:"@site/docs/devdocs/Setting Up Your Environment/Hardhat.md",sourceDirName:"devdocs/Setting Up Your Environment",slug:"/devdocs/Setting Up Your Environment/Hardhat",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Setting Up Your Environment/Hardhat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Gitpod",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Gitpod"},next:{title:"Remix",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Remix"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone Hardhat Template",id:"clone-hardhat-template",level:2},{value:"Start LocalFhenix",id:"start-localfhenix",level:3},{value:"Want to run LocalFhenix without the template?",id:"want-to-run-localfhenix-without-the-template",level:4},{value:"Faucet",id:"faucet",level:3},{value:"Want to call the faucet manually?",id:"want-to-call-the-faucet-manually",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"hardhat",children:"Hardhat"}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"LocalFhenix is a complete Fhenix devnet and ecosystem containerized with Docker. It simplifies the way contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet - similar to Ganache, or other local network environments."}),"\n",(0,a.jsx)(t.p,{children:"LocalFhenix comes preconfigured with opinionated, sensible (hopefully) defaults for standard testing environments."}),"\n",(0,a.jsx)(t.h2,{id:"clone-hardhat-template",children:"Clone Hardhat Template"}),"\n",(0,a.jsxs)(t.p,{children:['We provide a hardhat template available that comes "batteries included", with everything you need to hit the ground running. The template is ',(0,a.jsx)(t.a,{href:"https://github.com/fhenixprotocol/hardhat-template",children:"available here"}),". You can create a new repository, or clone it locally:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone https://github.com/fhenixprotocol/hardhat-template\n"})}),"\n",(0,a.jsx)(t.p,{children:"You'll also probably want to set an .env file with your mnemonics:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cp .env.example .env\n"})}),"\n",(0,a.jsx)(t.h3,{id:"start-localfhenix",children:"Start LocalFhenix"}),"\n",(0,a.jsx)(t.p,{children:"Start the local dev environment in a separate tab using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"pnpm start:localfhenix\n"})}),"\n",(0,a.jsx)(t.p,{children:"Note that you can run LocalFhenix without using the template directly as a docker image using the command"}),"\n",(0,a.jsx)(t.h4,{id:"want-to-run-localfhenix-without-the-template",children:"Want to run LocalFhenix without the template?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker run -it -p 8545:8545 -p 6000:6000 \\\n  --name localfhenix ghcr.io/fhenixprotocol/fhenix-devnet:0.1.6\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"In this example port 8545 will be exposed as the JSON-RPC port, and port 6000 is used for the built-in faucet"})}),"\n",(0,a.jsxs)(t.p,{children:["You've now officially created a local Fhenix devnet with chain-id ",(0,a.jsx)(t.code,{children:"5432"}),". \ud83c\udf89"]}),"\n",(0,a.jsx)(t.h3,{id:"faucet",children:"Faucet"}),"\n",(0,a.jsx)(t.p,{children:"To start developing on LocalFhenix, we'll need to send some FHE to a new address. For this, we can use the built-in faucet."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm faucet\n"})}),"\n",(0,a.jsx)(t.h4,{id:"want-to-call-the-faucet-manually",children:"Want to call the faucet manually?"}),"\n",(0,a.jsx)(t.p,{children:"The faucet sends 100 FHE every call. The pnpm command uses the mnemonics from your .env file. If you want to use a different address, you can directly call the faucet API:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl "http://localhost:3000/faucet?address=${ADDRESS}"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);