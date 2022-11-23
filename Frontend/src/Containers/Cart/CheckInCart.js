



export const checkInCart = (item) => {
 let cart  =[]
 if(localStorage.getItem("cart")) 
 cart = JSON.parse(localStorage.getItem("cart"))
 console.log(cart)
 let it = cart.find(o => o.slug === item);
 return it;

}