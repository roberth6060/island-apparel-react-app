import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { PaymentContainer, FormContainer } from "./styles/Payment";

const Payment = () => {
  //Used to actually make request
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    //Make fetch request to backend to create payment intent
    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    console.log("%cResponse", "Color:green;", response);
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentContainer>
  );
};

export default Payment;
