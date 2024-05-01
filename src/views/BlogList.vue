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

    <div class="flex justify-center mt-10 px-4">
        <div class="container grid grid-cols-1 md:grid-cols-[8fr_2.5fr] gap-x-16">
            <div class="flex flex-col gap-y-20">
                <div>
                    <img src="../assets/image/Rectangle 14.png" alt="" class="w-full">
                    <div class="flex gap-x-8 font-semibold mt-7 text-sm">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#33A0FF] text-xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <p class="mt-5 text-sm">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                </div>

                <div>
                    <img src="../assets/image/sdgsdgsd.png" alt="" class="w-full">
                    <div class="flex gap-x-8 font-semibold mt-7 text-sm">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#33A0FF] text-xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <p class="mt-5 text-sm">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                </div>

                <div>
                    <img src="../assets/image/dfsgdfsg.png" alt="" class="w-full">
                    <div class="flex gap-x-8 font-semibold mt-7 text-sm">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#33A0FF] text-xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <p class="mt-5 text-sm">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                </div>

                <div>
                    <img src="../assets/image/asafdasfwaq.png" alt="" class="w-full">
                    <div class="flex gap-x-8 font-semibold mt-7 text-sm">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#33A0FF] text-xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <p class="mt-5 text-sm">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                </div>

                <div>
                    <img src="../assets/image/asfster.png" alt="" class="w-full">
                    <div class="flex gap-x-8 font-semibold mt-7 text-sm">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#33A0FF] text-xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <p class="mt-5 text-sm">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                </div>
            </div>

            <div class="hidden md:flex flex-col gap-y-5">
                <h1>Top Articles</h1>

                <div class="flex flex-col gap-y-5">
                    <img src="../assets/image/post-thumb.png" alt="">
                    <div class="relative">
                        <img src="../assets/image/img.png" alt="">
                        <p class="absolute bottom-0 px-5 text-[#ffffff] text-[0.5rem] lg:text-sm bg-gradient-to-r from-black/20 to-black/70">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore minima veniam, quis nostrum</p>
                    </div>
                    <img src="../assets/image/fgerw.png" alt="">
                </div>

                <div class="mt-10">
                    <h1 class="text-[#C1C8CE]">TAGS</h1>

                    <div class="flex flex-wrap gap-2 mt-3">
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Promo</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Holidays</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">gift</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Christams</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Giveaway</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Tips</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">New Year</button>
                    </div>
                </div>

                <div class="mt-10 bg-[#C1C8CE] px-5 py-8 flex flex-col gap-y-5">
                    <h1 class="text-xl font-bold">Go Pro Hero 6</h1>
                    <p class="text-sm">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                    <h2 class="text-xl text-[#22262A]">$399</h2>
                    <img src="../assets/image/50051823_540375.png" alt="">
                </div>
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