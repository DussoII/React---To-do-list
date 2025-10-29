To-Do List (React)

    A small to-do list project built with React, developed to practice basic concepts of the library, such as components, state, props, events, and persistence with localStorage.

======================================================

Technologies Used

    React (with Hooks — useState, useEffect)

    Vite (for build and dev server)

    JavaScript (ES6+)

    Plain CSS for styling

    localStorage (to save data in the browser)

======================================================

Features

    Add new tasks

    List added tasks

    Automatically save tasks in localStorage (persists after page refresh)

    Clear the input field after adding a task

    Reusable component structure (New_item_form, Lista, Lista_board)

======================================================

Folder Structure


src/
├── App.jsx            # Main component
├── components/
│   ├── New_item_form.jsx
│   ├── Lista.jsx
│   └── new_item_form_context.jsx
├── contexts/
│   └── toDo_context.jsx
├── styles.css         # Global styles
└── main.jsx           # Application entry point


======================================================

How to Run the Project

# Clone the repository
git clone https://github.com/DussoII/React---To-do-list

# Install dependencies
npm install

# Run the development server
npm run dev


Open in the browser at:
http://localhost:5173


======================================================


Concepts Practiced

    Componentization

    Communication between components via props

    Local state (useState)

    Side effects (useEffect)

    Form handling

    List rendering

    Simple persistence with localStorage

======================================================

Learnings

This project was created to practice React logic and data flow. It helped reinforce understanding of:

    Controlled form inputs

    Updating arrays immutably

    Component lifecycle with useEffect

    Passing and using props between components

    Next Steps

    Add a delete task button

    Allow marking tasks as completed

    Implement filters (all / completed / pending)

    Add simple animations

======================================================

Author

João Dusso
Project created solely for study and React practice.