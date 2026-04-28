# 🌌 Stellar Portfolio

*A personal portfolio where every line of code is a piece of the Infinite Puzzle.*

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

🌐 **[Live App →](https://leviscarvalho-portfolio.vercel.app/)** &nbsp;|&nbsp; 💻 **[GitHub →](https://github.com/levitoncarvalho/my-portfolio)**

> ⚠️ **Disclaimer:** This is a personal portfolio built for learning and professional showcase purposes. All contact information shown is real — feel free to reach out!

</div>

---

## 🧩 The Infinite Puzzle

> *"Without data, you're just another person with an opinion."* — W. Edwards Deming

From the vibrant energy of **Bahia** to the tech landscapes of **Portugal**, this portfolio represents the journey of a developer driven by the *why* behind the *how*. A Software Engineering student with a soul for Data Science — bridging the gap between building robust systems and extracting meaningful stories from data.

The goal was simple yet ambitious: build a **visually stunning, animated, and fully responsive** portfolio that reflects both technical depth and creative identity.

---

## 🚀 Results

| Goal | Target | Result |
|------|--------|--------|
| 📱 Fully Responsive | Mobile + Desktop | ✅ All breakpoints covered |
| ✨ Animated UI | Smooth & immersive | ✅ Star bg, meteors, fade-ins |
| 📬 Functional Contact | Real email sending | ✅ EmailJS integrated |
| ⚡ Performance | Fast load | ✅ Vite + Vercel CDN |
| 🎨 Custom Design System | Unique theme | ✅ CSS vars + Tailwind theme |

---

## 🔄 Workflow

```
User lands on page
       │
       ▼
  StarBackground (animated stars & meteors)
       │
       ▼
  Navbar (scroll-aware, mobile hamburger menu)
       │
       ├──▶ HeroSection      → Identity + CTA buttons
       ├──▶ AboutSection     → Bio + Photo + CV download
       ├──▶ SkillsSection    → Filterable skill bars by category
       ├──▶ CertificationSection → Certification cards w/ credential links
       ├──▶ ProjectsSection  → Project gallery w/ GitHub links
       ├──▶ ContactSection   → EmailJS form + contact info
       └──▶ Footer           → Social links + copyright
```

---

## 1️⃣ Hero & Identity

The **HeroSection** introduces Leviton Carvalho with fade-in animations staggered across 4 delay levels, a W. Edwards Deming quote, and two CTA buttons — one pointing to projects, another to certifications.

The **StarBackground** dynamically generates stars based on the viewport size and 5 animated meteors, all running as a fixed layer behind all content.

---

## 2️⃣ About & Skills

The **AboutSection** features a grayscale profile photo that reveals in full color on hover, a biographical narrative, and buttons to get in touch or download the CV directly.

The **SkillsSection** allows filtering skills by category — Data Science | ML, Frontend, Backend, Database, DevOps, and Tools — with animated progress bars showing proficiency levels.

| Category | Technologies |
|----------|-------------|
| 🧠 Data Science / ML | Python, Pandas, NumPy, Scikit-Learn, SciPy, Matplotlib, Seaborn, Streamlit |
| 🖥️ Frontend | React, Angular, JavaScript, TypeScript, HTML/CSS |
| ⚙️ Backend | Node.js, Express, Django, Java, Spring Boot, C/C++ |
| 🗄️ Database | MySQL, PostgreSQL, MongoDB |
| 🔧 DevOps | Git/GitHub/GitLab, AWS |
| 🛠️ Tools | VS Code, Agile/Scrum, WebPack/npm |

---

## 3️⃣ Certifications

Cards with institution, date, hours, technologies covered, and a direct link to the credential. Sorted by most recent first.

| Title | Institution | Hours | Year |
|-------|-------------|-------|------|
| Python Fundamentals | DIO | 26h | 2026 |
| Global Networking & Infrastructure | Descomplica | 160h | 2025 |
| Mobile Application Development | Descomplica | 160h | 2025 |
| Smart Data Structures & Algorithms | Descomplica | 240h | 2025 |
| Full-Stack Web Development Bootcamp | The App Brewery | 61.5h | 2025 |
| Java + Angular Fullstack Bootcamp | Santander Universidades | 115h | 2023 |
| *+ 6 more...* | | | |

---

## 4️⃣ Projects

Featured projects sorted by recency, each with a cover image, tags, description, and GitHub link.

| Project | Stack | Live |
|---------|-------|------|
| 🛢️ OilyGiant Blackgold Bootstrap | Python, Scikit-Learn, Streamlit | [🔗](https://oilygiant-blackgold-bootstrap-levitoncarvalho.streamlit.app/) |
| 🏦 Beta Bank Churn Prediction | Python, Scikit-Learn, Streamlit | [🔗](https://beta-bank-churn-prediction-carvalholevis.streamlit.app/) |
| 📱 Megaline Plan Recommendation | Python, Scikit-Learn, Streamlit | [🔗](https://megaline-mobile-plan-recommendation-levitoncarvalho.streamlit.app/) |
| 🎮 Ice Store Analytics | Python, Pandas, Streamlit | [🔗](https://ice-store-analytics-levitoncarvalho.streamlit.app/) |
| 🚗 Vehicles Dashboard | Python, Plotly, Streamlit | [🔗](https://vehicles-dashboard-fdn3.onrender.com/) |
| 🌌 Stellar Portfolio | React, Tailwind, EmailJS | [🔗](https://leviscarvalho-portfolio.vercel.app/) |
| 🌿 Naturalis Store | Angular, TypeScript | — |
| 🖥️ CarvalhoLevis Host | HTML, CSS | — |
| 📋 CRM - Client Management | Django, Python | — |

---

## 5️⃣ Contact

Integrated with **EmailJS** for serverless form submission — no backend required. Also exposes direct contact channels.

| Channel | Info |
|---------|------|
| 📧 Email | levitoncarvalho@icloud.com |
| 📞 Phone | +351 930 662 282 |
| 💬 WhatsApp | [Send a message](https://api.whatsapp.com/send/?phone=%2B351930662282) |
| 📍 Location | Maia, Porto, Portugal |

---

## 🗂️ Folder Structure

```
my-portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── profile-photo.jpeg
│   ├── LevitonResume.pdf
│   └── projects/
│       └── project*.jpeg
│
├── src/
│   ├── components/
│   │   ├── StarBackground.jsx   # Animated star & meteor canvas
│   │   ├── Navbar.jsx           # Scroll-aware navbar + mobile menu
│   │   ├── HeroSection.jsx      # Landing + CTAs
│   │   ├── AboutSection.jsx     # Bio + photo + CV download
│   │   ├── SkillsSection.jsx    # Filterable skill bars
│   │   ├── CertificationSection.jsx  # Cert cards
│   │   ├── ProjectsSection.jsx  # Project gallery
│   │   ├── ContactSection.jsx   # EmailJS form + info
│   │   └── Footer.jsx           # Social icons + copyright
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Main page composition
│   │   └── NotFound.jsx         # 404 page
│   │
│   ├── lib/
│   │   └── utils.js             # cn() helper (clsx + tailwind-merge)
│   │
│   ├── App.jsx                  # Router setup
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind v4 theme + custom utilities
│
├── package.json
├── vite.config.js
├── index.html
├── eslint.config.js
├── .gitignore
├── .gitattributes
├── package-lock-2.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Setup

```bash
# Clone the repository
git clone https://github.com/levitoncarvalho/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| ⚡ Build Tool | Vite | Fast dev server & bundler |
| ⚛️ UI Library | React 18 | Component-based architecture |
| 🎨 Styling | Tailwind CSS v4 | Utility-first + custom theme |
| 🔀 Routing | React Router v6 | SPA navigation |
| 📬 Email | EmailJS | Serverless contact form |
| 🔣 Icons | Lucide React | Consistent icon system |
| 🔧 Utilities | clsx + tailwind-merge | Conditional class management |
| 🚀 Deploy | Vercel | CDN + CI/CD |

---

## 💡 Key Takeaways

- **Tailwind CSS v4** with `@theme` block for full custom design tokens (colors, animations, keyframes) — no config file needed
- **CSS custom utilities** (`cosmic-button`, `card-hover`, `text-glow`, `star`, `meteor`) defined with `@utility` for reusable, semantic classes
- **Dynamic star generation** based on viewport dimensions with resize listener — purely JS-driven canvas-less animation
- **EmailJS** enables real contact form submissions without any backend or server infrastructure
- **Staggered fade-in animations** via CSS keyframes + delay utilities create a cinematic landing experience

---

## 👨‍💻 Author

<div align="center">

**Leviton Lima Carvalho**
*Full Stack Developer | Data Scientist | Machine Learning | Python*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-levitoncarvalho-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/levitoncarvalho/)
[![GitHub](https://img.shields.io/badge/GitHub-levitoncarvalho-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/levitoncarvalho)
[![Email](https://img.shields.io/badge/Email-levitoncarvalho@icloud.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:levitoncarvalho@icloud.com)

</div>

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more details.
