# FilmaChest

A simple movie management site built with authentication, movie listing, and admin functionalities.

## Features

- Secure user authentication system that allows users to sign up, log in, and log out.
- Display a user-friendly list of movies with basic details (e.g., title, thumbnail).
- Users can click on a movie to view detailed information including the title, description, thumbnail, category, release date.
- Search functionality allows users to find movies by keywords in title, or description.
- Filtering options by categories.
- Admins can add new movies by providing movie details.
- Admins can modify movie details directly from the admin dashboard.
- Admins can remove movies, ensuring the content remains current.
- Users have their own profile page where they can update personal information like name and password.

## Technologies Used

- **React.js**: For building dynamic and interactive user interfaces.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Inertia.js**: To create a modern single-page application (SPA) experience, allowing seamless navigation between pages.
- **Laravel**: PHP framework for building the backend API and managing the server-side logic.
- **Sanctum**: For handling secure authentication and API token management.
- **PostgreSQL** (or any other database of your choice configured in Laravel).

## Installation

To get started with **FilmaChest**, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** and **npm**
- **PHP** and **Composer**
- **PostgreSQL** (or other preferred database)
  
### Step 1: Clone the repository

```bash
git clone https://github.com/anass17/FilmaChest.git
cd filmaChest
```

### Step 2: Set up the backend

- Install Laravel dependencies:

```bash
composer install
```

- Set up the environment file:

```bash
cp .env.example .env
php artisan key:generate
```

- configure your database settings

- Run migrations to set up the database schema:

```bash
php artisan migrate
```

### Step 3: Set up the frontend

```bash
npm install
```

### Step 4: Run the application

```bash
php artisan serve
npm run dev
```

### Step 5: Open the app in your browser:

Now you can access the app at http://localhost:8000 in your browser.


## Screenshots and Videos

### Screenshots:

![Register](https://github.com/user-attachments/assets/1435eae8-02ca-4509-a4e5-69028b81b46f)
*Register form to create a new account.*

![Login](https://github.com/user-attachments/assets/756b2f24-6d21-4cb8-a626-0f4211a54667)
*login form to access user account.*

![List of Movies](https://github.com/user-attachments/assets/0c9d2ea4-1df8-43e2-a06e-5f4832ae0b55)
*User's view of the movie list with filtering options.*

![Movie's Details](https://github.com/user-attachments/assets/24f3ae9b-bcd7-4400-ab8c-c832ff424285)
*User's view of the movie details.*

![Dashboard](https://github.com/user-attachments/assets/2b14f847-0519-4900-b97a-e7100b0fe156)
*Admin Dashboard with movie management features.*

![Manage Movies](https://github.com/user-attachments/assets/aef3f556-cadd-45c8-82ba-cab6da4daf45)
*Page to update or delete movies*

### Demo Video:

[Demo video](https://github.com/user-attachments/assets/81940419-a807-4893-a603-dbae9b9092c4)