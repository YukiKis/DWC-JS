let book = {
  title: "Java reference",
  publish: "AAA",
  price: 2000,
  other: { keywd: "Java SE 8", logo: "logo.png" },
};
let {
  title,
  price,
  other: { keywd },
} = book;
console.log(title);
console.log(price);
console.log(keywd);
