let book = { title: "JAVA REFERENCE", price: 2680, publish: "AAA" };
let { price, title, memo = "NONE" } = book;

console.log(title);
console.log(price);
console.log(memo);
