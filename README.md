# AI Chat App

A ChatGPT-style AI chat application built with React and powered by OpenRouter API. Users can have context-aware conversations with an AI assistant that remembers previous messages in the session.

**Live Demo:** [Your Vercel URL here]

---

## Features

- Chat-based UI with user and AI message bubbles
- Context-aware conversation (full message history sent with each request)
- "AI is typing..." loading indicator
- Auto-scroll to the latest message
- Send message with Enter key or Send button
- Error handling with user-friendly messages
- Responsive layout for mobile and desktop

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool and dev server |
| Axios | HTTP requests |
| OpenRouter API | AI model integration (GPT-3.5 Turbo) |

---

## Project Structure

```
ai-chat-app/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx   # Input box, send button, API call logic
│   │   └── ChatWindow.jsx  # Message list with auto-scroll
│   ├── App.jsx             # Root component, state management
│   └── main.jsx            # Entry point
├── .env                    # API key (not committed to git)
├── .gitignore
└── package.json
```

---

## Getting Started Locally

### Prerequisites

- Node.js v18 or higher
- An [OpenRouter](https://openrouter.ai) account with an API key

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-chat-app.git
cd ai-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a `.env` file in the root of the project:

```
VITE_APP_KEY=your_openrouter_api_key_here
```

To get an API key:
1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Go to **Keys** → **Create Key**
3. Copy the key and paste it in your `.env` file

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploying to Vercel

> The `.env` file is gitignored and never pushed to GitHub, so you must add the API key directly in Vercel.

### Steps

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Before deploying, go to **Settings → Environment Variables**
4. Add the following variable:

| Name | Value |
|---|---|
| `VITE_APP_KEY` | your OpenRouter API key |

5. Click **Deploy**

### Updating the API key later

If your key changes, you do not need to touch the code:
1. Vercel Dashboard → your project → **Settings → Environment Variables**
2. Update the value of `VITE_APP_KEY`
3. Go to **Deployments** → click the latest → **Redeploy**

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_APP_KEY` | OpenRouter API key | Yes |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## Author

**Prakash Devapujyula**
