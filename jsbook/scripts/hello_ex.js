let data = {red: "RED", yellow: "YELLOW"};
let proxy = new Proxy{
  data, {
    get(target, prop){
      return prop in target ? taget[prop] : "?";
    }
  }
}