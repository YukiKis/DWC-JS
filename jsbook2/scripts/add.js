var dat = new Date(2017, 5, 15, 11, 50);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth + 3);
console.log(dat.toLocaleString());
dat.setMonth(dat.getDate() - 20);
console.log(dat.toLocaleString());
