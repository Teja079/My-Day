# MyDay — Pixel-Perfect Monday.com Clone (React + Node.js)

**Live demo:** [https://monday-8oy3.onrender.com](https://monday-8oy3.onrender.com)

MyDay is a table-style task board inspired by Monday.com. I focused on nailing the **look, feel, and interactions** of Monday while adding a few unique twists and solid end-to-end quality: realtime collaboration, robust state management, and Playwright E2E coverage.

If you already know Monday, jump to the [features](#application-features).  
If you’re new to Monday, read the short [description](#monday-description).  
If you just want screenshots, head to the [showcase](#showcase).

![Main board image](frontend/src/assets/img/readme/table.png "Board-main-page")

---

### Table of Contents
- [Recent Updates](#recent-updates)
- [Monday Description](#monday-description)
- [Application Features](#application-features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Showcase](#showcase)

## Recent Updates

### 🔧 Task Menu Modal Fixes (Latest)
**Status:** ✅ Fully fixed — every menu action works as expected.

I resolved several critical context-menu bugs:
- **Delete Task** — fixed immutable updates so items are actually removed from their groups.
- **Duplicate Task** — stable cloning with clean IDs and consistent UI refresh.
- **Create New Item Below** — corrected array copying; insertion works in all groups.
- **Open Task Modal** — reliable navigation to the task details view.

**Under the hood:**
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

**MyDay** mirrors these core workflows—D&D, realtime updates, rich task editing, filters, members, and more—so you won’t feel a difference in day-to-day use. Try it here: [MyDay live demo](https://monday-8oy3.onrender.com).

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

## Technologies
- **Stack:** MERN (MongoDB, Express, React, Node.js)
- **Realtime:** WebSockets for live board updates
- **API:** REST
- **Libraries:** Google Login, lodash, react-beautiful-dnd, and more
- **Styling:** Sass (functions, mixins, variables) for a pixel-perfect layout

**Testing & Quality**
- **Playwright** for end-to-end UI tests
- **ESLint** for linting and code quality
- Automated coverage for critical user flows

## Getting Started

Clone the repo:

```bash
git clone https://github.com/idandavid1/My-Day
