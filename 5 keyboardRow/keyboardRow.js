var findWords = function (words) {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const lastRow = ["z", "x", "c", "v", "b", "n", "m"];
  let array = [];
  for(let i =0; i < words.length; i ++) {
words[i].map(word=> {
   if(word.includes(firstRow)) {
    
   }
})
}
  return array;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
