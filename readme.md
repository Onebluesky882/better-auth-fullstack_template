# Fullstack Project Template: NestJS + Bun + Next.js + Better Auth

โปรเจกต์ตัวอย่าง fullstack ที่ใช้

- Backend: [NestJS](https://nestjs.com/) รันด้วย [Bun](https://bun.sh/)
- Auth: [better-auth](https://github.com/mguay/better-auth)
- Frontend: [Next.js](https://nextjs.org/) ใช้งาน better-auth สำหรับระบบ Authentication

---

## Tech Stack

| Layer          | Technology               |
| -------------- | ------------------------ |
| Backend        | NestJS + Bun             |
| Authentication | better-auth              |
| Database       | PostgreSQL + Drizzle ORM |
| Frontend       | Next.js + React          |
| Styling        | Tailwind CSS (optional)  |

---

## Getting Started

### Prerequisites

- Node.js >= 18 (สำหรับ frontend)
- Bun (สำหรับ backend)  
  [ติดตั้ง Bun](https://bun.sh/)
- PostgreSQL database
- yarn หรือ npm

---

### Environment Variables

สร้าง `.env` ทั้ง backend และ frontend ตัวอย่าง:

```env
# Backend .env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
UI_URL=http://localhost:3001

# Frontend .env
NEXT_PUBLIC_API_URL=http://localhost:3000
```
