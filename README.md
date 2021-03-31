# Matic-Microblog

A microblog on Matic, written with Hardhat, NextJS and Typescript

Uses theGraph for near realtime updates

Post, Like, Dislike and Reply to threads, with metamask!

## Demo (Mumbai)

Contract
https://explorer-mumbai.maticvigil.com/address/0xDc8DFBf59C575D4A258E0FB8E1AD888ed476e8c4/write-contract

Subgraph
https://thegraph.com/explorer/subgraph/gallodasballo/matic-microblog

Interface
https://matic-microblog-mono.vercel.app/


## Get Started

Download
```
git clone https://github.com/GalloDaSballo/matic-microblog-mono
```

### Install all deps
```
yarn
```

### Run frontend
```
yarn dev
```

## Use Hardhat
```
yarn workspace @matic-microblog/hardhat COMMAND
```

### Run local hardhat node
```
yarn node
```

### Deploy Contracts
```
yarn deploy
```

## Use Subgraph
```
yarn workspace @matic-microblog/subgraph COMMAND
```

### Generate Subgraph code
```
yarn workspace @matic-microblog/subgraph codegen
```

### Deploy Subgraph code
```
yarn workspace @matic-microblog/subgraph deploy
```

## Frontend Constants
See packages/next/utils/constants.ts

## Deployment

To deploy on Vercel, fork this repo, then import it to Vercel

Try an initial deployment (it will fail, no worries)

Go in Project -> Settings
![Vercel Settings](https://github.com/GalloDaSballo/matic-microblog-mono/blob/main/.github/vercel-settings.png?raw=true)

Set Build & Development Settings to: NextJS (leave all defaults)
![Build Settings](https://github.com/GalloDaSballo/matic-microblog-mono/blob/main/.github/nextjs-build.png?raw=true)

Set Root Directory to: packages/next
![Root Directory](https://github.com/GalloDaSballo/matic-microblog-mono/blob/main/.github/nextjs-root.png?raw=true)

Keep Include source files outside of the Root Directory in the Build Step. checked

Then re-deploy

## Acknowledgments

Thank you to [@NickVogri](https://github.com/NikVogri) for helping with the frontend!

## From Template
This mono-repo uses: Hardhat, NextJS and theGraph

Both NextJs and TheGraph are set up from the default starter templates

Hardhat is set up using https://github.com/TomAFrench/solidity-template

A fork of https://github.com/paulrberg/solidity-template
