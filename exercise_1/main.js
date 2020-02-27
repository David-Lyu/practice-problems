decimal = 12;

function binary(decimal){
  var getBinary = [];
  while(decimal >= 0.5){
      if(decimal % 2 === 0){
        getBinary.push(decimal % 2);
        decimal = decimal/2;
      }else{
        getBinary.push(decimal % 2);
        decimal = decimal / 2 - 0.5;
      }
  }
    var reverseBinary = getBinary.reverse();
    var stringBinary = reverseBinary.join("");

  return stringBinary;
}
