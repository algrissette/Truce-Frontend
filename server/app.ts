import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'; // 1. Add this import
import cors, { CorsOptions } from 'cors';

import cookieParser from "cookie-parser";

// 2. Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

console.log("🔥 Server starting");

// Import your routes
import userRoutes from './routes/users.js'; // Ensure .js extensions if using pure ESM
import protectedRoutes from './routes/protected.js'
import shopify from './routes/shopify.js'
import products from './routes/products.js'
import cart from "./routes/cart.js"

const app = express();

// 3. Serve static files (Video/PDF)
// This points to the public folder in your root
app.use(express.static(path.join(__dirname, '../public')));

// Middleware
app.use(express.json());

/*
const allowedOrigins = [
  "http://localhost:3000",
  "https://truce-frontend.vercel.app",
  "http://trucelofficiel.shop",
  "https://trucelofficiel.shop",
  "http://www.trucelofficiel.shop",
  "https://www.trucelofficiel.shop",
  "http://45.55.41.164:3000",
  "https://45.55.41.164:3000"
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.includes(origin) ||
      origin.endsWith(".trucelofficiel.shop") ||
      origin.includes("vercel.app");

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log("❌ CORS Blocked Origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
*/

app.use(cors({
  origin: ["https://trucelofficiel.shop", "https://www.trucelofficiel.shop"],
  credentials: true
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(cookieParser());

// Routes
app.use('/protected', protectedRoutes);
app.use('/users', userRoutes);
app.use('/products', products);
app.use('/shopify', shopify);
app.use("/cart", cart);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
// MAKE SURE THIS IS 4000 so it doesn't clash with Next.js (3000)
const PORT: number = parseInt(process.env.BACKEND_PORT || '4000', 10);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log("heyyy");


/* How to run using Docker:

# Push Changes to docker Hub
# 1. Build and Push the Backend (targeting the /server folder)
docker build -t algrissette/trucel-backend:latest ./server ; docker push algrissette/trucel-backend:latest

# 2. Build and Push the Frontend (targeting the root folder)
docker build -t algrissette/trucel-frontend:latest . ; docker push algrissette/trucel-frontend:latest
ssh root@2604:a880:800:14:0:2:dab4:0        

# Pull changes on VM
cd ~/trucel-project && docker compose pull backend && docker compose up -d backend


*/