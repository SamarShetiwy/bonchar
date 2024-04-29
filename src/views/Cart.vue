<template>
      <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
        <div class="text-[#C1C8CE]">
            <span class="text-[#33A0FF] mx-2">Home </span>
            /
            <span class="text-[#33A0FF] mx-2">{{ productData?.category }}</span>
            / 
            <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
        </div>
    </div>

<div class="flex justify-center mt-10 overflow-x-scroll w-[80%] m-auto">
    <table class=" min-w-max">
        <thead>
            <tr class="border-b border-[#F1F3F4]">
                <th class="text-start p-4">Product</th>
                <th class="text-start p-4">Price</th>
                <th class="text-start p-4">QTY</th>
                <th class="text-start p-4">Unit price</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="p-4 py-6 flex items-center gap-x-6 ">
                    <div class="bg-[#FF6875]/20 rounded-full size-6 flex justify-center items-center">
                        <i class="pi pi-times text-xs text-[#FF4252]"></i>
                    </div>
                    <img src="../assets/image/Rectangle 5.png" alt="">
                    <p>Philips Hue 7W BR30 Connected Downlight Lamp </p>
                </td>
                <td class="p-4 py-6">asdas</td>
                <td class="p-4 py-6">
                    <input type="number" placeholder="0" class="mt-4 bg-[#F6F7F8] w-[6rem] py-1 px-3 text-center outline-none">
                </td>
                <td class="p-4 py-6">asdas</td>
            </tr>
            <tr class="border-t border-[#F1F3F4]">
                <td class="p-4 py-6 flex items-center gap-x-6">
                    <div class="bg-[#FF6875]/20 rounded-full size-6 flex justify-center items-center">
                        <i class="pi pi-times text-xs text-[#FF4252]"></i>
                    </div>
                    <img src="../assets/image/Rectangle 5.png" alt="">
                    <p>Philips Hue 7W BR30 Connected Downlight Lamp </p>
                </td>
                <td class="p-4 py-6">asdas</td>
                <td class="p-4 py-6">
                    <input type="number" placeholder="0" class="mt-4 bg-[#F6F7F8] w-[6rem] py-1 px-3 text-center outline-none">
                </td>
                <td class="p-4 py-6">asdas</td>
            </tr>

        </tbody>
    </table>
</div>

<div class="flex justify-center mt-32 ">
    <div class="w-[80%] flex justify-between border-t border-[#F1F3F4] pt-16">
        <div class="flex px-4 h-fit">
            <input class="w-[15rem] py-2 px-4 border" placeholder="Voucher code"/>
            <button class="bg-[#2E90E5] text-[#ffffff] px-6">Redeem</button>
        </div>  

        <div>
            <div class="flex flex-col gap-y-6 border-b border-[#F1F3F4] pb-4">
                <div class="flex justify-between gap-x-40">
                    <span>Subtotal</span>
                    <span>$999</span>
                </div>
                <div class="flex justify-between gap-x-40">
                    <span>Shipping fee</span>
                    <span>$20</span>
                </div>
                <div class="flex justify-between gap-x-40">
                    <span>Coupon</span>
                    <span>No</span>
                </div>
            </div>
            <div class="mt-6 flex justify-between font-semibold text-xl">
                <span>TOTAL</span>
                <span>$118</span>
            </div>
            <button class="bg-[#2E90E5] w-full mt-6 py-3 text-[#ffffff] rounded">Checkout</button>
        </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style>

</style>