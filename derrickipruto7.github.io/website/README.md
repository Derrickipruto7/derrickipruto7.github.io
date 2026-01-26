# Geospatial Portfolio Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS for showcasing geospatial expertise, projects, and professional experience.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 15, React 19, TypeScript
- **Sections**:
  - Hero section with professional introduction
  - Skills & expertise organized by category
  - Featured projects with descriptions and technologies
  - Education and certifications
  - Contact form
  - Footer with links
- **SEO Optimized**: Metadata and semantic HTML
- **Accessible**: WCAG compliant components
- **Dark/Light Mode Ready**: Tailwind CSS styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
└── components/
    ├── Header.tsx        # Navigation header
    ├── Hero.tsx          # Hero section
    ├── Skills.tsx        # Skills section
    ├── Projects.tsx      # Projects showcase
    ├── Education.tsx     # Education section
    ├── Contact.tsx       # Contact form
    └── Footer.tsx        # Footer
```

## Customization

### Update Personal Information

Edit each component to add your personal details:
- **Hero.tsx**: Update introduction and description
- **Skills.tsx**: Add your skills and categories
- **Projects.tsx**: Add your project details
- **Education.tsx**: Update education background
- **Contact.tsx**: Add your contact information
- **Header.tsx**: Customize navigation links

### Styling

Tailwind CSS is configured with custom colors:
- Primary: `#0f766e` (teal)
- Secondary: `#134e4a` (dark teal)

Modify `tailwind.config.ts` to adjust the color scheme.

## Deployment

Deploy easily on:
- **Vercel**: `npm i -g vercel` then `vercel`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Configure for static export

## Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Built from scratch with React
- **Linting**: ESLint

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please reach out through the contact form on the website.
