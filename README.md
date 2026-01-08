# URL Shortener

A simple but powerful MERN stack application to shorten long URLs, manage them from a personal dashboard, and track visit counts.

## 🔗 Live Demo

You can explore the live version of the application here:  
 **[Live Website](https://url-shortener-m.web.app)** , 
 **[Backend Repo](https://github.com/mahadi40011/URL-Shortener-Backend.git)**

### Test Credentials 

- **Email:** `mehedihasan@gmail.com`
- **Password:** `12af4d`

---

##  Key Features

- **Instant URL Shortening:** Generate a secure, 8-character random short code for any long URL instantly.
- **Real-time Analytics:** Track the total number of visits for each link directly from your dashboard.
- **Secure Authentication:** Firebase-powered login and signup (Google/Email) to keep your links private and manageable.
- **Personal Dashboard:** A clean and responsive dashboard to view, manage, and delete your shortened links.
- **Advanced Tech Stack:** Built with the latest **React 19**, **Tailwind CSS 4**, and **Express 5** for top-tier performance.
- **Protected Routes:** Ensures that only logged-in users can generate links and access their dashboard data.
- **Usage Limits:** Smart limit tracking that allows users to create up to 100 links (Free Tier).
- **Fully Responsive UI:** Optimized for all devices, from desktop monitors to mobile screens, using DaisyUI 5.
- **Smart Data Fetching:** Utilizes TanStack Query for seamless data synchronization without manual page refreshes.

---

## Setup Instructions

Follow these steps to get the project running locally:

### **1. Clone the repository:**

```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name
```

### **2. Install dependencies:**

```bash
  npm install
```

### **3. Set up environment variables:**

Create a `.env` file and add required variables. Example:

```env
  PORT=5000
  DATABASE_URL=mongodb://localhost:27017/yourdb
  CLIENT_DOMAIN=http://localhost:5173
```

### **4. Run the development server:**

```bash
  npm run dev
```

---

## Project Structure

### Fronend 

```plaintext
URL-Shortener-Frontend/
├── public/                 # Static assets like favicon and icons
├── src/
│   ├── assets/             # Images, styles, and local assets
│   ├── components/         # Reusable UI components
│   │   ├── Shared/         # Navbar, Footer, Container, LoadingSpinner
│   │   ├── TableRows/      # Dashboard table row components
│   ├── hooks/              # Custom React hooks (useAuth, useAxiosSecure)
│   ├── layouts/            # Main layout structures (Main, DashboardLayout)
│   ├── pages/              # Page components
│   │   ├── Home/           # Landing page with URL shortener input
│   │   ├── Dashboard/      # User's URL management dashboard
│   │   ├── Login/          # Authentication pages
│   │   └── SignUp/         # Registration pages
│   ├── providers/          # Context providers (AuthProvider, QueryProvider)
│   ├── routes/             # React Router route definitions
│   └── main.jsx            # Entry point of the application
├── .env.local              # Environment variables (VITE_SERVER_URL)
├── .gitignore              # Files and folders to ignore in Git
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

### Backend

```plaitext
URL-Shortener-Backend/
├── node_modules/           # Project dependencies
├── index.js                # Main entry point of the Express server
├── .env                    # Environment variables (DB_USER, DB_PASS, JWT_SECRET)
├── .gitignore              # Files to be ignored by Git (node_modules, .env)
├── package.json            # Scripts and dependency list
├── package-lock.json       # Locked versions of dependencies
└── vercel.json             # Configuration for Vercel deployment (if applicable)
```

---

##  API Endpoints 

### Base Url

```
https://url-shortener-main1.vercel.app
```

### 1 Create Short Code and save data

- **Method:** POST
- **Endpoint:** /generate-shortCode
- **Purpose:** Create a new short code and all data save into database
- **Auth Required:** yes (JWT)

### 2 Read All URLData

- **Method:** GET
- **Endpoint:** /all-urls
- **Purpose:** Fetch all urls data filtered by user email
- **Auth Required:** yes (JWT)

### 3 Read Single URLData

- **Method:** GET
- **Endpoint:** /:shortCode
- **Purpose:** Redirect to the original URL
- **Auth Required:** yes (JWT)

### 4 Delete Event

- **Method:** DELETE
- **Endpoint:** /delete-url/:id
- **Purpose:** Delete a specific URL entry
- **Auth Required:** yes (JWT)

---

##  Design Decisions & Tech Stack

This project leverages the latest versions of modern web technologies to ensure performance, type safety, and a seamless developer experience.

### 1. Bleeding Edge Tech Stack (React 19 & Express 5)
I have utilized **React 19** and **Express 5** (Beta/Alpha versions) to take advantage of the latest improvements in rendering performance and asynchronous routing. Using these versions demonstrates a commitment to staying updated with the evolving JavaScript ecosystem.

### 2. Styling with Tailwind CSS 4 & DaisyUI 5
Instead of traditional CSS, I used **Tailwind CSS 4** for its optimized engine and **DaisyUI 5** for accessible, pre-designed UI components. This combination allowed for rapid UI development while maintaining a unique and professional aesthetic.

### 3. State Management & Data Fetching (TanStack Query v5)
To handle server state, I implemented **TanStack React Query v5**. This decision was made to:
- Reduce unnecessary API calls with smart caching.
- Provide a smooth UX with automatic background refetching and loading states.
- Simplify complex data synchronization between the UI and MongoDB.

### 4. Efficient Form Handling (React Hook Form)
For URL inputs and authentication, **React Hook Form** was chosen over traditional state-controlled forms. This ensures minimal re-renders and provides a robust validation system out of the box.

### 5. Secure Identity Management (Firebase & Firebase Admin)
Authentication is handled via **Firebase SDK** on the frontend and **Firebase Admin SDK** on the backend. This architecture ensures:
- Secure, industry-standard login/signup flows.
- Seamless JWT integration to verify user identity before performing database operations.

### 6. Modern Backend Architecture
- **MongoDB (v7):** Used for its high-performance document-based storage.
- **CORS & Dotenv:** Implemented to manage cross-origin requests and environment-specific configurations securely.
- **Node.js Crypto:** Used for generating collision-resistant short codes without external package overhead.

---

##  Known Limitations

While the application is functional, there are a few limitations currently:

### 1. Free Usage Quota
Currently, each user is limited to creating 100 short links. There is no automated system yet to upgrade this limit via payments.

### 2. No Custom Aliases (Slugs)
Users cannot choose their own custom short codes (e.g., `url.com/my-link`). The system automatically generates a random 8-character hex code using the `crypto` module.

### 3. Basic Analytics
The system currently only tracks the `totalVisit` count. Detailed analytics such as the visitor's geographic location, device type, or browser information are not yet implemented.

### 4. Link Expiration
There is no feature to set an expiration date for the short links. Once created, a link remains in the database indefinitely unless manually deleted by the user.

### 5. No Bulk Actions
The dashboard does not currently support bulk operations, such as deleting multiple links at once or exporting link data to a CSV/Excel file.
