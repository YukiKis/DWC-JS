let pet = {
  type: "スノーホワイトーハムスター",
  name: "Kira",
  description: {
    birth: "1014-01-22",
  },
};

let pet2 = {
  name: "Yamada Kira",
  color: "white",
  description: {
    food: "seed",
  },
};

let pet3 = {
  weight: 42,
  photo: "http://www.wings.msn.to/img/ham/jpg",
};

Object.assign(pet, pet2, pet3);
console.log(pet);
