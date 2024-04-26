<template>
 
  
</template>

<script setup>
 const products=[];
async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.push(data);
        console.log(products); 
        displayProducts(); 
    } catch (error) {
        console.error(error);
    }
}
getProducts();

  function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productTemplate = `
            <div class="border p-3 flex flex-col items-center gap-y-7">
                <img src="${product.image}"/>
                <div class="flex flex-col items-center gap-y-3">
                    <h1>${product.title}</h1>
                    <div class="flex flex-col gap-y-2">
                        <img src="../assets/image/rate.png"/>
                        <div class="flex gap-x-3">
                            <span class="text-[#FF4858]">$${product.price}</span>
                            <span class="text-[#5D656B] line-through">$${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productTemplate;
    });
}


</script>

<style>

</style>