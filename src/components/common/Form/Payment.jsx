import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { PaymentContainer, FormContainer } from "./styles/Payment";

const Payment = () => {
  //Used to actually make request
  const stripe = useStripe();

  const elements = useElements();

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    //Make fetch request to backend to create payment intent
  };

  return (
    <PaymentContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentContainer>
  );
};

export default Payment;
