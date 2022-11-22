import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  PaymentButton,
  PaymentContainer,
  FormContainer,
} from "./styles/Payment";
import { selectCartTotal } from "../../../store/cart/cartSelector";
import { selectCurrentUser } from "../../../store/user/userSelector";

const Payment = () => {
  //Used to actually make request
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPmt, setIsProcessingPmt] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPmt(true);

    //Make fetch request to backend to create payment intent
    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }), // mult by 100 converst to cents value
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPmt(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPmt}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentContainer>
  );
};

export default Payment;
