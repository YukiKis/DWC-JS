var p = /http(s)?:\/\/([\w-]+\.)+[\w+]+(\/[\w- .\/%&?=]*)?/gi;
var str = "Support site: http://www.wings.msn.to/ ";
str += "Sample site : HTTP://wwwweb-deli.com/ !";

console.log(str.search(p));
