# Eiamin Hassan Shanto — Academic Portfolio

Personal academic portfolio for **Eiamin Hassan Shanto**, a Graduate Teaching Assistant and Data Science researcher. The site presents research interests, publications, applied projects, teaching experience, and achievements in a responsive Hugo website.

## Built with

- [Hugo](https://gohugo.io/) static site generator
- [Ananke](https://github.com/gohugo-ananke/ananke) theme, included as a Git submodule
- Custom Hugo layouts, CSS, and JavaScript

## Run locally

1. Install [Hugo Extended](https://gohugo.io/installation/).
2. Clone the repository and initialize the theme submodule:

   ```bash
   git clone <repository-url>
   cd academic-portfolio
   git submodule update --init --recursive
   ```

3. Start the development server:

   ```bash
   hugo server
   ```

   Open `http://localhost:1313/` in a browser.

Build the production site with:

```bash
hugo
```

The generated files are written to `public/`.

Vercel uses the same Hugo build command and deploys `public/` as the output
directory. If the project has an existing Vercel project configuration, make
sure its root directory points to this repository so `vercel.json` is applied.

## Project structure

```text
content/       Portfolio pages and entries
layouts/       Custom Hugo templates
assets/        Source CSS and JavaScript
static/        Files copied directly to the built site
themes/ananke/ Theme submodule
hugo.toml      Site configuration and navigation
```

Add or update portfolio entries in the relevant directory under `content/`. Site-wide identity, navigation, interests, and social links are configured in `hugo.toml`.
