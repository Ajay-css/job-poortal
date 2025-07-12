import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js'
import './config/instrument.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js'

const app = express()

// Connect to Database

await connectDb()

// Sentry Connections and Integrations

app.get("/", function rootHandler(req, res) {
    res.end("Hello world!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)

// Middlewares

app.use(express.json())
app.use(cors())

// Routes

app.get('/', (req, res) => res.send("Express is Working Fine"))

Sentry.setupExpressErrorHandler(app);

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});

// Starting Server with port

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is Running on port : http://localhost:${PORT}`);
});