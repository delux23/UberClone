import { POST } from '@/app/api/create-intent/route';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Poor_Story } from 'next/font/google';
import React from 'react'

function CheckoutForm({amount}) {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(elements==null)
            {
                return ;
            }
        const {error:submitError} = await elements.submit();
        if(submitError)
            {
                return;
            }
        const res=await fetch('/api/create-intent',{
            method:'POST',
            body:JSON.stringify({
                amount:amount
            })  
        });

        const secretKey = await res.json();
        console.log(secretKey);

        const{error} = await stripe.confirmPayment({
            clientSecret: secretKey,
            elements,
            confirmParams:{
                return_url: "http://localhost:3000/"
            }
        })
    }
    

    return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
      <h2 className='m-5 font-bold'
      >Amount to Pay: {amount}</h2>
      <form className='max-w-md' onSubmit={handleSubmit}>
        <PaymentElement />
        <button className='w-full
        bg-black text-white p-2 rounded-lg mt-2'>Pay</button>
      </form>
    </div>
  )
}

export default CheckoutForm
