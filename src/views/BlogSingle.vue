<template>
  <div class="flex justify-center">
    <div class="container">

        <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
            <div class="text-[#C1C8CE]">
                <span class="text-[#33A0FF] mx-2">Home </span>
                /
                <span class="text-[#33A0FF] mx-2" @click="addToCart(productData?.id)">{{ productData?.category }}</span>
                / 
                <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
            </div>
        </div>

        <div class="mt-10 px-4">
            <img src="../assets/image/THUMB.png" alt="" class="w-full">
            <div class="grid grid-cols-1 sm:grid-cols-[8fr_2.5fr] mt-10 gap-x-10">
                <div class="">
                    <div class="font-semibold flex gap-x-6">
                        <div class="text-[#33A0FF]">
                            <span>2</span>
                            Comments
                        </div>
                        <div>
                            Dec 15 2018
                        </div>
                    </div>
                    <h1 class="mt-5 text-[#22262A] text-2xl font-semibold">Dolor sit amet, consectetur adipiscing elit, sed do</h1>
                    <div class="flex flex-col gap-y-8 mt-10">
                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. </p>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                    <img src="../assets/image/lap.png" alt="" class="w-full mt-10">
                    <p class="mt-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <div class="flex gap-x-4 mt-10 items-center border-b border-[#F6F7F8] pb-14">
                        <span class="font-semibold">Share</span>
                        <div class="flex gap-x-3">
                            <i class="pi pi-facebook text-3xl text-[#385C8E] -translate-y-[0.1rem]"></i>
                            <button class="bg-black rounded-full size-[1.9rem]">
                                <i class="pi pi-twitter text-lg text-white"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h1 class="text-4xl text-[#C1C8CE]">Comments</h1>
                        <div class="mt-10">
                            <div class="flex gap-x-6 items-center">
                                <img src="../assets/image/pic.png" alt="">
                                <div class="flex gap-x-3">
                                    <span class="font-semibold">Lisa Doe</span>
                                    <span class="text-[#C1C8CE]">Dec 16 2018</span>
                                </div>
                            </div>
                            <div class="mt-5 flex gap-x-6 items-center">
                                <div class="flex flex-col gap-y-1">
                                    <i class="pi pi-arrow-up text-[#33A0FF] text-center"></i>
                                    118
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:flex flex-col gap-y-5">
                    <h1 class="text-[#C1C8CE] text-2xl">Top Articles</h1>

                    <div class="flex flex-col gap-y-5">
                        <img src="../assets/image/post-thumb.png" alt="">
                        <div class="relative">
                            <img src="../assets/image/img.png" alt="">
                            <p class="absolute bottom-0 px-5 text-[#ffffff] text-[0.5rem] md:text-sm bg-gradient-to-r from-black/20 to-black/70">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore minima veniam, quis nostrum</p>
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>