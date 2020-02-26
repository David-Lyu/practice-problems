decimal = 12;

function binary(decimal){
  var getBinary = "";
  while(decimal >= 0.5){
      if(decimal%2 === 0){
        getBinary += decimal % 2;
        decimal = math.round(decimal/2);
      }else{

      }
  }
  return getBinary
}
