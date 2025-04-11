# BlogoSphere

BlogoSphere is a full-stack blogging application that allows users to create, read, update, and delete blog posts. It also supports user authentication, profile management, and blog reviews. The application is built using the MERN (MongoDB, Express, React, Node.js) stack and incorporates modern UI/UX design principles.

## Features

- **Trending Blogs**:
  - Displays a shuffled list of blogs to highlight trending content.
- **Latest Blogs**:
  - Displays the most recently created blogs in reverse chronological order.
- **Blog Reviews**:
  - Users can leave reviews and ratings for blogs.
  - Reviews include user comments and a star-based rating system.
- **Delete and Edit Blogs**:
  - Authors can delete or edit their blogs directly from the blog details page.
  - Admins have the ability to manage all blogs.
- **Protected Routes**:
  - Certain routes are accessible only to authenticated users.
  - Admin-specific routes for managing users and blogs.
- **Dynamic Blog Views**:
  - Blogs display a random view count for a more engaging user experience.
- **Toast Notifications**:
  - Provides real-time feedback for user actions like login, registration, and blog creation.
- **Error Feedback**:
  - Displays user-friendly error messages for failed actions or invalid inputs.
- **Form Validation**:
  - Ensures all required fields are filled before submission.
- **Image Upload Validation**:
  - Only allows valid image formats (JPEG, JPG, PNG) for blog uploads.
- **Responsive Navigation**:
  - Mobile-friendly navigation menu with dropdowns for user actions.
- **User Authentication Feedback**:
  - Displays welcome messages upon successful login or registration.
- **SEO Optimization**:
  - Includes meta tags and structured data for better search engine visibility.
- **Custom Footer**:
  - Displays author credits and copyright information.
- **Dark Mode Support** (Planned):
  - Future enhancement to provide a dark mode for better accessibility.

### General Features

- **Responsive Design**: Fully responsive UI built with Chakra UI and TailwindCSS for a seamless experience across devices.
- **Modern UI**: Clean and user-friendly interface with intuitive navigation.

### Backend Features

- **User Authentication**:
  - Secure user registration and login using JWT (JSON Web Tokens).
  - Passwords are hashed using bcrypt for enhanced security.
- **Role-Based Access Control**:
  - Admin users have additional privileges, such as managing all blogs.
- **Blog Management**:
  - Create, read, update, and delete blogs.
  - Only authors or admins can edit or delete blogs.
- **Review System**:
  - Users can add reviews and ratings to blogs.
  - Average ratings are dynamically calculated and displayed.
- **Image Uploads**:
  - Supports image uploads using Multer.
  - Images are stored in the `uploads/` directory.
- **Error Handling**:
  - Comprehensive error handling with custom middleware for 404 and server errors.

### Frontend Features

- **Home Page**:
  - Displays all blogs with options to view trending and latest blogs.
- **Blog Details Page**:
  - Displays detailed information about a blog, including reviews and ratings.
  - Allows users to add reviews and ratings.
- **User Profile**:
  - Users can update their profile information, including passwords.
- **Blog Creation and Editing**:
  - Authenticated users can create new blogs or edit their existing ones.
- **Authentication Pages**:
  - Login and registration pages with form validation and error messages.

### Additional Features

- **State Management**:
  - Redux is used for managing application state.
- **API Integration**:
  - Axios is used for making API requests to the backend.
- **Toast Notifications**:
  - React Toastify is used for displaying success and error messages.
- **SEO-Friendly**:
  - Includes meta tags and a robots.txt file for better search engine optimization.

## Tech Stack

### Frontend

- React
- Chakra UI
- TailwindCSS
- Redux
- React Router

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose ORM)

### Dev Tools

- Nodemon
- Concurrently
- Redux DevTools

## Folder Structure

```
BlogoSphere/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── seeder.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── screens/
│   │   ├── store.js
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
├── uploads/
├── .env
├── .gitignore
└── package.json
```

## How to Run

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd BlogoSphere
   ```
2. Install dependencies:
   ```bash
   npm install
   npm run client-install
   ```
3. Set up environment variables in `.env`:
   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   PORT=5000
   ```
4. Seed the database (optional):
   ```bash
   npm run data:import
   ```
5. Start the application:
   ```bash
   npm run dev
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Future Enhancements

- Add pagination for blogs.
- Implement a search feature for blogs.
- Add social media sharing options.
- Enhance the review system with upvotes/downvotes.

## Author

Vedang Kanade

## Contributing

Contributions are welcome! If you'd like to contribute to BlogoSphere, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request and describe your changes.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
