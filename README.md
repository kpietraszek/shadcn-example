# shadcn-example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development process

There are following branches in the repository:

- `staging` - which will be used for staging environment
- `development` - which is used for development environment

When you create a new feature:

- please start form creating a relevant branch from the `development` branch in the following format `[ticket-number]/[feature-name]` e.g. `CWR1-55/update-documentation`
- while making a commit to the feature branch please use commitizen style messages, e.g.
  - `docs: update documentation`
  - `feat: add Button`
  - `fix: fix padding on Button`
- please make sure all the changes are merged to the development branch with a pull request and that its title starts with ticket number, e.g. `[CWR1-55] update documentation`

## Environments

Currently there will be two environments:

- `staging`
- `development` - which will be used for development and testing

Initially we will focus on creating hosting for the `development` environment in order to start development and testing asap. At later stage we will create hosting for the `staging` environment.
