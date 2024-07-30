Well we Bootstraped the project
We added the system design into readme file
How to run the project

and finally to contribute

well there was a error->`Error: EROFS: read-only filesystem, mkdir '/node_modules/next/next-swc-fallback'
    at makeError$1 `
suggesting that the project is in read only mode.
Soln->

```bash
yarn config set nodeLinker node-modules
yarn install
```

finally the project is running.
