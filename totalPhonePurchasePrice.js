const TAX_RATE = 3;
const PHONE_PRICE = 1000;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 1200;
let bankBalance = 10000;
let numberOfPhonesPurchased = 0;
let canPurchase = true;

// while (canPurchase) {
//     canPurchase = purchasePhone();
// }

// function purchasePhone() {
//     let priceLimit = PHONE_PRICE;
//     while (priceLimit < SPENDING_THRESHOLD) {
//         priceLimit += priceLimit + ACCESSORY_PRICE;
//     }
//     priceLimit += priceLimit * (TAX_RATE / 100);
//     if (bankBalance > priceLimit) {
//         bankBalance = bankBalance - priceLimit;
//         numberOfPhonesPurchased++;
//         return true;
//     } else {
//         return false;
//     }
// }

let q = 99;
let w = "99";
if (w == q) {
    console.log("loosely equals");
}
if (q === w) {
    console.log("tightly equals");
}

// console.log("You have purchased total of " + numberOfPhonesPurchased + " phones");
// console.log("You have remaining bank balance of: $" + bankBalance.toFixed(2));