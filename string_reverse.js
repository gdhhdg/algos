/**
 * Created by gunnerhatmaker on 5/19/19.
 */
const string1 = 'Many sugar-sweetened beverages have little to no';
const string2 = 'their harmful health effects have been well-documented.';
const string3 = 'drinking an excessive amount of fruit juice could ';

unshift_reverse = (string) => {
   const stringArray = string.split('');
   let reverseArray = [];
   let letter;
   for (letter in stringArray){
       reverseArray.unshift(stringArray[letter])
   }
   return reverseArray.join('');
};

unshift_reverse(string1);

reverse_method = (string) => {
    return string.split('').reverse().join('');
};

reverse_method(string2);

loop_reverse = (string) => {
  let reverseString = '';
  for (let i = string.length - 1; i >=0; i--){
      reverseString += string[i];
  }
  return reverseString;
};

loop_reverse(string3);
