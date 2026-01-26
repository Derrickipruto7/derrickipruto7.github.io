# Derrick Ipruto - Geospatial Portfolio

A professional portfolio website showcasing expertise in geospatial information science, remote sensing, and GIS technologies. Built with Next.js, TypeScript, and Tailwind CSS.

**Live Site**: [derrickipruto7.github.io](https://derrickipruto7.github.io)

## About

This is a personal portfolio website for Derrick Ipruto, a BSc Geospatial Information Science and Remote Sensing graduate. It showcases professional projects, technical skills, educational background, and provides a way to get in touch

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Optimized Performance**: Fast loading and smooth navigation
- **Professional Sections**:
  - Hero section with professional introduction
  - Skills & expertise organized by category
  - Featured geospatial projects with descriptions
  - Education and certifications
  - Contact form for inquiries
  - Footer with social links
- **SEO Optimized**: Metadata and semantic HTML for better search visibility
- **Accessible**: WCAG compliant components

## Getting Started

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/derrickipruto7/derrickipruto7.github.io.git
cd derrickipruto7.github.io/website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx        # Navigation header
│       ├── Hero.tsx          # Hero section
│       ├── Skills.tsx        # Skills section
│       ├── Projects.tsx      # Projects showcase
│       ├── Education.tsx     # Education section
│       ├── Contact.tsx       # Contact form
│       └── Footer.tsx        # Footer
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

To customize this portfolio for your own use:

1. **Update Personal Information**:
   - Edit `Hero.tsx` for your introduction and bio
   - Update `Skills.tsx` with your technical skills
   - Add your projects to `Projects.tsx`
   - Update `Education.tsx` with your background
   - Modify `Contact.tsx` with your contact details
   - Customize `Header.tsx` navigation links

2. **Styling**:
   - Tailwind CSS is pre-configured with a professional color scheme
   - Modify `tailwind.config.ts` to customize colors and theme

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19 with custom components
- **Build Tool**: Next.js built-in
- **Linting**: ESLint

## Deployment

This site is deployed on GitHub Pages. To deploy your own version:

1. Fork or clone this repository
2. Update the personal information in the components
3. Push to your `gh-pages` branch or configure GitHub Actions

## Contact

Feel free to reach out for collaborations or inquiries through the contact form on the website or visit my GitHub profile.

## License

This project is open source and available under the MIT License.

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please reach out through the contact form on the website.
