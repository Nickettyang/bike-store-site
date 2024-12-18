Here’s the updated README without Docker and Axios:

---

# Bike Store E-Commerce

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Overview

The Bike Store E-Commerce project is a full-stack application designed for bike enthusiasts. Built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, this application allows users to browse, select, and purchase bikes seamlessly. The platform offers a user-friendly experience with robust features for both customers and administrators.

## Features

- **User Authentication**: Secure registration and login processes for managing user accounts.
- **Product Browsing**: Users can explore a variety of bikes, complete with detailed descriptions and high-quality images.
- **Shopping Cart**: Users can easily add bikes to their cart, adjust quantities, and view the total price before checkout.
- **Order Management**: Users can view their order history and details.
- **Admin Dashboard**: A dedicated interface for administrators to manage products, including adding, editing, and removing bike listings.
- **Responsive Design**: Fully responsive layout optimized for both mobile and desktop devices, leveraging Tailwind CSS for styling.
- **Search and Filter**: Users can search for bikes by name and filter results based on categories and price.
- **Payment Integration**: Supports payment processing (e.g., with Stripe or PayPal) for a smooth checkout experience.

## Tech Stack

- **Frontend**: 
  - React.js: For building the user interface
  - Redux: For state management
  - React Router: For navigation
  - Tailwind CSS: For modern, utility-first styling

- **Backend**: 
  - Node.js: JavaScript runtime for the server
  - Express.js: Web framework for building APIs
  - MongoDB: NoSQL database for storing user and product data
  - Mongoose: ODM for MongoDB

- **Development Tools**: 
  - Git: Version control
  - Postman: API testing

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js and npm installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Set up a MongoDB database, either locally or via a cloud service like MongoDB Atlas.

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/bike-store-ecommerce.git
   cd bike-store-ecommerce
   ```

2. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

3. **Install backend dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file in the backend directory** with the following content:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. **Start the backend server**:

   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Start the React application**:

   ```bash
   npm start
   ```

4. **Visit the Application**: Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **User Registration**: Users can create an account by providing their details. After registration, they can log in to access the site.
2. **Browsing Products**: Users can navigate through the product listings, filter results, and search for specific bikes.
3. **Shopping Cart Management**: Users can add products to their cart, view the cart, and adjust quantities as needed.
4. **Checkout Process**: Users can complete their purchase using integrated payment options (if set up).
5. **Admin Dashboard**: Admins can log in to manage product listings, view order details, and handle user inquiries.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes and commit them**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to your branch**:

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request** on the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to [your_email@example.com](mailto:your_email@example.com).

---

Let me know if you need any further changes or additions!
