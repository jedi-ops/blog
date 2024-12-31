# Jedi Ops Blog
Based on [Astro Paper](https://github.com/satnaing/astro-paper)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── Layout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.md
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   └── posts/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── base.css
│   │   └── theme.css
│   └── templates/
│       ├── Blog.astro
│       ├── Card.astro
│       ├── Footer.astro
│       ├── Header.astro
│       ├── Layout.astro
│       ├── Post.astro
│       └── Posts.astro
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory.