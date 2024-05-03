import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products:  JSON.parse(localStorage.getItem('cartProducts')) ?? [],
    user: null,
    token: null,
    cartItems: [], // {productId : 33 , quantity : 0}
  }),
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    cartProducts() {
      return this.cartItems.map(item => item.product);
    }
  },
  actions: {
    addToCart(item) {
      let checkExist = this.cartItems.some(searchItem => searchItem.product.id === item.id);

      if (!checkExist) {
        this.cartItems.push({
          product: item,
          quantity: 1
        });
      } else {
        this.cartItems.find(searchItem => searchItem.product.id == item.id).quantity += 1
      }
    },
    async fetchCartData(userId) {
      const response = await fetch(`https://fakeapi.com/cart/${userId}`);
      const data = await response.json();
      localStorage.setItem('cartProducts', JSON.stringify(data.products));
      this.products = data.products;
    },
    setUser(user, token) {
      this.user = user;
      this.token = token;
    },
  },
});