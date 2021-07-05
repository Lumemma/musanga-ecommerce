import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/checkoutSteps';

export default function Paymentscreen(props) {
    const cart = useSelector((state) => state.cart);
    const { shipping } = cart;
    if (!shipping.address) {
      props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePayment(paymentMethod));
      props.history.push('/placeorder');
    };


    return (
        <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="ideal"
              value="Ideal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="ideal">IDEAL</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
    );
}
