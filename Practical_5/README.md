# Implementing Cloud Bucket Storage with Supabase (Tiktok server)
- This practical focuses on upgrading a TikTok web application by migrating from local file storage to cloud storage using Supabase Storage. It enhances scalability, reliability, and performance while supporting better access control for user-uploaded videos and thumbnails.

## Table of Contents
- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Installation
### Backend Setup
1. Install Supabase SDK
2. Configure Supabase Client (src/lib/supabase.js)
3. Add Environment Variables in .env
4. Update Prisma Schema and Migrate:

### Frontend Setup
1. Install Supabase SDK
2. Configure Supabase Client
3. Add Environment Variables in .env.local

## Usage
**Uploading Files:**
- Users can upload videos and thumbnails directly from the frontend to Supabase Storage.
- The backend stores metadata and paths in the database.
**Serving Videos:**
- Video URLs and thumbnails are served from Supabase's global CDN.
- Access is controlled using Supabase policies.
**Testing:**
- Use the upload form and video cards in the frontend to test integration.
- Run seed and migration scripts to simulate production scenarios.

## Features
- Direct upload to Supabase from frontend
- Authenticated upload and public access control policies
- Global CDN-based video streaming
- Seamless migration of locally stored videos
- Clean schema management via Prisma ORM
- Secure, scalable, and maintainable cloud storage solution

## Technologies
- Supabase Storage
- PostgreSQL (via Supabase)
- Prisma ORM
- Node.js
- Next.js
- JavaScript (ES6)
- JWT Authentication
- bcrypt

## Conclusion
- By integrating Supabase Storage, the TikTok web application now supports scalable and reliable cloud-based file storage. This not only enhances performance and access speed via CDN but also adds better file access control and maintenance over traditional local file systems.

## Acknowledgment
- I would like to sincerely thank my instructor and peers for their guidance and feedback throughout the completion of this practical. Special appreciation goes to the open-source contributors and the developers of Supabase, Prisma, and Node.js whose tools and documentation made this implementation possible. Their resources provided clear direction and greatly accelerated the development process.

