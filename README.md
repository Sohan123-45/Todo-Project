# React Todo App 📝

A feature-rich Todo application built with **React** and **Vite**. This project demonstrates state management, component-based architecture, and local storage integration to provide a seamless task management experience.

## ✨ Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Categorization**: View your tasks by categories:
  - 📋 **All Tasks**
  - ⏳ **Active Tasks**
  - ✅ **Completed Tasks**
- **Search Capabilities**: Find specific tasks quickly using the built-in search bar.
- **Edit/Delete**: Update existing tasks or remove them entirely.
- **Local Storage Persistence**: Your tasks are saved locally, meaning you won't lose your data when you refresh or close the browser.

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Standard CSS Modules / Plain CSS
- **Linting**: ESLint

## 📂 Project Structure

```text
todo-project/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ActiveTasks     # Component for active tasks
│   │   ├── AddTaskWrapper  # Form to add new tasks
│   │   ├── AllTasks        # Component to list all tasks
│   │   ├── CompletedTasks  # Component for completed tasks
│   │   ├── EditTask        # Component for editing a task
│   │   └── ModeToggle      # Theme toggler component
│   ├── btn-functions/      # Button helper functions
│   │   ├── backTask.jsx
│   │   └── frontTask.jsx
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-github-repo-url>
   cd todo-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License.
