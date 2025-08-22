NextCraft
NextCraft is a modern, full-stack e-commerce demo application built with Next.js, Tailwind CSS, and NextAuth.js. The project showcases a simple product catalog with dynamic routing, a clean and responsive user interface, and user authentication using Google.

Setup & Installation
To get this project running locally, follow these steps:

1. Clone the repository:

git clone <your-repository-url>
cd <your-repository-folder>

2. Install dependencies:

npm install
# or
yarn install

3. Set up environment variables:

Create a .env.local file in the root of your project and add the following variables:

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-nextauth-secret>

# Google OAuth Credentials
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

You can generate a NEXTAUTH_SECRET by running a command like openssl rand -base64 32 in your terminal.

Get your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from the Google Cloud Console.

4. Run the development server:

npm run dev
# or
yarn dev

The application will be accessible at http://localhost:3000.

Route Summary
This project includes several key pages:

/: The main landing page, which serves as a welcoming introduction to the store.

/products: The product listing page, where all products are displayed in a grid. This route uses client-side data fetching.

/products/[id]: The dynamic product details page. It displays detailed information for a specific product based on its ID.

/login: The user login page, which uses NextAuth.js to handle Google authentication.