# React eCommerce Practice Project

A React-based eCommerce practice project built to strengthen frontend engineering skills through real-world application patterns. The project focuses on reusable components, global state management, asynchronous data fetching, routing, form handling, and progressive refactoring.

---

# Project Overview

This project was built as a practical way to reinforce modern React development concepts by applying them within a small eCommerce application.

The aim was to move beyond simple isolated exercises and work through common frontend challenges such as:

- building reusable UI components
- managing local and global state
- handling asynchronous API data
- implementing routing
- validating forms
- improving loading and error states
- structuring code for scalability

---

# Features

UI Components

- Reusable Button component
- Quantity Selector
- Modal component
- Form Input component
- Skeleton loading cards

Product Features

- Product grid rendering
- Product cards with quantity selection
- Dynamic product fetching from Fake Store API
- API data sanitisation before display

Cart Features

- Add to cart functionality
- Cart quantity updates
- Cart item count in header
- Cart state managed with Redux Toolkit

Filtering & Sorting

- Category filtering
- Price sorting
- Derived state rendering

Checkout

- Checkout form
- Validation logic
- Custom hook extraction ("useCheckoutForm")

Routing

- Homepage route
- Cart route
- Checkout route

UX Improvements

- Loading skeletons
- Styled error states
- Modal confirmation feedback

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router

---

# API Used

Product data is fetched from:

https://fakestoreapi.com/products

---

# Installation

Clone the repository:

git clone https://github.com/your-username/reactjs-project.git

Move into the project folder:

cd reactjs-project

Install dependencies:

npm install

Run the development server:

npm run dev

The app will start locally at:

http://localhost:5173

---

# Build for Production

To create a production build:

npm run build

To preview the production build locally:

npm run preview

---

# Project Structure

src/
├── components/
│   ├── products/
│   ├── ui/
│
├── features/
│   ├── cart/
│   ├── products/
│
├── hooks/
│
├── pages/
│
├── store/

---

# Learning Goals Covered

This project was designed to practice:

- component composition
- prop design
- state lifting
- Redux reducers and actions
- async thunks
- loading/error UI states
- derived state
- refactoring into hooks
- scalable folder structure

---

# Future Improvements

Potential next steps:

- search functionality
- authentication
- persistent cart storage
- backend integration
- deployment on Vercel

---

# Author
Joseph McEvoy

Built as a structured React learning project focused on applying production-style frontend patterns.
