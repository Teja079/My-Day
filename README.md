# MyDay — Pixel-Perfect Monday.com Clone (React + Node.js)


MyDay is a table-style task board inspired by Monday.com. I built it to match Monday’s **look, feel, and interactions** while adding a few unique twists and solid end-to-end quality: **realtime collaboration**, robust state management, and **Playwright** E2E coverage.


---

## Table of Contents
- [Recent Updates](#recent-updates)
- [Monday Description](#monday-description)
- [Application Features](#application-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Testing](#testing)
- [Showcase](#showcase)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

---

## Recent Updates

### 🔧 Task Menu Modal Fixes (Latest)
**Status:** ✅ Fully fixed — every menu action works as expected.

I resolved several critical context-menu bugs:
- **Delete Task** — fixed immutable updates so items are actually removed from their groups.
- **Duplicate Task** — stable cloning with clean IDs and consistent UI refresh.
- **Create New Item Below** — corrected array copying; insertion works in all groups.
- **Open Task Modal** — reliable navigation to the task details view.

**Under the hood**
- Adopted strict **immutable React state** patterns; removed hidden mutations.
- Improved error handling and state sync between table and details views.
- Added **Playwright** tests covering each menu action end-to-end.

### 🎯 Table Component Restoration
**Status:** ✅ Complete — table is fully operational.

Fixes include:
- **Component Picker** — resolved `UNKNOWN StatusPicker/MemberPicker/DatePicker` by normalizing registry names from **PascalCase → kebab-case**.
- **Dynamic Cell Rendering** — robust, data-driven cell components.
- **Drag & Drop** — stabilized **react-beautiful-dnd** and fixed `draggableId` issues.
- **Task ID Generation** — introduced reliable unique ID creation.

I also implemented **Magic Link authentication** alongside email/password login.

---

## Monday Description
Monday is a collaborative work manager built around boards: each **board** holds **groups** of **items/tasks** with columns like status, priority, owner, and due date. Users can rearrange everything with Drag & Drop, collaborate live, and track activity.

**MyDay** mirrors these core workflows—D&D, realtime updates, rich task editing, filters, members, and more—so you won’t feel a difference in day-to-day use.  
Try it here: https://monday-8oy3.onrender.com

---

## Application Features
- **Boards & Groups**
  - Create, remove, duplicate, and reorder groups and tasks with **Drag & Drop**.
  - Per-board **activity log** with who-did-what.
  - Configurable **columns** you can add/remove.
- **Deep Task Editing**
  - Status, priority, due date, members, files/images, numbers, last updated by.
  - Duplicate, move, and full **activity log** per task.
  - **Live chat** in the task details panel.
- **Groups**
  - **Color picker** (palette) for group headers (lodash-powered utilities).
  - **Filtering** by members, group, and task title.
- **Auth**
  - Email/password with secure hashing + **Google Login**.
  - **Magic Link** sign-in flow for quick access.
- **Polish**
  - Smooth D&D, responsive UI, and pixel-perfect styling faithful to Monday.

---

## Tech Stack
- **Frontend:** React, react-beautiful-dnd, MUI, Day.js, Axios, Sass
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Realtime:** WebSockets (Socket.IO)
- **Auth:** JWT + cookies, Google Login, Magic Link
- **Quality:** Playwright (E2E), ESLint
- **API:** REST

---

Board

Everything you expect from Monday: D&D, live updates, deep task editing, side menu, board members, and more — try the live demo.

Signup / Login

End-to-end auth flow with secure hashing, middlewares, Google Login, and Magic Link.

Task Details

Per-task activity stream and real-time chat.




Mobile

Responsive from day one using mixins, conditional rendering, and a mobile-first approach.

<img src="frontend/src/assets/img/readme/phone-board.png" width="25%" style="float: left"/><img src="frontend/src/assets/img/readme/chat-phone.png" width="25%" style="float: left;"/><img src="frontend/src/assets/img/readme/favorite-phone.png" width="25%" style="float: left;"/><img src="frontend/src/assets/img/readme/activity-phone.png" width="25%" style="float: left;"/>

Roadmap

Subitems + column customization UI

Board templates & quick-create flows

Notifications center + @mentions

Expand Playwright coverage (drag-and-drop paths, filters)

Docker compose for one-command local setup

License

This project is for educational/portfolio purposes and is not affiliated with Monday.com.


