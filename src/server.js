import express from 'express'
import dotenv from 'dotenv';
import ratelimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js'
import { initDB } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(ratelimiter);
app.use(express.json());

app.use("/api/transactions", transactionsRoute)

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running on http://localhost:${PORT}`)
    })
})
