"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[5452],{3094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(5893),r=t(1151);const o={},a="Adding a Web Interface",s={id:"tutorial/Advanced/Adding-a-Web-Interface",title:"Adding a Web Interface",description:"Last but not least, we'll want to have a user interface for our token.&#x20;",source:"@site/docs/tutorial/Advanced/Adding-a-Web-Interface.md",sourceDirName:"tutorial/Advanced",slug:"/tutorial/Advanced/Adding-a-Web-Interface",permalink:"/fhenix-docs/docs/tutorial/Advanced/Adding-a-Web-Interface",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/tutorial/Advanced/Adding-a-Web-Interface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/fhenix-docs/docs/category/advanced"},next:{title:"Testing & Interacting",permalink:"/fhenix-docs/docs/tutorial/Advanced/Testing-and-Interacting"}},c={},l=[{value:"Starting From a Template",id:"starting-from-a-template",level:4},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Get Contracts",id:"get-contracts",level:4},{value:"Compiling Contracts",id:"compiling-contracts",level:4},{value:"Deploying Contracts",id:"deploying-contracts",level:4},{value:"Connecting the Frontend",id:"connecting-the-frontend",level:4},{value:"Okay, Let&#39;s Run this thing!",id:"okay-lets-run-this-thing",level:4},{value:"Side Note: Why Go Through all this?",id:"side-note-why-go-through-all-this",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"adding-a-web-interface",children:"Adding a Web Interface"}),"\n",(0,i.jsx)(n.p,{children:"Last but not least, we'll want to have a user interface for our token. "}),"\n",(0,i.jsxs)(n.p,{children:["We'll look at a prebuilt template, focusing on how everything fits together and how to wire everything together, rather than on actual advanced tutorials on Web3 UI development. The template includes the code for the Wrapped ERC20 contract we wrote in the previous sections and is based off of the ",(0,i.jsx)(n.a,{href:"https://github.com/FhenixProtocol/fhevmjs-vue-template",children:"Vue + fhevmjs template"}),". We use Typescript throughout the example."]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the code for this section in our ",(0,i.jsx)(n.a,{href:"https://github.com/FhenixProtocol/werc20-ui-example",children:"github repo"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"starting-from-a-template",children:"Starting From a Template"}),"\n",(0,i.jsx)(n.p,{children:"First, start by cloning the example repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/FhenixProtocol/werc20-ui-example\n"})}),"\n",(0,i.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd werc20-ui-example && pnpm install\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-contracts",children:"Get Contracts"}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's bring in our contracts. We're using ",(0,i.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules",children:"git submodules"})," to link the repo containing our contracts and our UI:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm get:contracts\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsx)(n.p,{children:"There are many ways to organize contracts and UI - this is just one pattern, so adapt to what you know & like and don't be afraid to experiment!"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you should see the ",(0,i.jsx)(n.code,{children:"contracts"})," folder populated with all the good stuff we created earlier. Feel free to look around and make sure the contract code is updated. If you want to make any changes to the contract code, go ahead."]}),"\n",(0,i.jsx)(n.h4,{id:"compiling-contracts",children:"Compiling Contracts"}),"\n",(0,i.jsx)(n.p,{children:"At the moment our contracts only exist as solidity files. Let's fix that -"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm build:contracts\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will trigger both solidity compilation & building the contracts into typescript files."}),"\n",(0,i.jsx)(n.h4,{id:"deploying-contracts",children:"Deploying Contracts"}),"\n",(0,i.jsxs)(n.p,{children:["We can also deploy our contract. If LocalFhenix isn't running, you can start it using ",(0,i.jsx)(n.code,{children:"pnpm start:localfhenix"})," from the contracts folder."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd contracts\npnpm deploy:contracts --network localfhenix\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Seeing an error? you might be missing tokens for your deployer address. In this case try ",(0,i.jsx)(n.code,{children:"pnpm faucet"})," to get some tokens for localfhenix."]}),"\n",(0,i.jsx)(n.h4,{id:"connecting-the-frontend",children:"Connecting the Frontend"}),"\n",(0,i.jsx)(n.p,{children:"Let's look at why all this is useful to do together with our frontend code. Everything we'll look at is in App.vue."}),"\n",(0,i.jsx)(n.p,{children:"First, we initialize fhevmjs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export default defineComponent({\n    name: 'App',\n    ...\n    setup() {\n        const instance = ref<FhevmInstance | undefined>(undefined);\n        return {instance};\n    },\n    mounted() {\n        let self = this;\n        const initInstance = async () => {\n            await initFhevm();\n            const chainIdHex = await window.ethereum.request({method: 'eth_chainId'});\n            const thisProvider = new ethers.BrowserProvider(window.ethereum)\n    \n            let networkPublicKey = localStorage.getItem('fhepubkey');\n            if (!networkPublicKey || networkPublicKey === \"0x\") {\n                publicKey = await thisProvider.call({from: null, to: '0x0000000000000000000000000000000000000044'});\n                if (publicKey) {\n                    // cache global public key - should change it to be per chain-id\n                    localStorage.setItem('fhepubkey', networkPublicKey);\n                }\n            }\n            const chainId = parseInt(chainIdHex, 16);\n            return createInstance({chainId, publicKey: networkPublicKey});\n        };\n        initInstance().then(\n            (instance) => {\n                this.loading = false;\n                this.instance = instance;\n                this.refreshBalances();\n            }\n        );\n    },\n    ...\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, interacting with encrypted data in our contracts is pretty straightforward if you've seen EVM Web3 contracts in action - we can simply import the types & deployment data generated by our contracts and use them directly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// can use this, hard code the address or any other way to map the contract address\nimport DeployedContract from "../contracts/deployments/localfhenix/WrappingERC20.json";\nimport {WrappingERC20__factory} from "../contracts/types";\n\nasync getEncryptedBalance(): Promise<number> {\n    const thisProvider = new ethers.BrowserProvider(window.ethereum)\n    let signer = await thisProvider.getSigner();\n    let contractAddress = DeployedContract.address;\n    // ts-ignore because different ethers versions can cause typescript to think \n    // there\'s a type mismatch\n    // @ts-ignore\n    const werc20 = WrappingERC20__factory.connect(contractAddress, signer)\n\n    if (this.instance) {\n        // this is an ehpemeral key used to query encrypted data for the user\n        // NOT the global network public key from the init\n        // Here we don\'t really care about the EIP-712 token & signature, we just want to \n        // use the public key associated with it\n        let txPublicKey = this.instance.getTokenSignature(contractAddress)?.publicKey;\n        if (!txPublicKey) {\n            txPublicKey = await this.instance.generateToken({verifyingContract: contractAddress}).publicKey;\n        }\n        try {\n  \n            let encBalance = await werc20.balanceOfEncrypted(txPublicKey);\n            // instance.decrypt uses the txPublicKey which is loaded internally\n            // which is why we don\'t explicitly provide it\n            this.encryptedBalance = this.instance.decrypt(contractAddress, encBalance);\n        } catch (e) {\n            // 0 balance will error here\n        }\n    }\n\n    return 0\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sending a transaction is even easier, since there's less fiddling with keys"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async sendToContract (input: number) {\n    if (!this.instance) {\n        alert("fhe not initialized");\n        return;\n    }\n    const thisProvider = new ethers.BrowserProvider(window.ethereum)\n\n    let signer = await thisProvider.getSigner();\n    try {\n        // @ts-ignore\n        const werc20 = WrappingERC20__factory.connect(DeployedContract.address, signer)\n\n        let encToSend = await this.instance.encrypt32(input);\n\n        // for example purposes just send to the contract\n        await werc20.transferEncrypted(DeployedContract.address, encToSend);\n    } catch (e) {\n        alert(`error: ${e}`)\n    }\n    this.refreshBalances();\n},\n'})}),"\n",(0,i.jsx)(n.h4,{id:"okay-lets-run-this-thing",children:"Okay, Let's Run this thing!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm serve\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the unlikely scenario that everything worked up to this point you should now see:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" DONE  Compiled successfully in 1657ms                                                            1:48:47 PM\n\n\n  App running at:\n  - Local:   http://localhost:8082/\n  - Network: http://172.21.20.133:8082/\n\n  Note that the development build is not optimized.\n  To create a production build, run pnpm run build.\n\nNo issues found.\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GG WP"})," ","\ud83c\udf89","\ud83c\udf89","\ud83c\udf89","\ud83c\udf89"]}),"\n",(0,i.jsx)(n.h4,{id:"side-note-why-go-through-all-this",children:"Side Note: Why Go Through all this?"}),"\n",(0,i.jsx)(n.p,{children:"You can just copy over the compiled .json files from your contracts, hard code deployed addresses (or pass them through environment variables) and be done with it! Yep, that can be a quick-and-dirty solution. However, the more complex the project the more challenging it becomes to cleanly integrate contracts and user interfaces. Frequent changes, debugging and coordinating multiple people are all challenges - but even for personal development, I just like having my UI aware of the contract interfaces and provide typing hints.  "})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(7294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);