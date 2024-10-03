# Walmart Clone 🛒

## 🌐 Live Demo

![Rent Wheels Preview](/assets/demo1.png)

![Rent Wheels Preview](/assets/demo2.png)

![Rent Wheels Preview](/assets/demo3.png)

Welcome to **Walmart Clone**, a robust e-commerce platform mimicking the experience of one of the world's largest retailers. This project showcases cutting-edge technology to create a fully functional, scalable, and fast platform for users to browse and shop. Here's an overview of the technologies used in this project:

⚡ **Next.js 14** for server-side rendering, intercepting, and parallel routing  
🔍 **Oxylabs** for scraping product data efficiently  
🎨 **Tailwind CSS** for building responsive and modern UI  
🖌️ **Shadcn** for sleek UI components  
🐻 **Zustand** for state management

## 🚀 Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Oxylabs account for web scraping

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/crist-pereyra/walmart-clone
   cd walmart-clone
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see Walmart Clone in action!

## 📂 Project Structure

Here's an overview of the project's structure:

```php
walmart-clone/
├── app/                    # Source code
│ ├── @modal/               # Parallel route for Basket Page
│ ├── basket/               # Shopping cart functionality Shopping and s
│ ├── product/              # Product page
│ ├── search/               # Results page
│ ├── globals.css           # CSS styles
│ ├── layout.tsx            # Main layout
│ └── page.tsx              # Main page
├── assets/                 # Images
├── components/             # Reusable React components
├── lib/                    # Oxylabs scrapping scripts and format scripts
├── stores/                 # Zustand store
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── next.config.mjs         # Next.js configuration
├── package-lock.json       # Lock file for npm
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Key Features

- **Home Page**: Modern and responsive landing page showcasing featured products.
- **Product Listings**: Browse and filter items across categories with real-time data.
- **Shopping Cart**: Users can add, remove, and update products in their cart.
- **Product Scraping**: Real-time product data scraping using Oxylabs.
- **State Management**: Smooth state management using Zustand.
- **Responsive UI**: Beautiful and responsive design powered by Tailwind CSS and Shadcn.
- **Advanced Routing**: Seamless user experience with Next.js intercepting and parallel routes.

Dive into the **Walmart Clone** experience! 🛒✨
