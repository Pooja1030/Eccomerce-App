import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/monogodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// CORS Configuration
const allowedOrigins = [
  'https://eccomerce-app-frontend.onrender.com',
  'https://eccomerce-app-admin.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'],   // Allowed headers
  credentials: true  // Allow credentials if needed
}));

// Middlewares

app.use(express.json());

// API Endpoints

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Test route
app.get('/', (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => console.log('Server started on PORT : ' + port));
