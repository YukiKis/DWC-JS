var p = /http(s)?:\/\/([\w-]+\.)+[\w+]+(\/[\w- .\/%&?=]*)?/gi;
var str = "Support site: http://www.wings.msn.to/ ";
str += "Sample site : HTTP://wwwweb-deli.com/ !";
var result = p.exec(str);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}
