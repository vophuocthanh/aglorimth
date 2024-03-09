function toGoatLatin(sentence) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (vowels.has(word[0].toLowerCase())) {
      words[i] = word + "ma" + "a".repeat(i + 1);
    } else {
      words[i] = word.slice(1) + word[0] + "ma" + "a".repeat(i + 1);
    }
  }

  return words.join(" ");
}
