var reverseWords = function (s) {
  let newString = "";
  for (let i = 0; i < s.split(" ").length; i++) {
    let character = s.split(" ")[i];
    let newCharacter = character.split("").reverse();
    let char = "";
    for (let j = 0; j < newCharacter.length; j++) {
      char = char + newCharacter[j];
    }
    if (i === s.split(" ").length - 1) {
      newString = newString + char;
    } else {
      newString = newString + char + " ";
    }
  }
  return newString;
};
console.log(reverseWords("Let's take LeetCode contest"));
