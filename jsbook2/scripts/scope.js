var scope = "Global";

function getValue() {
  var scope = "local";
  return scope;
}

console.log(getValue());
console.log(scope);
