# Meshkat — Data & Analytics Portfolio

A responsive Next.js portfolio starter built with TypeScript, Tailwind CSS, Framer Motion, Lucide React and Recharts.

## 1. Requirements

Install:
- Node.js 20.9 or later
- VS Code
- Git (for GitHub/Vercel deployment)

Check your versions:
```bash
node -v
npm -v
```

## 2. Run locally

Open this folder in VS Code, then open Terminal:

```bash
npm install
npm run dev
```

Visit http://localhost:3000

Stop the development server with `Ctrl + C`.

## 3. Personalize before publishing

1. Replace the sample CV link by placing your final PDF at:
   `public/Mashook-Mohammad-Meshkat-CV.pdf`
2. Add your professional photo to `public/profile.jpg` if you want to use one. The current layout does not require it.
3. Check all dates, metrics, titles, project descriptions and publication details.
4. Add GitHub repository links only for projects you can publicly share.
5. Do not publish WeGro confidential data, credentials, customer information or internal screenshots.
6. Update the metadata URL in `app/layout.tsx` after you have your real domain.

Most portfolio content is in `app/page.tsx`. Update the `profile`, `projects`, and `skills` data near the top of that file.

## 4. Test production build

```bash
npm run build
```

If it succeeds, the project is ready to deploy.

## 5. Deploy to Vercel

### Option A — GitHub (recommended)

1. Create a new repository on https://github.com/new
2. In the project terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/meshkat-portfolio.git
   git push -u origin main
   ```
3. Sign in at https://vercel.com
4. Select **Add New → Project**
5. Import your `meshkat-portfolio` GitHub repository.
6. Keep the detected framework as Next.js.
7. Click **Deploy**.

Vercel will provide a live `*.vercel.app` URL. Future pushes to the main branch trigger a new deployment.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. For production deployment:
```bash
vercel --prod
```

## 6. Before sharing with recruiters

- Open the deployed URL on desktop and mobile.
- Test every navigation link and external publication link.
- Test the CV download.
- Check spelling and dates.
- Confirm the interactive demo says its data is synthetic.
- Check that no confidential employer data is exposed.

## Notes

The portfolio is a starter implementation. It uses synthetic chart data for the visual demo and only includes factual profile details supplied for this portfolio. Expand project case studies with verified technical details and sanitized screenshots before using it as a full professional portfolio.
