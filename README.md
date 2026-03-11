# PPOB Web App

A modern, high-performance Payment Point Online Bank (PPOB) web application built with Next.js 16 and Tailwind CSS 4. This application provides a seamless interface for various digital transactions.

## 🚀 Features

- **Top-up & Packages**: Multi-provider mobile credit (Pulsa) and data packages.
- **Utility Bills**: Integrated PLN (Electricity), PDAM (Water), and BPJS payments.
- **E-Money**: Quick top-ups for popular digital wallets.
- **Gaming**: In-game currency and voucher top-ups.
- **Checkout & Receipt**: Streamlined transaction flow with digital receipt generation.
- **Responsive Design**: Optimized for mobile and desktop viewing with light/dark mode support.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Styling**: React 19, Tailwind CSS 4, Lucide React (Icons)
- **Database Layer**: Sequelize ORM with SQL Server (`mssql`) & PostgreSQL support.
- **Development**: TypeScript, nodemon for live reload in dev mode.

## 📋 Prerequisites

- Node.js (Latest LTS recommended)
- SQL Server or PostgreSQL database
- Basic knowledge of Next.js and Tailwind CSS

## ⚙️ Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd ppob
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (refer to `.env.example` if available):

   ```env
   DB_CONNECTION=sqlsrv
   DB_HOST=your_host
   DB_PORT=1433
   DB_DATABASE=your_db
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   npm run start:dev  # (using nodemon)
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js 16 App Router (pages and layouts).
- `app/pages/`: Core application views (Home, TopUp, Checkout, etc.).
- `app/pages/components/`: Reusable UI components.
- `lib/`: Database configuration and utility functions.
- `types.ts`: Shared TypeScript interfaces.
- `public/`: Static assets (images, icons).

## 📄 License

This project is private and for internal use only.
