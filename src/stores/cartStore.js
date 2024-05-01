
import { defineStore } from 'pinia';

export const  useCartStore = defineStore('cart', {
    state: () => ({
      products : [{}],
        user: null,
        token: null,
        cartItems :[]

    }),
    getters: {
      countCartItems(){
        return this.cartItems.length;
      }
    },
    actions: {
      addToCart (item){
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if (index === -1){
          this.cartItems.push(item);
        }else{
          this.cartItems[index].quantity += 1;
        }
         
      },

      setUser(user, token) {
        this.user = user;
        this.token = token
      },
    },
  })