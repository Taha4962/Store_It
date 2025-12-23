<div align="center">
  <br />
  <h1>📦 Store_It</h1>
  <h3>Modern File Storage & Management Platform</h3>
  <p>A full-stack cloud storage solution built with Next.js 15, React 19, and Appwrite</p>
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
</div>

---

## 📋 Table of Contents

- [🤖 Introduction](#introduction)
- [⚡ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [📂 Project Structure](#project-structure)
- [🚀 Quick Start](#quick-start)
- [🧠 What I Learned](#what-i-learned)
- [🔮 Future Enhancements](#future-enhancements)
- [👤 Author](#author)
- [⭐ Support](#support)

---

## <a name="introduction">🤖 Introduction</a>

**Store_It** is a modern, full-stack file storage and management platform that empowers users to securely upload, organize, share, and manage their files effortlessly. Built with the latest web technologies including Next.js 15 and Appwrite, this application demonstrates professional-grade cloud storage functionality with a focus on security, performance, and user experience.

The platform handles various file types (documents, images, videos, audio) and provides features like real-time search, advanced sorting, file sharing, and comprehensive storage analytics - all wrapped in a beautiful, responsive interface.

---

## <a name="features">⚡ Features</a>

### 🔐 **Authentication & Security**

- Secure user registration and login with Appwrite authentication
- OTP (One-Time Password) verification for enhanced security
- Session management and protected routes
- Account recovery and password reset

### ☁️ **File Management**

- **Multi-Format Upload**: Support for documents, images, videos, audio, and more
- **Drag & Drop**: Intuitive file upload with react-dropzone
- **File Operations**: Rename, delete, download, and view files
- **File Sharing**: Share files with other users via email
- **Storage Analytics**: Real-time tracking of storage usage by file type

### 📊 **Dashboard & Analytics**

- Visual storage breakdown with interactive charts (Recharts)
- Total and consumed storage display
- Recent uploads tracking
- File categorization by type (Documents, Images, Media, Others)
- Storage usage percentages and statistics

### 🔍 **Search & Filter**

- Global search across all files
- Real-time search with debouncing for performance
- Filter by file type (documents, images, media, others)
- Advanced sorting options (by name, date, size)

### 🎨 **User Interface**

- Modern, minimalist design with Tailwind CSS
- Fully responsive layout for all devices
- Dark mode compatible UI components (ShadCN)
- Smooth animations and transitions
- Mobile-friendly navigation

### ⚡ **Performance**

- Built with Next.js 15 App Router for optimal performance
- Server-side rendering (SSR) for faster initial loads
- React 19 features for enhanced reactivity
- Optimized image handling and lazy loading

---

## <a name="tech-stack">🛠️ Tech Stack</a>

### **Frontend**

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React version with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Re-usable component library

### **Backend & Services**

- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service (BaaS)
  - Authentication & user management
  - Database (Collections & Documents)
  - File storage with bucket management
  - Real-time capabilities

### **Key Libraries**

- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation
- **Recharts** - Data visualization and charts
- **React Dropzone** - File upload interface
- **Lucide React** - Modern icon library
- **Input OTP** - OTP input component
- **use-debounce** - Search optimization

### **Development Tools**

- ESLint & Prettier - Code quality and formatting
- Turbopack - Fast development builds

---

## <a name="project-structure">📂 Project Structure</a>

```
storage-management-main/
├── app/
│   ├── (auth)/           # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/           # Main application pages
│   │   ├── [type]/       # Dynamic file type pages
│   │   └── page.tsx      # Dashboard
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   ├── AuthForm.tsx      # Authentication form
│   ├── Card.tsx          # File card component
│   ├── Chart.tsx         # Storage analytics chart
│   ├── FileUploader.tsx  # File upload component
│   ├── Header.tsx        # Page header
│   ├── Search.tsx        # Search component
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Sort.tsx          # Sorting dropdown
│   └── ...
├── lib/
│   ├── actions/
│   │   ├── file.actions.ts    # File operations
│   │   └── user.actions.ts    # User operations
│   ├── appwrite/
│   │   ├── config.ts          # Appwrite configuration
│   │   └── index.ts           # Appwrite client setup
│   └── utils.ts               # Helper functions
├── constants/
│   └── index.ts          # App constants
├── types/
│   └── index.d.ts        # TypeScript type definitions
├── public/
│   └── assets/           # Static assets
└── package.json
```

---

## <a name="quick-start">🚀 Quick Start</a>

### **Prerequisites**

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) or yarn

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Taha4962/Store_It.git
cd Store_It
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Set Up Appwrite**

1. Create an account on [Appwrite](https://appwrite.io/)
2. Create a new project
3. Set up the following:
   - **Database**: Create a database
   - **Collections**: Create collections for users and files
   - **Storage**: Create a storage bucket
   - **Authentication**: Enable email/password authentication

### **4️⃣ Environment Variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your_project_id"
NEXT_PUBLIC_APPWRITE_DATABASE="your_database_id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your_users_collection_id"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your_files_collection_id"
NEXT_PUBLIC_APPWRITE_BUCKET="your_bucket_id"
NEXT_APPWRITE_KEY="your_api_key"
```

Replace the placeholder values with your actual Appwrite credentials.

### **5️⃣ Run the Application**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## <a name="what-i-learned">🧠 What I Learned</a>

Building this project helped me develop expertise in:

- **Modern Full-Stack Development**: Implementing a complete application with Next.js 15 App Router and server actions
- **Authentication Flows**: Secure user authentication with OTP verification and session management
- **File Handling**: Managing file uploads, storage, and retrieval with Appwrite Storage
- **State Management**: Efficient form handling with React Hook Form and Zod validation
- **Data Visualization**: Creating interactive charts with Recharts for storage analytics
- **TypeScript Best Practices**: Writing type-safe code with proper interfaces and type definitions
- **Performance Optimization**: Implementing debouncing, lazy loading, and SSR for better performance
- **Component Architecture**: Building reusable, maintainable components with ShadCN UI
- **Backend Integration**: Working with Appwrite SDK for database operations and file storage
- **Responsive Design**: Creating pixel-perfect, mobile-first interfaces with Tailwind CSS

---

## <a name="future-enhancements">🔮 Future Enhancements</a>

- 🔍 **Advanced Search** - Implement full-text search with filters
- 🤖 **AI Integration** - AI-powered file organization and tagging
- 📊 **Analytics Dashboard** - Detailed usage statistics and insights
- 🔐 **Role-Based Access** - Multi-user permissions and roles
- 💬 **File Comments** - Collaborative commenting on files
- 🔄 **Version Control** - File versioning and history
- 📱 **Mobile App** - Native mobile application
- 🌐 **Multi-language** - Internationalization support
- 🎨 **Themes** - Multiple theme options
- ⚡ **Real-time Sync** - Live updates across devices

---

## <a name="author">👤 Author</a>

**Taha Khan**

- GitHub: [@Taha4962](https://github.com/Taha4962)
- LinkedIn: [Taha Khan](https://www.linkedin.com/in/taha-khan32)

---

## <a name="support">⭐ Support</a>

If you found this project helpful or learned something new, please consider:

- Giving it a ⭐ on [GitHub](https://github.com/Taha4962/Store_It)
- Sharing it with others
- Following for more projects

---

<div align="center">
  <p>Built with ❤️ by Taha Khan</p>
  <p>© 2025 Store_It. All rights reserved.</p>
</div>
