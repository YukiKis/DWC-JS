function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error("Wrong number of arguments " + arguments.length);
  }
  console.log(value);
}

try {
  showMessage("Yamada", "Suzuki");
} catch (e) {
  window.alert(e.message);
}
