This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

#### Install dependencies:

```bash
yarn
```

#### Add environment files

Under the prisma folder add .env file and add environment variable:

```
DATABASE_URL="database connectionstring"
```

#### Setup Prisma

First, generate Prisma client

```bash
npx prisma generate
```

Run migrations

```
npx prisma migrate up --experimental
```

First, run the development server:

```bash
yarn dev
```
