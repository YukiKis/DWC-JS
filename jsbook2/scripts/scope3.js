var scope = "Global";

function getValue() {
  console.log(scope);
  var scope = "Loval";
  return scope;
}

console.log(scope);
console.log(getValue());
