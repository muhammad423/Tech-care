# Healthcare Dashboard - React + TypeScript + Vite

A modern healthcare dashboard application built with React, TypeScript, and Vite. This app displays patient information, diagnosis history with interactive blood pressure charts, vital signs, diagnostic lists, and lab results.

## Features

- Patient list with search functionality
- Interactive blood pressure chart using Chart.js
- Real-time vital signs monitoring (Respiratory Rate, Temperature, Heart Rate)
- Diagnostic history and status tracking
- Lab results with download functionality
- Fully responsive design
- API integration with Coalition Technologies test endpoint

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or pnpm package manager

## Installation

1. Clone or download this repository

2. Navigate to the project directory:
\`\`\`bash
cd healthcare-dashboard
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

## Running the Development Server

Start the development server:

\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

The application will open at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

\`\`\`bash
npm run build
# or
pnpm build
\`\`\`

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

\`\`\`bash
npm run preview
# or
pnpm preview
\`\`\`

## Project Structure

\`\`\`
healthcare-dashboard/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # React components
│   │   ├── Dashboard.tsx
│   │   ├── Header.tsx
│   │   ├── PatientList.tsx
│   │   ├── DiagnosisHistory.tsx
│   │   ├── PatientInfo.tsx
│   │   └── *.css       # Component styles
│   ├── types/          # TypeScript type definitions
│   │   └── patient.ts
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies

\`\`\`

## Technologies Used

- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Chart.js** - Interactive charts
- **React Chart.js 2** - React wrapper for Chart.js
- **CSS3** - Styling with custom properties
- **Manrope Font** - Typography

## API Integration

The app fetches patient data from:
\`\`\`
https://fedskillstest.coalitiontechnologies.workers.dev
\`\`\`

Authentication: Basic Auth with credentials `coalition:skills-test`

## Design

The design follows the Adobe XD mockup specifications with:
- Manrope font family (weights: 400, 700, 800)
- Custom color palette matching healthcare theme
- Responsive layout supporting desktop, tablet, and mobile
- Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was created as a test implementation for Coalition Technologies.
