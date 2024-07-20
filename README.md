# ToDo List App

## Overview

The ToDo List App is a simple web application built with Node.js, Express, MongoDB, and EJS. It allows users to manage their tasks by creating, updating, viewing, and deleting them. The application categorizes tasks into pending and completed tasks.

## Features

- Add new tasks
- View all tasks
- View completed tasks
- View pending tasks
- Mark tasks as completed
- Edit task details
- Delete tasks

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or accessible through a MongoDB URI

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo_list_app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Ensure MongoDB is running on your machine or update the MongoDB connection string in `index.js` if using a remote database:
   ```javascript
   const dburl = "mongodb://0.0.0.0:27017/todoo";
   mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
todo_list_app/
├── models/
│   ├── todo.js
│   ├── completedTodo.js
├── public/
│   ├── css/
│   ├── js/
├── views/
│   ├── index.ejs
│   ├── completed-tasks.ejs
│   ├── pending-tasks.ejs
├── index.js
├── package.json
```

## API Endpoints

### GET /

Fetches all tasks and renders the main page with the list of tasks.

### GET /c

Fetches all completed tasks and renders the completed tasks page.

### GET /c1

Fetches all pending tasks and renders the pending tasks page.

### POST /

Creates a new task.

- Request body should contain:
  ```json
  {
    "todovalue": "Task description"
  }
  ```

### POST /comp/:id

Marks a task as completed by creating an entry in the completed tasks collection.

- Request body should contain:
  ```json
  {
    "todov": "Completed task description"
  }
  ```

### DELETE /:id

Deletes a task by its ID.

### PUT /todos/:id

Updates a task's completion status or description by its ID.

- Request body should contain:
  ```json
  {
    "completed": true
  }
  ```
  or
  ```json
  {
    "todos": "Updated task description"
  }
  ```

### DELETE /comp/:id

Deletes a completed task by its ID.

## Acknowledgements

- This application uses the following technologies:
  - Node.js
  - Express
  - MongoDB
  - EJS
  - body-parser

