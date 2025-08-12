# 🧪 Fullstack Template — PostgreSQL, NestJS, Bun, Drizzle, Next.js, Better Auth

A modern fullstack starter template built with the following stack:

- **Frontend**: [Next.js](https://nextjs.org/) (App Router)
- **Backend**: [NestJS](https://nestjs.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: PostgreSQL
- **Authentication**: [better-auth](https://www.youtube.com/watch?v=Kii5RENQYwE&t=2206s) by [Michael Guay]

---

## 🚀 Stack Overview

| Layer    | Tech        | Description                           |
| -------- | ----------- | ------------------------------------- |
| Frontend | Next.js     | React framework with SSR & API routes |
| Backend  | NestJS      | Scalable Node.js backend framework    |
| Auth     | Better Auth | Simple, modern authentication system  |
| ORM      | Drizzle     | Type-safe SQL ORM for TypeScript      |
| Runtime  | Bun         | Fast JavaScript runtime               |
| Database | PostgreSQL  | Relational DB for structured data     |

---

## 📦 Features

- ✅ Fullstack type safety (end-to-end with Drizzle)
- 🔐 Authenticated session handling with better-auth
- 🌿 Bun-powered development and build speed
- 🧪 Easily extensible for both monorepos and microservices
- 🗃️ PostgreSQL for powerful relational data management
- 🧩 Modular structure: separate frontend/backend

---

## 📁 Project Structure

```bash
.
├── apps/
│   ├── frontend/     # Next.js app
│   └── backend/      # NestJS app (runs with Bun)
├── packages/
│   ├── db/           # Drizzle schema and config
│   └── auth/         # better-auth logic (session, token, etc.)
├── .env              # Environment variables
├── bun.lockb
└── README.md
```
