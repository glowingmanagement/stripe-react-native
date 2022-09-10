import express from "express";
import Stripe from "stripe";
require("dotenv").config();

import Stripe from "stripe";

const stripe = Stripe(process.env.SECRET_KEY, { apiVersion: "2022-08-01" });

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await Stripe.PaymentIntentsResource.create({
      amount: 1099,
      currency: "gbp",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
});
