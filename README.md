## Getting Started

First, run the development server:

```bash
yarn install # to install dependcies
yarn add next react react-dom
yarn add --dev @types/react @types/react-dom
yarn add --dev typescript @types/react @types/node @types/react-dom
```

```bash
yarn dev # to start server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# System Design

![Image](images/light.png)

![View the Actual Design](https://excalidraw.com/#json=29LoyprJCOF1ARplRHu-m,Wvnq4d274i16MkQKBqe2Eg)

## To contribute,

1. fork this repo

2. clone the repo you just forked

```bash
git clone https://github.com/path/to/your/repo #not actual command
```

3. Create the changes, internal comments explaining them are appreciated.
   add the changes along with the comments where you did ,what you did and what you changed.

4. commit and push

```bash
git add .
git commit -m "message"
git push origin main
```

5. create a pull request- go to your github and create a pull request.

6. Add necessary details, comments if any about the pull request.

7. Click on Create PR.

8. Getting Started with DataBase->
   to add Prisma and the Prisma Client
   `yarn add prisma --dev
yarn add @prisma/client
`
   Initialize Prisma
   `yarn prisma init`

9. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
   define the schema in `prisma/schema.prisma`

generate the client
`yarn prisma generate`

run the studio
`yarn prisma studio`

9. For the FrontEnd code you can go to `app/page.tsx` and start the stuff

10. For the BackEnd code just start at `app/api` and start the stuff
