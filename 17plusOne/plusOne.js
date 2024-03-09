function splitIntoArray(num) {
    return Array.from(String(num), Number);
  }

var plusOne = function(digits) {
    let stringNum = ''
    for(let i =0; i < digits.length; i++) {
        stringNum = stringNum+ digits[i]
    }
    
   return splitIntoArray(Number(stringNum) + 1)
};
 console.log(plusOne([1,2,3]))
 