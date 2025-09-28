# 🌐 Personal Portfolio

---

### 🚀 Live Demo

Check out the live portfolio: **[click here](https://vishnunv-portfolio.vercel.app)**

---

A modern and responsive portfolio website built with **Next.js** and **Tailwind CSS**, showcasing my journey as a C++ problem solver and full-stack developer specializing in the MERN stack.

## ✨ Features

* ⚡ **Fast & Responsive** – Powered by Next.js 14 and Tailwind CSS
* 🎨 **Modern UI** – Clean, minimal design with glassmorphism effects
* 📂 **Projects Showcase** – Interactive project filtering and detailed views
* 💼 **Services Section** – Professional service offerings
* 🧑‍💻 **About Me** – Technical journey and skill progression
* 📞 **Contact Form** – Way to get in touch
* 📱 **Mobile First** – Fully responsive across all devices
* 🎯 **SEO Optimized** – Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
* **Next.js 14** – React Framework with App Router
* **React 18** – UI Library
* **Tailwind CSS** – Utility-first CSS Framework
* **Lucide React** – Beautiful icons
* **TypeScript** – Type safety (optional)

### Features & Integrations
* **Web3Forms** – Contact form handling
* **Local Storage** – Theme persistence
* **Responsive Design** – Mobile-first approach

### Deployment
* **Vercel** – Deployment platform
* **GitHub** – Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone the repository

```bash
git clone https://github.com/vnv2315/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup environment variables

Create a `.env.local` file in the root directory:

```env
# Web3Forms Contact Form
NEXT_PUBLIC_WEB3FORM_KEY=your_web3forms_access_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Build for production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📦 Deployment

This project is optimized for deployment on **Vercel**:


### Environment Variables for Production
```env
NEXT_PUBLIC_WEB3FORM_KEY=your_actual_web3forms_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📂 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Profile images, project screenshots
│   ├── resume.pdf         # Downloadable resume
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.js     # Navigation component
│   │   ├── HomePage.js   # Hero section
│   │   ├── About.js      # About section
│   │   ├── Projects.js   # Projects showcase
│   │   ├── Services.js   # Services offered
│   │   ├── Contact.js    # Contact form
│   │   └── Footer.js     # Footer component
│   ├── pages/            # Next.js pages (if using Pages Router)
│   │   ├── index.js      # Main page
│   │   └── _app.js       # App wrapper
│   ├── styles/           # Global styles
│   │   └── globals.css   # Tailwind imports
│   └── utils/            # Utility functions
├── .env.local            # Environment variables (not committed)
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🧑‍💻 Author

**Vishnu N V**


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vnv2315/Portfolio/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show your support

If you found this project helpful or interesting, please give it a ⭐ star on GitHub!



<div align="center">
  
**Built with ❤️ using Next.js and Tailwind CSS**

</div>
