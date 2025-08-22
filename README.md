# NextCraft

NextCraft is a modern e-commerce platform built on the **Next.js App Router**. It features a server-driven architecture with client-side interactivity, showcasing robust data fetching, authentication, and a professional, responsive user interface designed with **Tailwind CSS**.

---

## 🚀 Key Features

- **Next.js App Router**: Utilizes the latest Next.js features for powerful, server-first rendering and routing.  
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.  
- **NextAuth.js**: Implements secure and easy user authentication with Google provider.  
- **Dynamic Routing**: Displays detailed product information via a dynamic route (`/products/[id]`).  
- **API Routes**: Manages product data with a RESTful API.  

---

## 🛠 Getting Started

### Prerequisites
- Node.js (version **18 or higher**)  
- npm (comes with Node.js)

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/nextcraft.git
cd nextcraft

Install dependencies:
npm install

⚙️ Environment Variables
Create a .env.local file in the root of your project and add the following:
# NextAuth.js
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000

# Google OAuth Credentials
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# MongoDB Connection String (if applicable)
MONGODB_URI=<your-mongodb-connection-string>



NEXTAUTH_SECRET: A random string used to hash tokens, sessions, and cookies.
Generate one with:

openssl rand -base64 32

▶️ Running the Development Server
Start the application with:

Then open http://localhost:3000
 in your browser.


 📍 Route Overview

/ → Home Page – Main landing page

/products → Product Listing – Displays all available products

/products/[id] → Product Details – Dynamic route for a specific product

/login → Login Page – Google SSO authentication




🌐 Deployment

This project is optimized for deployment on Vercel (creators of Next.js).

Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

Import the repo into your Vercel Dashboard
.

Deploy instantly with zero configuration.






