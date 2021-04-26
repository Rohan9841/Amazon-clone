const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IgVirDuKBO4v6MwVJLWzkv0HoqqlLKtLCYCEG8bNevcRQw1gayw7JUnHRuOaTjcDTMiwSWGXRnHdQeqWlRKwJc6006B7tft2M')

//API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment Request Received BOOM!!! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-7b84c/us-central1/api