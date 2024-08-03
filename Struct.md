Structure of Next.js Repo->

📁 my-awesome-nextjs-project
|
|_ 📁 apps/web/-> core heart of project
| |_ 📁 app-> core of the project for frontend
| | |_ 📁 (auth) -> regroup related route w/o affecting url structure
| | |_ 📁 login
| | | |_ 📄 page.tsx
| | | |_ 📄 layout.tsx
| | |_ 📁 register
| | |_ 📄 page.tsx
| | |_ 📄 layout.tsx
| | |_ 📁 dashboard
| | | |_ 📄 page.tsx
| | | |_ 📄 layout.tsx
| |_ 📁 api -> Keep your backend logic tidy
| | |_ 📁 users
| | | |_ 📄 route.ts
| | |_ 📁 posts
| | |_ 📄 route.ts
| |_ 📄 layout.tsx -> create consistent designs across pages
| |_ 📄 page.tsx -> epresents a unique route
|
| | |_ 📁 components
| | |_ 📁 ui -> Create reusable UI elements that maintain consistency across your app
| | | |_ 📄 Button.tsx
| | | |_ 📄 Card.tsx
| | | |_ 📄 Modal.tsx
| | |_ 📁 forms -> Encapsulate form logic for cleaner, more maintainable code
| | | |_ 📄 LoginForm.tsx
| | | |_ 📄 RegisterForm.tsx
| | |_ 📁 layouts -> framwork of ui, Create consistent page structures with reusable layout components
| | | |_ 📄 Header.tsx
| | | |_ 📄 Footer.tsx
| |_|_|_ 📄 Sidebar.tsx
|
|_|_ 📁 lib -> utility belt(Store helper functions and constants here)
| |_|**|_ 📄 api.ts
| |_|**|_ 📄 utils.ts
| | _|_ 📄 constants.ts
|
|_ 📁 hooks -> Create custom hooks to encapsulate complex logic
| |_ 📄 seUser.ts
| |_ 📄 useAuth.ts
| |_ 📄 usePosts.ts
|
|_ 📁 types -> Define your TypeScript interfaces and types
| |_ 📄 user.ts
| |_ 📄 post.ts
| |_ 📄 api.ts
|
|_ 📁 styles -> styling
| |_ 📄 globals.css
| |_ 📄 variables.css
|
|_ 📁 public -> home to static assets, use to make your app shine
| |_ 📁 images
| | |_ 📄 logo.svg
| | |_ 📄 hero-image.png
| |_ 📁 fonts
| |_ 📄 custom-font.woff2
|
|_ 📁 config
| |_ 📄 seo.ts
| |_ 📄 navigation.ts
|
|_ 📄 next.config.js
|_ 📄 package.json
|_ 📄 tsconfig.json
|\_ 📄 .env.local
|\_ 📄 .gitignore
