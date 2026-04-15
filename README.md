# KeenKeeper

**KeenKeeper** is a personal relationship manager that helps you stay intentional about the friendships that matter most. Track interactions, monitor connection health, and get a clear picture of who you've been keeping in touch with — and who might need a little more attention.

---

## Tech Stack

| Technology                                                 | Role                         |
| ---------------------------------------------------------- | ---------------------------- |
| [Next.js 16](https://nextjs.org)                           | React framework (App Router) |
| [React 19](https://react.dev)                              | UI library                   |
| [Tailwind CSS 4](https://tailwindcss.com)                  | Styling                      |
| [Recharts](https://recharts.org)                           | Data visualization           |
| [Lucide React](https://lucide.dev)                         | Icon set                     |
| [React Toastify](https://fkhadra.github.io/react-toastify) | Toast notifications          |

---

## Key Features

### 🗂 Friend Dashboard

Browse your full circle at a glance. Each friend card shows their current connection status — **On Track**, **Almost Due**, or **Overdue** — so you always know who deserves a message.

### 📅 Interaction Timeline

A chronological log of every call, text, and video chat across all your friends. Filter by interaction type, sort by date, and search by name or note to find exactly what you're looking for.

### 📊 Friendship Analytics

Visual breakdowns of your interaction habits — see how your time is split across calls, texts, and video chats, and get a health snapshot of your entire friendship circle in one view.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.js           # Home / friend dashboard
│   ├── timeline/         # Interaction timeline
│   ├── stats/            # Friendship analytics
│   └── [slug]/           # Individual friend profile
├── components/
│   ├── layout/           # Page-level components
│   └── ui/               # Reusable UI primitives
├── context/              # React context (FriendsContext)
└── providers/            # App-wide providers
public/
├── friends.json          # Friend data
└── interactions.json     # Interaction history
```
