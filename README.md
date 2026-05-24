# My eportfolio

My portfolio about my carreer, my projects, diploma and certifications, and many more!
Hosted on AWS.

## Project structure

This project uses the following structure:

### Backend

```
backend/
  src/
    handler.ts               # Lambda entry point (custom regex router)
    lib/
      dynamo.ts              # DynamoDB helpers (getAllItems, getItemById)
      models.ts              # TypeScript interfaces
      response.ts            # HTTP response builders
    routes/
      index.ts               # Barrel re-export
      experiences.ts         # Experience endpoints
      hobbies.ts             # Hobby endpoints
      learnings.ts           # Learning endpoints
      projects.ts            # Project endpoints
      schools.ts             # School endpoints
      skills.ts              # Skill endpoints
  cdk/
    bin/app.ts               # CDK app entry point
    lib/portfolio-stack.ts   # CDK stack (DynamoDB, Lambda, API Gateway, S3, CloudFront)
  scripts/
    seed.ts                  # Database seeding script
```

### Frontend

```
frontend/
  src/
    assets/       # Images and static files
    components/   # Reusable UI components
      business    # Specific UI components for the portfolio
      generics    # Generic components
      sections    # Sub sections of the pages
    hooks/        # Reusable logic (useTheme)
    i18n/         # Internationalization configuration (french and english versions)
    pages/        # Application pages (HomePage, AboutMePage)
    styles/       # Global styles
    main.tsx      # Application entry point
```

## Infrastructure

```
CloudFront
  /       (default) → S3 bucket (static frontend)
  /api/*            → API Gateway (HTTP API v2) → Lambda → DynamoDB
```

All resources are deployed via AWS CDK v2 in a single stack (`PortfolioStack`):

| Resource | Details |
|----------|---------|
| **DynamoDB** | 6 tables (Projects, Experiences, Skills, Schools, Hobbies, Learnings) |
| **Lambda** | Node.js 22, custom regex router, 256 MB, 10s timeout |
| **API Gateway** | HTTP API v2, CORS enabled, catch-all `/{proxy+}` → GET → Lambda |
| **S3** | Frontend static files, blocked public access |
| **CloudFront** | Custom domain `steventea.com` + `www`, ACM certificate, SPA fallback |

## Main features

- Dark / Light theme
- Internationalization (FR / EN)
- Component-based architecture
- Portfolio routing with React Router
- Serverless API on AWS (Lambda + DynamoDB)

## Commit checker and CI/CD

For each commit, husky hooks the commit to check if there are some issues (warning and errors) in the project. To fix it, there are a command, `npm run format` to format all updated files using BiomeJS.

## Available scripts

### Frontend

- `npm run dev`     # Start development server
- `npm run build`   # Build the project for production
- `npm run preview` # Preview production build locally
- `npm run format`  # Format code using Biome.JS

### Backend

- `cd backend && npm run deploy`       # Deploy infrastructure via CDK
- `cd backend && npm run seed`          # Seed DynamoDB tables with sample data
- `cd backend && npm run build`         # Compile TypeScript
- `cd backend && npx tsc --noEmit`      # Type-check without emitting

## How to run

To run the frontend locally, install the dependencies:

```
cd frontend && npm install
```

And then, run in local:

```
cd frontend && npm run dev
```

This will run the repo on http://localhost:5173/.
