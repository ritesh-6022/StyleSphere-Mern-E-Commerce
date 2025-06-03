import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md mt-4">
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>{currency} {total}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
