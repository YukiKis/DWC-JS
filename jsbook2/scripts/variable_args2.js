function printf(format){
  for(var i = 0, len = arguments.length; i < len; i++){
    var pattern = new RegExp("\\{" + (i - 1) + "\\}", "g");
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf("Hello, {0}, {1}", "Kakeya", "Yukki");