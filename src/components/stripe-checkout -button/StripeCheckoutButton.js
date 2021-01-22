import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I6tq2LKUPM432d1i7IZF8PKwWdeTThZcPFEz8KxLkj4HsE2w5yCm0Kc0oN2OdV6HGe8K9VkASn17DaDffkyJMvA00UNXGbOlU";

  const onToggle = (toggle) => {
    console.log(toggle);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="PayNow"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total Price is $${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToggle}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
