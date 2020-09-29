var str = "!'#$%&()+-_|;:,.";
encstr = encodeURIComponent(str);

console.log(encodeURI(str));
console.log(encodeURIComponent(str));
console.log(decodeURIComponent(encstr));
