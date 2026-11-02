# 🗺️ Roadmap

Work I plan to do on the portfolio. Each item will also become a GitHub issue as I pick it up.

## 🌍 Content and features
- [ ] Portuguese and English versions of the whole site (i18n with a language switcher)
- [ ] Light and dark theme toggle that remembers the visitor's choice
- [ ] A dedicated page for each project, with the problem, approach, results and screenshots
- [ ] Move projects, skills and certifications into JSON data files, so updating the site no longer means editing components
- [ ] Filter and search in the projects section (by stack and by area: Data Science, Frontend, Backend)
- [ ] Add the newer Data Science projects (Rusty Bargain, Sure Tomorrow, Steelproof) to the gallery
- [ ] Short blog or notes section for write ups about my projects

## 🧹 Quality and refactoring
- [ ] Replace the browser `alert()` in the contact form with toast notifications (Radix Toast is already installed)
- [ ] Client side validation and a clear loading state in the contact form
- [ ] Tidy up repeated Tailwind classes into shared components
- [ ] Remove unused dependencies and imports

## ♿ Accessibility and performance
- [ ] Accessibility pass: alt texts, focus states, keyboard navigation, `prefers-reduced-motion` for the star and meteor animations
- [ ] Optimise images (WebP, lazy loading) and check Lighthouse scores
- [ ] SEO: meta tags, Open Graph image, sitemap

## 🧪 Tests and automation
- [ ] Unit and component tests with Vitest and React Testing Library
- [ ] GitHub Actions workflow running lint, tests and build on every push
- [ ] Automatic link checking for project and certificate URLs
