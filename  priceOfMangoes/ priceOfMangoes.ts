const mango = (quantity: number, price: number): number => {
   let totalPrice = 0;
   for (let i = 1; i <= quantity; i++) {
      if(i % 3 === 0) continue;
       totalPrice += price
   }
   return totalPrice
}

