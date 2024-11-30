### 🛍️ E-commerce Application

A feature-rich, MERN stack-based e-commerce platform for seamless online shopping. This app offers a user-friendly interface built with Tailwind CSS, secure payment processing via Stripe, robust authentication using JWT tokens, and efficient product and order management.

## 🛠 Features

## 🚀 User Features

- **🔐 User Authentication:** Secure user registration and login with JWT tokens.
- **🔎 Browse Products:** View and search for products by categories.
- **🛒 Shopping Cart:** Add, remove, and update quantities of products.
- **📑 Order Placement:** Place orders with Stripe or Cash on Delivery payment options.
- **📜 Order History:** View and manage past orders.
- **🔔 Live Notifications:** Get instant updates on actions via Toastify alerts.
- **📱 Responsive Design:** The app is designed to be fully responsive and accessible on all screen sizes.


## 🧑‍💻 Admin Features

- **Product Management:** Add, edit, and remove products.
- **Order Management:** Update order statuses and view user orders.
- **Analytics Dashboard:** Monitor sales trends and inventory insights.


## 🌟 Additional Highlights
- **Responsive UI:** Built with Tailwind CSS for sleek and adaptive design.
- **API Integration:** Efficient communication between frontend and backend via Axios.
- **Secure Payments:** Integrated with Stripe for seamless payment processing.
- **Notification System:** Real-time alerts using React Toastify.



## 🌐 Live Demo
Explore the live version here:
[E-commerce App](https://eccomerce-app-frontend.onrender.com)

## 🛠️ Tech Stack

| Technology       | Description                                   |
|------------------|-----------------------------------------------|
| **React.js**     | Frontend library for building UI components. |
| **Node.js**      | Runtime for executing JavaScript on the server. |
| **Express.js**   | Backend framework for building REST APIs.    |
| **MongoDB**      | NoSQL database for data storage.             |
| **Tailwind CSS** | Utility-first CSS framework for styling.     |
| **JWT**          | JSON Web Tokens for authentication.          |
| **Axios**        | HTTP client for making API requests.         |
| **Stripe**       | Payment gateway integration.                 |
| **Toastify**     | Library for toast notifications.             |
| **Render**       | Deployment platform for the application.     |



## 🚀 Getting Started

## Prerequisties
Ensure you have the following installed:

- **Node.js:** v16 or later
- **MongoDB:** Running locally or hosted
- **npm:** Node package manager


## 1️⃣ Clone the Repository
Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/Pooja1030/Eccomerce-App.git
   ```
   ```bash
   cd Eccomerce-App
   ```


## 2️⃣ Install Dependencies

  🔧 Backend

  Navigate to the backend directory:
  
   ```bash
   cd backend
   npm install
   ```

  🌟 Frontend
   ```bash
   cd frontend
   npm install
   ```

   3️⃣ Configure Environment Variables
   
   Create a .env file in the backend folder with the following keys:
   
   Backend (/backend/.env)
   ```bash
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   STRIPE_SECRET_KEY=<Your Stripe Secret Key>
   ```

   4️⃣ Run the Application
   Backend
   ```bash
   cd backend
   nodemon index.js
   ```

   Frontend
   In another terminal:
   ```bash
   cd frontend
   npm start
   ```

  5️⃣ Access the Application
  - **Frontend:** http://localhost:3000
  - **Backend:** http://localhost:5000

    
## 🔗 API Endpoints

Authentication

| HTTP Method | Endpoint                | Description                     | Authentication Required |
|-------------|-------------------------|---------------------------------|-------------------------|
| `POST`      | `/api/auth/login`        | Login user                      | No                      |
| `POST`      | `/api/auth/register`     | Register a new user             | No                      |
| `GET`       | `/api/auth/me`           | Get authenticated user details  | Yes                     |
| `POST`      | `/api/auth/logout`       | Logout user                     | Yes   


Product Endpoints

| HTTP Method | Endpoint                | Description                     | Authentication Required |
|-------------|-------------------------|---------------------------------|-------------------------|
| `GET`       | `/api/products`          | Get all products                | No                      |
| `POST`      | `/api/products`          | Add a new product(Admin)               | Yes                     |
| `GET`       | `/api/products/:id`      | Get a specific product by ID    | No                      |
| `PUT`       | `/api/products/:id`      | Update product details(Admin)          | Yes                     |
| `DELETE`    | `/api/products/:id`      | Delete a product by ID(Admin)          | Yes                     |


Orders Endpoints

| HTTP Method | Endpoint                | Description                     | Authentication Required |
|-------------|-------------------------|---------------------------------|-------------------------|
| `POST`      | `/api/orders`            | Create a new order              | Yes                     |
| `GET`       | `/api/orders`            | Get a list of user orders       | Yes                     |
| `GET`       | `/api/orders/:id`        | Get details of a specific order | Yes                     |
| `PUT`       | `/api/orders/:id`        | Update order status             | Yes                     |
| `DELETE`    | `/api/orders/:id`        | Cancel an order                 | Yes                     |



## 🧑‍💻 Deployment
The application is hosted on Render:

- **Frontend:** https://eccomerce-app-frontend.onrender.com
- **Backend:** Backend API hosted with a connection to the MongoDB database.
    
## 🤝 Contribution

Contributions are welcome! Follow these steps to contribute:
  1. Fork the repository.
  2. Create a new branch: git checkout -b feature-name.
  3. Commit changes: git commit -m 'Add feature description'.
  4. Push to your branch: git push origin feature-name.
  5. Open a pull request.


## 🏆 Acknowledgments

| **Tool/Library**  | **Purpose**                                         |
|--------------------|-----------------------------------------------------|
| **React.js**       | Building a responsive and dynamic frontend.        |
| **Node.js**        | Backend server for API management.                 |
| **MongoDB**        | Storing user, product, and order data.             |
| **Stripe**         | Secure and seamless payment integration.           |
| **Tailwind CSS**   | Responsive and modern UI styling.                  |

  

