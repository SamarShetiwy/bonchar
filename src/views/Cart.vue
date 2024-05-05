<template>
    <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
      <div class="text-[#C1C8CE]">
        <span class="text-[#33A0FF] mx-2">Home </span>
        /
        <span class="text-[#33A0FF] mx-2">{{ item?.title }} </span>
        / 
        <span class="text-[#22262A] mx-2">{{ item?.title }} </span>
      </div>
    </div>
  
    <div class="flex justify-center mt-10 w-full md:w-[80%] mx-auto">
      <table class="w-full lg:min-w-max">
        <thead>
          <tr class="border-b border-[#F1F3F4]">
            <th class="text-start p-4">Product</th>
            <th class="text-start p-4">Price</th>
            <th class="text-start p-4">QTY</th>
            <th class="text-start p-4">Unit price</th>
          </tr>
        </thead>
  
        <tbody class="grid-4">
          <tr v-for="item in store.cartItems" :key="item.product.id">
            <td class="p-4 py-6 flex items-center gap-x-6 ">
              <div class="bg-[#FF6875]/20 rounded-full size-6 flex justify-center items-center">
                <i @click="removeProductFromCart(item.product.id)" class="pi pi-times text-xs text-[#FF4252]"></i>
              </div>
              <div class="flex justify-center gap-5">
               <img class="w-[5rem] " :src="item.product.image" alt="">
              <p class=" hidden sm:block my-10">{{ item.product.title }}</p>
              </div>
            
            </td>
            <td class="p-4 py-6">{{ item.product.price }}</td>
            <td class="p-4 py-6">
              <input type="number" :placeholder="item.quantity" class="mt-4 bg-[#F6F7F8] w-[6rem] py-1 px-3 text-center outline-none">
            </td>
            <td class="p-4 py-6">{{ item.product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <div class="flex justify-center  mt-17 sm:mt-32 ">
      <div class="w-[75%] md:w-[85%] sm:flex  justify-between border-t border-[#F1F3F4] pt-16 md:gap-7">
        <div class="flex px-4 h-fit">
          <input class="w-full md:w-[15rem] py-2 px-4 border" placeholder="Voucher code"/>
          <button class="bg-[#2E90E5] text-[#ffffff] px-6">Redeem</button>
        </div>  
  
        <div>
          <div class="flex flex-col gap-y-6 border-b border-[#F1F3F4] pb-4 md-mt-0 mt-11">
            <div class="flex justify-between gap-x-40">
              <span>Subtotal</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="flex justify-between gap-x-40">
              <span>Shipping fee</span>
              <span>${{ shippingFee }}</span>
            </div>
            <div class="flex justify-between gap-x-40">
              <span>Coupon</span>
              <span>${{ Coupon }}</span>
            </div>
          </div>
          <div class="mt-6 flex justify-between font-semibold text-xl">
            <span>TOTAL</span>
            <span>${{ total }}</span>
          </div>
          <button class="bg-[#2E90E5] w-full mt-6 py-3 text-[#ffffff] rounded">Checkout</button>
        </div>
      </div>
    </div>


  </template>
  
  <script setup>

  import { useCartStore } from'../stores/cartStore';  
  

  const store = useCartStore();

  const calculate  = () => {
  const subtotal = store.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  return Number(subtotal.toFixed(2));
  };

  const subtotal = calculate();
  const shippingFee = 20; 
  const coupon = 0; 
  const total = subtotal + shippingFee - coupon;

  const removeProductFromCart = (productId) => {
    store.removeFromCart(productId);

  }; 
  </script>
  