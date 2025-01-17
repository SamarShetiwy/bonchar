import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products:  [],
    user: null,
    token: null,
    cartItems:  JSON.parse(localStorage.getItem('cartProducts'))  || [], 
  }),
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
   
  },
  actions: {
    addToCart(item) {
      let checkSearch = this.cartItems.some(searchItem => searchItem.product.id === item.id);

      if (!checkSearch) {
        this.cartItems.push({
          product: item,
          quantity: 1
        });
      } else {
        this.cartItems.find(searchItem => searchItem.product.id == item.id).quantity += 1
      }
      localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
    },
      removeFromCart(productId) {
       this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
       localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
    },
    // async fetchCartData(userId) {
    //   const response = await fetch(`https://fakeapi.com/cart/${userId}`);
    //   const data = await response.json();
    //   localStorage.setItem('cartProducts', JSON.stringify(data.products));
    //   this.products = data.products;
    // },
    // setUser(user, token) {
    //   this.user = user;
    //   this.token = token;
    // },
  },
});