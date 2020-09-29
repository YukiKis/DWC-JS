var p = /http(s)?:\/\/([\w-]+\.)+[\w+]+(\/[\w- .\/%&?=]*)?/;
var str = "Support site is http://www.wings.msn.to/";
document.write(str.replace(p, "<a href='$1'>$1</a>"));
