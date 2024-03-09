var detectCapitalUse = function (word) {
  for (let i = 0; i < word.split("").length; i++) {
    if (word[i] == word[i].toLowerCase()) {
      return false;
      // The character is lowercase
    }
    if (i === word.length - 1) {
      return true;
    }
  }
};
