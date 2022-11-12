/**NOTE - Serverless function to handle backend */

require("dotenv").config();
const secretKey = `${process.env.REACT_APP_STRIPE_SECRET_KEY}`;

const stripe = require("stripe")(secretKey);

exports.handler = async (event) => {
  try {
    //Make payment intent
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);

    return { status: 400, body: JSON.stringify({ error }) };
  }
};
