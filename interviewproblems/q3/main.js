// writing a method that reverses characters in possible nested parens
//always perfect input

//(abc) => (cba)
//(abc(def)) => (abcfed) => (defcba)
//foo(bar(baz)) => foo(barzab) => foobazrab
//use recursive because of nested parenthesis.


//iterate through string // tc n
//if encounter a '(' //recursion if we encounter anothe "("
  //iterate until ')'
  // return the reversed string11

//doesn't work it doubles, has to do with building of string


  const OPEN = '(';
  const CLOSE = ')';
  const revereString = (string:string): string => {
    let output = '';
    for(let i = string.length -1 ; i >= 0; i--){
      output += string[i];
    };
    return output;
  };

const reverseParen = (string:string): string => {
  const reverse = (string: string):string => {
    for(let i = 0; i < string.length; i++) { //n^2? n^m
      if(string[i] === OPEN) {
        return reverse(string.slice(i + 1)); // because of recursion makes it n^m
      }
      if (string[i] === CLOSE) {
        return reverseString(output);
      }:
      output += string[i]
    }
    return reverseString(output);
  }
  let output = '';

  for (let i = 0; i < string.length; i++) { //n
    if(string[i] === OPEN) {
      output += reverse(string.slice(i + 1));
    };
    output += string[i]
  };
  return output;
};
