# Priyanshu Goyal — Premium Developer Portfolio

A modern, recruiter-focused personal portfolio website built with **React.js**, **Vite**, and **Tailwind CSS**. Crafted for high impact within the first 30 seconds of visiting, highlighting technical skills, core projects, verified internship experience, and development philosophy.

---

## 🚀 Quick Start Guide

### 1. Navigate to Project
```bash
cd priyanshu-portfolio
```

### 2. Install Dependencies (if running for the first time)
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure

```text
priyanshu-portfolio/
├── public/
│   ├── favicon.svg          # Custom PG monogram favicon
│   └── resume.pdf           # Place your official resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky header, monogram, section tracker, mobile menu
│   │   ├── Hero.jsx         # Recruiter-focused hero, CTAs, interactive terminal mockup
│   │   ├── About.jsx        # Education, core focus, What I Bring traits
│   │   ├── Skills.jsx       # Categorized skills grid with interactive filter pills
│   │   ├── Projects.jsx     # Featured projects section container
│   │   ├── ProjectCard.jsx  # Rich project card with custom CSS UI mockups & badges
│   │   ├── Experience.jsx   # CodSoft internship & St. John College engineering degree
│   │   ├── Approach.jsx     # "How I Build" 4-step engineering workflow
│   │   ├── ResumeCTA.jsx    # Dedicated resume download card with copy helper
│   │   ├── Contact.jsx      # Direct channels & validated Mailto inquiry form
│   │   ├── Footer.jsx       # Dynamic copyright year, quick links, back-to-top
│   │   └── SocialIcons.jsx  # Reusable SVG icons for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.js # Central configuration for all personal details & links
│   ├── App.jsx              # Main application layout
│   ├── index.css            # Tailwind styling, dark theme, custom scrollbar
│   └── main.jsx             # React DOM root entry
├── index.html               # SEO metadata, Open Graph tags, Google Fonts
├── vite.config.js           # Vite + Tailwind CSS plugin configuration
└── package.json
```

---

## ⚙️ Checklist: Items to Update Before Publishing

All personal information, links, and content are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js). Update these placeholders with your real URLs:

1. **GitHub Profile URL**:
   - In `src/data/portfolioData.js` -> `PERSONAL_INFO.githubUrl`
   - Default: `https://github.com/priyanshugoyal`

2. **LinkedIn Profile URL**:
   - In `src/data/portfolioData.js` -> `PERSONAL_INFO.linkedinUrl`
   - Default: `https://linkedin.com/in/priyanshugoyal`

3. **Email Address**:
   - In `src/data/portfolioData.js` -> `PERSONAL_INFO.email`
   - Default: `priyanshu.goyal.dev@gmail.com`

4. **Resume PDF**:
   - Drop your real resume file into [`public/resume.pdf`](public/resume.pdf) to replace the starter placeholder.

5. **Project Live Demos & Repositories**:
   - In `src/data/portfolioData.js` -> `PROJECTS`:
     - **Invoice AI**: Update `liveUrl` and `githubUrl`
     - **BudgetTripPlan**: Update `liveUrl` and `githubUrl`
     - **PlayPrime**: Update `liveUrl` and `githubUrl`
