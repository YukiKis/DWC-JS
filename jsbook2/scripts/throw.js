var x = 1;
var y = 0;
try {
  if (y === 0) {
    throw new Error("try to devide by 0");
  }
  var z = x / y;
} catch (e) {
  console.log(e.message);
}
