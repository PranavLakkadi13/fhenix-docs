"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[9035],{3306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(5893),r=t(1151);const a={sidebar_position:3,title:"(Un)Sealing"},s=void 0,o={id:"FhenixJS/Decryption",title:"(Un)Sealing",description:"When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app or user can read.",source:"@site/docs/FhenixJS/Decryption.md",sourceDirName:"FhenixJS",slug:"/FhenixJS/Decryption",permalink:"/fhenix-docs/docs/FhenixJS/Decryption",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/FhenixJS/Decryption.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"(Un)Sealing"},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/fhenix-docs/docs/FhenixJS/Encryption"},next:{title:"End-to-End Example",permalink:"/fhenix-docs/docs/FhenixJS/Sending-a-Transaction"}},c={},d=[{value:"Encrypted Values &amp; Permits",id:"encrypted-values--permits",level:3},{value:"1. Creating a Permit",id:"1-creating-a-permit",level:4},{value:"2. Querying the Contract",id:"2-querying-the-contract",level:4},{value:"3. Unsealing the Data",id:"3-unsealing-the-data",level:4},{value:"Putting it all Together",id:"putting-it-all-together",level:4},{value:"Advanced: Without Using FhenixJS",id:"advanced-without-using-fhenixjs",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app or user can read."}),"\n",(0,i.jsxs)(n.p,{children:["The process of taking an FHE-encrypted ciphertext and converting it to standard encryption is called ",(0,i.jsx)(n.strong,{children:"sealing."})]}),"\n",(0,i.jsxs)(n.p,{children:["The data is returned to the user using ",(0,i.jsx)(n.a,{href:"https://bitbeans.gitbooks.io/libsodium-net/content/public-key_cryptography/sealed_boxes.html",children:"sealed box encryption "}),"from NaCL. The gist of it is that the user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data in such a way that only the owner of the private key associated with the provided public key can decrypt and read the data."]}),"\n",(0,i.jsx)(n.admonition,{title:"Don't Want to Seal?",type:"tip",children:(0,i.jsxs)(n.p,{children:["Fhenix supports standard decryption as well. Mostly suited for public data, an unsealed plaintext value can be returned from a contract.\nYou can read more about how to do this ",(0,i.jsx)(n.a,{href:"#../",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"encrypted-values--permits",children:"Encrypted Values & Permits"}),"\n",(0,i.jsx)(n.p,{children:"When reading encrypted values we can do one of two things. TBD: finish this"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"Permit"})," is a data structure that helps contracts know who is trying to call a specific function."]}),"\n",(0,i.jsxs)(n.p,{children:["The fhenix.js Javascript library includes methods to support creating parameters for values that require ",(0,i.jsx)(n.a,{href:"../fhevm-solidity/access-control.md",children:"EIP-712 authentication"}),". These methods can help creating ephemeral transaction keys, which are used by the smart contract to create a secure encryption channel to the caller.\nSimilarly to decryption, this usage can be implemented by any compliant library, but we include direct support in FhenixJS. "]}),"\n",(0,i.jsx)(n.p,{children:"This is done in 3 steps: generating a permit, querying the contract and unsealing the data."}),"\n",(0,i.jsx)(n.h4,{id:"1-creating-a-permit",children:"1. Creating a Permit"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const provider = new ethers.JsonRpcProvider('http://demo.fhenix.zone:8545');\nconst client = FhenixClient.Create({provider});\n\nconst permit = await client.getPermit(contractAddress);\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Did you know?",type:"tip",children:(0,i.jsxs)(n.p,{children:["When you create a permit it gets stored in ",(0,i.jsx)(n.code,{children:"localstorage"}),". This makes permits easily reusable and transferable"]})}),"\n",(0,i.jsx)(n.h4,{id:"2-querying-the-contract",children:"2. Querying the Contract"}),"\n",(0,i.jsx)(n.p,{children:"We recommend that contracts implement the Permit/Permission interfaces (though this is not strictly required!).\nIn this case, we can easily inject our permit into the function call."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const permission = client.getPermission(contractAddress);\nconst response = await contract.balanceOf(permission);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"3-unsealing-the-data",children:"3. Unsealing the Data"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have the response data, we can use the ",(0,i.jsx)(n.code,{children:"unseal"})," function to decipher the data"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"client.unseal(contractAddress, response)\n"})}),"\n",(0,i.jsx)(n.p,{children:"We have to provide the contract address so the fhenix client knows which permit to use for the unsealing function."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Permits are currently limited to support a single contract"})}),"\n",(0,i.jsx)(n.h4,{id:"putting-it-all-together",children:"Putting it all Together"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { FhenixClient } from 'fhenixjs';\nimport { JsonRpcProvider } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('http://demo.fhenix.zone:8545');\nconst client = FhenixClient.Create({provider});\n\nconst permit = await client.getPermit(contractAddress);\n\nconst permission = client.getPermission(contractAddress);\nconst response = await contract.balanceOf(permission);\n\nconst plaintext: bigint = client.unseal(contractAddress, response)\n\nconsole.log(`My Balance: ${plaintext.toString()}`)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"advanced-without-using-fhenixjs",children:"Advanced: Without Using FhenixJS"}),"\n",(0,i.jsxs)(n.p,{children:["Both the encryption and authentication standards here are not Fhenix-specific, so you can use a number of 3rd party libraries to achieve the same result. Some apps may want to avoid directly using FhenixJS in specific scenarios, so an example is provided here as well, using ",(0,i.jsx)(n.code,{children:"ethers.js"})," and ",(0,i.jsx)(n.code,{children:"libsodium"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function unseal(contract: ethers.Contract,\n                      provider: BrowserProvider): bigint {\n  // instantiate sodium library\n  await _sodium.ready;\n  const sodium = _sodium;\n  \n  // generate keys\n  let keypair = sodium.crypto_box_keypair('hex');\n  let publicKey = keypair.publicKey;\n\n  let contractAddress = await contract.getAddress();\n  const signer = await provider.getSigner()\n\n  // create token\n  let domain = {\n    name: 'Authorization token',\n    version: '1',\n    chainId: 9000,\n    verifyingContract: contractAddress\n  };\n\n  let typedData = {\n    types: {\n      Reencrypt: [{\n        name: 'publicKey',\n        type: 'bytes32'\n      }]\n    },\n    domain: domain,\n    primaryType: 'Reencrypt',\n    message: {\n      publicKey: `0x${publicKey}`\n    }\n  };\n\n  // Sign token\n  let msgSig = await signer.signTypedData(typedData.domain, typedData.types, typedData.message);\n\n  // Query balance - assuming that the contract is already connected with the signer (wallet)\n  let msg = await contract.balanceOf(`0x${publicKey}`, msgSig);\n\n  // decrypt\n  const plaintext = sodium.crypto_box_seal_open(fromHexString(msg), fromHexString(keypair.publicKey), fromHexString(keypair.privateKey));\n\n  // todo: this is here from a previous library, need to check if this works\n  if (!plaintext) {\n    return ethers.toBigInt(0);\n  }\n\n  // big endian bytes to big int \n  return ethers.toBigInt(plaintext)\n}\n\nexport const fromHexString = (hexString: string): Uint8Array => {\n  const arr = hexString.replace(/^(0x)/, '').match(/.{1,2}/g);\n  if (!arr) return new Uint8Array();\n  return Uint8Array.from(arr.map((byte) => parseInt(byte, 16)));\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);