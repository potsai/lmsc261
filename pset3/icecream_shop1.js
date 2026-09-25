const priceOfIceCream = 4;

let paymentRecieved = prompt("how much money do you have?");

let isPaymentEnough = paymentRecieved >= priceOfIceCream;

if (isPaymentEnough) {
  let change = paymentRecieved - priceOfIceCream;
  print("thanks! enjoy the ice cream! your change is $" + change);
} else {
  print("not enough cash, please pay at least $" + priceOfIceCream);
}