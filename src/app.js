// app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './router.js';
import rateLimit from 'express-rate-limit';

// 2. Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});


const corsOptions = {
  origin: ['https://kyawmgmglwin.site','http://kyawmgmglwin.site', 'https://www.kyawmgmglwin.site', , 'http://www.kyawmgmglwin.site' ,'http://localhost:5173'], 
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use("/api/v1", limiter, router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});