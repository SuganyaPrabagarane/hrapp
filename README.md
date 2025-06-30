# HRAPP

**HRAPP** is a web application designed to manage and view the list of employees working at Helsinki Business College. It provides detailed information about each employee in an organized and user-friendly interface.

## Key Features

- Displays all employees in a clean card format.
- Allows users to **add new employees**, saving their details to both the database and the UI in real-time.
- Supports **editing** existing employee information with options to save or cancel changes.
- Enables **deletion** of employee records with a confirmation prompt before proceeding.
- Shows confirmation messages when an employee’s details are successfully added or edited.
- Automatically displays messages based on employee experience:
  - 🎉 For work anniversaries at 5, 10, 15 years: **"Schedule recognition meeting"**
  - 🔔 For employees with less than 6 months of service: **"Schedule probation review"**
- Displays an animal emoji for each employee based on the selected animal.
- Users can **search** for employees by **Name**, **ID**, and **Department**.
- Employees can be **filtered** by **Title** using a dropdown or search interface.
- Includes a custom React hook, **`useAxios`**, to manage all REST API calls cleanly and efficiently.

## Technology Used

- **React** – for building the user interface
- **JSON Server** – as a mock backend database
- **Custom Axios Hook** (`useAxios`) – for handling API requests
- **CSS Modules** – for modular and scoped styling
