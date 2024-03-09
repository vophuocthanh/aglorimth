const morseCode = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
    ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
    ".--","-..-","-.--","--.."
  ];
  
  const uniqueMorseRepresentations = (words) => {
    const transformations = new Set();
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let transformation = "";
      
      for (let j = 0; j < word.length; j++) {
        let index = word.charCodeAt(j) - 97;
        transformation += morseCode[index];
      }
      
      transformations.add(transformation);
    }
    
    return transformations.size;
  }
  